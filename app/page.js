import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <a href="#" className={styles.logo}>Solace</a>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
          </div>
          <a href="https://esteb4ncd.github.io/solace-progressblog/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Blog</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Self-care that doesn't feel like another job
            </h1>
            <p className={styles.heroSubtitle}>
              Solace transforms wellness into a motivating game for iron workers. 
              Build healthy habits through gamified recovery that fits your demanding schedule.
            </p>
          </div>
          <div className={styles.heroImage}>
            {/* PLACEHOLDER: Hero Image
            Replace this div with an image showing:
            - A phone/mockup of the Solace app
            - The mascot character looking strong and healthy
            - UI showing XP, streaks, and exercises
            - Recommended size: 600x800px or similar ratio
            - Style: Modern, clean, vibrant colors matching the app theme */}
            <div className={styles.imagePlaceholder}>
              <p>Hero Image Placeholder</p>
              <small>App mockup with mascot and UI</small>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.howItWorksSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>How Solace Works</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Quick AI Check-in</h3>
              <p>Tell us about your work type and pain areas</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get Your Daily Plan</h3>
              <p>Receive personalized exercises tailored to your needs</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Complete & Earn</h3>
              <p>Do exercises, earn XP, and watch your mascot thrive</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Build Lasting Habits</h3>
              <p>Stay consistent and transform your recovery routine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className={styles.problemSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Iron work is tough on your body</h2>
          <p className={styles.sectionText}>
            Long hours, heavy lifting, and constant stress take a toll. Many iron workers 
            face chronic pain, fatigue, and limited recovery time — leaving them with few 
            options beyond painkillers or unhealthy coping habits.
          </p>
          <div className={styles.problemImage}>
            {/* PLACEHOLDER: Problem Image
            Replace this div with an image showing:
            - Iron workers in a challenging work environment
            - Someone showing signs of physical strain or fatigue
            - Could be a realistic photo or illustration
            - Recommended size: 800x600px
            - Style: Emphasize the physical demands and challenges */}
            <div className={styles.imagePlaceholder}>
              <p>Problem Image Placeholder</p>
              <small>Iron workers facing physical strain</small>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solutionSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Recovery made simple, engaging, and effective</h2>
          <p className={styles.sectionText}>
            Solace helps you build healthy, lasting coping habits through fully gamified recovery. 
            Learn to manage pain with targeted exercises, mindfulness tools, and rest techniques — 
            all wrapped in a game-like experience that's engaging and stigma-free.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Everything you need to recover better</h2>
          
          {/* Mascot Feature */}
          <div className={styles.featureCard}>
            <div className={styles.featureImage}>
              {/* PLACEHOLDER: Mascot Feature Image
              Replace this div with an image showing:
              - The mascot character in different states (healthy vs injured)
              - Before/after comparison or progression states
              - Visual representation of the mascot thriving when consistent
              - Recommended size: 600x600px
              - Style: Character illustration, friendly and motivating */}
              <div className={styles.imagePlaceholder}>
                <p>Mascot Feature Image</p>
                <small>Mascot in healthy vs injured states</small>
              </div>
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Your Wellness Mascot</h3>
              <p>
                Your mascot mirrors your wellness journey — thriving when you stay consistent 
                and showing signs of strain when you don't. Complete exercises to "heal" your 
                mascot, keeping it strong and energized. Breaking your streak causes your mascot 
                to become visibly injured — motivating you to take action.
              </p>
            </div>
          </div>

          {/* Personalized Checklist Feature */}
          <div className={styles.featureCard}>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Personalized Daily Checklist</h3>
              <p>
                After a quick AI check-in about your type of work and pain areas, Solace builds 
                a personalized daily checklist of physical recovery exercises. Each exercise earns 
                10 XP. Checklists adapt based on your responses, ensuring your routines fit your 
                actual pain points and energy levels.
              </p>
            </div>
            <div className={styles.featureImage}>
              {/* PLACEHOLDER: Checklist Feature Image
              Replace this div with an image showing:
              - App screen showing the personalized daily checklist
              - UI mockup with exercises listed
              - XP rewards visible
              - Recommended size: 600x600px
              - Style: Clean app interface mockup */}
              <div className={styles.imagePlaceholder}>
                <p>Checklist Feature Image</p>
                <small>App UI showing personalized checklist</small>
              </div>
            </div>
          </div>

          {/* Mental Recovery Feature */}
          <div className={styles.featureCard}>
            <div className={styles.featureImage}>
              {/* PLACEHOLDER: Mental Recovery Image
              Replace this div with an image showing:
              - Meditation/breathing exercise visualization
              - Peaceful, calming scene
              - Could show app interface for mental wellness tools
              - Recommended size: 600x600px
              - Style: Calming, zen-like, peaceful colors */}
              <div className={styles.imagePlaceholder}>
                <p>Mental Recovery Image</p>
                <small>Breathing/meditation tools UI</small>
              </div>
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Mental Recovery Tools</h3>
              <p>
                Support your mind with quick, low-effort mental wellness tools: breathing exercises, 
                white noise player, and guided meditation. Each activity earns 5 XP, helping you 
                wind down and recover mentally after demanding shifts.
              </p>
            </div>
          </div>

          {/* Exercise Catalogue Feature */}
          <div className={styles.featureCard}>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Full Exercise Catalogue</h3>
              <p>
                Explore a full library of categorized exercises targeting different body areas — 
                neck, shoulders, back, legs, and more. These aren't personalized but give you 
                freedom to explore and focus on whatever needs extra attention. Each exercise 
                earns 5 XP, encouraging exploration and consistency.
              </p>
            </div>
            <div className={styles.featureImage}>
              {/* PLACEHOLDER: Exercise Catalogue Image
              Replace this div with an image showing:
              - App screen with exercise categories
              - Different body areas highlighted
              - Exercise library interface
              - Recommended size: 600x600px
              - Style: Clear, organized app interface */}
              <div className={styles.imagePlaceholder}>
                <p>Exercise Catalogue Image</p>
                <small>Exercise library with categories</small>
              </div>
            </div>
          </div>

          {/* XP & Streak Feature */}
          <div className={styles.featureCard}>
            <div className={styles.featureImage}>
              {/* PLACEHOLDER: XP & Streak Image
              Replace this div with an image showing:
              - Visual representation of XP system
              - Streak counter
              - Level progression
              - Mascot leveling up/getting stronger
              - Recommended size: 600x600px
              - Style: Gamified, exciting, progress-oriented */}
              <div className={styles.imagePlaceholder}>
                <p>XP & Streak Image</p>
                <small>Gamification system visualization</small>
              </div>
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>XP & Streak System</h3>
              <p>
                Earn XP for every activity and level up as you build better habits. Complete at 
                least one exercise per day to maintain your streak. Missing a day breaks your 
                streak and injures your mascot, while consistency keeps it thriving. Leveling up 
                your mascot gives it visible progress — growing stronger, more muscular, and more 
                resilient with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className={styles.valueSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            Made for iron workers, by understanding iron workers
          </h2>
          <p className={styles.sectionText}>
            Existing wellness apps are built for office workers with predictable routines, not 
            tradespeople dealing with exhaustion, pain, and unpredictable schedules. Solace fills 
            that gap with a trade-specific, gamified recovery platform that helps you build healthy 
            habits in a way that's practical, enjoyable, and stigma-free.
          </p>
          <div className={styles.valueImage}>
            {/* PLACEHOLDER: Value Proposition Image
            Replace this div with an image showing:
            - Iron worker using the app on their phone
            - Success story visualization
            - Before/after recovery journey
            - Recommended size: 800x600px
            - Style: Inspiring, showing transformation/recovery */}
            <div className={styles.imagePlaceholder}>
              <p>Value Proposition Image</p>
              <small>Iron worker using Solace app</small>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>Solace</div>
          <p>Making self-care practical, personal, and fun.</p>
          <div className={styles.footerLinks}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
