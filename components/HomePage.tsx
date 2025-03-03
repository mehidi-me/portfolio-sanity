'use client'

import HomeSlider from '@/components/HomeSlider'
import type {HomePageQueryResult} from '@/sanity.types'
import {studioUrl} from '@/sanity/lib/api'
import {createDataAttribute} from 'next-sanity'
import {useEffect} from 'react'

//import ScrollReveal from 'scrollreveal'

export interface HomePageProps {
  data: HomePageQueryResult | null
}

export function HomePage({data}: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {overview = [], showcaseProjects = [], title = ''} = data ?? {}

  const dataAttribute =
    data?._id && data?._type
      ? createDataAttribute({
          baseUrl: studioUrl,
          id: data._id,
          type: data._type,
        })
      : null

  useEffect(() => {
    async function animate() {
      const ScrollReveal = (await import('scrollreveal')).default
      ScrollReveal({
        reset: true,
        distance: '40px',
        duration: 1200,
        delay: 30,
      })

      // Set up ScrollReveal for various elements
      ScrollReveal().reveal('main .content h1', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('main .content h2', {delay: 30, origin: 'bottom'})
      ScrollReveal().reveal('main .content .buttons', {
        delay: 50,
        origin: 'bottom',
      })
      ScrollReveal().reveal('main .me', {
        delay: 80,
        origin: 'bottom',
      })
      ScrollReveal().reveal('.text-content h2', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('.text-content p', {delay: 30, origin: 'bottom'})
      ScrollReveal().reveal('section .social', {delay: 50, origin: 'bottom'})
      ScrollReveal().reveal('.title p', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.title h2', {delay: 80, origin: 'bottom'})
      ScrollReveal().reveal('.title-2 p', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.title-2 h2', {delay: 80, origin: 'bottom'})
      ScrollReveal().reveal('.tag', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('.tag-2', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('.card', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.card-2', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.grid-2 .card-3', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.item', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.frame', {
        delay: 10,
        origin: 'bottom',
        distance: '10px',
      })
      ScrollReveal().reveal('.fade', {
        delay: 10,
        origin: 'bottom',
        distance: '10px',
      })
      ScrollReveal().reveal('.video', {
        delay: 10,
        origin: 'bottom',
        distance: '10px',
      })
    }
    animate()
  }, [])
  // return (
  //   <div className="space-y-20">
  //     {/* Header */}
  //     {title && (
  //       <Header
  //         id={data?._id || null}
  //         type={data?._type || null}
  //         path={['overview']}
  //         centered
  //         title={title}
  //         description={overview}
  //       />
  //     )}
  //     {/* Showcase projects */}
  //     <div className="mx-auto max-w-[100rem] rounded-md border">
  //       <OptimisticSortOrder id={data?._id} path={'showcaseProjects'}>
  //         {showcaseProjects &&
  //           showcaseProjects.length > 0 &&
  //           showcaseProjects.map((project) => {
  //             const href = resolveHref(project?._type, project?.slug)
  //             if (!href) {
  //               return null
  //             }
  //             return (
  //               <Link
  //                 className="flex flex-col gap-x-5 p-2 transition odd:border-b odd:border-t hover:bg-gray-50/50 xl:flex-row odd:xl:flex-row-reverse"
  //                 key={project._key}
  //                 href={href}
  //                 data-sanity={dataAttribute?.(['showcaseProjects', {_key: project._key}])}
  //               >
  //                 <ProjectListItem project={project as any} />
  //               </Link>
  //             )
  //           })}
  //       </OptimisticSortOrder>
  //     </div>
  //   </div>
  // )
  return (
    <div className="homePage">
      <main>
        <div className="container">
          <div className="content">
            <h1>Michael Lissack</h1>
            <h2>Applied phillosopher, Enterpreunor, realtor</h2>
            <div className="buttons">
              <a href="#about">
                <button className="empty">
                  <div className="center">
                    {' '}
                    <i className="ph ph-user" />
                    <p>About me</p> <i className="ph ph-arrow-right" />
                  </div>
                </button>
              </a>
              <a href="#">
                <button>
                  <div className="center">
                    {' '}
                    <i className="ph ph-file-text" />
                    <p>My CV</p> <i className="ph ph-arrow-right" />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="fade">
            <img src="/images/1.png" alt="" className="me" />
          </div>
        </div>
      </main>
      <section id="about">
        <div className="container">
          <div className="grid-3 adj">
            <div className="text-content">
              <h2>About me</h2>
              <p>
                I'm passionate about exploring how cybernetics and complex systems deepen our
                understanding of human cognition—both individually and collectively. My academic
                journey has taken me from a bachelor's at Williams College to a master's at Yale,
                and finally to a doctorate from Henley Management College. Ready to dive into
                innovative thinking together?
              </p>
              <div className="social">
                <a href="#">
                  <i className="ph-light ph-facebook-logo" />
                </a>
                <a href="#">
                  <i className="ph-light ph-instagram-logo" />
                </a>
                <a href="#">
                  <i className="ph-light ph-linkedin-logo" />
                </a>
              </div>
              <i className="ph-thin ph-arrow-up-right overlay" />
            </div>
            <div className="card">
              <div>
                <h3>150%</h3>
                <p>
                  Increase in research-driven insights and collaborative innovation over the last 5
                  years
                </p>
              </div>
              <div className="frame">
                <img src="/images/3.png" alt="" />
              </div>
            </div>
            <div className="space-around">
              <div className="video">
                <img src="/images/video.png" alt="" />
                <i className="ph-thin ph-arrow-up-right" />
              </div>
              <div className="list">
                <div className="item">
                  <div className="ico">
                    <i className="ph-fill ph-star-four" />
                  </div>
                  <p>
                    With decades of experience, I specialize in applying systems thinking and
                    cybernetics to uncover meaningful patterns and foster innovative solutions.
                  </p>
                </div>
                <div className="item">
                  <div className="ico">
                    <i className="ph-fill ph-star-four" />
                  </div>
                  <p>
                    I collaborate closely with scholars and professionals, blending academic
                    research with practical applications to drive impactful discoveries and
                    advancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="exparience">
        <div className="container">
          <div className="title-2">
            <div>
              <div className="tag">Exparience</div>
              <h2>Michael Lissack Academics</h2>
            </div>
            <div>
              <p>
                Michael Lissack academic work has focused on how cybernetics and complex systems
                help to better understand human cognition at both the individual and shared levels.
              </p>
              <button className="empty">
                <div className="center">
                  {' '}
                  <i className="ph ph-user" />
                  <p>Contact me</p> <i className="ph ph-arrow-right" />
                </div>
              </button>
            </div>
          </div>
          <div className="list">
            <div className="item card-2">
              <div className="tt">
                <h3>President</h3>
                <div className="date">
                  <p>February 2015</p> -<p>February 2020</p>
                </div>
              </div>
              <p>
                Michael Lissack is the immediate past President of the American Society for
                Cybernetics.
              </p>
              <div className="tags">
                <div className="tag-2">President</div>
              </div>
            </div>
            <div className="item card-2">
              <div className="tt">
                <h3>Executive Director</h3>
                <div className="date">
                  <p>February 1998</p> -<p>February 2018</p>
                </div>
              </div>
              <p>
                Executive Director Emeritus of the Institute for the Study of Coherence and
                Emergence
              </p>
              <div className="tags">
                <div className="tag-2">Director</div>
              </div>
            </div>
            <div className="item card-2">
              <div className="tt">
                <h3>Professor</h3>
                <div className="date">
                  <p>February 2015</p> -<p>Present</p>
                </div>
              </div>
              <p>
                Professor of Design and Innovation, College of Design and Innovation, Tongji
                University, Shanghai
              </p>
              <div className="tags">
                <div className="tag-2">Professor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service">
        <div className="container">
          <div className="title">
            <div className="tag">Service</div>
            <h2>My Services</h2>
          </div>
          <div className="grid-2 adj">
            <div className="grid-2">
              <div className="card-3">
                <h3>Speaking</h3>
                <p>
                  Dr. Lissack is available to speak to groups large and small on "How we Think",
                  "The Dangers of Excess Simplification", and "A Guide to Better Understanding
                </p>
              </div>
              <div className="card-3">
                <h3>Teaching</h3>
                <p>
                  Dr. Lissack is available to give half day to three day seminars on these same
                  topics to academic and corporate groups around the globe.
                </p>
              </div>
              <div className="card-3">
                <h3>Real Estate</h3>
                <p>
                  Michael helps people in the <a href="#">Greater Boston Area buy and sell homes</a>
                  . He is also the managing broker for the Virtual Realty Group in{' '}
                  <a href="#">Oregon</a> and <a href="#">Washington</a>.
                </p>
              </div>
              <div className="card-3">
                <h3>On-line Research</h3>
                <p>
                  Please visit <a href="#">FindRelatedBooks.com</a> to see an example of Dr.
                  Lissack's Find More Like This technology at work
                </p>
              </div>
            </div>
            <div className="fade fix">
              <img src="/images/1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <div className="title">
            <div className="tag">Portfolio</div>
            <h2>My best works</h2>
          </div>
          <div className="tabs">
            <button className="tab active">All</button>
            <button className="tab">Cybernetics</button>
            <button className="tab">Real Estate</button>
            <button className="tab">Consulting</button>
          </div>
          <div className="grid-3">
            <div className="card-4">
              <div className="frame">
                <img src="/images/p1.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Cybernetics</div>
                <h3>Understanding</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p2.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Consulting</div>
                <h3>Find Related Books</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p3.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Real Estate</div>
                <h3>Boston Home Bargains</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p4.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Consulting</div>
                <h3>Dangers of Simplification</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p5.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Real Estate</div>
                <h3>Portland Homes</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p6.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Consulting</div>
                <h3>Whistleblowing</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p7.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Real Estate</div>
                <h3>Boston Homes</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p8.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Cybernetics</div>
                <h3>Second Order Science</h3>
              </div>
            </div>
            <div className="card-4">
              <div className="frame">
                <img src="/images/p9.jpg" alt="" />
              </div>
              <div className="body">
                <div className="tag-2">Cybernetics</div>
                <h3>Rescuing Cybernetics</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="key">
        <div className="container">
          <div className="title">
            <div className="tag">Idea</div>
            <h2>Key Ideas</h2>
          </div>
          <HomeSlider />
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="title">
            <div className="tag">Contact</div>
            <h2>Get in touch with me</h2>
          </div>
          <div className="grid-2 align-center gap-5">
            <form action="#">
              <input type="text" placeholder="Your name" />
              <div className="row">
                <input type="email" placeholder="Your email" />
                <input type="tel" placeholder="Your phone number" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                name="description"
                placeholder="Write your message here...."
                defaultValue={''}
              />
              <button>
                <div className="center">
                  <i className="ph ph-paper-plane-right" />
                  <p>Send message</p> <i className="ph ph-arrow-right" />
                </div>
              </button>
            </form>
            <div className="fade d-none">
              <img src="/images/1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
