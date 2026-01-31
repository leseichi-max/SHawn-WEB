import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    // Python 파일 무시
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/*.py', '**/__pycache__', '**/venv', '**/.venv']
    }
    return config
  }
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default withMDX(nextConfig)
