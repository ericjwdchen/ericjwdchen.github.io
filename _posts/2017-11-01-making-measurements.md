---
layout: post
title: Making Measurements
---

As I write this, the iPhone X is about to launch, and I'm surprised by how many phone reviewers (I've found 13) seem to conflate screen size to the diagonal length of the display.[^1]

[Jim Dalrymple of The Loop](http://www.loopinsight.com/2017/10/31/first-look-iphone-x/):
> However, when you turn it on, the iPhone X is all screen. It doesn’t have the big top and bottom of the iPhone Plus models—it’s just screen. It’s beautiful.
>
> The iPhone 8 has a 4.7-inch screen; the iPhone 8 Plus a 5.5-inch screen and the iPhone X a 5.8-inch screen.

[Kif Leswing of Business Insider in an article titled "The iPhone X is smaller than the iPhone 8 Plus, but it has the largest iPhone screen Apple has ever made"](http://www.businessinsider.com/iphone-x-screen-size-vs-iphone-8-plus-2017-10):
> The iPhone X actually features Apple's biggest phone display, measuring 5.8 inches on the diagonal, which is even bigger than the display on Apple's largest iPhone, the iPhone 8 Plus, which measures 5.5 inches.

[Jefferson Graham of USA Today in a Q&A article](https://www.usatoday.com/story/tech/talkingtech/2017/10/28/we-answer-your-questions-iphone-x/810712001/):
> [Q:] Gary Moskowitz: "What's the size of the iPhone X?" [A:] That would be 5.8 inches, the largest screen size ever for an iPhone. The iPhone 8 Plus is 5.5 inches.

[Tony Merevick of Thrillist in an article titled "The iPhone X Packs a Bigger Screen than the iPhone 8 Plus on a Smaller Body"](https://www.thrillist.com/news/nation/iphone-x-size-dimensions):
> Out of all the big new features Apple packed into its game-changing new iPhone X, the phone's stunning edge-to-edge OLED display is easily the biggest. In fact, it's the biggest screen the company has ever packed into an iPhone in its 10-year history. And yet, the iPhone X itself is actually smaller than the iPhone 8 Plus and iPhone 7 Plus in terms of height and width.

[Scott Stein of CNET](https://www.cnet.com/news/iphone-x-review-day-three/):
> The 5.8-inch screen is the biggest on an iPhone to date...

[David Gewirtz of ZDNet](http://www.zdnet.com/article/iphone-x-or-iphone-8-price-size-camera-all-factor-in-your-buying-decision/):
> She [my wife] found the physical size of the Plus phone to be too large. That's one of the more interesting elements of the iPhone X -- it has more screen, in a smaller package.
>
> ...
>
> It [iPhone X] is getting you more screen size in less space than the 8 Plus.

[Brian X. Chen of The New York Times](https://www.nytimes.com/2017/11/01/technology/personaltech/apple-iphone-x-review.html):
> First, the basics: The iPhone X has a 5.8-inch screen that is larger than the 5.5-inch display on the iPhone 8 Plus and the 4.7-inch screen on the iPhone 8.

[Steve Kovach of Business Insider](http://www.businessinsider.com/iphone-x-hands-on-photos-first-impressions-2017-10)
> The best part is the screen. At 5.8 inches, it's slightly larger than the iPhone 8 Plus screen, but the iPhone X's body is only a little larger than the iPhone 8.

[Todd Haselton of CNBC](https://www.cnbc.com/2017/10/31/apple-iphone-x-review-the-best-smartphone-you-can-buy.html)
> It's [The iPhone X is] also easier to hold than the larger iPhone 8 Plus but offers a larger screen (5.8 inches versus 5.5 inches) since the display runs from edge to edge and top to bottom.

[Julian Chokkattu of Digital Trends](https://www.digitaltrends.com/cell-phone-reviews/apple-iphone-x-review/)
> What we like most about the iPhone X is its size. It feels compact — it’s slightly larger than the 4.7-inch iPhone 8, but it has a bigger screen than the 5,5-inch iPhone 8 Plus. The X is comfortable in the hand, and it feels remarkable to have so much more screen real estate than a cumbersome "plus-sized" phone.

[Stuart Miles of Pocket-lint](http://www.pocket-lint.com/review/142227-apple-iphone-x-review-the-future-of-apple-smartphones)
> Sporting a 5.8-inch screen, the display real-estate is bigger than the iPhone 8 Plus, but the chassis is considerably smaller, thanks to the shift in the display aspect.

[Ed Baig of USA Today](https://www.usatoday.com/story/tech/columnist/baig/2017/10/31/iphone-x-first-look-face-id-passes-our-quick-tests-and-animojis-addictive/815985001/)
> The display, the largest screen ever on an iPhone despite the fact that the overall size of the X is only marginally taller than the iPhone 8, is beautiful.

[Gareth Beavis of TechRadar](http://www.techradar.com/reviews/iphone-x)
> If you've used any of the iPhone Plus range, you'll get on instantly with this handset. It's got a bigger screen than any other iPhone, and yet it's smaller than the iPhone 7 Plus.

<hr>

Here's the crux of the issue. The iPhone X has a 19.5:9 aspect ratio. This means the screen is approximately twice as tall as it is wide. Previous iPhones have had 16:9 (iPhone 5 and later) or 3:2 aspect ratios (iPhone 4s and earlier).

Of course, no one is actually interested in the diagonal of a screen (it's the *area* of the screen that matters), but if two screens have the same aspect ratio, then screen diagonal is a fine proxy.

However, if two screens have different aspect ratios, then the diagonal length of the display is misleading. Here's an example to illustrate that, where I've drawn two shapes. On the left is a square with a diagonal of 1 unit. On the right is a rectangle with a diagonal of 1.5 units. The rectangle has a 50% longer diagonal. But by screen area, it's 23% smaller than the square.

![dimensions.png](/assets/2017/11/dimensions.png)*Screen size != screen area.*

I can continue elongating the diagonal while maintaining a constant screen area by making the rectangle skinnier. There is no limit to how much longer I can make the diagonal, while keeping screen area constant.

Not all tech reviewers have overlooked this fact. Phone Arena [did the math](https://www.phonearena.com/news/Apple-iPhone-Xs-5.8-inch-screen-is-actually-smaller-than-the-5.5-inch-iPhone-8-Plus-display_id98116), and the screen area of the 5.8 inch iPhone X is 2.6% smaller than the 5.5 inch iPhone Plus. Vlad Savov of The Verge has also [been on top of this](https://www.theverge.com/tldr/2017/3/30/15120824/screen-aspect-ratio-mathematics-galaxy-s8-lg-g6).

Ideally, as phones move to different shapes (with cutouts, notches, and curved edges), we can talk about screen area instead of diagonal length.[^2] Even screen area isn't a perfect proxy of the screen size, though. Because at the end of the day, a bigger screen size is only useful if it lets you *do* or *see* more. For some use cases, like watching a movie, this might mean that an 19:9 ratio with smaller screen area than 3:2 ratio is actually better. Or consider on laptops, where vertical space is often at a premium, so 3:2 ratio is preferred to 16:9 ratio, all else being equal.

This is all to say that screen size cannot be summed up by one metric (as is often the case, things are more grey than they are black and white). But if I had to pick one metric, I certainly wouldn't choose screen diagonal.[^3] Wouldn't it be simpler if we just quoted screen area?

[^1]: Some reviewers, though, have gotten it right.

    [Mark Spoonauer of Tom's Guide](https://www.tomsguide.com/us/iphone-x,review-4800.html)
    > It's worth noting that this 5.8-inch screen gives you less viewing area than the 5.5-inch iPhone 8 Plus, because the iPhone X’s screen has a narrower aspect ratio.

    [Neil Cybart of Above Avalon](https://www.aboveavalon.com/notes/2017/10/31/iphone-x)
    > iPhone X has a little bit less screen real estate (in terms of area) than iPhone Plus. The 5.8-inch screen has a more vertical element than its iPhone Plus sibling.

[^2]: In fact, the "diagonal" reported for phones like the iPhone X and Galaxy Note 8 are not even their actual diagonal. Even though these screens have rounded corners, when measuring the diagonal, the companies are measuring as if the screen were an actual rectangle.

    [From Apple's iPhone X tech specs](https://www.apple.com/iphone-x/specs/):
    > The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).

    What, then, are we actually measuring? How much can a corner be rounded off before we stop using it's "rectangular" diagonal? What about measuring the rectangular diagonal of a circular display, because we can think of a circle as actually transcribed in a square, so that it actually has (to quote Apple) "corners within a standard rectangle." This practice seem disingenuous, and another reason *not* to measure diagonal length of screens.

[^3]: I can't vouch for the validity of this fact, but I recall reading that television manufacturers were a big proponent of diagonal measuring, especially as TVs moved from 4:3 aspect ratio to 16:9 aspect ratio. A flat-screen LCD at 16:9 with the same screen area as a CRT display at 4:3 could suddenly be marketed as significantly "larger."
