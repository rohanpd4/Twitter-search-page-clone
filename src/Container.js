import React,{Component} from 'react';
import Navbar from './Navbar';
import Lefttrends from './Lefttrends';
import Samplepost from './Samplepost';
import Whotofollow from './Whotofollow';
import Followsuggestion from './Followsugesstion';
import Searchword from './Searchword.js';
import Navbarsearch from './Navbarsearch';
import Searchfilter from './Searchfilter';
import Relatedsearch from './relatedsearch';

class Container extends Component {

  render(){
    return(
      <div >
<Navbar/>
  <Searchword/>

<Navbarsearch/>

<div className="container">
  <div className="row">
    <div className="col-sm-3">

      <Searchfilter/>
      <Relatedsearch/>

        <div className="panel panel-default panel-custom">
          <Whotofollow/>
          <Followsuggestion/>
          <Followsuggestion/>
          <Followsuggestion/>
          <div>
            <a href="www.twitter.com">
              <i class="fa fa-users blue" aria-hidden="true"></i>
               <span className="people-know blue">Find people you know</span>
            </a>
          </div>
        </div>
      <Lefttrends/>
      <ul className="list-inline">
        <li> <a href="www.twitter.com"><small>© 2017 Twitter</small></a></li>
        <li><a href="www.twitter.com"><small>About</small></a></li>
        <li><a href="www.twitter.com"><small>Help Center</small></a></li>
        <li><a href="www.twitter.com"><small>Terms</small></a></li>
        <li><a href="www.twitter.com"><small>Privacy policy</small></a></li>
        <li><a href="www.twitter.com"><small>Cookies</small></a></li>
        <li><a href="www.twitter.com"><small>Ads info</small></a></li>




      </ul>
    </div>




    <div className="col-sm-6">
      <div className="panel panel-info">
        <samplepost/>
        <Samplepost/>
        <Samplepost/>
        <Samplepost/>
        <Samplepost/>
      </div>

          <br/>

</div>


    </div>
  </div>
</div>

    );
  }
}



export default Container;
