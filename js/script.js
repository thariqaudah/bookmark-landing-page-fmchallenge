// Features tab
const tabNavLinks = document.querySelectorAll('.tab-nav-link')
const featuresInner = document.querySelectorAll('.feature-inner')

tabNavLinks[0].classList.add('active')
featuresInner[0].style.display = 'grid'

tabNavLinks.forEach(tab => {
	tab.addEventListener('click', e => {
		e.preventDefault()
		featuresInner.forEach(featureInner => (featureInner.style.display = 'none'))
		tabNavLinks.forEach(tab => tab.classList.remove('active'))

		tab.classList.add('active')
		const navId = tab.id

		if (navId === 'navBookmarking') {
			document.querySelector('#featureBookmarking').style.display = 'grid'
		} else if (navId === 'navSearching') {
			document.querySelector('#featureSearcing').style.display = 'grid'
		} else {
			document.querySelector('#featureSharing').style.display = 'grid'
		}
	})
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
let message

form.addEventListener('submit', e => {
	e.preventDefault()

	message = null

	const inputText = form.firstElementChild.value
	const isMatch = inputText.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)

	if (!isMatch) {
		message = "Whoops, make sure it's an email"
		return
	}
})
