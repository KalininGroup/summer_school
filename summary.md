---
title: 4th Summer School Summary
menu_title: Summary
menu_icon: clipboard
permalink: /summary/
---

<!-- SUMMARY SECTION -->
<section class="school-summary">
  <h2 class="section-title" style="margin-bottom: -20px">About the 4th Summer School</h2>
  
  <div class="section-card">
    <p>
      The 4th annual Summer School on Machine Learning for Electron Microscopy was a landmark event, drawing an incredible global audience of <strong>over 800 registered participants</strong>. Alongside the <strong>more than 250 active attendees</strong> engaging directly in our live sessions, the program's reach extended even further as hundreds of researchers across diverse time zones participated asynchronously, utilizing our comprehensive library of recorded lectures and materials.
    </p>
    <p style="margin-top: 10px">
      Participants dove deep into the mechanics of self-driving labs, exploring how cloud connectivity, advanced application programming interfaces (APIs), and reward-based optimization are revolutionizing data collection. By bridging the gap between traditional microscopy and modern federated AI networks, the school successfully cemented the University of Tennessee, Knoxville's position at the forefront of autonomous scientific discovery.
    </p>
  </div>
</section>

<!-- MAP BOX -->
<section class="map-section">
  <h2 class="section-title">Global Participation</h2>
  <div style="position: relative; max-width: 800px; margin: 0 auto;">
    <img src="/assets/mlstem2026_map.png" alt="World map of participants" style="width: 100%; height: auto; border-radius: 8px;">
  </div>
</section>

<!-- LINKEDIN EMBED SECTION -->
<section class="linkedin-section">
  <h2 class="section-title">Event Spotlight</h2>
  <div style="display: flex; justify-content: center; margin: 2rem 0;">
    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7477766277969719297?collapsed=1" 
            height="628" 
            width="504" 
            frameborder="0" 
            allowfullscreen="" 
            title="Embedded post"
            style="max-width: 100%; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </iframe>
  </div>
</section>

<!-- COMBINED FEEDBACK & QUOTES SECTION -->
<section class="combined-feedback-section">
  
  <!-- LEFT SIDE: Feedback Highlights (1 Column) -->
  <div class="feedback-column">
    <h2 class="section-title" style="text-align: left; margin-top: 0; margin-bottom: 0;">Feedback Highlights</h2>    
    <div class="feedback-box">
      <h2>Learning & Inspiration</h2>
      <p>Participants gained a much clearer understanding of how AI/ML can be applied to electron microscopy and scientific research. Many commented that the school successfully connected theory with real-world applications and inspired new research directions.</p>
    </div>
    <div class="feedback-box">
      <h2>Hands-on Experience</h2>
      <p>The notebooks, hackathons, coding exercises, and practical workflows were the most valuable part of the program. Participants appreciated working with real datasets and seeing complete analysis pipelines.</p>
    </div>
    <div class="feedback-box">
      <h2>AI Agents & Autonomy</h2>
      <p>One of the strongest surprises for attendees was the content on autonomous microscopy, AI agents, digital twins, and closed-loop experimentation. Many described these sessions as eye-opening and motivating for their future research.</p>
    </div>
    <div class="feedback-box">
      <h2>Accessibility</h2>
      <p>Several participants started with little or no background in ML or electron microscopy and felt the school gave them a strong foundation and confidence to continue learning.</p>
    </div>
  </div>

  <!-- RIGHT SIDE: Quotes (2x3 Grid) -->
  <div class="quotes-column">
    <h2 class="section-title" style="text-align: left; margin-top: 0; margin-bottom: 1.5rem;">What Participants Said</h2>    
    <div class="quotes-grid-side-by-side">
      <div class="notice-box">
      <p><em>"The lectures on autonomous operation and real-time agentic workflows completely re-framed my long-term research goals."</em></p>
    </div>
    <div class="notice-box">
      <p><em>"I really enjoyed the Summer School and came away with many ideas that I'm excited to apply to my PhD research."</em></p>
    </div>
    <div class="notice-box">
      <p><em>"It completely solidified my trajectory toward computational materials science."</em></p>
    </div>
    <div class="notice-box">
      <p><em>"The Summer School strengthened both my technical knowledge and my confidence in applying machine learning to research problems."</em></p>
    </div>    
    <div class="notice-box">
      <p><em>"The most surprising thread was the move toward autonomous and federated operation. It gave me a concrete picture of what ML for science looks like when it's actually closing the loop on an instrument."</em></p>
    </div>    
    <div class="notice-box">
      <p><em>"This was probably the first time I stayed engaged from 9:00 AM to 5:00 PM for an entire week without feeling exhausted."</em></p>
    </div>
    </div>
  </div>
</section>

<!-- YOUTUBE PLAYLIST EMBED -->
<section class="video-section">
  <h2 class="section-title">Catch Up on the Lectures</h2>
  <div class="video">
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/videoseries?si=aF7ZoMs3-UEeYr1q&amp;list=PLfKfen23qi3w" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
      </iframe>
    </div>
  </div>
</section>

<!-- PHOTO GALLERY INTERFACE -->
<section class="gallery-section">
  <h2 class="section-title">Event Gallery</h2>
  
  <!-- Main Image Viewer -->
  <div class="main-image-viewer" style="position: relative; max-width: 800px; margin: 0 auto 15px auto; display: flex; align-items: center; justify-content: center; background: #1d1d1d; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">    
    <!-- Floating Navigation Arrows -->
    <button class="nav-arrow" onclick="prevImage()" style="position: absolute; left: 10px; z-index: 10; background: rgba(0,0,0,0.6); color: white; border: none; padding: 12px 18px; font-size: 1.5rem; cursor: pointer; border-radius: 4px; transition: background 0.2s;">&#10094;</button>    
    <img id="main-gallery-img" src="/assets/photos/photo01.jpg" alt="Main Event Image" style="width: 100%; max-height: 550px; object-fit: contain; border: 1px solid #e8ecf3;">     
    <button class="nav-arrow" onclick="nextImage()" style="position: absolute; right: 10px; z-index: 10; background: rgba(0,0,0,0.6); color: white; border: none; padding: 12px 18px; font-size: 1.5rem; cursor: pointer; border-radius: 4px; transition: background 0.2s;">&#10095;</button>

  </div>

  <!-- Top Row Previews (Auto-populated by JavaScript) -->
  <div id="gallery-thumbnails" class="gallery-thumbnails" style="display: flex; gap: 10px; overflow-x: auto; max-width: 800px; margin: 0 auto; padding: 10px 0; scroll-behavior: smooth;">
    <!-- Thumbnails will be injected here automatically -->
  </div>
</section>

<!-- Advanced Script for Gallery Functionality -->
<script>
  // 1. Automatically generate the list of 21 image paths
  const images = [];
  for (let i = 1; i <= 21; i++) {
    const numStr = i.toString().padStart(2, '0');
    images.push(`/assets/photos/photo${numStr}.jpg`);
  }
  
  let currentIndex = 0;
  const mainImage = document.getElementById("main-gallery-img");
  const thumbsContainer = document.getElementById("gallery-thumbnails");
  let thumbs = []; 

  // 2. Build the thumbnails in the HTML
  function initGallery() {
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.className = 'thumb';
      img.src = src;
      img.alt = `Gallery preview ${index + 1}`;
      img.onclick = () => changeImage(index);
      
      // Styling the thumbnails
      img.style.width = '100px';
      img.style.height = '75px';
      img.style.objectFit = 'cover';
      img.style.cursor = 'pointer';
      img.style.border = '3px solid transparent';
      img.style.borderRadius = '6px';
      img.style.flexShrink = '0';
      img.style.transition = 'border-color 0.2s ease';
      
      thumbsContainer.appendChild(img);
      thumbs.push(img);
    });
    
    // FIX: Pass 'false' so it doesn't auto-scroll the page on initial load!
    updateGallery(false); 
  }

  // 3. Update the main image and active thumbnail styling
  function updateGallery(shouldScroll = true) { // FIX: Added a check for scrolling
    mainImage.src = images[currentIndex];
    
    thumbs.forEach((thumb, idx) => {
      // Highlight the active thumbnail using your UTK orange
      thumb.style.borderColor = (idx === currentIndex) ? "#ff8200" : "transparent"; 
    });
    
    // FIX: Only scroll if the user actively clicked a button
    if (shouldScroll) {
      thumbs[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // 4. Navigation Controls
  function changeImage(index) {
    currentIndex = index;
    updateGallery(); // Defaults to true, so it will scroll
  }

  function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
  }

  function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
  }
  
  // 5. Fire it up!
  initGallery();
</script>