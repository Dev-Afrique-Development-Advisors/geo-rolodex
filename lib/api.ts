import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5400/api/v1";
const CLIENT_KEY = process.env.NEXT_PUBLIC_CLIENT_KEY || "";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-dex-client-key": CLIENT_KEY,
    "origin": process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
});

export interface Organisation {
  id: string;
  name: string;
  slug?: string;
  workspaces: string[];
  phoneNumber?: string;
  email?: string;
  address?: string;
  website?: string;
  logo?: string;
  linkedInUrl?: string;
  headOfficeLocation?: string;
  officeLocations?: string[];
  paidStaffLocations?: string[];
  bio?: string;
  mission?: string;
  yearFounded?: Date | string;
  media?: {
    url: string;
    name: string;
    description: string;
  }[];
  contactPerson: {
    name: string;
    email: string;
    bio?: string;
    linkedInUrl?: string;
  };
  isActive: boolean;
  emailVerified: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  timeline: string;
  tags: string[];
  media?: {
    name: string;
    url: string;
  };
  organisation: Organisation;
  collaboratingOrganisations: string[];
  status: string;
  continent: string;
  country: string;
  region: string;
  state: string;
  keyOutcomes: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export const getOrganisationBySlug = async (slug: string): Promise<{ organisation: Organisation; projects: Project[] } | null> => {
  try {
    const response = await api.get(`/public/org-profile/${slug}`);
    return response.data?.data || null;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return null;
    }
    console.error("Error fetching organisation:", error.response?.data?.message || error.message);
    throw new Error(`${error.response?.status} - ${error.response?.data?.message || error.message}`);
  }
};