import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import pressureTestingImage from '../assets/images/high_pressure_system_page_1_img_2.jpeg'
import raisedFlooringImage from '../assets/images/raised_floor_systems__page_2_img_1.jpeg'
import radiantClimateImage from '../assets/images/rdiant_heta_and_cool_page_3_img_1.jpeg'
import smartGlassImage from '../assets/images/smart_glass__page_1_img_1.jpeg'
import type { FooterColumn, NavItem, PortfolioItem, Service, Stat } from '../types/site'

export const brand = {
  name: 'One World United',
  legal: 'General Trading & Contracting Co. W.L.L',
}

export const navItems: NavItem[] = [
  { label: 'Homepage', href: '#/' },
  { label: 'About Us', href: '#/#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#/#contact' },
]

export const dropdownServices = [
  { 
    id: '01', 
    title: 'High-Pressure Testing Systems', 
    href: '#/services/pressure-testing',
    description: 'Elite-performance hydrostatic & pneumatic testing infrastructure up to 30,000+ PSI.'
  },
  { 
    id: '02', 
    title: 'Specialized Raised Access Flooring', 
    href: '#/services/raised-flooring',
    description: 'Precision raised-floor and modular pedestal panels for critical facilities and control rooms.'
  },
  { 
    id: '03', 
    title: 'Hydronic Radiant Climate Solutions', 
    href: '#/services/radiant-climate',
    description: 'Invisible, silent floor, ceiling, and wall systems for optimal climate performance.'
  },
  { 
    id: '04', 
    title: 'Smart Glass Technologies', 
    href: '#/services/smart-glass',
    description: 'Advanced switchable privacy and dynamic shading glazing systems.'
  },
]

export const stats: Stat[] = [
  { value: '19+', label: 'Years in Market' }, // Founded 2007, current time 2026
  { value: '500+', label: 'Successful Projects', accent: 'red' },
  { value: '100+', label: 'Technical Experts' },
]

export const services: Service[] = [
  {
    id: '01',
    title: 'High-Pressure Testing Systems',
    description:
      'Certified pressure testing, blast enclosures, containerized mobile labs, and field skids up to 30,000+ PSI. Designed to meet API, ASME, and ISO standards for industrial oilfield and process piping.',
  },
  {
    id: '02',
    title: 'Specialized Raised Access Flooring',
    description:
      'Precision structural raised floor panels with adjustable pedestal configurations. Custom solutions for data centers, control rooms, telecom switching centers, and clean labs.',
  },
  {
    id: '03',
    title: 'Hydronic Radiant Climate Solutions',
    description:
      'Advanced underfloor, wall, and ceiling radiant heating and cooling loops. Features smart dew-point monitors, zoning controls, and seamless BMS integration for luxury comfort.',
  },
  {
    id: '04',
    title: 'Smart Glass Technologies',
    description:
      'Switchable PDLC privacy glass, SPD dynamic solar shading, and electrochromic glass systems. Transforms instantly from transparent to opaque for office and residential spaces.',
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'High-Pressure Systems',
    description: 'Precision high-pressure validation, blast bays, and mobile containerized field testing units.',
    image: pressureTestingImage,
    alt: 'Mobile containerized high-pressure test laboratory',
  },
  {
    title: 'Access Floor Systems',
    description: 'Cementitious and aluminum modular floor structures with HPL/vinyl finishes for high-load centers.',
    image: raisedFlooringImage,
    alt: 'Data center access flooring panel installation',
  },
  {
    title: 'Radiant HVAC Solutions',
    description: 'Integrated underfloor, ceiling, and wall hydronic heating/cooling piping layouts.',
    image: radiantClimateImage,
    alt: 'Living area radiant climate system schematic render',
  },
  {
    title: 'Smart Glass Glazing',
    description: 'Advanced switchable PDLC privacy glass divider partition walls in dynamic office space.',
    image: smartGlassImage,
    alt: 'Office glass wall showing translucent opaque privacy state',
  },
]

export const partnerLogos = ['KOC', 'KNPC', 'EQUATE', 'AGILITY', 'KIPIC', 'EQUATE']

export const footerColumns: FooterColumn[] = [
  {
    title: 'Headquarters',
    lines: ['Sharqiya Block', 'Behind Crowne Plaza, Al-Ardiya Tower, Floor 02', 'Kuwait'],
    icon: MapPin,
  },
  {
    title: 'Solutions',
    lines: ['Pressure Testing Bays', 'Raised Access Floors', 'Radiant HVAC Loops', 'Smart Glazing Panels'],
  },
  {
    title: 'Working Hours',
    lines: ['07:00 AM - 05:00 PM', 'Saturday - Thursday'],
    icon: Clock,
  },
  {
    title: 'Direct Contact',
    lines: ['+965 6662 3543', 'team@oneworldunited.com'],
    icon: Phone,
  },
]

export const contactEmailIcon = Mail
