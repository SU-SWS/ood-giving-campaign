
import { EditorGuard } from './EditorGuard';
import EditorClient from './EditorClient';
import { getStoryList } from '@/utilities/data/getStoryList';

/**
 * Server component that validates access before rendering the editor.
 */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    path?: string;
    '_storyblok_tk[space_id]'?: string;
    '_storyblok_tk[timestamp]'?: string;
    '_storyblok_tk[token]'?: string;
  }>;
}) {
  const params = await searchParams;
  const path = params.path?.replace(/\/$/, '') ?? '';
  const extra = path ? await getStoryList({ path }) : [];

  return (
    <EditorGuard searchParams={params}>
      <EditorClient extra={extra} />
    </EditorGuard>
  );
}
