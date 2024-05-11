---
name: IP/TCP
role: Backend system developer
timeline: 2 months
tools: [Go, Wireshark]
thumbnail: ../../images/ip-tcp/sample-network.png
summary: On a team of 2, I implemented fundamental internet communication protocols from scratch.
---

# IP / TCP Stack

## Overview

The Internet Protocol (IP) and Transmission Control Protocol (TCP) are procedures that make up the backbone of the internet. They define a standard for how information is efficiently and reliably exchanged across the world. IP and TCP are almost certainly the protocols used to transport the data that makes up this webpage to your computer, allowing you to read this very text!

In an effort to better understand these fundamental protocols and practice my system programming skills, I collaborated with a partner to implement both protocols from scratch using the Go programming language.

## Technical specifications

The standards that define how internet protocols like these operate are publicly available as a series of documents called RFCs ([RFC 791](https://datatracker.ietf.org/doc/html/rfc791) for IP and [RFC 9293](https://datatracker.ietf.org/doc/html/rfc9293)). As you can see, these documents are massive - implementing these protocols would require a great deal of effort and a well-organized codebase. Because I was working in a team-setting with a partner, we would have to use tools like Git to coordinate our efforts.

IP is a lower-level protocol that defines how chunks of transmitted information are able to efficiently find their way to their destination amidst a constantly-changing sea of devices. Since the internet is way too large for one program to coordinate everything by itself, different devices need to be able to work together in a decentralized manner.

![Simple network with a single router and multiple devices](https://media.geeksforgeeks.org/wp-content/uploads/Packet_flow_7.jpg)
*One of the simplest examples of a network. IP allows the different hosts (desktops at bottom) to send messages to each other despite not being directly connected*

TCP then builds on-top of IP to allow larger "streams" of data to be transmitted. TCP also gurantees reliability - if some of the data is lost while traversing the network, TCP is able to detect this and resend that data.

![TCP state machine](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tcp_state_diagram_fixed_new.svg/1280px-Tcp_state_diagram_fixed_new.svg.png)
*Model showing the different states of a TCP connection and how they change*

## The Process

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
<div>

### Weeks 1-2: Research and set-up

My teammate and I started by reading the RFC specifications in order to develop an implementation plan for the future. We sketched out what data structures and algorithms we would use. We also started setting up our code by creating a simple command-line "frontend" that would allows us to interact with devices (in our case, different terminal instances) running our IP/TCP program.

</div>
<div>

### Weeks 3-4: Implementing IP

We first started with the simplest case - 2 devices directly communicating. Then we gradually adapted our implementation to allow more complicated networks. We had to implement another protocol called ARP to allow devices to communicate metadata with each other. Throughout the process, we used a network-analyzer tool called [Wireshark](https://www.wireshark.org/) to debug and verify our program worked as intended.

</div>
<div>

### Weeks 5-6: Start implementing TCP

After finishing IP, we shifted our focus to building out TCP. We had to deal with several nasty and hard-to-reproduce bugs. In addition to the manual testing we were previously doing, I wrote some automated test suites to help us localize the issues and to ensure future changes wouldn't re-introduce bugs.

</div>
<div>

### Weeks 7-8: Finishing TCP

We solved all the previous bugs and finished implementing TCP, accounting for as many edge cases as we could. We were very happy with our final implementation - it held up under performance tests that involved transmitting several megabytes worth of data.

</div>
</div>

Throughout the process, my teammate and I worked closely together - we wanted to ensure we both understood every line of code in the codebase regardless of who originally wrote it. Thus we usually opted to pair-program, but also didn't shy away from splitting up work when necessary to get things done.

## Lessons learned

- Deep understanding of how the internet works at a low-level
- Importance of frequent testing and documentation
- How to effectively work on a team in a large codebase
- New appreciation for creating just the right-level of abstractions
- Proficiency programming and debugging in a concurrent environment
