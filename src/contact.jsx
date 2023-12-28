import './contact.css';
import { Mail,Instagram,FaceBook,Twitter,Location,Remember,Call } from './res/Icons/Icon';
import Header from './Components/Heater/header';
import Footer from './Components/Footer/footer';


function ContactUs() {
    return (
      <div>
        <Header />
      <div className='py-0'>
        <div className='container px-2'>
      <div className='contactPageDesc flex middle left py-4'>
        <div className='contactBoxDesc flex middle left py-2 '>
            <div className='flex col gap-4'>
                <h1>Contact Us</h1>
                <p>Learn more about our products and services to get a better experience in shopping at our website.Please complete this form to get the latest information from us. Our Customer Service is available on 24/7. The information you provide will be confidential and not shared with third parties.</p>
                </div>
                </div>
                </div>
                <div className='flex w-full middle center'>
                <div className='contactPage flex py-4'>
                <div className='contactBox flex middle center py-2 px-6'>
                        <form>
                          <div className='flex col gap-2'>
                              <span>Name *</span>
                              <input placeholder='' />
                              <span>Email *</span>
                              <input placeholder='' />
                              <span>Subject *</span>
                              <input placeholder='' />
                              <div className='remContainer flex middle center'>
                              <div className='remember flex row gap-1 middle center'><Remember/>Accept Terms & Condition</div>
                              <div className='flex-1'></div>
                              <button className='submitButton px-6 py-2' type='Submit'>Submit</button>
                              </div>
                            </div>
                            </form>
                          </div>
                          </div>
              <div className='flex-1'></div>
                    <div className='contactPageRight flex middle center py-4'>
                      <div className='contactBoxRight flex middle center py-2 px-4'>
                          <div className='flex col gap-4'>
                              <h1>Contact</h1>
                              <div className='desc flex row gap-2'><Location />Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor</div>
                              <div className='flex col gap-2'>
                              <div className='contactVia flex row gap-2 middle'><Call />+1234567890</div>
                              <div className='contactVia flex row gap-2 middle'><Mail />lovia@support.com</div>
                              </div>
                              <div className='contactR flex col gap-2'>
                              <span>Follow Us</span>
                              <div className='flex row gap-2'>
                              <a href='./'><Instagram/></a>
                              <a href='./'><Twitter/></a>
                              <a href='./'><FaceBook /></a>
                              </div>
                              </div>
                              </div>
                              </div>
                            </div>
                          </div>
                          </div>
                          </div>
                          <Footer />
                          </div>

                
    );
  }
export default ContactUs;


            