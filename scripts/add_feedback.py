"""
Bridge script for SHawn-WEB to add feedback to UnifiedBrain
"""
import sys
import os

# Add SHawn-BOT to path to use FeedbackManager
curr_dir = os.path.dirname(os.path.abspath(__file__))
# SHawn-WEB/scripts -> SHawn-BOT/engines
sys.path.append(os.path.abspath(os.path.join(curr_dir, "../../SHawn-BOT")))

from engines.learning.feedback_manager import FeedbackManager

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 add_feedback.py <interaction_id> <score> [comment]")
        sys.exit(1)

    interaction_id = sys.argv[1]
    score = int(sys.argv[2])
    comment = sys.argv[3] if len(sys.argv) > 3 else None

    manager = FeedbackManager()
    success = manager.add_feedback(interaction_id, score, comment)
    
    if success:
        print("Feedback recorded successfully")
        # Trigger evolution if possible
        from engines.learning.learning_core import LearningCore
        core = LearningCore(manager)
        core.evolve()
    else:
        print(f"Error: Interaction {interaction_id} not found")
        sys.exit(1)

if __name__ == "__main__":
    main()
