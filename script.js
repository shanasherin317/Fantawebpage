var tl=gsap.timeline({scrollTrigger:{
trigger:".two",
start: "0% 95%",
end:"70% 50%",
scrub:"true",
markers:"true",
}})

tl.to("#fanta", {
top:"120%",
left:"0%",
},'orange')

tl.to("#orange-cut",{
    top:"160%",
    left:"23%",
},'orange')

tl.to("#orange",{
    top:"160%",
    right:"10%",
    Width:"13%",
},'orange')

tl.to("#leaf1",{
    top:"105%",
    left:"85%",
    rotate:"130deg",
},'orange')

tl.to("#leaf2",{
    top:"105%",
    left:"0%",
    rotate:"130deg",
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

// tl2.from("#lemon1",{
//     rotate: "-90deg",
//     left: "-100%",
//     top: "110%"
// }, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "100%",
}, 'ca')

// tl2.from("#lemon2",{
//     rotate: "90deg",
//     left: "100%",
//     top: "110%"
// }, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"19%",
    left: "41.5%",
    top: "207%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "220%",
    left: "33%",
}, 'ca')

