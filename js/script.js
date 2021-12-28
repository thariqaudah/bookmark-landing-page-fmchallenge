// Mobile Navigation

// Features tab
const tabNav = document.querySelector('.tab-nav')

tabNav.addEventListener('click', e => {
	e.preventDefault()

	const element = e.target

	if (element.classList.contains('tab-nav-link')) {
		// Active elemet
		const activeNav = document.querySelector('.tab-nav-link.active')
		const activeFeature = document.querySelector('.feature-inner.active')

		// Remove active class from active el
		activeNav.classList.remove('active')
		activeFeature.classList.remove('active')

		// Re-add active class for new el
		const href = element.getAttribute('href')
		const selectedFeature = document.querySelector(href)
		element.classList.add('active')
		selectedFeature.classList.add('active')
	}
})

// Accordion
const accordionQuestions = document.querySelectorAll('.faq-question')

accordionQuestions.forEach(question => {
	question.addEventListener('click', () => {
		question.classList.toggle('accordion-active')

		const height = question.nextElementSibling.scrollHeight
		if (question.classList.contains('accordion-active')) {
			question.nextElementSibling.style.maxHeight = `${height}px`
			question.nextElementSibling.style.paddingTop = '24px'
		} else {
			question.nextElementSibling.style.maxHeight = 0
			question.nextElementSibling.style.paddingTop = 0
		}
	})
})

// Contact Form
const form = document.querySelector('.form')
const inputContainer = form.firstElementChild
const inputText = inputContainer.firstElementChild

form.addEventListener('submit', e => {
	e.preventDefault()

	inputContainer.classList.remove('error')

	const isMatch = inputText.value.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)

	if (!isMatch) {
		inputContainer.classList.add('error')
		return
	}

	inputText.value = ''
})
