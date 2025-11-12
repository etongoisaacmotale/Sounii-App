// communityService.js
// Class-based mock community service

class CommunityService {
  simulateDelay(ms = 800) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  constructor() {
    this.posts = [
      { id: 1, author: "User A", content: "Hello world!" },
      { id: 2, author: "User B", content: "New track released!" },
    ];
    this.merch = [
      { id: 1, name: "T-Shirt", price: 20 },
      { id: 2, name: "Cap", price: 15 },
    ];
  }

  async getPosts() {
    await this.simulateDelay();
    return this.posts;
  }

  async createPost({ author, content }) {
    await this.simulateDelay();
    const newPost = { id: Date.now(), author, content };
    this.posts.push(newPost);
    return newPost;
  }

  async likePost(postId) {
    await this.simulateDelay();
    return { postId, liked: true };
  }

  async getMerch() {
    await this.simulateDelay();
    return this.merch;
  }

  async purchaseMerch(merchId, userId) {
    await this.simulateDelay();
    return { merchId, userId, purchased: true };
  }
}

// Export an instance
export const communityService = new CommunityService();
