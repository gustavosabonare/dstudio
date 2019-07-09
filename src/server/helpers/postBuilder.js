import { getMedias } from '../services/wordpress';

import { getVideoUrl, getContentWithoutHTML } from './post';

function postBuilder(post) {
  return {
    id: post.id,
    status: post.status,
    title: post.title.rendered,
    categories: post.categories
  }
}

function buildSongPost(post) {
  const newPost = postBuilder(post);

  return {
    ...newPost, ...{
      mediaUrl: post.source_url,
      mediaLength: post.media_details.length,
      mediaYear: post.media_details.length_formatted,
      mediaArtist: post.media_details.artist,
      mediaAlbum: post.media_details.album
    }
  }
}

async function buildServicePost(post) {
  const newPost = {
    ...postBuilder(post), ... {
      content: !post.content.protected && getContentWithoutHTML(post.content.rendered),
      details: !post.excerpt.protected && getContentWithoutHTML(post.excerpt.rendered)
    }
  }

  try {
    const image = await getMedias(post.id);
    return { ...newPost, image: image[0].media_details.sizes.full.source_url };
  } catch (err) {
    return newPost;
  }
}

async function buildConvidaPost(post) {
  const newPost = {
    ...postBuilder(post), ... {
      content: !post.content.protected && getContentWithoutHTML(post.content.rendered),
      details: !post.excerpt.protected && getContentWithoutHTML(post.excerpt.rendered),
      videoUrl: getVideoUrl(post.content.rendered)
    }
  }

  try {
    const image = await getMedias(post.id);
    return { ...newPost, image: image[0].media_details.sizes.full.source_url };
  } catch (err) {
    return newPost;
  }
}

export {
  postBuilder,
  buildSongPost,
  buildServicePost,
  buildConvidaPost
}
