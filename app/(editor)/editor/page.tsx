
import { EditorGuard } from './EditorGuard';
import EditorClient from './EditorClient';
import { getStoryList } from '@/utilities/data/getStoryList';
import { getStoryData } from '@/utilities/data/getStoryData';

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
  let extra = {};

  // Fetch story data to check component type
  if (path) {
    const { data } = await getStoryData({ path, isEditor: true });

    // Only fetch extra data for story filter pages
    if (data && data !== 404 && data.story?.content?.component === 'sbStoryFilterPage') {
      extra = await getStoryList({ path });
    }
  }

  return (
    <EditorGuard searchParams={params}>
      <EditorClient extra={extra} />
    </EditorGuard>
  );
}
