import React from 'react'

export default function WhoAmI() {
    const titles = ['Full Stack Developer', 'Software Engineer', 'Web Developer', '???????????????']
    let idx = 0

    function setTitle() {
        let p = document.getElementById('whoAmI')
        p.innerText = ""
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
                setTimeout(setTitle, 1000)
            }
        }, 30)
    }
    setTimeout(setTitle)
    return (
        <p id="whoAmI" style={{ height: '20px' }}>

        </p>
    )
}
