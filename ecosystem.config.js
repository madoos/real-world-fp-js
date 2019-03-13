module.exports = {
  apps: [
    {
      name: "BACK",
      script: "npm",
      args: "start",
      cwd: "./back"
    },
    {
      name: "FRONT",
      script: "npm",
      args: "start",
      cwd: "./front"
    },
    {
      name: "SLIDERS",
      script: "npm",
      args: "run slides:start"
    }
  ]
}
