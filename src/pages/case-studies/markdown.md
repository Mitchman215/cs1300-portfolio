## Summary
I sought to redesign the home page for the [GCC (GNU Compiler Collection) project](https://gcc.gnu.org/) to make it more responsive and accessible. I chose this site because I think, more often than not, documentation for software engineering tools is often neglected and has room for improvement.

## Existing site
![[Pasted image 20240225213506.png]]
### Problems
**General**
- Not responsive to different screen sizes - same exact layout on desktop and mobile makes readability difficult (especially on mobile or slim desktop window)
- Hard to find important interactive elements like search bar and field to sign up for announcements
- Cluttered page - too much information all at once, text size is pretty small
- Very minimal visual hierarchy
**Navigation menu**
- Non-standard location
- Is at the end of HTML as opposed to the beginning (not convenient for screen readers)
- Cluttered with sub-items
**News section** 
- Sometimes items has additional description, sometimes not. 
- Dates not in consistent layout due to varying title lengths
### Accessibility Report
I ran WebAIM WAVE on the website and found several problems. The two text input fields (searchbar and email address subscription) were missing form labels for example, and the entire page layout used HTML tables. Both of these issues (along with a few more minor ones like missing semantic HTML page regions) can lead to problems with screen-readers.
Overall, I agree with all the issues raised by this tool and intend to fix them.

## Prototyping
#### Initial Sketches

#### Final Sketch

### Low-Fidelity Mockups
#### Desktop
![[Pasted image 20240225222154.png]]
#### Tablet
![[Pasted image 20240227115153.png]]
#### Mobile
![[Pasted image 20240225222002.png]]
### High-Fidelity Mockup
#### Desktop
![](https://lh7-us.googleusercontent.com/2RZhqjIltB2nOBejvp5i4D6D59NdtsN8cFzminY1kTOJBMSLfHq-fZKGHO4t1QxfAD_dhtaUdL6hb3jbWjJg-Z5tSoLSIdDvjhDZrK2N-gD-mxFG23XMeAk0JIHQxAWyqY-tEC37jNAvfrOhmMBHZOQ)
#### Tablet
![](https://lh7-us.googleusercontent.com/RUAXG1phXPEV8UOmXlrO4cDoPqfhcnYZugjRmDct8cRLfySFLfOmz6mCS0FbhGt7RbAuROtnuIOdoOJgK9jZrCqocmcvLrb84jmsSh5HVJ2czPHUHGYcRw_uJ-Ie-irH8IGGazcAdMAqJgatYMk-E7w)
#### Mobile
![](https://lh7-us.googleusercontent.com/lGg7SrWHrsR82QYCsG4Wl9plBerrqEs0D3NQcQG5FWPkn9jtGibznM-lCvFAp8BPQ9sCqyG6QWOqCGJJ5OvE0awu2hdSUzFK4MXAponAOKQgWQHtjl4fj1kund1f5WhGFfF7XWEsRka5-gCZfQi79HM)
### Style Guide
![](https://lh7-us.googleusercontent.com/4hScrbLJcaMo8GU2wAqZ_riWgTjwcnmdaYJwCj5_y_IltGzolwNljvlPfF4rAG5MgdiwR9O0PnuFj6skW6_MKfBFiSgxG-7bxguAOfp5nW-Uv1PJ9gmIJ7F9Ofngz8VfQmIWXiaCsgVWA-G4ZywmxZU)
## Final Product
The full website can be found here.
### Reflection