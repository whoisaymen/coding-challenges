// Simple Fun #152: Invite More Women?
// https://www.codewars.com/kata/58acfe4ae0201e1708000075/javascript
function inviteMoreWomen(L) {
	return L.filter((x) => x == 1).length > L.filter((x) => x == -1).length;
}
