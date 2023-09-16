import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import BlogPostCard2 from '../components/blog-post-card2'
import CoursesComponent from '../components/courses-component'
import GalleryCard3 from '../components/gallery-card3'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>mustafakapici.me</title>
          <meta property="og:title" content="mustafakapici.me" />
        </Head>
        <header data-role="Header" className="home-header">
          <h3 className="home-text">
            <span>M. MUSTAFA </span>
            <span>KAPICI</span>
            <br></br>
          </h3>
          <div className="home-nav">
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
          <div className="home-btn-group">
            <a
              href="https://drive.google.com/file/d/1Sw3ffFZ55x3h0n3bo3-1WRSYJ_2ivj_i/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
              className="home-register button"
            >
              Download CV
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image"
                />
                <div data-role="CloseMobileMenu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div id="hero" className="home-hero">
          <div className="home-container02">
            <h1 className="home-text04 heroposition">
              <span className="home-text05">M. Mustafa KAPICI</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text07">Computer Engineer</span>
            </h1>
            <span className="home-text08">
              <span>
                I am a Software Engineering Student with advanced knowledge in
                software development at all stages. My expertise lies in Big
                Data, Machine Learning, Deep Learning, Computer Vision, and
                Image Processing. My main goal is to master the fields of
                Artificial Intelligence and Data Science.
              </span>
              <br></br>
              <span>
                Additionally, I possess knowledge in C# .NET, SQL, React, Spark,
                and quantum programming.
              </span>
            </span>
            <div className="home-btn-group1">
              <a
                href="https://drive.google.com/file/d/1Sw3ffFZ55x3h0n3bo3-1WRSYJ_2ivj_i/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button"
              >
                Download CV
              </a>
              <a
                href="https://resume.io/r/ZYR3j9hq8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01 button"
              >
                View Resume
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="/external/b%C3%A4%C2%B0yometr%C3%A4%C2%B0k%20d9%20bg-1200w.jpg"
            className="home-image1"
          />
        </div>
        <div id="prj" className="home-projects">
          <div className="home-container03">
            <h1 className="home-text12">
              <span className="home-text13">PROJECTS &amp; Code Samples</span>
              <br></br>
            </h1>
          </div>
          <div className="home-container04">
            <a
              href="https://ailayzer.tech"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link02"
            >
              <BlogPostCard2
                level="Professional / Start-up"
                title="AILAYZER: AI- Powered Data Analysis"
                position="Founder, Project Manager"
                image_src="/external/ailayzer%20%20logo%20sade-1500w.jpg"
                tech_stack="React, Next.Js, Spark, Hadoop, TensorFlow, Python, Jira, Kanban"
                description="The project I am currently developing and managing is also a startup. This project analyzes time-varying data (such as stocks, cryptocurrencies, and currencies) and makes predictions about the future based on the insights and results of the analysis. The features and working principles of the project are as follows: The project utilizes Spark streaming to perform real-time multivariate time series forecasting and streams the data to microservices. The backend layer of the application receives the data from the microservices and forwards it to the Next.JS frontend layer."
                profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName3"
                className="home-component"
              ></BlogPostCard2>
            </a>
          </div>
          <div className="home-container05">
            <a
              href="https://github.com/mmustafakapici/WebCrawler"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link03"
            >
              <BlogPostCard2
                level="Intermediate"
                title="Multi-Threaded Web Crawler "
                position="C# WPF"
                image_src="/external/github-logo-1500w.png"
                tech_stack="C# .NET, WPF,  HTML Agility Pack, Entity Framework, SQLite, Newtonsoft JSON "
                description="This application is a web crawler that scrapes data from specific websites by crawling them. It crawls web pages using the provided URLs, saves their HTML content, and discovers new links."
                profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName4"
                className="home-component01"
              ></BlogPostCard2>
            </a>
          </div>
          <div className="home-container06">
            <a
              href="https://www.kaggle.com/code/mustafakapici/lstm-multi-targets-btc-price-predictions-99-r2#"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04"
            >
              <BlogPostCard2
                level="Beginner"
                title="LSTM Bitcoin Price Prediction"
                position="Python TensorFlow"
                image_src="/external/kaggle-1500w.png"
                tech_stack="Python, TensorFlow, Numpy, Pandas, Matplotlib, yfinance, scikit-learn"
                description="Retrieves bitcoin data using yfinance. Draws candlestick charts with matplotlib. My own LSTM model uses my training data to make a 30-day forecast. My forecast data is added to the chart with candlesticks. My model training results in 99% r2 Score and 1% MAE"
                profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
                className="home-component02"
              ></BlogPostCard2>
            </a>
          </div>
          <div className="home-container07">
            <a
              href="https://www.kaggle.com/code/mustafakapici/image-processing-feature-extraction-classification#"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              <BlogPostCard2
                level="Beginner"
                title="Image Processing and Classification "
                position="Python OpenCV"
                image_src="/external/kaggle-1500w.png"
                tech_stack="Python, Pandas, Numpy, OpenCV, scikit-learn"
                description="With OpenCV it reads my GIF dataset. Converts frames to black and white jpg photos. I set it myself using the matplotlib library. Prints feature extraction methods such as ellipticity, elongation, circularity, sphericity, convexity, solidity, rectangularity to a pandas data dataframe. It applies principal component analysis to the DataFrame and then compares the R2 , accuracy, MAE, MSE, F1 Score metrics of 17 different classifier models."
                profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
                className="home-component03"
              ></BlogPostCard2>
            </a>
          </div>
        </div>
        <div id="skill" className="home-skills-cards">
          <div className="home-container08">
            <h1 className="home-text15">
              <span>Skills are Everything</span>
              <br></br>
            </h1>
            <span className="home-text18">
              Coding and making projects bring knowledge and experience. This is
              the only way to learn the software.
            </span>
            <div className="home-container09">
              <div className="home-pricing-card">
                <span className="home-text19">Intermedıate</span>
                <div className="home-container10">
                  <span className="home-text20">Up to %</span>
                  <span className="home-text21">70</span>
                  <span className="home-text22">Knowledge</span>
                </div>
                <span className="home-text23">
                  Programming languages, frameworks or libraries in which I have
                  a good knowledge of syntax. The main areas in which I have
                  developed myself and want to work. At least one project and
                  more than one course have been followed on this subject. I
                  also have certificates.
                </span>
                <div className="home-container11">
                  <div className="home-container12">
                    <div className="home-container13">
                      <span className="home-text24">
                        ✔ Artificial Intelligence
                      </span>
                      <span className="home-text25">✔ Deep Learning</span>
                      <span className="home-text26">✔ Machine Learning</span>
                      <span className="home-text27">✔ Image Processing</span>
                      <span className="home-text28">✔ Computer Vision</span>
                      <span className="home-text29">
                        <span>✔ Data Analysis</span>
                        <br></br>
                      </span>
                      <span className="home-text32">✔ Big Data</span>
                    </div>
                  </div>
                  <div className="home-container14">
                    <div className="home-container15">
                      <span className="home-text33">✔ Python</span>
                      <span className="home-text34">✔ TensorFlow</span>
                      <span className="home-text35">✔ Scikit-Learn</span>
                      <span className="home-text36">✔ OpenCV</span>
                      <span className="home-text37">✔ Yolo</span>
                      <span className="home-text38">
                        <span>✔ SQL databases</span>
                        <br></br>
                      </span>
                      <span className="home-text41">✔ C# .NET</span>
                    </div>
                  </div>
                </div>
                <button className="home-button button">Learn More</button>
              </div>
              <div className="home-pricing-card1">
                <span className="home-text42">Begınner</span>
                <div className="home-container16">
                  <span className="home-text43">Up to % </span>
                  <span className="home-text44">40</span>
                  <span className="home-text45">Knowledge</span>
                </div>
                <span className="home-text46">
                  Programming languages, frameworks or libraries that I know
                  both the syntax of and have worked on a bit. There is a
                  project and at least 1 course has been watched about it.
                </span>
                <div className="home-container17">
                  <div className="home-container18">
                    <div className="home-container19">
                      <span className="home-text47">✔ HTML 5</span>
                      <span className="home-text48">✔ CSS 3</span>
                      <span className="home-text49">✔ Bootstrap</span>
                      <span className="home-text50">✔ JavaScript</span>
                      <span className="home-text51">✔ TypeScript</span>
                      <span className="home-text52">
                        <span>✔ React</span>
                        <br></br>
                      </span>
                      <span className="home-text55">✔ Next.Js</span>
                    </div>
                  </div>
                  <div className="home-container20">
                    <div className="home-container21">
                      <span className="home-text56">✔ Java OOP</span>
                      <span className="home-text57">✔ MongoDB</span>
                      <span className="home-text58">✔ PHP</span>
                      <span className="home-text59">✔ Django</span>
                      <span className="home-text60">
                        <span>✔ Angular</span>
                        <br></br>
                      </span>
                      <span className="home-text63">
                        <span>✔ Node.js</span>
                        <br></br>
                      </span>
                      <span className="home-text66">✔ Quantum Programming</span>
                    </div>
                  </div>
                </div>
                <button className="home-button1 button">Learn More</button>
              </div>
              <div className="home-pricing-card2">
                <span className="home-text67">Hello Worlds</span>
                <div className="home-container22">
                  <span className="home-text68">Up to % </span>
                  <span className="home-text69">10</span>
                  <span className="home-text70">Knowledge</span>
                </div>
                <span className="home-text71">
                  Programming languages, frameworks or libraries whose syntax I
                  know only. No projects.
                </span>
                <div className="home-container23">
                  <div className="home-container24">
                    <div className="home-container25">
                      <span className="home-text72">✔ UI/UX Design </span>
                      <span className="home-text73">✔ ASP.NET</span>
                      <span className="home-text74">✔ Flask</span>
                      <span className="home-text75">✔ Assembly x86</span>
                      <span className="home-text76">
                        <span>✔ Solidity</span>
                        <br></br>
                      </span>
                      <span className="home-text79">✔ Web3.JS</span>
                    </div>
                  </div>
                  <div className="home-container26">
                    <div className="home-container27">
                      <span className="home-text80">✔ C</span>
                      <span className="home-text81">✔ C++</span>
                      <span className="home-text82">✔ Swift</span>
                      <span className="home-text83">✔ Dart</span>
                      <span className="home-text84">✔ Flutter</span>
                      <span className="home-text85">
                        <span>✔ Kotlin</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="home-button2 button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div id="course" className="home-courses">
          <div className="home-card">
            <CoursesComponent heading="Intro to programming"></CoursesComponent>
            <CoursesComponent></CoursesComponent>
            <CoursesComponent heading="Intro To Machine Learning"></CoursesComponent>
            <CoursesComponent heading="Pandas"></CoursesComponent>
            <CoursesComponent heading="Intermediate Machine Learning"></CoursesComponent>
            <CoursesComponent heading="Data Visualization"></CoursesComponent>
            <CoursesComponent heading="Feature Engineering"></CoursesComponent>
            <CoursesComponent heading="Intro to SQL"></CoursesComponent>
            <CoursesComponent heading="Advanced SQL"></CoursesComponent>
            <CoursesComponent heading="Intro To Deep Learning"></CoursesComponent>
            <CoursesComponent heading="Computer Vision"></CoursesComponent>
            <CoursesComponent heading="Time Series"></CoursesComponent>
            <CoursesComponent heading="Intro To AI Ethics"></CoursesComponent>
            <CoursesComponent
              heading="(100+ Saat) Aranan Programcı Olma Kamp Kursu| Python,Java,C#"
              heading1="Udemy"
              image_src="/external/udemy-logo-200h.png"
            ></CoursesComponent>
            <CoursesComponent
              heading="A-Z™ | Projelerle Yapay Zeka ve Bilgisayarlı Görü | +20 Saat"
              heading1="Udemy"
              image_src="/external/udemy-logo-200h.png"
            ></CoursesComponent>
            <CoursesComponent
              heading="Quantum Programlama: Sıfırdan İleri Seviyeye"
              heading1="Udemy"
              image_src="/external/udemy-logo-200h.png"
            ></CoursesComponent>
            <CoursesComponent
              heading="Keras İle Derin Öğrenmeye Giriş "
              heading1="BTKAkademi"
              image_src="/external/btklogo-200h.png"
            ></CoursesComponent>
            <CoursesComponent
              heading="Python İle Makine Öğrenmesi"
              heading1="BTKAkademi"
              image_src="/external/btklogo-200h.png"
            ></CoursesComponent>
            <CoursesComponent
              heading="R ile Veri Bilimine Giriş"
              heading1="BTKAkademi"
              image_src="/external/btklogo-200h.png"
            ></CoursesComponent>
            <CoursesComponent
              heading="Veri Bilimi İçin Python Ve Tensorflow"
              heading1="BTKAkademi"
              image_src="/external/btklogo-200h.png"
            ></CoursesComponent>
            <CoursesComponent
              heading="Veri Bilimi ve Makine Öğrenmesi Atölyesi - Bootcamp 2022"
              heading1="BTKAkademi"
              image_src="/external/btklogo-200h.png"
            ></CoursesComponent>
          </div>
        </div>
        <div id="brands" className="home-brands">
          <h1 className="home-text88">Own Brands</h1>
          <div className="home-container28">
            <a
              href="https://ailayzer.tech"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GalleryCard3
                title="AILAYZER"
                subtitle="AI-POWERED ANALYSIS"
                image_src="/external/ailayzer%20%20logo%20sade-1500w.jpg"
                rootClassName="rootClassName"
                className="home-component25"
              ></GalleryCard3>
            </a>
            <GalleryCard3
              title="KOLAY ZEKA"
              subtitle="YOUTUBE CHANNEL"
              image_src="/external/kolay%20zeka%20logo-1500h.jpg"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              title="MUSALLART"
              subtitle="SYNCED RAVE PARTY PLATFORMS"
              image_src="/external/musallart%20logo-1500h.jpg"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              title="REART"
              subtitle="METAVERSE ART GALLERIES"
              image_src="/external/re-art%20logo-1500h.jpg"
              rootClassName="rootClassName2"
            ></GalleryCard3>
          </div>
        </div>
        <div id="mail" className="home-mail">
          <h1 className="home-text89">Keep In Touch</h1>
          <span className="home-text90">
            You can send an e-mail to contact me. I always return to well and
            politely prepared mails.
          </span>
          <div className="home-container29">
            <input
              type="text"
              placeholder="Email here..."
              className="home-textinput input"
            />
            <a
              href="mailto:m.mustafakapici@gmail.com?subject=from mustafakapici.me "
              className="home-link07 button"
            >
              Submit
            </a>
          </div>
        </div>
        <footer className="home-footer">
          <h3 className="home-text91">
            <span>M.MUSTAFA </span>
            <span>KAPICI</span>
            <br></br>
          </h3>
          <span className="home-text95">
            © 2023 Muhammed Mustafa KAPICI | Computer Engineer
          </span>
          <div className="home-icon-group1">
            <a
              href="https://www.linkedin.com/in/mmustafa-kapici/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/mmustafakapici"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M296.571 685.714v0c1.143-1.714 0.571-5.143-1.714-7.429-2.857-2.286-6.286-2.857-8-1.143-1.143 1.714-0.571 5.143 1.714 7.429 2.857 2.286 6.286 2.857 8 1.143zM280.571 662.286c-1.714-2.286-4.571-3.429-6.857-2.286-1.714 1.143-1.714 4.571 0 6.857 2.286 2.857 5.143 4 6.857 2.857v0c1.714-1.143 1.714-4.571 0-7.429zM257.143 639.429v0c0.571-1.143-0.571-3.429-2.857-4.571-1.714-0.571-4-0.571-4.571 1.143-1.143 1.714 0 3.429 2.286 4.571 2.286 0.571 4.571 0.571 5.143-1.143zM269.143 652.571v0c1.143-1.143 1.143-4-1.143-5.714-1.714-2.286-4.571-2.857-5.714-1.714-1.714 1.714-1.143 4 0.571 6.286 1.714 1.714 4.571 2.857 6.286 1.143zM318.286 695.429v0c0.571-2.286-1.714-5.143-5.143-6.286s-6.286 0-7.429 2.286c-0.571 2.286 1.714 5.143 5.143 6.286s6.286 0 7.429-2.286zM342.286 697.143v0c0-2.286-2.857-4.571-6.857-4.571-3.429 0-5.714 2.286-5.714 4.571s2.857 4.571 6.286 4.571 6.286-2.286 6.286-4.571zM364.571 693.143v0c-0.571-2.286-4-3.429-7.429-2.857s-5.714 2.857-5.143 5.143 3.429 4 6.857 3.429 5.714-3.429 5.714-5.714zM731.429 512c0-161.714-130.857-292.571-292.571-292.571s-292.571 130.857-292.571 292.571c0 129.143 84 238.857 200 277.714 14.857 2.857 20-6.286 20-14.286 0-6.857 0-29.714-0.571-54.286 0 0-81.143 17.714-98.286-34.857 0 0-13.143-33.714-32.571-42.286 0 0-26.286-18.286 2.286-18.286 0 0 28.571 2.286 44.571 30.286 25.714 45.143 68.571 32 85.143 24.571 2.857-18.857 10.286-32 18.857-39.429-65.143-7.429-133.714-32.571-133.714-144.571 0-32 11.429-57.714 30.286-78.286-2.857-7.429-13.143-37.143 2.857-77.714 24.571-7.429 80.571 30.286 80.571 30.286 23.429-6.857 48-9.714 73.143-9.714s49.714 2.857 73.143 9.714c0 0 56-37.714 80.571-30.286 16 40.571 5.714 70.286 2.857 77.714 18.857 20.571 30.286 46.286 30.286 78.286 0 112.571-68.571 137.143-133.714 144.571 10.286 9.143 20 26.857 20 54.286 0 38.857-0.571 70.286-0.571 80 0 8 5.143 17.143 20 14.286 116-38.857 200-148.571 200-277.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-text {
            text-align: center;
          }
          .home-nav {
            display: flex;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-register {
            color: var(--dl-color-gray-white);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container02 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text04 {
            width: 520px;
            max-width: 450px;
            text-align: left;
          }
          .home-text05 {
            font-style: normal;
            font-weight: 800;
          }
          .home-text07 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text08 {
            color: var(--dl-color-gray-500);
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-link01 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-500);
          }
          .home-link01:hover {
            border-color: var(--dl-color-gray-black);
          }
          .home-image1 {
            width: 400px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-projects {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-image: linear-gradient(
              0deg,
              rgba(0, 0, 0, 1) 0%,
              rgb(217, 217, 217) 100%
            );
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            font-size: xxx-large;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
            justify-content: flex-start;
            text-decoration: none;
          }
          .home-text12 {
            font-size: xxx-large;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .home-text13 {
            font-size: 32px;
          }
          .home-container04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-link02 {
            display: contents;
          }
          .home-component {
            text-decoration: none;
          }
          .home-container05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-link03 {
            display: contents;
          }
          .home-component01 {
            text-decoration: none;
          }
          .home-container06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-link04 {
            display: contents;
          }
          .home-component02 {
            text-decoration: none;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-link05 {
            display: contents;
          }
          .home-component03 {
            text-decoration: none;
          }
          .home-skills-cards {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-container08 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text15 {
            color: var(--dl-color-gray-white);
          }
          .home-text18 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container09 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-pricing-card:hover {
            transform: scale(1.02);
          }
          .home-text19 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .home-container10 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text20 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-text21 {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text22 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-text23 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container11 {
            height: auto;
            display: flex;
            align-self: stretch;
            max-height: 100%;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container13 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-text24 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text26 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text28 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text29 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text32 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container15 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-text33 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text34 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text35 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text36 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text37 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text38 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text41 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-pricing-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-pricing-card1:hover {
            transform: scale(1.02);
          }
          .home-text42 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .home-container16 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text43 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-text44 {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text45 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-text46 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container17 {
            height: auto;
            display: flex;
            align-self: stretch;
            max-height: 100%;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container19 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-text47 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text48 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text49 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text50 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text51 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text52 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text55 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container21 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-text56 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text57 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text58 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text59 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text60 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text63 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text66 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-pricing-card2:hover {
            transform: scale(1.02);
          }
          .home-text67 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .home-container22 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text68 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-text69 {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text70 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-text71 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container23 {
            height: auto;
            display: flex;
            align-self: stretch;
            max-height: 100%;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container25 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-text72 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text73 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text74 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text75 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text76 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text79 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container26 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container27 {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-text80 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text81 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text82 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text83 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text84 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text85 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-courses {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-self: center;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-card {
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-sixunits);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .home-brands {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-text88 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
          }
          .home-container28 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-component25 {
            text-decoration: none;
          }
          .home-mail {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
            background-position: center;
          }
          .home-text89 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text90 {
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-textinput {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
          }
          .home-link07 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-link07:hover {
            color: var(--dl-color-gray-black);
            background-color: transparent;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-text91 {
            text-align: center;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link08 {
            display: contents;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link09 {
            display: contents;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .home-container09 {
              width: 100%;
              align-self: stretch;
            }
            .home-pricing-card {
              max-width: 400px;
            }
            .home-text20 {
              font-size: 1.15rem;
              font-weight: 300;
            }
            .home-text22 {
              font-size: 1.15rem;
              font-style: normal;
              font-weight: 300;
            }
            .home-container11 {
              height: auto;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container12 {
              height: 100%;
            }
            .home-container13 {
              margin-bottom: 0px;
            }
            .home-container14 {
              height: 100%;
            }
            .home-container15 {
              height: auto;
              margin-bottom: 0px;
            }
            .home-pricing-card1 {
              max-width: 400px;
            }
            .home-text45 {
              font-size: 1.15rem;
              font-style: normal;
              font-weight: 300;
            }
            .home-container17 {
              height: auto;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container18 {
              height: 100%;
            }
            .home-container19 {
              height: auto;
              margin-bottom: 0px;
            }
            .home-container20 {
              height: 100%;
            }
            .home-container21 {
              margin-bottom: 0px;
            }
            .home-pricing-card2 {
              max-width: 400px;
            }
            .home-text70 {
              font-size: 1.15rem;
            }
            .home-container23 {
              height: auto;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container24 {
              height: 100%;
            }
            .home-container25 {
              margin-bottom: 0px;
            }
            .home-container26 {
              height: 100%;
            }
            .home-container27 {
              height: auto;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-container02 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text08 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text15 {
              text-align: center;
            }
            .home-text18 {
              text-align: center;
            }
            .home-container09 {
              grid-template-columns: 1fr;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .home-brands {
              max-height: var(--dl-size-size-maxwidth);
            }
            .home-container28 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-text90 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text08 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image1 {
              width: 80%;
            }
            .home-projects {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container08 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-courses {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-card {
              width: 100%;
              flex-direction: column;
            }
            .home-brands {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container28 {
              grid-template-columns: 1fr 1fr;
            }
            .home-mail {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text90 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text95 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-nav {
              display: none;
            }
            .home-btn-group {
              display: flex;
            }
            .home-mobile-menu {
              display: none;
              padding: 16px;
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container02 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text04 {
              width: 100%;
            }
            .home-text08 {
              width: 80%;
            }
            .home-btn-group1 {
              flex-direction: column;
            }
            .home-link01 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-projects {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container08 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-courses {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-brands {
              padding: var(--dl-space-space-unit);
            }
            .home-container28 {
              grid-template-columns: 1fr;
            }
            .home-mail {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-container29 {
              align-items: center;
              flex-direction: column;
            }
            .home-link07 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text95 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
