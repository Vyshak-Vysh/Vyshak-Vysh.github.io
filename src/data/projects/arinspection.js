export default { 
    id: 1,
    show: true,
    slug: 'ai-ar-inspection',
    link: '/project/ai-ar-inspection',
    cardImage: '/images/Robotic_ARM/Robotic_ARM.png',
    title: 'AI-Driven AR Inspection System' ,
    role: 'AR/VR Developer',
    types: ['Industrial AR', 'Mobile App', 'Unity'],
    shortDescription: 'A production-focused industrial AR solution designed to detect and visualize real-time spatial deviations in mechanical systems using Unity 6 and OpenCV.',
    tags: ['AR', 'Unity 6', 'OpenCV', 'iOS', 'AI', 'Industrial'],
    link1:[''],
    citation:'',
    mainArt: {
      type: 'image',
      src: '/images/Robotic_ARM/Robotic_ARM_1.png',
      alt: 'AI-Driven AR Inspection System',
      description: ''
    },
    secondaryArt: {
      type: 'image',
      src: 'images/publications/arinspection/secondary.jpg',
      alt: 'AR Interface',
      description: ''
    },
    summaryHtml: `
      <h3>Overview</h3>
      <p>
      A cutting-edge industrial AR solution developed to revolutionize mechanical inspection processes. 
      Built with Unity 6 and integrated with OpenCV, this application enables real-time detection and visualization 
      of spatial deviations in robotic arms and mechanical systems.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Real-Time 3D Deviation Analysis:</strong> Leverages computer vision to detect and visualize deviations in real-time</li>
        <li><strong>Precise Visual Overlays:</strong> Provides accurate measurement, alignment, and inspection overlays</li>
        <li><strong>Mobile AR Deployment:</strong> Deployed as a native iOS application for iPad accessibility</li>
        <li><strong>AI-Powered Detection:</strong> Uses machine learning for intelligent anomaly detection</li>
      </ul>

      <h3>Impact</h3>
      <ul>
        <li>Reduced manual inspection errors significantly</li>
        <li>Enabled early defect detection in production pipelines</li>
        <li>Improved industrial quality assurance workflows</li>
        <li>Reduced downtime and rework costs</li>
      </ul>

      <h3>Technical Stack</h3>
      <p>Unity 6, C#, OpenCV, ARKit, Python (backend), iOS SDK</p>
    `,
  
    gallery: [
      {
        type: 'image',
        src: '/images/publications/arinspection/main.jpg',
        alt: 'AR Inspection Interface',
        topText: '',
        bottomText: 'Real-time deviation visualization'
      },
      {
        type: 'image',
        src: '/images/publications/arinspection/secondary.jpg',
        alt: 'AR Measurements',
        topText: '',
        bottomText: 'Precision measurement overlays'
      }
    ]
}
