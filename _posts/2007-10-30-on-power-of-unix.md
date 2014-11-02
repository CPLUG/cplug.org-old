---
title: On Power of Unix
author: Nat
layout: post
permalink: /2007/10/30/on-power-of-unix/
categories:
  - Announcements
tags:
  - power of unix
  - recap
  - screenrc
---
Sorry this is so late, we will get the info up faster next time, just been busy with school and what not.

One of the things many people have been asking for is the ~/.screenrc file that victor uses. Victor learned about it from[ this Gentoo page][1]. but the file should contain the following:

<pre># use visual bell
vbell on
# replace ctrl-A by ctrl-O
escape ^Oo
# set a big scrolling buffer
defscrollback 5000
# Set the caption on the bottom line
caption always "%{= kw}%-w%{= BW}%n %t%{-}%+w %-= @%H - %LD %d %LM - %c"</pre>

I hope to get the other info up soon, also we need to finish getting the pages ready. It will happen this quarter, I promise.

Look forward to our SSH talk sometime in November.

 [1]: http://www.gentoo.org/news/en/gwn/20060925-newsletter.xml#doc_chap3