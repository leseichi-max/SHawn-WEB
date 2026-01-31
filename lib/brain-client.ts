/**
 * Brain WebSocket Client
 * =====================
 * 
 * Real-time connection to SHawn-Bot WebSocket server
 * Manages brain status updates, cartridge switching, and analysis results
 * 
 * Usage:
 *   import { brainClient } from '@/lib/brain-client';
 *   
 *   // Connect
 *   await brainClient.connect();
 *   
 *   // Subscribe to updates
 *   brainClient.subscribe('brain_status', (status) => {
 *     console.log('Brain status:', status);
 *   });
 * 
 * Features:
 * - Auto-reconnect with exponential backoff
 * - Type-safe message handling
 * - Multiple subscription support
 * - Connection state management
 */

// ============================================================================
// Types
// ============================================================================

export type BrainMessageType = 
  | 'connection_established'
  | 'brain_status'
  | 'cartridge_switch'
  | 'analysis_result'
  | 'metric_update'
  | 'pong';

export interface BrainMessage {
  type: BrainMessageType;
  payload?: any;
  message?: string;
  timestamp: string;
}

export interface BrainstemStatus {
  ethics: number;
  ethics_status: string;
  reasoning: number;
  reasoning_status: string;
  awareness: number;
  awareness_status: string;
}

export interface LimbicStatus {
  memory: number;
  memory_status: string;
  emotion: number;
  emotion_status: string;
  values: number;
  values_status: string;
}

export interface NeocortexStatus {
  decision_making: number;
  decision_status: string;
  learning: number;
  learning_status: string;
  innovation: number;
  innovation_status: string;
}

export interface CartridgeInfo {
  active: string;
  status: string;
  available: string[];
}

export interface BrainStatus {
  brainstem: BrainstemStatus;
  limbic: LimbicStatus;
  neocortex: NeocortexStatus;
  cartridge: CartridgeInfo;
  overall_health: number;
  system_status: string;
  timestamp: string;
}

export interface AnalysisResult {
  stock: string;
  dual_quant_score: number;
  recommendation: string;
  timestamp: string;
}

export interface MetricUpdate {
  [key: string]: number;
}

// ============================================================================
// Connection State
// ============================================================================

export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  RECONNECTING = 'reconnecting',
  ERROR = 'error',
}

// ============================================================================
// Brain WebSocket Client
// ============================================================================

export class BrainWebSocketClient {
  private ws: WebSocket | null = null;
  private url: string;
  private state: ConnectionState = ConnectionState.DISCONNECTED;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private reconnectDelay: number = 3000;
  private messageListeners: Map<BrainMessageType, Set<(data: any) => void>> = new Map();
  private stateListeners: Set<(state: ConnectionState) => void> = new Set();
  private pingInterval: NodeJS.Timeout | null = null;
  
  constructor(url: string = 'ws://localhost:8765') {
    this.url = url;
  }
  
  /**
   * Connect to WebSocket server
   */
  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.state === ConnectionState.CONNECTED) {
        resolve();
        return;
      }
      
      try {
        this.setState(ConnectionState.CONNECTING);
        
        this.ws = new WebSocket(this.url);
        
        this.ws.onopen = () => {
          console.log('✅ Connected to Brain WebSocket');
          this.reconnectAttempts = 0;
          this.setState(ConnectionState.CONNECTED);
          
          // Start ping interval to keep connection alive
          this.startPingInterval();
          
          resolve();
        };
        
        this.ws.onmessage = (event) => {
          try {
            const message: BrainMessage = JSON.parse(event.data);
            this.handleMessage(message);
          } catch (error) {
            console.error('Error parsing message:', error);
          }
        };
        
        this.ws.onerror = (event) => {
          console.error('❌ WebSocket error:', event);
          this.setState(ConnectionState.ERROR);
          reject(new Error('WebSocket connection error'));
        };
        
        this.ws.onclose = () => {
          console.log('⚠️ WebSocket disconnected');
          this.setState(ConnectionState.DISCONNECTED);
          this.stopPingInterval();
          this.attemptReconnect();
        };
        
      } catch (error) {
        console.error('Error creating WebSocket:', error);
        this.setState(ConnectionState.ERROR);
        reject(error);
      }
    });
  }
  
  /**
   * Disconnect from WebSocket server
   */
  disconnect(): void {
    this.stopPingInterval();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.setState(ConnectionState.DISCONNECTED);
    console.log('✅ Disconnected from Brain WebSocket');
  }
  
  /**
   * Subscribe to a message type
   * Returns unsubscribe function
   */
  subscribe(type: BrainMessageType, callback: (data: any) => void): () => void {
    if (!this.messageListeners.has(type)) {
      this.messageListeners.set(type, new Set());
    }
    this.messageListeners.get(type)!.add(callback);
    
    // Return unsubscribe function
    return () => {
      this.messageListeners.get(type)?.delete(callback);
    };
  }
  
  /**
   * Subscribe to connection state changes
   */
  subscribeToState(callback: (state: ConnectionState) => void): () => void {
    this.stateListeners.add(callback);
    return () => {
      this.stateListeners.delete(callback);
    };
  }
  
  /**
   * Get current connection state
   */
  getState(): ConnectionState {
    return this.state;
  }
  
  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.state === ConnectionState.CONNECTED && this.ws?.readyState === WebSocket.OPEN;
  }
  
  /**
   * Send message to server (if needed)
   */
  send(message: any): void {
    if (!this.isConnected()) {
      console.warn('⚠️ Not connected to WebSocket');
      return;
    }
    
    try {
      this.ws?.send(JSON.stringify(message));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  
  /**
   * Request cartridge switch
   */
  requestCartridgeSwitch(cartridge: string): void {
    this.send({
      type: 'request_cartridge_switch',
      cartridge: cartridge,
    });
  }
  
  // ========================================================================
  // Private Methods
  // ========================================================================
  
  private setState(newState: ConnectionState): void {
    if (this.state !== newState) {
      this.state = newState;
      console.log(`🔄 State changed: ${newState}`);
      this.stateListeners.forEach(listener => listener(newState));
    }
  }
  
  private handleMessage(message: BrainMessage): void {
    const callbacks = this.messageListeners.get(message.type);
    if (callbacks) {
      callbacks.forEach(cb => {
        try {
          cb(message.payload || message);
        } catch (error) {
          console.error(`Error in callback for ${message.type}:`, error);
        }
      });
    }
  }
  
  private attemptReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      this.setState(ConnectionState.RECONNECTING);
      const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
      console.log(`⏳ Reconnecting... (${this.reconnectAttempts}/${this.maxReconnectAttempts}) in ${delay}ms`);
      setTimeout(() => {
        this.connect().catch(() => {
          // Continue attempting to reconnect
        });
      }, delay);
    } else {
      console.error('❌ Max reconnection attempts reached');
      this.setState(ConnectionState.ERROR);
    }
  }
  
  private startPingInterval(): void {
    this.pingInterval = setInterval(() => {
      if (this.isConnected()) {
        this.send({ type: 'ping' });
      }
    }, 30000); // Ping every 30 seconds
  }
  
  private stopPingInterval(): void {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let clientInstance: BrainWebSocketClient | null = null;

export function getBrainClient(url?: string): BrainWebSocketClient {
  if (!clientInstance) {
    clientInstance = new BrainWebSocketClient(url || 'ws://localhost:8765');
  }
  return clientInstance;
}

export const brainClient = getBrainClient();

// ============================================================================
// React Hook (Optional)
// ============================================================================

import { useEffect, useState, useCallback } from 'react';

export function useBrainStatus() {
  const [status, setStatus] = useState<BrainStatus | null>(null);
  const [connected, setConnected] = useState(false);
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.DISCONNECTED);
  
  useEffect(() => {
    const client = getBrainClient();
    
    // Connect to WebSocket
    client.connect().catch(err => {
      console.error('Failed to connect:', err);
    });
    
    // Subscribe to state changes
    const unsubscribeState = client.subscribeToState((state) => {
      setConnectionState(state);
      setConnected(state === ConnectionState.CONNECTED);
    });
    
    // Subscribe to brain_status updates
    const unsubscribeBrainStatus = client.subscribe('brain_status', (data) => {
      setStatus(data);
    });
    
    // Set initial state
    setConnected(client.isConnected());
    setConnectionState(client.getState());
    
    return () => {
      unsubscribeState();
      unsubscribeBrainStatus();
      // Don't disconnect on unmount - keep connection alive
      // client.disconnect();
    };
  }, []);
  
  return {
    status,
    connected,
    connectionState,
    client: getBrainClient(),
  };
}

export function useBrainAnalysis() {
  const [analysis, setAnalysis] = useState<Map<string, AnalysisResult>>(new Map());
  
  useEffect(() => {
    const client = getBrainClient();
    
    const unsubscribe = client.subscribe('analysis_result', (data) => {
      if (data.stock) {
        setAnalysis(prev => {
          const newMap = new Map(prev);
          newMap.set(data.stock, data);
          return newMap;
        });
      }
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
  
  return analysis;
}

export function useCartridgeSwitch() {
  const [activeCartridge, setActiveCartridge] = useState<string>('biology');
  
  const switchCartridge = useCallback((cartridge: string) => {
    const client = getBrainClient();
    client.requestCartridgeSwitch(cartridge);
  }, []);
  
  useEffect(() => {
    const client = getBrainClient();
    
    const unsubscribe = client.subscribe('cartridge_switch', (data) => {
      if (data.cartridge) {
        setActiveCartridge(data.cartridge);
      }
    });
    
    // Also subscribe to brain_status updates (which include cartridge info)
    const unsubscribeBrain = client.subscribe('brain_status', (data) => {
      if (data.cartridge?.active) {
        setActiveCartridge(data.cartridge.active);
      }
    });
    
    return () => {
      unsubscribe();
      unsubscribeBrain();
    };
  }, []);
  
  return {
    activeCartridge,
    switchCartridge,
  };
}
