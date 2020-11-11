import React from 'react'

export default function WhoAmI() {
    const titles = ['Full Stack Developer', 'Software Engineer', 'Web Developer', 'Gamer']
    let idx = 0
    let p = ""
    function setTitle() {
        let title = titles[idx]
        let strIdx = 0
        let settingTitle = setInterval(() => {
            p.innerHTML += title[strIdx]
            strIdx += 1
            if (strIdx >= title.length) {
                clearInterval(settingTitle)
                idx += 1
                if (idx >= titles.length) {
                    idx = 0
                }
                setTimeout(clearTitle, 1000)
            }
        }, 30)
    }

    function clearTitle() {
        let settingTitle = setInterval(() => {
            p.innerHTML = p.innerHTML.slice(0, p.innerHTML.length - 1)
            if (p.innerHTML.length === 0) {
                clearInterval(settingTitle)
                setTitle()
            }
        }, 20)
    }

    setTimeout(() => p = document.getElementById('whoAmI')) // ensures that p element is created before grabbing it
    setTimeout(setTitle)
    return (
        <p id="whoAmI" style={{ height: '20px' }}>

        </p>
    )
}
