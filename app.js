function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}

function mouseAnime() {
    const circleSvg = document.querySelector('svg')
    // const btn = document.querySelector('button')

    let mouseX = 0
    let mouseY = 0


    window.addEventListener('mousemove', (event) => {
        // circleSvg.style.top = event.clientY - 45;
        // circleSvg.style.left = event.clientX - 45;

        mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
        mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
    })

    const mouseMove = () => {
        //intv += 1

        circleSvg.style.top = mouseY
        circleSvg.style.left = mouseX

        //circleSvg.style.opacity = 1 + Math.sin(intv * .04)
        //console.log(Math.sin(intv * .04))

        window.requestAnimationFrame(mouseMove)
    }

    mouseMove()

}

function loader() {

    let tl = gsap.timeline();

    tl.from(".amul img",{
        y:"100h",
        duration:0.5,
    })

    tl.to(".page1", {
        y: "100vh",
        scale: 0.6,
    })

    tl.to(".page1", {
        y: "0vw",
        duration: 0.6,
        delay: 1.9,
    })
    tl.to(".page1", {
        // rotate:360, 
        scale: 1,
        duration: 0.6,
    })
    tl.to("nav", {
        opacity: 1,
        zIndex: 99999,
        // duration:0,
    })
    tl.from(".lefthero h3", {
        y: "100vh",
        duration: 0.6,
        stagger: 0.2,
    }, "a")

    tl.to('.bgLogo', {
        display: "none",
    })


}

gsap.to(".page1 .video-container", {
    width: "85vw",
    scrollTrigger: {
        // markers: true,
        trigger: ".page1 .video-container",
        start: "-200% 0%",
        end: "-50% 100%",
        scrub: 1.3,
        // pin: true,
    },
})


gsap.to(".circle-page2", {
    // duration:0.5,
    color: "#fff",
    rotate: 90,
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".circle-page2 svg",
        // scroller:"#main",   
        start: "-145% 0%",
        end: "40% 100%",
        scrub: 2,
        // pin:true,
        // markers: true
    }
})

function sheryAnime() {
    Shery.hoverWithMediaCircle(".video-container, .category-part, .page4" /* Element to target.*/, {
        images: ["https://i.pinimg.com/736x/a3/c3/8c/a3c38c6f99ac84a81055f307d508003b.jpg", "", "https://i.pinimg.com/564x/c4/57/ed/c457ede93daa67d172b7c38f5461c90a.jpg",] /*OR*/,
        // videos: ["amull-milk.mp4"],
    });

    Shery.mouseFollower("body",{
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.1,
    });

    Shery.imageEffect(".under-line", {
        style: 4,
        
    });
}

function hoverImg() {
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic01'),
        intensity: 0.5,
        image1: 'cheese-cover.jpg',
        image2: 'cheese.jpg',
        displacementImage: '4.png'
    });
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic02'),
        intensity: 0.5,
        image1: 'chash-cover.jpg',
        image2: 'masti.jpg',
        displacementImage: '21.jpg'
    });
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic03'),
        intensity: 0.5,
        image1: 'ghee-cover.jpg',
        image2: 'ghee.jpg',
        displacementImage: '4.png'
    });
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic04'),
        intensity: 0.5,
        image1: 'whey-cover.jpg',
        image2: 'profood.jpg',
        displacementImage: '21.jpg'
    });
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic05'),
        intensity: 0.5,
        image1: 'cream-cover.jpg',
        image2: 'icecream.jpg',
        displacementImage: '4.png'
    });
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic06'),
        intensity: 0.5,
        image1: 'chocolate-cover.jpg',
        image2: 'choko.jpg',
        displacementImage: '21.jpg'
    });
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic07'),
        intensity: 0.5,
        image1: 'milk-cover.jpg',
        image2: 'taaza.jpg',
        displacementImage: '4.png'
    });
    var hoverDistort = new hoverEffect({
        parent: document.querySelector('#pic08'),
        intensity: 0.5,
        image1: 'kool-cover.jpg',
        image2: 'kool.jpg',
        displacementImage: '21.jpg'
    });
}


function product() {
    
}


gsap.to(".page4", {
    backgroundColor: "#000",

    scrollTrigger: {
        trigger: ".page4",
        start: '-2% 0%',
        end: "-2% 100%",
        scrub: 1,
        // markers:true,
    },
    duration: 0.2,
})



function lastOne() {
    const itemsArray = [];
    const cursor = document.querySelector(".cursor-page4");
    const page4 = document.querySelector(".work");

    page4.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX - cursor.offsetWidth / 2,
            y: e.clientY - cursor.offsetHeight / 2,
            duration: 0.5,
            ease: "power2.out",
        });
    });

    page4.addEventListener("click", function (event) {
        const clickSfx = new Audio("./assets/click-sfx.mp3");
        clickSfx.play();

        const itemType = Math.random() > 0.5 ? "video" : "image";
        let container = document.createElement("div");
        let elementWidth = 200;
        if (itemType === "video") {
            const videoNumber = Math.floor(Math.random() * 11) + 1;
            container.innerHTML = `<div class="page4-video-container">
                <video autoplay loop muted>
                    <source src="./assets/vid-${videoNumber}.mp4" type="video/mp4"/>
                </video>
            </div>`;
        } else {
            const imgNumber = Math.floor(Math.random() * 10) + 1;
            container.innerHTML = `<div class="page4-img-container">
                <img src="./assets/img${imgNumber}.jpg" alt="" />
            </div>`;
        }

        const appendedElement = container.firstChild;
        document.querySelector(".page4-container").appendChild(appendedElement);

        appendedElement.style.left = `${event.clientX - elementWidth / 2}px`;
        appendedElement.style.top = `${event.clientY}px`;
        const randomRotation = Math.round() * 10 - 5;

        gsap.set(appendedElement, {
            scale: 0,
            rotation: randomRotation,
            transformOrigin: "center",
        });


        const tl = gsap.timeline();

        const randomScale = Math.random() * 0.5 + 0.5;
        tl.to(appendedElement, {
            scale: randomScale,
            duration: 0.5,
            delay: 0.1,
        });

        tl.to(appendedElement, {
            y: () => `-=500`,
            opacity: 1,
            duration: 4,
            ease: "none",
        },
            "<"
        ).to(appendedElement, {
            opacity: 0,
            duration: 1,
            onCompete: () => {
                appendedElement.parentNode.removeChild(appendedElement);
                const index = itemsArray.indexOf(appendedElement);
                if (index > -1) {
                    itemsArray.splice(index, 1);
                }
            },
        },
            "-=0.5"
        );
    });
}

gsap.from(".fixed_footer", {
    y: -500,
    scrollTrigger: {
        trigger: ".content",
        start: "bottom bottom",
        scrub: true,
    },
});



function page5() {
    const panels = document.querySelectorAll('.panel')
    let vid = document.querySelector('.panel .vid1');
    let vid2 = document.querySelector('.panel .vid2');
    let vid3 = document.querySelector('.panel .vid3');
    let vid4 = document.querySelector('.panel .vid4');
    let vid5 = document.querySelector('.panel .vid5');


panels.forEach(panel => {
    panel.addEventListener('mouseover',() => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

vid.addEventListener('mouseenter', () =>{
    vid.play();
    vid.style.opacity =1 
})
vid.addEventListener('mouseleave', () =>{
    vid.play();
    vid.style.opacity = 0 
})

vid2.addEventListener('mouseenter', () =>{
    vid2.play();
    vid2.style.opacity =1 
})
vid2.addEventListener('mouseleave', () =>{
    vid2.play();
    vid2.style.opacity = 0 
})

vid3.addEventListener('mouseenter', () =>{
    vid3.play();
    vid3.style.opacity =1 
})
vid3.addEventListener('mouseleave', () =>{
    vid3.play();
    vid3.style.opacity = 0 
})

vid4.addEventListener('mouseenter', () =>{
    vid4.play();
    vid4.style.opacity =1 
})
vid4.addEventListener('mouseleave', () =>{
    vid4.play();
    vid4.style.opacity = 0 
})

vid5.addEventListener('mouseenter', () =>{
    vid5.play();
    vid5.style.opacity =1 
})
vid5.addEventListener('mouseleave', () =>{
    vid5.play();
    vid5.style.opacity = 0 
})

}


page5()
lastOne()
hoverImg()
sheryAnime();
// locomotive()
loader()