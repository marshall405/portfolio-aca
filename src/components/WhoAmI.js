import React from 'react'

export default function WhoAmI() {
    const titles = ['Full Stack Developer', 'Software Engineer', 'Web Developer', '???????????????']
    let idx = 0

    function setTitle() {
        let p = document.getElementById('whoAmI')
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
        let p = document.getElementById('whoAmI')
        let settingTitle = setInterval(() => {
            p.innerHTML = p.innerHTML.slice(0, p.innerHTML.length - 1)
            if (p.innerHTML.length === 0) {
                clearInterval(settingTitle)
                setTitle()
            }
        }, 20)
    }
    setTimeout(setTitle)
    return (
        <p id="whoAmI" style={{ height: '20px' }}>

        </p>
    )
}
