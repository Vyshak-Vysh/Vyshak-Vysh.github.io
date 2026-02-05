export default { 
    id: 5,
    show: true,
    slug: 'webxr-desert',
    link: '/project/webxr-desert',
    cardImage: '/images/publications/webxr/cover.png',
    title: 'WebXR Cross-Platform XR Experience' ,
    role: 'Web XR Developer',
    types: ['WebXR', 'Browser-Based'],
    shortDescription: 'A browser-based desert-themed XR environment accessible without native installation, optimized for mobile, PC, and VR browsers.',
    tags: ['WebXR', 'AR', 'VR', 'Unity', 'Web3D', 'Cross-Platform'],
    link1:[''],
    citation:'',
    mainArt: {
      type: 'image',
      src: 'images/publications/webxr/main.jpg',
      alt: 'Desert XR Environment',
      description: ''
    },
    secondaryArt: {
      type: 'image',
      src: 'images/publications/webxr/secondary.jpg',
      alt: 'WebXR Interaction',
      description: ''
    },
    summaryHtml: `
      <h3>Overview</h3>
      <p>
      A cutting-edge WebXR application delivering an immersive desert exploration experience directly through 
      web browsers. Designed for accessibility and wide reach, enabling AR and VR experiences without requiring 
      users to download native applications.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Cross-Platform Compatibility:</strong> Works on mobile browsers, PC, and VR headsets via WebXR</li>
        <li><strong>No Installation Required:</strong> Direct access via URL, reducing friction for users</li>
        <li><strong>AR & VR Modes:</strong> Single codebase supporting both AR and VR experiences</li>
        <li><strong>Responsive Performance:</strong> Optimized for varied hardware specifications</li>
        <li><strong>Immersive Interaction:</strong> Intuitive spatial interaction mechanics</li>
      </ul>

      <h3>Technical Stack</h3>
      <ul>
        <li>Unity WebGL Build Target</li>
        <li>WebXR Device API Integration</li>
        <li>Three.js / Babylon.js for fallback support</li>
        <li>Progressive Web App (PWA) capabilities</li>
        <li>Canvas and WebGL optimization</li>
      </ul>

      <h3>Accessibility & Performance</h3>
      <ul>
        <li>Progressive enhancement for varying device capabilities</li>
        <li>Reduced bundle size for quick loading</li>
        <li>Adaptive quality settings based on device performance</li>
        <li>Touch and gesture-based controls</li>
      </ul>

      <h3>Impact</h3>
      <p>
      Demonstrated the viability of WebXR for delivering immersive experiences without installation barriers, 
      significantly expanding XR accessibility to mainstream audiences.
      </p>
    `,
  
    gallery: [
      {
        type: 'image',
        src: '/images/publications/webxr/main.jpg',
        alt: 'Desert Landscape',
        topText: '',
        bottomText: 'Browser-based immersive environment'
      },
      {
        type: 'image',
        src: '/images/publications/webxr/secondary.jpg',
        alt: 'AR Mode',
        topText: '',
        bottomText: 'WebXR AR interaction on mobile'
      }
    ]
}
