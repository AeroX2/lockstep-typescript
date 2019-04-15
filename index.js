const puppeteer = require('puppeteer');

let randomRange = (start,end) => {
    return Math.floor(Math.random() * (end-start) + start)
}

let launch = (async () => {
  let headless = false;
  if (headless) console.log('Running in headless mode')
  else console.log('Running normally')

  const browser = await puppeteer.launch({headless: headless});
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/testing.html');
  await page.type('#textbox', process.argv[2].trim());
  await page.click('#connect-button');
  await page.on("pageerror", function(err) {  
    console.log("Page error:", err.toString()); 
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

launch();
launch();
// launch();
// launch();