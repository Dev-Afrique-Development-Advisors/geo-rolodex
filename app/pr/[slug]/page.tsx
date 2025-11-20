import { notFound } from 'next/navigation';
import { getOrganisationBySlug } from '@/lib/api';
import ProfilePage from '@/components/profile/profile-page';

// Enable ISR for profile pages with 15 minutes revalidation
export const revalidate = 900; // 15 minutes

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function OrganisationProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getOrganisationBySlug(slug);

  if (!data) {
    notFound();
  }

  return <ProfilePage data={data} />;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = await getOrganisationBySlug(slug);

  if (!data) {
    return {
      title: 'Organisation Not Found',
    };
  }

  const title = `${data.organisation.name} - Geo-Rolodex`;
  const description = data.organisation.bio || `View the public profile of ${data.organisation.name}.`;
  const image = data.organisation.logo || '/dummy-logo.png';
  const url = `https://geo-rolodex.com/pr/${data.organisation.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },

    openGraph: {
      title,
      description,
      url,
      siteName: 'Geo-Rolodex',
      type: 'profile',
      images: [{ url: image }],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

