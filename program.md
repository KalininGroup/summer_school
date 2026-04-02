---
title: Preliminary program
menu_title: Program
menu_icon: clock
---


<style>
  .agenda-grid {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    table-layout: fixed;
  }

  .agenda-grid td,
  .agenda-grid th {
    border: 1px solid #999;
    padding: 6px 8px;
    vertical-align: middle;
    box-sizing: border-box;
  }

  /* Allow long titles to wrap correctly */
  .agenda-grid td {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: normal;
  }


  /* Keep time columns on one line */
  .agenda-grid td:nth-child(1),
  .agenda-grid td:nth-child(2) {
    white-space: nowrap;
  }

  /* Header and row colors */
  .dayhdr { background:#eee; font-weight:bold; }

  .purple { background:#9b00ff; font-weight:bold; text-align:center; color:#000; }
  .cyan { background:#00f0f0; font-weight:bold; }
  .lightblue { background:#d6e4ff; }
  .yellow { background:#f6e9b6; }
  .softgray { background:#f5f5f5; }

  /* Force color onto TDs (important for table-layout:fixed) */
  .agenda-grid tr.cyan td { background:#00f0f0; }
  .agenda-grid tr.yellow td { background:#f6e9b6; }
  .agenda-grid tr.lightblue td { background:#d6e4ff; }
  .agenda-grid tr.purple td { background:#9b00ff; color:#000; }
  .agenda-grid tr.softgray td { background:#f5f5f5; }

  .center { text-align:center; }

  .green, .blue, .red {
    color:#000;
    font-weight:700;
  }
</style>

<table class="agenda-grid">

<colgroup>
  <col style="width:10%">
  <col style="width:10%">
  <col style="width:15%">
  <col style="width:15%">
  <col style="width:15%">
  <col style="width:15%">
  <col style="width:10%">
  <col style="width:10%">
</colgroup>



  <!-- ===================== DAY 1 ===================== -->
  <tr class="dayhdr">
    <td colspan="8"><strong>Day 1: Atomic Resolution STEM and Physics from Atomic Positions</strong></td>
  </tr>

  <tr>
    <td>8:30 AM</td><td>9:00 AM</td>
    <td colspan="6">
      <strong>Welcome</strong>
    </td>
  </tr>

  <tr>
    <td>9:00 AM</td><td>10:00 AM</td>
    <td colspan="6"><strong>Principles of Electron Optics and Aberration Correction in STEM (Duscher)</td>
  </tr>

  <tr>
    <td>10:00 AM</td><td>10:50 AM</td>
    <td colspan="6"><strong>Remote Aberration Correction in STEM (Duscher, Houston assist)</td>
  </tr>

  <tr class="softgray">
    <td>10:50 AM</td><td>11:00 AM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>11:10 AM</td><td>12:00 AM</td>
    <td colspan="6"><strong>Simulation of Ronchigrams [Participant computer] (Duscher)</td>
  </tr>

  <tr>
    <td>12:00 AM</td><td>1:00 PM</td>
    <td colspan="6"><strong>Lunch (provided for registered onsite participants)</td>
  </tr>

  <tr>
    <td>1:00 PM</td><td>2:00 PM</td>
    <td colspan="6"><strong>Remote Atomic Resolution Imaging (Duscher, Houston assist)</td>
  </tr>

  <tr>
    <td>2:00 PM</td><td>2:50 PM</td>
    <td colspan="6"><strong>Methods of Atom Position determination [Participant computer] (Barakati)</td>
  </tr>

  <tr class="softgray">
    <td>2:50 PM</td><td>3:10 PM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>3:10 PM</td><td>4:00 PM</td>
    <td colspan="6"><strong>First Machine Learning Algorithms for Atomically Resolved Images (Houston)</td>
  </tr>

  <tr>
    <td>4:00 PM</td><td>5:00 PM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

  <!-- ===================== DAY 2 ===================== -->
   <tr class="dayhdr">
    <td colspan="8"><strong>Day 2: Electron Diffraction and 4D-STEM</strong></td>
  </tr>

  <tr>
    <td>9:00 AM</td><td>10:00 AM</td>
    <td colspan="6"><strong>Introduction to Diffraction (Duscher)</td>
  </tr>

  <tr>
    <td>10:00 AM</td><td>10:50 AM</td>
    <td colspan="6"><strong>Remote Diffraction Acquisition in STEM (Duscher, Houston)</td>
  </tr>

  <tr class="softgray">
    <td>10:50 AM</td><td>11:00 AM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>11:10 AM</td><td>12:00 AM</td>
    <td colspan="6"><strong>Simulation of Diffraction Pattern (Duscher)</td>
  </tr>

  <tr>
    <td>12:00 AM</td><td>1:00 PM</td>
    <td colspan="6"><strong>Lunch (provided for registered onsite participants)</td>
  </tr>

  <tr>
    <td>1:00 PM</td><td>2:00 PM</td>
    <td colspan="6"><strong>Analyzing Diffraction pattern [Participant computer] (Duscher, Houston)</td>
  </tr>

  <tr>
    <td>2:00 PM</td><td>2:50 PM</td>
    <td colspan="6"><strong>Clustering Algorithms for 1 and 2D datasets (Barakati)</td>
  </tr>

  <tr class="softgray">
    <td>2:50 PM</td><td>3:10 PM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>3:10 PM</td><td>4:00 PM</td>
    <td colspan="6"><strong>Conventional and Smart Acquisition of 4D STEM (Houston)</td>
  </tr>

  <tr>
    <td>4:00 PM</td><td>5:00 PM</td>
    <td colspan="6"><strong>Processing of 4D Datasets [Participant computer] (Houston)</td>
  </tr>
  
  <!-- ===================== DAY 3 ===================== -->
   <tr class="dayhdr">
    <td colspan="8"><strong>Day3: Remote and Conventional Acquisition of Spectroscopic Data and ML-enabled analysis</strong></td>
  </tr>

  <tr>
    <td>9:00 AM</td><td>10:00 AM</td>
    <td colspan="6"><strong>Introduction to Spectroscopy (Duscher)</td>
  </tr>

  <tr>
    <td>10:00 AM</td><td>10:50 AM</td>
    <td colspan="6"><strong>Remote Acquisition of EDS spectra in STEM (Duscher, Houston)</td>
  </tr>

  <tr class="softgray">
    <td>10:50 AM</td><td>11:00 AM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>11:10 AM</td><td>12:00 AM</td>
    <td colspan="6"><strong>Analysis of EDS [Participant computer] (Duscher)</td>
  </tr>

  <tr>
    <td>12:00 AM</td><td>1:00 PM</td>
    <td colspan="6"><strong>Lunch (provided for registered onsite participants)</td>
  </tr>

  <tr>
    <td>1:00 PM</td><td>2:00 PM</td>
    <td colspan="6"><strong>Remote and Smart Acquisition of spectra in STEM (Duscher, Houston)</td>
  </tr>

  <tr>
    <td>2:00 PM</td><td>2:50 PM</td>
    <td colspan="6"><strong>Conventional Analysis of EELS [Participant computer] (Duscher)</td>
  </tr>

  <tr class="softgray">
    <td>2:50 PM</td><td>3:10 PM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>3:10 PM</td><td>4:00 PM</td>
    <td colspan="6"><strong>Machine Learning of Spectroscopic Datasets (Kalinin)</td>
  </tr>

  <tr>
    <td>4:00 PM</td><td>5:00 PM</td>
    <td colspan="6"><strong>ML-enhanced Analysis of EELS [Participant computer] (Kalinin)</td>
  </tr>

   <!-- ===================== DAY 4 ===================== -->
   <tr class="dayhdr">
    <td colspan="8"><strong>Day3: ML for STEM: from post-acquisition to real time analytics</strong></td>
  </tr>

  <tr>
    <td>9:00 AM</td><td>10:00 AM</td>
    <td colspan="6"><strong>Introduction to Workflows in Machine Learning (Kalinin)</td>
  </tr>

  <tr>
    <td>10:00 AM</td><td>10:50 AM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

  <tr class="softgray">
    <td>10:50 AM</td><td>11:00 AM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>11:10 AM</td><td>12:00 AM</td>
    <td colspan="6"><strong>Neural Networks for Images II [Participant computer] (Pratiush)</td>
  </tr>

  <tr>
    <td>12:00 AM</td><td>1:00 PM</td>
    <td colspan="6"><strong>Lunch (provided for registered onsite participants)</td>
  </tr>

  <tr>
    <td>1:00 PM</td><td>2:00 PM</td>
    <td colspan="6"><strong>VAE for Image Analysis (Kalinin)</td>
  </tr>

  <tr>
    <td>2:00 PM</td><td>2:50 PM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

  <tr class="softgray">
    <td>2:50 PM</td><td>3:10 PM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>3:10 PM</td><td>4:00 PM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

  <tr>
    <td>4:00 PM</td><td>4:30 PM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

  <tr>
    <td>4:30 PM</td><td>5:00 PM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

   <!-- ===================== DAY 5 ===================== -->
   <tr class="dayhdr">
    <td colspan="8"><strong>Day3: Decision making in electron microscopy and human-in the loop automated experiment (hAE)</strong></td>
  </tr>

  <tr>
    <td>9:00 AM</td><td>10:00 AM</td>
    <td colspan="6"><strong>Decision Making in Microscopy (Kalinin)</td>
  </tr>

  <tr>
    <td>10:00 AM</td><td>10:50 AM</td>
    <td colspan="6"><strong>Reward Functions for Decision Making (Barakati)</td>
  </tr>

  <tr class="softgray">
    <td>10:50 AM</td><td>11:00 AM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>11:10 AM</td><td>12:00 AM</td>
    <td colspan="6"><strong>Principles of Gaussian Processes and Bayesian Optimization (Kalinin)</td>
  </tr>

  <tr>
    <td>12:00 AM</td><td>1:00 PM</td>
    <td colspan="6"><strong>Lunch (provided for registered onsite participants)</td>
  </tr>

  <tr>
    <td>1:00 PM</td><td>2:00 PM</td>
    <td colspan="6"><strong>Deep Kernel Neural Learning and hAE (Kalinin)</td>
  </tr>

  <tr>
    <td>2:00 PM</td><td>2:50 PM</td>
    <td colspan="6"><strong>New opportunities enabled by remote ML-controlled acquisition (Utkarsh)</td>
  </tr>

  <tr class="softgray">
    <td>2:50 PM</td><td>3:10 PM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr>
    <td>3:10 PM</td><td>4:00 PM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

  <tr>
    <td>4:00 PM</td><td>4:30 PM</td>
    <td colspan="6"><strong>Guest lecture</td>
  </tr>

  <tr>
    <td>4:30 PM</td><td>5:00 PM</td>
    <td colspan="6"><strong>Conclusion (Kalinin and Duscher, hackathon)</td>
  </tr>

</table>
