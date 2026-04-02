---
layout: page
title: Appalachian Regional Electron Microscopy Society Topical Conference
menu_title: Home
menu_icon: house-door
---

<style>
.animated-title {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: -0.5px;

  /* Multi-color gradient that will animate */
  background: linear-gradient(
    90deg,
    #ff7a18c3,   /* warm orange */
    #ffb347c5,   /* soft golden orange */
    #ff7a18c3    /* warm orange again for symmetry */
);

  background-size: 400% 100%; /* Needed for smooth sweeping effect */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Combine color wave + soft vertical float motion */
  animation: none; /*colorwave 35s linear infinite, floatwave 15s ease-in-out infinite; */
}

/* Left → Right color sweep */
@keyframes colorwave {
  0%   { background-position:   0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position:   0% 50%; }
}

/* Gentle up–down wave motion */
@keyframes floatwave {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-4px); }
}

/* Mobile scaling */
@media (max-width: 700px) {
  .animated-title {
    font-size: 2rem;
  }
}
</style>

<h1 class="animated-title">
  Summer School on ML for Electron Microscopy
</h1>

Dates: TBA
Hybrid format: online and at University of Tennessee, Knoxville, TN

---

The Summer School will introduce participants to the core concepts of Machine Learning for Electron Microscopy, with a strong emphasis on the rapidly evolving landscape of automated and AI‑assisted experimentation. While foundational ML topics will be covered, the central focus of the program is on next‑generation autonomous microscopy workflows and their practical implementation.

Participants will explore:
- AI‑driven experimental workflows
- Real‑time data analytics and adaptive decision‑making
- Hands‑on automation and instrument control
- Working with real microscopy data and digital twins
- Implementation of autonomous microscopy

Whether your interests lie in microscopy data analysis, automated instrument control, or AI‑enhanced materials discovery, this school offers a comprehensive introduction to the state‑of‑the‑art and a forward‑looking perspective on the future of ML‑enabled microscopy.

---

## 👥 Organizing Team

<!-- Team Grid Wrapper -->
<div class="team-grid">

  <!-- Kalinin -->
  <div class="team-card">
    <img src="{{ '/assets/kalinin.png' | relative_url }}" alt="Sergei V. Kalinin">
    <div class="team-meta">
      <div class="name">
        Sergei V. Kalinin
        <span class="socials">
          <a href="https://ae-spm.utk.edu/group-leader-pi" target="_blank" title="Website">
          🌐
          </a>
          <a href="https://scholar.google.com/citations?user=kAI2T5EAAAAJ" target="_blank" title="Google Scholar">
          📚
          </a>
        </span>
      </div>
      <div class="affil">University of Tennessee, Knoxville; Pacific Northwest National Laboratory</div>
    </div>
  </div>

  <!-- Duscher -->
  <div class="team-card">
    <img src="{{ '/assets/duscher.png' | relative_url }}" alt="Gerd Duscher">
    <div class="team-meta">
      <div class="name">
        Gerd Duscher
        <span class="socials">
          <a href="https://tickle.utk.edu/mse/faculty/gerd-duscher" target="_blank" title="Website">
          🌐
          </a>
          <a href="https://github.com/gduscher" target="_blank" title="GitHub">
          📚
          </a>          
        </span>
      </div>
      <div class="affil">University of Tennessee, Knoxville</div>
    </div>
  </div>

</div>




---

### Confirmed Speakers

<div style="margin-top:1.5rem; margin-bottom:1.5rem;">
<table style="width:100%; border-collapse:separate; border-spacing:0 12px;">
  <thead style="display:none;"></thead>
  <tbody>

    <!-- Row Template Example -->
    <tr style="background:#f8f8f8; border-radius:6px;">
      <td style="padding:12px 16px; font-weight:600;">David Awschalom</td>
      <td style="padding:12px 16px;">University of Chicago</td>
      <td style="padding:12px 16px; font-style:italic;">Opening Keynote</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Susanne Stemmer</td>
      <td style="padding:12px 16px;">UC Santa Barbara</td>
      <td style="padding:12px 16px; font-style:italic;">Topological Materials for Quantum Information Systems</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Marko Lončar</td>
      <td style="padding:12px 16px;">Harvard University</td>
      <td style="padding:12px 16px; font-style:italic;">Quantum Optical Interconnects</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Shashank Misra</td>
      <td style="padding:12px 16px;">Sandia National Laboratories</td>
      <td style="padding:12px 16px; font-style:italic;">Why Is Silicon Quantum Computing Taking So Long?</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Greg Tikhomirov</td>
      <td style="padding:12px 16px;">UC Berkeley</td>
      <td style="padding:12px 16px; font-style:italic;">Democratizing Nanofabrication via Molecular Self-Assembly</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Danna Freedman</td>
      <td style="padding:12px 16px;">MIT</td>
      <td style="padding:12px 16px; font-style:italic;">Molecular Color Centers</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Xiuling Li</td>
      <td style="padding:12px 16px;">UT Austin</td>
      <td style="padding:12px 16px; font-style:italic;">Quantum Sensing with Spin Defects in III-Nitrides</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Uli Wiesner</td>
      <td style="padding:12px 16px;">Cornell University</td>
      <td style="padding:12px 16px; font-style:italic;">Soft Matter Enabled Quantum Devices</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">John Randall</td>
      <td style="padding:12px 16px;">Zyvex Labs</td>
      <td style="padding:12px 16px; font-style:italic;">Atomic Precision Fabrication — A Top-Down Approach</td>
    </tr>

  </tbody>
</table>
</div>

---


### DEMOCritus Roadmap
<div style="margin-top:1.5rem;">
  <img 
      src="{{ '/assets/roadmap_2.png' | relative_url }}" 
      alt="DEMOcritus Roadmap"
      style="width:100%; max-width:1200px; border:1px solid #ccc; border-radius:6px; display:block; margin:auto;">
</div>

---

### Participation

This workshop is **invitation-only** to maintain focused discussion and actionable outcomes.  
If you believe your research group or organization should be represented, please contact the organizers.

**Workshop Chair:** Sergei V. Kalinin  
**Contact:** *sergei2@utk.edu*

<div style="text-align:center; font-size:0.9rem; opacity:0.7; margin-top:2rem;">
More details and session structure will be posted as finalized.
</div>


