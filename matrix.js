document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("matrix-canvas")
    const ctx = canvas.getContext("2d")
  
   
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
  
    const drops = []
  
   
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }
  
    function draw() {
      
      ctx.fillStyle = "rgba(10, 14, 23, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
  
      ctx.fillStyle = "#0f0"
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(text, x, y)
  
        
        if (Math.random() > 0.975) {
          ctx.fillStyle = "#fff" 
          ctx.fillText(text, x, y)
          ctx.fillStyle = "#0f0" 
    }
  
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
  
       
        drops[i]++
      }
    }
  
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
  
      const newColumns = Math.floor(canvas.width / fontSize)
  
      if (newColumns > columns) {
       
        for (let i = columns; i < newColumns; i++) {
          drops[i] = Math.random() * -100
        }
      } else {
    
        drops.length = newColumns
      }
    })
  
    
    setInterval(draw, 33)
  })
  
  