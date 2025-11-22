import './style.css'

function App() {
  

  return (
    <div className="min-h-screen w-full grid grid-cols-3 grid-rows-4 gap-4 p-6 bg-base-200">     
      <div className="card bg-base-100 shadow-xl flex flex-col justify-center row-span-2">
        <figure>
          <img src="public/IMG_20200811_170123_156.jpg" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Ben Ross</h1>
          <p>A portfolio. Explore my work and skills below.</p>
          <p>Consultant, Data Analyst & GIS Developer based in Brisbane.</p>

          <div className="mockup-code w-full h-full">
            <pre data-prefix="~"><code><b>Contacts and links</b></code></pre>
            <pre data-prefix="~"><code>ben.samuel.ross@gmail.com</code></pre>
            <pre data-prefix="~"><code><a href="https://github.com/bensamross">https://github.com/bensamross</a></code></pre>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow flex flex-col justify-center items-center">
        <div className="card-body">
          <h2 className="card-title">Skills</h2>
          <span className="badge">Python</span>
          <span className="badge">JavaScript (Typescript, React, etc.)</span>
          <span className="badge">Rust</span>
          <span className="badge">...</span>
          <h2>Technical capabilities</h2>
          <p>Write, maintain, debug, and execute code at an intermediate to high level. Confidently and thoroughly maintain and publish data to the ArcGIS Online environment, enabling modern and interactive data delivery to clients or the public. I have used these online systems for many years and am comfortable with the entire suite of tools.</p>
          <p>Commercial UAV pilot with zero incidents. I am able to collect survey grade data both on the ground and from the air. I’m a thorough documenter, writing down every part of a process so that it can be repeated or improved by another party. Scientific reports and technical memos are a key part of my work process.</p>
        </div>
      </div>

      <div className="card bg-accent shadow flex flex-col justify-center items-center">
        <div className="card-body">
          <h2 className="card-title">Education</h2>
          <h2>Education</h2>
          <p><strong>Otago University (NZ)</strong>BSc. 2013 / MSc. 2015</p>
          <p>Graduating in Geophysics applied to the sub Antarctic Auckland Islands and their glacial history. Seismic and bathymetric data acquisition and processing was core to these studies, as were hydrological modelling and structural processes. Surveying was a secondary focus to support these learnings.</p>
        </div>
      </div>

      {/* Tile 3: spans 2 rows */}
      <div className="row-span-2 col-span-2 card bg-secondary text-accent-content flex flex-col justify-center items-center">
        <div className="card-body">
          <h2 className="card-title">Projects</h2>
          <p>See examples of my work in geospatial and environmental sciences.</p><h2>Develop custom software to operate high performance hardware for advanced environmental research</h2>
          <p>Cutting edge hardware setups require custom software to control the functionality of all the systems exactly as desired. I have been solely responsible for designing the interface, underlying algorithms, and interconnectivity of a software package that works. Built with modern methods and a range of programming languages.</p>
          <h2>Engineer an automated cloud management solution for large volumes of critical data</h2>
          <p>Clients of tecHoney commonly have terabytes of data stored locally (in some cases on loose hard drives in a drawer!). I have written and used a few straightforward data migration scripts that help to move these data from local systems to the cloud in a seamless way that reduces impact to the users. Drivers for uploading data are reduced costs and significant security improvements.</p>
          <h2>A subsidence model of the Condamine Alluvium using remote sensing calibration</h2>
          <p>Wrote scripted downloads and semi supervised processing for very large volumes of Sentinel-1 InSAR data in an attempt to monitor long term vertical ground motion influenced by groundwater associated gas extraction. The tasks were a hybrid of python and ArcGIS bulk data handling and the data are still part of ongoing research.</p>
 
          <h2>Hybrid cloud integration of key data assets to increase accessibility</h2>
          <p>Made key themed group data assets less disorganised and more readily available by procuring and creating a cloud architecture system. Then configuring and uploading those assets to the system so non-local processing can be performed. Resulting in significant computing time savings.</p>
          <h2>Prototype development of a thermal imaging system to detect asset damage</h2>
          <p>Field tested a prototype drone mounted thermal camera to calibrate a calculated model, aimed at detecting minor changes in ground surface temperature. As a means of locating piped water leaks that have no surface expression. Calibrations were performed with processed GPR data and GPS located utility detection.</p>
          <h2>Hydrographic survey of a river and harbour for flood control</h2>
          <p>Undertook a hydrographic survey of roughly 80km of river to quantify the risk of flooding and bank erosion in a low lying urban environment. Additional baythmetric survey works were performed on the river mouth to evaluate sediment load and coordinate dredging.</p>
          <h2>4-dimensional modelling of the Wellington Port capturing earthquake damage</h2>
          <p>Undertook laser scanning and asset digitisation over a term of 2 years to evaluate changes in soil deformation around the port of Wellington. Resulting in a comprehensive integrated point cloud model. Additional tasks included remote video logging of sub-surface trenches and pipes.</p>
          <h2>Installation of groundwater bores to improve community resilience</h2>
          <p>Community three waters resilience needs to be improved by investment in resilience infrastructure like groundwater bores and minituarised water treatment stations. The placement and installation of these bores was partially supervised by myself. Including groundwater modeling in the affected area and bore logging for archival.</p>
        </div>
      </div>

      {/* <div className="card bg-base-100 shadow flex flex-col justify-center items-center">
        <div className="card-body">
          <h2 className="card-title">Consulting</h2>
          <p>I also offer consultant and contract type work. If you are seeking consulting services in environmental science and geospatial development then I can certainly offer my skills. Just reach out using the information at the bottom of the page and we can arrange a friendly meeting.</p>
          <h2>Code development & automation</h2>
          <p>Make computers do the hard work. I am confidently able to implement code that can handle data, manipulate information, and leverage statistics for better decision making. My skills in python and javascript mean I am perfectly capable of automating scientific tasks and connecting those calculations to a nice user interface and/or existing system.</p>
          <h2>Business data analytics</h2>
          <p>I can competently undertake business data analytics and processing so you can gain better insights into your data. In general I can extract, transform, & load data into data warehouses. OR setup a data warehouse in the cloud that can be used by a larger team.</p>
          <h2>GIS and environmental consulting</h2>
          <p>Gain powerful insights into your data in a clear and concise manner. My extensive experience in environmental sciences, namely; hydrogeology, remote sensing, & geophysics. I have worked in all manner of companies from startups to state government.</p>
        </div>
      </div> */}
    </div>
  )
}

export default App
