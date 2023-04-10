// variables
const members = [
    {
        id: 1,
        name: 'Jhope',
        job: 'Even when this rain stops, when clouds go away, I stand here, just the same.',
        img: './images/jhope.jpeg',
        text: 'Jung Ho-seok (Korean: 정호석; born February 18, 1994), better known by his stage name J-Hope (stylized as j-hope), is a South Korean rapper, singer-songwriter, dancer, and record producer. He made his debut as a member of South Korean boy band BTS in 2013, under Big Hit Entertainment.'
    },
    {
        id: 2,
        name: 'Jungkook',
        job: 'Effort makes you. So practice. You may get depressed, but it\'s evidence that you are doing good.',
        img: './images/jk.jpeg',
        text: 'Jeon Jung-kook (Korean: 전정국; born September 1, 1997), known mononymously as Jungkook (stylized as Jung Kook), is a South Korean singer. He is a member and vocalist of the South Korean boy band BTS.'
    },
    {
        id: 3,
        name: 'Taehyung',
        job: 'Don\'t be trapped in someone else\'s dream.',
        img: './images/tae.jpeg',
        text: 'Kim Tae-hyung (Korean: 김태형; born December 30, 1995),[1] also known professionally as V, is a South Korean singer and member of the boy band BTS.'
    },
    {
        id: 4,
        name: 'Jimin',
        job: 'Go on your path, even if you live for a day.',
        img: './images/jm.jpeg',
        text: 'Park Ji-min (Korean: 박지민; born October 13, 1995), known mononymously as Jimin, is a South Korean singer and dancer. In 2013, he made his debut as a member of the South Korean boy band BTS, under the record label Big Hit Entertainment.'
    },
    {
        id: 5,
        name: 'Namjoon',
        job: 'I\'m like a surfer, first you just paddle and fall off the board but as time goes by you can stand up on the bigger waves.',
        img: './images/rm.jpeg',
        text: 'Kim Nam-joon (Korean: 김남준; born September 12, 1994), known professionally as RM (formerly Rap Monster), is a South Korean rapper, singer-songwriter and record producer. He is the leader of South Korean boy band BTS.'
    },
    {
        id: 6,
        name: 'Suga',
        job: 'Life is tough, and things don\'t always work out well, but we should be brave and go on with our lives',
        img: './images/suga.jpeg',
        text: 'Min Yoon-gi (Korean: 민윤기; born March 9, 1993), known professionally by his stage names Suga (stylized in all caps) and Agust D,[A] is a South Korean rapper, songwriter and record producer. Under Big Hit Music, he debuted as a member of the South Korean boy band BTS in 2013.'
    },
    {
        id: 7,
        name: 'Jin',
        job: 'If we all gather our embarrassment together, it\'ll become confidence.',
        img: './images/jin.jpeg',
        text: 'Kim Seok-jin (Korean: 김석진; born December 4, 1992), also known professionally as Jin, is a South Korean singer, songwriter, and member of the South Korean boy band BTS.'
    },
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevButton = document.querySelector('.prev-btn')
const nxtButton = document.querySelector('.next-btn')

let currentMember = 0

// helper function
function showProfile (person) {
    const cm = members[person]
    img.src = cm.img
    author.textContent = cm.name
    job.textContent = cm.job
    info.textContent = cm.text
}

// event listener
window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded..')
    const cm = members[currentMember]
    img.src = cm.img
    author.textContent = cm.name
    job.textContent = cm.job
    info.textContent = cm.text
})

prevButton.addEventListener('click', function() {
    currentMember--
    if (currentMember < 0)
        currentMember = members.length-1
    showProfile(currentMember)
})

nxtButton.addEventListener('click', function() {
    currentMember++
    if (currentMember >= members.length)
        currentMember = 0
    showProfile(currentMember)
})