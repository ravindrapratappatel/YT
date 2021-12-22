export const SetuserName = user => {
  return {type: 'User_name', user: user};
};
export const channeldetail = data => {
  return {type: 'channel', data: data};
};

export const explore = data => {
  return {type: 'explore', data: data};
};
