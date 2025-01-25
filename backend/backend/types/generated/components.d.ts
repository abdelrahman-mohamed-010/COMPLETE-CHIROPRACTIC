import type { Schema, Struct } from '@strapi/strapi';

export interface AboutComponentAboutComponent extends Struct.ComponentSchema {
  collectionName: 'components_about_component_about_components';
  info: {
    displayName: 'aboutComponent';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    FirstPragraph: Schema.Attribute.Text;
    SecondPragraph: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface AboutContentAboutContent extends Struct.ComponentSchema {
  collectionName: 'components_about_content_about_contents';
  info: {
    displayName: 'AboutContent';
  };
  attributes: {
    btn: Schema.Attribute.String;
    Content: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface AboutMainAboutMain extends Struct.ComponentSchema {
  collectionName: 'components_about_main_about_mains';
  info: {
    displayName: 'AboutMain';
    icon: 'cup';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_about_us_aboutuses';
  info: {
    displayName: 'AboutUs';
  };
  attributes: {
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pragraphOne: Schema.Attribute.Text;
    pragraphTwo: Schema.Attribute.Text;
    ReadMore: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    FirstSentence: Schema.Attribute.Text;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SecondSentence: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ApproachApproach extends Struct.ComponentSchema {
  collectionName: 'components_approach_approaches';
  info: {
    displayName: 'approach';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    desc1: Schema.Attribute.Text;
    desc2: Schema.Attribute.Text;
    FirstDesc3: Schema.Attribute.Text;
    firstDesc4: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SecondDesc3: Schema.Attribute.Text;
    SecondDesc4: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
    title3: Schema.Attribute.String;
    title4: Schema.Attribute.String;
    videoLink: Schema.Attribute.String;
  };
}

export interface ChooseUsChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_choose_us_chooseuses';
  info: {
    displayName: 'ChooseUS';
  };
  attributes: {
    FirstSectionSentence: Schema.Attribute.Text;
    FirstSectionTitle: Schema.Attribute.String;
    SecondSectionSentence: Schema.Attribute.Text;
    SecondSectionTitle: Schema.Attribute.String;
    ThirdSectionSentence: Schema.Attribute.String;
    ThirdSectionTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsComponents extends Struct.ComponentSchema {
  collectionName: 'components_components_components';
  info: {
    displayName: 'Components';
    icon: '';
  };
  attributes: {
    Json: Schema.Attribute.JSON;
  };
}

export interface ConsultationConsultation extends Struct.ComponentSchema {
  collectionName: 'components_consultation_consultations';
  info: {
    displayName: 'Consultation';
  };
  attributes: {
    CTA1: Schema.Attribute.String;
    CTA2: Schema.Attribute.String;
    FirstSentance: Schema.Attribute.Text;
    firstTitle: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MainTitle: Schema.Attribute.String;
    SecondSentance: Schema.Attribute.Text;
  };
}

export interface ContactPageContactPage extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_contact_pages';
  info: {
    displayName: 'contactPage';
  };
  attributes: {
    adress: Schema.Attribute.String;
    email: Schema.Attribute.String;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mapTitle: Schema.Attribute.String;
    PageTitle: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    Submitbtn: Schema.Attribute.String;
  };
}

export interface ContactUsContactUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contactuses';
  info: {
    displayName: 'ContactUs';
  };
  attributes: {
    bookBtn: Schema.Attribute.String;
    CallBtn: Schema.Attribute.String;
    Sentence: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    CTA1: Schema.Attribute.String;
    CTA2: Schema.Attribute.String;
    Img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Sentence: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface DiffrenceDiffrence extends Struct.ComponentSchema {
  collectionName: 'components_diffrence_diffrences';
  info: {
    displayName: 'Diffrence';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    journeyDescStep1: Schema.Attribute.String;
    journeyDescStep2: Schema.Attribute.String;
    journeyDescStep3: Schema.Attribute.String;
    journeyDescStep4: Schema.Attribute.String;
    journeyDescStep5: Schema.Attribute.String;
    journeyTitleStep1: Schema.Attribute.String;
    journeyTitleStep2: Schema.Attribute.String;
    journeyTitleStep3: Schema.Attribute.String;
    journeyTitleStep4: Schema.Attribute.String;
    journeyTitleStep5: Schema.Attribute.String;
    Title1: Schema.Attribute.String;
    Title2: Schema.Attribute.String;
    VideoDesc: Schema.Attribute.String;
    VideoLink: Schema.Attribute.String;
    VideoTitel: Schema.Attribute.String;
  };
}

export interface EventEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_events';
  info: {
    displayName: 'event';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface ExpectExpect extends Struct.ComponentSchema {
  collectionName: 'components_expect_expects';
  info: {
    displayName: 'Expect';
  };
  attributes: {
    desc: Schema.Attribute.String;
    desc1: Schema.Attribute.Blocks;
    desc2: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface FeaturedSectionFeaturedSection extends Struct.ComponentSchema {
  collectionName: 'components_featured_section_featured_sections';
  info: {
    displayName: 'FeaturedSection';
  };
  attributes: {
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface FeaturedFeatured extends Struct.ComponentSchema {
  collectionName: 'components_featured_featureds';
  info: {
    displayName: 'Featured';
  };
  attributes: {
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface FormForm extends Struct.ComponentSchema {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    Types: Schema.Attribute.Component<'types.types', true>;
  };
}

export interface GoalsGoals extends Struct.ComponentSchema {
  collectionName: 'components_goals_goals';
  info: {
    displayName: 'goals';
  };
  attributes: {
    desc1: Schema.Attribute.Text;
    desc2: Schema.Attribute.Text;
    desc3: Schema.Attribute.Text;
    firstTitle: Schema.Attribute.String;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mainTitle: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
    title3: Schema.Attribute.String;
  };
}

export interface HelpYouHelpYou extends Struct.ComponentSchema {
  collectionName: 'components_help_you_help_yous';
  info: {
    displayName: 'HelpYou';
  };
  attributes: {
    CallBtn: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Sentence: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HeroComponentHeroComponent extends Struct.ComponentSchema {
  collectionName: 'components_hero_component_hero_components';
  info: {
    displayName: 'heroComponent';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTA1: Schema.Attribute.String;
    CTA2: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    HowItWorks: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    Welcoming: Schema.Attribute.String;
  };
}

export interface HeroSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    BackgroundImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    BookingBtn: Schema.Attribute.String;
    CallUsBtn: Schema.Attribute.String;
    HeroTitle: Schema.Attribute.String;
    HowItWorks: Schema.Attribute.String;
    WelcomSentance: Schema.Attribute.String;
  };
}

export interface InquiryInquiry extends Struct.ComponentSchema {
  collectionName: 'components_inquiry_inquiries';
  info: {
    displayName: 'Inquiry';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface LastSectionLastSection extends Struct.ComponentSchema {
  collectionName: 'components_last_section_last_sections';
  info: {
    displayName: 'LastSection';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LetUsHelpYouLetUsHelpYou extends Struct.ComponentSchema {
  collectionName: 'components_let_us_help_you_let_us_help_yous';
  info: {
    displayName: 'LetUSHelpYou';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PhoneNumber: Schema.Attribute.String;
    Sentance1: Schema.Attribute.Text;
    Sentance2: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface MapMap extends Struct.ComponentSchema {
  collectionName: 'components_map_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    backgorund: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Hours: Schema.Attribute.JSON;
    HoursTitle: Schema.Attribute.String;
  };
}

export interface MassageSectionsMassageSections extends Struct.ComponentSchema {
  collectionName: 'components_massage_sections_massage_sections';
  info: {
    displayName: 'massageSections';
  };
  attributes: {
    desc: Schema.Attribute.String;
    scetionsqoutes: Schema.Attribute.Component<
      'scetionsqoutes.scetionsqoutes',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface MassageMassage extends Struct.ComponentSchema {
  collectionName: 'components_massage_massages';
  info: {
    displayName: 'massage';
  };
  attributes: {
    massageSections: Schema.Attribute.Component<
      'massage-sections.massage-sections',
      true
    >;
    ourTeamData: Schema.Attribute.JSON;
    whyMassageData: Schema.Attribute.JSON;
  };
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    vediolink: Schema.Attribute.String;
  };
}

export interface MessagePageMessagePage extends Struct.ComponentSchema {
  collectionName: 'components_message_page_message_pages';
  info: {
    displayName: 'messagePage';
  };
  attributes: {
    Components: Schema.Attribute.Component<'components.components', true>;
    Team: Schema.Attribute.JSON;
    WhyMessage: Schema.Attribute.JSON;
  };
}

export interface OurTeamPageOurTeamPage extends Struct.ComponentSchema {
  collectionName: 'components_our_team_page_our_team_pages';
  info: {
    displayName: 'OurTeamPage';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    member1Desc: Schema.Attribute.String;
    member1Img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    member1Job: Schema.Attribute.String;
    member1Title: Schema.Attribute.String;
    member2Desc: Schema.Attribute.String;
    member2Img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    member2Job: Schema.Attribute.String;
    member2Title: Schema.Attribute.String;
    member3Desc: Schema.Attribute.String;
    member3Img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    member3Job: Schema.Attribute.String;
    member3Title: Schema.Attribute.String;
    member4Desc: Schema.Attribute.String;
    member4Img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    member4Job: Schema.Attribute.String;
    member4Title: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SaSa extends Struct.ComponentSchema {
  collectionName: 'components_sa_sas';
  info: {
    displayName: 'sa';
  };
  attributes: {
    Slug: Schema.Attribute.Time;
  };
}

export interface ScetionsqoutesScetionsqoutes extends Struct.ComponentSchema {
  collectionName: 'components_scetionsqoutes_scetionsqoutes';
  info: {
    displayName: 'scetionsqoutes';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    section: Schema.Attribute.Component<'section.section', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SliderAnimationSliderAnimation extends Struct.ComponentSchema {
  collectionName: 'components_slider_animation_slider_animations';
  info: {
    displayName: 'SliderAnimation';
  };
  attributes: {
    treatments: Schema.Attribute.JSON;
  };
}

export interface SliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    texts: Schema.Attribute.JSON;
  };
}

export interface TeamPageTeamPage extends Struct.ComponentSchema {
  collectionName: 'components_team_page_team_pages';
  info: {
    displayName: 'teamPage';
    icon: 'user';
  };
  attributes: {
    team: Schema.Attribute.Component<'teams-members.team-members', true>;
  };
}

export interface TeamTeam extends Struct.ComponentSchema {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    firstTitle: Schema.Attribute.String;
    mainTitle: Schema.Attribute.String;
    memberOneJob: Schema.Attribute.String;
    memberOneName: Schema.Attribute.String;
  };
}

export interface TeamsMembersTeamMembers extends Struct.ComponentSchema {
  collectionName: 'components_teams_members_team_members';
  info: {
    displayName: 'teamMembers';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    job: Schema.Attribute.String;
    name: Schema.Attribute.String;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface TeamsMembersTeamsMembers extends Struct.ComponentSchema {
  collectionName: 'components_teams_members_teams_members';
  info: {
    displayName: 'teamsMembers';
  };
  attributes: {
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface TeamsTeams extends Struct.ComponentSchema {
  collectionName: 'components_teams_teams';
  info: {
    displayName: 'Teams';
  };
  attributes: {
    FirstTitle: Schema.Attribute.String;
    MainTitle: Schema.Attribute.String;
    memberFiveImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    memberFiveJob: Schema.Attribute.String;
    memberFiveName: Schema.Attribute.String;
    memberFourImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    memberFourJob: Schema.Attribute.String;
    memberFourName: Schema.Attribute.String;
    memberOneImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    memberOneJob: Schema.Attribute.String;
    memberOneName: Schema.Attribute.String;
    memberSevenImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    memberSevenJob: Schema.Attribute.String;
    memberSevenName: Schema.Attribute.String;
    memberSixImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    memberSixJob: Schema.Attribute.String;
    memberSixName: Schema.Attribute.String;
    memberThreeImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    memberThreeJob: Schema.Attribute.String;
    memberThreeName: Schema.Attribute.String;
    memberTwoImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    memberTwoJob: Schema.Attribute.String;
    memberTwoName: Schema.Attribute.String;
  };
}

export interface TreatmentsTypesTreatmentsTypes extends Struct.ComponentSchema {
  collectionName: 'components_treatments_types_treatments_types';
  info: {
    displayName: 'TreatmentsTypes';
  };
  attributes: {
    field: Schema.Attribute.String;
  };
}

export interface TreatmentsTreatments extends Struct.ComponentSchema {
  collectionName: 'components_treatments_treatments';
  info: {
    displayName: 'Treatments';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    Type: Schema.Attribute.Component<'treatments-types.treatments-types', true>;
  };
}

export interface TypesTypes extends Struct.ComponentSchema {
  collectionName: 'components_types_types';
  info: {
    displayName: 'Types';
  };
  attributes: {
    Type: Schema.Attribute.String;
  };
}

export interface VisibleResultsAboutVisibleResultsAbout
  extends Struct.ComponentSchema {
  collectionName: 'components_visible_results_about_visible_results_abouts';
  info: {
    displayName: 'visible-results-about';
  };
  attributes: {
    CTA: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    Slider: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
    VideoDesc: Schema.Attribute.String;
    VideoLink: Schema.Attribute.String;
    VideoTitle: Schema.Attribute.String;
  };
}

export interface VisibleResultsVisibleResults extends Struct.ComponentSchema {
  collectionName: 'components_visible_results_visible_results';
  info: {
    displayName: 'visible-results';
  };
  attributes: {
    desc: Schema.Attribute.String;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface WhatToExpectWhatToExpect extends Struct.ComponentSchema {
  collectionName: 'components_what_to_expect_what_to_expects';
  info: {
    displayName: 'WhatToExpect';
  };
  attributes: {
    Desc: Schema.Attribute.String;
    desc1: Schema.Attribute.Blocks;
    desc2: Schema.Attribute.Blocks;
    desc3: Schema.Attribute.Blocks;
    desc4: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
    title3: Schema.Attribute.String;
    title4: Schema.Attribute.String;
  };
}

export interface WhyChooseUsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_why_chooseuses';
  info: {
    displayName: 'WhyChooseUS';
  };
  attributes: {
    FirstIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    FirstSentence: Schema.Attribute.Text;
    firstTitle: Schema.Attribute.String;
    SecondIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SecondSentence: Schema.Attribute.Text;
    SecondTitle: Schema.Attribute.String;
    ThirdIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ThirdSentence: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface WhyChooseWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_why_chooses';
  info: {
    displayName: 'whyChoose';
  };
  attributes: {
    firstDesc: Schema.Attribute.Text;
    firstIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    firstTitle: Schema.Attribute.String;
    secondDesc: Schema.Attribute.Text;
    SecondIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    secondTitle: Schema.Attribute.String;
    ThirdDesc: Schema.Attribute.Text;
    ThirdIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ThirdTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-component.about-component': AboutComponentAboutComponent;
      'about-content.about-content': AboutContentAboutContent;
      'about-main.about-main': AboutMainAboutMain;
      'about-us.about-us': AboutUsAboutUs;
      'about.about': AboutAbout;
      'approach.approach': ApproachApproach;
      'choose-us.choose-us': ChooseUsChooseUs;
      'components.components': ComponentsComponents;
      'consultation.consultation': ConsultationConsultation;
      'contact-page.contact-page': ContactPageContactPage;
      'contact-us.contact-us': ContactUsContactUs;
      'contact.contact': ContactContact;
      'diffrence.diffrence': DiffrenceDiffrence;
      'event.event': EventEvent;
      'expect.expect': ExpectExpect;
      'featured-section.featured-section': FeaturedSectionFeaturedSection;
      'featured.featured': FeaturedFeatured;
      'form.form': FormForm;
      'goals.goals': GoalsGoals;
      'help-you.help-you': HelpYouHelpYou;
      'hero-component.hero-component': HeroComponentHeroComponent;
      'hero-section.hero-section': HeroSectionHeroSection;
      'hero.hero': HeroHero;
      'inquiry.inquiry': InquiryInquiry;
      'last-section.last-section': LastSectionLastSection;
      'let-us-help-you.let-us-help-you': LetUsHelpYouLetUsHelpYou;
      'map.map': MapMap;
      'massage-sections.massage-sections': MassageSectionsMassageSections;
      'massage.massage': MassageMassage;
      'media.media': MediaMedia;
      'message-page.message-page': MessagePageMessagePage;
      'our-team-page.our-team-page': OurTeamPageOurTeamPage;
      'sa.sa': SaSa;
      'scetionsqoutes.scetionsqoutes': ScetionsqoutesScetionsqoutes;
      'section.section': SectionSection;
      'services.services': ServicesServices;
      'slider-animation.slider-animation': SliderAnimationSliderAnimation;
      'slider.slider': SliderSlider;
      'team-page.team-page': TeamPageTeamPage;
      'team.team': TeamTeam;
      'teams-members.team-members': TeamsMembersTeamMembers;
      'teams-members.teams-members': TeamsMembersTeamsMembers;
      'teams.teams': TeamsTeams;
      'treatments-types.treatments-types': TreatmentsTypesTreatmentsTypes;
      'treatments.treatments': TreatmentsTreatments;
      'types.types': TypesTypes;
      'visible-results-about.visible-results-about': VisibleResultsAboutVisibleResultsAbout;
      'visible-results.visible-results': VisibleResultsVisibleResults;
      'what-to-expect.what-to-expect': WhatToExpectWhatToExpect;
      'why-choose-us.why-choose-us': WhyChooseUsWhyChooseUs;
      'why-choose.why-choose': WhyChooseWhyChoose;
    }
  }
}
