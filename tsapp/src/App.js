import logo from './logo.svg';
import './App.css';
import RepeatGrid47 from './Icons and Images/Tech Studio images/Repeat Grid 47.png';
import Group25353 from './Icons and Images/Tech Studio images/Group 25353.png';
import noun_coding_3152169 from './Icons and Images/Tech Studio images/noun_coding_3152169.png';
import noun_Designer_1469595 from './noun_Designer_1469595.png';
import noun_UiandUx_907062 from './Icons and Images/Tech Studio images/noun_Ui and Ux_907062.png';
import Group182 from './Icons and Images/Tech Studio images/Group 182.png';
import noun_datascience_2475093 from './Icons and Images/Tech Studio images/noun_data science_2475093.png';

function App(){
  return (
    <div className="App">
      <div className="sec_1 container_fluid">
        <div className="find_div">
          <h3 className="firsth2">Find the best talents to grow your team</h3>
          <p className="p_1">
            Tech studio is relied upon by a great amount of companies for finding competent talents. We mould our talents to fit into their needed positions and your company structure.
          </p>
        </div>
        <div className="formdiv">
          <form className="form1">
           <input className="input1" type="text" placeholder="What role are you planning to fill" />
           <input className="input1" type="text" placeholder="Your email" />
           <input className="inputbtn" type="submit" placeholder="Get Started" />
          </form>
          <img src="{RepeatGrid47}" alt=""/>
        </div>
        
      </div>
      <div className="sec_2 container_fluid">
        
        <h3 className="HTW">How Techstudio works</h3>
        <p>for employers</p>
        <div className="sec_2div">
          <div className="sec_2a">
            <img src="{Group25353}" alt=""/>
            <h5 className="htw">Post a job</h5>
            <p className="para">
              Create an account and a befitting profile to attract job offers with ease. Your profile shows employers what makes you the right fit.
            </p>
          </div>
          <div className="sec_2a">
            <img src="{Group 25353.png}" alt=""/>
            <h5 className="htw">Review & shortlist</h5>
            <p className="para">
              Create a position on Hired and specify the skills and experience you’re looking for.
            </p>
          </div>
          <div className="sec_2a">
            <img src="{Group 25353.png}" alt=""/>
            <h5 className="htw">Interview & hire</h5>
            <p className="para">
            Create an account and a befitting profile to attract job offers with ease. Your profile shows employers what makes you the right fit.
            </p>
          </div>

        </div>
      </div>
      <div className="sec_3 container">
        <h3 className="HTW2">Hire to fill<br></br> the most in-demand roles</h3>
        <div className="d_grid">
          <div>
            <img src="{noun_Designer_1469595}" alt="" />
            <h6>Software Engineers</h6>
            <p>
              Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.
            </p>
          </div>
          <div>
            <img src="{noun_UiandUx_907062}" alt="" />
            <h6>Front-end Developers</h6>
            <p>
              Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.
            </p>
          </div>
          <div>
            <img src="{noun_coding_3152169}" alt="" />
            <h6>Software Engineers</h6>
            <p>
              Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.
            </p>
          </div>
          <div>
            <img src="{Group182}" alt="" />
            <h6>Software Engineers</h6>
            <p>
              Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.
            </p>
          </div>
          <div>
            <img src="{noun_datascience_2475093}" alt="" />
            <h6>Software Engineers</h6>
            <p>
              Learn the user experience, client management, technical, and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.
            </p>
          </div>
        </div>

      </div>
      <div className="sec_4 container_fluid">
        <div className="find_div">
          <h3 className="firsth2">Let's help you hire</h3>
          <p className="p_1">
            Let our team of recruitment experts find the right talents fit for you. Based on your requirements, we will shorlist talents with matching skills and help you schedule interviews with them. We will assist you every step of the way.
          </p>
        </div>
        
        <form className="form2">
          <input className="input1" type="text" placeholder="Your name" />
          <input className="input1" type="text" placeholder="Company Name" />
          <input className="input1" type="text" placeholder="Company Email" />
          <input className="input1" type="text" placeholder="Where do you want to fill" />
          <input className="inputbtn" type="submit" placeholder="Get Started" />
        </form>
        
        
      </div>
    </div>
  );
}

export default App;
