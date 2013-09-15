String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.humanize = function() {
  return this.replace(/([A-Z])/g, " $1").replace(/-|_/g, ' ').replace(/^\s?/, "");
};

String.prototype.hyphenate = function() {
  return this.replace(/([A-Z])/g, " $1").toLowerCase().replace(/\s|_/g, '-').toLowerCase();
};

String.prototype.isBlank = function() {
  return this.length === 0;
};

String.prototype.isPresent = function() {
  return this.length > 0;
};

String.prototype.titleCase = function() {
  return this.replace(/([A-Z])/g, " $1").replace(/_|-/g, " ").split(/\s/).map(function(word) {
    return word.capitalize();
  }).join(" ");
};

String.prototype.toNumber = function() {
  return parseInt(this, 10);
};

String.prototype.truncate = function(length) {
  return (this.length > length) ? this.substring(0, length) + '...' : this;
};

String.prototype.camelize = function() {
  return this.split(/_|-|\s/g).map(function(part, i) {
    return (i > 0) ? part.capitalize() : part.toLowerCase();
  }).join('');
};

String.prototype.constantize = function() {
  return this.camelize().capitalize();
};

String.prototype.underscore = function() {
  return this.replace(/([A-Z])/g, " $1").replace(/^\s?/, '').replace(/-|\s/g, "_").toLowerCase();
};