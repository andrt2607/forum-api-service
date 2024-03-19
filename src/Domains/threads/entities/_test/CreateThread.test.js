const CreateThread = require('../CreateThread');

describe('a CreateThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      title: 'abc',
      body: 'abc',
    };

    // Action and Assert
    expect(() => new CreateThread(payload)).toThrowError('CREATE_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
        title: 123,
        body: 123,
    };

    // Action and Assert
    expect(() => new CreateThread(payload)).toThrowError('CREATE_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when title contains more than 50 character', () => {
    // Arrange
    const payload = {
      title: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
    };

    // Action and Assert
    expect(() => new CreateThread(payload)).toThrowError('CREATE_THREAD.TITLE_LIMIT_CHAR');
  });

  it('should create CreateThread object correctly', () => {
    // Arrange
    const payload = {
      title: 'Dicoding Indonesia',
      body: 'abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc',
    };

    // Action
    const { title, body } = new CreateThread(payload);

    // Assert
    expect(title).toEqual(payload.title);
    expect(body).toEqual(payload.body);
  });
});
