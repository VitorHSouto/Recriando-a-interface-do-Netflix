// what should we do when scrolling occurs
function runOnScroll(element) {
    // not the most exciting thing, but a thing nonetheless
    console.log(element);
  };
  
  // grab elements as array, rather than as NodeList
  const elements = document.getElementById('nav');
  
  // and then make each element do something on scroll
    window.addEventListener(
        "scroll",
        () => runOnScroll(elements),
        { passive: true }
    );