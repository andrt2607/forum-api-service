const CreatedThread = require('../CreatedThread');

describe('a CreatedThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      title: 'Dicoding Indonesia',
      body: 'bodybodybodybodybodybodybody',
    };

    // Action and Assert
    expect(() => new CreatedThread(payload)).toThrowError('CREATED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      title: 'dicoding',
      body: {},
    };

    // Action and Assert
    expect(() => new CreatedThread(payload)).toThrowError('CREATED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create CreatedThread object correctly', () => {
    // Arrange
    const payload = {
        id: 123,
        title: 'dicoding',
        body: 'dicoding',
    };

    // Action
    const CreatedThread = new CreatedThread(payload);

    // Assert
    expect(CreatedThread.id).toEqual(payload.id);
    expect(CreatedThread.title).toEqual(payload.title);
    expect(CreatedThread.body).toEqual(payload.body);
  });
});
