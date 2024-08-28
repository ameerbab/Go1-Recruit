$(function () {
    $(document).keydown(function (e) {
        return (e.which || e.keyCode) != 116;
    });

});
/* $(".nextBtn").click(function(){
    var vallues = $('.result1').val('');
});*/
$(document).ready(function(){
    window.history.forward();
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
    $('textarea').bind('cut copy paste', function(e){
        e.preventDefault();
    })
    window.addEventListener('beforeunload', (event) => {
      window.event.preventDefault();
      event.returnValue = 'Are you sure you want to leave?';
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
    var  count12 = '{{go1_recruit_settings.maximum_time_for_execution}}'
    $(".btn-execute-code").click(function(){
         var empty = $(this).parent().find('.codelanguage').val();
         let editing = $(this).parent().find(".code-editing").attr('data-id');
         var editor = ace.edit(editing);
         var code123 = editor.getValue();
    
    if(empty != ''){
        if(code123 == ''){
            alert('Please enter the code to execute.')
        }
       else{
        $(".Loading").show();
         let editing = $(this).parent().find(".code-editing").attr('data-id');
         var counter=parseInt($(this).parent().find(".hdnCodeCounter").val());
         $(this).parent().find(".hdnCodeCounter").val(counter+1);
          var editor = ace.edit(editing);
    var code1 = editor.getValue();
    let lang = $(this).parent().find('.codelanguage').val();
    var resultsDiv= $(this).parent().find('.execute_result');
    var resultsDivSave= $(this).parent().find('.result1');
    var currentBtn=$(this);
    frappe.call({
        method: 'go1_recruit.templates.pages.start_test1.execute',
        args: {
           code2:code1,
           lang1:lang
    },
    callback: function(r) {
        var resultt = $('.btn-execute-code').val();
        if(r.message.output!=undefined)
        {
        $(resultsDivSave).html(r.message.output);
        $(resultsDiv).append("<b>Attempt "+ (counter+1) + ":</b><br/>");
        $(resultsDiv).append(code1+"<br/><br/>");
        $(resultsDiv).append("Output :"+r.message.output + "<br/><br/>");
         $(currentBtn).val("Execute ("+(count12-(counter+1))+")");
        if((count12-1)==counter)
        {
            $(currentBtn).attr("disabled","disabled")
        }
        $(".Loading").hide();
        }
       
    }
})
}
}
else{
     alert("Please Select Your Programming Language")
    
}

    });
});
//     function converter() {
//        let editing = $(".code-editing").attr('data-id');
//        var editor = ace.edit(editing);
//         var code1 = editor.getValue();
//         let lang = $('select').val();
//         frappe.call({
//             method: 'go1_recruit.templates.pages.start_test.execute',
//             args: {
//                code2:code1,
//                lang1:lang
//         },
//         callback: function(r) {
//             $(".codeResult").each(function() {
//             let codeResult = $(this).attr('data-id');
//             $('#' + codeResult).val(r.message.output);
//            })
//         }
//     })
// }

$(".code-editing").each(function() {
let editing = $(this).attr('data-id');
var editor = ace.edit(editing);
editor.setTheme("ace/theme/xcode");
editor.getSession().setMode("ace/mode/python");
editor.commands.addCommand({
    name: "breakTheEditor", 
    bindKey: "ctrl-c|ctrl-v|ctrl-x|ctrl-shift-v|shift-del|cmd-c|cmd-v|cmd-x", 
    exec: function() {} 
});
document.getElementById(editing).style.height = "200px";
})


{/* <script type="text/x-mathjax-config"> */}
MathJax.Hub.Config({ extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "a11y/accessibility-menu.js"], "HTML-CSS": {imageFont: null }, showMathMenu: false, showMathMenuMSIE: false, TeX: { extensions: ["AMSmath.js","AMSsymbols.js","noUndefined.js"]}, jax: ["input/TeX","input/AsciiMath","output/HTML-CSS"] });

var currentDate=new Date();
var startTime=currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
// console.log(startTime);
/**
* Basic structure: TC_Class is the public class that is returned upon being called
* 
* So, if you do
*      var tc = $(".timer").TimeCircles();
*      
* tc will contain an instance of the public TimeCircles class. It is important to
* note that TimeCircles is not chained in the conventional way, check the
* documentation for more info on how TimeCircles can be chained.
* 
* After being called/created, the public TimerCircles class will then- for each element
* within it's collection, either fetch or create an instance of the private class.
* Each function called upon the public class will be forwarded to each instance
* of the private classes within the relevant element collection
**/
/*
*  /MathJax/extensions/MathMenu.js
*
*  Copyright (c) 2009-2017 The MathJax Consortium
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/

(function($) {

var useWindow = window;

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
    Object.keys = (function() {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function(obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                throw new TypeError('Object.keys called on non-object');
            }

            var result = [],
                prop, i;

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }

            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }());
}

// Used to disable some features on IE8
var limited_mode = false;
var tick_duration = 200; // in ms

var debug = (location.hash === "#debug");

function debug_log(msg) {
    if (debug) {
        // console.log(msg);
    }
}

var allUnits = ["Days", "Hours", "Minutes", "Seconds"];
var nextUnits = {
    Seconds: "Minutes",
    Minutes: "Hours",
    Hours: "Days",
    Days: "Years"
};
var secondsIn = {
    Seconds: 1,
    Minutes: 60,
    Hours: 3600,
    Days: 86400,
    Months: 2678400,
    Years: 31536000
};

/**
 * Converts hex color code into object containing integer values for the r,g,b use
 * This function (hexToRgb) originates from:
 * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 * @param {string} hex color code
 */
function hexToRgb(hex) {

    // Verify already RGB (e.g. "rgb(0,0,0)") or RGBA (e.g. "rgba(0,0,0,0.5)")
    var rgba = /^rgba?\(([\d]+),([\d]+),([\d]+)(,([\d\.]+))?\)$/;
    if (rgba.test(hex)) {
        var result = rgba.exec(hex);
        return {
            r: parseInt(result[1]),
            g: parseInt(result[2]),
            b: parseInt(result[3]),
            a: parseInt(result[5] ? result[5] : 1)
        };
    }

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

/**
 * Function s4() and guid() originate from:
 * http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
 */
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

/**
 * Creates a unique id
 * @returns {String}
 */
function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

/**
 * Array.prototype.indexOf fallback for IE8
 * @param {Mixed} mixed
 * @returns {Number}
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/ ) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0) ?
            Math.ceil(from) :
            Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

function parse_date(str) {
    var match = str.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);
    if (match !== null && match.length > 0) {
        var parts = str.split(" ");
        var date = parts[0].split("-");
        var time = parts[1].split(":");
        return new Date(date[0], date[1] - 1, date[2], time[0], time[1], time[2]);
    }
    // Fallback for different date formats
    var d = Date.parse(str);
    if (!isNaN(d))
        return d;
    d = Date.parse(str.replace(/-/g, '/').replace('T', ' '));
    if (!isNaN(d))
        return d;
    // Cant find anything
    return new Date();
}

function parse_times(diff, old_diff, total_duration, units, floor) {
    var raw_time = {};
    var raw_old_time = {};
    var time = {};
    var pct = {};
    var old_pct = {};
    var old_time = {};

    var greater_unit = null;
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        var maxUnits;

        if (greater_unit === null) {
            maxUnits = total_duration / secondsIn[unit];
        } else {
            maxUnits = secondsIn[greater_unit] / secondsIn[unit];
        }

        var curUnits = (diff / secondsIn[unit]);
        var oldUnits = (old_diff / secondsIn[unit]);

        if (floor) {
            if (curUnits > 0) curUnits = Math.floor(curUnits);
            else curUnits = Math.ceil(curUnits);
            if (oldUnits > 0) oldUnits = Math.floor(oldUnits);
            else oldUnits = Math.ceil(oldUnits);
        }

        if (unit !== "Days") {
            curUnits = curUnits % maxUnits;
            oldUnits = oldUnits % maxUnits;
        }

        raw_time[unit] = curUnits;
        time[unit] = Math.abs(curUnits);
        raw_old_time[unit] = oldUnits;
        old_time[unit] = Math.abs(oldUnits);
        pct[unit] = Math.abs(curUnits) / maxUnits;
        old_pct[unit] = Math.abs(oldUnits) / maxUnits;

        greater_unit = unit;
    }

    return {
        raw_time: raw_time,
        raw_old_time: raw_old_time,
        time: time,
        old_time: old_time,
        pct: pct,
        old_pct: old_pct
    };
}

var TC_Instance_List = {};

function updateUsedWindow() {
    if (typeof useWindow.TC_Instance_List !== "undefined") {
        TC_Instance_List = useWindow.TC_Instance_List;
    } else {
        useWindow.TC_Instance_List = TC_Instance_List;
    }
    initializeAnimationFrameHandler(useWindow);
};

function initializeAnimationFrameHandler(w) {
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !w.requestAnimationFrame; ++x) {
        w.requestAnimationFrame = w[vendors[x] + 'RequestAnimationFrame'];
        w.cancelAnimationFrame = w[vendors[x] + 'CancelAnimationFrame'];
    }

    if (!w.requestAnimationFrame || !w.cancelAnimationFrame) {
        w.requestAnimationFrame = function(callback, element, instance) {
            if (typeof instance === "undefined")
                instance = { data: { last_frame: 0 } };
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - instance.data.last_frame));
            var id = w.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            instance.data.last_frame = currTime + timeToCall;
            return id;
        };
        w.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
};


var TC_Instance = function(element, options) {
    this.element = element;
    this.container;
    this.listeners = null;
    this.data = {
        paused: false,
        last_frame: 0,
        animation_frame: null,
        interval_fallback: null,
        timer: false,
        total_duration: null,
        prev_time: null,
        drawn_units: [],
        text_elements: {
            Days: null,
            Hours: null,
            Minutes: null,
            Seconds: null
        },
        attributes: {
            canvas: null,
            context: null,
            item_size: null,
            line_width: null,
            radius: null,
            outer_radius: null
        },
        state: {
            fading: {
                Days: false,
                Hours: false,
                Minutes: false,
                Seconds: false
            }
        }
    };

    this.config = null;
    this.setOptions(options);
    this.initialize();
};

TC_Instance.prototype.clearListeners = function() {
    this.listeners = { all: [], visible: [] };
};

TC_Instance.prototype.addTime = function(seconds_to_add) {
    if (this.data.attributes.ref_date instanceof Date) {
        var d = this.data.attributes.ref_date;
        d.setSeconds(d.getSeconds() + seconds_to_add);
    } else if (!isNaN(this.data.attributes.ref_date)) {
        this.data.attributes.ref_date += (seconds_to_add * 1000);
    }
};

TC_Instance.prototype.initialize = function(clear_listeners) {
    // Initialize drawn units
    this.data.drawn_units = [];
    for (var i = 0; i < Object.keys(this.config.time).length; i++) {
        var unit = Object.keys(this.config.time)[i];
        if (this.config.time[unit].show) {
            this.data.drawn_units.push(unit);
        }
    }

    // Avoid stacking
    $(this.element).children('div.time_circles').remove();

    if (typeof clear_listeners === "undefined")
        clear_listeners = true;
    if (clear_listeners || this.listeners === null) {
        this.clearListeners();
    }
    this.container = $("<div>");
    this.container.addClass('time_circles');
    this.container.appendTo(this.element);

    // Determine the needed width and height of TimeCircles
    var height = this.element.offsetHeight;
    var width = this.element.offsetWidth;
    if (height === 0)
        height = $(this.element).height();
    if (width === 0)
        width = $(this.element).width();

    if (height === 0 && width > 0)
        height = width / this.data.drawn_units.length;
    else if (width === 0 && height > 0)
        width = height * this.data.drawn_units.length;

    // Create our canvas and set it to the appropriate size
    var canvasElement = document.createElement('canvas');
    canvasElement.width = width;
    canvasElement.height = height;

    // Add canvas elements
    this.data.attributes.canvas = $(canvasElement);
    this.data.attributes.canvas.appendTo(this.container);

    // Check if the browser has browser support
    var canvasSupported = isCanvasSupported();
    // If the browser doesn't have browser support, check if explorer canvas is loaded
    // (A javascript library that adds canvas support to browsers that don't have it)
    if (!canvasSupported && typeof G_vmlCanvasManager !== "undefined") {
        G_vmlCanvasManager.initElement(canvasElement);
        limited_mode = true;
        canvasSupported = true;
    }
    if (canvasSupported) {
        this.data.attributes.context = canvasElement.getContext('2d');
    }

    this.data.attributes.item_size = Math.min(width / this.data.drawn_units.length, height);
    this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width;
    this.data.attributes.radius = ((this.data.attributes.item_size * 0.8) - this.data.attributes.line_width) / 2;
    this.data.attributes.outer_radius = this.data.attributes.radius + 0.5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);

    // Prepare Time Elements
    var i = 0;
    for (var key in this.data.text_elements) {
        if (!this.config.time[key].show)
            continue;

        var textElement = $("<div>");
        textElement.addClass('textDiv_' + key);
        textElement.css("top", Math.round(0.35 * this.data.attributes.item_size));
        textElement.css("left", Math.round(i++ * this.data.attributes.item_size));
        textElement.css("width", this.data.attributes.item_size);
        textElement.appendTo(this.container);

        var headerElement = $("<h4>");
        headerElement.text(this.config.time[key].text); // Options
        headerElement.css("font-size", Math.round(this.config.text_size * this.data.attributes.item_size));
        headerElement.appendTo(textElement);

        var numberElement = $("<span>");
        numberElement.css("font-size", Math.round(this.config.number_size * this.data.attributes.item_size));
        numberElement.appendTo(textElement);

        this.data.text_elements[key] = numberElement;
    }

    this.start();
    if (!this.config.start) {
        this.data.paused = true;
    }

    // Set up interval fallback
    var _this = this;
    this.data.interval_fallback = useWindow.setInterval(function() {
        _this.update.call(_this, true);
    }, 100);
};

TC_Instance.prototype.update = function(nodraw) {
    if (typeof nodraw === "undefined") {
        nodraw = false;
    } else if (nodraw && this.data.paused) {
        return;
    }

    if (limited_mode) {
        //Per unit clearing doesn't work in IE8 using explorer canvas, so do it in one time. The downside is that radial fade cant be used
        this.data.attributes.context.clearRect(0, 0, this.data.attributes.canvas[0].width, this.data.attributes.canvas[0].hright);
    }
    var diff, old_diff;

    var prevDate = this.data.prev_time;
    var curDate = new Date();
    this.data.prev_time = curDate;

    if (prevDate === null)
        prevDate = curDate;

    // If not counting past zero, and time < 0, then simply draw the zero point once, and call stop
    if (!this.config.count_past_zero) {
        if (curDate > this.data.attributes.ref_date) {
            for (var i = 0; i < this.data.drawn_units.length; i++) {
                var key = this.data.drawn_units[i];

                // Set the text value
                this.data.text_elements[key].text("0");
                var x = (i * this.data.attributes.item_size) + (this.data.attributes.item_size / 2);
                var y = this.data.attributes.item_size / 2;
                var color = this.config.time[key].color;
                this.drawArc(x, y, color, 0);
            }
            this.stop();
            return;
        }
    }

    // Compare current time with reference
    diff = (this.data.attributes.ref_date - curDate) / 1000;
    old_diff = (this.data.attributes.ref_date - prevDate) / 1000;

    var floor = this.config.animation !== "smooth";

    var visible_times = parse_times(diff, old_diff, this.data.total_duration, this.data.drawn_units, floor);
    var all_times = parse_times(diff, old_diff, secondsIn["Years"], allUnits, floor);

    var i = 0;
    var j = 0;
    var lastKey = null;

    var cur_shown = this.data.drawn_units.slice();
    for (var i in allUnits) {
        var key = allUnits[i];

        // Notify (all) listeners
        if (Math.floor(all_times.raw_time[key]) !== Math.floor(all_times.raw_old_time[key])) {
            this.notifyListeners(key, Math.floor(all_times.time[key]), Math.floor(diff), "all");
        }

        if (cur_shown.indexOf(key) < 0)
            continue;

        // Notify (visible) listeners
        if (Math.floor(visible_times.raw_time[key]) !== Math.floor(visible_times.raw_old_time[key])) {
            this.notifyListeners(key, Math.floor(visible_times.time[key]), Math.floor(diff), "visible");
        }

        if (!nodraw) {
            // Set the text value
            this.data.text_elements[key].text(Math.floor(Math.abs(visible_times.time[key])));

            var x = (j * this.data.attributes.item_size) + (this.data.attributes.item_size / 2);
            var y = this.data.attributes.item_size / 2;
            var color = this.config.time[key].color;

            if (this.config.animation === "smooth") {
                if (lastKey !== null && !limited_mode) {
                    if (Math.floor(visible_times.time[lastKey]) > Math.floor(visible_times.old_time[lastKey])) {
                        this.radialFade(x, y, color, 1, key);
                        this.data.state.fading[key] = true;
                    } else if (Math.floor(visible_times.time[lastKey]) < Math.floor(visible_times.old_time[lastKey])) {
                        this.radialFade(x, y, color, 0, key);
                        this.data.state.fading[key] = true;
                    }
                }
                if (!this.data.state.fading[key]) {
                    this.drawArc(x, y, color, visible_times.pct[key]);
                }
            } else {
                this.animateArc(x, y, color, visible_times.pct[key], visible_times.old_pct[key], (new Date()).getTime() + tick_duration);
            }
        }
        lastKey = key;
        j++;
    }

    // Dont request another update if we should be paused
    if (this.data.paused || nodraw) {
        return;
    }

    // We need this for our next frame either way
    var _this = this;
    var update = function() {
        _this.update.call(_this);
    };

    // Either call next update immediately, or in a second
    if (this.config.animation === "smooth") {
        // Smooth animation, Queue up the next frame
        this.data.animation_frame = useWindow.requestAnimationFrame(update, _this.element, _this);
    } else {
        // Tick animation, Don't queue until very slightly after the next second happens
        var delay = (diff % 1) * 1000;
        if (delay < 0)
            delay = 1000 + delay;
        delay += 50;

        _this.data.animation_frame = useWindow.setTimeout(function() {
            _this.data.animation_frame = useWindow.requestAnimationFrame(update, _this.element, _this);
        }, delay);
    }
};

TC_Instance.prototype.animateArc = function(x, y, color, target_pct, cur_pct, animation_end) {
    if (this.data.attributes.context === null)
        return;

    var diff = cur_pct - target_pct;
    if (Math.abs(diff) > 0.5) {
        if (target_pct === 0) {
            this.radialFade(x, y, color, 1);
        } else {
            this.radialFade(x, y, color, 0);
        }
    } else {
        var progress = (tick_duration - (animation_end - (new Date()).getTime())) / tick_duration;
        if (progress > 1)
            progress = 1;

        var pct = (cur_pct * (1 - progress)) + (target_pct * progress);
        this.drawArc(x, y, color, pct);

        //var show_pct =
        if (progress >= 1)
            return;
        var _this = this;
        useWindow.requestAnimationFrame(function() {
            _this.animateArc(x, y, color, target_pct, cur_pct, animation_end);
        }, this.element);
    }
};

TC_Instance.prototype.drawArc = function(x, y, color, pct) {
    if (this.data.attributes.context === null)
        return;

    var clear_radius = Math.max(this.data.attributes.outer_radius, this.data.attributes.item_size / 2);
    if (!limited_mode) {
        this.data.attributes.context.clearRect(
            x - clear_radius,
            y - clear_radius,
            clear_radius * 2,
            clear_radius * 2
        );
    }

    if (this.config.use_background) {
        this.data.attributes.context.beginPath();
        this.data.attributes.context.arc(x, y, this.data.attributes.radius, 0, 2 * Math.PI, false);
        this.data.attributes.context.lineWidth = this.data.attributes.line_width * this.config.bg_width;

        // line color
        this.data.attributes.context.strokeStyle = this.config.circle_bg_color;
        this.data.attributes.context.stroke();
    }

    // Direction
    var startAngle, endAngle, counterClockwise;
    var defaultOffset = (-0.5 * Math.PI);
    var fullCircle = 2 * Math.PI;
    startAngle = defaultOffset + (this.config.start_angle / 360 * fullCircle);
    var offset = (2 * pct * Math.PI);

    if (this.config.direction === "Both") {
        counterClockwise = false;
        startAngle -= (offset / 2);
        endAngle = startAngle + offset;
    } else {
        if (this.config.direction === "Clockwise") {
            counterClockwise = false;
            endAngle = startAngle + offset;
        } else {
            counterClockwise = true;
            endAngle = startAngle - offset;
        }
    }

    this.data.attributes.context.beginPath();
    this.data.attributes.context.arc(x, y, this.data.attributes.radius, startAngle, endAngle, counterClockwise);
    this.data.attributes.context.lineWidth = this.data.attributes.line_width;

    // line color
    this.data.attributes.context.strokeStyle = color;
    this.data.attributes.context.stroke();
};

TC_Instance.prototype.radialFade = function(x, y, color, from, key) {
    // TODO: Make fade_time option
    var rgb = hexToRgb(color);
    var _this = this; // We have a few inner scopes here that will need access to our instance

    var step = 0.2 * ((from === 1) ? -1 : 1);
    var i;
    for (i = 0; from <= 1 && from >= 0; i++) {
        // Create inner scope so our variables are not changed by the time the Timeout triggers
        (function() {
            var delay = 50 * i;
            var rgba = "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + (Math.round(from * 10) / 10) + ")";
            useWindow.setTimeout(function() {
                _this.drawArc(x, y, rgba, 1);
            }, delay);
        }());
        from += step;
    }
    if (typeof key !== undefined) {
        useWindow.setTimeout(function() {
            _this.data.state.fading[key] = false;
        }, 50 * i);
    }
};

TC_Instance.prototype.timeLeft = function() {
    if (this.data.paused && typeof this.data.timer === "number") {
        return this.data.timer;
    }
    var now = new Date();
    return ((this.data.attributes.ref_date - now) / 1000);
};

TC_Instance.prototype.start = function() {
    useWindow.cancelAnimationFrame(this.data.animation_frame);
    useWindow.clearTimeout(this.data.animation_frame)

    // Check if a date was passed in html attribute or jquery data
    var attr_data_date = $(this.element).data('date');
    if (typeof attr_data_date === "undefined") {
        attr_data_date = $(this.element).attr('data-date');
    }
    if (typeof attr_data_date === "string") {
        this.data.attributes.ref_date = parse_date(attr_data_date);
    }
    // Check if this is an unpause of a timer
    else if (typeof this.data.timer === "number") {
        if (this.data.paused) {
            this.data.attributes.ref_date = (new Date()).getTime() + (this.data.timer * 1000);
        }
    } else {
        // Try to get data-timer
        var attr_data_timer = $(this.element).data('timer');
        if (typeof attr_data_timer === "undefined") {
            attr_data_timer = $(this.element).attr('data-timer');
        }
        if (typeof attr_data_timer === "string") {
            attr_data_timer = parseFloat(attr_data_timer);
        }
        if (typeof attr_data_timer === "number") {
            this.data.timer = attr_data_timer;
            this.data.attributes.ref_date = (new Date()).getTime() + (attr_data_timer * 1000);
        } else {
            // data-timer and data-date were both not set
            // use config date
            this.data.attributes.ref_date = this.config.ref_date;
        }
    }

    // Start running
    this.data.paused = false;
    this.update.call(this);
};

TC_Instance.prototype.restart = function() {
    this.data.timer = false;
    this.start();
};

TC_Instance.prototype.stop = function() {
    if (typeof this.data.timer === "number") {
        this.data.timer = this.timeLeft(this);
    }
    // Stop running
    this.data.paused = true;
    useWindow.cancelAnimationFrame(this.data.animation_frame);
};

TC_Instance.prototype.destroy = function() {
    this.clearListeners();
    this.stop();
    useWindow.clearInterval(this.data.interval_fallback);
    this.data.interval_fallback = null;

    this.container.remove();
    $(this.element).removeAttr('data-tc-id');
    $(this.element).removeData('tc-id');
};

TC_Instance.prototype.setOptions = function(options) {
    if (this.config === null) {
        this.default_options.ref_date = new Date();
        this.config = $.extend(true, {}, this.default_options);
    }
    $.extend(true, this.config, options);

    // Use window.top if use_top_frame is true
    if (this.config.use_top_frame) {
        useWindow = window.top;
    } else {
        useWindow = window;
    }
    updateUsedWindow();

    this.data.total_duration = this.config.total_duration;
    if (typeof this.data.total_duration === "string") {
        if (typeof secondsIn[this.data.total_duration] !== "undefined") {
            // If set to Years, Months, Days, Hours or Minutes, fetch the secondsIn value for that
            this.data.total_duration = secondsIn[this.data.total_duration];
        } else if (this.data.total_duration === "Auto") {
            // If set to auto, total_duration is the size of 1 unit, of the unit type bigger than the largest shown
            for (var i = 0; i < Object.keys(this.config.time).length; i++) {
                var unit = Object.keys(this.config.time)[i];
                if (this.config.time[unit].show) {
                    this.data.total_duration = secondsIn[nextUnits[unit]];
                    break;
                }
            }
        } else {
            // If it's a string, but neither of the above, user screwed up.
            this.data.total_duration = secondsIn["Years"];
            console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto");
        }
    }
};

TC_Instance.prototype.addListener = function(f, context, type) {
    if (typeof f !== "function")
        return;
    if (typeof type === "undefined")
        type = "visible";
    this.listeners[type].push({ func: f, scope: context });
};

TC_Instance.prototype.notifyListeners = function(unit, value, total, type) {
    for (var i = 0; i < this.listeners[type].length; i++) {
        var listener = this.listeners[type][i];
        listener.func.apply(listener.scope, [unit, value, total]);
    }
};

TC_Instance.prototype.default_options = {
    ref_date: new Date(),
    start: true,
    animation: "smooth",
    count_past_zero: true,
    circle_bg_color: "#60686F",
    use_background: true,
    fg_width: 0.1,
    bg_width: 1.2,
    text_size: 0.07,
    number_size: 0.28,
    total_duration: "Auto",
    direction: "Clockwise",
    use_top_frame: false,
    start_angle: 0,
    time: {
        Days: {
            show: true,
            text: "Days",
            color: "#FC6"
        },
        Hours: {
            show: true,
            text: "Hours",
            color: "#9CF"
        },
        Minutes: {
            show: true,
            text: "Minutes",
            color: "#BFB"
        },
        Seconds: {
            show: true,
            text: "Seconds",
            color: "#F99"
        }
    }
};

// Time circle class
var TC_Class = function(elements, options) {
    this.elements = elements;
    this.options = options;
    this.foreach();
};

TC_Class.prototype.getInstance = function(element) {
    var instance;

    var cur_id = $(element).data("tc-id");
    if (typeof cur_id === "undefined") {
        cur_id = guid();
        $(element).attr("data-tc-id", cur_id);
    }
    if (typeof TC_Instance_List[cur_id] === "undefined") {
        var options = this.options;
        var element_options = $(element).data('options');
        if (typeof element_options === "string") {
            element_options = JSON.parse(element_options);
        }
        if (typeof element_options === "object") {
            options = $.extend(true, {}, this.options, element_options);
        }
        instance = new TC_Instance(element, options);
        TC_Instance_List[cur_id] = instance;
    } else {
        instance = TC_Instance_List[cur_id];
        if (typeof this.options !== "undefined") {
            instance.setOptions(this.options);
        }
    }
    return instance;
};

TC_Class.prototype.addTime = function(seconds_to_add) {
    this.foreach(function(instance) {
        instance.addTime(seconds_to_add);
    });
};

TC_Class.prototype.foreach = function(callback) {
    var _this = this;
    this.elements.each(function() {
        var instance = _this.getInstance(this);
        if (typeof callback === "function") {
            callback(instance);
        }
    });
    return this;
};

TC_Class.prototype.start = function() {
    this.foreach(function(instance) {
        instance.start();
    });
    return this;
};

TC_Class.prototype.stop = function() {
    this.foreach(function(instance) {
        instance.stop();
    });
    return this;
};

TC_Class.prototype.restart = function() {
    this.foreach(function(instance) {
        instance.restart();
    });
    return this;
};

TC_Class.prototype.rebuild = function() {
    this.foreach(function(instance) {
        instance.initialize(false);
    });
    return this;
};

TC_Class.prototype.getTime = function() {
    return this.getInstance(this.elements[0]).timeLeft();
};

TC_Class.prototype.addListener = function(f, type) {
    if (typeof type === "undefined")
        type = "visible";
    var _this = this;
    this.foreach(function(instance) {
        instance.addListener(f, _this.elements, type);
    });
    return this;
};

TC_Class.prototype.destroy = function() {
    this.foreach(function(instance) {
        instance.destroy();
    });
    return this;
};

TC_Class.prototype.end = function() {
    return this.elements;
};

$.fn.TimeCircles = function(options) {
    return new TC_Class(this, options);
};
}(jQuery));

var isClosed = 0;


function start_timer(){
$("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: true } } }).addListener(
function(unit, value, total) {
    if (total < 0) {
        $("#CountDownTimer").TimeCircles().stop();
        /*$("#confirmText").text("Your time is up. Click ok to submit your answers or click cancel to reload.");
        $("#btnCancel").hide();*/
        $("#btnClose").hide();
        if (isClosed == 0) {
            alert("Your time is up. Click ok to submit your answers or click cancel to reload.");
            frappe.run_serially([
                () => {
                    if(monitored == 1){
                        // video_recorder.stop_video_recording();
                        // screen_recorder.stop_recording();
                        conference.leave_room();
                    }
                },
                () => {
                    SubmitAnswers();
                }
            ])
        }
        isClosed = 1;
        //submitAnswers();
    }

}
);
check_video();
}
$(document).ready(function() {

// added by shankar anand on 12-11-2019 for Audio Questions

for(var i=1; i<=$(".rightQuestion").length; i++){
    if(document.getElementById('Audio_frm-'+i)){
        new RecordAudio({
            audio: document.getElementById('Audio_frm-'+i),
            doctype: 'Exam Result',
            filename: 'AudioRecord-',
            show_time_duration: true
        })
    }
}
// End of changes
$("textarea").val("")
$(".optionItem input[type=radio]").change(function() {
    $(this).parent().parent().find(".optionItem").removeClass("active");
    $(this).parent().addClass("active");
});
$(".optionItem input[type=checkbox]").change(function() {
    //   $(this).parent().parent().find(".optionItem").removeClass("active");
    if ($(this).is(':checked')) {
        $(this).parent().addClass("active");
    } else {
        $(this).parent().removeClass("active");
    }
});
});

// added by shankar anand on 30-08-2019 on 7:58 P.M for Zoom functionalities
function get_AccessCode(){
var auth = "Basic " + new Buffer('xAopWqx9SkW0IgmTSkCJ6A' + ':' + 'MTD6K5tYQlkfKciWP9iUGu760W359fBy').toString('base64');
$.ajax({
            type: 'POST',
            Accept: 'application/json',
            ContentType: 'application/json;charset=utf-8',
            url: 'https://zoom.us/oauth/token?grant_type=authorization_code&code='+'{{code}}'+ '&redirect_uri='+window.location.origin+'/start_test?token='+'{{token}}',
            data: {},
            dataType: "json",
            async: false,
            headers:{
                "Authorization": auth
            },
             success: function(data) {

             }
         });    
}
// end of changes added by shankar anand
// added by shankar anand on 03-09-2019
function CancelSelection(id) {
$("#QuestionItem-" + id).find(".optionItem").removeClass("active");
$("#QuestionItem-" + id).find("input[type=radio]").prop('checked', false);
$("#QuestionItem-" + id).find("input[type=checkbox]").attr('checked', false);;

var type2 = ($("#QuestionItem-" + (id)).attr("data-type"));
if(type2 == 'Single' || type2 == 'Multiple' ){
            $("#questionNo-" + id).addClass("selectedClass");
        }
// end of changes added by shankar anand
}

function selectQuestion(id) {
if(id==1){
     $(".buttons .prev-btn").attr("disabled",false);
     $(".buttons .prev-btn").addClass('disable-btn');
     $(".buttons .prev-btn").removeClass('btn-primary'); 
}else{
     $(".buttons .prev-btn").attr("disabled",false);
     $(".buttons .prev-btn").removeClass('disable-btn');
     $(".buttons .prev-btn").addClass('btn-primary'); 
 }
if (id == $(".rightQuestion").length) {
$(".buttons .nextBtn").attr("disabled","disabled");
$(".buttons .nextBtn").addClass('disable-btn');
$(".buttons .nextBtn").removeClass('btn-primary');
}
else{
$(".buttons .nextBtn").attr("disabled",false);
$(".buttons .nextBtn").removeClass('disable-btn');
$(".buttons .nextBtn").addClass('btn-primary');
}
 $("#questionNo-" + (id)).addClass("active-qsn-btn");
for(var i=1; i<=$(".rightQuestion").length; i++){
    if(i == id){
        $("#questionNo-" + (i)).addClass("active-qsn-btn");
        $("#questionNo-" + (i)).removeClass("disable-qsn-btn");
    }
    else{
        $("#questionNo-" + (i)).addClass("disable-qsn-btn");
        $("#questionNo-" + (i)).removeClass("active-qsn-btn");
    }
}

$("#result-" + id).val('')
$(".QuestionItem").hide();
$("#questionNo-" + (id)).html(id);
$("#QuestionItem-" + (id)).show();
//code inserted by shankar anand 0n 3-09-2019
var type2 = ($("#QuestionItem-" + (id)).attr("data-type"));
if (type2 == 'Multiple') {
    var check2 = $("#QuestionItem-" + (id)).find("input[type='checkbox'][name='rdOption-" + (id) + "']:checked").length;
    if (check2 < 1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }

}
if (type2 == 'Single') {
    var check2 = $("#QuestionItem-" + (id)).find("input[type='radio'][name='rdOption-" + (id) + "']:checked").length;
    if (check2 < 1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }

}
if (type2 == 'Free Text') {
    var check2 = $("#QuestionItem-" + (id)).find("textarea").val();
    if (check2.length<1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
if (type2 == 'Coding Question') {
    // var check2 = $("#QuestionItem-" + (id)).find(".hdnCodeCounter").val();
    // if (check2.length<2) {
    var check2 = parseInt($("#QuestionItem-" + (id)).find(".hdnCodeCounter").val());
    if (check2 == 0) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
//end of changes done by shankar on 3-09-2019
}

function ReviewLater(id) {
$("#result-" + (id)).val('')
var type = ($("#QuestionItem-" + (id)).attr("data-type"));
$("#questionNo-" + (id)).addClass("ReviewedLaterClass");
if (type == 'Multiple') {
    var check = $("#QuestionItem-" + (id)).find("input[type='checkbox'][name='rdOption-" + (id) + "']:checked").length;
    if (check > 0) {
        $("#questionNo-" + (id)).removeClass("selectedClass");
        $("#questionNo-" + (id)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id)).addClass("ReviewedLaterAnsweredClass");

        $("#questionNo-" + (id)).html(id + '<i class="fa fa-check" style="position: absolute;top: 0;"></i>');
    }

}
if (type == 'Single') {
    var check = $("#QuestionItem-" + (id)).find("input[type='radio'][name='rdOption-" + (id) + "']:checked").length;
    if (check > 0) {
        $("#questionNo-" + (id)).removeClass("selectedClass");
        $("#questionNo-" + (id)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id)).addClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id)).html(id + '<i class="fa fa-check" style="position: absolute;top: 0;"></i>');
    }

}

if (type == 'Free Text') {
    var check = $("#QuestionItem-" + (id)).find("textarea").val();
    if(check!="")
    {
       
        $("#questionNo-" + (id)).removeClass("selectedClass");
        $("#questionNo-" + (id)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id)).addClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id)).html(id + '<i class="fa fa-check" style="position: absolute;top: 0;"></i>');
       
    }
}
 if (type == 'Coding Question') {
    var check = $("#QuestionItem-" + (id)).find(".hdnCodeCounter").val();
    if(check>0)
    {
       $("#questionNo-" + (id)).removeClass("selectedClass");
        $("#questionNo-" + (id)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id)).addClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id)).html(id + '<i class="fa fa-check" style="position: absolute;top: 0;"></i>');
    }
}

if ((id+1) <= $(".rightQuestion").length){
    $(".QuestionItem").hide();
    $("#questionNo-" + (id + 1)).addClass("selectedClass");
    $("#QuestionItem-" + (id + 1)).show();
}
}

function goNext(id) {
 $(".buttons .prev-btn").attr("disabled",false);
 $(".buttons .prev-btn").removeClass('disable-btn');
 $(".buttons .prev-btn").addClass('btn-primary'); 
// for adding active class while clicking next button
 $("#questionNo-" + (id)).addClass("active-qsn-btn");
for(var i=1; i<=$(".rightQuestion").length; i++){
    if(i == id){
        $("#questionNo-" + (i)).addClass("active-qsn-btn");
        $("#questionNo-" + (i)).removeClass("disable-qsn-btn");
    }
    else{
        $("#questionNo-" + (i)).addClass("disable-qsn-btn");
        $("#questionNo-" + (i)).removeClass("active-qsn-btn");
    }
}
// ended
$("#result-" + (id - 1)).val('')
$('.result1').find().val('')
var type = ($("#QuestionItem-" + (id - 1)).attr("data-type"));
if (type == 'Multiple') {
    var check = $("#QuestionItem-" + (id - 1)).find("input[type='checkbox'][name='rdOption-" + (id - 1) + "']:checked").length;
    if (check > 0) {
        $("#questionNo-" + (id - 1)).removeClass("selectedClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id - 1)).addClass("answeredClass");
        $("#questionNo-" + (id - 1)).html((id - 1));
    }
    else{
        $("#questionNo-" + (id - 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
if (type == 'Single') {
    var check = $("#QuestionItem-" + (id - 1)).find("input[type='radio'][name='rdOption-" + (id - 1) + "']:checked").length;
    if (check > 0) {
        $("#questionNo-" + (id - 1)).removeClass("selectedClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id - 1)).addClass("answeredClass");
        $("#questionNo-" + (id - 1)).html((id - 1));
    }
    else{
        $("#questionNo-" + (id - 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }

}
if (type == 'Free Text') {
var check = $("#QuestionItem-" + (id - 1)).find("textarea").val();
    if(check.length>0)
    {
        $("#questionNo-" + (id - 1)).removeClass("selectedClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id - 1)).addClass("answeredClass");
        $("#questionNo-" + (id - 1)).html((id - 1));
    }
    else{
        $("#questionNo-" + (id - 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
if (type == 'Audio') {
var check = $("#QuestionItem-" + (id - 1)).find("input").val();
    if(check.length>0)
    {
        $("#questionNo-" + (id - 1)).removeClass("selectedClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id - 1)).addClass("answeredClass");
        $("#questionNo-" + (id - 1)).html((id - 1));
    }
    else{
        $("#questionNo-" + (id - 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
if (type == 'Coding Question') {
   
    //  var check = $("#QuestionItem-" + (id - 1)).find(".hdnCodeCounter").val();
    // if(check.length>1)
    var check = parseInt($("#QuestionItem-" + (id - 1)).find(".hdnCodeCounter").val());
    if(check>0)
    {
         
        $("#questionNo-" + (id - 1)).removeClass("selectedClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id - 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id - 1)).addClass("answeredClass");
        $("#questionNo-" + (id - 1)).html((id - 1));
    }
    else{
         
        $("#questionNo-" + (id - 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
//code inserted by shankar anand 0n 3-09-2019
var type2 = ($("#QuestionItem-" + (id)).attr("data-type"));

if (type2 == 'Multiple') {
    var check2 = $("#QuestionItem-" + (id)).find("input[type='checkbox'][name='rdOption-" + (id) + "']:checked").length;
    if (check2 < 1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }

}
if (type2 == 'Single') {
    var check2 = $("#QuestionItem-" + (id)).find("input[type='radio'][name='rdOption-" + (id) + "']:checked").length;
    if (check2 < 1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }

}
if (type2 == 'Free Text') {
    var check2 = $("#QuestionItem-" + (id)).find("textarea").val();
    if (check2.length<1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
if (type2 == 'Audio') {
    var check2 = $("#QuestionItem-" + (id)).find("input").val();
    if (check2.length<1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
if (type2 == 'Coding Question') {
    // var check2 = $("#QuestionItem-" + (id)).find(".hdnCodeCounter").val();
    // if (check2.length<2) {
    var check2 = parseInt($("#QuestionItem-" + (id)).find(".hdnCodeCounter").val());
    if (check2 == 0) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
// $("#questionNo-" + (id)).addClass("selectedClass");
// end of changes added by shankar on 3-09-2019

// if ((id-1) == $(".rightQuestion").length) {
//     var confirmResult = confirm("Are you sure want to submit your answers?");
//     if (confirmResult) {
//         $("#CountDownTimer").TimeCircles().stop();
//         $("#btnCancel").hide();
//         $("#btnClose").show();
//           SubmitAnswers();
//     }

// } 

// above lines are commented and changed by Rajeshwari for disabling next button
   
   if(id == $(".rightQuestion").length) {
        $(".buttons .nextBtn").attr("disabled","disabled");
        $(".buttons .nextBtn").removeClass('btn-primary');
        $(".buttons .nextBtn").addClass('disable-btn');
}else{
    $(".buttons .nextBtn").attr("disabled",false);
    $(".buttons .nextBtn").removeClass('disable-btn');
     $(".buttons .nextBtn").addClass('btn-primary');
}
    if ((id-1) == $(".rightQuestion").length) {
        $(".buttons .nextBtn").attr("disabled","disabled");
        $(".buttons .nextBtn").removeClass('btn-primary');
        $(".buttons .nextBtn").addClass('disable-btn');
        $("#CountDownTimer").TimeCircles().stop();
        $("#btnCancel").hide();
        $("#btnClose").show();
} 
else {
    $(".QuestionItem").hide();
    $("#QuestionItem-" + id).show();
}


}

function goPrev(id) {
if(id==1){
     $(".buttons .prev-btn").attr("disabled",false);
     $(".buttons .prev-btn").addClass('disable-btn');
     $(".buttons .prev-btn").removeClass('btn-primary'); 
}
// else{
//      $(".buttons .prev-btn").attr("disabled",false);
//      $(".buttons .prev-btn").removeClass('disable-btn');
//      $(".buttons .prev-btn").addClass('btn-primary'); 
// }
 $(".buttons .nextBtn").attr("disabled",false);
 $(".buttons .nextBtn").removeClass('disable-btn');
 $(".buttons .nextBtn").addClass('btn-primary');
// inserted for make button as active while prev is clicked
$("#questionNo-" + (id)).addClass("active-qsn-btn");
for(var i=1; i<=$(".rightQuestion").length; i++){
    if(i == id){
        $("#questionNo-" + (i)).addClass("active-qsn-btn");
        $("#questionNo-" + (i)).removeClass("disable-qsn-btn");
    }
    else{
        $("#questionNo-" + (i)).addClass("disable-qsn-btn");
        $("#questionNo-" + (i)).removeClass("active-qsn-btn");
    }
}
// ended

/* $("#result-" + (id + 1)).val('')
$('.result1').find().val('')*/
var type = ($("#QuestionItem-" + (id + 1)).attr("data-type"));
if (type == 'Multiple') {
    var check = $("#QuestionItem-" + (id + 1)).find("input[type='checkbox'][name='rdOption-" + (id + 1) + "']:checked").length;
    if (check > 0) {
        $("#questionNo-" + (id + 1)).removeClass("selectedClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id + 1)).addClass("answeredClass");
        $("#questionNo-" + (id + 1)).html((id + 1));
    }
    else{
        $("#questionNo-" + (id + 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
if (type == 'Single') {
    var check = $("#QuestionItem-" + (id + 1)).find("input[type='radio'][name='rdOption-" + (id + 1) + "']:checked").length;
    if (check > 0) {
        $("#questionNo-" + (id + 1)).removeClass("selectedClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id + 1)).addClass("answeredClass");
        $("#questionNo-" + (id + 1)).html((id + 1));
    }
    else{
        $("#questionNo-" + (id + 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }

}
if (type == 'Free Text') {
var check = $("#QuestionItem-" + (id + 1)).find("textarea").val();
    if(check.length>0)
    {
        $("#questionNo-" + (id + 1)).removeClass("selectedClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id + 1)).addClass("answeredClass");
        $("#questionNo-" + (id + 1)).html((id + 1));
    }
    else{
        $("#questionNo-" + (id + 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
if (type == 'Audio') {
var check = $("#QuestionItem-" + (id + 1)).find("input").val();
    if(check.length>0)
    {
        $("#questionNo-" + (id + 1)).removeClass("selectedClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id + 1)).addClass("answeredClass");
        $("#questionNo-" + (id + 1)).html((id + 1));
    }
    else{
        $("#questionNo-" + (id + 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
if (type == 'Coding Question') {
   
    //  var check = $("#QuestionItem-" + (id + 1)).find(".hdnCodeCounter").val();
    // if(check.length>1)
    var check = parseInt($("#QuestionItem-" + (id + 1)).find(".hdnCodeCounter").val());
   if(check>0)
    {
        
        $("#questionNo-" + (id + 1)).removeClass("selectedClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterAnsweredClass");
        $("#questionNo-" + (id + 1)).removeClass("ReviewedLaterClass");
        $("#questionNo-" + (id + 1)).addClass("answeredClass");
        $("#questionNo-" + (id + 1)).html((id + 1));
    }
    else{
       
        $("#questionNo-" + (id + 1)).addClass("selectedClass");//code inserted by shankar anand 0n 3-09-2019
    }
}
//code inserted by shankar anand 0n 3-09-2019
var type2 = ($("#QuestionItem-" + (id)).attr("data-type"));

if (type2 == 'Multiple') {
    var check2 = $("#QuestionItem-" + (id)).find("input[type='checkbox'][name='rdOption-" + (id) + "']:checked").length;
    if (check2 < 1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }

}
if (type2 == 'Single') {
    var check2 = $("#QuestionItem-" + (id)).find("input[type='radio'][name='rdOption-" + (id) + "']:checked").length;
    if (check2 < 1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }

}
if (type2 == 'Free Text') {
    var check2 = $("#QuestionItem-" + (id)).find("textarea").val();
    if (check2.length<1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
if (type2 == 'Audio') {
    var check2 = $("#QuestionItem-" + (id)).find("input").val();
    if (check2.length<1) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
if (type2 == 'Coding Question') {
    // var check2 = $("#QuestionItem-" + (id)).find(".hdnCodeCounter").val();
    // if (check2.length<2) {
    var check2 = parseInt($("#QuestionItem-" + (id)).find(".hdnCodeCounter").val());
    if (check2 == 0) {
        $("#questionNo-" + id).addClass("selectedClass");
    }
}
// $("#questionNo-" + (id)).addClass("selectedClass");
// end of changes added by shankar on 3-09-2019
if (id != 0) {
    $(".QuestionItem").hide();
    $("#QuestionItem-" + id).show();
}
}

//function goNext(id)
//{
//      $("#QuestionItem-"+(id-1)).hide();
//  $("#QuestionItem-"+id).show();
//  }
function goBack(id) {
$("#QuestionItem-" + (id + 1)).hide();
$("#QuestionItem-" + id).show();
}

function finish() {
// $("#CountDownTimer").TimeCircles().stop();//code commented by shankar anand 0n 2-09-2019
$("#btnCancel").hide();
$("#btnClose").show();
if (isClosed == 0) {
    var confirmResult = confirm("Are you sure you want to submit the answers?");
    if (confirmResult) {
        frappe.run_serially([
            () => {
                if(monitored == 1){
                    // video_recorder.stop_video_recording();
                    // screen_recorder.stop_recording();
                    conference.leave_room();
                }
            },
            () => {
                SubmitAnswers()
            }
        ]);
        isClosed = 1;//code inserted by shankar anand 0n 2-09-2019
        $("#CountDownTimer").TimeCircles().stop()//code inserted by shankar anand 0n 2-09-2019
    } else {
    //code commented by shankar anand 0n 2-09-2019    
        // var url = window.location.href;
        // window.location.href = url;
    }
}
// isClosed = 1;//code commented by shankar anand 0n 2-09-2019
}

function SubmitAnswers() {
$(".btn-finish").hide();
$(".Loading").show();
if ($(".QuestionItem:last-child").attr("data-type") == "Single") {
    // console.log($(".QuestionItem:last-child").find("input[type='radio']:checked").length);
    if ($(".QuestionItem:last-child").find("input[type='radio']:checked").length > 0) {

        var id = $(".QuestionItem:last-child").attr("id").split("-")[1];
        $("#questionNo-" + (id)).removeClass("selectedClass");
        $("#questionNo-" + (id)).addClass("answeredClass");
    } else {
        $("#questionNo-" + (id)).removeClass("selectedClass");

    }
}
if ($(".QuestionItem:last-child").attr("data-type") == "Multiple") {
    // console.log($(".QuestionItem:last-child").find("input[type='checkbox']:checked").length);
    if ($(".QuestionItem:last-child").find("input[type='checkbox']:checked").length > 0) {
        var id = $(".QuestionItem:last-child").attr("id").split("-")[1];
        $("#questionNo-" + (id)).removeClass("selectedClass");
        $("#questionNo-" + (id)).addClass("answeredClass");
    } else {
        $("#questionNo-" + (id)).removeClass("selectedClass");

    }
}
$(".rightQuestion").css("pointer-events", "none");
var UserCorrectAnsmers = 0;
var WrongAnsmers = 0;
var totalMarks = 0;
var totalSecuredMarks = 0;
var AttendAnsmers = 0;
var TestResult = {};
var QuestionAnswers = [];
var result = "<table class='table table-bordered table-striped'><tbody>";
$(".QuestionItem").each(function() {
    result += "<tr><td style='font-size: 14px;line-height: 25px;'>" + $(this).find(".QuestionTitle").html() + "</td></tr><tr><td>";
    var QuestionAnswer = {};
    var ItemId = $(this).attr("id");
    QuestionAnswer.Title = $(this).find(".QuestionTitle").html();
    QuestionAnswer.name = $(this).attr("data-name");
    QuestionAnswer.qsn_id = $(this).attr("data-question_id")
    var QuestionOptions = [];
    var CorrectAnswer = [];
    var UserAnswer = [];
    if ($(this).attr("data-type") == "Single") {
        if ($(this).find("input[type='radio']:checked").length > 0) {
    UserAnswer.push($(this).find($("input[type='radio']:checked")).parent().find(".optionvalue").html());
            AttendAnsmers += 1;
        }

    }
    if ($(this).attr("data-type") == "Multiple") {
        if ($(this).find("input[type='checkbox']:checked").length > 0) {
            $(this).find(".options input[type='checkbox']").each(function() {
                if ($(this).is(':checked')) {
                UserAnswer.push($(this).parent().find(".optionvalue").html());
                }
            });
            AttendAnsmers += 1;
        }

    }
     if ($(this).attr("data-type") == "Free Text") {
        if ($(this).find("textarea").length > 0) {

            UserAnswer.push($(this).find("textarea").val());
            AttendAnsmers += 1;
        }
    }
    if ($(this).attr("data-type") == "Audio") {
        if ($(this).find("input").length > 0) {

            UserAnswer.push($(this).find("input").val());
            AttendAnsmers += 1;
        }
    }
     if ($(this).attr("data-type") == "Coding Question") {
       /* if ($(this).find("#code_result textarea").length > 0) {

            UserAnswer.push($(this).find("#code_result textarea").val());
            AttendAnsmers += 1;
        }*/
        if ($(this).find(".execute_result").length > 0) {

            UserAnswer.push($(this).find(".execute_result").html());
            AttendAnsmers += 1;
        }
    }
   /* if ($(this).attr("data-type") == "Coding Question") {
        if ($(this).find("#execute_result textarea").length > 0) {

            UserAnswer.push($(this).find("#execute_result textarea").val());
            AttendAnsmers += 1;
        }
    }*/


    if ($(this).attr("data-type") == "Single") {
        $(this).find(".options input[type='radio']").each(function() {
            QuestionOptions.push($(this).val());
            var iscorrect = "";
            if ($(this).attr("data-correct") == "1") {
                CorrectAnswer.push($(this).val());
                result += '<p style="margin-bottom: 10px; margin-left: 15px;"><i class="fa fa-circle" aria-hidden="true" style="margin-right:10px;color: #747474;"></i>' + $(this).val() + '<i class="fa fa-check-circle" aria-hidden="true" style="margin-left:10px;color: #4cae4c;font-size: 20px;"></i></p>';

            } else {
                if ($(this).is(':checked')) {
                    result += '<p style="margin-bottom: 10px; margin-left: 15px;"><i class="fa fa-circle" aria-hidden="true" style="margin-right:10px;color: #747474;"></i>' + $(this).val() + '<i class="fa fa-times-circle" aria-hidden="true" style="margin-left:10px;color: #d43f3a;font-size: 20px;"></i></p>';
                } else {
                    result += '<p style="margin-bottom: 10px; margin-left: 15px;"><i class="fa fa-circle" aria-hidden="true" style="margin-right:10px;color: #747474;"></i>' + $(this).val() + '</p>';
                }

            }
        });
    } else {
        $(this).find(".options input[type='checkbox']").each(function() {
            QuestionOptions.push($(this).val());
            var iscorrect = "";
            if ($(this).attr("data-correct") == "1") {
                CorrectAnswer.push($(this).val());
                result += '<p style="margin-bottom: 10px; margin-left: 15px;"><i class="fa fa-circle" aria-hidden="true" style="margin-right:10px;color: #747474;"></i>' + $(this).val() + '<i class="fa fa-check-circle" aria-hidden="true" style="margin-left:10px;color: #4cae4c;font-size: 20px;"></i></p>';

            } else {
                if ($(this).is(':checked')) {
                    result += '<p style="margin-bottom: 10px; margin-left: 15px;"><i class="fa fa-circle" aria-hidden="true" style="margin-right:10px;color: #747474;"></i>' + $(this).val() + '<i class="fa fa-times-circle" aria-hidden="true" style="margin-left:10px;color: #d43f3a;font-size: 20px;"></i></p>';
                } else {
                    result += '<p style="margin-bottom: 10px; margin-left: 15px;"><i class="fa fa-circle" aria-hidden="true" style="margin-right:10px;color: #747474;"></i>' + $(this).val() + '</p>';
                }

            }
        });
    }
    var is_same = UserAnswer.length == CorrectAnswer.length && UserAnswer.every(function(element, index) {
        return element === CorrectAnswer[index];
    });
    if (is_same) {
        UserCorrectAnsmers += 1;
        totalSecuredMarks += parseInt($(this).attr("secured-marks"));
    } else {
        if ($(this).attr("data-type") == "Single") {
            if ($(this).find("input[type='radio']:checked").length > 0) {
                WrongAnsmers += 1;
            }
        } else {
            if ($(this).find("input[type='checkbox']:checked").length > 0) {
                WrongAnsmers += 1;
            }
        }
    }
    // console.log(UserAnswer);
    // console.log(CorrectAnswer);
    totalMarks += parseInt($(this).attr("secured-marks"));
    QuestionAnswer.CorrectAnswer = CorrectAnswer;
    QuestionAnswer.IsUserAnswerCorrect = is_same;
    QuestionAnswer.UserAnswer = UserAnswer;
    QuestionAnswer.QuestionOptions = QuestionOptions;
    QuestionAnswers.push(QuestionAnswer);
});
TestResult.QuestionAnswers = QuestionAnswers;
TestResult.AttendAnsmers = AttendAnsmers;
TestResult.SecuredMarks = totalSecuredMarks;
TestResult.TotalMarks = totalMarks-1;
TestResult.WrongAnsmers = WrongAnsmers;
TestResult.UserCorrectAnsmers = UserCorrectAnsmers;
var headerresult = '<div class="resultHeader"><h3 class="resultHeaderTitle">Your Result</h3>';
headerresult += '<div class="col-md-4 col-xs-12 headerTitle">Total Questions :' + $(".QuestionItem").length + '</div>';
headerresult += '<div class="col-md-4 col-xs-12 headerTitle">Attended Questions :' + AttendAnsmers + '</div>';
headerresult += '<div class="col-md-4 col-xs-12 headerTitle">Correct Answers :' + UserCorrectAnsmers + '</div>';
headerresult += '<div class="col-md-4 col-xs-12 headerTitle">Wrong Answers :' + WrongAnsmers + '</div>';
headerresult += '<div class="col-md-4 col-xs-12 headerTitle">Total Marks :' + totalMarks + '</div>';
headerresult += '<div class="col-md-4 col-xs-12 headerTitle">Secured Marks :' + totalSecuredMarks + '</div></div>';

var exam_result_questions = [];
for (var i = 0; i < QuestionAnswers.length; i++) {
    var exam_result_question = {};
    exam_result_question.questionid = QuestionAnswers[i].name;
    exam_result_question.question = QuestionAnswers[i].Title;
    exam_result_question.correct_answer = QuestionAnswers[i].CorrectAnswer.toString();
    exam_result_question.useranswer = QuestionAnswers[i].UserAnswer.toString();
    exam_result_question.is_useranswer_correct = QuestionAnswers[i].IsUserAnswerCorrect;
    exam_result_questions.push(exam_result_question);
}
 var endDate= new Date();
  var exam_result= {
            "doctype": "Exam Result",
            "date_submitted":endDate.getFullYear()+"-"+pad((parseInt(endDate.getMonth())+1),2)+"-"+endDate.getDate(),
            "exam_start_date":startTime,
            "exam_end_date":endDate.getHours()+":"+endDate.getMinutes()+":"+endDate.getSeconds(),
            "user": $("#UserInfoId").val(),
            "correct_answers": TestResult.UserCorrectAnsmers,
            "wrong_answers": TestResult.WrongAnsmers,
            "attended": TestResult.AttendAnsmers,
            "total_marks": TestResult.TotalMarks,
            "secured__marks": TestResult.SecuredMarks,
            // "question_and_answers": TestResult.QuestionAnswers,
            "exam_id":$("#ExamId").val(),
            "token":'{{token}}'
        }

  $.ajax({
            type: 'POST',
            Accept: 'application/json',
            ContentType: 'application/json;charset=utf-8',
            url: window.location.origin + '/api/method/go1_recruit.go1_recruit.api.insert_exam_result',
            data: { 'doc': JSON.stringify(exam_result) },
            dataType: "json",
            async: false,
            headers:{
                'X-Frappe-CSRF-Token':'{{csrf_token}}'
            },
             success: function(Responseresult) {
                var resultName=Responseresult.message.name;
                var resultUserName=Responseresult.message.user;
                if(monitored == 1){
                    // save_video_files(resultName)
                    // video_recorder.docname = resultName;
                    // screen_recorder.docname = resultName;
                    conference.docname = resultName;
                    $('#video-recorder-html #toggle-video').hide();
                }

        
        var valuesDocss=[];
        for(var i=0;i<TestResult.QuestionAnswers.length;i++)
        {
           
            var isCorrect=0;
            if(TestResult.QuestionAnswers[i].IsUserAnswerCorrect)
            {
            isCorrect=1;
            }
            var valueObj={"doctype":"User Answer",
           "parent":resultName,
           "user":resultUserName,
           "user_answer":TestResult.QuestionAnswers[i].UserAnswer.toString(),
           "question":TestResult.QuestionAnswers[i].Title.toString(),
           "is_user_answer_correct":isCorrect,
           "parenttype":"Exam Result",
           "correct_answer":TestResult.QuestionAnswers[i].CorrectAnswer.toString(),
           "question_id":TestResult.QuestionAnswers[i].name,
           "question_paper_id":TestResult.QuestionAnswers[i].qsn_id,

           "parentfield":"user_answer"};
           valuesDocss.push(valueObj);
           // console.log("========valueObj")
           // console.log(valueObj)
           //  console.log("========valueObj")
        }
        var token = '{{frappe.form_dict.token}}';
        // console.log('-------------------------------------------------')
        // console.log(token)
        $.ajax({
            type: 'POST',
            Accept: 'application/json',
            ContentType: 'application/json;charset=utf-8',
            url: window.location.origin + '/api/method/go1_recruit.go1_recruit.api.insert_exam_result_user_answers',
            data: { 'doc': JSON.stringify(valuesDocss),'token':token },
            dataType: "json",
            async: false,
            headers:{
                'X-Frappe-CSRF-Token':'{{csrf_token}}'
            },
            success: function(data) {
                // console.log("-----------------------------------------data")
                console.log(data)
                // console.log(data.message)
                var exam = data.message
                let subjects=[];
                var topics=[];
                for(let i=0; i<data.message['exam_info'].length; i++){
                   subjects.push(data.message['exam_info'][i].subjects);
                }
                for(let i=0; i<data.message['exam_info'].length; i++){
                   topics.push(data.message['exam_info'][i].topic); 
                }
                console.log(subjects)
                var subject = subjects.filter(function(elem, index, self) {
                      return index === self.indexOf(elem);
                  });
                var topic = topics.filter(function(elem, index, self) {
                      return index === self.indexOf(elem);
                  });
                $(".Loading").hide();
                // $("#MainContent").html("<span class='resultSpan'>Thank you for attending exam.You will get notification regarding result.</span>");
                $("#MainContent").html("<span class='resultSpan'>Thanks for taking the interview test. Please wait for further updates.</span>");
                $('#rightContent').hide();
                var html = '<div class="timetitle2" style="border-bottom: 1px solid #d3d3d3">\
    <h3 class="timetitle1" style="font-size: 18px;">Result Overview</h3></div>\
    <div class="QuestionsOverView1">\
        <div class="tblQuestions1">\
            <div class="optionvalue1 icon">\
             <span class="info">Name</span>'+exam['user_list'][0].candidate_name +'<div class="marks">\
            </div>\
        </div>\
              <div class="optionvalue1 icon">\
             <span class="info">Question Paper Name</span>'+exam['exam_info'][0].question_paper_name + '<div class="marks">\
            </div>\
        </div>\
          <div class="optionvalue1 icon">\
            <span class="info">Subject</span>'+subject.join(', ') + ' <div class="marks"></div>\
        </div>\
          <div class="optionvalue1 icon">\
            <span class="info">Topics</span>'+topic.join(', ')+' <div class="marks">\
            </div></div>\
              <div class="optionvalue1 icon">\
            <span class="info">User</span>'+exam['user_list'][0].candidate_email +'<div class="marks"></div>\
            </div>\
              <div class="optionvalue1 icon">\
            <span class="info">Total Number Of Questions</span>'+ exam.count +'<div class="marks">\
            </div></div>\
              <div class="optionvalue1 icon">\
             <span class="info">Number Of Questions Attempted</span>'+(exam.count-exam.not_attempt) +'<div class="marks">\
            </div>\
        </div>\
          <div class="optionvalue1 icon">\
            <span class="info">Number Of Questions Not Attempted</span>'+ exam.not_attempt + '<div class="marks">\
            </div>\
        </div>\
        </div>\
    </div>';
    $('#rightContent1').show(html)
                $('#rightContent1').html(html)

            }
        });

    }
});
  
  
}

function pad(str, max) {
             str = str.toString();
             return str.length < max ? pad("0" + str, max) : str;
         }

function schavailable(percent) {
var sch = $("#scholarship").val();
if (sch != "None") 
{ 
    frappe.call
    ({
            "method": "frappe.client.get",
            args: {
                doctype: "Scholarship",
                name: sch
            },
            callback: function(r) 
            {
                // console.log(r.message)

                for (var i = 0; i<r.message.offer.length; i++) 
                {
                    var p = parseFloat(r.message.offer[i].from_mark)+"="+percent+"="+parseFloat(r.message.offer[i].to_mark)
                    // console.log(p)
                    if ((percent <= parseFloat(r.message.offer[i].to_mark)) && (percent >= parseFloat(r.message.offer[i].from_mark))) 
                    {   
                        
                        $("#dis_per").html("Discount Percentage :"+r.message.offer[i].scholarship);

                            frappe.call({
                                method: "frappe.client.set_value",
                                args: {
                                    doctype: "User",
                                    name: frappe.user_id,
                                    fieldname: "scholarship_discount_percent",
                                    value: r.message.offer[i].scholarship,
                                },
                                freeze: true,
                                callback: (r) => {
                                    // console.log(r.message)
                                }
                            });

                        if (r.message.offer[i].scholarship == 0) 
                            {
                            $("#scho").toggle();
                            $("#MainContent").prepend('<a href="student-applicant"><button type="button" id="freeapplication" class="btn">Apply</button></a>');

                            } 

                    }
                }
                
            }
    });
    return true
}
else
{
    return false
}
}
// screen recording & video recording
var screen_recorder, video_recorder, monitored, conference;
try{
monitored = '{{monitored}}';
if(monitored == '1'){
   
    var enable_candidate_video = false;
    var enable_screen_share = false;
    if('{{candidate_video}}' == '1'){
        enable_candidate_video = true;
    }
    if('{{record_screen}}' == '1'){
        enable_screen_share = true; 
    }
    conference = new RTCConference({
        videosContainer: document.getElementById('video-recorder'),
        remoteVideosContainer: document.getElementById('video-recorder'),
        recordConference: true,
        roomid: '{{roomid}}',
        filename: 'checkfilerecord-',
        enable_video: enable_candidate_video,
        screen_share: enable_screen_share,
        record_seperately: true,
        video_filename: 'Video{{ExamId}}{{user}}-',
        screen_filename: 'Screen{{ExamId}}{{user}}-',
        video_fieldname: 'user_video',
        screen_fieldname: 'screen_video',
        doctype: 'Exam Result',
        auto_join: true,
        username: '{{candidate_name}}',
        show_user_screen_sharing: false,
        show_remote_users_media: false,
        enable_option_buttons: false,
        allow_open_room: true
    });
	
    conference.connection.extra.full_name = '{{candidate_name}}';
    conference.connection.userid = '{{user_email}}'
    conference.connection.updateExtraData();
    conference.join_room();
   
    if('{{candidate_video}}' == '1'){
      conference.enable_video_share();
    }
    if('{{record_screen}}' == '1'){
        conference.share_user_screen();
    }
    if(enable_candidate_video){
        $('#toggle-video').show();
    }
    if(!enable_screen_share){
        start_timer();
    }
} else{
    start_timer();
}
} catch(e){
console.log(e)
}
function check_video(){
if(enable_candidate_video){
    setTimeout(function(){
        $('#toggle-video').trigger('click');
    }, 1000 * 30)
}
}
document.getElementById('toggle-video').onclick = function(){
$('#video-recorder').toggle();
if($('#video-recorder').css('display') == 'none'){
    $('#toggle-video').addClass('hide-class')
} else{
    $('#toggle-video').removeClass('hide-class')
}
}
$(document).ready(function(){
$('audio').on('play', function(){
    let id = $(this).parent().parent().attr('id');
    $('audio').each(function(k, v){
        let idx = $(v).parent().parent().attr('id');
        if(id != idx){
            $(v)[0].pause();
        }
    })
})
$('#search-list .nextBtn, #search-list .prev-btn').click(function(){
    $('audio').each(function(k, v){
        $(v)[0].pause();
    })
})
})