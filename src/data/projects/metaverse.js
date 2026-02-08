export default { 
    id: 4,
    show: true,
    slug: 'metaverse-nft',
    link: '/project/metaverse-nft',
    cardImage: '/images/UE_Meta/NFT_pic.png',
    title: 'Metaverse & Virtual Interaction Projects' ,
    role: 'XR Developer',
    types: ['Metaverse', 'NFT Integration', 'Unreal Engine'],
    shortDescription: 'Metaverse-ready digital wallet and NFT transaction system integrated into an Unreal Engine-based virtual world. Focused on enabling secure NFT ownership verification and in-world transactions.',
    tags: ['Metaverse', 'NFT', 'Web3', 'Wallet Integration', 'Blockchain', 'Unreal Engine'],
    link1:[''],
    citation:'',
    mainArt: {
      type: 'image',
      src: 'images/publications/metaverse/main.jpg',
      alt: 'Metaverse Environment',
      description: ''
    },
    secondaryArt: {
      type: 'image',
      src: 'images/publications/metaverse/secondary.jpg',
      alt: 'Avatar Customization',
      description: ''
    },
    summaryHtml: `
      <h3>Overview</h3>
      <p>
      Developed a metaverse-ready digital wallet and NFT transaction system integrated into an Unreal Engine–based virtual world.
      The project focused on enabling secure NFT ownership verification and in-world transactions, allowing users to interact with blockchain-backed digital assets directly inside a real-time immersive environment.
      </p>
      <p>
      This system was designed as a foundation layer for metaverse experiences, supporting future expansion into virtual economies and persistent digital ownership.
      </p>
      
      <h3>Key Contributions</h3>
      <ul>
        <li><strong>NFT Wallet Integration:</strong> Implemented a digital wallet connection to enable NFT authentication and transaction handling within the metaverse environment.</li>
        <li><strong>Blockchain-Based Asset Ownership:</strong> Verified NFT ownership to control access, usage, and visibility of digital assets inside the virtual world.</li>
        <li><strong>In-World Transaction Flow:</strong> Enabled blockchain-backed interactions that allow users to connect wallets and trigger NFT-related actions directly from Unreal Engine.</li>
        <li><strong>Metaverse-Ready Architecture:</strong> Structured the system to support persistent digital assets and future scalability for virtual worlds.</li>
        <li><strong>Secure Web3 Interaction Layer:</strong> Integrated Web3 communication to safely handle wallet connectivity and transaction validation.</li>
      </ul>

      <h3>Technical Implementation</h3>
      <ul>
        <li>Unreal Engine (Blueprints & C++)</li>
        <li>Web3 wallet connectivity (external integration)</li>
        <li>NFT ownership verification logic</li>
        <li>Blockchain transaction triggering from Unreal Engine</li>
        <li>Secure API / middleware-based blockchain communication</li>
        <li>Metaverse environment integration</li>
      </ul>

      <h3>Impact</h3>
      <p>
      This project demonstrates the practical integration of Web3 technologies within Unreal Engine, showcasing how NFT wallets and blockchain transactions can function inside immersive virtual worlds.
      It highlights real-world readiness for metaverse platforms, digital ownership systems, and next-generation virtual experiences.
      </p>
    `,
  
    gallery: [
      {
        type: 'image',
        src: '/images/publications/metaverse/main.jpg',
        alt: 'Metaverse Space',
        topText: '',
        bottomText: 'Immersive virtual environment'
      },
      {
        type: 'image',
        src: '/images/publications/metaverse/secondary.jpg',
        alt: 'Avatar Customization',
        topText: '',
        bottomText: 'NFT-based avatar personalization'
      }
    ]
}
