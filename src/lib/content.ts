import { getCollection, type CollectionEntry } from 'astro:content';
import { members } from '../data/site';

export type PublicationEntry = CollectionEntry<'publications'>;
export type NewsEntry = CollectionEntry<'news'>;

const memberIds = new Set(members.map((member) => member.id));

export async function getValidatedPublications() {
  const publications = await getCollection('publications');
  const errors: string[] = [];

  for (const publication of publications) {
    for (const memberId of publication.data.members) {
      if (!memberIds.has(memberId)) errors.push(`${publication.id}: unknown member ${memberId}`);
    }
    if (!publication.data.doi && !publication.data.url) errors.push(`${publication.id}: DOI or URL required`);
    if (publication.data.verificationSources.length === 0) errors.push(`${publication.id}: verification source required`);
    if (publication.data.codeUrl && !publication.data.codeUrl.startsWith('https://github.com/')) errors.push(`${publication.id}: code repository must use a verified GitHub URL`);
  }

  if (errors.length) throw new Error(`Publication content validation failed:\n${errors.join('\n')}`);

  return publications.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}

export async function getSortedNews() {
  const items = await getCollection('news');
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
