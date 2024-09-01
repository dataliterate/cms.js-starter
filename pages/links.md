---
title: Links
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
  <defs>
    <style>
      .node { fill: #FF00FF; }
      .link { stroke-width: 1.5; }
      @keyframes pulse {
        0%, 100% { r: 3; }
        50% { r: 5; }
      }
    </style>
    <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF00FF">
        <animate attributeName="stop-color" values="#FF00FF; #00FFFF; #FF00FF" dur="4s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" stop-color="#00FFFF">
        <animate attributeName="stop-color" values="#00FFFF; #FF00FF; #00FFFF" dur="4s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
  </defs>
  
  <!-- Nodes -->
  <circle class="node" cx="120" cy="120" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle class="node" cx="60" cy="60" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
  </circle>
  <circle class="node" cx="180" cy="60" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s" />
  </circle>
  <circle class="node" cx="60" cy="180" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1.5s" />
  </circle>
  <circle class="node" cx="180" cy="180" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.75s" />
  </circle>
  <circle class="node" cx="120" cy="60" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.25s" />
  </circle>
  <circle class="node" cx="120" cy="180" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1.25s" />
  </circle>
  <circle class="node" cx="60" cy="120" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1.75s" />
  </circle>
  <circle class="node" cx="180" cy="120" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
  </circle>
  <circle class="node" cx="90" cy="90" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1.5s" />
  </circle>
  <circle class="node" cx="150" cy="90" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.75s" />
  </circle>
  <circle class="node" cx="90" cy="150" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s" />
  </circle>
  <circle class="node" cx="150" cy="150" r="3">
    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.25s" />
  </circle>

  <!-- Links -->
  <line class="link" x1="120" y1="120" x2="60" y2="60" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0s" />
  </line>
  <line class="link" x1="60" y1="60" x2="180" y2="60" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
  </line>
  <line class="link" x1="180" y1="60" x2="180" y2="180" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="2s" />
  </line>
  <line class="link" x1="180" y1="180" x2="60" y2="180" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
  </line>
  <line class="link" x1="60" y1="180" x2="60" y2="60" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
  </line>
  <line class="link" x1="120" y1="60" x2="90" y2="150" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="4.2s" repeatCount="indefinite" begin="0.8s" />
  </line>
  <line class="link" x1="180" y1="120" x2="90" y2="90" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3.7s" repeatCount="indefinite" begin="2.5s" />
  </line>
  <line class="link" x1="150" y1="90" x2="60" y2="120" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="4.3s" repeatCount="indefinite" begin="1.2s" />
  </line>
  <line class="link" x1="120" y1="180" x2="150" y2="90" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3.9s" repeatCount="indefinite" begin="0.3s" />
  </line>
  <line class="link" x1="90" y1="90" x2="150" y2="150" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="4.1s" repeatCount="indefinite" begin="1.8s" />
  </line>
  <line class="link" x1="120" y1="120" x2="180" y2="120" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3.6s" repeatCount="indefinite" begin="0.7s" />
  </line>
  <line class="link" x1="60" y1="120" x2="150" y2="150" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="4.4s" repeatCount="indefinite" begin="2.2s" />
  </line>
  <line class="link" x1="120" y1="60" x2="120" y2="180" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3.3s" repeatCount="indefinite" begin="1.6s" />
  </line>
  <line class="link" x1="90" y1="150" x2="180" y2="60" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="4.7s" repeatCount="indefinite" begin="0.9s" />
  </line>
  <line class="link" x1="60" y1="60" x2="150" y2="150" stroke="url(#linkGradient)">
    <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite" begin="2.7s" />
  </line>
</svg>

### [nitrada.bandcamp.com](https://nitrada.bandcamp.com)
Tellus molestie nunc non blandit massa. Porttitor leo a diam sollicitudin. Malesuada pellentesque elit eget gravida cum sociis natoque. Ultricies leo integer malesuada nunc vel risus commodo viverra.

### [Data Populator](https://www.datapopulator.com)
Ac feugiat sed lectus vestibulum mattis ullamcorper. Eu volutpat odio facilisis mauris sit amet massa vitae. 

### [SoundCloud](https://www.datapopulator.com)
Tincidunt dui ut ornare lectus sit amet. Sed augue lacus viverra vitae congue eu. Nisi lacus sed viverra tellus. Sed id semper risus in. Urna nunc id cursus metus aliquam.