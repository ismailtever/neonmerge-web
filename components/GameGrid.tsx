'use client'

export default function GameGrid() {
  const gridSize = 8
  const colors = [
    '#38bdf8', // primary
    '#f472b6', // accent
    '#4ade80', // success
    '#fbbf24', // warning
  ]

  // Generate random grid with some blocks
  const generateGrid = () => {
    const grid = []
    for (let i = 0; i < gridSize * gridSize; i++) {
      // Create some blocks with varying sizes (2x2, 3x3, etc.)
      const shouldHaveBlock = Math.random() > 0.6
      if (shouldHaveBlock) {
        grid.push({
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() > 0.7 ? 2 : 1,
        })
      } else {
        grid.push(null)
      }
    }
    return grid
  }

  const grid = generateGrid()

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="grid grid-cols-8 gap-1 p-4 bg-bg/50 rounded-lg border border-primary/30">
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const block = grid[index]
          const row = Math.floor(index / gridSize)
          const col = index % gridSize

          if (block) {
            return (
              <div
                key={index}
                className="aspect-square rounded-sm animate-pulse-slow"
                style={{
                  backgroundColor: block.color,
                  boxShadow: `0 0 10px ${block.color}, 0 0 20px ${block.color}`,
                }}
              />
            )
          }
          return (
            <div
              key={index}
              className="aspect-square rounded-sm bg-gray-800/30 border border-gray-700/30"
            />
          )
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

