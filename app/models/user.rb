class User < ApplicationRecord
  validates :email, :password_digest, :session_token, :first_name, :last_name, :fav_color, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 5 }, allow_nil: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      nil
    end
  end

  def password
    @password  
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def new_session_token
    SecureRandom::urlsafe_base64
  end

  def generate_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end


end
