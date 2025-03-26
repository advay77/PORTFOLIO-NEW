
document.addEventListener("DOMContentLoaded", () => {
   
    const typingText = document.getElementById("typing-text")
    const phrases = ["Full Stack Developer", "Competitive Programmer", "Problem Solver", "Tech Enthusiast"]
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100
  
    function typeEffect() {
      const currentPhrase = phrases[phraseIndex]
  
      if (isDeleting) {
       
        typingText.textContent = currentPhrase.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50
      } else {
     
        typingText.textContent = currentPhrase.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 100
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
      
        isDeleting = true
        typingSpeed = 1000
      } else if (isDeleting && charIndex === 0) {
       
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        typingSpeed = 500
      }
  
      setTimeout(typeEffect, typingSpeed)
    }
  
    setTimeout(typeEffect, 1000)
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          })
  
          document.querySelectorAll("nav ul li a").forEach((link) => {
            link.classList.remove("active")
          })
          this.classList.add("active")
        }
      })
    })
  
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
  
      const sections = document.querySelectorAll(".section")
      let currentSection = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = "#" + section.getAttribute("id")
        }
      })
  
      document.querySelectorAll("nav ul li a").forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === currentSection) {
          link.classList.add("active")
        }
      })
    })

    const hamburger = document.querySelector(".hamburger")
    const nav = document.querySelector("nav")
  
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active")
      nav.classList.toggle("active")
    })
  
    document.querySelectorAll("nav ul li a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        nav.classList.remove("active")
      })
    })
  
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        if (!name || !email || !subject || !message) {
          alert("Please fill in all fields")
          return
        }
  
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`)
  
        contactForm.reset()
      })
    }
  
    const revealElements = document.querySelectorAll(".section")
  
    function revealOnScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementTop < windowHeight - 100) {
          element.classList.add("revealed")
        }
      })
    }
  
    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() 
  })
  
  
