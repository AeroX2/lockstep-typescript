const puppeteer = require('puppeteer');

let randomRange = (start,end) => {
    return Math.floor(Math.random() * (end-start) + start)
}

let launch = (async () => {
  let headless = true;
  if (headless) console.log('Running in headless mode')
  else console.log('Running normally')

  const browser = await puppeteer.launch({headless: headless});
  const page = await browser.newPage();
  await page.setViewport({width: 10000, height: 10000})
  await page.goto('http://lockstep.zapto.org:8080');
  await page.click('#lobby-list button');
  await page.on("pageerror", (err) => {  
    console.log("Page error:", err.toString()); 
  });
  await page.on('console', msg => {
    console.log(msg.text());
  });

  let loop = async () => {
    let arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    await page.keyboard.down(arrowKeys[randomRange(0,arrowKeys.length)])
    setTimeout(async () => {
        await page.keyboard.up(arrowKeys[randomRange(0,arrowKeys.length)])
        loop();
    }, randomRange(100,800))
  }
  loop();
});

//launch();
setTimeout(() => {
  launch();
}, 1000)
// setTimeout(() => {
//   launch();
// }, 2000)
// setTimeout(() => {
//   launch();
// }, 3000)
// launch();
// launch();
// launch();
