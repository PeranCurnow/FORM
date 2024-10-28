let rectWidth = 150; // Width of each rectangle
let rectHeight = rectWidth * 1.5; // Adjusted height based on a new ratio
let spacing = 50; // Increased spacing between rectangles
let totalWidth = rectWidth * 12 + spacing * 13; // Total width needed for all rectangles and spacing

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15;

function preload() {
  img1 = loadImage('assets/soon.jpg');
  img2 = loadImage('assets/helloworld.jpg');
  img3 = loadImage('assets/stoic.jpg');
  img4 = loadImage('assets/concrete.jpg');
  img5 = loadImage('assets/TS.jpg');
  img6 = loadImage('assets/FIGHTPP.jpg');
  img7 = loadImage('assets/card4-1.jpg');
  img8 = loadImage('assets/card4-2.jpg');
  img9 = loadImage('assets/card4-3.jpg');
  img10 = loadImage('assets/card5.jpg');
  img11 = loadImage('assets/card5_2.jpg');
  img12 = loadImage('assets/FORMS.jpg');
  img13 = loadImage('assets/w6.jpg');
  img14 = loadImage('assets/w6-02.jpg');
  img15 = loadImage('assets/w6-03.jpg');
  img16 = loadImage('assets/w9.jpg');
  img17 = loadImage('assets/w9_2.jpg');
  img18 = loadImage('assets/w10.jpg');
  img19 = loadImage('assets/w10_2.jpg');
  img20 = loadImage('assets/w11.jpg');
  img21 = loadImage('assets/w12.jpg');
  img22 = loadImage('assets/w12_2.jpg');
  img23 = loadImage('assets/w12_3.jpg');
}

function setup() {
  createCanvas(totalWidth, windowHeight);
}

function draw() {
  background("green"); // Ensure the background is redrawn

  for (let i = 0; i < 12; i++) {
    let x = spacing + i * (rectWidth + spacing); // Calculate x position for each rectangle
    let y = 50; // Align along the top of the screen with some margin

    // Draw the drop shadow
    fill(1, 50, 32); // Darker color for the shadow
    rect(x + 5, y + 5, rectWidth, rectHeight, 20); // Offset shadow with rounded corners

    // Draw the main card
    fill(255); // White color for the cards
    rect(x, y, rectWidth, rectHeight, 20); // Rounded corners with radius 20

    // Add red text at the top left and bottom right
    fill('red');
    textSize(24);
    textAlign(LEFT, TOP);
    text(i + 1, x + 10, y + 10); // Top left corner
    textAlign(RIGHT, BOTTOM);
    text(i + 1, x + rectWidth - 10, y + rectHeight - 10); // Bottom right corner
  }

  // Check if the mouse is hovering over the second card
  let secondCardX = spacing + 1 * (rectWidth + spacing);
  let secondCardY = 50;
  if (mouseX > secondCardX && mouseX < secondCardX + rectWidth && mouseY > secondCardY && mouseY < secondCardY + rectHeight) {
    // Display the first text box for card 2
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX1 = secondCardX; // Align left of the second card
    let textY1 = 290; // Move text up to fit more content
    let textContent1 = "Morning Class:\nI was briefed on what the class is like:\nHow we may have to relearn things we’ve learnt from our own field like graphic design, but that a main objective at the same time is to “be designers & learn something about code”. Andy also highlighted points like Codewords being about the web aesthetic as opposed to making traditionally affective websites and that creative coding is about.\n\nOne of the references given was Winnie Soon. Her artwork ‘Unerasable Characters II’ 2020” a digital artwork displayed on a wall visualising censored tweets was my first introduction into the possibilities of coding for a creative purpose.\n\nAfternoon Class:\nWas introduced to HTML & CSS. How HTML is very standard web builder whereas CSS is the styling that is applied to HTML.\n\nTold that AI tools are useful and allowed as long as they’re sighted, although don’t bother with ChatGPT because it isn’t efficient at generating code.\n\nIn the screen shots shown we’re the first experiments with HTML during the group lesson. A “hello world” replacement at the head of the canvas along with learning how to import an image and make it the background.";
    text(textContent1, textX1, textY1, 400, windowHeight); // Increased width for text wrapping

    // Display the second text box for card 2
    let fourthCardX = spacing + 3 * (rectWidth + spacing); // Calculate x position for the fourth card
    let textX2 = fourthCardX; // Align left of the fourth card
    let textY2 = 290; // Align vertically with the first text box
    let textContent2 = "ANDY’s Quotes:\nWhile my passion and future and coding have been questioned in this course, I do find there is something to take from creative people regardless of their medium - so here is my note worthly quotes from Andy throughout the semester:\n- “I think we can be many things”\n\n-”Language is a keyhole into each others universe”\n\n-”don’t be too humble... with yourself”\n\n-”we’re all a little bit afraid of the future”\n\nReferences given:\nWinnie Soon\nRozi Zhu\nZennyan\nDaniel Howe";
    text(textContent2, textX2, textY2, 400, windowHeight); // Increased width for text wrapping

    // Calculate the available height for the images
    let firstCardY = 50; // Define firstCardY before using it
    let availableHeight = windowHeight - 10 - (firstCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 3 - spacing; // Divide the available height by 3 and subtract spacing

    // Display the images aligned with the left of the first card and aligned downwards
    let firstCardX = spacing;

    image(img1, firstCardX, firstCardY + rectHeight + spacing, rectWidth, imgHeight);
    image(img2, firstCardX, firstCardY + rectHeight + 2 * spacing + imgHeight, rectWidth, imgHeight);
    image(img3, firstCardX, firstCardY + rectHeight + 3 * spacing + 2 * imgHeight, rectWidth, imgHeight);
  }

  // Check if the mouse is hovering over the third card
  let thirdCardX = spacing + 2 * (rectWidth + spacing);
  let thirdCardY = 50;
  if (mouseX > thirdCardX && mouseX < thirdCardX + rectWidth && mouseY > thirdCardY && mouseY < thirdCardY + rectHeight) {
    // Display the first text box for card 3
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX3 = thirdCardX; // Align left of the third card
    let textY3 = 290; // Move text up to fit more content
    let textContent3 = "Morning Class:\nFirst introduced to concrete poetry. Specifically Augusto De Campos. Through some research and discussion I learned and saw how he used words as visual objects and layed them out in space occordinly. Similar to a quote I got from Andy during the session that “words are just little pictures”.\n\nIt was interesting to learn about this and begin to sketch up how that could be presented in a piece of code through some quick thumbnail sketches.\n\nRecreating video games with paper prototypes was an interesting activity also. Similar to previous weeks it opened my mind to how one should think with coding as a medium for creativity. Specifically how each interaction should be as specific as possible. This is because your communicating with a computer and also the more interactions the more coding needed.\n\nAfternoon Class:\nMore HTML\nFirst introduced to P5.js\nMade some brief notes about how HTML files are setup";
    text(textContent3, textX3, textY3, 400, windowHeight); // Increased width for text wrapping

    // Display the second text box for card 3
    let fifthCardX = spacing + 4 * (rectWidth + spacing); // Calculate x position for the fifth card
    let textX4 = fifthCardX; // Align left of the fifth card
    let textY4 = 290; // Align vertically with the first text box
    let textContent4 = "ANDY’s Quotes:\n\n-”words are just little pictures, that’s it. We’re done for the semester”\n\n-”if language is alive it becomes dead”\n\n-”words are things”\n\n-”narrow down your points and references and go deeper”\n\nReferences given:\n- Augusto De Campos -\nFounder of concrete poetry in Brazil\nAuthor of Tudo Esta Dito\n\n- Gerhard Rhum";
    text(textContent4, textX4, textY4, 400, windowHeight); // Increased width for text wrapping

    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (thirdCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 3 - spacing; // Divide the available height by 3 and subtract spacing

    // Display the images aligned with the left of the second card and aligned downwards
    let secondCardX = spacing + 1 * (rectWidth + spacing);

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img4Width = rectWidth;
    let img4Height = img4.height * (img4Width / img4.width);
    let img5Width = rectWidth;
    let img5Height = img5.height * (img5Width / img5.width);
    let img6Width = rectWidth;
    let img6Height = img6.height * (img6Width / img6.width);

    // Adjust the height if it exceeds the available height
    if (img4Height > imgHeight) {
      img4Height = imgHeight;
      img4Width = img4.width * (img4Height / img4.height);
    }
    if (img5Height > imgHeight) {
      img5Height = imgHeight;
      img5Width = img5.width * (img5Height / img5.height);
    }
    if (img6Height > imgHeight) {
      img6Height = imgHeight;
      img6Width = img6.width * (img6Height / img6.height);
    }

    image(img4, secondCardX, thirdCardY + rectHeight + spacing, img4Width, img4Height);
    image(img5, secondCardX, thirdCardY + rectHeight + 2 * spacing + img4Height, img5Width, img5Height);
    image(img6, secondCardX, thirdCardY + rectHeight + 3 * spacing + img4Height + img5Height, img6Width, img6Height);
  }

  // Check if the mouse is hovering over the fourth card
  let fourthCardX = spacing + 3 * (rectWidth + spacing);
  let fourthCardY = 50;
  if (mouseX > fourthCardX && mouseX < fourthCardX + rectWidth && mouseY > fourthCardY && mouseY < fourthCardY + rectHeight) {
    // Display the first text box for card 4
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX5 = fourthCardX; // Align left of the fourth card
    let textY5 = 290; // Move text up to fit more content
    let textContent5 = "Morning Class:\nIn week 4, we did a pseudocode exercise, drawing an item and explaining it step-by-step. Suprisingly then passing it to another student which highlighted the importance of clear communication with computers depending on how far away their sketch was from yours. This being similar to the video game paper prototype and therefore the second time doing it, I could tell I was improving with this new coding mindset.\n\nAlso began thinking about the paper prototype - some quote ideas.\n\nThe notible reference given by Andy was a an old friend, Angelo Plessas. Looking at his unique, quirky design portfolio website while hearing Andy speak about their network of creative coders gave me a strong appreaction and respect for the medium also realising its potential. With the right knowledge and skills in coding making anything was possible.\n\nAfternoon Class:\nAfternoon class I believe was the first time coding in P5.js. It felt way more natural and closer to psuedocode than HTML. Still a strong learning curve however.";
    text(textContent5, textX5, textY5, 400, windowHeight); // Increased width for text wrapping

    // Display the second text box for card 4
    let sixthCardX = spacing + 5 * (rectWidth + spacing); // Calculate x position for the sixth card
    let textX6 = sixthCardX; // Align left of the sixth card
    let textY6 = 290; // Align vertically with the first text box
    let textContent6 = "ANDY’s Quotes:\n\n-”there could be a threat to RMIT, individual thinking”\n\n- “we shouldn’t continue to setup text like we have for 500 years”\n\nReferences given:\n- Angelo Plessas (AngeloPlessas.com)\n- Rafaël Rozendaal (Newrafael.com)\n- softglossary.space";
    text(textContent6, textX6, textY6, 400, windowHeight); // Increased width for text wrapping

    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (fourthCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 3 - spacing; // Divide the available height by 3 and subtract spacing

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img7Width = rectWidth;
    let img7Height = img7.height * (img7Width / img7.width);
    let img8Width = rectWidth;
    let img8Height = img8.height * (img8Width / img8.width);
    let img9Width = rectWidth;
    let img9Height = img9.height * (img9Width / img9.width);

    // Adjust the height if it exceeds the available height
    if (img7Height > imgHeight) {
      img7Height = imgHeight;
      img7Width = img7.width * (img7Height / img7.height);
    }
    if (img8Height > imgHeight) {
      img8Height = imgHeight;
      img8Width = img8.width * (img8Height / img8.height);
    }
    if (img9Height > imgHeight) {
      img9Height = imgHeight;
      img9Width = img9.width * (img9Height / img9.height);
    }

    image(img7, thirdCardX, fourthCardY + rectHeight + spacing, img7Width, img7Height);
    image(img8, thirdCardX, fourthCardY + rectHeight + 2 * spacing + img7Height, img8Width, img8Height);
    image(img9, thirdCardX, fourthCardY + rectHeight + 3 * spacing + img7Height + img8Height, img9Width, img9Height);
  }

  // Check if the mouse is hovering over the fifth card
  let fifthCardX = spacing + 4 * (rectWidth + spacing);
  let fifthCardY = 50;
  if (mouseX > fifthCardX && mouseX < fifthCardX + rectWidth && mouseY > fifthCardY && mouseY < fifthCardY + rectHeight) {
    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (fifthCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 3 - spacing; // Divide the available height by 3 and subtract spacing

    // Display the images aligned with the left of the fourth card and aligned downwards
    let fourthCardX = spacing + 3 * (rectWidth + spacing);

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img10Width = rectWidth;
    let img10Height = img10.height * (img10Width / img10.width);
    let img11Width = rectWidth;
    let img11Height = img11.height * (img11Width / img11.width);
    let img12Width = rectWidth;
    let img12Height = img12.height * (img12Width / img12.width);

    // Adjust the height if it exceeds the available height
    if (img10Height > imgHeight) {
      img10Height = imgHeight;
      img10Width = img10.width * (img10Height / img10.height);
    }
    if (img11Height > imgHeight) {
      img11Height = imgHeight;
      img11Width = img11.width * (img11Height / img11.height);
    }
    if (img12Height > imgHeight) {
      img12Height = imgHeight;
      img12Width = img12.width * (img12Height / img12.height);
    }

    image(img10, fourthCardX, fifthCardY + rectHeight + spacing, img10Width, img10Height);
    image(img11, fourthCardX, fifthCardY + rectHeight + 2 * spacing + img10Height, img11Width, img11Height);
    image(img12, fourthCardX, fifthCardY + rectHeight + 3 * spacing + img10Height + img11Height, img12Width, img12Height);
  
    // Display the text for card 5
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX = fifthCardX; // Align left of the fifth card
    let textY = fifthCardY + rectHeight + spacing; // Position below the fifth card
    let textContent = "Morning Class:\nIn week 5 I continued generating ideas and thumbnail sketches for the paper prototype. I found it hard throughout the whole process of this semester to really develop an idea that wasn’t too obvious or literal. I had strong difficulty thinking past my trained poster design mindset to ideas that work for a creative website artwork.\n\nAfternoon Class:\nI got feedback on the portrait I completed. While I was successful in completing something that looked like a face I learned that the way I made it was not scalable for when you change the website canvas size.\n\nDuring the P5.js group tutorial lots of different tools were covered like\n\nrandom() which generated words on the screen randomly as fast as the frame rate was.\n\nFunction preLoad - lets you load images / fonts / sounds\n\nPush() / Pop() - allow you to make a temporary change that doesn’t affect the rest of the code\n\nMouseX + MouseY - allowed you to adjust elements by moving the mouse around";
    text(textContent, textX, textY, 400, windowHeight); // Increased width for text wrapping
}

  // Check if the mouse is hovering over the sixth card
  let sixthCardX = spacing + 5 * (rectWidth + spacing);
  let sixthCardY = 50;
  if (mouseX > sixthCardX && mouseX < sixthCardX + rectWidth && mouseY > sixthCardY && mouseY < sixthCardY + rectHeight) {
    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (sixthCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 3 - spacing; // Divide the available height by 3 and subtract spacing

    // Display the images aligned with the left of the fifth card and aligned downwards
    let fifthCardX = spacing + 4 * (rectWidth + spacing);

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img13Width = rectWidth;
    let img13Height = img13.height * (img13Width / img13.width);
    let img14Width = rectWidth;
    let img14Height = img14.height * (img14Width / img14.width);
    let img15Width = rectWidth;
    let img15Height = img15.height * (img15Width / img15.width);

    // Adjust the height if it exceeds the available height
    if (img13Height > imgHeight) {
      img13Height = imgHeight;
      img13Width = img13.width * (img13Height / img13.height);
    }
    if (img14Height > imgHeight) {
      img14Height = imgHeight;
      img14Width = img14.width * (img14Height / img14.height);
    }
    if (img15Height > imgHeight) {
      img15Height = imgHeight;
      img15Width = img15.width * (img15Height / img15.height);
    }

    image(img13, fifthCardX, sixthCardY + rectHeight + spacing, img13Width, img13Height);
    image(img14, fifthCardX, sixthCardY + rectHeight + 2 * spacing + img13Height, img14Width, img14Height);
    image(img15, fifthCardX, sixthCardY + rectHeight + 3 * spacing + img13Height + img14Height, img15Width, img15Height);

    // Display the text for card 6
    fill("white");
    textSize(10);
    textAlign(LEFT, TOP);
    let textX = sixthCardX; // Align left of the sixth card
    let textY = sixthCardY + rectHeight + spacing; // Position below the sixth card
    let textContent = "Got to receive feedback on my prototype and see how it worked from another person's point of view.\n\nI received feedback to:\n- add sounds\n- consider other elements than just apples on the trees as they are a bit obvious\n- possibly add a human element and make them prominent\n\nWeek 6 the paper prototype of the final project was due. This gave me an opportunity to test my prototype and see how it operated from another person's point of view. At this point, I had a very illustrative artwork with trees and clouds that appeared when hovering over think and feel.\n\nI received some feedback to think about how I could use sound to enhance the piece as well as adding maybe a human element so it was easier to connect with and relate to if a human figure reacted to what was happening in the environment depending on how the user interacted with it.\n\nBeing the week before the break - I was told to reflect on what I’d come up with with my paper prototype, implement feedback and find out what effects exactly I’d want to start coding.\n\nI still wasn’t fully sold with my idea so I thought I might make a new paper prototype.";
    text(textContent, textX, textY, 400, windowHeight - textY - 50); // Ensure text does not go below "Peran's SKO"
  }
  
    // Check if the mouse is hovering over the seventh card
  let seventhCardX = spacing + 6 * (rectWidth + spacing);
  let seventhCardY = 50;
  if (mouseX > seventhCardX && mouseX < seventhCardX + rectWidth && mouseY > seventhCardY && mouseY < seventhCardY + rectHeight) {
    // Display the text for card 7
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX = seventhCardX; // Align left of the seventh card
    let textY = seventhCardY + rectHeight + spacing; // Position below the seventh card
    let textContent = "Coming back from the break week 7 gave me an opportunity to keep exploring ideas for my final project, so I did some more thumbnail sketches for a different quote from the monologue “machinery that gives abundance has left us in want”. Doing this expanded my range of possible ideas still early enough in the project to afford.\n\nThe afternoon class was one of those tutorials that I got behind in and didn’t really catch up I tried to add an image to my mouse which I knew how to do, but at this point I couldn't attach my image or find one that was compatible. So I was left with a blank green screen. However, I did learn that you could merely name a color instead of using the RGB values (“Green”).";
    text(textContent, textX, textY, 400, windowHeight - textY - 50); // Ensure text does not go below "Peran's SKO"
  }
  
    // Check if the mouse is hovering over the ninth card
  let ninthCardX = spacing + 8 * (rectWidth + spacing);
  let ninthCardY = 50;
  if (mouseX > ninthCardX && mouseX < ninthCardX + rectWidth && mouseY > ninthCardY && mouseY < ninthCardY + rectHeight) {
    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (ninthCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 2 - spacing; // Divide the available height by 2 and subtract spacing

    // Display the images aligned with the left of the eighth card and aligned downwards
    let eighthCardX = spacing + 7 * (rectWidth + spacing);

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img16Width = rectWidth;
    let img16Height = img16.height * (img16Width / img16.width);
    let img17Width = rectWidth;
    let img17Height = img17.height * (img17Width / img17.width);

    // Adjust the height if it exceeds the available height
    if (img16Height > imgHeight) {
      img16Height = imgHeight;
      img16Width = img16.width * (img16Height / img16.height);
    }
    if (img17Height > imgHeight) {
      img17Height = imgHeight;
      img17Width = img17.width * (img17Height / img17.height);
    }

    image(img16, eighthCardX, ninthCardY + rectHeight + spacing, img16Width, img16Height);
    image(img17, eighthCardX, ninthCardY + rectHeight + 2 * spacing + img16Height, img17Width, img17Height);

    // Display the text for card 9
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX = ninthCardX; // Align left of the ninth card
    let textY = ninthCardY + rectHeight + spacing; // Position below the ninth card
    let textContent = "Week 9 was a major milestone and change of direction in the project and in my creative mindset around creative coding. I decided I wasn’t getting anywhere with random sketches and that I should lean into what I was good at which is illustrator. So I did a mockup of what I wanted the code to look like to then be able to ask for help in coding it.\n\nI showed Andy and he gave me some tough but needed feedback that I was still stuck in an illustrator mindset of designing a poster. When what we’re meant to be doing is to be designing a piece of interactive typography. He mentioned it can be as simple as the text in the middle of the screen. Just play around with what the text could do.\n\nSo I immediately designed something new and way simpler. This is where I came up with the idea to have the circle gradient mouse and the word ‘feel’ being revealed.";
    text(textContent, textX, textY, 400, windowHeight - textY - 50); // Ensure text does not go below "Peran's SKO"
  }
  
    // Check if the mouse is hovering over the tenth card
  let tenthCardX = spacing + 9 * (rectWidth + spacing);
  let tenthCardY = 50;
  if (mouseX > tenthCardX && mouseX < tenthCardX + rectWidth && mouseY > tenthCardY && mouseY < tenthCardY + rectHeight) {
    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (tenthCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 2 - spacing; // Divide the available height by 2 and subtract spacing

    // Display the images aligned with the left of the ninth card and aligned downwards
    let ninthCardX = spacing + 8 * (rectWidth + spacing);

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img18Width = rectWidth;
    let img18Height = img18.height * (img18Width / img18.width);
    let img19Width = rectWidth;
    let img19Height = img19.height * (img19Width / img19.width);

    // Adjust the height if it exceeds the available height
    if (img18Height > imgHeight) {
      img18Height = imgHeight;
      img18Width = img18.width * (img18Height / img18.height);
    }
    if (img19Height > imgHeight) {
      img19Height = imgHeight;
      img19Width = img19.width * (img19Height / img19.height);
    }

    image(img18, ninthCardX, tenthCardY + rectHeight + spacing, img18Width, img18Height);
    image(img19, ninthCardX, tenthCardY + rectHeight + 2 * spacing + img18Height, img19Width, img19Height);

    // Display the text for card 10
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX = tenthCardX; // Align left of the tenth card
    let textY = tenthCardY + rectHeight + spacing; // Position below the tenth card
    let textContent = "At this point I had my idea, now I had started coding. I was trying my best to code everything myself off my own knowledge. Mainly because I hadn’t quite grasped how complex coding is, specifically how much we were doing and also didn’t realise how ok and common it is for even professional coders to look things up on the internet or use ai tools (I still hadnt signed up for github copilot at this point).\n\nSo with Andy being away and Karen Ann frantically helping everyone, I learned a simple thing of how to set the width of my code so my quote wasnt just one long sentence that went off the page.\n\nI also learnt how to align a shape to the middle of the screen but by the middle of the shape not the top left corner. Unfortunately It didn’t work for my textbox yet which was what I was actually wanting.";
    text(textContent, textX, textY, 400, windowHeight - textY - 50); // Ensure text does not go below "Peran's SKO"
  }
  
    // Check if the mouse is hovering over the eleventh card
  let eleventhCardX = spacing + 10 * (rectWidth + spacing);
  let eleventhCardY = 50;
  if (mouseX > eleventhCardX && mouseX < eleventhCardX + rectWidth && mouseY > eleventhCardY && mouseY < eleventhCardY + rectHeight) {
    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (eleventhCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 2 - spacing; // Divide the available height by 2 and subtract spacing

    // Display the image aligned with the left of the tenth card
    let tenthCardX = spacing + 9 * (rectWidth + spacing);

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img20Width = rectWidth;
    let img20Height = img20.height * (img20Width / img20.width);

    // Adjust the height if it exceeds the available height
    if (img20Height > imgHeight) {
      img20Height = imgHeight;
      img20Width = img20.width * (img20Height / img20.height);
    }

    image(img20, tenthCardX, eleventhCardY + rectHeight + spacing, img20Width, img20Height);

    // Display the text for card 11
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX = eleventhCardX; // Align left of the eleventh card
    let textY = eleventhCardY + rectHeight + spacing; // Position below the eleventh card
    let textContent = "Week 11 was a bit of a disaster week for me. Already behind and anxious to see others progress while I was still at a standstill. I sat down in class quietly, opened my laptop and the screen had cracked, on my way to uni. So I immediately left class hoping to fix it at a local shop and get back in time to get some help on my code. Which didn’t end up happening.\n\nI did get it back a couple of days later and I found a youtube tutorial on how to make a gradient circle.";
    text(textContent, textX, textY, 400, windowHeight - textY - 50); // Ensure text does not go below "Peran's SKO"
  }

 // Check if the mouse is hovering over the twelfth card
  let twelfthCardX = spacing + 11 * (rectWidth + spacing);
  let twelfthCardY = 50;
  if (mouseX > twelfthCardX && mouseX < twelfthCardX + rectWidth && mouseY > twelfthCardY && mouseY < twelfthCardY + rectHeight) {
    // Calculate the available height for the images
    let availableHeight = windowHeight - 10 - (twelfthCardY + rectHeight + spacing);
    let imgHeight = availableHeight / 3 - spacing; // Divide the available height by 3 and subtract spacing

    // Display the images aligned with the left of the tenth card and aligned downwards
    let tenthCardX = spacing + 9 * (rectWidth + spacing);

    // Calculate the aspect ratio and adjust the width and height to maintain proportions
    let img21Width = rectWidth;
    let img21Height = img21.height * (img21Width / img21.width);
    let img22Width = rectWidth;
    let img22Height = img22.height * (img22Width / img22.width);
    let img23Width = rectWidth;
    let img23Height = img23.height * (img23Width / img23.width);

    // Adjust the height if it exceeds the available height
    if (img21Height > imgHeight) {
      img21Height = imgHeight;
      img21Width = img21.width * (img21Height / img21.height);
    }
    if (img22Height > imgHeight) {
      img22Height = imgHeight;
      img22Width = img22.width * (img22Height / img22.height);
    }
    if (img23Height > imgHeight) {
      img23Height = imgHeight;
      img23Width = img23.width * (img23Height / img23.height);
    }

    image(img21, tenthCardX, twelfthCardY + rectHeight + spacing, img21Width, img21Height);
    image(img22, tenthCardX, twelfthCardY + rectHeight + 2 * spacing + img21Height, img22Width, img22Height);
    image(img23, tenthCardX, twelfthCardY + rectHeight + 3 * spacing + img21Height + img22Height, img23Width, img23Height);

    // Display the text for card 12
    fill("white");
    textSize(12);
    textAlign(LEFT, TOP);
    let textX = spacing + 10 * (rectWidth + spacing); // Align left of the eleventh card
    let textY = twelfthCardY + rectHeight + spacing; // Position below the twelfth card
    let textContent = "Week 12 was where majority of my progress was made in my final project. Using my fellow students help and suggestions (Elijah recommended) I finally started using ai tools. Elijah got me on one called ninjatech.ai which had a free option. I was quickly amazed at the speed at which I was generating my simple ideas. Which in my defence were hard to do from google searches but with the right prompting the ai had it perfect for me.\n\nThis lead me to work out how to get GIthub Copilot student - which was a gamechanger.\n\nAs seen in the images I made steady improvements to my final project. Trying to work out how to first have a hover state that changed color which was hard because I wasn’t sure if you could still use the single word as a text box or have to make a new word (think) on top of the text box.\n\nThe last adjustments I felt satisfied with because I didn’t have to use the ai. I changed the font and adjusted the speed of the gradient circle aswell as making it so it appeared above the ‘flashing thinks’ which gave a more meaningful effect. This felt accomplishing because I somewhat felt comfortable with adjusting the code which I knew I wouldn’t at the start of the course. Show that was some notible growth that felt good.";
    text(textContent, textX, textY, 400, windowHeight - textY - 50); // Ensure text does not go below "Peran's SKO"
  }

  // Draw the title text at the bottom left
  fill("white");
  textSize(24);
  textAlign(LEFT, BOTTOM);
  text("Peran Curnow's CW SKO - s3944433", 10, windowHeight - 10); // Bottom left corner with some margin
}
