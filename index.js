(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#DF0303","#AF0808","#600202"],[0.2,0.439,0.831,1],-2.5,-2.1,0,-1.9,-1.3,1.5).s().p("AgDAVQgIgBgEgHQgDgIACgHQABgJAHgGQAGgFAGABQAHACAFAHQADAHgBAIQgCAJgGAGQgGAEgEAAIgDgBg");
	this.shape.setTransform(45.3465,-89.0974,2.0093,2.0093);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#DF0303","#AF0808","#600202"],[0.2,0.439,0.831,1],-2.7,-2.3,0,-1.9,-1.3,1.9).s().p("AgOASQgHgHAAgLQAAgJAHgHQAGgIAIAAQAJAAAGAIQAHAHAAAJQAAALgHAHQgGAHgJAAQgIAAgGgHg");
	this.shape_1.setTransform(23.0935,-80.6608,2.0093,2.0093);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FF0000","#DF0303","#AF0808","#600202"],[0.2,0.439,0.831,1],-2.5,-2.1,0,-1.9,-1.3,1.5).s().p("AgJASQgGgGgCgJQgCgIAEgHQAEgHAIgCQAGgBAGAFQAHAGACAJQABAHgEAIQgEAHgHABIgDABQgFAAgFgEg");
	this.shape_2.setTransform(-50.1717,-89.0819,2.0093,2.0093);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF0000","#DF0303","#AF0808","#600202"],[0.2,0.439,0.831,1],-2.7,-2.2,0,-1.9,-1.2,1.9).s().p("AgOASQgHgIAAgKQAAgJAHgIQAGgHAIAAQAJAAAGAHQAHAIAAAJQAAAKgHAIQgGAHgJAAQgIAAgGgHg");
	this.shape_3.setTransform(-28.7467,-80.8115,2.0093,2.0093);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#1F98DB","#1A87CC","#0D57A0","#021C51"],[0.188,0.345,0.831,1],-2.2,-1.8,0,-1.8,-1.2,1.2).s().p("AgKAMQgFgFAAgHQAAgGAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAGQAAAHgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_4.setTransform(34.1949,-84.0264,2.0093,2.0093);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#1F98DB","#1A87CC","#0D57A0","#021C51"],[0.188,0.345,0.831,1],-2.2,-1.8,0,-1.8,-1.3,1.2).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_5.setTransform(10.8367,-79.0031,2.0093,2.0093);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#1F98DB","#1A87CC","#0D57A0","#021C51"],[0.188,0.345,0.831,1],-2.2,-1.8,0,-1.8,-1.2,1.2).s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgFAGAAQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgHAAQgGAAgFgFg");
	this.shape_6.setTransform(-39.7477,-84.0264,2.0093,2.0093);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#1F98DB","#1A87CC","#0D57A0","#021C51"],[0.188,0.345,0.831,1],-2.2,-1.8,0,-1.8,-1.3,1.2).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(-16.9922,-79.0031,2.0093,2.0093);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FF0000","#DF0303","#AF0808","#600202"],[0.2,0.439,0.831,1],-2.9,-2.5,0,-1.9,-1.3,2.5).s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_8.setTransform(-3.0276,-77.9985,2.0093,2.0093);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA8B00").s().p("AAAAsQhogDhEgVQg7gSAAgRQAAgDAEgDQAtAVBBAFQArAEBHgEQAtgCAtgLQAwgNAlgWQAcAFAQAIQAQAIAAAHQAAARhBAUQhFAWhTAAIgPAAg");
	this.shape_9.setTransform(-2.5252,-99.0804,2.0093,2.0093);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F79F03").s().p("AijAbQhEgKAAgPQAAgGASgGQAOAHAyAEQBMAIBQgPQAqgIAagWQBDADAuAMQAsAMAAALQAAAPhEAKQhEAKhgAAQhgAAhDgKg");
	this.shape_10.setTransform(-2.5252,-102.713,2.0093,2.0093);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFAA00").s().p("AijAdQhEgLAAgPQAAgOBGgNQBIgOBcAAQBcAABGAOQBDAMAAAPQAAAPhEALQhEAJhgABQhggBhDgJg");
	this.shape_11.setTransform(-2.5252,-102.9641,2.0093,2.0093);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAD2").s().p("AiPANQhBgXAAgaIABgFQAGAkBZAUQA2ANA8AEQBOAGCBgNQhEARhZAAQh2AAhNgdg");
	this.shape_12.setTransform(-12.6722,-93.5706,2.0093,2.0093);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE443").s().p("AjCApQhBgYAAgZQABgYBFgRQBKgTB0AAQB1AABKATQBEARAAAYQAAAZhAAYQhLAch3AAQh3AAhNgcg");
	this.shape_13.setTransform(-2.5755,-99.0962,2.0093,2.0093);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFAA00").s().p("AjHAgQghgNgbgbQgBghADgCQAZgJBMgCQAlgBB3AAQA6AABngEQBOAAATAQQAEAEgCAcQgYAdggANQhEAciMABIgEAAQh7AAhEgcg");
	this.shape_14.setTransform(-2.4791,-93.3688,2.0093,2.0093);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE443").s().p("AjMAPQg3gWAAgdIAAgHQASAoBMAQQAYAEBaAIQCMAMBqglQAjgKAegdIgBADQAAAbg9AYQhMAdh6AAQiEAAhIgdg");
	this.shape_15.setTransform(-2.5252,-80.7613,2.0093,2.0093);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCE00").s().p("AjMA2Qg3gXAAgcIgBgkQAAggADgBQAZgJBLgDQAlgBB4AAQA6AABngDQBOAAASAQQAGAFgEBAQAAAbg+AYQhLAdh6AAQiFAAhHgdg");
	this.shape_16.setTransform(-2.4391,-88.6478,2.0093,2.0093);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAD2").s().p("AgeAlIABAAQgGAAgHgGQgIgGADgGQABgDALgEIATgJQAbgLANgIQAJgGAJgLQADgEACgBQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABQgBAEgHAIQgHAIgSAKQgSAJgIAIIgJAMIgFALQgDADgCAAIgBgCg");
	this.shape_17.setTransform(-17.6764,92.6599,2.0093,2.0093);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAD2").s().p("AACBrQgIAAAAifIAAgLIABgrQALALAAAmQABAVgDAhIACBDQABArgFAAIAAAAg");
	this.shape_18.setTransform(-6.0834,55.5206,2.0093,2.0093);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAD2").s().p("AgRACQgIgdgBgRQAHABATAGQASAGAJgCQgBAJgNABQgPACgGAHQAIAOABAOQACALgDAUQgIgQgJgbg");
	this.shape_19.setTransform(-7.9001,16.2381,2.0093,2.0093);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAD2").s().p("AgNAAIgBgDQgBgDAFgCQAXAFADAKIgLACQgMAAgGgJg");
	this.shape_20.setTransform(-8.9098,-2.074,2.0093,2.0093);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAD2").s().p("AgNAKIgPhGQgIgpABggIAFAAQAIgEAIAHIAOANQgKASAFAvQABARAIAzQADAPARAsQANAkAAAYQgggdgShgg");
	this.shape_21.setTransform(-33.4277,-56.1196,2.0093,2.0093);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA9600").s().p("AiSC+QgGgLADgOQADgOAKgKQAZgWBDAAIACAAQBMAAAxgyQAbgdAPgpQAOgpgCgtQgCglgOgWQgOgWgigRQgMgGgNgDQgNgCgGADQgIABgHAGQgOALgBAVQAAARgHAWIgMAnQgHgIADgJQAJgaAHg9IADgTQAFgEAMgDQAKgDAHAAQAWAAATAHQAgAOATAXQApAwgPBMQgKAxgMAYQgVAqgvAdQggAVg1AEQg/AGgJADQgpAQAFAaQAEAYAaAHIgEAAQgZAAgLgUg");
	this.shape_22.setTransform(49.0389,-43.7398,2.0093,2.0093);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFBD29").s().p("AgWBOQgGgDgDgGQgDgGACgGQAJgbAHg7IABgKQACgXASgKQAMgGARABQgPAHgIATQgFAOgGAyQgFApgPAYg");
	this.shape_23.setTransform(50.7415,-74.0081,2.0093,2.0093);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9100").s().p("AiADEQgKgFgGAAIACgFQADAFAMgEQAHgBAFADQAGAEACAGQADALgKAHQgBgOgNgHgAh9CbQAQgEATgBQA+gFANgCQAmgIAegVQAkgaAZg1QAcg5gJgtQACghgNgeQgOgegagTQgUgPgWgJQgcgLgUACQANgGAWADQASADASAJQApAVATAeQAUAdACAuQACAzgRAwQgRAvggAiQg7A+hbgBQgTgBgTAEQgUADgJAFg");
	this.shape_24.setTransform(54.1192,-46.0228,2.0093,2.0093);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9100").s().p("ABpDJQACgGAGgEQAFgDAHABQAMAEADgFQAAAAABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgDgDgBQgHgHgWgEQgUgEgVABQhbABg7g+QgfgggRgvQgIgcgDgPQgFgYAAgeIABgEQACgtATgeQATgeApgVQATgKATgCQAXgEANAIQAEACAEAEIgEAAQghgRgpAeQgbALgQAUQgHAEgCAHIgBAEQgTAbgDArQgBAoAIAjQAJArAWAcQAJARALAMQAVAXAgANQAYAJAmAFIAkACQAbACASAEQAEADADAAQAXAFAAANQAAANgaAGQgMADgCAOQgFgHACgIg");
	this.shape_25.setTransform(-58.7858,-46.4087,2.0093,2.0093);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCE00").s().p("AicDIQgGgMADgOQADgOAKgJQAZgWBDAAIACAAQBMAAAxgzQAbgdAPgpQAOgpgCgtQgCgkgOgWQgOgWgigRQgMgHgNgCQgNgDgGADQgDADgBAFIgBAJQgFA5gLAlQgCAHgHADQgGADgGgCQgHgDgDgGQgDgGACgGQAJgbAHg8IABgKQADgXARgKQAPgIAXAEQATACASAKQApAVAUAeQATAdACAuQADAzgRAwQgRAvghAiQg7A+hbgBQgUgBgVAEQgWAEgHAHQgCABgBADQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQACAFAMgEQAHgBAGADQAGAEABAGQACAHgDAGQgEAGgGABQgLADgGAAQgZAAgLgUg");
	this.shape_26.setTransform(51.0048,-45.6049,2.0093,2.0093);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EA9600").s().p("ABrDSQAagHAEgYQAFgagpgQQgJgDg/gGQg1gEgggVQgugdgVgqQgNgZgKgwQgPhLApgxQATgXAhgOQARgHAXAAQAIAAAKADQAKADAGAEIADATQAFA3ALAgQADAJgHAIIgMgnQgHgWAAgRQgBgVgOgLIgPgHQgFgDgNACQgOADgMAGQgiARgOAWQgOAWgCAlQgCAtAPApQAOApAcAdQAwAyBMAAIACAAQBDAAAZAWQAKAKADAOQADAOgGALQgLAUgZAAg");
	this.shape_27.setTransform(-54.2415,-43.7398,2.0093,2.0093);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCE00").s().p("ABoDZQgHgCgDgGQgEgFACgHQACgGAGgEQAFgDAHABQAMADADgEQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgDgDgCQgHgGgWgEQgUgEgVABQhbABg7g+QgfghgRguQgRgwABgyIABgDQACguATgeQATgdApgVQATgKATgDIAKgBQASAJAHAgQADAMAEAyQABAbAIALQAEAGAJAJIAGgDIgGAEQgHACgGgDQgGgEgCgGQgJgfgHg/IgBgKQgBgDgDgEQgGgDgNACQgNADgNAGQghARgOAWQgPAXgBAkQgCAtAOApQAOApAcAdQAxAzBLAAIADAAQBCAAAZAVQALAKADAOQADAOgHAMQgLATgYAAQgGABgLgDg");
	this.shape_28.setTransform(-56.1909,-45.5984,2.0093,2.0093);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFBD29").s().p("AAIA/QgIgMAAgbQgFgwgCgMQgIgggRgJQAQAAALAGQARAKADAWIABAKQAFA2ALAgQACAHgDAGIgDAEIAAABIgGADQgJgJgFgGg");
	this.shape_29.setTransform(-55.7079,-74.0842,2.0093,2.0093);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA8B00").s().p("AgzAtIgXgEQACgDAJAAIANABIAdgDIAWgCQAOgBAKgCQAcgGABgPQABgHgIgJQgGgKgGgFIgQgLQgKgHgCgHQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIgCAAQAJAIAYAOQAVANAHANQAHAMgEAHQgCAGgMAEQgJADghAIQgSADgbAAQgKAAgOgCg");
	this.shape_30.setTransform(2.5483,95.4048,2.0093,2.0093);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFED4").s().p("AA0AvIgXgDIgWgBQgNAAgIgCQgIgCgLgFIgSgJIgKgFQgHgEgBgDQgDgFAFgDIAJgEQAfgLARgCQAMgDALgIQANgJAEgMQAEgEADADQAEADgBAFQgBADgDAEIgGAGQgKAKgYAKIgXAHQgPAHAJAHQAQAOAjACQApACAMAGQgCAGgNAAIgEAAg");
	this.shape_31.setTransform(-15.8997,94.0834,2.0093,2.0093);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE443").s().p("AgdAmQgKgDgJgFQgOgIAAgGQABgHAPgFIAUgFIArgNQAJgDAKgHQAMgIADgIQADgBAJABQABATgOAMIgdAUQgEAEgHAKQgFAKgFADQgDAEgIAAQgHAAgLgEg");
	this.shape_32.setTransform(-19.3532,92.856,2.0093,2.0093);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFED4").s().p("AAABOIgCgcQgCglgEgSIgKg0IgKgZQgIgRAHgFIAPACQAJACAFAEIAAgEQAEACAOACQALAAAFAEQgEAHgMAFQgNAGgEAIQgEALABAPIADAZQAOBGgMAyQgDgJAAgSg");
	this.shape_33.setTransform(-7.9019,27.9423,2.0093,2.0093);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFE443").s().p("AgOCEQgBgbgIg4QgIg1gBgdIgEhUIgHgmQgGgdAKgBIADACQAMALAaACQAPABAdgBQgJANgIACIgZACIgDASIgIASQgFALgCAHQgEARAEAaQAHAtACAmIAIBXQAEBHgUABQABgWgCggg");
	this.shape_34.setTransform(-4.0339,42.7107,2.0093,2.0093);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFED4").s().p("AAVCKQgsg5gehMQgNgjgFg1IgHgyQgEgfAEgTQAMAAAlAJIAZAGQAFAEgCASIgNBJQgCAmAQA2QAZBPA4BUQgDACgDAAQgRAAglgug");
	this.shape_35.setTransform(-26.9767,-49.0079,2.0093,2.0093);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6D00").s().p("AgeCuIg6gNQghgHgOgFQgfgNADgSQAMgBAbARQAXAPATgIQAigOAPgJQAcgRADgSQACgaAQgaQATgcAHgMQAbgugkg1QgVgfhQABQhQAAgVghQAIAAAkAFQAlAFBYgHQBhgIAdACQAhABAIARQAKAUgaAiQgKAOACAmQADApgGAMQgzB2hCAvQgLAIgTAAQgKAAgNgCg");
	this.shape_36.setTransform(6.3739,-45.1433,2.0093,2.0093);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6D00").s().p("AABgBIACADIgFAAg");
	this.shape_37.setTransform(-28.3951,-79.9575,2.0093,2.0093);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFE443").s().p("AAlCaQgggXgGgQQgFgKgZgmQgUgfgEgUQgFgVgRgzQgSg2gEgUQgHgcAHgNQAEgHATAGIAaAJQAMADAjAEQAdADAQAGIgCgCQAMgBgGAPQgGAOgHAFQgFAEgPAHQgNAGgFAGIgSAVQgLAOAAAKQAAAdA1AWQA0AWgEAjQgCATAcA0QAWAogYAFIgFAAQgSAAgfgWg");
	this.shape_38.setTransform(-28.9818,-49.7403,2.0093,2.0093);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA8B00").s().p("AhXC5QhGgFgJgiQAJANAqAAQAkABAVgGQAfgJAxgrQAmggAKhEQAKhCAAgiQABgggigGQgEgBg3AAQgTAAgKgBQgPgDgMgHIgLgIIgKgIQgEgCgKgBQgIgBgEgDQAOgLArADQAXACAjAGIgGABQAYAAAhgEIA6gJQAlgFAKAEQATAGgRAeIgMAVQgFAMgBALIACAYQABAOgDALQgBAGgFAqQgDAegKAOQgZAlgaAuQgLATgRANQgMAKgYAMQgXANgqAAIgcgCg");
	this.shape_39.setTransform(9.7846,-46.4775,2.0093,2.0093);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF9100").s().p("AgvDqQgUgEgRgKIAWgDQA9gLAxgZQA4geAigrQAigtAEgyQAEg2gkgnQgggjg/gNQgpgIhDAAIgTAAIhAgJQgWgEhbgWQgDgnAAgaIIFAAQgDB3gkB1QhGDtiZAAQgaAAgSgDg");
	this.shape_40.setTransform(-2.475,-53.3844,2.0093,2.0093);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFC610").s().p("AhPAFQgghwgFiAQBQA5CAAJQglAigVAzQgUAwAAA0QAAA6AcA7QAcA6AvAtQiGgTg+jUg");
	this.shape_41.setTransform(-31.2583,-52.6812,2.0093,2.0093);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA9600").s().p("ADfBpQgVgkgvgSQgbgKgpAHQg2AIgOAAQglgCg2gQQgzgQgtAAQgeAAgtAOQgJgygEg2IgDgrIIHAAIgGBFQgJBTgSBHg");
	this.shape_42.setTransform(-2.5755,-78.5008,2.0093,2.0093);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFAA00").s().p("AjfAAQgVhKgJhZIgGhLIIHAAIgGBLQgKBZgWBKQhEDviaAAQicAAhDjvg");
	this.shape_43.setTransform(-2.5755,-52.8821,2.0093,2.0093);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA8B00").s().p("AglAbQgOgIgEgLIANAEQAcAQAegQQAbgNAFghQAFADACAEIABATQABAHgEAIQgEAIgGAFQgPAOgcABIgCAAQgVAAgOgIg");
	this.shape_44.setTransform(-2.9215,-2.2446,2.0093,2.0093);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA7706").s().p("AgsAOQgHgDgGgBIADgbIAIAIQgJAFAFgBQAUgLAWgDQAYgDATAIIATAJQADADABANIg2AJIgOABQgUAAgOgHg");
	this.shape_45.setTransform(-3.2285,-7.4294,2.0093,2.0093);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFAA00").s().p("AgjAhQgTgLgCgTQgBgEADgkIAIAIIgEADQgBAAgBABQAAAAAAAAQAAAAAAAAQABAAABAAQAUgLAWgDQAYgDATAIIAUAJQACADABAUQAAAGgEAJQgEAIgFAFQgRAPgbAAQgWAAgOgIg");
	this.shape_46.setTransform(-3.195,-3.405,2.0093,2.0093);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA7706").s().p("AgbARQgZgFgFgRIANgMIAAACQAIgDANAAIAXABIAWgBQANAAAIADIAAgCIAPAPQgLAMgVAFQgTAEgPAAQgKAAgJgCg");
	this.shape_47.setTransform(-3.0276,5.3638,2.0093,2.0093);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA8B00").s().p("AgFBuQgBgTAPiKQAMhpgVgQIgUgSQgMgLgLgDIAWACIAWgCQAOAAAHADIAAgBIATASQAGAJgFARQgEANgGAmIgMBGQgGAhgFBcQgFBbAEANQgBADgEACQgGg9gCgeg");
	this.shape_48.setTransform(1.1298,41.8567,2.0093,2.0093);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFAA00").s().p("AgQDJQgIgEgEgFQAEgNgFhcQgFhbgHgiQgPhigGgWQgFgSAGgJQADgGAPgMIAAABQAIgCANAAIAWABIAXgBQANAAAIACIAAgBIATASQAFAJgFASQgGAWgPBiQgHAigFBbQgFBcAEANQgBAEgJAFQgJAFgKgBQgIABgIgFg");
	this.shape_49.setTransform(-3.2176,42.8112,2.0093,2.0093);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EA7706").s().p("AgkAAQADgFABgGQACgBALABIAOAAIAAgBIABABIADgBIAAABIANAAQAKgBACABQAEANAJAJQgMACgLAAQgeAAgUgNg");
	this.shape_50.setTransform(-2.3745,82.9857,2.0093,2.0093);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA8B00").s().p("AAJAEQgJgUgggOQgKgEgvgOQAEgHACgHQACgBAKABIAPAAIAAAAIABAAIACAAIAAAAIAPAAQAKgBACABQAFAUATAOQAPAPArANQAaAIAIAcQgIAGgOAGQgcAMghADQARgYgPgjg");
	this.shape_51.setTransform(7.9232,93.1443,2.0093,2.0093);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA8B00").s().p("AhFAYQgggHgWgJQgSgHgLgKQgOgOAJgHIABgBIACABQAvAxBzgBQApAAAngKQAugLAbgVQACAHgOALQgLAHgOAHQgbALgTAFQgjAIgrABQgfgBgmgIg");
	this.shape_52.setTransform(-3.2583,101.1816,2.0093,2.0093);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFAA00").s().p("AAABEQgqgBgigIQgWgFgZgLQgSgHgLgLQgOgNAJgIQAKgIAWgFIAlgIQA1gQAIgiQACgBAKABIAOAAIAAAAIABAAIACAAIAAAAIAPAAQAJgBACABQAIAiA1AQQALADAZAFQAXAFAKAIQAJAIgOANQgLALgSAHQgdAMgSAFQggAIglAAIgIAAg");
	this.shape_53.setTransform(-3.221,94.0586,2.0093,2.0093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-113,171.7,220.7);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAAQAAAGgEAFQgFAEgGAAQgFAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFg");
	this.shape.setTransform(-1.525,-1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_1.setTransform(-1.525,-1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAoAAQAAARgMALQgLANgRAAQgQAAgMgNQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAALAMQAMAMAAAQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180806").s().p("AgcAcQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAAMALQALAMABAQQgBARgLALQgMANgRAAQgQAAgMgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10.1,10.1);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrA3QgXAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAXAAIDXAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAgAiTAAQAAARALALQANAMAQAAIDXAAQARAAAMgMQALgLAAgRQAAgQgLgLQgMgMgRAAIjXAAQgQAAgNAMIAAAAQgLALAAAQg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhrAoQgQAAgNgMQgLgLAAgRQAAgQALgLIAAAAQANgMAQAAIDXAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-5.4,32.6,10.9);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAAQAAAGgEAFQgFAEgGAAQgFAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFg");
	this.shape.setTransform(-1.525,-1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_1.setTransform(-1.525,-1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAoAAQAAARgMALQgLANgRAAQgQAAgMgNQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAALAMQAMAMAAAQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180806").s().p("AgcAcQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAAMALQALAMABAQQgBARgLALQgMANgRAAQgQAAgMgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10.1,10.1);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrA3QgXAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAXAAIDXAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAgAiTAAQAAARALALQANAMAQAAIDXAAQARAAAMgMQALgLAAgRQAAgQgLgLQgMgMgRAAIjXAAQgQAAgNAMIAAAAQgLALAAAQg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AhrAoQgQAAgNgMQgLgLAAgRQAAgQALgLIAAAAQANgMAQAAIDXAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-5.4,32.6,10.9);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {stp:0,tr:1,fl:27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		playSound("_true");
	}
	this.frame_26 = function() {
		this.stop()
	}
	this.frame_27 = function() {
		playSound("_false");
	}
	this.frame_43 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(25).call(this.frame_26).wait(1).call(this.frame_27).wait(16).call(this.frame_43).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEFDA").s().p("AiVDcQhGAAAAhGIAAkrQAAhGBGAAIErAAQBGAAAABGIAAErQAABGhGAAg");
	this.shape.setTransform(-525.8,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-547.8,0,43.99999999999994,54);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIARQgHgEgCgIQgCgGADgHQAEgHAIgCQAGgCAHADQAHAEACAIQADAGgEAHQgEAHgIACIgFABQgEAAgEgCg");
	this.shape.setTransform(1.8114,9.7936,0.3197,0.3197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAyQgVgLgGgXQgHgWALgVQAMgUAXgHQAWgHAVALQAVAMAGAXQAHAWgMAVQgLAUgXAHQgIADgIAAQgNAAgOgIg");
	this.shape_1.setTransform(1.8029,9.7936,0.3197,0.3197);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhRCVQgKgGgEgKQgDgMAGgKICIj4QAGgKALgEQALgDAKAGQAKAFAEAMQADALgGALIiID3QgFAKgLAEIgIABQgHAAgHgEg");
	this.shape_2.setTransform(4.5411,4.9022,0.3197,0.3197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,7.7,11.7), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE5757","#CD0102"],[0,1],-51.1,-67.6,44.7,59.2).s().p("AFnJOIu7yaIE5AoINwRyg");
	this.shape.setTransform(29.7972,35.3335,0.1095,0.1095);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FE5757","#CD0102"],[0,1],27.6,-24.8,-27.3,24.7).s().p("AlgC/IHSl9IDvAAInBF9g");
	this.shape_1.setTransform(31.8105,43.5898,0.1092,0.1092);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FE5757","#CD0102"],[0,1],-138,203.8,93.1,-210).s().p("AnEP+Iv0NvIoOnuINpwqIvawnIJ0q3INzRBIVq7nIUeOFI/MbCIO8SbInTF9g");
	this.shape_2.setTransform(21.4483,22.7891,0.1092,0.1092);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FE5757","#CD0102"],[0,1],198.1,-173.4,-35.9,31.5).s().p("AYS38IHNgeMg4iAwWImcAfg");
	this.shape_3.setTransform(27.4549,26.4733,0.1092,0.1092);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FE5757","#CD0102"],[0,1],-69.8,-52.1,67.8,50.5).s().p("At1myIHOgfIUdOFInOAeg");
	this.shape_4.setTransform(39.7847,4.6547,0.1092,0.1092);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FE5757","#CD0102"],[0,1],-59.6,-92.8,163.8,232.4).s().p("Aszt7IFPgKIUYaJQgsAXg0AmQghAXg6Atg");
	this.shape_5.setTransform(14.9064,17.2576,0.1095,0.1095);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1.5,-0.4,51,46.1), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#20782C","#4FAD1F"],[0,1],164.2,-148,-162.9,147).s().p("AWJ10IGkgcMgy0AsFImmAcg");
	this.shape.setTransform(38.2203,24.2958,0.1094,0.1094);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4FAD1F","#20782C"],[0,1],-41.7,-69.6,52.3,58.6).s().p("ApdpfIGlgcIMWPfIjcEYg");
	this.shape_1.setTransform(13.8262,21.8646,0.1094,0.1094);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A7D63F","#9FD340","#39B54A"],[0,0.075,1],-63.6,-47.4,61.8,46.1).s().p("AsnmLIGmgdISpM1ImlAcg");
	this.shape_2.setTransform(49.4847,4.3622,0.1094,0.1094);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A7D63F","#9FD340","#39B54A"],[0,0.075,1],-121.6,166.1,89.1,-211.1).s().p("EgmngAgIKzmRIPgTcMAgRgpIISrM1Mgy2AsGg");
	this.shape_3.setTransform(26.6796,19.9558,0.1094,0.1094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-0.3,-0.3,58.599999999999994,40.199999999999996), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_2_copy_copy_copy_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape.setTransform(-31,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_1.setTransform(-43.8,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.6)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_2.setTransform(-56.65,45.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.4)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_3.setTransform(-69.45,70.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.267)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_4.setTransform(-93.3,45.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.133)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_5.setTransform(-117.15,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_6.setTransform(-141,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer_2_copy_copy_copy
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_7.setTransform(-1,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.8)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_8.setTransform(21.6,41.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.6)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_9.setTransform(44.15,56.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.4)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_10.setTransform(66.75,70.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.267)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_11.setTransform(44.15,93.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.133)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_12.setTransform(21.6,115.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_13.setTransform(-1,138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// Layer_2_copy_copy
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_14.setTransform(-1,-33);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.8)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_15.setTransform(-22.4,-42.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.6)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_16.setTransform(-43.8,-51.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.4)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_17.setTransform(-65.2,-61.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.267)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_18.setTransform(-43.8,-85.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.133)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_19.setTransform(-22.4,-109.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_20.setTransform(-1,-133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Layer_2_copy
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_21.setTransform(-1,-3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.8)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_22.setTransform(-1.2,-1.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.6)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_23.setTransform(-1.35,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.4)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_24.setTransform(-1.55,2.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.267)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_25.setTransform(-1.35,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.133)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_26.setTransform(-1.2,-1.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_27.setTransform(-1,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

	// Layer_2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(102,0,51,0)").s().p("Ag9A+QgagZAAglQAAgkAagZQAZgaAkAAQAlAAAZAaQAaAZAAAkQAAAlgaAZQgZAaglAAQgkAAgZgag");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_29.setTransform(29,-3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.8)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_30.setTransform(44.25,-26.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.6)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_31.setTransform(59.55,-50.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.4)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_32.setTransform(74.8,-74.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.267)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_33.setTransform(102.85,-50.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.133)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_34.setTransform(130.95,-26.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_35.setTransform(159,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,-138.8,311.6,282.6);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AH/AAIv9JOIAAybg");
	this.shape.setTransform(12.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An+pNIP9JNIv9JOg");
	this.shape_1.setTransform(12.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(7,1,1).p("ASIAAQAAHglUFUQlUFVngAAQngAAlUlVQlUlUAAngQAAngFUlUQFUlUHgAAQHgAAFUFUQFUFUAAHgg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7FB16D").s().p("As0M1QlUlUAAnhQAAnfFUlUQFUlVHgABQHggBFVFVQFTFUAAHfQAAHhlTFUQlVFUngAAQnfAAlVlUg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(7,1,1).p("AUIAAQAAIVl5F6Ql6F5oVAAQoUAAl6l5Ql5l6AAoVQAAoUF5l6QF6l5IUAAQIVAAF6F5QF5F6AAIUg");
	this.shape_4.setTransform(0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58B139").s().p("AuOOPQl5l6AAoVQAAoUF5l6QF6l5IUAAQIVAAF6F5QF5F6AAIUQAAIVl5F6Ql6F5oVAAQoUAAl6l5g");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(7,1,1).p("ASJAAQAAHhlUFUQlUFUnhAAQngAAlUlUQlUlUAAnhQAAngFUlUQFUlUHgAAQHhAAFUFUQFUFUAAHgg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AD3331").s().p("As0M1QlTlVAAngQAAnfFTlVQFVlTHfAAQHgAAFVFTQFTFVAAHfQAAHglTFVQlVFTngAAQnfAAlVlTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:12.025,y:0.025}},{t:this.shape,p:{scaleX:1,scaleY:1,x:12.025,y:0.025}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_1,p:{scaleX:1.11,scaleY:1.11,x:11.9834,y:0.0751}},{t:this.shape,p:{scaleX:1.11,scaleY:1.11,x:11.9834,y:0.0751}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:12.025,y:0.025}},{t:this.shape,p:{scaleX:1,scaleY:1,x:12.025,y:0.025}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.3,-132.3,264.70000000000005,264.70000000000005);


(lib.shape12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AizARIgLgCIgygCIgJABIgMACIgJgBIgVABIgOABIgQgBIgKAAIg2AEIgMgCIgIgCIgzgDIgTACIgqACIgYABIgPAAIgqgCQgYgCgBgGIAGgBIATgBIAUgBIAVgBIAogCIALgBIAigBIAGAAIAKgBQAMAAAGgDIAIgDIAigEQAmgIAiAJQAeAJAogCIAeAAIAzgDIATgCIAQgCIAugCIAOAAIAUACQAdADAagEQAPgDAKgGQANAGAXACIAdgBIAVgCIAdABIAmABIASgBIAOACIAYABIAlAEIApAFIAkgBIA8gDIAgADIAIABIAkACIAJABIAQgBIAGAAIANAAIAIABIBFAEIAJAAQAVADgPAHIgFgBIgeABIgTgBIgqgCIhVABIgVgBIgJAAIgLAAIhWADIgZAAIgUgBIgIACIgYABIgHgBIgRACIgSgBIgTgCIgRgBQgrAFgrgEIglgEIgnACIgUADIgNAAIgggDIgdgCQgPgEgLAGQgMAIgPAAQgLAAgNgEg");
	this.shape.setTransform(0.0041,-0.0488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,-2.1,124.69999999999999,4.1);


(lib.mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8FE9A","#E8C22B","#FED136","#D39F23"],[0,0.325,0.69,1],0,-37.5,0,37.6).s().p("AkJEKQhuhuAAicQAAiBBNhjQgdAogQAnQAZgwAtgyQBahmBmgQIgKABQAsgLAvAAQCbAABvBuQBuBvAACaQAACchuBuQhvBuibAAQibAAhuhugAjXjWQhZBZAAB9QAAB/BZBZQBZBZB+AAQAuAAApgMQgWAIgTADIANgCQAmgGAkgQQBkgtAshoQAcg8AAhHQAAh9hZhZQhahah+AAQh+AAhZBag");
	this.shape.setTransform(-0.075,-0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFAC2","#D2781D"],[0,1],0,-39.2,0,39.3).s().p("AkVEWQhzhzAAijQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzgAhblsQhpAMhTBkIgTAYQhNBjAACBQAACbBuBvQBuBuCbAAQCbAABvhuQBuhvAAibQAAibhuhuQhvhuibAAQgvAAgsALg");
	this.shape_1.setTransform(-0.075,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F8FE9A","#E8CD2D","#DCA325","#D28C20"],[0,0.318,0.702,1],0,-27.7,0,27.8).s().p("AhZEIQApAMAvAAQCMAABRhtQAjgwAOgwQgRBGg4A4QhRBRhzAAQgvAAgqgOgAgBEHQiGgDhShlQgagggRgmIgKgbQgHgdAAghQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAAAhgHAdQgPAzgoAxQhRBliBAAIgHAAgAkNBDIAHAYQAQAqAZAiIAGAIQgogxgOg7g");
	this.shape_2.setTransform(-0.075,-0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F8FE9A","#E8C22B","#D27F1E"],[0,0.498,1],0,30.5,0,-30.5).s().p("AjXDXQhZhYAAh/QAAh+BZhZQBZhZB+AAQB+AABaBZQBZBZAAB+QAABHgcA8IAKgcQg0B5htA1QgUAKgTAGQgpAMguAAQh+AAhZhagAkNBDQAOA7AoAxQAzBCBLAXQAqAOAvgBQBzAABRhRQA4g3ARhHIAEgNIgCAFQAHgeAAggQAAhyhShSQhRhRhzAAQhyAAhRBRQhSBSAAByQAAAgAHAeIgCgFg");
	this.shape_3.setTransform(-0.075,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABzFFQATgHAVgKQBtg1A0h5IgKAcQgtBphkAtQgjAPgmAGIgOACQAUgDAVgHgAg8EnQhLgXgzhCIgHgIQgYgigQgpIgIgZIgDgKIACAGIAKAaQASAmAZAgQBSBlCGADQCGADBUhnQAogyAPgyIABgGIgDAOQgOAwgkAwQhRBtiMAAQgvAAgogMgAkNjFIATgXQBThkBpgNIAJgBQhmAQhaBmQgtAygZAwQARgnAdgog");
	this.shape_4.setTransform(-2.925,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F8FE9A","#E8C22B","#D27F1E"],[0,0.498,1],0.2,28.4,0.2,-28.3).s().p("AiRDJQg8hTgBh2QABh1A8hTQA+hSBVAAQBWAAA9BSQAvBAAKBUQgLhNgqg6Qg5hPhRAAQhRAAg4BPQg6BPAABvQAABxA6BPQA4BPBRAAQBPAAA5hMIgCADQg9BShWAAQhVAAg+hSg");
	this.shape_5.setTransform(-11,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F8FE9A","#E8CD2D","#DCA325","#D28C20"],[0,0.318,0.702,1],0,-27,0,27.1).s().p("AiJDAQg6hQABhwQgBhvA6hQQA5hPBQAAQBRAAA6BPQAqA7ALBNQADAZAAAcIAAACQAABvg4BRIgCACQg5BNhQAAQhQAAg5hPg");
	this.shape_6.setTransform(-9.55,0.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F8FE9A","#E8C22B","#FED136","#D39F23"],[0,0.325,0.69,1],0,-37,0,37.1).s().p("AjHEGQgRgXgPgYQgNgZgKgbQgchKAAhZIAAgCQAAg5AMgzQAUhUAzhDQBThtB0AAQB1AABTBtQBTBtAACYQAACahTBsQhTBth1AAQh0AAhThtgAivjDQg8BTgBB1QABB1A8BTQA+BTBWAAQBVAAA9hTIACgDIACgCQA4hRABhvIAAgDQAAgbgEgZQgKhUgvhAQg9hThVAAQhWAAg+BTg");
	this.shape_7.setTransform(-8,0.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFAC2","#D2781D"],[0.067,1],-0.6,-38.6,-0.6,38.7).s().p("AgcGCQhtgKhOhmQgVgbgQgdQAPAYARAXQBTBtB1AAQB0AABThtQBThsAAiaQAAiYhThtQhThth0AAQh1AAhTBtQgzBDgUBUQAThcA5hJQBWhyB8AAQAPAAAQACQBoANBLBjQBYBxAACfQAACghYByQhXBxh7AAIgXgBg");
	this.shape_8.setTransform(-5.9,-0.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F8FE9A","#E8C12B","#DB8D21","#A96316"],[0,0.224,0.608,1],-9.6,-38.7,-9.6,38.7).s().p("AjAGDIgCAAQgPgBgPgDIAXABQB8AABWhxQBYhxAAifQAAihhYhxQhKhihogNIBtAAQB3AIBTBxQBTBxAACZQAACZhVBvQhTBuh5AMg");
	this.shape_9.setTransform(13.6875,0.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F8FE9A","#E8C22B","#D27F1E"],[0,0.498,1],14.8,9.4,-9.2,-7.4).s().p("AhBDJQgihTAAh2QAAh1AihTQAghQAtgCQgkACgaBOQgcBRAAB2QAAB0AfBWQAeBUAlAAIACAAIgHAAQgvAAghhSgABgDHIAEgLIgFANIgBADIACgFgABejKIgIgSIAJAUIAEAKIgFgMg");
	this.shape_10.setTransform(-10.675,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F8FE9A","#E8CD2D","#DCA325","#D28C20"],[0,0.318,0.702,1],0,-28.3,0,28.4).s().p("AgEEbQgmAAgehUQgfhWAAhzQAAh2AchRQAahPAlgCIADAAIBGA+IAIATIAFAMIAEAJQAZBMABBmIAAACIgdC9IgEAKIgCAGIhHBOIgCAAg");
	this.shape_11.setTransform(-8.175,0.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F8FE9A","#E8C22B","#FED136","#D39F23"],[0,0.325,0.69,1],-16,0,16,0).s().p("AhwEIIgCgEIgMgfQghhjAAiCIAAgHIAAgEQABiCAlhjIAAgCIAGgQIADgFQAuhuBCAAQBCAAAvBuQAvBtAACaQAACbgvBtQgvBuhCAAQhCAAguhugAhZjAQgiBTAAB1QAAB1AiBTQAhBTAwAAIAHAAIBHhPIABgEIAFgMIAdi8IAAgEQgBhkgZhMIgEgKIgEgKIgJgVIhGg+IgDAAQguACggBRg");
	this.shape_12.setTransform(-8.275,-0.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFAC2","#D2781D"],[0.067,1],-2.2,-38.7,-2.2,38.8).s().p("AgsGAQg6gPgrhfIgEgKQAvBuBCAAQBCAAAvhuQAvhtAAibQAAiagvhtQgvhuhCAAQhCAAgvBuIgCAFIAGgPQArhfA6gPIACgBQAKgCALAAQALAAAKACQA5APAsBgQAzByAACfQAACggzByQgzBxhHAAQgMAAgLgDg");
	this.shape_13.setTransform(-4.6375,-0.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#F8FE9A","#E8C12B","#DB8D21","#A96316"],[0,0.224,0.608,1],-1.8,-38.7,-1.8,38.7).s().p("AidGDIAAgFQALADALAAQBIAAAzhyQAyhxAAigQAAiggyhxQgrhhg7gOIBkAAQBGABAzBwQAzByAACfQAACggzByQgzBwhGABgAidmCIABAAIgBAAg");
	this.shape_14.setTransform(6.725,0.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FDB82B","#FDAD30","#7E470D"],[0,0.502,1],-8.2,-38.7,-8.2,38.7).s().p("AheGDQBIgBAxhwQA0hyAAigQAAifg0hyQgxhwhIgBIAOAAQBJAAAyBxQAzByAACfQAACggzByQgyBxhJAAg");
	this.shape_15.setTransform(14.7,0.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFAC2","#D2781D"],[0.067,1],8.3,38.7,8.3,-38.7).s().p("ABRGDQhJAAgyhxQg0hyAAigQAAifA0hyQAyhxBJAAIAOAAQhHABgyBwQg0ByAACfQAACgA0ByQAyBwBHABg");
	this.shape_16.setTransform(-14.825,0.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FEF13B","#E8AF28","#FDC133","#D2841F"],[0,0.325,0.69,1],-11.4,-16.8,11.4,15.2).s().p("AADEbIhFhLIgBgDIgDgGIgEgKIgdi9IAAgCQABhmAZhLIAEgKIAFgNIAIgTIBHg+IACAAQAmADAaBOQAbBRAAB3QAAB0gfBVQgeBUgmAAIgCAAg");
	this.shape_17.setTransform(8.025,0.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F8FE9A","#E8C22B","#D27F1E"],[0,0.498,1],-14.7,-7.5,9.3,9.3).s().p("AgVEbIACAAQAlAAAehUQAfhWAAhzQAAh3gbhRQgahOglgDQAtACAgBRQAiBTAAB1QAAB1giBUQghBTguAAIgIgBgAheDJIgFgMIAEAKIADAGIgCgEgAhejIIAJgVIgIATIgFAMIAEgKg");
	this.shape_18.setTransform(10.525,0.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FEF13B","#E8AF28","#FDC133","#D2841F"],[0,0.325,0.69,1],0,37.4,0,-37.4).s().p("AhwEIQgvhtAAibQAAiaAvhuQAvhtBBAAQAxAAAmA6QALATALAXIAEAJQAsBnADCNIAAAFIAAAKIAAADIAAACQAACCgiBjIgJAbIgEAIQguBuhDAAQhBAAgvhugAg9jVIgKAVIgDAKIgEAKQgaBMAABkIAAADIAdC9IAEANIACADIABADIBGBMIAHAAQAwAAAhhSQAhhUABh2QgBh0ghhTQghhRgtgCIgDAAg");
	this.shape_19.setTransform(8.15,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FDB82B","#FDAD30","#7E470D"],[0,0.502,1],2.2,38.8,2.2,-38.7).s().p("AhlESQgzhyAAigQAAigAzhxQAshgA6gPQAKgCALAAQAKAAALACIACABQArAMAjA4Qgng6gwAAQhCAAguBtQgvBuAACaQAACbAvBtQAuBuBCAAQBCAAAvhuIAEgIIgIASQgrBeg5AQQgLADgMAAQhIAAgzhxg");
	this.shape_20.setTransform(4.5625,-0.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F8FE9A","#E8C12B","#DB8D21","#A96316"],[0,0.224,0.608,1],1.9,38.7,1.9,-38.7).s().p("AAPGDQhHgBgzhwQgzhyAAigQAAifAzhyQAzhwBHgBIBkAAQg8AOgrBhQgyBxAACgQAACgAyBxQAzByBIAAQANAAALgDIAAAFgACcmCIADAAIAAAAIgDAAg");
	this.shape_21.setTransform(-6.8,0.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F8FE9A","#E8C22B","#FED136","#D39F23"],[0,0.325,0.69,1],0,-39.5,0,37.8).s().p("AgMFlIAArZIAQgFIAJFyIAAGBg");
	this.shape_22.setTransform(-10.175,0.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANCtIgJlxIgRAFIAagWIAAFSIAAAMIABBNg");
	this.shape_23.setTransform(-10.125,-17.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F8FE9A","#E8C12B","#DB8D21","#A96316"],[0,0.224,0.608,1],0,-38.6,0,38.7).s().p("AhWGCIAAmBIABApIgBhMIAAgNIAAlTICtAAIAAMEg");
	this.shape_24.setTransform(-0.125,-0.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FDB82B","#FDAD30","#7E470D"],[0,0.502,1],0,-38.6,0,38.7).s().p("AgMmCIAaAXIAALZIgaAUg");
	this.shape_25.setTransform(9.95,-0.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F8FE9A","#E8C12B","#DB8D21","#A96316"],[0,0.224,0.608,1],9.6,38.7,9.6,-38.7).s().p("ABAGDQh4gMhThuQhVhwAAiYQAAiYBThwQBShvB4gMIBoAAQhkAOhKBhQhXBxAACgQAACfBXByQBXBxB7AAIAYgBQgOACgQABIgCABg");
	this.shape_26.setTransform(-13.8375,0.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F8FE9A","#E8C12B","#DB8D21","#A96316"],[0,0.224,0.608,1],-5.6,-76.6,-5.6,0.8).s().p("AgpAIIACgBQAPgBAPgDQAagCAZgIQggALgiAEg");
	this.shape_27.setTransform(9.6875,38.0375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FEF13B","#E8AF28","#FDC133","#D2841F"],[0,0.325,0.69,1],0,37.1,0,-37).s().p("AjHEGQhThsAAiaQAAiYBThtQBThtB0AAQB1AABTBtQAzBDAUBUIAMBsIAAACIAAAAIgBAeQgCApgJAmQgKAvgVAqQgRAigXAeQhTBth1AAQh0AAhThtgAh2jDQgvBAgKBUQgEAZAAAaIAAAEQABBvA4BQIADAEIABACQA9BTBVAAQBXAAA9hTQA9hTAAh2QAAh0g9hTQg9hThXAAQhVAAg9BTg");
	this.shape_28.setTransform(7.825,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F8FE9A","#E8C22B","#D27F1E"],[0,0.498,1],-0.2,-28.3,-0.2,28.4).s().p("AiUDIIgBgCQA4BMBPAAQBQAAA6hPQA4hPAAhxQAAhvg4hPQg6hPhQgBQhRABg5BPQgqA7gMBMQALhUAvg/QA9hTBWgBQBWABA8BTQA+BTgBB0QABB2g+BSQg8BThWAAQhWAAg9hTg");
	this.shape_29.setTransform(10.85,0.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FEF13B","#E8AF28","#FDC133","#D2841F"],[0,0.325,0.69,1],0,27.1,0,-27).s().p("AiHDDIgCgDQg4hQgBhwIAAgCQAAgcADgZQAMhNAqg6QA5hQBQAAQBRAAA5BQQA5BPAABvQAABwg5BQQg5BPhRAAQhOAAg5hMg");
	this.shape_30.setTransform(9.375,0.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FDB82B","#FDAD30","#7E470D"],[0,0.502,1],0.6,38.7,0.6,-38.6).s().p("AjMESQhYhyAAigQAAifBYhxQBLhhBkgOQASgDARAAQB7AABYByQAuA7AVBIQAFARADARQgThUgzhDQhUhth1AAQh0AAhTBtQhTBtAACYQAACaBTBsQBTBtB0AAQB1AABUhtQAXgeAQgiQgSAngaAiQg7BMhMAZQgZAIgbADIgYABQh7AAhXhxg");
	this.shape_31.setTransform(5.7,-0.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F8FE9A","#E8C22B","#FED136","#D39F23"],[0,0.325,0.69,1],0,-37.5,0,37.6).s().p("AkJEKQhuhuAAicQAAiDBQhjQgSAXgOAaIgQAgIASgeQAXglAdgfQBahmBmgQIgKABQAsgLAvAAQCbAABvBuQBuBvAACaQAACchuBuQhvBuibAAQibAAhuhugAA5EtIgdAEIAfgDQAmgGAjgQQBkgtAthoQAcg7AAhIQAAh9hZhZQhahah+AAQh+AAhZBaQhZBZAAB9QAAB/BZBZQBZBZB+AAQAjAAAggHIgKADg");
	this.shape_32.setTransform(-0.075,-0.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FFFAC2","#D2781D"],[0,1],0,-39.2,0,39.3).s().p("AkVEWQhzhzAAijQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzgAhblsQhpAMhTBkIgQAVQhQBkAACDQAACbBuBvQBuBuCbAAQCbAABvhuQBuhvAAibQAAibhuhuQhvhuibAAQgvAAgsALg");
	this.shape_33.setTransform(-0.075,-0.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#F8FE9A","#E8C22B","#D27F1E"],[0,0.498,1],0,30.5,0,-30.5).s().p("AjXDXQhZhYAAh/QAAh+BZhZQBZhZB+AAQB+AABaBZQBZBZAAB+QAABHgcA8IAKgcQg0B5htA1QgdAOgeAHQggAHgjAAQh+AAhZhagAkKBNQAJAiASAeQAIAPAKANQBQBuCMgBQCGABBQhlQAcghARgnQAKgXAFgXIgFARQAKglAAgoQAAhyhShSQhRhRhzAAQhyAAhRBRQhSBSAAByQAAAkAIAhIgDgJg");
	this.shape_34.setTransform(-0.075,-0.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#F8FE9A","#E8CD2D","#DCA325","#D28C20"],[0,0.318,0.702,1],0,-27.1,0,28.4).s().p("AgBEQQiGgDhShmQgagggRgmIgJgWQgIghAAgkQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAAApgKAkQgQAsgjAsQhSBliBAAIgHAAgADcCvQAXgfAPggQgRAngcAiIAHgKgAkKBTIAFARQAJAZANAWQgSgegJgig");
	this.shape_35.setTransform(-0.075,-0.6708);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABVFLIALgCQAegIAdgOQBtg0A0h5IgLAcQgsBohkAtQgjAPgnAHIgfADgAjADIQgKgOgIgOQgNgWgKgaIgFgQIgGgSIAEAKIAIAWQASAmAZAgQBSBlCGADQCGADBUhoQAjgrAQgtIAGgRQgGAYgKAXQgOAggXAfIgIAJQhQBkiGAAQiMAAhPhtgAkriWQAPgbARgXIARgVQBThkBpgNIAJgBQhmARhaBlQgcAggYAkIgSAeg");
	this.shape_36.setTransform(-2.925,-3.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-39.3,78.5,78.6);


(lib.shape102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1,3,true).p("AGQhBQAHA1g4AeQgiAUhWAJQlEAhkBgXQg7gSAKgpAlggNQAHAVAwAFQJuACAahK");
	this.shape.setTransform(0.2159,-3.7027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E065A1").s().p("AleBAQg7gSAKgqQAMgdAjATQAHAVAwAFQJuACAahKQAYglAZAfQAHA1g4AeQgiAUhWAJQi/AUinAAQh1AAhqgKg");
	this.shape_1.setTransform(0.2159,-4.4093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-11.7,82.3,15.7);


(lib.Symbol1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"stp":0,go:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		this.parent.next_func();
		this.parent.start(); 
		
		
				this.parent.heart1.visible = true;
				this.parent.heart2.visible = true;
				this.parent.heart3.visible = true;
	}
	this.frame_114 = function() {
		this.gotoAndStop("stp")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(97).call(this.frame_97).wait(17).call(this.frame_114).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#95C020").s().p("AgCAmQgJAAgJADQAOgMATgKQgNgXgrgYIAfgSQATAPAgAxQAEAJABAIQgKAEgIAHIAAABQgMgJgQAAg");
	this.shape.setTransform(-334.375,-71.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3B9C0").s().p("AASBwQgFgFAAgIQAAgHAFgFIACgBQAEgEAHAAIAGACIAGADQAFAFAAAHQAAAIgFAFQgFAFgHAAQgIAAgFgFgAg/BGQgFgEAAgIIAAgDQABgGAEgDQAFgFAHAAIADAAQAFABAEAEQAFAFAAAHQAAAIgFAEQgFAFgHABQgHgBgFgFgABGAxIgBgBIAAgLIgBgMIACgBQAFgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAGQgFAEgHAAQgHAAgFgEgAACAtQgCgGgFgGIAAgCIABgFQABgEADgEQAEgEAHAAIAFABQAFAAADADQAFAGAAAHQAAAHgFAFQgFAFgIAAQgFAAgEgDgAhrAPQgFgFAAgHQAAgFADgDIACgEQAFgEAHAAQAIAAAEAEIABABQAFAFAAAGQAAAHgGAFQgEAFgIAAQgHAAgFgFgAglgPQgFgFAAgHQAAgHAFgFIAAAAQAFgGAIAAQAGAAAFAGIABAAQAFAEAAAIQAAAHgFAFQgFAFgHAAQgIAAgFgFgABigPIgDgEIABgHIgBgJIADgEIAAAAQAFgGAHAAQAHAAAFAGIABAAQAFAFAAAGQAAAIgFAFQgFAFgIAAQgHAAgFgFgAAggQIAAgEQAAgOgGgLQAFgFAHAAQAHAAAFAFIAAAAQAFAFAAAIQAAAHgFAFQgFAEgHAAIgGAAgAh6gvQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAEgIAAQgHAAgFgEgABXhRIgDgEIAAgHIAAgJIADgFIAEgDQAEgBAEAAQAIAAAEAEQAGAFAAAIQAAAHgGAFQgEAFgIAAQgHAAgFgFgAgwhRQgFgFAAgHQAAgFACgEIADgEQAFgEAHAAQAIAAAFAEIADAEQACAEAAAFQAAAHgFAFQgFAFgIAAQgHAAgFgFgAAVhSIAAgEQAAgOgGgLIABgBQAEgEAHAAQAHAAAFAFQAFAFAAAHIgBAGQgBAEgDADQgFAEgHAAIgGAAg");
	this.shape_1.setTransform(-331.875,-53.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E30614").s().p("AAMCHQgMgHgDgPQgCgKADgKIADgJQAFgKAHgFQAEgEAGgCIAHgCQAKgCAJAFQAMAHAEANIAAACQAEAPgIAPQgIAOgOAGQgHACgGAAQgHAAgHgDgAAUBWIgCACQgFAFAAAHQAAAHAFAFQAFAFAIAAQAHAAAFgFQAFgFAAgHQAAgHgFgFIgGgEIgGgBQgHAAgEADgAhFBdQgNgHgDgPQgCgGABgHQABgIAEgIQAIgPAOgFQAOgGANAHIAFADIABABIAEAEQAEAGACAHQABAHgBAHIgCAJIgDAHQgIAOgOAGQgGADgHAAQgHAAgGgEgAg/AuQgEAEgBAFIAAADQAAAIAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgEgEgFgBIgDAAQgHAAgFAFgABKBIQgFgFgHgEQAFgHACgIIABABQAFAFAHAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAQgHAAgFAFIgCACQgCgJgGgIQAGgGAIgDQAIgCAHABQAGAAAGACQAGADAEAGQAEAFABAHIABAFQABANgGAMQgIAPgOAFQgHADgHAAIgCgDgAAGBFIAAgEQAAgKgEgJQAEACAFAAQAIAAAFgEQAFgGAAgHQAAgHgFgFQgDgDgFgBIgFgBQgHAAgEAFQgDADgBAEIgBAFIAAADIgCgDQgGgGgHgEIADgGIAGgKQAGgDAEgEIAFgCQANgGANAGIAAABQAGADAEAEQAEAGACAHIABAFQABAMgGALIAAACQgEAGgFAFQgOACgLAJIgCAAgAhxAmQgNgHgDgPQgDgOAHgNIAAgBIAHgKQAGgHAJgDQAJgEAIABQAFABAFADQAHAEAFAGIAAABQADAEABAGQABAFAAAFQgBAJgFAKIgDAFIgIAHIgFAFIgFADQgHACgGAAQgHAAgHgDgAhrgIIgCADQgDAEAAAEQAAAHAFAFQAFAFAHAAQAIAAAEgFQAGgFAAgHQAAgGgFgFIgBAAQgEgFgIAAQgHAAgFAFgAglAJQAAgSgOgPIgIgGQABgHAEgGQADgHAGgFQAFgGAIgCQAJgEAJACIAIACQAJAGAEAKIACAGQADAOgGAOIgBACIgDAEIgBABQgHAEgHAFIgEAFQgGACgGAAIgIgBgAglgnIAAAAQgFAFAAAHQAAAHAFAFQAFAGAIAAQAHAAAFgGQAFgFAAgHQAAgHgFgFIgBAAQgFgFgGAAQgIAAgFAFgABbgEQADgHABgIIADAEQAFAFAHAAQAIAAAFgFQAFgFAAgHQAAgHgFgFIgBAAQgFgFgHAAQgHAAgFAFIAAAAIgDAEQgCgKgGgIIACgCQAGgGAHgDQAKgDAJABIAIADQAIAFAEAHQADAEABAGQADAPgIAOQgGAMgMAGQgNgKgSAAgAAfgJIABgHIAGABQAHAAAFgFQAFgFAAgHQAAgIgFgFIAAAAQgFgFgHAAQgHAAgFAFQgDgFgFgFIgEgDIADgDQAFgFAIgDQAJgEAJACIAJADQAHAEAFAIQACAEABAFIABALQgCAGAAAGIgDAHQgGAMgLAFQgJgGgLgDgAiAgZQgMgHgEgPQgDgPAIgOQAHgPAOgFQAPgGAMAHQANAHADAOQADAPgHAPIgFAGIgCAAQgUAAgOAOIgBACIgHgDgAh6hIQgFAFAAAHQAAAIAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgIAAQgHAAgFAFgAg0g5QgBgSgNgMIgFgFQABgJAEgIQAGgLAKgGIAGgEQAPgFAMAGQAIAFAEAHIACAEIACAGQACAOgGAOIgBABIgCAFIgDAEIgEAAQgTAAgOANIgEgBgAgwhpIgDADQgCAEAAAFQAAAHAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgHQAAgFgCgEIgDgDQgFgFgIAAQgHAAgFAFgABVg5IgEgDIgFgFQAGgJACgLIADAEQAFAFAHAAQAIAAAEgFQAGgFAAgHQAAgHgGgFQgEgFgIAAQgEAAgEACIgEADIgDAEQgCgKgGgIIAJgHIAGgEQAPgFAMAGQAMAHAEAPQADAPgIAOIgFAJIgFAAQgTAAgOANIgBgBgAAVhSIAGABQAHAAAFgFQADgDABgEIABgFQAAgIgFgFQgFgFgHAAQgHAAgEAEIgBABIgIgKIgEgDQAHgHAJgEIABAAQANgFAMAGQANAHADAPIABAKQAAAGgCAGIgDAHIgGAJIgEAAQgTAAgNAMQAFgJABgLg");
	this.shape_2.setTransform(-331.875,-53.7876);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A50F22").s().p("AgDCGQgOgOAAgUIABgIQgPAPgUAAQgUAAgOgPQgOgOAAgUIAAgHQgRgBgNgNQgOgOAAgUQAAgMAGgLIgHgGQgOgOAAgUQAAgUAOgOQAOgPAVAAQAOAAALAIQADgPALgMQAIgHAIgEQAJgDAJAAQARAAAMAJIAAAAQAHgIAKgEQAIgCAJAAQAUAAAOAOIAEAFIAKgHQAKgHAOAAQAVAAAOAOQAOAPAAAUQAAAPgIAMIAFAEQAOAPAAAUQAAAUgOANQgIAIgKADQAEAJAAAKQAAAUgPAOQgOAPgUAAIgFAAQACAHAAAIQAAAUgOAOQgOAOgUAAQgUAAgOgOgAAVA2IgHACQgGACgEAEQgGAFgFAKIgEAJQgDAKACAKQAEAPALAHQANAGAOgFQAOgGAIgOQAIgPgEgPIAAgCQgEgNgMgHQgGgDgHAAIgGAAgAhEAPQgOAFgIAPQgEAIgBAIQgBAHACAGQADAPANAHQAMAHAOgGQAOgGAIgOIADgHIACgJQABgHgBgHQgCgHgEgGIgEgEIgBgBIgFgDQgHgEgHAAQgGAAgHADgABBgGQgIADgGAFQAGAIACAJIABAMIAAAKQgCAIgFAHQAHAEAFAFIACADQAHAAAHgDQAOgFAIgPQAGgMgBgNIgBgFQgBgHgEgFQgEgFgGgDQgGgDgGAAIgEAAQgFAAgGACgAgEgLIgGACQgEAFgGADIgGAJIgDAGQAHAEAGAGIACADQAFAFADAHQAEAJAAAKIAAAEIACAAQAKgJAOgCQAFgFAEgGIAAgCQAGgLgBgMIgBgFQgCgHgEgFQgEgFgGgDIAAgBQgHgDgHAAQgGAAgFADgAhwgnQgJADgGAHIgHAKIAAABQgHAOADANQADAPANAHQAMAGAPgFIAFgDIAFgFIAIgHIADgFQAFgKABgIQAAgGgBgFQgBgGgDgEIAAgBQgFgGgHgEQgFgDgFgBIgDAAQgHAAgHADgAgphGQgIACgFAGQgGAFgDAHQgEAGgBAHIAIAGQAOAPAAASQAKADAKgEIAEgEQAHgGAIgEIABgBIADgEIABgCQAFgOgDgOIgBgGQgEgKgKgGIgIgCIgGgBQgGAAgGADgABdhHQgHADgGAGIgCACQAGAIACAKIABAJIgBAHQgBAIgDAHQASAAANALQAMgGAGgNQAIgOgDgPQgBgGgDgEQgEgHgIgFIgIgDIgFAAQgHAAgHACgAAVhMQgIADgFAFIgDADIAEADQAFAFADAFQAGALAAAOIAAAEIgBAHQALADAJAHQALgGAGgMIADgHQAAgGACgGIgBgLQgBgFgCgEQgFgIgHgEIgJgDIgFgBQgHAAgGADgAh/hnQgOAFgHAPQgIAOADAPQAEAPAMAHIAHADIABgCQAOgOAUAAIACAAIAFgGQAHgPgDgPQgDgOgNgHQgHgEgHAAQgGAAgHADgAg1iJIgGAEQgKAGgGALQgEAIgBAJIAFAFQANAMABASIAEABQAOgNATAAIAEAAIADgEIACgFIABgBQAHgOgDgOIgCgGIgCgEQgEgHgIgFQgHgDgHAAQgGAAgHACgABSiJIgGAEIgJAHQAGAIACAKIAAAJIAAAHQgCALgGAJIAFAFIAEADIABABQAOgNATAAIAFAAIAFgJQAIgOgDgPQgEgPgMgHQgHgDgHAAQgGAAgHACgAgFiDIAEADIAHAKQAGALAAAOIAAAEQgBALgFAJQANgMATAAIAEAAIAGgJIADgHQACgGAAgGIgBgKQgDgPgNgHQgMgGgNAFIgBAAQgJAEgGAHg");
	this.shape_3.setTransform(-330.975,-53.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5EAC57").s().p("AAwAxQgPgOgUAAQgIAAgHACQgBgHgFgKQgggwgUgQIARgJIAwA6IACAKQAfAIAXAYIgKAHIgDgFg");
	this.shape_4.setTransform(-329.6,-71.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(114));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DBEDE8").s().p("EggXAEhIAAs8MBAvAAAIAAM8Qv6D7wMAAQwLAAwej7g");
	this.shape_5.setTransform(1.1,-240.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBEDE8").s().p("EggXAFjIAAuBMBAvAAAIAAOBQv/C8wMAAQwLAAwZi8g");
	this.shape_6.setTransform(1.1,-210.5625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBEDE8").s().p("EggXAGmIAAvIMBAvAAAIAAPIQwDB9wMAAQwLAAwVh9g");
	this.shape_7.setTransform(1.1,-180.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DBEDE8").s().p("EggXAHoIAAwOMBAvAAAIAAQOQwHA/wMAAQwMAAwQg/g");
	this.shape_8.setTransform(1.1,-149.8875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DBEDE8").s().p("EggXAIqIAAxTMBAvAAAIAARTg");
	this.shape_9.setTransform(1.1,-119.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DBEDE8").s().p("EggXAHZIAAxTMBAvAAAIAARTQwMCiwMAAQwLAAwMiig");
	this.shape_10.setTransform(1.1,-111.4625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBEDE8").s().p("EggXAGIIAAxUMBAvAAAIAARUQwMFFwMAAQwLAAwMlFg");
	this.shape_11.setTransform(1.1,-103.3484);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBEDE8").s().p("EggXAIwIAA03MBAvAAAIAAU3QwMDYwMAAQwLAAwMjYg");
	this.shape_12.setTransform(1.1,-97.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DBEDE8").s().p("EggXALYIAA4bMBAvAAAIAAYbQwMBswMAAQwLAAwMhsg");
	this.shape_13.setTransform(1.1,-91.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DBEDE8").s().p("EggXAOAIAA7/MBAvAAAIAAb/g");
	this.shape_14.setTransform(1.1,-85.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBEDE8").s().p("EggXAM1IAA7/MBAvAAAIAAb/QwjCWwLAAQwMAAv1iWg");
	this.shape_15.setTransform(1.1,-77.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DBEDE8").s().p("EggXALqIAA7/MBAvAAAIAAb/Qw7EswLAAQwMAAvdksg");
	this.shape_16.setTransform(1.1,-70.4219);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBEDE8").s().p("EggXAOzMAAAghGMBAvAAAMAAAAhGQwvDhwLAAQwMAAvpjhg");
	this.shape_17.setTransform(1.1,-57.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DBEDE8").s().p("EggXAR7MAAAgmLMBAvAAAMAAAAmLQwjCWwLAAQwMAAv1iWg");
	this.shape_18.setTransform(1.1,-45.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DBEDE8").s().p("EggXAVFMAAAgrTMBAvAAAMAAAArTQwYBLwLAAQwLAAwBhLg");
	this.shape_19.setTransform(1.1,-32.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DBEDE8").s().p("EggXAYNMAAAgwZMBAvAAAMAAAAwZg");
	this.shape_20.setTransform(1.1,-20.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},81).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346.9,-294.9,555.2,429.79999999999995);


(lib.numeng = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D83C").s().p("AhtDcQgxgdgZgzIgEgKIgEgJIABABQgHgUgEgXQgGggAAgnQAAgtAGgrQAHgpANgbQAZgxAugZQAugZA/AAQAnAAAjALQAjALAZAWQAaAVASAgQAfA3AABiQAAAzgIApQgIAmgWAhQgcAngsAWQgsAVg1AAQg9AAgxgcgAiaB2QgDABgBACQgFAJALANQADAFAFgFQAFgEgCgFIABAAIgFgHQgBgGgDgCIgDgBIgCAAgAg2jgQhSAbgjBeIgKAzQgEAcABAXIABAvQABAUAEALQAFAKADACQAGAFADgPQgRhgAVhLQAZhbBPgmQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAgAguBHIABABIAJADIALACIAZACQAiAAATgKQASgKAIgTQAIgUAAghQAAgggIgTQgIgSgTgKQgTgKghAAQgwAAgTAWIgLAUQgFAMgBARIgBgBIgBAVQAAAeAJAVQAIAUASAJIAFADIgBgBIABAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah0DpQg1gfgbg3IgFgMIgEgJIgBgDQgGgTgEgWQgGghAAgpQAAguAHgsIAAAAQAHgsAOgdIAAAAQAbg1AygbQAxgbBDAAQApAAAmAMIAAAAQAmAMAbAXIAAABQAcAXATAhIAAABQAhA5AABnQAAA0gIArQgJApgYAkIAAAAQgeAqgvAYIAAAAQgvAWg5AAQhBAAg0gegAi7CCIAEAKQAZAzAxAdQAxAcA9AAQA1AAAsgVQAsgWAcgnQAWghAIgmQAIgpAAgzQAAhigfg3QgSgggagVQgZgWgjgLQgjgLgnAAQg/AAguAZQguAZgZAxQgNAbgHApQgGArAAAtQAAAnAGAgQAEAXAHAUIgBgBgAgZBNIgLgCIgJgDIgBgBIgBAAIABABIgFgDQgSgJgIgUQgJgVAAgeIABgVIABABQABgRAFgMIALgUQATgWAwAAQAhAAATAKQATAKAIASQAIATAAAgQAAAhgIAUQgIATgSAKQgTAKgiAAgAABBAQAcAAAQgIIABAAQANgIAGgOQAHgRAAgeQAAgcgHgRQgGgNgNgHIgBAAQgQgJgdAAQgmAAgRAQIgKASQgDAKgBANIgBAEIgBAPQAAAbAIATIAAgBQAGAPANAHIADABIABAAIAIADIABABIAJACIgBgBg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah8D2Qg4ghgdg6IgBgCIgFgNIAAABIgEgJIgBgFQgHgUgEgWQgGgjAAgqQAAguAHgsIAAgDQAIguAOgeIACgCQAcg2AygdIADgDQA0gcBIAAQAqAAAoAMIACAAQAoAOAeAZQAdAZAVAkIABACQAiA7AABrQAAA1gIAsIAAABQgJAsgaAmIgBABQggAtgyAZIgDABQgxAXg7AAQhFAAg4gggAjXhSIAAAAQgHAsAAAuQAAApAGAhQAEAWAGATIABADIAEAJIAFAMQAbA3A1AfQA0AeBBAAQA5AAAvgWIAAAAQAvgYAegqIAAAAQAYgkAJgpQAIgrAAg0QAAhnghg5IAAgBQgTghgcgXIAAgBQgbgXgmgMIAAAAQgmgMgpAAQhDAAgxAbQgyAbgbA1IAAAAQgOAdgHAsgAiYCPQgLgNAFgJQABgCADgBQADgBACACQADACABAGIAFAHIgBAAQACAFgFAEQgDADgCAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBgAiqBZQgDgCgFgKQgEgLgBgUIgBgvQgBgXAEgcIAKgzQAjheBSgbQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQhPAmgZBbQgVBLARBgQgCALgEAAIgDgBgAgXA+IABABIgJgCIgBgBIgIgDIgBAAIgDgBQgNgHgGgPIAAABQgIgTAAgbIABgPIABgEQABgNADgKIAKgSQARgQAmAAQAdAAAQAJIABAAQANAHAGANQAHARAAAcQAAAegHARQgGAOgNAIIgBAAQgQAIgcAAgAgbAuIAFABIAYACQAWAAAOgGIAAAAIABAAQAIgFADgIIABgBQAGgQAAgaQAAgYgGgPQgDgIgIgEIgBgBQgPgHgYAAQgeAAgNALIgIANQgCAJgBALIgBAFIgBAMQAAAXAHARIAAABQAEAIAIAEIAAABIACAAIAAAAg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC442").s().p("AA+D4IgEAAIgQgCQgNgEgJgJQgRgPAAgdIAAkVQgXAOgMAEQgQAJgNADQgRAEgPgFQgPgFgJgPQgMgVAOgXQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAvgSAbgUQAdgVAUgXIALgMIgBAAIATgUQAJgHAVAAQAYAAAOAPQAOAQAAAZIAAFwQAABHg8AAgAAVgxIgBABIgCBVQgBA0ACAjQAAAAABABQAAAAAAAAQABABAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQACgcAAhOQABgugGgTIgBAAIAAAAgAhHh/QgGACgDACQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAIACgBIAGgCQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgBAAgAAXjCIgSAQIgRAQQgeAWgNAIIgBACQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQALgCAMgIIAWgPQAcgUAJgPQAAAAAAgBQABgBAAAAQAAgBgBAAQAAgBAAAAIgCgBIgDABg");
	this.shape_3.setTransform(0.0231,-0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA/EHIgBAAIgEAAIgCAAIgQgCIgCgBQgQgFgMgLIAAABQgVgTAAglIAAj7IgQAHQgRAJgOADIAAgBQgVAFgTgGIABAAQgVgHgMgUQgQgcATgfQAFgIAHgCQAsgRAagSQAbgUATgWIAAAAIAJgKIABgCIAUgVIAAAAQAMgLAcAAQAfAAASAUIAAAAQASAUAAAfIAAFwQAABWhJAAIgCAAgAADC9QAAAdARAPQAJAJANAEIAQACIAEAAIABAAQA8AAAAhHIAAlwQAAgZgOgQQgOgPgYAAQgVAAgJAHIgTAUIABAAIgLAMQgUAXgdAVQgbAUgvASQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAgBABQgOAXAMAVQAJAPAPAFQAPAFARgEQANgDAQgJQAMgEAXgOg");
	this.shape_4.setTransform(0.0165,-0.0244);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA/EWIgBAAIgDAAIgBAAIgEAAIAAAAIgOgCIgEgBIgCAAQgSgGgNgLIgCgCQgbgWAAgtIAAjkQgPAIgOACIgCABQgYAFgVgIIgDgBQgYgJgNgXQgWgkAYgnIAAABQAIgPANgCQApgQAYgRQAagTATgVIAAAAIAJgKIABgCIAUgWIACgBQAOgOAiAAQAmAAAWAZIABAAQAWAXAAAmIAAFwQAAAygXAZQgWAagsAAIgCAAgAAnEEIACABIAQACIACAAIADAAIABAAQBMABAAhXIAAlwQAAgfgSgUIgBAAQgSgUgfAAQgcAAgLALIgBAAIgTAVIgCACIgJAKIAAAAQgSAWgcAUQgaASgsARQgHACgFAIQgTAfARAcQALAUAVAHIAAAAQASAGAWgFIgBABQAPgDARgJIAPgHIAAD7QAAAlAVATIAAgBQAMALARAFgAAUB8QgDgjACg0IABhVIABgBIABAAQAGATgBAuQAABOgCAcQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAgAhRh4QAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQADgCAGgCQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAIgHACIgCABQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAgAg3iCIABgCQAMgIAegWIASgQIASgQQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQgIAPgdAUIgVAPQgNAIgKACIgBAAIgBAAg");
	this.shape_5.setTransform(-0.008,-0.0245);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1FBAEE").s().p("AiKD0QghAAgSgPQgXgTAGgdQAGgYAWgYQATgUAegXIA0goQBFgpAdgbQApgmgIgnIgBgCQgEgNgHgKIAAgBQgRgbghgCQgfgCgcASQgOAJgMAWQgOAZgIAIQgOAOgZAAQgWAAgPgMQgPgNAAgWQAAgQAGgSIAHgPQAMgZAagVQAbgVAkgMQAmgMA0AAQApAAAjAIIAFABQAMADAKAEQAdAKAWATQAWATAMAZQAMAZAAAbQAAAqgZAjQgaAhgZASQgaAUg7AnQg4AngXAVIgJAKIC+AAQAgAAASALIAQASQADAHAAAJQAAATgPANQgOAMgdAAgAiuDOQgBABAAAAQgBABAAAAQAAABAAAAQAAABABAAIACACQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIAAgBIgCgBIgCABgAgGAZQgSAOgqAbQgoAZgUAQQggAagKANQgVAbAHAaQABAEAFgCQAEgCAAgEQgDgfAhgfQAHgHAzgmIApgdQAXgSAQgOQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBAAIgBAAgAhtjPQgsAWgNAlQgBABABAAQAVgdAqgXQAPgIAWgFIAngJQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgCAAQgqAAgmAUgAgCjiIgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgBACIABABIAGABQADAAACgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgHABg");
	this.shape_6.setTransform(0.0296,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiKEDQgnAAgVgSIAAAAQgfgZAJgmQAGgcAZgbQATgVAggYIA0goIACAAQBCgoAdgbQAhgggFgeIAAgCQgDgLgGgIIgBgCQgOgTgYgCQgagCgYAQIAAAAQgLAHgJASIgBAAQgQAcgJAJQgRASggAAQgbAAgTgPIAAgBQgVgRAAgdQAAgTAHgUIAHgQQAOgcAcgXIABAAQAcgYAogMQAngNA3AAQArAAAkAIIAAAAIAHACIgBAAIAYAHIgBAAQAgALAYAVQAYAVAOAcQANAcAAAeQAAAvgcAnQgbAjgbATIAAABQgbATg6AnQglAZgVASICXAAQAmAAAUAOIADACIAQASIADAEQAEAJAAANQAAAagUARIAAAAQgSAQgjAAgAgIiWQAhACARAbIAAABQAHAKAEANIABACQAIAngpAmQgdAbhFApIg0AoQgeAXgTAUQgWAYgGAYQgGAdAXATQASAPAhAAIEgAAQAdAAAOgMQAPgNAAgTQAAgJgDgHIgQgSQgSgLggAAIi+AAIAJgKQAXgVA4gnQA7gnAagUQAZgSAaghQAZgjAAgqQAAgbgMgZQgMgZgWgTQgWgTgdgKQgKgEgMgDIgFgBQgjgIgpAAQg0AAgmAMQgkAMgbAVQgaAVgMAZIgHAPQgGASAAAQQAAAWAPANQAPAMAWAAQAZAAAOgOQAIgIAOgZQAMgWAOgJQAYgQAbAAIAIAAg");
	this.shape_7.setTransform(0.0324,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiKESQgrAAgYgTIgDgCQgmgfALgwIABgCQAHgeAbgdQAUgWAggZIADgCIAygmIABAAIACgBIAAAAQBBgnAcgaQAagZgDgYQgCgIgFgHIgBgCQgKgNgPgBIgCAAQgUgBgTAMIgBABQgIAFgHAOIgBACQgRAcgKAKIAAABQgVAWgnAAQggAAgVgRIgBAAIgCgCQgagWAAgkQAAgVAIgXIAAAAIAIgSIAAAAQAPgeAfgaIAAAAQAegYApgNIACgBQApgOA6AAQAsAAAkAIIACAAIAHACIACABIAXAHIACABQAhAMAZAWIABABQAaAXAOAdIABACQAOAfAAAgQAAA0gfArQgdAlgcAVIACgCIgCACIhTA5IgDACIgWAPIBrAAQArAAAXAQIAGAFIAQARIAFAIIABAAQAFANAAAQQAAAhgZAWIAAgBIAAAAQgVAUgqAAgAiKEDIEgAAQAjAAASgQIAAAAQAUgRAAgaQAAgNgEgJIgDgEIgQgSIgDgCQgUgOgmAAIiXAAQAVgSAlgZQA6gnAbgTIAAgBQAbgTAbgjQAcgnAAgvQAAgegNgcQgOgcgYgVQgYgVgggLIABAAIgYgHIABAAIgHgCIAAAAQgkgIgrAAQg3AAgnANQgoAMgcAYIgBAAQgcAXgOAcIgHAQQgHAUAAATQAAAdAVARIAAABQATAPAbAAQAgAAARgSQAJgJAQgcIABAAQAJgSALgHIAAAAQAYgQAaACQAYACAOATIABACQAGAIADALIAAACQAFAeghAgQgdAbhCAoIgCAAIg0AoQggAYgTAVQgZAbgGAcQgJAmAfAZIAAAAQAVASAnAAgAitDUIgCgCQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABIAAABQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgCABIgBAAgAi2DHQgHgaAVgbQAKgNAggaQAUgQAogZQAqgbASgOQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgQAOgXASIgpAdQgzAmgHAHQghAfADAfQAAAEgEACIgDABQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgAimiUQANglAsgWQAngVArABQABAAAAAAQABAAAAAAQAAABAAAAQABABgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgnAJQgWAFgPAIQgqAXgVAdQgBAAABgBgAACjcIgGgBIgBgBIABgCQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABAAIAHgBQABAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape_8.setTransform(0.0113,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA232D").s().p("Ag+DiQg9gRgYgsQgLgVABgVQACgVAPgRQADgDAFgDQAGACAGADQAPAHASAXQAVAZAKAHQATAOAbAFQASACAdgJQAhgNAGglQAFgigagSQgJgPgOgGQgNgHgSgCIgegEQgqgGgDgWQgDgSAHgNQAKgFAPgDIAtgHQAZgGAOgOQAMgMABgPQAAgQgLgMQgagbgoAGQgpAGgRAgIgLASQgHAJgJAEQgMAEgOAAQgTAAgPgMQgPgMAAgVQAAgSANgVQANgTAZgSQAZgRAkgLQAkgKAsAAQAoAAAgAJQAJACAIADIgHgCIgJgDQAvAYAOArQAPAvgYAmQgUAhgtASQBHAmALAIQApAhgEAtQgFA0grAlQgmAhg3AIQgUADgVAAQghAAghgJgAACC3QAAABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAaACARgEQAWgEAOgQQAPgPADgYQADgYgKgSQAAAAgBAAQAAAAAAAAQAAgBgBABQAAAAAAAAIgBABQAKAqgbAfQgaAfgrgFIAAAAIgCABgABPA4QAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAGAIQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgCgCIgFgFIgBgBIgCABgAAhgsIhEAKQgKACgHAEQgIAHACAIQABABAAAAQABABAAAAQABgBAAAAQABAAAAgBQAEgIAPgDIAXgDIAXgEQAOgCAJgGQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBAAgAgmjYQg7AIgsAnQgPANgHAPQgLAVAOAMQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBgBAAQgPgbA8gnQAPgKAUgIIAngNQADgBAAgDQAAgBAAgBQAAgBAAAAQgBAAAAgBQgBAAAAAAIgBAAgAgMjZQgBAAAAAAQgBABAAAAQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIAMAAQACAAABgEQAAgEgCAAQgIAAgEACg");
	this.shape_9.setTransform(-0.478,-1.2679);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC2933").s().p("AhcDlQgngOgZgWQgZgVgMgYQgOgYAAgQQAAgWARgNQARgNAZAAIAFABIAGABQgFADgDADQgPAQgCAWQgBAUALAVQAYAtA9ARQA1AOA2gIQA3gJAmghQArgkAFg0QAEgtgpghQgLgHhHgnQAtgSAVgiQAXgmgPguQgOgrgvgYIAKADIAHACIATAIIADACIARAKQAZARALAWQAOAXAAAaQgBAigSAaQgOATgbAUQAZANASAOQAVARAMAXQALAWAAAbQAAAfgPAcQgQAegcAVQgdAXgoAMQglAMgwAAQgyAAglgOgAAsAiQgRgKgVgBQg7gCgFgCQgogIAAggQAAgKAEgHIAOgPIABAAIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAAAIAAAAQgGANACASQADAXAqAGIAfADQARADANAGQAOAHAJAOIgGgEg");
	this.shape_10.setTransform(0,0.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhhD4QgqgQgagWIAAAAQgbgYgOgaQgQgcAAgTQAAgeAYgRIAAAAQATgQAfAAIABAAIAFAAIABAAQANACALAGIAAAAQARAIAUAaQATAWAJAHQARAMAXAFQAPABAZgIQAYgKAFgcQADgYgSgNIgFgEIAAAAQgPgJgQAAIAAAAQg6gDgJgBIgBAAQg0gMABgrQAAgNAGgLIACgDIAPgPIAEgDIABgBIAAAAIABgBIAAAAIABAAIABgBIAAABIABgBIABAAIACgBIABAAQAKgFAPgDIAAAAIAsgGQAUgFAMgLQAHgIABgJIAAgBQAAgJgGgIIgBAAQgUgVggAFIAAAAQghAFgOAaIgBAAIgLAUIgBAAQgJAMgNAFQgPAGgRgBQgXAAgTgOIgBAAQgVgSAAgbQAAgXAQgZQAOgWAcgSQAbgUAngLQAlgLAvAAQApAAAiAJIAVAHIABAAIARAIIABAAIADACIABAAIARALQAdAUANAYIAAABQAPAbAAAdQAAAngVAdIgBAAQgKAOgQAOQAOAJAMAJIgBAAQAZAUANAZQAMAZAAAfQAAAigQAgQgSAhgeAXIgBAAQgeAYgrANIABAAQgpANgyAAQg0AAgogPgAi9BNQgSAOAAAWQAAAQAOAYQANAXAZAWQAYAWAnAOQAmAOAxAAQAwAAAmgMQAogMAcgXQAcgVAQgeQAPgcAAgfQAAgbgLgXQgLgWgWgSQgRgOgagMQAbgUAOgUQATgZAAgiQAAgagNgXQgMgWgZgRIgRgKIgDgCIgTgIQgJgEgJgCQgggJgnAAQgsAAgkAKQgkALgZARQgaASgMATQgOAVAAATQAAAUAQAMQAPANASAAQAOAAAMgFQAKgEAGgIIALgTQASggApgFQAogHAZAbQAMAMgBAQQgBAPgLAMQgPAPgYAFIgtAHQgPADgKAFIAAAAIgBAAIAAAAIgBABIgBAAIAAAAIgBAAIAAAAIgBAAIgBABIgOAPQgEAHAAAKQAAAgAoAIQAFACA7ACQAVABARAKIAHAEQAaASgGAiQgFAlgiANQgdAKgSgDQgagEgUgPQgKgHgVgZQgSgWgOgIQgGgDgHgBIgGgBIgFgBQgZAAgQAMg");
	this.shape_11.setTransform(-0.0008,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhmEGQgtgQgcgaIgBAAQgdgagOgbIAAABQgTghABgWQAAgkAdgXIABgBQAWgSAlAAIABAAIAAAAIAFAAIABAAIABAAQAQACAOAHIABACQASAIAVAaIABACQASAUAIAIQAOAJATADQANABATgGQARgHADgTQACgQgKgHIgEgCIgDgCQgKgGgLAAIgBAAQg8gCgJgDIgBAAIgBAAQhAgOACg3QAAgSAHgNIAAAAQACgEAEgDIAIgJQgQAFgSAAQgcAAgWgRIgCgBQgbgVAAgjIAAAAQAAgaARgbIABgCQAPgYAggWQAcgVApgLQAogMAxAAQAsAAAjAKQAMADALAFIABAAIARAHIADACIACABIABABQAKAEAJAHQAfAVAPAcIAAABIABABQAQAdAAAhQAAAsgYAhIgBABIgOAQIALAJIACACQAYATAOAZIABADQAOAcAAAjQAAAmgSAjQgTAkghAZQggAZgrANIgDABQgqAOg1AAQg3AAgqgQgAhhD4QAoAPA0AAQAyAAApgNIgBAAQArgNAegYIABAAQAegXASghQAQggAAgiQAAgfgMgZQgNgZgZgUIABAAQgMgJgOgJQAQgOAKgOIABAAQAVgdAAgnQAAgdgPgbIAAgBQgNgYgdgUIgRgLIgBAAIgDgCIgBAAIgRgIIgBAAIgVgHQgigJgpAAQgvAAglALQgnALgbAUQgcASgOAWQgQAZAAAXQAAAbAVASIABAAQATAOAXAAQARABAPgGQANgFAJgMIABAAIALgUIABAAQAOgaAhgFIAAAAQAggFAUAVIABAAQAGAIAAAJIAAABQgBAJgHAIQgMALgUAFIgsAGIAAAAQgPADgKAFIgBAAIgCABIgBAAIgBABIAAgBIgBABIgBAAIAAAAIgBABIAAAAIgBABIgEADIgPAPIgCADQgGALAAANQgBArA0AMIABAAQAJABA6ADIAAAAQAQAAAPAJIAAAAIAFAEQASANgDAYQgFAcgYAKQgZAIgPgBQgXgFgRgMQgJgHgTgWQgUgagRgIIAAAAQgLgGgNgCIgBAAIgFAAIgBAAQgfAAgTAQIAAAAQgYARAAAeQAAATAQAcQAOAaAbAYIAAAAQAaAWAqAQgAgZiDIgCABQgYADgKASIgBABIgMAVIAAABIgFAFQAKgEAOgCIACAAIAqgHQAOgDAKgIIAAgBQAEgDAAgEQAAgDgCgDIgBgBQgNgMgRAAIgJABgAAACsQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAqAFAbgfQAbgfgLgqIABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQALATgEAYQgDAXgOAPQgOAQgXAEQgLADgOAAIgQgBgABPA3IgFgJQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAFAGIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABIgCABIgCgBgAg+gZQgDgJAJgGQAHgFAJgCIBFgKQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAQgIAGgOADIgYADIgXADQgOADgEAIIgDACIgBgBgAikh5QgOgLAKgWQAIgOAPgOQAsgmA6gJQAEAAAAAEQgBADgDACIgmAMQgVAJgPAJQg8AnAQAcQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAABIgCAAIAAAAgAgTjjQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAEgBAIAAQAEAAgBADQgBAEgDAAIgMABQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBABgBg");
	this.shape_12.setTransform(-0.0026,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAsD3QgVgSAAgjIAAgmIiuAAQgvAAgXgSQgbgUAAgjQAAgLAEgKIABAAQACgHAJgLIABgBIDpkBIAYgYIADgDIAJgHIABgBIAAAAQASgPAaAAQBSAAAABOIAADiQAfABAUAIQAhAKAAAnQAAAfgaAQIAAAAQgTALglAAIgCAAIAAAmQAAAkgVASQgSARggAAQgfAAgTgSgAAwjtIgBAAIgJAHIABAAQgLAKgPAQIjpEBQgHAJgDAGQgDAHAAAIQAAAbAVAQQAUAPApAAIC9AAIAAA1QAAAcAQAOQAPAOAZAAQAZAAAPgOQAQgOAAgcIAAg1IARAAQAgAAAQgJQATgLAAgXQAAgbgXgIQgTgIggAAIgKAAIAAjxQAAg/hDAAQgVAAgOAMgAhHAvIBchzIgBB7gAgpAiIAvAFIAAhAg");
	this.shape_13.setTransform(-0.025,-0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1791CE").s().p("AA2DsQgQgOAAgcIAAg1Ii9AAQgpAAgUgPQgVgQAAgbQAAgIADgHQADgGAHgJIDpkBQAPgQALgKIgBAAIAJgHIABAAQAOgMAVAAQBDAAAAA/IAADxIAKAAQAgAAATAIQAXAIAAAbQAAAXgTALQgQAJggAAIgRAAIAAA1QAAAcgQAOQgPAOgZAAQgZAAgPgOgAA5CSQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAIAAAVQgBANACAIQAAAAAAABQAAAAABAAQAAABABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIgBgXQgBgPgBgEIgBgBIgBABgAjCBwQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIABACQABADAEABIABgBQADABACgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAIgDgBIgCgBIgBgBIgCABgAg8hkIhLBOIg3A4QghApANAdQACAEAEgDQAEgDgBgEQgHgYAWgeIApgrQAngnATgVIA0g7QAggjASgZQABAAgBAAQgbAbgwAzgAhHAvIBbAIIABh7g");
	this.shape_14.setTransform(-0.025,-0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiECIAAAAQgagVAAgrIAAgXIifAAQg1AAgagVQghgZAAgqQAAgNAFgNIABgCQAEgIAJgNIACgBIDqkBQAMgOALgKIAFgFIAJgHIABgBQAVgSAgAAQAwAAAYAYQAZAXAAAuIAADUQAYACARAGQArAOAAAyQgBAoggAUIgBAAIgBABQgSAKgfACIAAAXQAAArgZAWIgBAAQgWAVgmAAQglAAgXgWgAj4BTQAAAjAbAUQAXASAvAAICuAAIAAAmQAAAjAVASQATASAfAAQAgAAASgRQAVgSAAgkIAAgmIACAAQAlAAATgLIAAAAQAagQAAgfQAAgnghgKQgUgIgfgBIAAjiQAAhOhSAAQgaAAgSAPIAAAAIgBABIgJAHIgDADIgYAYIjpEBIgBABQgJALgCAHIgBAAQgEAKAAALgAA4C+QgCgIABgNIAAgVQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAABQABAAAAAAQABAEABAPIABAXQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAgAjDB2IgBgCQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAIACABIADABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQgCAEgDgBIgBABQgEgBgBgDgAjSBoQgNgdAhgpIA3g4IBLhOQAwgzAbgbQABAAgBAAQgSAZggAjIg0A7QgTAVgnAnIgpArQgWAeAHAYQABAEgEADIgDABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAgAgpAiIAvg7IAABAgAgMAWIAEAAIAAgFg");
	this.shape_15.setTransform(-0.025,-0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEF144").s().p("AhwDVQhFgpAAg7QAAgKAHgLIgMAIQAPgNAVAAQAZAAAQAPIANAUQAIAMAGAGQAUAVAiACQAcACAagVQAbgVAFgeQACgKgEgOQgEgNgHgJQgcgjg4AMQhAAUgdAAQgWAAgQgNQgSgNAAgSIAmixQAGgeARgOQARgOAkAAIDPAAQAnAAAQAPIgIgGIgUgHIgGgBQAHAGAFAGQAGAKgFAOQgGAOgKAGQgSAKgbACIguABQgsABhZAAQgCAYgMAvIgLA9QAPgRATgMIAAACQBKgeBEAPIgLgCIgLgBQArAKAdAbQAhAeAKAuQANA2gYAvQgYAugyAZQgwAZgyADIgOAAQgxAAglgXgAArATQAbAWADAmQAFAogaAcQgYAZgnAKQgDABgBAEQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAogGAbgcQAcgcADgpQADgvgigaQgfgYguAHIgBABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIADAAQAkAAAZAUgAicgkIgBAIQgBAEAFgBQAFgBABgEIABgGQAAgFgFABIgBAAQgEABAAADgAhbjYQgRALgIALQgIALgFAUIgOA0QgHAfgCAXQAAAEAEAAQAEgBABgDQAHgMADgSIAHggIAOg3QADgMAGgJIAPgRQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIgBgBIgCABg");
	this.shape_16.setTransform(-0.75,-0.8792);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4C249").s().p("Ah8DeQgtgVgUgeQgTgdAAgXQAAgPAPgOIAMgHQgHAKAAALQAAA6BEAqQAqAaA6gEQAzgDAwgYQAygZAXgvQAYgvgMg2QgKgtghgfQgdgagrgKIAKABIALABIAWAHIACAAQAiAMAaAVQAaAWAOAcQAPAdAAAiQAAAxgaAoQgbAogyAXQgxAXhAAAQhHAAgugWgAhehmQAMgvACgYQBYAAAtgCIAugBQAbgCARgKQALgGAFgNQAGgPgHgKQgEgGgHgFIAGABIAUAHIAIAGIAAAAQAMALAAASIAAABQAAAUgSAMQgRAMgeAAIi1AAIgSBUQgTAMgPASg");
	this.shape_17.setTransform(-0.025,0.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiCDtQgygYgVggQgXgjABgaQgBgVAVgTIAAAAQASgQAcAAQAeAAAUASIACACIAOAVIABAAQAGAKAFAGQARAQAbACIABAAQAYACAUgSQAVgRAFgYQABgIgDgKIABABQgEgKgFgHQgXgcguAKQhCAUgeAAQgcAAgUgQIABAAQgYgSAAgYIABgDIAliyQAHgkAVgQQAUgSArAAIDOAAQAvAAAUAUIABABQAPAOAAAYIAAAAIAAABQABAcgZARQgUAOgkABIioAAIgLAwQBBgUA7AOIABAAIAWAGIACAAIABABQAlANAbAWQAdAZAQAeQAQAgAAAmQAAA1gdAsQgcArg2AaQg0AYhEAAQhLAAgwgXgAjBBbQgPANAAAQQAAAXATAdQAUAdAtAWQAuAWBHAAQBAAAAxgXQAygYAbgoQAagoAAgwQAAgigPgeQgOgbgagWQgagVgigMIgCAAIgWgHQhDgPhKAeIAAgCIAShVIC1AAQAeAAARgLQASgMAAgVIAAgBQAAgSgMgKIAAgBQgQgPgoAAIjOAAQgkAAgSAPQgQANgGAfIgmCxQAAARASANQAQANAWAAQAdAABAgUQA4gMAcAkQAHAIAEANQAEAOgCALQgGAdgaAVQgZAWgegCQghgDgVgVQgFgGgIgMIgOgUQgQgPgYAAQgWAAgOANg");
	this.shape_18.setTransform(-0.0256,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiJD6Qg2gZgXglQgZglABgeIAAgBQgBgcAagYIACgBQALgJAPgFIgKgHIgBAAQgegXABgeIAAgBIABgFIAAgBIAliyQAJgqAYgSQAXgWAyAAIDOAAQA3AAAWAYIAAAAIACACQATARAAAfIAAABQABAigdAVIgCADQgYAQgpABIicAAIgDAMQA3gMA1AMIABAAIAWAHIABAAIACABIAAgBIABABIAAAAQAnAOAeAYQAgAaAQAjIABACQARAhAAAoQAAA6gfAvQgfAvg6AbIgBABQg2AZhHAAQhPAAgzgZgAjfB4QgBAaAXAjQAVAgAyAYQAwAXBLAAQBEAAA0gYQA2gaAcgrQAdgsAAg1QAAgmgQggQgQgegdgZQgbgWglgNIgBgBIgCAAIgWgGIgBAAQg7gOhBAUIALgwICoAAQAkgBAUgOQAZgRgBgcIAAgBIAAAAQAAgYgPgOIgBgBQgUgUgvAAIjOAAQgrAAgUASQgVAQgHAkIglCyIgBADQAAAYAYASIgBAAQAUAQAcAAQAeAABCgUQAugKAXAcQAFAHAEAKIgBgBQADAKgBAIQgFAYgVARQgUASgYgCIgBAAQgbgCgRgQQgFgGgGgKIgBAAIgOgVIgCgCQgUgSgeAAQgcAAgSAQIAAAAQgVATABAVgAgoAsQgpANgbAFIALAIIABABIADAEIAAAAIAOAVIABABIAJANIABABQANAMAVABIABAAQARABAPgLIABgCQARgOAEgTQABgFgCgGIgBgBQgBgFgDgEIAAAAQgOgQgXAAQgIAAgKACgAgWCyQAAgDADgBQAogKAXgZQAbgdgFgoQgDgmgbgWQgagUgnAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABgBQAtgHAgAYQAiAbgEAuQgDApgbAdQgcAcgoAFIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBgAilglIABgIQABgDAEgBIABAAQAFAAgBAEIgBAGQgBAEgEABIgCAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBgAifhCQACgXAHgfIAOg0QAFgTAIgMQAIgLARgLQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgPARQgGAJgEAMIgNA3IgHAgQgEATgGALQgBAEgEAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBg");
	this.shape_19.setTransform(-0.0269,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED4A7B").s().p("Ag9DvQhmgbgfhjQgghmAdhnQANgvAggjQBChKBmAAQBSAAA+A0QAbAYAAAiQAAAZgYAKQg1ATgcgwQgSgfgkgHQg7gFgiAxIgTA+IgDAXIgBACIAZgNQBWgvBgApQAuAUAaArQAeAygMA4QgQBLhFAjQg4Acg7AAQgiAAgkgKgAjDAEQgBA5ASA2QATA1AvAPIAAgBQhKhJAChrQAChhA2hOQhCBJgBBogAgqBcQAIAyAqgCQAYABAOgSQAQgVgIgZQgKgigkAAQgwACgCAvgAg6giQgVAPgKATQA+g9BjARIAEgFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgZgHgXAAQgtAAgoAcgABcgsQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAABABQACABADAAQADAAACgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgCgCgDAAQgDAAgCACg");
	this.shape_20.setTransform(-0.0034,-0.0089);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhBD+QhvgdghhrQghhrAehrQAOgzAjglQBGhPBtAAQBXAABCA4IAAAAQAgAcAAApQAAAjghAOQhBAYgjg8QgOgYgbgGQgygEgdApIgQA0QBbgxBlArQAzAWAdAwQAgA2gNA+QgSBShLAmQg6Aeg/AAQgkAAgmgKgAiYiuQggAjgOAvQgcBnAfBmQAfBjBmAbQBhAbBYgtQBFgjAQhLQAMg4gdgyQgagrgvgUQhfgphXAvIgYANIAAgCIADgXIAUg+QAhgxA8AFQAkAHARAfQAcAwA1gTQAYgKAAgZQAAgigbgYQg9g0hSAAQhmAAhCBKgAgrBcQADgvAvgCQAkAAALAiQAIAZgQAVQgOASgYgBIgEAAQgnAAgIgwgAAJB9QAPABAKgMIAAAAQALgPgFgSQgIgXgYAAIgBAAQggACgDAgQAHAiAcgBIACAAg");
	this.shape_21.setTransform(0.0145,-0.0058);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhFEMQh2gfgkhzQgWhGAFhGQAAgEACgDQgCgEABgEQADghAJgiQAPg1AkgnIABgCQArgvA4gVIABAAQAqgQAxAAQBdAABGA7IACADQAjAgAAAuQAAAugrARIgCABIgMADQASAMAQARQAEAEAAAHIAEABIAFAEIALAQIABADQAiA6gOBCIAAAAQgTBahSApIgEABQg8AehAAAQgmAAgogLgAiji4QgjAlgOAzQgeBrAhBrQAhBrBvAdQBmAcBdgwQBLgmAShSQANg+ggg2QgdgwgzgWQhlgrhbAxIAQg0QAdgpAyAEQAbAGAOAYQAjA8BBgYQAhgOAAgjQAAgpgggcIAAAAQhCg4hXAAQhtAAhGBPgAgmhwIgGASQA0gTA3AIIgIgMIAAgCQgLgRgUgEIgIAAQghAAgVAcgAiyBzQgTg2ABg5QAChoBChJQg2BOgCBhQgCBrBJBJIAAABQgvgPgSg1gAAJB9IgCAAQgcABgHgiQADggAggCIABAAQAYAAAIAXQAFASgLAPIAAAAQgJALgOAAIgCAAgAgMBcQAEARAPABIACAAQAIAAAFgFQAGgJgDgKQgEgNgNAAIAAAAQgSABgCASgAg7giQA8gqBJAVQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgEAFQhjgRg9A9QAKgTAUgPgABbgkQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQACgCADAAQADAAADACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDABgDAAQgDAAgCgBg");
	this.shape_22.setTransform(0.0152,-0.0039);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#25AAB3").s().p("Ah5DmQgQgPAAgeQAAgWAKgkQAMgmAXgwQAYgvAlg2QAdgrArgvIAEgEQADgEADgCQABgEAKgJQAEgDgTAAIgzgCQhDgCgOABQhDACgCghQAAgHABgHIADgFIABAAIAGgGIAJgFIAGgCIDuAAQASAAANACQALAJABAJQAIAhgZAgIgsA0QgbAfgPAWQgsBDgOA5IgZBhQgXA7gsAGQgKABgIgCIAJAFIAJAFQgMgEgJgJgAAbhlQg3AwgsBTQgXAsgKAdQgQAuADAhQABAGAFgDQAEgBABgEQALhLAnhKQAeg4A4hKIAAgCIgBAAIgBAAgAhojlQgWACgOARQAAABAAAAQAAAAAAAAQAAABAAgBQABAAAAAAQAPgOAgAAIA0ACIA6AAIA8ABQADABABgEQAAgBAAgBQAAAAAAgBQAAAAgBAAQgBAAAAAAQg3gEhVABIgaAAIgSAAg");
	this.shape_23.setTransform(-1.3593,-0.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1DB5BC").s().p("AhxDwIgBAAIgJgEIgJgGQAIADAKgCQAsgGAXg7IAZhhQAPg5ArhCQAPgWAbgfIAsg0QAZgggIghQgBgJgLgJQARACAKAGQAVAMAAAaQAAAQgWAYIgtAxQgbAdgZAlQgbAogVA4QgIAUgEAUIgJAsIgIApQgJAjgRAOQgQAPgdAAgAAaiYIADgDQgBABgJgBIgMgBIhZAAQghAAgMgCQgagGgNgRQgHgKgBgNIAAgDIABAAIAGgUQgBAIAAAHQACAhBDgDQAOAABDACIAzACQATAAgEACQgKAKgBADQgDACgDAEIgEAFg");
	this.shape_24.setTransform(0.025,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AheEDIgUgDIgEAAQgQgGgLgKQgVgTAAglQAAgYALgmIAAgBQAMgnAYgxQAYgwAmg3QAXgiAfgjIhPAAQgjgBgNgCQgggHgPgVIgBgBQgKgPgBgQIAAgFIACgFIAGgSIACgEIAEgFIABgBIAAgBIABAAIAGgGIACgBQAKgIADAAIAGgBIAEgBIDuAAQATAAAPACQAUADAMAHQAbAPABAkQABAUgaAeIguAyIAAgBQgaAcgYAlQgaAlgVA3QgIAUgFAUIgIApIgHAqIgBABQgKAngUASQgUARgjAAIgCAAgAAaiXIABAAQgrAugdAsQglA2gYAvQgXAvgMAnQgKAkAAAWQAAAdAQAQQAJAJAMADIABAAIAVAEQAdAAAQgPQARgOAJgjIAIgpIAJgsQAEgUAIgUQAVg4AbgoQAZglAbgdIAtgxQAWgYAAgQQAAgagVgMQgKgGgRgCQgNgDgSAAIjuAAIgGADIgJAEIgGAHIgBAAIgDAEIgGAUIgBAAIAAADQABANAHAKQANARAaAGQAMACAhAAIBZAAIAMABQAJABABgBg");
	this.shape_25.setTransform(0.0269,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhcESIgFAAIABAAIgSgCIgJgCQgSgGgOgNIAAAAQgagWAAgtIAAAAQgBgZAMgpIACgDQAMgoAXgwQAZgyAmg3QAQgXATgXIgwAAQgjgBgOgDIgCAAQgkgIgSgXIAAgBIgCgCQgNgSgBgWIAAgFQAAgGADgEIAGgTIAAAAIADgGIAFgHIADgDIABgBIAFgEIAEgEIAAAAQAPgKAFAAIAEgBIgBAAIAJgCIDuAAQAUABAQACQAYADAOAKIABABQAhATABAqIAAABQACAYgfAkIgvAyIgBABQgYAbgXAiQgZAkgUA1QgHATgFASIAAABIgJApIgIAqIAAACIAAABQgLAsgXAUIAAgBQgXAWgqgBgAiSkBIgGABQgDAAgKAIIgCABIgGAGIgBAAIAAABIgBABIgEAFIgCAEIgGASIgCAFIAAAFQABAQAKAPIABABQAPAVAgAHQANACAjABIBPAAQgfAjgXAiQgmA3gYAwQgYAxgMAnIAAABQgLAmAAAYQAAAlAVATQALAKAQAGIAEAAIAUADIACAAQAjAAAUgRQAUgSAKgnIABgBIAHgqIAIgpQAFgUAIgUQAVg3AaglQAYglAagcIAAABIAugyQAagegBgUQgBgkgbgPQgMgHgUgDQgPgCgTAAIjuAAIgEABgAiEC1QgDgiAQgtQAKgeAXgrQAshUA3gwQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAACQg4BLgeA4QgnBKgLBKQgBAFgEABIgDABQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAgBgAiajTQAOgRAWgCQAOgCAeACQBVgBA3ADQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBAEgDAAIg8gBIg6AAIg0gDQggABgPANIgBABIAAgBg");
	this.shape_26.setTransform(0.0342,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3A7C3").s().p("AhwDlQgwgTgZgjQgZgjAAgqQAAhUBYgiQhFghAAhAQAAgiAXgfQAXgeArgSQApgRA6AAQAuAAAlAKIAVAHIABAAIAnAVQAZATAMAXQANAYAAAaQAAAigWAbQgQAUgeAQQAXAIASAOQAYASALAYQAMAYAAAdQAAArgZAjQgaAjgvATQgvAThBAAQhCAAgvgTgAiwCRQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQADAHACABQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBgBAAIgFgHIgBAAIgCABgAhFBnQAAAQAJAMQAJALAQAHQAPAHAUAAQALAAAKgCIgBAAIAQgFQAQgHAJgMQAJgMAAgQQAAgPgJgMQgJgMgQgGQgQgGgVAAQgeAAgTAOIgHAGIgFAHIAAAAQgHAKAAAPgAirAoQglAsAYAzQABABAAAAQABABAAAAQABAAAAAAQABAAABgBQADgCAAgDQgGgdAEgWQAGgYATgVQATgUA0gZIgBgBQg4ANggAmgAiPiyQgTAZgCAfQgCAfARAWQATAZAmADQADABACgEQACgDgDgCQgkgVgHgHQgUgTABgdQABgZATgZQAQgUAYgRIABgBIgBgBQggAJgVAbgAgniHQgJAIgDAKQgCAGAAAHQAAARAOALQAPAMAYAAQAMAAAKgDQAJgDAHgGQAHgFAEgHQADgHAAgKQAAgMgGgJQgGgJgNgGQgMgGgPAAQgZAAgOAMg");
	this.shape_27.setTransform(0.025,-0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah2DzQg0gVgbgmQgcgnAAgvQgBhQBIgnQg0gkAAg8QAAgnAagjIAAAAQAaghAugTQAsgTA9AAQAwAAAnAKIAXAIIACABIAnAVIACABQAcAVAOAaQAOAcAAAdQAAAngZAfQgKANgQAMQAKAGAJAHQAaAUANAbQANAbAAAgQAAAwgbAnIgBAAQgdAngzAUIABAAQgyAUhEAAQhFAAgygUgAhmjmQgrASgXAeQgXAfAAAiQAABABFAhQhYAiAABUQAAAqAZAjQAZAjAwATQAvATBCAAQBBAAAvgTQAvgTAagjQAZgjAAgrQAAgdgMgYQgLgYgYgSQgSgOgXgIQAegQAQgUQAWgbAAgiQAAgagNgYQgMgXgZgTIgngVIgBAAIgVgHQglgKguAAQg6AAgpARgAgjCVQgQgHgJgLQgJgMAAgQQAAgPAHgKIAAAAIAFgHIAHgGQATgOAeAAQAVAAAQAGQAQAGAJAMQAJAMAAAPQAAAQgJAMQgJAMgQAHIgQAFIABAAQgKACgLAAQgUAAgPgHgAgoBMIgGAGIgDAEIgBABQgEAHAAAJQAAALAGAIQAHAIAMAGQANAFAQAAIAQgBIACgBIAMgDQAMgGAHgJQAGgIAAgLQAAgKgFgHIgBgBQgGgJgMgDIgBgBQgOgFgRAAQgYAAgPAKgAgnhMQgOgLAAgRQAAgHACgGQADgKAJgIQAOgMAZAAQAPAAAMAGQANAGAGAJQAGAJAAAMQAAAKgDAHQgEAHgHAFQgHAGgJADQgKADgMAAQgYAAgPgMgAgeh7IABAAQgGAEgCAHQgBADAAAFQAAAKAIAGIABABQALAIASAAQAJAAAIgCIAAAAQAHgDAGgEIgBAAQAEgDADgEIgBAAQACgEAAgGQAAgHgDgFIgBgBQgEgGgIgEQgKgEgLAAQgTAAgLAJg");
	this.shape_28.setTransform(0.0248,-0.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah7EBIgBAAIAAgBQg5gWgdgpQgRgZgIgbQgBgFACgEQgEgDAAgFQgCgNAAgNQgBhOA9grQgpglAAg5QAAgsAcgnIACgCQAcgjAxgUQAugUBBAAQAzAAAoALIAYAIIABAAIADACIAnAVIAEACQAfAYAPAcQAQAfAAAhQAAAsgcAjIAAAAIgNAPIADACIACACQAaAUAOAcIABACQAPAeAAAkQAAAOgCANQgBAFgDADQACAEgBAFQgIAbgRAZIgBAAQgfAqg3AWIgDABQgzAUhFAAQhIAAg0gVgAhsjzQguATgaAhIAAAAQgaAjAAAnQAAA8A0AkQhIAnABBQQAAAvAcAnQAbAmA0AVQAyAUBFAAQBEAAAygUIgBAAQAzgUAdgnIABAAQAbgnAAgwQAAgggNgbQgNgbgagUQgJgHgKgGQAQgMAKgNQAZgfAAgnQAAgdgOgcQgOgagcgVIgCgBIgngVIgCgBIgXgIQgngKgwAAQg9AAgsATgAisCcQgCgBgDgHQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAIAFAHQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIgCABIgCAAgAgdCIQgMgGgHgIQgGgIAAgLQAAgJAEgHIABgBIADgEIAGgGQAPgKAYAAQARAAAOAFIABABQAMADAGAJIABABQAFAHAAAKQAAALgGAIQgHAJgMAGIgMADIgCABIgQABQgQAAgNgFgAglBfIgBAAIgBAIIAAAAQAAAGADAEIADAEIAFACIAFADIAAAAQAKAEANAAIAMgBIADgBIAJgCIAGgDIAFgCQAAgDACgCIABAAQACgEAAgFIAAgBQAAgEgCgDIgBgCQgEgEgGgDIAAAAIgBAAIgBgBQgMgEgOAAQgSAAgMAIIgFAEIAAAAIgBABIAAAAgAi4CHQgYgzAlgsQAggmA4gNIABABQg0AZgTAUQgTAVgGAYQgEAWAGAdQAAADgDACIgCABQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAhcgpQgmgDgTgZQgRgWACgfQACgfATgZQAVgbAggJIABABIgBABQgYARgQAUQgTAZgBAZQgBAdAUATQAHAHAkAVQADACgCADQgBADgDAAIgBAAgAgdhXIgBgBQgIgGAAgKQAAgFABgDQACgHAGgEIgBAAQALgJATAAQALAAAKAEQAIAEAEAGIABABQADAFAAAHQAAAGgCAEIABAAQgDAEgEADIABAAQgGAEgHADIAAAAQgIACgJAAQgSAAgLgIgAgUhwIgDAEIAAAEQAAADACABIABABQAIAFAMAAQAGAAAGgCIACAAIADAAIAAAAIACgCIACgCIAAABIABgCIAAgEIAAgDIgBgBIAAAAQgCgDgFgCQgHgDgHAAQgMAAgIAFg");
	this.shape_29.setTransform(0.0248,-0.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EB493D").s().p("AhsDnQgogQgUgZQgVgaAAgYQAAgRAOgMQAPgNAVAAQATAAAPAJQAKAGAQASQAQASALAFQAdAOAfgHQAlgHAXgqQAIgRAGgTQAHgfgBgHQgWATgZAJQghANgoAAQglAAgigMQgigMgYgWQgZgWgMgdQgNgcAAghQAAgQADgPIAAABIABgIIACgFQADgMAFgMQAPgeAcgYQAagVAmgOQAlgMAuAAQA0AAAoAQQAqAQAbAdQAcAeAPAtQAPAtAAA4QAAA/gPAwQgQAvgeAjQgfAhgqAPQgqARg0AAQg0AAgogRgAhwCHQAOAMAYAXQANAKATAEQASADAQgDQABgBAAAAQABgBAAAAQAAgBAAAAQAAAAgBAAQgtgEgWgSQgHgFgKgOQgLgNgHgGQgLgJgPABQgPAAgJALQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAHgFAIAAQAOAAAQANgAiMAIQgBABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQgBAEAEADIAHAEQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgIgHIgCgCIgBAAgAiyiCQgaA5AsBAQABABAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgXg3AKgwQALg3AygcQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgqAJgcA9gAhHiCQgWATAAAgIABAKQADAXASAPQAWASAhAAIABAAQATAAAUgHQATgIALgOQAMgOAAgTQAAgRgGgMQgGgNgMgLQgMgKgOgFQgQgFgSAAQggAAgVASg");
	this.shape_30.setTransform(0.025,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhxD2QgsgUgWgaQgaggABgcQgBgXAUgRIABgBQASgPAbAAQAXAAATAKIAAAAQALAHATAUQAMAPAKAEIgBAAQAZANAagGQAfgHATgkQAHgOAFgRIABgDQgLAGgLAEIABAAQgkAOgrAAQgnABglgOQglgNgagYIAAAAQgbgZgOgfIAAABQgOgfAAglQAAgQACgOIABgDIACgIIAAAAIACgHIgBABQAEgNAGgMIAAgBQAQgiAegZQAcgXApgOIABAAQAngOAwAAQA3AAAqAQQAuASAdAgQAeAhARAwQAPAuAAA7QAABCgQAxQgQAzghAlIAAAAQgiAkgtARQgsARg3AAQg3AAgqgRgAivBvQgOAMAAARQAAAYAVAaQAUAZAoAQQAoARA0AAQA0AAAqgRQAqgPAfghQAegjAQgvQAPgwAAg/QAAg4gPgtQgPgtgcgeQgbgdgqgQQgogQg0AAQguAAglAMQgmAOgaAVQgcAYgPAeQgFAMgDAMIgCAFIgBAIIAAgBQgDAPAAAQQAAAhANAcQAMAdAZAWQAYAWAiAMQAiAMAlAAQAoAAAhgNQAZgJAWgTQABAHgHAfQgGATgIARQgXAqglAHQgfAHgdgOQgLgFgQgSQgQgSgKgGQgPgJgTAAQgVAAgPANgAgQgNQghAAgWgSQgSgPgDgXIgBgKQAAggAWgTQAVgSAgAAQASAAAQAFQAOAFAMAKQAMALAGANQAGAMAAARQAAATgMAOQgLAOgTAIQgUAHgTAAgAgQgcIABAAQAQABARgHQAPgGAKgLIAAgBQAIgKAAgNQAAgNgFgJIAAgCQgEgJgKgIQgJgJgMgEIAAAAQgNgEgQAAQgaAAgRAOQgRAOAAAYIABALIAAABQADAQANALIgBAAQASAOAcAAg");
	this.shape_31.setTransform(0.025,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ah3EDQgwgVgYgdQgdgjABgiIAAAAQgBgeAZgWIACgCQAOgLASgEIgUgPIAAgBQgegbgPghIAAgDQgPghAAgmQAAgQACgPIABgGIACgIIABABIAAgFIABgCQAEgOAGgOIABgCQASgkAggaQAdgZAsgQIACgBQApgNAyAAQA6AAAtASIACABQAwASAeAiIAAgBQAhAjARAzQAQAyAAA9QAAAlgFAfQAAAEgDAEQACAEgBAEQgEATgGARQgRA1gjAoIAAAAIgBAAQgjAmguARIgCABQgvATg6AAQg6AAgtgTgAi4BjIgBABQgUARABAXQgBAcAaAgQAWAaAsAUQAqARA3AAQA3AAAsgRQAtgRAigkIAAAAQAhglAQgzQAQgxAAhCQAAg7gPguQgRgwgeghQgdgggugSQgqgQg3AAQgwAAgnAOIgBAAQgpAOgcAXQgeAZgQAiIAAABQgGAMgEANIABgBIgCAHIAAAAIgCAIIgBADQgCAOAAAQQAAAlAOAfIAAgBQAOAfAbAZIAAAAQAaAYAlANQAlAOAngBQArAAAkgOIgBAAQALgEALgGIgBADQgFARgHAOQgTAkgfAHQgaAGgZgNIABAAQgKgEgMgPQgTgUgLgHIAAAAQgTgKgXAAQgbAAgSAPgAg4BvQAKAMAIAFIAAAAQAUAJAUgFQAYgGAPgcQgiAMgnAAQgNAAgOgCIADADgAgqC4QgTgEgNgKQgYgXgOgMQgagVgTANQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAJgLAPAAQAPgBALAJQAHAGALANQAKAOAHAFQAWASAtAEQABAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABQgIACgJAAIgRgCgAiFAXIgHgEQgEgDABgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAIAHQABABAAAAQAAABAAAAQAAABAAAAQgBABAAABIgDABIgBAAgAiggJQgshAAag5QAcg9AqgJQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgyAcgLA3QgKAwAXA3QAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgBgBgAgQgcQgcAAgSgOIABAAQgNgLgDgQIAAgBIgBgLQAAgYARgOQARgOAaAAQAQAAANAEIAAAAQAMAEAJAJQAKAIAEAJIAAACQAFAJAAANQAAANgIAKIAAABQgKALgPAGQgRAHgQgBgAg/hTIABALIAAAAIAAACQACAKAIAGIACACQAOAKAUAAIABAAQAPAAANgGQALgFAHgHIABgCQAEgFAAgIIAAAAQAAgJgDgHIgBgBIAAgBIAAgBIAAACQgDgHgGgGQgIgGgJgDIgBgBQgLgDgMgBQgUAAgOAMIAAgBQgKAKgBAPg");
	this.shape_32.setTransform(0.025,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AisEKIgBAAIgBAAIgQgCIgBAAIgJgCIgHgDIgBgBQgHgDgGgFIgBgBIgDgCIAAgBIgDgCQgSgTAAghIAAj8IgIAEIgGADQgVAKgMACIAAABQgWAEgSgGQgVgIgLgTIABAAQgSgcAUggIADgDIADgDIADgCIABAAIACgBIAKgEIA8ggQAbgTATgWIACgDIAFgEIAAgBIACgCIACgDIAMgNIAHgGIABgBQALgMAcAAQAfAAATAVQASATAAAgIAAFvQAABXhKAAIgCAAgAjnDAQAAAdAQAPIABAAIABABIABABQAEAEAGADIAGACIAAAAIABABIADABIADAAIABAAIAPACIABAAQA9AAAAhIIAAlvQAAgagOgPQgPgQgYAAQgVAAgIAIIAAAAIgBAAIgGAGIgMANIAAABIgEAEIgBABIgGAGQgUAYgdAVIg+AhIgMAEIgBABIgDACQgOAYAMAUQAIAPAQAFQAPAFARgDQAKgDATgJIAGgDIAMgGIACgBIABAAIACgBIADgCIAKgGgAAiDmQg0gfgbg2IAAgBQgPgfgFgiIAAgCQgGghAAgnQAAgzAHgmQAGgpAPggIAAgBQAZg0AzgcQAxgbBCAAQAtAAAkAMQAlAMAcAXQAbAXAUAjIAAAAQAhA5AABnQAAA4gIAnQgJApgYAkIAAABQgfArgvAWIABAAQguAXg6AAQhCAAg0gfgAAojhQguAagYAwQgOAfgGAmQgGAlAAAyQAAAlAFAgIABADQAFAfANAeQAZAyAwAdQAxAdA+AAQA2AAArgWQArgUAdgoQAWgiAIgmQAIgmAAg2QAAhigfg3QgSgggagVQgZgVgjgMQghgLgrAAQg+AAguAZgABjBDQgTgKgHgTQgJgVAAgfQAAgcAHgUIAAABIADgHIADgGIADgEIADgFQASgVAxAAQAjAAASAJQATAKAHATQAJAUAAAfQAAAhgIATIAAAAQgFALgIAIIgDADIAAAAIgKAHQgTALgiAAQghAAgTgKgACXA+QAdAAAQgJIABAAIAGgEIAFgEQAFgGADgHIAAgBQAHgRAAgdQAAgcgHgRIgBgBQgFgNgOgHIABAAQgRgIgeAAQgoAAgPAPIAAABIgCADIgDAEIAAAAIgCAEIAAAAIgDAGIgBACQgFARAAAXQAAAbAIATQAFAOAOAIIAAAAQAQAIAdAAg");
	this.shape_33.setTransform(0.0237,-0.0244);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#653072").s().p("AitD7IgPgCIgBAAIgDAAIgDgBIgBgBIAAAAIgHgDQARACAPgKQALgHAHgRQAEgKADgUQAFgZABgkIAAg+IgCh/QACgngBgTQAAghgHgXQgPgwgxAMIAMgNIADgDIADgDIABAAIAAAAQAIgIAVAAQAYAAAPAQQAOAPAAAaIAAFvQAABIg9AAgAApDZQgwgdgZgyQgNgegFgfIgBgDQAWA0AiAgQAnAkA0AGQAiAFAlgHQAngHAbgSQAhgWARglQANgbAIgxQAOhUgPhCQgUhVhFgaQhEgbhTAVQgSAFgVAJIAQgKQAugZA+AAQArAAAhALQAjAMAZAVQAaAVASAgQAfA3AABiQAAA2gIAmQgIAmgWAiQgdAogrAUQgrAWg2AAQg+AAgxgdgADWA7IADgDQAIgIAFgLIAAAAQAIgTAAghQAAgfgJgUQgHgTgTgKQgSgJgjAAQgxAAgSAVIgDAFIgDAEIgDAGIgDAHIAAgBQACgYAIgNQAOgZAogIQAagFAcAKQAaAKASAVQAZAdgGA2QgHA1gfATgAlIg5QgQgFgIgPQgMgUAOgYIADgCIABgBIAAABIgCAHIAEATIACACIAAAAIACACIADADIACACQAXASArgTQAYgKAqgeQgYAjgEAIIgKAGIgFADIgBAAIgCABIgMAGIgGADQgTAJgKADIgOABQgJAAgJgDg");
	this.shape_34.setTransform(0.0356,-0.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#89559F").s().p("Ai3DxQgGgDgEgEIgBgBIgBgBIgBAAQgQgPAAgdIAAkWQAEgIAYgjQgqAegYAKQgrATgXgSIgCgCIgDgDIgCgCIAAAAIgCgCIgEgTIACgHIAAgBIAMgEIA+ghQAdgVAUgYIAGgGIABgBIAEgEIAAgBQAxgMAPAwQAHAXAAAhQABATgCAnIACB/IAAA+QgBAkgFAZQgDAUgEAKQgHARgLAHQgPAKgRgCIAHADgAjCgzIgBABIgCBWQgBAzACAjQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAIACg1IAAg1IAAghQgBgUgEgNIgBAAIAAAAgAkfiAIgJADQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAJgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIAAAAgAjAjEQgYAWgNAKQggAZgKAFIgBACQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQALgDAMgIIAWgOQAdgVAJgOQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgCgCIgCABgABzDEQg0gGgngkQgigggWg0QgFggAAglQAAgyAGglQAGgmAOgfQAXgwAvgaIgQAKQAVgJASgFQBTgVBEAbQBFAaAUBVQAPBCgOBUQgIAxgNAbQgRAlghAWQgbASgnAHQgWAEgVAAQgOAAgOgCgAgMAsQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgDAHACAPQABAMAEAFQACADAEgCQAEgDgBgDIgEgMIAAgFIAAgJQAAgGgCgEIgCgBIgCAAgACaiIQgoAIgOAZQgIANgCAYQgHAUAAAcQAAAfAJAVQAHATATAKQATAKAhAAQAiAAATgLIAKgHQAfgTAHg1QAGg2gZgdQgSgVgagKQgTgHgSAAQgJAAgIACgACEjgQhUARgoBHQglBCAMBXQABAEAEgCQADgBABgEIAGhNQAEguAQgeQAgg5BRgZIACgCIgBgBIAAAAgAjehUIgDACIgCABgAivjxIgDADIgDADIAGgGg");
	this.shape_35.setTransform(-1.8621,0.3858);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AisEZIgDAAIgBAAIgPgCIgDAAIgLgDIgCgBIgBgBIgDgBIAAAAIAAAAIgBAAIgDgBQgIgEgHgGIgCgCIABABIgEgDIABAAIgCgBIgCgCIAAAAQgXgXAAgoIAAjkQgRAHgLADIAAAAIgBAAQgaAGgWgIQgbgKgNgYIgBgCQgUgiAYgmIAAgBIAGgHIABAAIACgCIAFgEIABAAIABgBIABAAIADgBIAAAAIAIgDIA6gfQAZgSASgVIABAAIACgDIABgBIADgDIAEgEIABgCIAMgNIAIgIIAAAAQAOgQAkAAQAmAAAXAZQAWAXAAAnIAABvIACgKQAGgqAQgjIAAAAIAAgBQAbg2A1gfIACgBQA0gdBHAAQAwAAAmANQAoANAdAZQAeAYAVAlIABACQAiA7AABrQAAA6gJAoQgIAsgaAmIAAABIgBAAQggAugxAXIgCABQgxAZg9AAQhFAAg3gfIgCgCQg4ghgdg7IAAgBQgPgggFgjIgBgEIgBgCIAABmQAAAzgWAZQgXAagsAAIgCAAgAj2DAQAAAhASATIADACIAAABIADACIABABQAGAFAHADIABABIAHADIAJACIABAAIAQACIABAAIABAAQBMABAAhYIAAlvQAAgggSgTQgTgVgfAAQgcAAgLAMIgBABIgHAGIgMANIgCADIgCACIAAABIgFAEIgCADQgTAWgbATIg8AgIgKAEIgCABIgBAAIgDACIgDADIgDADQgUAgASAcIgBAAQALATAVAIQASAGAWgEIAAgBQAMgCAVgKIAGgDIAIgEgAAhjuQgzAcgZA0IAAABQgPAggGApQgHAmAAAzQAAAnAGAhIAAACQAFAiAPAfIAAABQAbA2A0AfQA0AfBCAAQA6AAAugXIgBAAQAvgWAfgrIAAgBQAYgkAJgpQAIgnAAg4QAAhnghg5IAAAAQgUgjgbgXQgcgXglgMQgkgMgtAAQhCAAgxAbgAjXB+QgCgjABgzIAChWIABgBIABAAQAEANABAUIAAAhIAAA1IgCA1QAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABIgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBgAgeBaQgEgFgBgMQgCgPADgHQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQACAEAAAGIAAAJIAAAFIAEAMQABADgEADIgDABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBgABqA2IAAAAQgOgIgFgOQgIgTAAgbQAAgXAFgRIABgCIADgGIAAAAIACgEIAAAAIADgEIACgDIAAgBQAPgPAoAAQAeAAARAIIgBAAQAOAHAFANIABABQAHARAAAcQAAAdgHARIAAABQgDAHgFAGIgFAEIgGAEIgBAAQgQAJgdAAQgdAAgQgIgABqg/IgBAAIAAABIgCAEIgBABIAAABIgBABIAAAAIgCAFIgBACQgEAPAAATQAAAYAHARIAAABQAEAIAIAEIAAAAQAOAHAYAAQAYAAAOgHIABAAIADgCIAFgEIAAgBIADgFIABgCQAGgQAAgZQAAgXgGgQIAAAAIAAgBIgBAAQgDgJgJgEIAAAAQgOgGgZAAQggAAgMALgAgkAVQgMhXAmhCQAnhHBUgRQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgCACQhRAZgfA5QgQAegFAuIgGBNQgBAEgDABIgCABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgBgBAAgAk9h2QAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAJgDQABAAAAAAQABAAAAAAQAAAAABABQAAAAgBABQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgJACQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBgAkjiAIABgCQAKgFAggZQANgKAYgWQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgJAOgdAVIgWAOQgMAIgLADIAAAAIgCgBg");
	this.shape_36.setTransform(0.0028,-0.0245);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEC442").s().p("AA+D4IgEAAIgQgCQgNgEgJgJQgRgPAAgdIAAkVQgXAOgMAEQgQAJgNADQgRAEgPgFQgPgFgJgPQgMgVAOgXQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAvgSAbgUQAdgVAUgXIALgMIgBAAIATgUQAJgHAVAAQAYAAAOAPQAOAQAAAZIAAFwQAABHg8AAgAAVgxIgBABIgCBVQgBA0ACAjQAAAAABABQAAAAAAAAQABABAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQACgcAAhOQABgugGgTIgBAAIAAAAgAhHh/QgGACgDACQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABABQAAAAABAAIACgBIAGgCQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgBAAgAAXjCIgSAQIgRAQQgeAWgNAIIgBACQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQALgCAMgIIAWgPQAcgUAJgPQAAAAAAgBQABgBAAAAQAAgBgBAAQAAgBAAAAIgCgBIgDABg");
	this.shape_37.setTransform(0.0231,-0.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AA/EHIgBAAIgEAAIgCAAIgQgCIgCgBQgQgFgMgLIAAABQgVgTAAglIAAj7IgQAHQgRAJgOADIAAgBQgVAFgTgGIABAAQgVgHgMgUQgQgcATgfQAFgIAHgCQAsgRAagSQAbgUATgWIAAAAIAJgKIABgCIAUgVIAAAAQAMgLAcAAQAfAAASAUIAAAAQASAUAAAfIAAFwQAABWhJAAIgCAAgAADC9QAAAdARAPQAJAJANAEIAQACIAEAAIABAAQA8AAAAhHIAAlwQAAgZgOgQQgOgPgYAAQgVAAgJAHIgTAUIABAAIgLAMQgUAXgdAVQgbAUgvASQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAgBABQgOAXAMAVQAJAPAPAFQAPAFARgEQANgDAQgJQAMgEAXgOg");
	this.shape_38.setTransform(0.0165,-0.0244);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AA/EWIgBAAIgDAAIgBAAIgEAAIAAAAIgOgCIgEgBIgCAAQgSgGgNgLIgCgCQgbgWAAgtIAAjkQgPAIgOACIgCABQgYAFgVgIIgDgBQgYgJgNgXQgWgkAYgnIAAABQAIgPANgCQApgQAYgRQAagTATgVIAAAAIAJgKIABgCIAUgWIACgBQAOgOAiAAQAmAAAWAZIABAAQAWAXAAAmIAAFwQAAAygXAZQgWAagsAAIgCAAgAAnEEIACABIAQACIACAAIADAAIABAAQBMABAAhXIAAlwQAAgfgSgUIgBAAQgSgUgfAAQgcAAgLALIgBAAIgTAVIgCACIgJAKIAAAAQgSAWgcAUQgaASgsARQgHACgFAIQgTAfARAcQALAUAVAHIAAAAQASAGAWgFIgBABQAPgDARgJIAPgHIAAD7QAAAlAVATIAAgBQAMALARAFgAAUB8QgDgjACg0IABhVIABgBIABAAQAGATgBAuQAABOgCAcQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAgAhRh4QAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQADgCAGgCQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAIgHACIgCABQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAgAg3iCIABgCQAMgIAegWIASgQIASgQQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQgIAPgdAUIgVAPQgNAIgKACIgBAAIgBAAg");
	this.shape_39.setTransform(-0.008,-0.0245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{x:-0.008}},{t:this.shape_4,p:{x:0.0165}},{t:this.shape_3,p:{x:0.0231}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_5,p:{x:-27.408}},{t:this.shape_4,p:{x:-27.3835}},{t:this.shape_3,p:{x:-27.3769}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-28.1,81.6,56.2);


(lib.Tween3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAAQAAAGgEAFQgFAEgGAAQgFAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFg");
	this.shape_2.setTransform(-1.525,-1.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_3.setTransform(-1.525,-1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAoAAQAAARgMALQgLANgRAAQgQAAgMgNQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAALAMQAMAMAAAQg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180806").s().p("AgcAcQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAAMALQALAMABAQQgBARgLALQgMANgRAAQgQAAgMgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10.1,10.1);


(lib.Tween2copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,248,195,0.298)").s().p("AgOBEQgEgCABgJIACgNQACgKgEgMQgEgMgHgHIgJgIQgGgGABgFQACgFAIgBIAOgCQAKgBAJgHQAKgIAEgJIAGgMQAEgHAFAAQAFAAAEAHIAEAJIAAAAIgFAZIAAgBIAAAFIgGAbQgIAlgKASIgGACIgLAGQgEACgDAAIgEgBg");
	this.shape.setTransform(-3.09,-0.0107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5A9IgBgDIAEADQADABAJgCQgFACgFABIgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAgAAUA8IgEgCIAMACQAGACACgHIgBAEQgCAEgGAAIgHgDgAA3gXQgBgDgFgBIgFgCIAHABQAIACAAADQABADgBACIgDAEIgHAIQAJgMgDgFgAg0geIAAgBIAHgDQAGgDAEgDIAJgOQAGgJAAABQAAAFgEAIQgGALgMAFIgJADIgBAAg");
	this.shape_1.setTransform(1.1833,0.6689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(224,214,191,0.298)").s().p("AAgAqIgTgJQgSgFgPAIIgLAGQgJAFgFgEQgFgDACgKIAAgBQACAFAEABQAFACAGgEIALgGQAJgEALAAQAMAAAJAEIALAGQAGAEAFgCQAEgBACgFIAAABQACAKgFADQgBABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAgFgDgAAxgMQAEgLAGgHIAKgJIAEgFQAEAGgIAIIgKAJQgLALgBARQgBgJADgKgAg6gVIgKgJQgIgIAEgGIAEAFIAKAJQAGAHAEALQADAKgBAJQgBgRgLgLg");
	this.shape_2.setTransform(-0.05,2.7516);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FDFD37","#FBBD2C","#FAA228","#FA9626"],[0.114,0.573,0.835,1],-1.3,-1.4,0,-1.3,-1.4,9.5).s().p("AAgBEIgLgGQgJgEgMAAQgLAAgJAEIgLAGQgJAFgFgEQgFgDACgKIACgNQACgKgEgLQgEgMgGgGIgKgIQgGgHABgGQACgFAKgCIAMgCQAKgBAKgHQAJgHAFgJIAGgMQAEgIAFAAQAGAAAFAIIAFAMQAEAJALAHQAJAHAJABIANACQAKACACAFQABAGgGAHIgKAIQgGAHgEALQgEAMACAJIACANQACAKgFADQgBABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAgFgDg");
	this.shape_3.setTransform(-0.05,0.0016);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FED64E").s().p("AAgBGIgMgGQgIgFgMAAQgLAAgIAFIgMAGQgFACgEAAQgEAAgDgDQgEgEACgJIACgNQACgJgEgLQgDgLgHgHIgKgIQgHgIACgGQADgGAKgCIAMgBQAKgCAJgHQAKgGAEgJIAFgMQAGgJAFAAQAHAAAFAJIAFAMQAFAIAJAHQAJAHAJACIAOABQAKACACAGQACAGgHAIIgKAIQgGAHgEALQgEALACAJIACANQACAJgEAEQgDADgFAAQgDAAgFgCg");
	this.shape_4.setTransform(-0.05,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED8A38").s().p("AAeBHIgLgGQgIgEgLAAQgKAAgHAEIgMAGQgGADgEAAQgFAAgEgEQgFgFACgKIACgNQACgIgEgLQgDgKgGgGIgKgIQgIgIADgIQACgIAMgCIANgCQAIgBAJgGQAJgHAEgHIAGgMQAFgLAHAAQAJAAAFALIAFAMQAEAHAJAHQAJAGAJABIANACQALACADAIQACAIgIAIIgKAIQgGAGgDAKQgEALACAIIACANQACAKgFAFQgDAEgGAAQgEAAgGgDg");
	this.shape_5.setTransform(-0.0014,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-7.3,15.4,14.7);


(lib.Tween1copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706255").s().p("ABUAdQgEgOgTgDIgNgCQgFgBgGgEQgHgFgCgEIgFgLQgIgQgPAAQgPAAgHAQIgFALQgDAEgGAFQgGAEgGABIgNACQgRADgFAOIgBAGIABgHQAFgPARgCIANgCQAFgBAHgFQAGgDADgFIAFgMQAIgRAOAAQAOAAAJARIAFAMQADAFAGADQAGAFAFABIANACQASACAFAPIABAHg");
	this.shape.setTransform(0.05,-4.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFEFD").s().p("AAYAJIgMgGQgGgDgGAAQgHAAgEADIgMAGQgIAEgGAAQgLAAgHgIQgFgIgBgJQABAJAFAFQAHAIALAAQAGAAAIgEIAMgFQADgCAIAAQAIAAAEACIAMAFQAHAEAHAAQAMAAAFgIQAGgEABgKQAAAKgHAHQgGAIgLAAQgHAAgHgEg");
	this.shape_1.setTransform(0.05,7.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1AC7F").s().p("AAYBOIgLgGQgEgCgJAAQgIAAgDACIgLAGQgIAEgHAAQgLAAgHgIQgHgKACgNIACgNQABgFgCgHQgCgHgEgEIgJgJQgOgMAFgOQAFgOASgDIAMgCQAGAAAGgFQAGgEADgFIAFgLIABgBIABgEQAAgDAHgFIACAAQAFgEAGAAQAHAAAGAEIACAAIAGAIIAAABIABACIAEAHIADAGQACAFAGAEQAGAFAGAAIAMACQATADAEAOQAEAPgMALIgJAJQgEADgDAIQgCAHABAFIACANQACAOgHAJQgGAIgLAAQgHAAgIgEgAATBBIALAGQAGADAEAAQAGAAADgEQAFgFgCgKIgCgNQgCgIAEgLQADgKAGgGIAKgIQAIgIgCgIQgDgIgLgCIgNgCQgJgBgJgGQgJgHgEgHIgFgMQgFgLgJAAQgHAAgFALIgGAMQgEAHgJAHQgJAGgIABIgNACQgMACgCAIQgDAIAIAIIAKAIQAGAGADAKQAEALgCAIIgCANQgCAKAFAFQAEAEAFAAQAEAAAGgDIAMgGQAHgEAKAAQALAAAIAEg");
	this.shape_2.setTransform(0.0219,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.4,17.1,16.9);


(lib.Tween1copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,248,195,0.298)").s().p("AgOBEQgEgCABgJIACgNQACgKgEgMQgEgMgHgHIgJgIQgGgGABgFQACgFAIgBIAOgCQAKgBAJgHQAKgIAEgJIAGgMQAEgHAFAAQAFAAAEAHIAEAJIAAAAIgFAZIAAgBIAAAFIgGAbQgIAlgKASIgGACIgLAGQgEACgDAAIgEgBg");
	this.shape.setTransform(-3.09,-0.0107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5A9IgBgDIAEADQADABAJgCQgFACgFABIgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAgAAUA8IgEgCIAMACQAGACACgHIgBAEQgCAEgGAAIgHgDgAA3gXQgBgDgFgBIgFgCIAHABQAIACAAADQABADgBACIgDAEIgHAIQAJgMgDgFgAg0geIAAgBIAHgDQAGgDAEgDIAJgOQAGgJAAABQAAAFgEAIQgGALgMAFIgJADIgBAAg");
	this.shape_1.setTransform(1.1833,0.6689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3333").s().p("AAeBHIgLgGQgIgEgLAAQgKAAgHAEIgMAGQgGADgEAAQgFAAgEgEQgFgFACgKIACgNQACgIgEgLQgDgKgGgGIgKgIQgIgIADgIQACgIAMgCIANgCQAIgBAJgGQAJgHAEgHIAGgMQAFgLAHAAQAJAAAFALIAFAMQAEAHAJAHQAJAGAJABIANACQALACADAIQACAIgIAIIgKAIQgGAGgDAKQgEALACAIIACANQACAKgFAFQgDAEgGAAQgEAAgGgDg");
	this.shape_2.setTransform(-0.0014,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-7.3,15.4,14.7);


(lib.Tween1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAAQAAAGgEAFQgFAEgGAAQgFAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFg");
	this.shape_2.setTransform(-1.525,-1.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_3.setTransform(-1.525,-1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAoAAQAAARgMALQgLANgRAAQgQAAgMgNQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAALAMQAMAMAAAQg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180806").s().p("AgcAcQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAAMALQALAMABAQQgBARgLALQgMANgRAAQgQAAgMgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10.1,10.1);


(lib.Symbol13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("btnnext");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.843)","rgba(255,255,255,0)"],[0,1],1.3,-2.1,3.4,-10).s().p("AF8A6IgFhDQgBgRAEgLQADgLAHgFQAGgEAHAAIARAEQAGAEAEALQADAKgBAaIgDA5IgBADgADEA6IgZgmQgJgPgGgOQgGgPABgKQAAgLAFgFQAGgGAJABQAIABAGAGIAPARIAdAtQAFAGAHAAIAFgDIAHgIIAgg1QAIgHAKgFQALgEAHAHQAJAHgCARIgHAWQgGAPgMATIgOAVIgFAKgAAyA6IgNgdIgFgEIgDAEIgGAMIgGARIgxAAIAmhYQAFgJAHgGQAFgFAIAAQAHgBAIAHQAKAJAGALIAjBMIACAGgAjkA6IABg5QABgWADgJQADgKAHgFQAHgGAJABQAIABAFAGQAFAHABAJIADBVgAmtA6IACghQABgXADgLQACgLAHgJQAHgIAKgDIAYgFIAXgCIBEAGQALADAHALIAKASIAFAYIABAPIgCATIgCAJgAlvADQgGACgDAFQgDAFAAAHIACAMQADAFADADIAUADIAmgBIAMgFIAGgGIADgLQgBgKgDgEQgEgDgGgCIgOgDIghAAg");
	this.shape_1.setTransform(0.3361,-6.7862);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFF00","#C06103"],[0,1],0,-1.9,0,9.6).s().p("AGCBzQgGgCgDgGIgFgQQgBgJACgKIAEgLIAIgHQAFgDAHgBIALAAQAGABAFADQAFADADAGIAEAKQACAOgDAJQgCAKgGAFIgKAGIgMACgAmgBtQgHgFgCgIQgCgIgBgNIgDgnIAChGQABgXADgMQACgLAHgJQAHgIAKgDIAYgFIAXgCIBEAGQALADAHALIAKASIAFAZIABAPIgCATIgFARIgKAOIgKAIIgPAFIhBACQgNABgEAFQgFAFgBAFIgBAWQgBARgCAHIgIALIgLAFIgBAAQgGAAgGgFgAlxg4QgGACgDAFQgDAFAAAHIACAMQADAFADADIAUADIAmgBIAMgFIAGgGIADgLQgBgKgDgEQgEgDgGgCIgOgDIghAAgADfBpQgGgFgCgNQgDgOABgTIgBgYIgFgMIgmg5QgJgPgGgPQgGgPABgKQAAgLAFgFQAGgGAJABQAIABAGAGIAPARIAdAuQAFAGAHAAIAFgDIAHgIIAgg2QAIgHAKgFQALgEAHAHQAJAHgCARIgHAWQgGAQgMATIgOAVIgVAoIgFAuQgCATgEAIQgFAKgKABQgJAAgIgIgAjHBqQgLgDgHgIQgHgKgCgOIgDiBQABgXADgJQADgKAHgFQAHgGAJABQAIABAFAGQAFAHABAJIACByQAAANAEAGQAEAFANACIAXACIAcgCQASgDAIAHQAHAHABAPIgCAQIgKAKIgZAFIgnACgABSBlIgQgWIgHgGIgKgDIgTgBIgQACQgHABgEACIgFAFIgJANQgGAKgIAFIgOADQgJgBgEgHQgEgGAAgIIABgSIAPg2IAshqQAFgJAHgGQAFgFAIAAQAHgBAIAHQAKAJAGALIAjBNIAZBVIAAARQgBAKgIAEIgRABgAAbgeIgGAMIgMAiQgDAJAAAEIADAFIAIACIAQABIAJgBIAJgCQAEgCABgEIgCgJIgFgSIgOgfIgFgEgAGQArIgJABQgDgCgDgIIgFgUIgHhTQgBgRAEgLQADgLAHgFQAGgEAHAAIARAEQAGAEAEALQADAKgBAaIgHBWIgFAOQgBAFgFACg");
	this.shape_2.setTransform(0.5194,-0.7612);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#874D12").ss(5,0,0,3).p("AE/hDIg2BfIgFAvQgBASgFAJQgFAKgKABQgJAAgIgIQgFgFgDgOQgDgOABgSIgBgYIgFgNIgmg4QgJgPgGgPQgFgPAAgKQAAgLAGgGQAFgGAJACQAJAAAGAGIAPARIAdAuQAEAHAHAAIAFgEIAIgIIAfg1QAIgIALgEQAKgEAIAGQAIAIgCAQgAGphjQAEALgCAZIgHBWIgEAPQgCAFgEACIgLgDIgIACQgEgCgCgGIgBgCQgDgJgCgLIgHhUQgBgQAEgLQAEgMAGgEQAHgFAGAAIARAEQAGAFAEAKgAGYAyIAKAEIAIAIIAEALQACANgDAJQgCAKgFAFQgFAGgGABIgMABIgOgDIgJgJIgFgQQAAgJACgJIAEgLQACgEAGgDQAEgEAHAAgAA8hUIAiBNIAZBUIABASQgCAKgIAEIgQABQgGgDgHgHIgKgMIgGgKIgHgFIgKgDIgTgBIgQACIgKADIgGAEIgIAOIgPAPIgOADQgIgCgFgGQgDgGgBgIIABgSIAPg2QAGgSAIgSIAehGQAGgJAGgGQAGgFAHgBQAHAAAIAHQAKAIAHAMgAAUgTIgMAiQgDAJABAEIADAFIAHADIAaAAIAIgCIAFgGIgBgKIgGgSIgOgfIgEgDQgCAAgCAEgAhrA1QASgDAIAGQAIAHABAQQAAAJgDAGIgJAKQgHAEgSACIgnABIgzgFQgLgEgIgIQgHgJgCgOQgDgOAAgbIAAhYQABgYADgJQAEgJAGgGQAIgFAIABQAIABAFAGIAHAQIABByQABANADAFQAEAFANADIAXACgAlCg7IghgBIgPAEIgJAHIgDAMIACALIAHAIIATAEIAngBQAHgCAEgDIAGgHIADgLQAAgJgEgEQgEgEgFgBgAj9g4IACAbIgCATIgFARIgJAOIgKAIIgPAFIhCABQgNABgEAGQgFAEgBAFIgBAXQAAARgDAHIgIALQgEAEgHABQgGABgHgGQgHgFgCgJIgDgUIgBhtQABgYADgLQADgMAHgIQAGgIAKgDIAvgIIBEAGQAMADAHALIAJASg");
	this.shape_3.setTransform(0.6026,-0.7839);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFF00","#C06103"],[0,1],0,-1.9,0,9.6).s().p("AGBB0IgJgJIgFgQQAAgJACgKIAEgKQACgFAGgDQAEgDAHgBIAMAAIAKAEIAIAJIAEALQACANgDAJQgCAKgFAFQgFAFgGABIgMACgAmhBuQgHgGgCgIIgDgVIgBhtQABgXADgMQADgLAHgIQAGgJAKgDIAvgHIBEAGQAMADAHALIAJASIAEANIACAcIgCASIgFARIgJAOIgKAJIgPAEIhCACQgNABgEAFQgFAFgBAFIgBAWQAAASgDAGIgIALQgEAEgHACIgBAAQgGAAgGgFgAlyg4IgJAIIgDALIACAMIAHAIIATADIAngBQAHgBAEgEIAGgGIADgLQAAgJgEgFQgEgDgFgCIgOgDIghAAgADeBpQgFgFgDgNQgDgOABgSIgBgZIgFgMIgmg5QgJgPgGgPQgFgOAAgLQAAgLAGgFQAFgGAJABQAJABAGAGIAPARIAdAuQAEAGAHAAIAFgDIAIgIIAfg2QAIgHALgFQAKgEAIAHQAIAHgCARIgGAXIg2BfIgFAuQgBATgFAJQgFAJgKABIgBAAQgIAAgIgIgAjHBqQgLgDgIgIQgHgJgCgOQgDgPAAgaIAAhZQABgXADgJQAEgKAGgFQAIgGAIABQAIABAFAHIAHAPIABByQABANADAGQAEAFANADIAXACIAcgDQASgDAIAHQAIAHABAQQAAAIgDAHIgJAKQgHADgSACIgnACgABRBlIgKgMIgGgKIgHgGIgKgDIgTgBIgQACIgKADIgGAFIgIANIgPAPIgOADQgIgBgFgHQgDgGgBgIIABgRIAPg3QAGgSAIgSIAehFQAGgKAGgGQAGgFAHAAQAHgBAIAIQAKAIAHALIAiBOIAZBUIABASQgCAJgIAEIgQABQgGgCgHgHgAAagdIgGALIgMAiQgDAJABAEIADAFIAHADIAaAAIAIgDIAFgGIgBgJIgGgSIgOgfIgEgEQgCABgCAEgAGPArIgIABQgEgBgCgGIgBgDQgDgIgCgMIgHhTQgBgQAEgMQAEgLAGgFQAHgEAGAAIARAEQAGAFAEAKQAEAKgCAaIgHBWIgEAOQgCAGgEABg");
	this.shape_4.setTransform(0.6031,-0.8012);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.373)"],[0,1],2.1,2.6,-3.4,-18.2).s().p("AmsCPQgOg5AAhZQAAhpA4gwQA0gtBwgFIC3gNQB1gHCtAAIBxADIAwAFQAfAIAAASQAAA0iNBCQgqAUhHAbQhGAbgOAHIkSCIQiqBUgQAAQgzAAgWhUg");
	this.shape_5.setTransform(-5.8,-1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DF4A4A").s().p("AmFDQIC6gZIjPAGQgpgqgLg0IDUgfIjZAAIAAgCQgEgtAIgqIBHgQIhEAAQAIgnARglICMgXIiEAGIALgUQAXggBQgLIDygRIFvgUQBlgDAiBAIiFARICPAHQAYBAADA/Ih6AQIB7AAIAAAJIgHBmIhuARIBqAAIgNAeQgJASgPAMQgbAUg1AHQh0AQkjAIIhaACQi/AAgqgbg");
	this.shape_6.setTransform(0.2193,0.6061);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D12526").s().p("AmyDrIgOgPQg7g/gGhUQgJiGBCh1IAAAAQAYgkBYgOIEKgTIGTgXQB7gEAiBeQAhBdAABbIgBBGQgCAogJAbIgOAjQgKAVgRANQgcAYg7AIQiAATk/AJIhiACQjmAAgiglg");
	this.shape_7.setTransform(0.346,0.0382);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#570F0F").s().p("AkHEfQhVgEg1gRQgYgJgUgMQhmhUAKiEQAIhsArhNQAdg0AkgTQAkgUClgNIIbgaQBMgEAyAcQAyAcAYBSIAJAiQAVCagVB7IgBAEQgKApgwAkQgfAYg9AIIndAQgAFIkOImTAXIkKAUQhYANgYAkIAAABQhCB1AJCFQAGBVA7A+IAOAQQApArFBgIQE/gKCAgSQA7gIAcgYQARgOAKgUIAOgkQAJgbACgnIABhHQAAhaghheQgghah0AAIgJAAg");
	this.shape_8.setTransform(0.0093,-0.0057);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0.843)","rgba(255,255,255,0)"],[0,1],0.6,-3.3,2.2,-10.7).s().p("AF8A6IgFhDQgBgRAEgLQADgLAHgFQAGgEAHAAIARAEQAGAEAEALQADAKgBAaIgDA5IgBADgADEA6IgZgmQgJgPgGgOQgGgPABgKQAAgLAFgFQAGgGAJABQAIABAGAGIAPARIAdAtQAFAGAHAAIAFgDIAHgIIAgg1QAIgHAKgFQALgEAHAHQAJAHgCARIgHAWQgGAPgMATIgOAVIgFAKgAAyA6IgNgdIgFgEIgDAEIgGAMIgGARIgxAAIAmhYQAFgJAHgGQAFgFAIAAQAHgBAIAHQAKAJAGALIAjBMIACAGgAjkA6IABg5QABgWADgJQADgKAHgFQAHgGAJABQAIABAFAGQAFAHABAJIADBVgAmtA6IACghQABgXADgLQACgLAHgJQAHgIAKgDIAYgFIAXgCIBEAGQALADAHALIAKASIAFAYIABAPIgCATIgCAJgAlvADQgGACgDAFQgDAFAAAHIACAMQADAFADADIAUADIAmgBIAMgFIAGgGIADgLQgBgKgDgEQgEgDgGgCIgOgDIghAAg");
	this.shape_9.setTransform(0.3734,-7.2798,1.08,1.08);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFF00","#C06103"],[0,1],0.9,-0.7,0.9,10.3).s().p("AGCBzQgGgCgDgGIgFgQQgBgJACgKIAEgLIAIgHQAFgDAHgBIALAAQAGABAFADQAFADADAGIAEAKQACAOgDAJQgCAKgGAFIgKAGIgMACgAmgBtQgHgFgCgIQgCgIgBgNIgDgnIAChGQABgXADgMQACgLAHgJQAHgIAKgDIAYgFIAXgCIBEAGQALADAHALIAKASIAFAZIABAPIgCATIgFARIgKAOIgKAIIgPAFIhBACQgNABgEAFQgFAFgBAFIgBAWQgBARgCAHIgIALIgLAFIgBAAQgGAAgGgFgAlxg4QgGACgDAFQgDAFAAAHIACAMQADAFADADIAUADIAmgBIAMgFIAGgGIADgLQgBgKgDgEQgEgDgGgCIgOgDIghAAgADfBpQgGgFgCgNQgDgOABgTIgBgYIgFgMIgmg5QgJgPgGgPQgGgPABgKQAAgLAFgFQAGgGAJABQAIABAGAGIAPARIAdAuQAFAGAHAAIAFgDIAHgIIAgg2QAIgHAKgFQALgEAHAHQAJAHgCARIgHAWQgGAQgMATIgOAVIgVAoIgFAuQgCATgEAIQgFAKgKABQgJAAgIgIgAjHBqQgLgDgHgIQgHgKgCgOIgDiBQABgXADgJQADgKAHgFQAHgGAJABQAIABAFAGQAFAHABAJIACByQAAANAEAGQAEAFANACIAXACIAcgCQASgDAIAHQAHAHABAPIgCAQIgKAKIgZAFIgnACgABSBlIgQgWIgHgGIgKgDIgTgBIgQACQgHABgEACIgFAFIgJANQgGAKgIAFIgOADQgJgBgEgHQgEgGAAgIIABgSIAPg2IAshqQAFgJAHgGQAFgFAIAAQAHgBAIAHQAKAJAGALIAjBNIAZBVIAAARQgBAKgIAEIgRABgAAbgeIgGAMIgMAiQgDAJAAAEIADAFIAIACIAQABIAJgBIAJgCQAEgCABgEIgCgJIgFgSIgOgfIgFgEgAGQArIgJABQgDgCgDgIIgFgUIgHhTQgBgRAEgLQADgLAHgFQAGgEAHAAIARAEQAGAEAEALQADAKgBAaIgHBWIgFAOQgBAFgFACg");
	this.shape_10.setTransform(0.5232,-0.8479,1.08,1.08);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFF00","#C06103"],[0,1],-1,-2.6,-1,8.4).s().p("AGBB0IgJgJIgFgQQAAgJACgKIAEgKQACgFAGgDQAEgDAHgBIAMAAIAKAEIAIAJIAEALQACANgDAJQgCAKgFAFQgFAFgGABIgMACgAmhBuQgHgGgCgIIgDgVIgBhtQABgXADgMQADgLAHgIQAGgJAKgDIAvgHIBEAGQAMADAHALIAJASIAEANIACAcIgCASIgFARIgJAOIgKAJIgPAEIhCACQgNABgEAFQgFAFgBAFIgBAWQAAASgDAGIgIALQgEAEgHACIgBAAQgGAAgGgFgAlyg4IgJAIIgDALIACAMIAHAIIATADIAngBQAHgBAEgEIAGgGIADgLQAAgJgEgFQgEgDgFgCIgOgDIghAAgADeBpQgFgFgDgNQgDgOABgSIgBgZIgFgMIgmg5QgJgPgGgPQgFgOAAgLQAAgLAGgFQAFgGAJABQAJABAGAGIAPARIAdAuQAEAGAHAAIAFgDIAIgIIAfg2QAIgHALgFQAKgEAIAHQAIAHgCARIgGAXIg2BfIgFAuQgBATgFAJQgFAJgKABIgBAAQgIAAgIgIgAjHBqQgLgDgIgIQgHgJgCgOQgDgPAAgaIAAhZQABgXADgJQAEgKAGgFQAIgGAIABQAIABAFAHIAHAPIABByQABANADAGQAEAFANADIAXACIAcgDQASgDAIAHQAIAHABAQQAAAIgDAHIgJAKQgHADgSACIgnACgABRBlIgKgMIgGgKIgHgGIgKgDIgTgBIgQACIgKADIgGAFIgIANIgPAPIgOADQgIgBgFgHQgDgGgBgIIABgRIAPg3QAGgSAIgSIAehFQAGgKAGgGQAGgFAHAAQAHgBAIAIQAKAIAHALIAiBOIAZBUIABASQgCAJgIAEIgQABQgGgCgHgHgAAagdIgGALIgMAiQgDAJABAEIADAFIAHADIAaAAIAIgDIAFgGIgBgJIgGgSIgOgfIgEgEQgCABgCAEgAGPArIgIABQgEgBgCgGIgBgDQgDgIgCgMIgHhTQgBgQAEgMQAEgLAGgFQAHgEAGAAIARAEQAGAFAEAKQAEAKgCAaIgHBWIgEAOQgCAGgEABg");
	this.shape_11.setTransform(0.6618,-0.8161,1.08,1.08);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.373)"],[0,1],0.9,1.4,-4.1,-18.9).s().p("AmsCPQgOg5AAhZQAAhpA4gwQA0gtBwgFIC3gNQB1gHCtAAIBxADIAwAFQAfAIAAASQAAA0iNBCQgqAUhHAbQhGAbgOAHIkSCIQiqBUgQAAQgzAAgWhUg");
	this.shape_12.setTransform(-6.45,-1.65,1.08,1.08,0,0,0,-0.2,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#874D12").ss(5,0,0,3).p("AE/hDIg2BfIgFAvQgBASgFAJQgFAKgKABQgJAAgIgIQgFgFgDgOQgDgOABgSIgBgYIgFgNIgmg4QgJgPgGgPQgFgPAAgKQAAgLAGgGQAFgGAJACQAJAAAGAGIAPARIAdAuQAEAHAHAAIAFgEIAIgIIAfg1QAIgIALgEQAKgEAIAGQAIAIgCAQgAGphjQAEALgCAZIgHBWIgEAPQgCAFgEACIgLgDIgIACQgEgCgCgGIgBgCQgDgJgCgLIgHhUQgBgQAEgLQAEgMAGgEQAHgFAGAAIARAEQAGAFAEAKgAGYAyIAKAEIAIAIIAEALQACANgDAJQgCAKgFAFQgFAGgGABIgMABIgOgDIgJgJIgFgQQAAgJACgJIAEgLQACgEAGgDQAEgEAHAAgAA8hUIAiBNIAZBUIABASQgCAKgIAEIgQABQgGgDgHgHIgKgMIgGgKIgHgFIgKgDIgTgBIgQACIgKADIgGAEIgIAOIgPAPIgOADQgIgCgFgGQgDgGgBgIIABgSIAPg2QAGgSAIgSIAehGQAGgJAGgGQAGgFAHgBQAHAAAIAHQAKAIAHAMgAAUgTIgMAiQgDAJABAEIADAFIAHADIAaAAIAIgCIAFgGIgBgKIgGgSIgOgfIgEgDQgCAAgCAEgAhrA1QASgDAIAGQAIAHABAQQAAAJgDAGIgJAKQgHAEgSACIgnABIgzgFQgLgEgIgIQgHgJgCgOQgDgOAAgbIAAhYQABgYADgJQAEgJAGgGQAIgFAIABQAIABAFAGIAHAQIABByQABANADAFQAEAFANADIAXACgAj9g4IACAbIgCATIgFARIgJAOIgKAIIgPAFIhCABQgNABgEAGQgFAEgBAFIgBAXQAAARgDAHIgIALQgEAEgHABQgGABgHgGQgHgFgCgJIgDgUIgBhtQABgYADgLQADgMAHgIQAGgIAKgDIAvgIIBEAGQAMADAHALIAJASgAlCg7IghgBIgPAEIgJAHIgDAMIACALIAHAIIATAEIAngBQAHgCAEgDIAGgHIADgLQAAgJgEgEQgEgEgFgBg");
	this.shape_13.setTransform(0.6026,-0.7839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.0093,y:-0.0057}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:0.346,y:0.0382}},{t:this.shape_6,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:0.2193,y:0.6061}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:0.6026,y:-0.7839}},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_8,p:{scaleX:1.08,scaleY:1.08,x:0.0205,y:0.043}},{t:this.shape_7,p:{scaleX:1.08,scaleY:1.08,x:0.3841,y:0.0904}},{t:this.shape_6,p:{regX:-0.4,regY:-0.1,scaleX:1.08,scaleY:1.08,x:-0.25,y:0.6}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3,p:{scaleX:1.08,scaleY:1.08,x:0.6612,y:-0.7974}},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.0093,y:-0.0057}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:0.346,y:0.0382}},{t:this.shape_6,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:0.2193,y:0.6061}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.2,-31,116.4,62.1);


(lib.Symbol6copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FE8989","#FF0000"],[0.008,1],0.3,-1.9,0,0.3,-1.9,8.6).s().p("AgCAEQgHgHAFgEQAEgFAFAJQAEAIgEAFIgBAAQgDAAgDgGg");
	this.shape.setTransform(-7.827,0.5317);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.38)","rgba(255,255,255,0.733)"],[0.008,1],0,1.2,0,0,1.2,7.6).s().p("AAPAJQgRgJgVAAQgOAAAHgGQAMgIAUAGQAiAJgDAIQgDADgEAAQgFAAgGgDg");
	this.shape_1.setTransform(-4.0393,-7.4116);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FE8989","#FF0000"],[0.008,1],0.2,4.5,0,0.2,4.5,11.3).s().p("AgGARQgSgGgOgRQgPgTAXAKQAeAOAdgJQAegJgYAVQgSARgPAAQgEAAgEgCg");
	this.shape_2.setTransform(-0.7011,6.0017);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.18)","rgba(255,255,255,0.733)"],[0.008,1],0,0.4,0,0,0.4,6).s().p("AAWAOQgLgTgeACQgfACAZgPQAZgPAUAPQAUARgDAPQgCAIgEAAQgEAAgFgKg");
	this.shape_3.setTransform(4.962,-5.8361);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.341)"],[0.318,1],1.4,5.2,0,1.4,5.2,16.1).s().p("AhJAfQgfgPAOgiQAEgIAIgHQAegYAoAbQAJAGAIgGQAXgTAlALQAUAJAGASQAFArhAAKQgVADgRAAQgoAAgfgOgABKABQAKAUAFgSQADgNgUgSQgVgPgZAPQgZAOAfgCIAFAAQAbAAAKARgAhEgiQgHAGAOABQAVAAASAIQANAHAFgHQADgHgigLQgJgCgHAAQgKAAgHAFg");
	this.shape_4.setTransform(-0.215,-4.5685);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF0000","#990000","#FF0000"],[0,0.4,0.847],0.3,-6.9,0,0.3,-6.9,30.5).s().p("AgGBYQgzgZgagtIgEgIQgbg5AigeQAfgZApAbQAJAHAJgHQAXgSAmAKQAnATgNAwQgEAOgHAMQgXArg8AjIgEACIgFgCg");
	this.shape_5.setTransform(-0.215,-0.3953);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6copy4, new cjs.Rectangle(-10.2,-9.3,20,17.9), null);


(lib.Symbol3copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgfA+QgMgGgHgIQgGgIAAgIQAAgGAEgEQAEgDAGAAQAFAAADACIAFAHQAGAJAHAEQAHAFALAAQAKAAAGgFQAHgEAAgGQAAgIgHgEQgHgEgOgEQgRgEgLgFQgKgEgHgHQgGgIAAgLQAAgKAGgJQAGgJALgFQAMgFAQAAQAMAAAKADQALACAGAFQAHAEAEAGQADAFAAAFQAAAGgDAEQgEADgHAAQgFAAgEgDIgIgIQgEgFgFgDQgFgDgIAAQgJAAgGAEQgGAEAAAFQAAAFAFAEQAEADAHACIAUAGQAPADAKAGQAKAEAFAHQAFAHAAAJQAAAOgHAKQgHAJgNAFQgNAFgRAAQgSAAgNgFg");
	this.shape.setTransform(-568.775,-401.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgsAxQgSgSAAgfQAAgOAFgMQAEgNAIgJQAJgJAMgFQAMgEAOAAQATAAAOAIQAOAIAHANQAHANAAANQAAAMgHAEQgHADgNAAIhAAAQAAALAFAJQAEAJAHAEQAIAEAHAAIALgBQAFgBAFgDIAIgHIAKgJQADgCAFAAQAFAAADADQADACAAAGQAAAEgEAGQgDAGgHAGQgHAFgLAEQgLADgOAAQgeAAgSgSgAgSgjQgIAJgCAQIA7AAQgBgRgIgIQgIgIgNAAQgMAAgHAIg");
	this.shape_1.setTransform(-582.775,-401.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgLBWQgFgGAAgJIAAheQAAgJAFgGQAFgEAGAAQAHAAAFAEQAEAGABAJIAABeQgBAKgEAFQgFAFgHAAQgGAAgFgFgAgKg+QgGgEAAgIQAAgHAGgFQAFgEAFAAQAHAAAEAEQAGAEAAAIQgBAHgEAFQgFAEgHAAQgFAAgFgEg");
	this.shape_2.setTransform(-593.5,-404);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgoA+QgEgFAAgKIAAhbQAAgWAQAAQAIAAAEAFQADAFABAKQAFgKAHgFQAFgFAKAAQALAAAKAFQAJAFAAAJQAAAGgEAEQgEAEgFAAIgJgCQgHgDgFAAQgHAAgEAEQgEAEgDAHQgCAIgBAKIgBAZIAAAbQAAAKgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_3.setTransform(-601.525,-401.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AAlA/QgEgFgGgJQgMAJgLAFQgLAEgNAAQgNAAgKgFQgJgFgFgIQgGgJAAgKQABgOAIgJQAIgJAQgDIAPgDIAVgFIATgFQAAgNgGgGQgEgGgPAAQgLAAgHADQgGAEgEAHIgHAJQgCACgGAAQgGAAgEgDQgDgEAAgGQAAgIAFgIQAHgJANgFQANgFASAAQAWAAANAFQAMAFAGALQAEALAAATIAAASIAAASQAAAKAEAKIACANQAAAFgEAEQgFAEgHAAQgEAAgGgEgAAEAGIgTAFQgEABgGAEQgEAEAAAIQAAAHAFAFQAGAGAJAAQAJAAAIgFQAJgEADgHQAFgHAAgRIAAgFIgVAFg");
	this.shape_4.setTransform(-615.1,-401.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AAgA+QgEgFAAgIIAAgFQgGAIgHAFQgGAFgIADQgGACgKAAQgMAAgKgFQgKgFgEgJQgHgKAAgUIAAhAQAAgKAFgFQAEgFAIAAQAHAAAEAFQAFAFAAAKIAAA0QAAALACAIQACAIAFAEQAFAEAIAAQAIAAAHgEQAIgFADgIQADgHAAgXIAAgoQAAgKAEgFQAFgFAHAAQAIAAAFAFQAEAFAAAKIAABeQAAAKgEAFQgFAEgHAAQgGAAgFgFg");
	this.shape_5.setTransform(-629.9,-401.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgMBVQgIgGgCgJQgDgJAAgPIAAg/IgEAAQgHAAgEgDQgEgEAAgFQAAgFAEgDQAEgEAIAAIADAAIAAgUIABgMQAAgFACgDQACgDAEgCQADgDAFAAQAGAAAEAFQAEADAAAFIABANIAAAWIAMAAQAHAAAEAEQAEADAAAFQAAAHgFACQgGADgJAAIgHAAIAAA8IABAMQAAAEADADQACACAFAAIAIgBIAIgBQAEAAADADQAEAEAAAEQAAAIgJAFQgJAEgQAAQgPAAgIgFg");
	this.shape_6.setTransform(-641.325,-403.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgsAxQgRgSAAgeQgBgTAJgQQAHgPAPgJQAPgIAUAAQANAAALADQAKAEAIAGQAHAGAEAHQAEAGAAAGQAAAGgFAEQgEAEgGAAQgFAAgCgCQgDgCgDgFQgGgJgHgEQgHgFgKAAQgNAAgJAMQgJALAAATQAAAJACAIQADAIAEAFQAEAGAHADQAFACAHAAQAKAAAHgEQAHgFAGgJQADgGADgDQAEgDAEAAQAHAAADAFQAFAEAAAFQgBAHgDAHQgEAHgIAGQgHAGgMAEQgLAEgPAAQgdAAgRgSg");
	this.shape_7.setTransform(-653.55,-401.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AAeA+QgEgFAAgKIAAg2QAAgQgFgJQgEgJgOAAQgHAAgIAGQgHAFgEAJQgCAIAAATIAAApQAAAKgEAFQgFAFgIAAQgGAAgFgFQgFgFAAgKIAAheQAAgKAEgEQAFgFAGAAQAFAAADACQAEACACAEQACAEAAAGIAAAEQAJgLAKgGQAJgFAOAAQANAAAKAGQALAFAFALQADAGABAHIABASIAAA8QAAAKgFAFQgEAFgHAAQgIAAgFgFg");
	this.shape_8.setTransform(-668.3,-401.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AAmA/QgGgFgFgJQgMAJgLAFQgKAEgOAAQgNAAgJgFQgKgFgGgIQgEgJgBgKQAAgOAJgJQAJgJAOgDIARgDIATgFIAUgFQgBgNgEgGQgFgGgOAAQgMAAgHADQgGAEgFAHIgGAJQgCACgGAAQgFAAgEgDQgFgEAAgGQAAgIAHgIQAFgJAOgFQANgFATAAQAVAAAMAFQANAFAFALQAGALAAATIAAASIgBASQAAAKADAKIAEANQgBAFgFAEQgEAEgGAAQgGAAgEgEgAAEAGIgSAFQgGABgEAEQgGAEAAAIQAAAHAHAFQAFAGAJAAQAJAAAIgFQAJgEAEgHQAEgHAAgRIAAgFIgVAFg");
	this.shape_9.setTransform(-683.1,-401.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AgqBSQgMgHgIgMQgIgMAAgLQAAgHAFgFQAFgEAHAAQAFAAAEADQAEAEADAHQADAJAEAFQAEAGAHAEQAHADAMAAQAPAAAKgHQAKgIAAgLQAAgIgFgGQgGgGgIgCIgWgHQgTgEgNgGQgNgFgIgKQgHgLAAgPQAAgPAIgLQAIgMAPgGQAPgGAUAAQAQAAAMAEQAMAEAIAHQAHAHAEAHQAEAIAAAHQAAAGgFAFQgEAFgHAAQgGAAgDgDQgEgDgDgHQgFgKgHgGQgHgFgOAAQgOAAgIAGQgJAGAAAJQAAAFADAEQADAEAFACIAKAFIARAEQAPAEAMAEQAMAEAIAGQAJAGAFAJQAFAJAAANQAAARgJAMQgIANgQAIQgQAHgWAAQgZAAgRgKg");
	this.shape_10.setTransform(-698.675,-404.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("ABBA+QgFgFAAgLIAAg2IAAgRQgBgHgEgEQgEgEgJAAQgGAAgGAEQgGADgDAHQgEAIAAAUIAAAsQAAALgEAFQgFAFgIAAQgGAAgFgFQgFgFAAgLIAAgzIgBgUQAAgGgEgFQgEgEgIAAQgQAAgFALQgGALAAAUIAAAsQAAALgEAFQgFAFgIAAQgHAAgFgFQgFgFAAgLIAAhdQAAgJAFgFQAEgFAHAAQAHAAAEAEQAFAFAAAIIAAADQAIgKAKgFQAKgFAMAAQANAAAJAFQAHAFAGAKQAJgKAJgFQAKgFALAAQAOAAAKAFQAKAGAEAKQAFAJAAATIAAA/QAAALgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_11.setTransform(-581.875,-403.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AAaBIIAAg4QAAgQgFgHQgEgJgOAAQgIAAgHAFQgHAFgDAIQgDAHAAATIAAAsQAAAJgEAGQgFAFgIAAQgQAAAAgUIAAiPQAAgKAEgFQAFgFAHAAQAIAAAFAFQAEAFAAAKIAAAxQAGgHAHgEQAFgEAHgCQAHgDAIAAQANAAAKAGQAJAFAGAKQADAGACAIIABAPIAABAQAAAKgFAFQgEAFgIAAQgQAAAAgUg");
	this.shape_12.setTransform(-614.975,-405.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AgSBXQgFgGABgJIAAhXIgKAAQgHAAgEgDQgEgEAAgFQAAgMARAAIAIAAIAAgKQAAgPADgJQAEgJAJgFQAJgEAQAAQAdAAAAAOQAAAFgDADQgDAEgEAAIgGgBIgIgBQgKAAgCAFQgDAGAAAJIAAAIIAIAAQAUAAgBAMQAAAIgEACQgGACgJAAIgIAAIAABXQAAAJgEAGQgFAFgHAAQgGAAgFgFg");
	this.shape_13.setTransform(-641.1,-405.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AgaA+QgMgEgJgJQgJgJgEgNQgFgMAAgPQAAgOAFgMQAEgNAJgJQAJgJAMgEQAMgFAOAAQAPAAAMAFQAMAFAJAJQAJAIAEANQAFAMAAAOQAAAPgFAMQgFANgIAJQgJAJgMAFQgMAEgPAAQgOAAgMgFgAgQglQgIAFgEAKQgDAKAAAMQAAANADAKQAEAJAHAGQAIAFAJAAQAPAAAJgMQAJgLAAgUQAAgTgJgLQgJgMgPAAQgJAAgHAFg");
	this.shape_14.setTransform(-653.15,-403.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AgLBXQgFgGAAgJIAAiPQAAgKAFgFQAEgFAHAAQAHAAAFAFQAEAFAAAKIAACPQAAAKgEAFQgFAFgHAAQgHAAgEgFg");
	this.shape_15.setTransform(-670.25,-405.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AgLBXQgEgGgBgJIAAiPQABgKAEgFQAEgFAHAAQAHAAAFAFQAFAFAAAKIAACPQAAAKgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_16.setTransform(-676.95,-405.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AA6BaIgGgEIgEgIIgEgJIgJgXIhHAAIgIAXQgFANgEAFQgDAFgIAAQgHAAgFgFQgFgFgBgGQABgEABgEIAEgLIAuhyIAEgMQADgHADgEQADgFAFgDQAFgDAHAAQAHAAAFADQAFADADAEIAFAKIAGAOIAuBxQAGANgBAGQAAAGgEAGQgGAFgHAAQgEAAgDgCgAgaATIA0AAIgahIg");
	this.shape_17.setTransform(-689.25,-405.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AgfBXQgOgFgHgHQgHgIAAgIQAAgGAEgEQAEgEAGAAQAHAAAFAHIAHAHIAGAFQADADAFABIALABQAMAAAHgEQAHgDADgHQADgGAAgHIABgYQgIALgJAFQgLAGgMAAQgRAAgMgJQgNgIgGgPQgIgPABgUQgBgPAFgMQAEgMAIgIQAHgIAJgEQALgEALAAQANAAALAFQAKAFAJAMIAAgFQgBgIAFgFQAEgFAHAAQAKAAADAHQACAGAAAMIAABfQAAAQgDAMQgDAMgIAIQgIAHgNAEQgMAEgRAAQgRAAgOgFgAgWg3QgIALAAATQAAAVAIAJQAJAKANAAQAJAAAHgEQAHgFAFgIQAFgIAAgNQgBgUgIgMQgJgLgPAAQgNAAgJALg");
	this.shape_18.setTransform(-612.5,-404.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgaA+QgMgEgJgJQgJgJgEgNQgFgMAAgPQAAgOAFgMQAEgNAJgJQAJgJAMgEQAMgFAOAAQAPAAAMAFQAMAFAJAJQAIAIAGANQAEAMAAAOQAAAPgFAMQgFANgIAJQgJAJgMAFQgMAEgPAAQgOAAgMgFgAgQglQgIAFgDAKQgFAKAAAMQAAANAFAKQAEAJAGAGQAIAFAJAAQAPAAAJgMQAJgLAAgUQAAgTgJgLQgJgMgPAAQgJAAgHAFg");
	this.shape_19.setTransform(-627.35,-407.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("Ag0BZQgKAAgFgDQgFgDgBgGQgCgFAAgJIAAiBQAAgLAFgGQAGgFALAAIAvAAQASAAANAEQANADAKAJQAcAYAAAwQAAAPgDAOQgDANgGALQgFAKgKAIQgGAHgJAEQgIAEgKABQgKACgMAAgAgnA8IAbAAIANAAIALgDQAFgCAEgDQATgPgBglQAAgagIgNQgHgNgMgEQgLgDgQAAIgYAAg");
	this.shape_20.setTransform(-643.65,-409.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgMBWQgFgFAAgLIAAg4IgshDIgIgOQgCgFAAgEQAAgGAFgEQAFgFAHAAQAHAAAEAEQAEAFAHAMIAgA2IAig2IAFgIIAFgHIAFgEQADgCAEAAQAHAAAFAFQAEAEAAAGQAAAFgCAEQgCAFgGAIIgsBEIAAA4QAAALgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_21.setTransform(-642.975,-407.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AgKBAQgEgDgCgEIgHgPIgfhNIgDgGIgCgGIgBgFQAAgDACgEIAGgFQAEgCAFAAQAHAAADAFQAEAEAEALIAZBLIAdhOQAEgJADgEQADgEAHAAQAGAAAEAEQAEAEABAGIgBAFIgCAFIgCAGIggBOIgEAJIgEAJQgDADgDACQgEACgGAAQgGAAgEgDg");
	this.shape_22.setTransform(-613.05,-376.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AgsAxQgSgSAAgfQAAgOAFgMQAEgNAIgJQAJgJAMgFQAMgEAOAAQATAAAOAIQAOAIAHANQAHANAAANQAAAMgHAEQgHADgNAAIhAAAQAAALAFAJQAEAJAHAEQAIAEAHAAIALgBQAFgBAFgDIAIgHIAKgJQADgCAFAAQAFAAADADQADACAAAGQAAAEgEAGQgDAGgHAGQgHAFgLAEQgLADgOAAQgeAAgSgSgAgSgjQgIAJgCAQIA7AAQgBgRgIgIQgIgIgNAAQgMAAgHAIg");
	this.shape_23.setTransform(-637.925,-376.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AgfA+QgMgGgHgIQgGgIAAgIQAAgGAEgEQAEgDAGAAQAFAAADACIAFAHQAGAJAHAEQAHAFALAAQAKAAAGgFQAHgEAAgGQAAgIgHgEQgHgEgOgEQgRgEgLgFQgKgEgHgHQgGgIAAgLQAAgKAGgJQAGgJALgFQAMgFAQAAQAMAAAKADQALACAGAFQAHAEAEAGQADAFAAAFQAAAGgDAEQgEADgHAAQgFAAgEgDIgIgIQgEgFgFgDQgFgDgIAAQgJAAgGAEQgGAEAAAFQAAAFAFAEQAEADAHACIAUAGQAPADAKAGQAKAEAFAHQAFAHAAAJQAAAOgHAKQgHAJgNAFQgNAFgRAAQgSAAgNgFg");
	this.shape_24.setTransform(-652.075,-376.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AgsAxQgSgSAAgfQAAgOAFgMQAEgNAIgJQAJgJAMgFQAMgEAOAAQATAAAOAIQAOAIAHANQAHANAAANQAAAMgHAEQgHADgNAAIhAAAQAAALAFAJQAEAJAHAEQAIAEAHAAIALgBQAFgBAFgDIAIgHIAKgJQADgCAFAAQAFAAADADQADACAAAGQAAAEgEAGQgDAGgHAGQgHAFgLAEQgLADgOAAQgeAAgSgSgAgSgjQgIAJgCAQIA7AAQgBgRgIgIQgIgIgNAAQgMAAgHAIg");
	this.shape_25.setTransform(-666.075,-376.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009900").s().p("AAuBXQgEgCgCgFIgJgNIgOgYQgIgNgGgHQgFgHgHgCQgFgDgLAAIgMAAIAAA5QAAAMgFAFQgFAFgIAAQgJAAgEgFQgFgGAAgLIAAiHQAAgMAGgFQAEgFAMAAIA5AAIAVABQAJABAHADQAIADAHAHQAGAHAEAIQACAJAAAKQABATgLAMQgMALgXAFQAKAFAJAKQAIAKAIALQAGALAEAKQAEAIAAAEQAAADgDAEQgCADgDACQgFACgEAAQgGAAgFgDgAglgNIAhAAQAMAAAIgDQAJgCAFgFQAEgGAAgJQAAgIgDgFQgEgGgHgDQgGgCgRAAIgiAAg");
	this.shape_26.setTransform(-681.95,-379.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AgsAxQgSgSAAgfQAAgOAFgMQAEgNAIgJQAJgJAMgFQAMgEAOAAQATAAAOAIQAOAIAHANQAHANAAANQAAAMgHAEQgHADgNAAIhAAAQAAALAFAJQAEAJAHAEQAIAEAHAAIALgBQAFgBAFgDIAIgHIAKgJQADgCAFAAQAFAAADADQADACAAAGQAAAEgEAGQgDAGgHAGQgHAFgLAEQgLADgOAAQgeAAgSgSgAgSgjQgIAJgCAQIA7AAQgBgRgIgIQgIgIgNAAQgMAAgHAIg");
	this.shape_27.setTransform(-580.175,-426.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AgoA+QgEgFAAgKIAAhbQAAgWAQAAQAIAAAEAFQADAFABAKQAFgKAHgFQAFgFAKAAQALAAAKAFQAJAFAAAJQAAAGgEAEQgEAEgFAAIgJgCQgHgDgFAAQgHAAgEAEQgEAEgDAHQgCAIgBAKIgBAZIAAAbQAAAKgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_28.setTransform(-592.225,-426.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AgsAxQgSgSAAgfQAAgOAFgMQAEgNAIgJQAJgJAMgFQAMgEAOAAQATAAAOAIQAOAIAHANQAHANAAANQAAAMgHAEQgHADgNAAIhAAAQAAALAFAJQAEAJAHAEQAIAEAHAAIALgBQAFgBAFgDIAIgHIAKgJQADgCAFAAQAFAAADADQADACAAAGQAAAEgEAGQgDAGgHAGQgHAFgLAEQgLADgOAAQgeAAgSgSgAgSgjQgIAJgCAQIA7AAQgBgRgIgIQgIgIgNAAQgMAAgHAIg");
	this.shape_29.setTransform(-605.725,-426.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009900").s().p("Ag8BWQgEgFAAgLIAAiOQAAgJAFgFQADgFAIAAQAGAAAFAFQAFAFAAAJIAAAEQAJgMAKgFQAKgFALAAQAQAAANAHQANAIAHAPQAIAQAAAUQgBAQgEALQgEANgHAJQgIAIgKAFQgKAFgNAAQgNAAgJgGQgJgGgJgLIAAAyQAAAWgQAAQgKAAgCgGgAgVg3QgKALAAAVQAAATAKAKQAJALAMAAQAJAAAHgEQAHgFAEgJQAEgJABgOQAAgNgFgJQgDgKgIgFQgHgFgJAAQgMAAgJALg");
	this.shape_30.setTransform(-635.5,-423.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AgfA+QgMgGgHgIQgGgIAAgIQAAgGAEgEQAEgDAGAAQAFAAADACIAFAHQAGAJAHAEQAHAFALAAQAKAAAGgFQAHgEAAgGQAAgIgHgEQgHgEgOgEQgRgEgLgFQgKgEgHgHQgGgIAAgLQAAgKAGgJQAGgJALgFQAMgFAQAAQAMAAAKADQALACAGAFQAHAEAEAGQADAFAAAFQAAAGgDAEQgEADgHAAQgFAAgEgDIgIgIQgEgFgFgDQgFgDgIAAQgJAAgGAEQgGAEAAAFQAAAFAFAEQAEADAHACIAUAGQAPADAKAGQAKAEAFAHQAFAHAAAJQAAAOgHAKQgHAJgNAFQgNAFgRAAQgSAAgNgFg");
	this.shape_31.setTransform(-650.375,-426.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009900").s().p("AgaA+QgMgEgJgJQgIgJgFgNQgFgMAAgPQAAgOAFgMQAFgNAIgJQAJgJAMgEQAMgFAOAAQAPAAAMAFQAMAFAJAJQAJAIAEANQAFAMAAAOQAAAPgFAMQgEANgJAJQgJAJgMAFQgMAEgPAAQgOAAgMgFgAgQglQgIAFgEAKQgDAKAAAMQAAANADAKQAFAJAGAGQAIAFAJAAQAPAAAJgMQAJgLAAgUQAAgTgJgLQgJgMgPAAQgJAAgHAFg");
	this.shape_32.setTransform(-664.5,-426.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("AgLBWQgFgGABgJIAAhdQgBgLAFgEQAFgFAGgBQAHABAFAFQAFAFgBAIIAABfQABAKgFAFQgFAFgHAAQgGAAgFgFgAgLg+QgEgEAAgIQAAgHAEgEQAGgFAGAAQAGAAAFAEQAEAEAAAIQABAHgFAFQgFAEgGAAQgGAAgGgEg");
	this.shape_33.setTransform(-675.35,-428.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009900").s().p("AgzBZQgMAAgFgFQgFgGAAgLIAAiFQAAgLAGgGQAFgFALAAIA5AAQAMAAAKACQAJABAHAFQAHAEAFAFQAEAGADAHQADAHAAAIQAAAagbANQAjAKAAAgQAAAPgIAMQgHAMgNAGQgIADgLABQgLACgOAAgAglA+IAmAAQAkAAAAgbQAAgNgJgGQgJgGgTAAIglAAgAglgPIAhAAQANAAAHgCQAHgDAEgHQADgFAAgGQAAgOgJgEQgKgFgSAAIgeAAg");
	this.shape_34.setTransform(-687.275,-428.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-641.325,y:-403.875}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:-601.525,y:-401.625}},{t:this.shape_2},{t:this.shape_1,p:{x:-582.775,y:-401.625}},{t:this.shape,p:{x:-568.775,y:-401.625}}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_6,p:{x:-626.425,y:-405.775}},{t:this.shape_12,p:{x:-614.975,y:-405.975}},{t:this.shape_1,p:{x:-600.175,y:-403.525}},{t:this.shape_11}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_1,p:{x:-627.825,y:-404.675}},{t:this.shape,p:{x:-613.825,y:-404.675}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_12,p:{x:-620.525,y:-428.775}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_3,p:{x:-624.425,y:-376.825}},{t:this.shape_22},{t:this.shape_1,p:{x:-598.925,y:-376.825}},{t:this.shape,p:{x:-584.975,y:-376.825}}]},1).wait(1));

	// Layer_5 copy
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.502)").ss(2,1,1).p("AG2q1QA8AcA0AzIAdAgIAHgIQAighAuAAQAwAAAhAhQAWAWAHAdQAzgVA7AAQB8AABYBYQBXBXAAB8QAAA9gWA1IANgBQA4AAAoAnQAnApAAA3QAAA3gnAnQghAhgsAFQASANAPAQQBNBMAABtQAABthNBNQhNBNhtAAQhsAAhNhNQgkgkgUgtQgFB2hVBUQhbBah/AAQiAAAhahaQgggfgUgkQhLA6hiAAQhFAAg5gcIAAAAQhjBjiLAAQiMAAhjhjQghgigXgmIgRATQg1A1hLAAQhKAAg2g1Qg0g2AAhKQAAgVADgVIgvADQgyAAgrgNQiLAkhICUQAWi6BGg9IgXgVQhhhiAAiKQAAiJBhhiQARgSAUgPQAygmA9gQQgEgWAAgYQAAhpBKhLQBLhLBqAAQBmAABKBHQAMgfAagZQAzgzBIAAQBHAAAzAzQAgAfALAoIAOgQQAxgwBFAAQA4AAArAgQAbgyArgtQA0gzA9gcQBNgkBbAAQBbAABNAkg");
	this.shape_35.setTransform(-634.325,-404.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AFZJDQgwgxgRg+IgNAMQhQBGhxAAQhVAAhDgpIgJAHQhPBFhyAAQhxAAhPhFQgmgggTglQgMANgPAMQg0AqhMAAQhKAAg2gqQgzgpgBg7QABghAQgbQg7AghIAAQhyAAhRhTQhRhSAAh3QAAh0BRhTQBGhJBggJQgHgaAAgdQAAhZBEhAQBFg+BhAAQBiAABEA+IABABQALggAbgbQAxgvBFAAQBFAAAxAvQAdAdAMAiIALgLQA9gxBUAAQBEAAAzAeQAZg9A6gzQBmhZCSAAQCRAABnBZQAbAYAVAaQAjggAxAAQA0AAAmAnQAeAgAGArQAugWA2AAQBgAABFBHQBFBGABBkQgBAogKAhQApAIAgAbQAsAjAAA0QAAAygsAkQggAagnAJIgGASQAeAOAZAXQBCA9AABUQAABVhCA9QhBA8hdAAQhdAAhBg8Qg2gxgKhFIgbAIQAFAaAAAbQAABvhNBOQhLBOhrAAQhsAAhLhOgAlTkAIAEgBIgBgBg");
	this.shape_36.setTransform(-635.7,-404);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FFFFFF","#B5E0FD"],[0,1],-2.2,-43.6,4.4,112.2).s().p("AETKAQgggfgUgkQhLA6hiAAQhFAAg5gcIAAAAQhjBjiLAAQiMAAhjhjQghgigXgmIgRATQg1A1hLAAQhKAAg2g1Qg0g2AAhKQAAgVADgVIgvADQgyAAgrgNQiLAkhICUQAWi6BGg9IgXgVQhhhiAAiKQAAiJBhhiQARgSAUgPQAygmA9gQQgEgWAAgYQAAhpBKhLQBLhLBqAAQBmAABKBHQAMgfAagZQAzgzBIAAQBHAAAzAzQAgAfALAoIAOgQQAxgwBFAAQA4AAArAgQAbgyArgtQA0gzA9gcQBNgkBbAAQBbAABNAkQA8AcA0AzIAdAgIAHgIQAighAuAAQAwAAAhAhQAWAWAHAdQAzgVA7AAQB8AABYBYQBXBXAAB8QAAA9gWA1IANgBQA4AAAoAnQAnApAAA3QAAA3gnAnQghAhgsAFQASANAPAQQBNBMAABtQAABthNBNQhNBNhtAAQhsAAhNhNQgkgkgUgtQgFB2hVBUQhbBah/AAQiAAAhahagAFLJGQBLBOBsAAQBrAABMhOQBMhOAAhvQAAgbgFgZIAcgJQAJBFA2AyQBCA7BcAAQBdAABCg7QBBg9AAhVQAAhVhBg9QgagXgdgOIAFgSQAogJAfgaQAsgkAAgyQAAgzgsgkQgfgbgqgIQALghAAgoQAAhkhFhGQhFhHhhAAQg2AAguAWQgGgqgeghQgmgng0AAQgxAAgjAgQgUgagbgYQhohZiRAAQiRAAhnBZQg5AzgaA+QgzgfhDAAQhVAAg8AxIgMALQgMgigdgcQgwgwhGAAQhFAAgwAwQgbAagMAhIgBgCQhEg+hhAAQhiAAhEA+QhFBAAABZQAAAdAIAaQhhAJhGBJQhRBTAAB1QAAB2BRBSQBRBTBzAAQBHAAA7ggQgQAbAAAiQAAA6AzAqQA2ApBLAAQBLAAA1gpQAPgMALgNQAUAkAlAgQBPBFBxAAQByAABPhFIAJgHQBDApBVAAQByAABPhGIANgMQARA+AwAxgAlej/IABABIgEABg");
	this.shape_37.setTransform(-634.325,-404.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-766.4,-478.3,264.2,148);


(lib.Soundmccopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_10 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA1C27").s().p("AgwBPQAWgMANgVQAMgVAAgZQAAgXgMgWQgNgVgWgMIAagsQAgASATAiQAUAhAAAlQAAAmgUAhQgTAiggASg");
	this.shape.setTransform(-26.3332,-0.0011,1.8989,1.8995,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA1C27").s().p("AhJCmQAtgaAagsQAZgtAAgzQAAgygZgtQgagsgtgaIAZgsQA4AhAhA4QAhA4AABAQAABBghA4QghA4g4Ahg");
	this.shape_1.setTransform(-40.3377,-0.0011,1.8989,1.8995,0,0,180);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(8));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA1C27").s().p("AhhD6QBDgmAnhDQAnhEAAhNQAAhMgnhDQgnhDhDgnIAZgsQBOAtAuBPQAuBPAABaQAABbguBPQguBPhOAtg");
	this.shape_2.setTransform(-54.0099,-0.0011,1.8989,1.8995,0,0,180);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(7).to({_off:false},0).wait(4));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA1C27").s().p("AhjgLIAAhxIDHAAIAAD5g");
	this.shape_3.setTransform(13.7338,23.7431,1.8989,1.8995,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("Ai+jsIF9AAIAADWIl9EDg");
	this.shape_4.setTransform(13.725,23.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},6).wait(5));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D79923").s().p("AhjB9IAAhxIDHiIIAAD5g");
	this.shape_5.setTransform(13.7338,-23.6978,1.8989,1.8995,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BA1C27").s().p("Ai+DuIAAnaIF9EDIAADXg");
	this.shape_6.setTransform(13.725,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},5).wait(6));

	// Layer_7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#05367D").s().p("AgoA4IAAhvIBRAAIAABvg");
	this.shape_7.setTransform(40.5559,10.7313,1.8989,1.8995,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AhNBrIAAjVICbAAIAADVg");
	this.shape_8.setTransform(40.55,10.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},6).wait(5));

	// Layer_8
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E2023").s().p("Ag/A4IAAhvIB/AAIAABvg");
	this.shape_9.setTransform(60.447,10.7313,1.8989,1.8995,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C475A").s().p("Ah4BrIAAjVIDyAAIAADVg");
	this.shape_10.setTransform(60.45,10.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},5).wait(6));

	// Layer_9
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#118168").s().p("AgoA5IAAhxIBRAAIAABxg");
	this.shape_11.setTransform(40.5559,-10.686,1.8989,1.8995,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#05367D").s().p("AhNBrIAAjVICbAAIAADVg");
	this.shape_12.setTransform(40.55,-10.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},6).wait(5));

	// Layer_10
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C475A").s().p("Ag/A5IAAhxIB/AAIAABxg");
	this.shape_13.setTransform(60.447,-10.686,1.8989,1.8995,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#282828").s().p("Ah4BrIAAjVIDyAAIAADVg");
	this.shape_14.setTransform(60.45,-10.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},5).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-55.8,145.2,111.6);


(lib.shape109copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9F5F5").ss(1,1,1,3,true).p("ACjgWIgsgLADGAjIgmgHAiZgaIgsgSAAoAsIhrgC");
	this.shape.setTransform(-9.7,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56E2E2").s().p("Ak2BAQAegMAqAEQhBANgMAAQgHAAAMgFgAETgBQAXAGAUARQhCgeAXAHgAgvg/QgZgNAwAWIAAAFg");
	this.shape_1.setTransform(-5.0234,-4.8816);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56E2E2").s().p("AkGBOQAJgNgmAAQg5ABAjgEQAjgFg2gDQg2gFBOgMQhVgaBNgJQgggngMgHQgKgNBRAVQg4gwAkAEQAjAEBLAmQgyg6AjAKQAzAMBSAjQgQgXADgEQAGgKCgBDQgxgeAOgEQA2AHAvAiIgKgWQAgAJAyAeIgUgYQA6AeAFgLIBfAIQA5AMitAQIALAHIhYgHQAxAahBgIIhRgGQBMAZhIgIIh6gHQAtAYg9gJIhHgEIhiAJIgJABQgQAAAIgLg");
	this.shape_2.setTransform(3.7261,-2.8137);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-11.7,76.69999999999999,17.799999999999997);


(lib.shape108copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9F5F5").ss(1,1,1,3,true).p("AEEAVIgXgOABYgEIgqgmADMAsIglgHAjCgmIgsgSAjUAiIgvgBABHA5IhHgL");
	this.shape.setTransform(-1.55,-3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56E2E2").s().p("AiRBoQAZgNAqAPgAiqAaIgVAGQhIgSBdAMgACvgdQApAIAHAUQhagjAqAHgAhTgxQAfAIAhAXQhggnAgAIgAAZhUQg0ghBSAxIAHAGQgCAAgjgWgAhUhnQgCgKApAdg");
	this.shape_1.setTransform(-22.5789,-8.4422);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56E2E2").s().p("AiaBbIhCgMIg6gNQg5ACAdgJQAdgKg8gIQg8gJBhgNQiZg2CGAJQhXg0AmgFQAnABBNAcQgmgqAMABQA1AGBjAvQhgg6A+AQQA9APBcAoQgLgKgHgNQgHgNCSA8QgcgYAFgEQANgCBAAiIgMgPQASACAyAeIgMgVQAxAbB6ADQhjAchfgGQA2AZgagCIhhgKQAtAbgfgHIiDgOQAjAchJgJIhQAAQAWALgSAAQgMAAgfgFg");
	this.shape_2.setTransform(3.7842,-3.1742);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-19.1,87,25.5);


(lib.shape107copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9F5F5").ss(1,1,1,3,true).p("AC7AGIgggYAB6AqIhKgOAENAhIgkgIAElAZIgRgLAhegKIgtgSAi3gQIhtgZAgnAjIi8AF");
	this.shape.setTransform(2.05,-2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56E2E2").s().p("AjmBOQhEgcCIAlgADZAEQAEgOAhAfgAjngcQgJgJBBAiQgvgPgJgKgAgPglQgFgTAwAzgAgVgqIAGAFIAAAAIgGgFgAg4hDQg+gwBhBJg");
	this.shape_1.setTransform(-14.2056,-10.4592);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56E2E2").s().p("AjEBWIg6gNQifgMAqgLQApgKAgACQgZgJgCgNQgBgMAxAJQjmhrDXAzQg/goARgJQAUgEBpAvQg1gsALgHQAwAHCKBBQhPg5AaADQA6AOBtA6IgWglQgGgSB5A+QgcgXAFgEQANgCBAAhIgMgOQASACAyAeIgFgPICaAOQgwAgh2AAQAZAIgEAEIhYgBQAiAJgHAFIiLgGQAeAJgLAHIiMgGQAfAJgNAFg");
	this.shape_2.setTransform(3.4129,-3.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-19.1,82.7,25.200000000000003);


(lib.shape105copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1,3,true).p("Ag+AKQgEAOAWABQAWABALgVQALgTBAgK");
	this.shape.setTransform(-33.6558,-1.7744);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#222222").ss(1,1,1,3,true).p("AkRAjICkgYIEOgcQCrgQAUAvQAgAvAQg2QgZhDhogIQhpgInWBNQhMATgTAy");
	this.shape_1.setTransform(0.075,-7.7665);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E065A1").s().p("Al9BNQgWgBAEgOQAUgyBMgSQHVhOBpAIQBpAIAZBEQgRA1gggvQgUgviqAQIkOAcIikAYQhAAKgMAUQgLAUgVAAIgBAAg");
	this.shape_2.setTransform(0.0442,-6.9909);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-15.7,82.1,17.5);


(lib.shape56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1,3,true).p("AAeAhIhyALIBQhQIBZgH");
	this.shape.setTransform(-0.7,0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#222222").ss(1,1,1,3,true).p("AAagmIADARIgoA7IgRABg");
	this.shape_1.setTransform(5.225,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BEC0BF").s().p("AgEgjIBZgIIg3BMIhyALg");
	this.shape_2.setTransform(-0.7,0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848685").s().p("AAagmIADARIgoA7IgRABg");
	this.shape_3.setTransform(5.225,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4.7,19.299999999999997,10.8);


(lib.shape54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1,3,true).p("AF2gzQALAug1AdQghAThBAGQlAAejygaQg4gUAKgpQALgeAhAUQAHAVAtAGQJKAMAZhKQAXgYASAag");
	this.shape.setTransform(0.0112,-3.7864);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFE65").s().p("AlIA1Qg4gUAKgpQALgeAhAUQAHAVAtAGQJKAMAZhKQAXgYASAaQALAug1AdQghAThBAGQirAQiTAAQiDAAhxgMg");
	this.shape_1.setTransform(0.0112,-3.7864);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-11.3,77.30000000000001,15.100000000000001);


(lib.shape52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1,3,true).p("AFegvQAKAugxAdQgfAShDAFQkmAYjigfQgzgVAJgpQALgeAfAVQAFAWArAGQIjAXAYhKQAVgXARAag");
	this.shape.setTransform(-0.0079,-3.4209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EB8EC").s().p("AkzAsQgzgVAJgpQALgeAfAVQAFAWArAGQIjAXAYhKQAVgXARAaQAKAugxAdQgfAShDAFQiAALhxAAQiXAAiAgSg");
	this.shape_1.setTransform(-0.0079,-3.4209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,-10.6,72.4,14.399999999999999);


(lib.shape49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1,3,true).p("AkbAdQF5hIC+AT");
	this.shape.setTransform(5.9,3.3277);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A706A").s().p("AEcgYIgxArIoGAKQF5hIC+ATg");
	this.shape_1.setTransform(5.9,3.3277);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C456A").s().p("Ak5gPQIYhCBZASQBUAYg5AvQi/gSl4BIIhpAGQhBgpBVgqg");
	this.shape_2.setTransform(0.4102,0.0166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-6.7,72.4,13.9);


(lib.shape47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9F5F5").ss(1,1,1,3,true).p("AAiAaIhDgz");
	this.shape.setTransform(-28.475,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56E2E2").s().p("AAnAJIgxgpQhmhuCsB2Qgxg3AZABQAZAABCApIAAB7QnKj1FyCog");
	this.shape_1.setTransform(-31.2916,-4.016);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-12.6,25.4,17.2);


(lib.shape46copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9F5F5").ss(1,1,1,3,true).p("AAWAJIgrgR");
	this.shape.setTransform(-26.7,-9.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56E2E2").s().p("AhBgOQAgAIAgAWQhfgmAfAIgAAigIQgBgKApAcg");
	this.shape_1.setTransform(-33.1156,-13.4424);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56E2E2").s().p("AgTgQQg0gwASgBQAPgBBsAkIAABgQjghVCHADg");
	this.shape_2.setTransform(-25.641,-4.728);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-15.1,21.9,17);


(lib.shape45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9F5F5").ss(1,1,1,3,true).p("AAKAAIgUAA");
	this.shape.setTransform(-19.65,1.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56E2E2").s().p("AgagKQgJgKBAAhQgugOgJgJg");
	this.shape_1.setTransform(-35.0547,-10.8787);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56E2E2").s().p("AAHgNQg+goAQgIQAUgFBiAsIAABUQkTh7DLAwg");
	this.shape_2.setTransform(-26.5433,-6.1959);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-12.4,20.299999999999997,15.100000000000001);


(lib.shape13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9AnIgHgCQgQgMgWAHIgJAAIgcgCIgUgCIgKgEIgRAAIgJABIgKACIgUACIgIAAIgbgFIgOgCIgYADIgJACIgOAAIgJAAIgJgDQgIgEgKgCIgKAAIgZADIgFAAIgQAGIgKABIgQACIgPABQgGgEgIACIgLAAIgNgBIgdgDIgHABQgOAJgUgBIgSgCIhbgGIgGgBQgMgHgOgGIgMAAIgjgEIgDgCQgDgEgGgCIADgCIAEgDQALgIAPAFIAOADIASAEQALACALgCIAKgEQAJgFAMgBQAGgBAFgDIAhgCIAJgBIAkgBQACABAEgDIAIgJQAKgQAYAEQAOADAJAIQAEADAGAAIASgCQAggIAXAQQAMAJAHgHIAGgCQAGACAFAEQAIAIANgFQAQgHARAHIATADIAUgCIAvgGIAMgCIAKgCIAIgGIADgCQANAFATABIAOACQARAGAQgBIAMAAIAZAFIALACIAJgBQAGgDAFgEQALAHAMADQALADAFgGQAIgLAOgFIAGAAIAMAGQAQAKAMgNIASgQQANgKAKAIIAIAJQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAUgCIARAAIAIAGIAEAJQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAOgBQATgEALAIIALACIAPgEQASgGAPAKIAOACIAVgCIAUgCIAagCIAVgIIATABIALAEQAIACAAADIAAAEQATgJAXAGIAEAFQABAIAMgCIAggDIATACIAOABIALgBIAPACIAtgCIAKAAIAMADQAVAGASgKIAdAAQANAFAQgBIAYADIAJABQAVADgOALIgHAAIhKAEIg6gDIgMAAIgJAAIgSgCIgGgBIhDAEIgFgBIgEgCIgGgBIgBACIgDAFQgCAEgIABIgkAEIgIACIgLgBIgLgDIgLABIgOACIgPABIgjADIgOgBIgzgEQgLABgIgFIgQgCIgMABIgYADIgEABQgKAJgMgFIgJgDIgFAAIgEgBQgJgHgKAFIgKAFIggABIgMgFIgJACQgOAJgRgHQgUgIgPAJIgNAGIgJAAIgLgDIgHAAIgWAJQgDgIgIAAg");
	this.shape.setTransform(-0.0859,0.0346);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,-4.6,153.3,9.3);


(lib.shape11copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbEjIAAgNQAAgYASgQIgJACIACgEIgXADQgYAAAAgLQAAgNAsAAIAEAAIAAgBQAAgLAMgFIgeABIgUAAQhtALgWAWQgCAGAAgJQAAgKAwgRQAkgOAbgDQACgDAIgBIATgCIgQgKIgDAAIgXgLQgPgGgWAOIgLgBQgCAFAAgKQAAgMAmAAQghgQgZgCIAAgFIANgBQAdAAArAaQAbAQAMANIABAAIAaACIACgCQAKABAQAPQARAAAFAIQAAAGE5AAQghgDAAgNQAAgKAMAAQAhgBAKAMIArgJIBEgKQAjgBAXAmIgCAHIgKAEIgSgNQgOgOgegBQgoABgnAMQAPACAPAIQAVAKAKALQgIALgEAAQgJAAgggOIgZgNIjEAIQhJAAgyACQgGAFgOAFIgPAVQgSAUgGACIgGgCIAHAJQgCAKgJgBQgNAAgDgLgAjaEoIAFgUIAGAAQADADAAAGQAAAIgHAIIgFAAIgBABQgBAAAAgGgAI5CuQgJgCAAgGQAAgJAXgIQAWgHAFACQgDAFgRAIQgQAFAAAHIgBAGgAIpChIAHAAIgDACgAkCCaIAFgEIgBgEIAJACIAGAAQgEAIgMABgAFYCWIAOgQQAPgMANAGIgTANQgJAJgLADgAHMCGQAGgHAXgGQAVgHAIACQgbARgdAEgAptCCQAKgIA3gJQA3gKAQgLIAJAEQgNAMg7AOIhCALgAguBvIABgKIAGAAIALAMQgCADgGABgAGQBlQAAgKAUgLQAUgKAKACIgwAhIgBACQgBAAAAgGgAlCBlQABgHAHgHQALgLATAAIAoAEIgCAGQgeABgTAIIgSALIgGAAgAJaBdIgCgHQAAgUAWAGIgPAVgAH8BFQAAgHAKgEIAQgCQgCAFgWAQgAEVArIgUgaIABgDIAGgBIASASQAQASAIAMIgEAFQgNgGgMgRgAjegCIAAgBQgEgCAAgEIAHABQAGgGAQgFIAJAEIgdAQQAAABgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgCAAAAgGgAnHg6IgVAEIgFgDIASgLIgHgGIAGgBQARAAAGAFIAGADIgEACIgBAJQAGADgKAAQgJAAgCgFgAEphqIgDABIgBgFIgUgWIACgGIABAAIAAgCQAAgeAWAHQgMARAAAFQAAAEAIAKIAAABIAMAPQgBAFgDACgAAdihIgEgRIACgEIAFAAIAaAfIABADQAAACgKAAQgNAAgHgPgAB8jLIABgKIAHAAIAbAyQAAAGgDADQgggaAAgXgAmWiwIAIgBQAHAAADAJIgBAJIgDACgAlCjSQACgDAFAAIALALQgBADgHABgAGAj0IABgFIgBgEQAAgNALgEQADAEAAAKIAAABQAAAKgEAKIgFAGQgFgCAAgNgAA8kaQAAgQALgDQACAFgCAOQAAAHAIAMQgCAGgEABQgNgFAAgVg");
	this.shape.setTransform(-141.05,104.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#28496F").ss(1,1,1,3,true).p("AikwdIAKANQBqCEgkBcIgWA6QgWA2AOAzIgtgfAjBwgIAAALQAcCEhJB2IgGAIQhPCahzgGQgygDAWAWQBHBbBgg3QArgaBJApQgohGghgvAEkFgQAzkDh2lBQhSjekBjLAiyIZQACgNgQgJQhNhRgUhpQgEhCAmAkQAcAzA8AbQARgCAPACIAGACIANAEQAiAPAGAyAiyIZQAdArA1gHAiyIZQgLArgNAaQgZAsgkAxAmBOSQAshgBAgoQAhgTAkgGQAFgYAggQAEcJWQAlgTAegVQBqhKAQhjQADgzgVAXQhxAsgygxIgCgBIAAACIACAMAmBOSIgTAsQglBqBHgHICLhFQB8AgBggrQBhg8BBhGQBlhtASiGIAOgGIgPADQgeAHAHAZAi3o5QD0Gri9IGAjKJeQhLAGghgiQgXgHARAuQAMAwApAiQgZAjgfAmIgMAMQhYB/AiADAiNOPIgHANQA9AVAXgpIAEgKQAJgYgpgTQgvgRgRAOQAGAGADALQAdgQAYAWQATAthCgFQAKgagQgUAh2N5IgEAEIACAFIAEADIAGgBIACgFIgBgEIgEgDgAjFMcIgEgGQgLgVAEgQ");
	this.shape_1.setTransform(-133.9858,119.9967);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAaQAKgagRgTQAdgQAXAWQASAogyAAIgNgBgAAAAEIgCAFIABAFIAEADIAFgBIADgGIgCgEIgEgCg");
	this.shape_2.setTransform(-145.9276,208.4428);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAlIAIgNQBBAGgUgtQgWgWgeAQQgDgLgGgFQARgPAvASQAoASgIAXIgFAKQgPAcgfAAQgQAAgVgIgAgMAMIgBgFIADgFIAFAAIAEACIABAEIgCAGIgFABg");
	this.shape_3.setTransform(-144.8013,208.6133);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2163A3").s().p("Ag1gUQgQguAWAHQAiAiBJgGQgYArgkAxQgpgigMgvg");
	this.shape_4.setTransform(-160.349,183.7598);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6392C5").s().p("AgHAAIAPgCIgNAFg");
	this.shape_5.setTransform(-106.325,180.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6AA6E1").s().p("AkvEBQAXgtgWg1QAfghA4AVIAHADQAoAVgDAhQADAkg3AeQglAHgVAAQgjAAANgUgAkfCqQAGAFADALQARAUgKAaIgIANQA9AWAXgqIAFgKQAIgYgogSQgagKgRAAQgOAAgIAHgACPinQB2gLAuhiQAIAmgkAyQgaAlglAZQgkAZgwAMQAggygVgcg");
	this.shape_6.setTransform(-120.9009,187.8056);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8099D5").s().p("AglNpQgtglA1ijIABgEIAEgOQAfh1AYhzIABgGIgBAAQBBlGg4j5QhFkCiMisQE1D7A+FCQAoDRgODUIACgBIAAABIAAABIgJCmQgJCPiICAQgqAhgWAEIgQABQgUAAgNgJgAi+qNQgOgegQAVQgZgBAhgjIACgEQA1hegJhNQAKgTALAXQAhBWgYArQgaAhgFAtQAAASgIAAQgGAAgJgJg");
	this.shape_7.setTransform(-131.7637,114.7673);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#284179","#6081CA"],[0,1],-102.2,36.4,0,-102.2,36.4,163.6).s().p("AmUO+IATgsQAshgBAgoQAhgTAkgGQAFgYAggQQggAQgFAYQgkAGghATQhAAogsBgQgigDBYh/IAMgMQAfgmAZgjQAkgxAZgsQANgaALgrQACgNgQgJQhNhRgUhpQgEhCAmAkQAcAzA8AbQARgCAPACIAHgBQC9oGj0mrQgohGghgvQAhAvAoBGQhJgpgrAaQhgA3hHhbQgWgWAyADQBzAGBPiaIAGgIQBJh2gciEIAAgLIAdADIAKANQBqCEgkBcIgWA6QgWA2AOAzIgtgfIAtAfQEBDLBSDeQB2FBgzEDQAyAxBxgsQAVgXgDAzQgQBjhqBKQgeAVglATIgPADQgZAGABARIABAJIgBgJQgBgRAZgGIABADQgSCGhlBtQhBBGhhA8QhgArh8ggIiLBFIgIAAQg8AAAihjgAisNFQAWA1gXAtQgUAfBkgSQA3gdgDglQAEgggogWIgIgCQgWgJgSAAQgcAAgTAUgAA+jSQA4D5hBFGIABAAIgBAGQgYBzgfB1IgEAOIgBAEQg1CjAtAlQARANAggFQAWgEAqghQCIiAAJiPIAJimIAAgBIAAgBIgCABQAOjUgojRQg+lCk1j7QCMCsBFECgAjJMWIAEAGIgEgGQgIgPAAgNIABgJIgBAJQAAANAIAPgAERH+QAVAdgfAxQAvgMAlgYQAkgZAaglQAkgygIgmQguBhh2ALgAhvI+IAOgBIABAAIgBAAIgOABIAAAAIAAAAQgpgBgZgiIgBgCIABACQAZAiApABIAAAAIAAAAgAiBF7IANAEQAiAPAGAyQgGgygigPIgNgEIgGgCgAEiFhIACAMIgCgMIAAgCIACABIgCgBIAAACgAiorBQAXAVAAgeQAFgtAaghQAYgrghhWQgLgXgKATQAJBNg1BeIgCAEQghAjAZABQAHgJAGAAQAJAAAIASg");
	this.shape_8.setTransform(-133.9858,119.9967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#28496F").ss(1,1,1,3,true).p("AAOAIQgZgcgCAY");
	this.shape_9.setTransform(-137.975,15.4784);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#284179","#6081CA"],[0,1],-84.2,142.6,0,-84.2,142.6,163.6).s().p("AgNAEQACgYAZAcg");
	this.shape_10.setTransform(-137.975,15.4784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.2,13.3,124.39999999999999,213.5);


(lib.shape11copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC570").s().p("AVAB+IgxgMQhEgVhIAIQhOAIgsgfQgJgHgKAAIjIgOIhQgDQiUAKiYgHIg7gHQgngJgqAIQiLAdiNALIgxACIgfgDQiTgdiYAwIg9ARIg7AHQhaABhagFIgngGIgggKQhggfhngOIiggVQgwgGgrANQgmAMgeAYQgcAVghACIgdgBIjTgSQgZgBgYgJQhSgfhYAdIhHADQhJgPhNgFQgZgCgYgJQgngPgqACQguACgsAPQhJAZhDgjQghgSglACIg8ADIhQAGIg8ACQiXAAiUASIi1AYQgUADgLgKQghgfgkAUQgUALgUABQhIAFhEAPQhDAQhIgGQgLgBgFgFQgVgTgYgDIgdgFIgfgFIgdgHQgtgMg4ADQg5AEg5gBIAFgTQgBgVgJgvIgKg2IAAgKIBnADIDIgCICNADQCGACAkgNICagGIB/AOICwgLICFgKQA0AABQANQBQAOBCAAIB7gEIB5gHQARgCA5AEIBCADIEQgRQEOgQAsAHQAtAIFgACIIRACIEhAAIDugMQBFgMFEAMQFEAMB+AAIDKgOQCdgOBqAGICxAHICQABICCgHICDgHQBCAABSAOQBSAOAZAAICBgDQBugDDCgdIELAAIDSAOICmgKICtgLIDlAHQCiAFAfgFIBSAAIAFAHIABAOQAAAIgdBlIhJAFIhiALIh6ARQgsAGgsgEIkFgQIgogDIhFgDIggADIgwAHIkQA0IiLAbQi7AkjBgMIiWgJQh7gHh1AbQhiAXhmADIgzABQiKAAiDgZg");
	this.shape.setTransform(0,0.0182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.5,-15,781.1,30.1);


(lib.shape10copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK7EeQAAgkAsgzIAdgcIgoADIgbAOIgMAHIgFAGIgvAzQgKgDAAgIIADgOIgNAFQgKgEAAgGQAAgPBUglQBXgmArAAIABAAQgcAGgiATIAigFQAHgDAMgDQAVgIAXgBIADAAIAPgDIgDAAIAFAAIAFgCQAjgPAEAAIAHAAQhDgZhPgFQgCAEAAgJQAAgGAMAAIATACQAWAAAuAMQAxANASAOIA/ACIAAgPIAYgKQAWgJAVgCIA2AAQAMABAAAGIgKAAQgZgCg0AWIghAMQASAPATAUIABABIAFAFIAFACQABAKgMgBIAAAAIgFADIgDgDIhxgFIAWAFQA0AMALAQQgEAKgGAAIhAgKQgrgLgWgMIgBgGIAAgEIhFABQgjASgkAcQgNALgHAZIgLAtIgHADQgKgKAAgEgAP9CWIABAAIgBAAgAOSCEIARAAIBEADIgKgFIgCgBgAYDDfIgBgFIBMgpQAGgBAGAJQgrArgbAAQgMAAgFgFgAW7DHIgBgFQAAgKAMABQAGgBAVAOIABAGQgGAIgEAAQgQAAgNgNgAW8CoIgCgQIAzADQAMgKAlgOQAngQAZgEQAGgHARgGQAcgJAZgBQA+ABAnANIARADQAFACAAAFQATALAJAQQgDAJgHABIgigTQghAbgggKIghgPQgTgHgQAFQgQADgwAQIgIgGIgbAKQgDAJgWAHIgqAIQgmgBgIgIgA6ICEQAAgGAPgMQAPgMAGABQAGgBAGAJQgDAMgKAIIgZAQQgKgFAAgKgA9SCJQAWgSAYggQAbgkAJgCIADAFQAAAGgkAmQgkAmgJAEIgDADQgCAAABgGgA+9CAIACAEIgCACgAXjCBIgYgGIgBgGQAAgIAQgBQBEAAAAAOQAAAIgGACIgYAAgAKBB+IAHAAIgDADgA6sBqQAAgJASgKQAKAEAAAGQAAATgSADQgKgFAAgIgAX/BoQAEgNAcgVQAfgYAPAMIhJAwgAO4BXIAAgEIAFgCQAWAAAaAMIABAJIgFAEQgWgMgbgHgAZhBnIgCgIQgBgmBmgYQgNARgoAVQgkAUgFAMgAJwBfQAJgKAEABQAJAAAEADQgCAGgPAEQgHgBgCgDgALWBVIgCgKIAFgBIAZAEIAAAGQAEACgKABgAdSBHIAKADIgFAEQgFgCAAgFgAMYBEIAKABIgFAGQgFgCAAgFgAO0AzIAKACIgFAGQgFgDAAgFgAOcAjIAAgEIAPgBQAhgBAOASIgFAEQgKgKgvgGgA5EAkQAAgGAOgPQANgMADAAQAKAAAAALQAAAHgKAKIgUATQgKgDAAgLgA6jAgQAAgHAQgbQAPgeACgSIAGAAQADADAAAKQAAAJgNAcQgOAegNAGIgBACQgBAAAAgGgAXnAJQAAgeA2AAIgdARQgMAGABAOIgFAEQgJgCAAgJgAMIgDIAKABIgFAFgA/PgTQAAgJAOgJQAKAFAAAGQAAATgOADQgKgEAAgLgA96gLQAAgLALggQAMggABgVIAHAAQACAHAAALQAAAxgfAiIgBABQgBAAAAgGgAZ/gXQAAgHAGgJQAIgLAMABQgEAMgNAYIgHABgAMogXIAAgGIAFgBQAZAAAEAEIABAFQAAABgGAAQgbAAgCgDgALMgnQAngeAKAAIA1ADIgCAHQg3gCgSANQgSAMgHgBgA7cg/QAAgGAPgVIAPgSQAKAAAAAJQAAAMgIAMIgQAZIgGACQgKgKAAgFgAYzhAIAKACIgFAFQgFgBAAgGgAN8h4QAAgKANABQAQAAAFADQgCAGgeADIgBADQgBAAAAgGgAJgiDIAKACIgFAEgAaKiKQAAgFAHgFQAIgIAIACQgFANgPAJIgCABQgBAAAAgHgAXriLIAAgGIAFgBIAJAFQgCAFgDABQgHgBgCgDgA8oihQAAgFANgMQALgKAGgEQAKAEAAAGQAAAGgNAOQgMANgEABQgLgEAAgJgAW9igIgCgOQAAgZASAGIgLAhgAZnivIAAgFIAFgBIAJAEIgFAGQgHgBgCgDgAXbi4QAAgNAMgOQAOgRAMgBQgNAggUAVQgFgCAAgGgA9Ci8IAYgmQARgaAUABQggAwgYARgANYjDIAKACIgFAFQgFgDAAgEgAYXjMQAAgHACABIADABIANAEIgFAGIgLAAgA6GjyQgGgEAAgIQAAgKAOgIQAKAEAAAFQAAAIgMANIgCACgA6/kSQAAgHAIgJIAJgJIAJAEQgGASgSAHIgBACQgBAAAAgGgAfGkrIAKACIgFAFQgFgCAAgFg");
	this.shape.setTransform(-253.675,102.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#28496F").ss(1,1,1,3,true).p("AmWpvQgpgfgQg5IgKghIgHgbQgaheimgqQhBgSAgAkQBVBLAWBtQAFAVACAXIAAAKQAdCrhfBAQgpAcAfAFQBwAdAqhlQATgvBTgMQhJggg3gRAmWpvIg2AEAIOg/Qhzjvkii6QjGiAlJgHAKcCJQASgmAMgjIAHgaQAchpgqhQQgdgqgDAfIgLAPQg6BYhAgIIgCgBIACACIAIAJAEFFvQgGgLgSACQhugShQhIQgrgzA0AHQA1AXBAgOQANgMAMgHIAHgEIAMgDQAlgJAjAlAEFFvQASAqAEAcQg3AygwgHQgWAIApAbQAnAeA1ADQABArgCAxIgCASQAGCaAdgSIAMAuQAjBrAzgwIBGiLQB3gyAyhcQAqhqAKhfQAOiVhBh2IAHgNIgKALQgTAZAUAPAEFFvQAyARAlglAIFKEIACAPQA9gUgHgvQAAgGgCgFQgHgYgsAJQgwAPgFAWQAIABAJAHQANgfAgAEQAsAYg4AkQgIgbgZgGAIVJjIgDgDIgGABIgDAEIAAAFIAEAEIAGgBIADgEQABgDgCgDgAFDMaQgXhoAchHQAOgiAagbQgKgWAOggAGSJLQgDgCgEgBQgUgKgHgQAEbG1QAIAyAAA9AmboCQHGDCChIR");
	this.shape_1.setTransform(-172.9941,44.8202);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C60B3").s().p("AggAXQgpgbAWgHQAwAGA2gxQAIAyAAA7Qg1gCgmgeg");
	this.shape_2.setTransform(-149.7872,94.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfgCQANgeAfADQAsAYg4AjQgHgagZgGgAAIgEIgDAEIAAAFIAEADIAGAAIADgEQABgEgCgBIgDgDg");
	this.shape_3.setTransform(-121.382,106.182);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9FB3DF").s().p("AgNBDQgIgzgygbQAFguA5gRIAIgCQAsgHAQAcQAZAbgZA4QgvAzgQAAQgIAAgBgMgAABgxQgwAPgEAWQAIABAIAGQAaAGAHAaIACAQQA9gVgIguQAAgGgBgEQgGgSgYAAQgJAAgMADg");
	this.shape_4.setTransform(-121.0312,106.4826);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAgQA3gjgsgYQgegDgOAeQgIgGgIgBQAEgWAwgPQArgKAIAZQABAEAAAGQAIAug9AVgAAAAHIABgGIADgDIAFAAIAEACQACACgBAEIgEAEIgFAAg");
	this.shape_5.setTransform(-120.9342,105.9673);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6392C5").s().p("AgEAEIAJgKIgGANg");
	this.shape_6.setTransform(-106.675,59.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6AA6E1").s().p("AAAAAIAAAAIABABg");
	this.shape_7.setTransform(-123.475,40.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8099D5").s().p("AH9KaQg5gBg5ikIgCgEIgFgNQgthxgzhrIgDgEQiRkqjCimQjUikjYg3QGQAPDzDbQCgCQBzCwIADABIBbCKQBQB4gfC3QgOA1gPAQQgWAYgWAAIgBAAgAIpDzQBAg6AGhHQACgbgGgeQAeAaAAA+QABAXgDAXQgDAVgHAUQgOAqggAmQgEg8gigJgApDnkIAAgEQgFgkgJgdQgSg8glgnQgDgUAXALQBLAtAJAwIABAEQgBArAXAnQASAYgegDQgegPAAAaQgFADgDAAQgMAAAEglg");
	this.shape_8.setTransform(-167.6256,27.8189);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#284179","#6081CA"],[0,1],-93.8,87.6,0,-93.8,87.6,175.1).s().p("AFPNIIgMguQgKgvAAgoQAAgxAPgnQAOgiAagbQgEgJAAgKQAAgQAIgTQgIATAAAQQAAAKAEAJQgaAbgOAiQgPAnAAAxQAAAoAKAvQgdASgGiaIACgSQACgxgBgrQAAg9gIgyQgEgcgSgqIACABIAAAAIABAAQAOAFANAAIAAAAIABAAQAegBAYgXIACgCIgCACQgYAXgeABIgBAAIAAAAQgNAAgOgFIgBAAIAAAAIgCgBQgGgLgSACQhugShQhIQgrgzA0AHQA1AXBAgOQANgMAMgHIAGgFQihoRnGjCQhJggg3gRQA3ARBJAgQhTAMgTAvQgqBlhwgdQgfgFApgcQBfhAgdirIAAgKQgCgXgFgVQgWhthVhLQgggkBBASQCmAqAaBeIAHAbIAKAhQAQA5ApAfIg2AEIA2gEQFJAHDGCAQEiC6BzDvIgCgBIACACIAIAJIgIgJIgCgCIACABQBAAIA6hYIALgPQADgfAdAqQAqBQgcBpIgHAaQgMAjgSAmIgKALIADACQBBB2gOCVQgKBfgqBqQgyBch3AyIhGCLQgQAPgOAAQggAAgYhKgAIFIbIgHADQg6ARgEAtQAxAcAJAzQADAlBFhMQAag4gZgcQgNgWggAAIgRABgAGLJIIAHADIgHgDQgUgKgHgQQAHAQAUAKgAADl2QDDCmCREqIADAEQAyBrAuBxIAFANIACAEQA4CkA5ABQAXAAAXgYQAOgQAOg1QAfi3hPh4IhciJIgBgBIgBAAQh0ixigiQQjzjbmPgPQDYA3DTCkgAEhDrIAAAAIgCgCIgBgBIgBgCIgCgBQgZgXgagBIgBAAIAAAAIgNACIgBAAIgMADIgHAEIAHgEIAMgDIABAAIANgCIAAAAIABAAQAaABAZAXIACABIABACIABABIACACIAAAAIAAAAgAKTC8QgKgIAAgKQAAgKAJgMQgJAMAAAKQAAAKAKAIgAKkg3QgGBGhAA6QAjAJAEA8QAfgmAOgqQAHgUADgVQAEgWgCgXQAAg+gdgaQAGAegDAbgApSs2QAkAnATA8QAJAdAEAkIABAEQgFAwAUgOQAAgaAeAPQAeADgSgYQgXgnACgrIgBgEQgKgwhLgtQgIgEgFAAQgIAAACANgAmboCIAAAAg");
	this.shape_9.setTransform(-172.9941,44.8202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-453.7,-47.5,400.09999999999997,184.7);


(lib.shape10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmFABUIgfgFIgZgIQgIgEgKgDQgwgLgzgGQgMgBgLgFIgUACIg4AEIhXgGQgdgHgbAHIgkAEIh7gFIgggFQg4gPg5AUIgjAFQhegBhcAFQhBADhAgFQhcgHhZAYIgpAJIgtAGIgkADIg9gFQgHgBgEgHIgDgLIgEgTQgDgSATgCQALgBAOgHQATgFAHgXIADgDIAJAAIAsAGQAJACAIgGQAPgKAQABQARABAQAIIAWABQAEgFAKABQAfABAfAJQAfAJAXgUQAIgGALACIAXgCQAPgGAOgLQAegYAjASIAhANIAXAGIATACIBEAGQATABASgGQAigLAoAEIAfAFIAUAIQAUAMAcABIAUAEIAfgBIALgCQAuADArgOQAHgCAJAHQAXAPAbgPQAZgPAZAOQAhAQAfgXIAPgCQAUAHAWgHIAOgDIAaAFQAfAMAkABIAZAFQAYAJAYgDIADAWIAEgBIBggIIgCgZQAPACAOgIQAagNASgXQAMgPASAFQAYAHAUAQIAUAQIAQALIAJAJQATAYAggMQAcgTAfAMQAcANAXgOQARgJATgCIArAAIBdgGIAqgCIB8AHIAZABQAXACAIgZQAdAgAWgfQAVgaAggEQANgCAIAGQAEAEADAIQAFAMAJAFIAKAFIARAKQAJgEAJAEQAYgDAUgPQAXgRAPAVQAIALANgHIAXgMIARgCIASAEQARAEANgLQAOgNAOALQAKAHANACQAQAEAPgEIAXADQAiAOAbgSIAcgUQAVgQAaAFQAHACAEAHIAXAdQAJAJANABIAZgCQAPgEAOAEIAWAJQAVAMAWgCQAJgEAIAEQAIAFAJAAIgEAXQAugaAyAJIAcAHIgCgTIBGgFQAPgCANAJIAHABQADAAAGgBQAgAGAdgUQAjgZAjAUQANAIAQABIA8gEQARgDAQgJQAagOAdAAQAMABAMAHQANAJAVgMQAHgEAJAAQAUgBATAJIAWABIAhgOQAggPAkAQQAOAHAPADQA7APA6gXQATgHASgJQAagNAZAQQATAMAWgGIAagDQAMAAALAHQAcAUAegMIAQAAIAPAGIAQACIAUgEIAyADIASACIBvAAQAZAAAYgIQAqgOAqAOIAiACQAmgHAjARQAQAIAWgBIBEgCIArACQAhACAdgLIBEgVIBFgWQASgHAOAJQASANAYgIIAZABQAZAMAegFIAYgDIAyACIAlACQATAAAUAIIAXAFQARAAAQAHIAcADQBHgMBIAMIAxADQAQgBAOgHQAlgSAgAcIAYgBIAngCQAbgIAQAZQALAFAMABQAdADAdgJIAegFIAeAGIA5gCIAkgCQAyAFAsgVIAXgEIAfACIAZgCIA+gNQAmgGAegXQAWgPAVANQANAHAMACQAMABANgBQAhgEAfANQAKAEAMgBIBLAFIAegBQAagGAXAGQAvANAxgSIAWgDIAlADIAgAGIAYgBIBEgFIAfAAIA4ADQAWAGAWgGIAWgBIBFACIAZACQAeAJAfgRQAWgNARANQAVAQAWgNQAUgMAWAJQAkAMAngBIA3gCIArgBQAbACAYgKIAYgFQAQAAAPAKQAPAJAQAEQARAFAAATQAAAOgMAFQg0AZhBACIjrADImRgBIg5AAIj9AFIjLgGQhbgHhZALIiOAQIgsAEIgeACIgZgBIhQAFIhqAHIh7gCQgmABgkgOQgtgRgsARQgZAKgbgCIgzgHQg2gLg2gDIgkAGIgcgBIhqAGIg3AIQgXAEgWgFIgqgGIgrgFQhWgLhLAdQgZAKgRgMIgkACQgLAHgQAAIg+gCIgeABQghAFgegGIg3gDQheAFhcgTIgdgIQhNgbhVAIIgyAEIgrACIgxgDQhHgHhBAaQhAAag9gcQgRgIgSgCQgwgEgsAQIgMADIhMgVIgKABIgMAGQgwgJgwAMIgeAFIABASIiVADIjSABIh3gJQgygIgvgPIgHASQhGgOhJAWIgjACQhTgLhVAJIgkgCIhegRIg3ADQg/ARhCgEIgggCQgzgDgwANIgYAEIgRAFIgWAGIgRADIgkgEIgPgFIgRgDIgqAEIgPAFIgRADIgegDIgUgHIgEgRQgOgIgSACIgOACIhhAMQgZAEgYAGQguAMgxAAQgSAAgSgBg");
	this.shape.setTransform(-0.0001,0.0335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388.9,-8.5,777.9,17.1);


(lib.shape9copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVAB+IgxgMQhEgVhIAIQhOAIgsgfQgJgHgKAAIjIgOIhQgDQiUAKiYgHIg7gHQgngJgqAIQiLAdiNALIgxACIgfgDQiTgdiYAwIg9ARIg7AHQhaABhagFIgngGIgggKQhggfhngOIiggVQgwgGgrANQgmAMgeAYQgcAVghACIgdgBIjTgSQgZgBgYgJQhSgfhYAdIhHADQhJgPhNgFQgZgCgYgJQgngPgqACQguACgsAPQhJAZhDgjQghgSglACIg8ADIhQAGIg8ACQiXAAiUASIi1AYQgUADgLgKQghgfgkAUQgUALgUABQhIAFhEAPQhDAQhIgGQgLgBgFgFQgVgTgYgDIgdgFIgfgFIgdgHQgtgMg4ADQg5AEg5gBIAFgTQgBgVgJgvIgKg2IAAgKIBnADIDIgCICNADQCGACAkgNICagGIB/AOICwgLICFgKQA0AABQANQBQAOBCAAIB7gEIB5gHQARgCA5AEIBCADIEQgRQEOgQAsAHQAtAIFgACIIRACIEhAAIDugMQBFgMFEAMQFEAMB+AAIDKgOQCdgOBqAGICxAHICQABICCgHICDgHQBCAABSAOQBSAOAZAAICBgDQBugDDCgdIELAAIDSAOICmgKICtgLIDlAHQCiAFAfgFIBSAAIAFAHIABAOQAAAIgdBlIhJAFIhiALIh6ARQgsAGgsgEIkFgQIgogDIhFgDIggADIgwAHIkQA0IiLAbQi7AkjBgMIiWgJQh7gHh1AbQhiAXhmADIgzABQiKAAiDgZg");
	this.shape.setTransform(0,0.0182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.5,-15,781.1,30.1);


(lib.shape9copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al4ILIgKgvIADgYIgTAYQgaAggMAJQgKgKABgEQgBgIAZgfIACgDIAAAAIgigEQACgGgCgEIiEAGIgzgFIgBgFIBdgIICHgPIgEgBIAAgEIg8gEIAAACQgBADgJACIiCAEIhXgGIgEgDIACgBIghACIgxgFIgBgHQAAgDAMAAIBmgJIAAAJIAPAAIAAgIQAAgLAJgTQALgZAOALQgTAcgHAYIA1AAIgDABIAZAAIgDgBIA+AAIgCgLQAAgQAKgKIAcgUIgIAAQg4AAgeAVQgQALgHAOQgFgDAAgFQAAgJAagTQAbgVAQAAIBEACQAbgRAhgIQAfgJANAEQgHAHhEAcQAKAEAKAJIAGACIAwAAIAAgCQBNADAMAKQAIAGgEAUIgFAFQgJgEgDgGIgBgEQhfABglgSIgSAAQAAABgBAAQAAABAAgBQgBAAAAgCQAAgBABgDQgBgDAEgCIgMgGIgHgCQg/AaAJAXQgCADgGABIASAAIAAgCIAKABIgBABIEZAAIgDgbIgUgHQgVgHgSgNQgVgRgDgPIgBgfIABgeIAGAAQgBBQAsALQAdAHABACQAOAHAAAZIgBAPIATAAQABgMAIgQQAKgWAMgBIACgCIABAGIgMAWQgIAOgCALIA8AAIAAgBQAAgKAHgLQAKgPANAEIgKASIgJAPIA5AAIAAgEQAAgQAPgNIAtgfIAJAEIgpAjQgRAOgDALIANAAQAEgSAfgPQAfgOAqgFQgNAKgyAYQgUAJgJAJIAIAAIBQAAIBpAAIgCACIgYABIgEAAIgLgBIAAAFIgNAEIgBAAIAZABIAgAEIAEACIAAANIgEACIggACIgFAAIg2gEIgygGIgBgCIhbAAIAMAMQgOAWhLABQhpABgLACQgoANhBAAIgUgBIgCAEQAAAfATARQAbAaAGAOQAAAFgKAAQgiAAgSgugAmbG5IgCABIAHABIADgDgAl2GzIAAADIAFgEIgDAAIgCAAgAltGzIABAAIgCgBgAkEGkQAYADATgCIgBAAIgqgBIgEAAgAmMGhIAHgBIgGAAgAquFpQgPgWgrgKIAAgFIAFgBQA3gBASA4IgBAQIgEABQgHgWgIgMgAiRF8QAAgRApgaQAvgeAxAAQAMAAAEAEQgZAJguAWQhAAdgNARQgFgDAAgFgAoUEGQAEglATglQAWguAggPQgZAZgTAtIgcBDgAqQD0IABgUIAGAAQADAGAAANIgBAUIgHABgAlBDMQgEgKAAgKIADgGIACABIAJABIAAAVIgDADgAjLC4IgCgMIABgMIAGAAQADADAAAJQAAAJgDADgApQBwQAAgxAaAIIgTAtIgFAAIgCACQAAAAAAgGgAmBAhIABghIAGAAIAHBFIgDADQgLgJAAgegAlBAqQAAgIAKgcQALgeAIAAQAJAAAEAEQgWARgLAyIgHABIgBABQgBAAAAgHgAn5gSIAGgtIAGAAQACAGABAOIgFAfIgHABgAjhg6IAoglQAoghAdAAQAJAAAEAEIhEAjQgdAagXAIgAqIhDQAAgYAfgcQAegaApgOQgmAig+A+IgCACQAAAAAAgGgAm0jAQAMgcANgEIAIAEQgGAVgXAIgAk1lnQAAgDATgIQADADAAAJIgUAEIgBACQgBAAAAgHgAnYmUQAAgPALgDIACAGIgGASIgFAAIgBABQgBAAAAgHgALhn5QAEgKANAAIAkAEIgBAGIgrAEQgHAAgCgEgAB6oMQADgKARgNQAQgNANgDIAIAEIg0AlgAIxoyIgBgGIAGABIAlAEIgCAGIgmAAIgBABQgBAAAAgGg");
	this.shape.setTransform(-403.301,64.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#28496F").ss(1,1,1,3,true).p("AMekSQAIgrACgmQABgbgDgZQgIhhg6g8QgpgiAGAfQgPA1gVAgQgeArgqAGIANAIAJVmxQjbiHl4BlQj+BWjzDxIglAsAKDHiIAaAqQBBBhAmg/IAdifQBohTAYhrQAMh3gShgQgciZhjhjIACgQIgGAPQgNAeAZAJAMZEUIAGAOQA5gmgWgtIgEgKQgPgWgpAWQgsAdABAXQAJgBALAFQAFgkAhgFQAyAMguA0QgPgZgbACAMcD7IAFgCIACgFIgCgGQgCgCgDABQgDgBgCACIgCAFIACAFgAIdD0QANArAMAyIAEASQAxCYAYgZQg1hhAIhQQADgmATgjQALAOAZAFIAGABAH1CIQAVAwATA8AJsDoQgRgSAHgkAFgg+QgLALgJAPQg8Ahg7gIQg3AIA6AmQBkAxBzgNQASgIAKAKQA1ADAcgxAFgg+QAngmA5AhAH1CIQgqBBgxAHQgUAPAxAPQAvATA3gNAnviMQg2AIg1gcIg6gfQglgUgvAEQhEAGhYA2Qg9AlAzADQA3gFA1AMQBNASBDA2IAIAHQCCBXABBlIgDAdQgIA0AZgUQAWgNAPgQQA4g4gjhSQgVgxAzhGQhNAhg1AcAmhg6QHbjJEmDFAHLBJQAdAjANAc");
	this.shape_1.setTransform(-208.1496,30.2669);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C60B3").s().p("AghAuQgxgQAUgOQAxgHAphBQAWAxASA6QgWAGgWAAQgdAAgcgLg");
	this.shape_2.setTransform(-160.8899,49.5304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAJQAFgiAggGQAyAMguAzQgOgZgbACgAAIgFIgCAFIACAEIAFADIAFgCIACgFIgCgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_3.setTransform(-129.8286,54.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHAmQAugzgygMQggAFgFAjQgLgFgJABQgBgWAsgdQAogWAPAWIAEAKQAWAsg5AmgAAFAKIgCgFIACgFQACgBADABQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIACAGIgCAFIgFACg");
	this.shape_4.setTransform(-129.5448,54.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FB3DF").s().p("AAJBJQgWgwg5gNQgJguA1giIAHgEQAqgUAYAXQAhAUgKA/QgiBFgRAAQgGAAgEgKgAAJAfIAGAOQA5glgWgsIgFgKQgPgWgoAWQgrAcABAWQAIgBALAFIADAAQAaAAANAXg");
	this.shape_5.setTransform(-129.6841,54.7449);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6392C5").s().p("AgCAHIAFgOIgCAPg");
	this.shape_6.setTransform(-128.625,3.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8099D5").s().p("AJbC8IgCgEIgJgMQjakUmkArQkUAojFB5QEskgFTgXQEtgWDMCOQDLCNgIC1QgHAfgKAVQgQAfgWAFIgLACQg5AAheiFgAp9CDIgEgDQhZhBhSgBQgSgNAZgIIAFgCQBagWAnAeQAfAgAuALQAeAEgYAUQggAMATASQgCAKgGAAQgJAAgTgXgAKvhzQAkg6AAg5QAAgugXgsQAkASASA9IAJAhQAGAdgCAdQgCAugTAvQgWg6glAAg");
	this.shape_7.setTransform(-204.9384,9.7697);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#284179","#6081CA"],[0,1],1.1,67.5,0,1.1,67.5,106.2).s().p("AKdIMIgagqQguhVAAhIIABgUQADgmATgjQALAOAZAFIAGABIgGgBQgZgFgLgOQgMgMAAgXQAAgJACgKQgCAKAAAJQAAAXAMAMQgTAjgDAmIgBAUQAABIAuBVQgYAZgxiYIgEgSQgMgygNgrQgTg8gVgwQgNgcgdgjIAGAAIAAAAIABAAQAvAAAagrIAAgBIABgCIgBACIAAABQgaArgvAAIgBAAIAAAAIgGAAQgKgKgSAIQhzANhkgxQg6gmA3gIQA7AIA8ghQAJgPALgLQkmjFnbDJQhNAhg1AcQA1gcBNghQgzBGAVAxQAjBSg4A4QgPAQgWANQgZAUAIg0IADgdQgBhliChXIgIgHQhDg2hNgSQg1gMg3AFQgzgDA9glQBYg2BEgGQAvgEAlAUIA6AfQA1AcA2gIIglAsIAlgsQDzjxD+hWQF4hlDbCHIANAIIgNgIQAqgGAegrQAVggAPg1QgGgfApAiQA6A8AIBhQADAZAAAbQgDAmgIArIgGAPIAEABQBjBjAcCZQASBggMB3QgYBrhoBTIgdCfQgPAZgTAAQgeAAgng7gAL9CrIgIAEQg1AiAJAvQA6AOAXAvQANAlAwhgQAKg/gigUQgMgNgTAAQgPAAgUAJgAJwggIAJAMIACAEQBoCRA6gPQAWgFAQgfQAKgVAHgfQAIi0jLiOQjMiOktAWQlTAXksEhQDFh6EUgoQA3gGA1AAQFVAAC9DwgAsAilIgFACQgZAIASANQBTABBYBBIAEADQAfAmAFgZQgTgSAggMQAYgUgegEQgugLgfggQgWgRgnAAQgdAAgnAJgAFgg+IABgBQAVgTAZAAIAAAAIABAAQAVAAAZAOIAAAAIADABIgDgBIAAAAQgZgOgVAAIgBAAIAAAAQgZAAgVATIgBABgAMkjcQgQgGAAgPQAAgIAEgKQgEAKAAAIQAAAPAQAGgALzmzQAAA5gkA6QAlAAAWA6QATgvACguQACgdgGgdIgJghQgSg9gkgSQAXAsAAAug");
	this.shape_8.setTransform(-208.1496,30.2669);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-482.3,-29,368.6,150.9);


(lib.shape8copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao8N/IgBgMQABgUAoguQAWgaAXgOIgJAAIgygFIgBgFIBegIICggTIhYgFIAAACQgBADgKACIiCAEIhWgGIgEgDIACgBIghACIgxgFIAAgHQAAgDAMAAIBmgJIAugEQgLgGAAgHIABgFQgHgIgPgJQgYgNgcAAQgoAAgVAIQgPAJgGABIgDgDIAWgQIARgKQBQAAAXAQIAMAMIAIAGQAEgGAHgDIAAgJIgEgHIAEAAIABgIQACgsAPgLQAMgJBfglQhNAlgPAMQgUAQgCAiIAAAKIAEAAIgBAKIgBACIAagCQAkAAgBAJQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAgBAAIgJgFQgTgGgXAUIARAQIgCADIBnAKIDAADIAAABICIAAQgFgCABgLQACgiAagrQACgTARgUQALgNANgGQALgLAJgEIACAGIgCAEIASABQgIAJghAVIgJAHIgEAEQgpA2gGA4IgEABIAGAAQAGgUAOgOQAdgdBKgRQhYAlgQAWQgEAFgCAPIAQgJQAfgPAigCIAMgBQAPgFAOAAQBZAAAnAPQAzAUBuAJIABAEQAAACgGAAQhgAAgvgTQgwgUgVABIgdAAIAFABQAqAIAJAHQAEAFgKAAQg5gQgqgBQhCAIggAYIgDADIARgDIBTAFIgCAFQhXABgcAJIgDACIAAADIgBAGIgBAMIgMAAIgDACQgCAFAAgHIhOADQgpANhAAAIgVgBIgCAEQgCAfASARQAZAaAGAOQgBAFgJAAQgjAAgPguIgHgvIAFgYIgVAYQgcAggMAJQgKgKABgEQAAgIAbgfIACgDIAAAAIgigEQADgGgDgEIhdAGQhPAbgfBbgAk9L9IgCABIAHABIADgDgAkXL3IgBADIAGgEIgDAAIgCAAgAkOL3IABAAIgCgBgAikLoQAXADAUgCIgBAAIgqgBIgFAAgAgXLRQgWALAAAOIAMgEIAQgMIAggVQgWAEgQAIgAn5LUIAYAAIgQgDgArVK3IgBgGIAGABIBwAEIgCAHIhyAAIgBABQgBAAABgHgABSKZIAAgFIAGgBIAYAEIABAEIgGACgAlPKEIACgQIAGAAQADADgBAMIgCAPIgEACQgFgGABgKgAADKJIAKACIgFAFQgFgDAAgEgAjPKHQALggAFgbIAGAAQADADAAAKIgHAZQgIAUgJAGIgBABQgBAAABgGgADLKFIAKACIgFAFQgFgDAAgEgAk9JhIAKACIgFAFQgFgCAAgFgAo7JHQAFhRAyg2IADAGQgBASgWAuQgXAxgEArIgFACQgEgJABgUgAC/JFIABgFIAEgBIAJAEQgCAFgDABgApJIxIAJACIgFAFQgFgCABgFgAlsIPQABgKAUgNIACAGQgBASgUAEIgBABQgBAAAAgGgABQIBIAJACIgFAFQgFgCABgFgAi7H7QABgKAHgUQAJgWAFgbIAGAAQACAJgBAUQgDAvgYAIIgBABQgBAAAAgGgAhQHOIACgOIAGAAQACADAAAKIgCAOIgHABgAnMGNIAKACIgFAFQgFgCAAgFgAozGGQAAgHAFgHQAGgIAIAHQgIAQgEAFIgFAAIgBABQgBAAAAgHgAB/GCQASgdACgrIgDhOIACgMIAGAAQAJApgDAxQgEA5gWARgAnGFwIAOhQIAGAAQADAJgCAXQgCAlgMAPIgFAAIgCACQAAAAAAgGgAjMFVIACgVIAGAAQACAGAAAOIgDATIgHABgAhXFcIgBgMIABgMIAGAAQADADAAAJQgBAJgDADgAoJEsQACgmAJgVQALgYAggdIANAAQhBA6AEBYIgEACQgEgLACgZgAkiExIAKACIgFAFQgFgCAAgFgApSBsIAGgFIAIAEIAAABgAASBaIAJABIgFAGQgFgDABgEgABJBJIgCgLIAIgbQAHgTAFgEIAFgCQAEAAAAAGQgBARgVAogAAHACQACgoAQgQQADADAAAEIgNBGIgEACQgFgGABgRgAofACIAKACIgGAFQgFgDABgEgABMgRIAKACIgFAFQgFgDAAgEgAj5ipIAKACIgFAFQgFgCAAgFgAlrjFIBGgSQAJAAAEAEQgdARgvAAgADrjJQAKgDAVgXQANAAAEAEQgcAYgHACQgLgBgCgDgAHcjlIA/ghQAkgVgBgPIAEgBIAEgBQAFgBgBAGQgCAnhqAegAGUkZQAAgIAVgKQATgKAHACQgGARgkAMIgEACQgCAAABgFgAIgkeIgDgHIAJACIgBACIAFACIgFAFgAKtktQAcgVAMAAIACAGQAAAIggAKgAh9lxIAAgFIAFgBQANAAAEAEQgCAFgDABgAgEn8IAIABIgEAFQgFgCABgEgACwpcIAKACIgFAFQgFgDAAgEgAEXrJQAAgMAUgEIACAGQACALgUADIgDACQgCAAABgGgAH3sWQAAgFAkgUIAkgTIA4AEIgCAGQhBAEgSAPQgWAQgTAEIgCABQgBAAABgGgAJgtkIAKACIgGAFQgFgCABgFgAI9t0QAEgKANAAIAhAEQgDAKgjAAQgKAAgCgEg");
	this.shape.setTransform(-404.875,33.7988);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#28496F").ss(1,1,1,3,true).p("Ap6AgQgzAJg1gZIgfgPIgagLQhYgsiNBeQg5AmAwAAQBxgOBgA4QATAKASAOIAJAHQCSBcgPByQgHAyAYgUQBihBgwhjQgXguAvhGQhJAjgxAeAp6AgIgiArAKLkGQgQgogTggIgOgWQg9hdhYgVQgygHAUAXIAGATQAaBmgxAqIgCACIADAAIAMAAAKLkGIABAOQAGAgAZgGAOPGxIArAWQBoAtgChHIg5iQQAqh7gjhiQg0hnhBhGQhkhuiFgdIgFgOAIoDCQgNgDgLAQQhXBFhrANQhCgDAngiQA0gYAhg6QgBgRAEgOIABgHIAGgMQATgiAygBAIoDCQAtgagDg0AJqDgQAABLglAfQgIAVAvgLQAxgJAmgnQgugogrgcgAIoDCQAqAOAYAQAOhC8IAMAJQAbg8gogaQgFgEgFgBQgXgLgWAnQgVAuANASQAGgFALgCQgOgfAYgVQAvgRgKBCQgagMgVAPAOPGxQhcg0gihEQgRgigDglAMpDsIgGADQgVAIgRgFQgXgHgOghAOYCdQgBgDgDAAIgFABIgDAEIABAFIADAEIAGgBIADgFgAGWkjQj/hJlMBcQjkA/jhDxAosBrQHAjQH3DpALDEkIBDA/IANANQB3BiAFgh");
	this.shape_1.setTransform(-272.8637,-35.3681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLgXQAugRgKBBQgZgMgVAPQgOgeAYgVgAAHgHIgDAEIABAEIADAEIAGgBIADgEIgBgFQgBgDgDAAg");
	this.shape_2.setTransform(-182.4913,-19.0731);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgggQQAWgmAWAKQAFACAFADQAoAagbA7IgMgIQAKhCguARQgYAUAOAfQgLACgGAFQgNgSAVgtgAADAOIgBgGIADgEIAFgBQADABABACIABAGIgDAEIgGABg");
	this.shape_3.setTransform(-182.2585,-20.3125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9FB3DF").s().p("AAuBCQgrgag1ASQgfgiAZg1IAEgIQAZgmAeAGQAmAAAZA5QAIBTgSAAQgEAAgGgFgAgegVQgVAtANASQAFgFAMgCQAVgPAYANIANAIQAbg7gpgaQgFgDgEgCQgFgCgFAAQgRAAgRAeg");
	this.shape_4.setTransform(-182.4408,-19.8226);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C60B3").s().p("Ag9AuQAlgfAAhKQApAcAuAnQglAngwAJQgRAEgJAAQgTAAAGgOg");
	this.shape_5.setTransform(-208.5395,-6.9746);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6392C5").s().p("AgCgGIAFANIgEAAg");
	this.shape_6.setTransform(-207.525,-60.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6AA6E1").s().p("AAAAAIABAAIgBABgAAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(-232.425,-60.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8099D5").s().p("ArFEBIgEgDQgdgUgcgMQg6gbg0ACQgSgMAXgJQBVgaApAYIAEADQAfAeAtAJQAdACgWAUQgfANATARQgBAKgGAAQgJAAgTgVgAKmC8IgEgCIgOgGQhygohygiIgFgCQlBhbj9AkQkIAwi5B+QEVkhFGgjQDXgYDRAhIADgCICkAYQCOAUB1CRQAdAtADAXQADAggPARQgQAQghAAQg0AAhigogAJOhmQAAhWgyg0QgTgVgagPQAngFAuAqQATAOAPASQANAQALATQAVAmAIAxQgvgkgeATg");
	this.shape_8.setTransform(-275.6581,-51.0635);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#284179","#6081CA"],[0,1],13,143,0,13,143,175.5).s().p("AO6HHIgrgWQhcg0gihEQgRgigDglQAGACAHAAIAAAAIAAAAQAMAAANgFIAGgDIgGADQgNAFgMAAIAAAAIAAAAQgHAAgGgCQgXgHgOghQAOAhAXAHQADAlARAiQAiBEBcA0QgFAhh3hiIgNgNIhDg/QgugogrgcQgYgQgqgOQAqgYAAgvIAAgHIAAAHQAAAvgqAYQgNgDgLAQQhXBFhrANQhCgDAngiQA0gYAhg6QgBgRAEgOIAAgHQn3jpnADQQhJAjgxAeQAxgeBJgjQgvBGAXAuQAwBjhiBBQgYAUAHgyQAPhyiShcIgJgHQgSgOgTgKQhgg4hxAOQgwAAA5gmQCNheBYAsIAaALIAfAPQA1AZAzgJIgiArIAigrQDhjxDkg/QFMhcD/BJIgCACIADAAIAMAAIgMAAIgDAAIACgCQAxgqgahmIgGgTQgUgXAyAHQBYAVA9BdIAOAWQATAgAQAoIABAOQAFAbASAAIABAAIAAAAIAGgBIABAAIgBAAIgGABIAAAAIgBAAQgSAAgFgbIAEAAQCFAdBkBuQBBBGA0BnQAjBigqB7IA5CQQABArgmAAQgYAAgpgRgAO3DeQAdAXgKhnQgZg4glAAQgfgGgaAmIgEAHQgZA2AfAiQAWgHAUAAQAeAAAaAQgAGSB4IgGAMIgBAHIABgHIAGgMQATgiAygBQgyABgTAigAseBBQAcAMAdAUIAEADQAgAjADgYQgTgRAfgNQAWgUgdgCQgtgJgfgeIgEgDQgpgXhVAZQgXAJASAMIAFAAQAyAAA3AZgAGPg0IAFACQByAiByAnIAOAGIAEACQCfBCAogqQAPgRgDggQgDgWgdgtQh1iSiOgUIikgYIgCAAIAAgBIgBABIABAAIgBACQjRghjWAYQlHAjkVEhQC5h9EIgwQBHgKBMAAQDEAADnBBgAJ/jyQgIgxgVgmQgLgTgNgQQgPgSgTgOQgugqgnAFQAaAPATAVQAyA0AABWQAKgHANAAQAXAAAfAYgAL9DyIAAAAg");
	this.shape_9.setTransform(-272.8637,-35.3681);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477.6,-83.6,311.40000000000003,206.89999999999998);


(lib.shape7copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApXN/QgCgDACgJQACgUApguQAYgaAXgOIgJAAIgygFIgBgFIBegIIChgTIhYgFIAAACQgBADgKACIiCAEIhWgGQgCAAAAgBQgBAAAAgBQgBAAAAgBQAAAAABAAIABgBIghACIgwgFIgBgHQAAgDANAAIBmgJIAugEQgLgGABgHIABgFQgHgIgOgJQgYgNgbAAQgpAAgVAIIgWAKIgCgDIAWgQIASgKQBPAAAXAQIALAMIAIAGQAEgGAIgDIAAgJIgDgHIAEAAIABgIQAEgsAPgLQAMgJBgglQhOAlgQAMQgUAQgDAiIgBAKIAFAAIgCAKIgBACIAagCQAkAAgBAJQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgKgFQgSgGgYAUIAQAQIgBADIBmAKIDAADIAAABICHAAQgEgCABgLQADgiAdgrQACgTASgUQALgNAOgGQALgLAJgEIACAGIgDAEIATABQgIAJgiAVIgKAHIgEAEQgrA2gIA4IgFABIAGAAQAHgUAQgOQAegdBJgRQhYAlgRAWQgEAFgDAPIAQgJQAggPAigCIAMgBQAPgFAOAAQBZAAAnAPQAyAUBuAJIAAAEQAAACgGAAQhgAAgugTQgvgUgWABIgcAAIAFABQApAIAJAHQAEAFgKAAQg5gQgpgBQhCAIgiAYIgDADIARgDIBUAFIgDAFQhXABgdAJIgCACIAAADIgCAGIgBAMIgNAAIgCACQgDAFABgHIhOADQgqANhAAAIgVgBIgCAEQgDAfARARQAYAaAFAOQAAAFgKAAQgjAAgMguIgGgvIAGgYIgWAYIgqApQgJgKABgEQABgIAbgfIADgDIgBAAIgigEQADgGgCgEIhdAGQhQAbgjBbgAlTL9IgCABIAIABIACgDgAktL3IAAADIAGgEIgDAAIgCAAgAkkL3IABAAIgCgBgAi5LoQAXADAUgCIgBAAIgqgBIgFAAgAgrLRQgXALAAAOIAMgEIARgMIAigVQgXAEgRAIgAoNLUIAYAAIgQgDgAroK3IgBgGIAGABIBwAEIgCAHIhyAAIgCABQgBAAACgHgABAKZIABgFIAFgBQAVAAADAEIABAEQAAABgGABgAlgKEIACgQIAGAAQADADgBAMIgCAPIgFACQgEgGABgKgAgNKJIAKACIgGAFQgFgDABgEgAjhKHQANggAGgbIAGAAQADADgBAKIgIAZQgJAUgIAGIgCABQgBAAABgGgAC6KFIAKACIgGAFQgFgDABgEgAlMJhIAJACIgFAFQgFgCABgFgApKJHQAIhRA0g2IADAGQgCASgXAuQgZAxgGArIgEACQgFgJACgUgACxJFIAAgFIAFgBIAJAEQgDAFgDABgApXIxIAJACIgFAFQgFgCABgFgAl4IPQABgKAUgNIACAGQgCASgUAEIgCABQAAAAABgGgABDIBIAKACIgFAFQgFgCAAgFgAjHH7QABgKAJgUQAJgWAGgbIAGAAQACAJgCAUQgFAvgYAIIgCABQgBAAABgGgAhaHOIACgOIAGAAQACADAAAKIgDAOIgHABQgCgDACgLgAnUGNIAKACIgFAFQgFgCAAgFgAo7GGQABgHAFgHQAGgIAIAHIgNAVIgFAAIgCABQgBAAABgHgAB4GCQASgdAFgrIgBhOIADgMIAGAAQAHApgFAxQgGA5gWARgAnNFwIARhQIAGAAQACAJgCAXQgEAlgMAPIgFAAIgCACQgBAAABgGgAjSFVIADgVIAGAAQACAGgBAOIgDATIgHABgAhdFcIgBgMIACgMIAGAAQADADgBAJQgBAJgDADgAoOEsQAEgmAKgVQAMgYAhgdIANAAQhEA6ACBYIgEACQgEgLACgZgAknExIAKACIgFAFQgFgCAAgFgApPBsIAGgFIAIAEIAAABgAAVBaIAKABIgFAGQgFgDAAgEgABNBJIgBgLIAJgbQAIgTAFgEIAFgCQAEAAgBAGQgBARgXAogAAOACQAEgoAQgQQADADAAAEQgBAKgPA8IgEACQgFgGACgRgAoYACIAKACIgGAFQgFgDABgEgABUgRIAKACQgCACgEADQgFgDABgEgAjsipIAKACIgFAFQgFgCAAgFgAldjFIBHgSQAJAAADAEQgdARgvAAgAD6jJQAKgDAVgXQANAAAEAEQgdAYgHACQgLgBgBgDgAHsjlIBAghQAkgVAAgPIAEgBIAFgBQAEgBAAAGQgEAnhrAegAGlkZQABgIAVgKQAUgKAHACQgHARglAMIgEACQgCAAABgFgAIykeQgEgCABgFIAJACIgBACIAFACIgGAFgAK/ktQAdgVAMAAIACAGQgBAIggAKgAholxIAAgFIAFgBQANAAAEAEQgCAFgEABQgPgBgBgDgAAVn8IAJABIgFAFQgFgCABgEgADOpcIAKACIgGAFQgFgDABgEgAE4rJQABgMAUgEIACAGQACALgUADIgEACQgCAAABgGgAIbsWQABgFAkgUIAlgTIA4AEIgCAGQhBAEgTAPQgXAQgTAEIgCABQgBAAABgGgAKHtkIAKACIgGAFQgFgCABgFgAJlt0QAFgKANAAIAgAEQgDAKgjAAQgKAAgCgEg");
	this.shape.setTransform(-409.8531,34.7988);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#28496F").ss(1,1,1,3,true).p("ADVpnQglgWgigPIgZgKQhngmhSAjQguAZAfAGIAPAMQBRBCgNBAIgBACIABgBIAKgIANGjSIAvgJQBugZgrg4IiFhSQgmh7hYg6Qhng1hegSQiSgdh9A4IgMgIIAJALQAYAWARgUAGVi8QgMAEABAUQgcBshPBIQg3AmAMgzQAbgygIhBIgQgbIgDgHIgDgNQgFgmAogfAAAnsQj5BdjUEQQiTC6glFJALCmiIAPAAQgPhAgvADIgLABQgZAFAFAtQALAxAVAHIAJgQQgdgRAGgfQAdgpAfA7QgcAFgJAZAKjm2IgEAEIAAAGIAEADIAFAAIAEgDIAAgGIgEgEgAJNjKQg8gFg0ADQgdACgrAOQAWgwgigoAJ+k0IgDAFQgMAUgRAGQgXAIgegSAJNjKQgHA2giAkQgfAmgGgXQALgvgtg8ANGjSQAPAeiagJIgSgDIhcgKANGjSQhqANhEgiQghgSgZgcAoYGSQADBUAuAXQBhA0gnBuQgIAegYgsQg4hlisANIgLAAIgsADQhvAMhTBOQgnAdAXhAQA6ihBhgRIAbgGIAigHQA6gKAjgmIgBA2AoYGSQgnBHgWA2ADziSQogBxjrGz");
	this.shape_1.setTransform(-348.5571,-14.3076);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcgOQAcgqAeA7QgcAFgHAZQgdgRAGgegAgEgMIAAAFIAEADIAFABIAEgEIgBgFIgDgEIgFAAg");
	this.shape_2.setTransform(-281.0264,-56.4526);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtgBQgFgtAZgFIALgBQAugDAPA/IgPAAQgfg6gcApQgGAeAdARIgJAQQgVgHgLgwgAABABIgDgCIAAgGIADgEIAFAAIAEAEIAAAGIgEACg");
	this.shape_3.setTransform(-281.1738,-57.0067);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9FB3DF").s().p("AhLAFIgCgHQgCguAdgNQAegXA1AfQBFBLgmgBQgzAEggAvQgtgIgLg7gAgTg1IgLABQgZAFAFAtQALAwAVAHIAKgQQAIgZAbgFIAPAAQgOg8grAAIgEAAg");
	this.shape_4.setTransform(-280.6997,-56.9148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C60B3").s().p("AgWAyQAMgvgtg8QAzgCA8AFQgIA2ghAjQgTAXgJAAQgGAAgDgIg");
	this.shape_5.setTransform(-295.25,-29.0948);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6392C5").s().p("AgFgFIALAHIgDADg");
	this.shape_6.setTransform(-326.675,-75.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6AA6E1").s().p("AAAAAIABAAIgBABgAAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(-346.4,-60.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8099D5").s().p("ArIJQQA0hHAwgFIAFAAQArAFAogUQAZgPgFAdQgRAdAZACQAMAWgvgKIgEAAIhCAIQg+ANgpAhIgDAAQgRAAAMgUgAioidQCfiTC7hjIABgDICRhPQB/hEC1AwQAzATAPAQQAWAZgCAXQgHA4ioAqIgFABIgNAEQh0AkhwAoIgFACQk4B2i3CzQi3DEhLDTQAzmODyjegACxpLIg5gCQAcgbA+AGIAuAGIAoAOQAoASAkAiQg8AAgNAhQgzhFhHgNg");
	this.shape_8.setTransform(-364.1858,-19.7916);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#284179","#6081CA"],[0,1],80.3,105.6,0,80.3,105.6,175.7).s().p("AnNKRQg4hlisANIgLAAIgsADQhvAMhTBOQgnAdAXhAQA6ihBhgRIAbgGIAigHQA6gKAjgmQAllJCTi6QDUkQD5hdIgBACIABgBIAKgIIgKAIIgBABIABgCQANhAhRhCIgPgMQgfgGAugZQBSgjBnAmIAZAKQAiAPAlAWIAJALIACACQALAJAKAAIAAAAIABAAQAJAAAIgJQgIAJgJAAIgBAAIAAAAQgKAAgLgJIgCgCIADgDQB9g4CSAdQBeASBnA1QBYA6AmB7ICFBSQArA4huAZIgvAJQAPAeiagJIgSgDIhcgKQg8gFg0ADQgdACgrAOQAJgTAAgSQAAgbgVgYQAVAYAAAbQAAASgJATQgMAEABAUQgcBshPBIQg3AmAMgzQAbgygIhBIgQgbIgDgHIgDgNIAAgIQgBghAkgcQgkAcABAhIAAAIIADANIADAHIgEgHQogBxjrGzQADBUAuAXQBhA0gnBuQgDAMgGAAQgJAAgOgagAtkIZQgNAWAVgCQApghA+gMIBCgIIAEAAQAvAJgMgVQgZgDARgcQAFgegZAPQgoAUgrgFIgFAAQgwAFg0BHgApVIPQAWg2AnhHQgnBHgWA2gAqGG6IABg2gAAWnKQi7BjifCTQjyDfgzGOQBLjTC3jEQC3izE4h2IAFgCQBwgpB0gjIANgEIAFgBQCogqAHg5QACgXgWgYQgPgRgzgTQi1gwh/BFIiRBPIgCABIAAAAIAAAAIAAAAgAMOjPQAZAAAbgDIAEAAIgEAAQgbADgZAAIAAAAIAAAAQhBAAgwgWIgBAAIgCgBIgCgBQghgSgZgcQAZAcAhASIACABIACABIABAAQAwAWBBAAIAAAAIAAAAgAJQkTQAHAAAGgCIABAAQARgGAMgUIADgFIgDAFQgMAUgRAGIgBAAQgGACgHAAIAAAAIgBAAQgQAAgTgKIgCgCIAAAAIgBAAIABAAIAAAAIACACQATAKAQAAIABAAIAAAAgAJ0nnQgdANACAuIACAIQALA7AtAIQAhgvAzgEQAmABhFhMQgfgSgYAAQgRAAgMAKgAgjqDIA4ACQBHAMAzBFQANghA8ABQgkgjgogSIgogNIgugHIgUgBQguAAgXAXg");
	this.shape_9.setTransform(-348.5571,-14.3076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-484.4,-83.6,233.2,207.89999999999998);


(lib.shape5copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmbAPIgHgBIgMAAIgBAAIgFAAQgMAGgUgCIgLgBIg6gKQACgHAPAAIAgAAIAIAAIA0ABIABgCIAHgDIAhgFIALAAIANACIALACIAZACIAQAAIAIgBIAQgCQAEgMAcAAIA9AAIAVACIAPABIA0gBIApAAIALACQAPAJAWgCIAUgDIA0gEIAUAAIAuAEIAXADIAwACIAUACIAhgBIA5gCIALABIAhAAIATABQAegCAZAHIAOADIApABIAYABIAMABIATABIAFABQAHABgMADIgTACIgpgCQgPgCgOACQgOACgOgCIgUAAIgoACIgQgBIgZAAIgPAAQgkADgkgEIgOgCIgPgBIgQACIheADIgPABQgcAFgagFIgWgCIgfABIgygFIgPgDIgIgBIgJABIgrAEIgOACIgPABIgsgBIgCgBIgCACIgQAAIgNACIgdgCIgFABIgqABIgIgBIgIABQgNADgNAAQgNAAgNgEg");
	this.shape.setTransform(0.0074,0.0439);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.7,-1.9,107.5,3.9);


(lib.shape4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00ACBD","#A3E7D0"],[0,1],-1.9,-40.3,-1.9,45.9).s().p("EgnQAG2QhQgOg0AAIk1AWIh/gPIibAGQgjAOiGgDIiMgCIieABIAAuCMBztAAAIAANPIgXgBIjlgGIlTAVIjSgOIkLAAQjCAdhtADIiDADIhqgNQhSgPhCAAIkFAOIiQAAIixgHQhqgIidAPIjJAOQh/AAlDgMQlFgMhFANIjuAMIsygDQlfgCgugHQgsgIkOARIkQARIhCgDQg4gEgRACIj0ALQhDAAhQgOg");
	this.shape.setTransform(382.95,290.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.7,245,740.5,90.30000000000001);


(lib.shape3copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE0AC").s().p("Eg5/AFhIAAqMQAtgBAnAKIBZARQAYADAVATQAFAFAKABQBJAGBDgQQBEgPBIgFQAUgBAUgLQAkgUAhAfQALAKAUgDIC1gYQCUgSCXAAIDIgLQAlgCAhASQBDAjBJgZQAsgPAugCQAqgCAnAPQAYAJAZACQBNAFBJAPIBHgDQBYgdBSAfQAYAJAZABIDwATQAhgCAcgVQAegYAlgMQAsgNAwAGICgAVQBnAOBfAfIAhAKIAnAGQBaAFBagBIA7gHIA9gRQCYgwCTAdIAeADIAygCQCNgLCLgdQAqgIAnAJIA7AHQCYAHCUgKIEYARQAKAAAJAHQAsAfBNgIQBJgIBEAVIAxAMQCbAdClgFQBmgDBhgXQB2gbB7AHICWAJQDBAMC7gkICLgbQCJgcCGgYIBQgKIFyAWQAtAEAsgGIBSgKIAAK3g");
	this.shape.setTransform(383.875,377.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD99B").s().p("AVvB+IgxgMQhEgVhJAIQhNAIgsgfQgJgHgKAAIkYgRQiUAKiYgHIg7gHQgngJgqAIQiLAdiNALIgyACIgegDQiTgdiYAwIg9ARIg7AHQhaABhagFIgngGIghgKQhfgfhngOIiggVQgwgGgsANQglAMgeAYQgcAVghACIjwgTQgZgBgYgJQhSgfhYAdIhHADQhJgPhNgFQgZgCgYgJQgngPgqACQguACgsAPQhJAZhDgjQghgSglACIjIALQiXAAiUASIi1AYQgUADgLgKQghgfgkAUQgUALgUABQhIAFhEAPQhDAQhJgGQgKgBgFgFQgVgTgYgDIhZgRQgngKgtABIAAiRICdgCICNADQCGACAjgNICbgGIB/AOIE1gVQA0AABQANQBQAOBCAAID0gLQARgCA4AEIBDADIEQgRQENgQAtAHQAtAIFgACIMyACIDugMQBFgMFEAMQFEAMB+AAIDJgOQCdgOBrAGICwAHICQABIEGgOQBCAABSAOIBqAOICCgDQBugDDCgdIEKAAIDTAOIFTgVIDlAHIApABIAACYIhSAKQgsAGgtgEIlygWIhQAKQiGAYiJAcIiLAbQi7AkjBgMIiWgJQh7gHh2AbQhhAXhmADIg0ABQiJAAiDgZg");
	this.shape_1.setTransform(383.875,342.3682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.7,327.3,742.4,85.69999999999999);


(lib.shape2copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1EADD0","#ABDFE4"],[0,0.604],0.9,-50,0.9,129.2).s().p("Eg5jAd/MAAAg79MBzHAAAMAAAA79g");
	this.shape.setTransform(-0.85,-60.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.2,-252.4,736.8,383.9);


(lib.numqcopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFCFD").s().p("AiRB+QgcgeAIhBQAKhFAxgvQA9g4BhAEQBTAFAYAhQATAbgZAcQgUAWhgA7QhdA8gNAOQgbAbgWAAQgOAAgNgMg");
	this.shape.setTransform(1.0714,-7.2916,0.1277,0.1277);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2C2D").s().p("AgDCfQgMAAgJgHIgBgBQgFgFgDgHQgCgGAAgIIACg3IAAgWIABg8IAAgJIgDAAQgOAAgJgKQgIgJAAgNIAAgPIAAgNIACgKQACgIAFgGQAEgEAHgFQAGgBAJgJIADgDIAGgIIABgDQABgLAEgFQAGgHAbAGIATAFIAEACIADAAIACABQAKADAGAJQAGAJAAAKIAAAEIAAAEQgCANgBAgQgBAbAAAvIAABvQAAAPgJALQgJAKgOAAIgHABIgKAAgAgcgeQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABABIABABIAAAOIgBA8IgBAXIgCA2QAAAMAIAIIABABQAHAGAJAAIARgBIAKAAIAHAAQALAAAHgIQAHgIAAgNIAAhLIgBgkIABhKQABghACgNIAAgDIABgEQAAgIgFgHQgFgHgHgCIgIgDIgUgEQgLgDgJAAIgEAAIgBABQgDAEgBAIIgCAHIgHAIIgDADQgKAKgGACQgFACgEAFQgFAFgBAGIgBAIIAAAcQAAAKAGAHQAGAIALAAQADAAADgCg");
	this.shape_1.setTransform(9.925,6.8491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2C2D").s().p("AjBSjIgHgIQgDgDgBAAQgngpgVgyQgUg0AAg5QAAghAOmKIAGi1QAFhtAAluIADhHIgZAAQhxAAhFhOQg+hHAAhiQADhBAAg3IAAhoQAAhnBChOQArgsAygVQAWgLAfgZIA+gxIBEhYIADAAQAAgQADgLQAGgoAFgVQALgnAQgVQAWgcA/gBQA+gBB4AZQA3AQBjAWQAgAQARAAIAQAGQBPAZAwBEQAwBFABBXQgBARgCALIgDAbQgLBcgKECQgLFJAAEFIACEYIADJJQAACAhHBSQhGBUhvAAIiJAAQgkAAgwACIgzADQhaAAhIg8gAjjjuQAMAAAFAFQALAHAAAPIAABtQAAENgFDJIgGC1QgRGPAAAcQAABaA9BCIAGAGQA8AxBFAAICHAAQA9gGBMAAQBWAAA4hCQA3hAAAhnIgFpJIgDkYQAAleAIjwQAFiSAUjSIACgxQAAhDgkg3Qglg4g3gQIhFgRQhmgdgwgJQhwgbgwAAQgaAAgPAFIgJAFQgKAPgGAcIgJAzQgEAPgIAUQgIATgCAAIhEBVQhDBIhDAbQgpAZgfAeQgzA6AABUIAABoQgDA3AABBQAABMAwA3QA0A9BWAAQAhAAANgFg");
	this.shape_2.setTransform(2.0413,1.3122,0.1277,0.1277);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D2362").s().p("Ak7CXQgDAAgDgEIgFgHQAxhkBAhHQBKhSBngyQBkgsBYADQBQADBfArIAABjQAABxhBBIQhBBKhhAAIkRAFQhXAAg3g2g");
	this.shape_3.setTransform(3.5258,13.9153,0.1277,0.1277);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC2131").s().p("AlpDcQAAggAOmKQAMAAAlALQATAFCXA3QBpAlBDAHQBqAWBRhiQAvg5BOioIAACaIAGFMQhfgrhRgCQhYgEhkAsQhmAyhLBTQhABHgxBkQhFhDAAhqg");
	this.shape_4.setTransform(3.0885,10.6793,0.1277,0.1277);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59331").s().p("AgbDuQg0gVgQgEQhgguhMgPQgDAAgEgCIgEgDQAigoAwgUQA1gbBDg/QAFgDARgWIAxg/IADAAQAEgFAKg3QAKg5ATgZQAQgaBHAEQA1ACBiAUQglBZhLDLQgMAcgbBXQggBLg3AHQgbAAgpgSg");
	this.shape_5.setTransform(-0.2286,-11.2464,0.1277,0.1277);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED433D").s().p("AAlJIQhDgHhpglQiXg3gTgFQglgLgMAAQAGh4AAg9QADhLACiGIADkKIBoAxQBMAmA1ABQBGABA/g4QAvgxBDhbIB0icQAkg8A/hNQgGClAAGqIAAEXQhOCngvA5QhDBRhSAAQgTAAgTgEg");
	this.shape_6.setTransform(3.1779,2.0501,0.1277,0.1277);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF5B33").s().p("AAFJLQg1gBhMgmIhogxIAAhoQgKAAgSADQgSACgIAAQhiAAg8hGQg1g/AAhWIAAjfQAAghAJgjQAPg1AkgrIAFADQADACADAAQBNAPBfAuQARAEA0AVQAqASAaAAQA4gHAghLQAZhXAMgcQBMjMAlhZQAxAMBNAWIBPAVIAFAAIALAFQBBAVAqA+QApA+AABIIAAAxIgDALQgTDUgFCJQg+BNglA8Ih0CcQhDBbgvAxQg/A4hEAAIgCgBg");
	this.shape_7.setTransform(1.7444,-6.7262,0.1277,0.1277);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeWoQipAAh/hoQgOgQgWgWQg9hCgghUQghhSAAheQAAgnALmPIAIi1QACgzABhpIADjSQh8g4hJh3QhFhzAAiDIAAjgQAAhDAThEQAehpBIhLQBPhQBQgjQACAAAvgnQAJgSASgPQALg0ANglQATg1AfgsQAjgtA3gcQBHgkBeAAQBpAAB0AbIChAsIAWAFQAMADAEADIApAFQCIAuBYB+QBZB+AACVQAAAbgDARIgDArQgMBZgKDwQgID+AAFFQAACkADBzIACJKQAADTiDCOQiDCPjFAAIgwADQgvACgiAAg");
	this.shape_8.setTransform(1.8147,1.188,0.1277,0.1277);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1D3D4").s().p("AlGU9QgZgQgIgQQhAhHghhUQgihWAAhdQAAgfAQmVIAFivQAGirAAjIQh8g4hJh1QhFhxAAiCIADjhQAAhDAThDQAdhpBGhOQBChLBdgoQABgCAOgMQASgMANgPQAHgFAXgcQARhqA5hQQBchuCjAAQBXAACGAhQAlAHAyAMIBKATIAWAIQAKADAGAAIAnALQCLAtBYB7QBYB5AACYIgCAWIgBAWIgGAsQgNC+gGCKQgID+AAFLIAFNbQAADUiDCQQiECRjEAAIh+AAQgnAAg2ADIg2ADQiqAAh7hug");
	this.shape_9.setTransform(3.8068,3.1801,0.1277,0.1277);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFCFD").s().p("AFjEAQglgQguhGQhBhigiglQiii4lrgdQg6gDAZgdQAagfBOgLQBdgOBsAeQCFAmB4BkQC/CWAaB5QAJAqgOAaQgKARgMAAQgEAAgEgCg");
	this.shape_10.setTransform(4.1141,-8.5438,0.1277,0.1277);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2F2C2D").s().p("AJwTbQgsgFhogGQhigLhiAAIhvgCQhOgDguAAIiBADQhoAChPAAQiLAGivAAQhAAAg1ggQg3gfglg3QgVgxgLgWIAAgRIgskiQAAg5AYg0QAqhXBignQAPgHAegHIA+gOIAdgHQANgEAHAAIAGAAIAFgFQCwi0CejWIARgbQCBivA0h5QAPgoAHgcQAEgQAAgIQAAgSgGgMQgHgOgQgQQgXgYgYgLQgYgJghAAQgfAAgQAFQhNAKg5AdQhSAmg6AsIh4BdIhHAAQgdAAgNgCQgWgCgQgHIgQgGIgLgFQg9gegmhVIgDgFIg/mmIAAgLQAAgKAGgMIADgLQAfhRA7gqQAEgFASgMIAFgFIFXi1QDbhKDiAJQEnAQDHCkQB4BnBCCCQBdCqAADmQAACPg8CYQgvB/hVCKQhVCKiCCgQCkgMBEgKIARAAIAFgCIAGgDIALAAQBfAABEBIQBLBQAACEIgCAsIgBA3IgDA8QgCA8AABNQAABqhCBIQhJBSh3AAgAEbSJIBsAGQA+ACAcADQCIAIAMAJQBggEA2hBQAvg3AAhSQAAhNAGhBIAAg3QAFhQAAgTQAAhog5g/Qg0g5hHAAIgfAFQikALhPALIg2AGQgTAAgIgRQgJgSAMgOQEUlZBij7QA5iUAAiDQAAjLhViqQhAiAhvhTQiyiYkZgRQi/gQjlBMIlMCqIgMAMQgFAEgKADQgyA2gTAtIgCALQAAAKgDAAIA/GhQAWArAxAhQARALACAAQAhALAcAAIArAAIBzhYQBWg7A+gcQBQgkBKgIIA0AAQBaAAA2A3QAbAXAMAbQAKAXAAAfQAAAnggBKQg1CBiFC4IgTAWQiqDnivCzQgDADgGADIgKAFIgOAAQgbALgZAAIg4AOQgbAHgQAHQhIAcggBAQgWAqAAAuIAAAWIAvEMIAJAcQAGARAHAKQAdArAnAYQAqAYAxAAIE6AAQCJgGCvAAg");
	this.shape_11.setTransform(1.6951,1.048,0.1277,0.1277);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F2C2D").s().p("AJxTaQgvgGhlgFQhogLhcAAIoiAAIi5AHQhYAEgqAAQhBAAg4gjQgzghgkg6QgRgYgQgtIgvktQAAg9AZg1QAqhWBigjQApgRBCgQIAdgIQANgDAHAAIALAAQCjijCrjtIATgWQCBixAzh7QAPgmAGgdIADgUQABgXgFgMQgGgQgQgPQgXgUgYgJQgYgJghAAIgyAAQhJAJg6AdQhFAfhJAzIh2BdQgDAAgFADQgHADgEAAIg2AAQgrAAglgRIgRgFIgKgGQhDgjgghKIAAgLIhCmgIAAgRQAAgDADgIIACgKIAGgLQAYhGA/g2QALgFAMgLIAFgGIFZi0QD5hNDEAQQEpARDDCfQB9BqBAB+QBdC0AADiQAACGg8ChQhhD5j7E1QChgMBKgKIAiAAQBhAABEBGQBLBNAACEQAAAYgFBQIAAA3QgGA8AABMQAABrhBBIQhIBSh4AAgAEcSNQCTAAAxAGQA4ADAzAHIArAGQBeAAA2hDQAvg4AAhTQAAgWAFh4IADg3QADgmAAg8QAAhmg4g9Qg0g4hIAAIgcAAQhSAKilAMIg6AFQgOAAgJgQQgIgTAOgOQCIitBdiSQBeiSAziDQA5ifABhyQgBjUhXimQgfg/gtg2Qgpgug4gwQi3iZkWgRQjRgJjRBFIlOCtQgFADgHAIQgJAIgEADQg1AwgPAtIgDALQgCAFgBAGIA9GgQAOAhAXAWQARAQAOAGIAQALIAGAAIAdAHQARADAPAAIAuAAIBwhXIBKgwQAqgZAggPQAigOArgMIBMgSIA3AAQAuAAAiANQAgAOAdAcQAyArgBBDQAAAkgfBKQg3CDiDCzIgRAcQi1DxikCkQgKALgGAAIgQAAQgcALgbAAQhHAVgcAGQhIAgggBBQgTApgBAwIAAAQIAsENQAMAjANAZQAaAoApAZQAsAaAwAAICBgDQBogDBPAAQCLgFCsAAQCqAABHAFg");
	this.shape_12.setTransform(1.9919,1.3493,0.1277,0.1277);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006739").s().p("AhaC2QgiAAg5gDIhsgHQAmhNA8hMQA/hHBEgvQA+goBrgVIC1gmIAAAXQAAAkgDAvIgDA7QAABcg4BBQhABKhoABg");
	this.shape_13.setTransform(8.9659,14.035,0.1277,0.1277);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#079248").s().p("ArjFgQgsgdgegwQAtg3BUg2QB5g1BageQB/grBkgLQBOgNB6AeQCbAnAvAEQB3AIA+gsQBCgqAshrQAqhrAUgsQAnhTApgzIARAAQBUAAA7BBQBBBGAAB1QAABNgGA1Ii0AlQhrAWg/AoQhEAvg/BHQg8BNgmBMIjqAAQiwAAiJAGQiIAFiyAAQg6AAgxgeg");
	this.shape_14.setTransform(2.343,11.4848,0.1277,0.1277);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34B475").s().p("ArVImIgvkRIAAgXQAAgwAXgvQAlhNBXgkQAPgGAdgHIA7gOQAVgDAYgHQAVgHAFAAQCgifCzj1ICbBjQAtAaArAGQAuAGAxgQQBIgPA+grQAughA3g+QBlhIAzgfQBbg4BFgWQgxCBhhCZQheCSiMCzQAhgEEJgcIAQAAQgpAygnBTQgUArgqBsQgsBshCAqQg+Arh4gHQgugEicgnQh5gehOAMQhkAMh/ArQhbAeh4A0QhVA3gsA3QgPgYgPgqg");
	this.shape_15.setTransform(0.8397,7.1345,0.1277,0.1277);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A79D").s().p("AjlH+QgqgFgtgaIichjIAKgLQAGgHAGgEQCAi0A0h9QAchEAAgkQgBgYgGgRQgJgWgWgTQgygyhKAAQggAAgRAGQAOgcAWgXQAVgVAigVQA5gbBHAGQA6AEBMAcQAHABCDA0QBVAjAxgGQAygOAphKQAXgpAhhPQAagoAlhWQBbC0AADRQAAB9g8CkQhFAWhcA4QgyAfhmBHQg3A/gtAhQg+ArhHAPQgjALgiAAQgNAAgOgCg");
	this.shape_16.setTransform(5.439,-2.8565,0.1277,0.1277);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32ABDF").s().p("AoPHYQgsAAgagQIgMAAIgLgFQg2gegfhFIhCmlQADAAAGADIAIADQD0A2C/AbQBmAOAYAAQBHAAAsgjQA0gsAjhiQAhhuAQguQAXg/AghrQEbAQDDCfQBpBaBLCEQglBVgaAoQghBPgXApQgpBKgyAOQgxAGhVgjQiEg0gHgBQhMgcg6gEQhHgGg5AbQghAVgVAVQgWAXgOAcQg7AAhWAmQg/AehPA0Ih5Bdg");
	this.shape_17.setTransform(0.4726,-8.4381,0.1277,0.1277);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2377BA").s().p("AAKDuQi/gcj0g2IgIgDQgFgCgDAAIAIghQAVg8A6gvQAHgDAIgIIANgKIFVivQC9hCCyAAIA8AAQggBrgXA/QgQAvghBsQgkBigzAsQgtAkhHAAQgYAAhlgOg");
	this.shape_18.setTransform(-3.7309,-11.2501,0.1277,0.1277);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AJbWpQgxgGhagFQhogLhUAAIhrgDQhMgDgvAAIh+ADQhmADhOAAQiOAFiyAAQh0AAhmg6Qhog7g9hmQgig6gVhBIg0lkQAAiCBDhuQBPiCCYg5QAxgVBWgRQCGiPCLi5IARgbQAbgiAxhLQgIADgLAIIgTAQIi0CDIiEAAQhOAAgzgWIghAAIgxggQg5gegugzQgyg2gbhEIgRgbIhHntIAFgsQADgFADgOQADgOACgFIAJgcQAuhyBjhbIAxgmIGQjLQD9hWEEAJQFjAZD/DNQCLBqBoC7QB2DkAAEPQAACshNDCQgpByhiCqQCGAoBWByQBeB/AACzQAAAWgFBXIAAA9QgFA8AABBQAADHiECHQiDCHjFAAg");
	this.shape_19.setTransform(1.7461,1.2211,0.1277,0.1277);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1D3D4").s().p("AJbWnQgugGhbgFQhogLhXAAIoUAAQiMALi0AAQh2AAhng9Qhig8hBhoQghg1gThJIgLghIgrk7QAAiCBBhvQBOiDCWg8QAtgUBcgSQCXihB6inIATgWIApg7QAWgeALgUQgWALgLALIi0CJIiGAAQhMAAg6gWIghgGIgsgbQg3gdgxg2Qgxg1gfhDIgLghIhMnsIAIgnIAFgVIAGgWIAIgcQAnhvBthZIAugsIGQjKQEchXDmAQQFiAQECDQQCZB+BYCnQBzDnAAERQAACyhKC9Qg9CUhPCCQCIAsBUBzQBcB/AACzIgCCkQgGBtAAAUQAADJiFCFQiECEjGAAg");
	this.shape_20.setTransform(3.7059,3.2063,0.1277,0.1277);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFCFD").s().p("AFlEAQglgRgthFQhAhjghglQipi4lrgeQg6gEAZgeQAagbBNgLQBegOBsAeQCFAjB+BlQC8CXAbB5QAJArgOAaQgKARgMAAQgEAAgEgCg");
	this.shape_21.setTransform(3.6482,-8.0748,0.1277,0.1277);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2F2C2D").s().p("AlrS7QiygpinhSQgIAAgLgLQglgPgZgjQgpg6gEhqQgEiCA+jGQAghnBGg2QA7guBCAAIACADQAAABABAAQAAABABAAQAAABAAAAQABAAAAAAIBSAWQB7BCBeAfQBIAXAwAAQBQAAA1gQQAagJANgIQAHgHADgGQAGgNAAgdQAAgqgJgSQgEgJgMgHIgCgBIAAgFQgxgQg2gGQgcgFg/AAIhqAAIhBAHQgfAEgOAAQhUAAg6ghQhGghgng/Qgng/AAhSQAAiPAOhFIAFgWIAGgWQAihsBGgtIgJAAQhAAAg2gmQhZg/gXiXQgLhEAAiXQAAhGAeg7QAshaBmg6QBmgxCAgWQFUhGD/BGQBoAdBwBAIATAOIAUANQCUBjBNCTQBMCVAAC9QAADEhXCwQgEAKgHAOIgLAUQA4A7AwBoQA5B8AICbIACAhIABAhQAAC0g4CWQg5CVhtBrQgwAvgRANQjkCylYAAQiuAAilghgAqGGtQgyAqgXBQQg+DMAHBsQAABZAhAsQARAWAQAEIAKAFQAFADACADIAIAAQCQBMC+AqQC6AmCLAAQFFAADTitQATgKAngnQBmhnA1iKQA1iKAAioQAAgZgGgjQgIiXg0hwQgohahDhJQgOgSALgPIAOgaQAJgQAFgNQBVixAAitQAAithHiJQhGiGiFhaQgRgOgWgIQhXg9hzgbQjwhGlIBGQiLAahLAoQhTArglBJQgZAxAAA5QAACSALBDQAUB2A+AwQAoAfAyAAQAyAAAggQQB8hNCyAAQBKAAAyAPQAfAKAQAOQANAPAFAOQAHAVAAAlQAAAlgOASQgBAAgCAFQgCAGgDAAQgOANghABQgsABh/gPQiDgRhNAAQgoAAglAVQhBAkgcBbQgHAPgEAYQgOA+AACLQAABBAfAxQAdAvA1AZQAZAQAfAGQAaAGAmAAQA8AAAygGIDKAAQA7AGBCAbQAFAAAAAGQAZAOAMAYQAPAfAAA4QAABPgjAUQgSASgpANQg7AShcAAQiJAAjdiDIhIgRQgwAAgrAlgAmamsQAiAAA6AHIB3APQBoALBHAAQADgLAAgLQAAgmgIgGQgHgFgUgFQgngLhBAAQiVAAhlA2g");
	this.shape_22.setTransform(1.4154,1.0334,0.1277,0.1277);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2F2C2D").s().p("AlqS5QjIgriRhQQgEAAgGgCQgGgDgDAAQgkgPgbglQgrg7gDhnQAAiOA8jAQAehlBGg1QA5grBDAAIAGAAIBSAVQDgB5BzAAQBRAAAzgOQAjgKAFgJQAFABAEgLQAEgPAAgdQAAgqgJgTQgCgGgLgKIgFAAQgegVhJgHQgNAAgdgCQgcgDgSAAQgrAAgcAFIgjAAQgyAGg/AAQhQAAg+ghQhEgcgohBQgohBAAhSQAAiDARhSQAAgRALgVQAPg7AegoQAagmAhgRIgJAAQhAAAg3goQhYg/gZiUQgLhvAAhtQAAhJAeg8QArhZBmg3QBTgtCTgZQFmhKDuBKQBkAVB0BCQAbAWALAFQCVBoBNCSQBOCXAAC9QAAC6haC0QgJAbgNARQA8BDAsBgQA6CFAICSQAFAxAAAXQAACxg4CVQg6CVhuBuQgVAVgtAiQjfCylZAAQivAAilghgAqFGtQgzAsgYBSQgdBZgOBQQgOBPACA6QACBZAgAsQARAYARAHIAKABQAFABACAEQAAAAABAAQAAAAAAABQABAAABABQAAAAABABIAEADQCTBLC7ArQCcAgCqAAQE9ABDaioIAdgbIAdgbQBkhiA1iNQA0iKAAilQAAgtgDgWQgIiRg0hvQgwhng7hCQgHgEgCgLQgBgJAFgJQAWghAFgWQBYioAAiwQAAiwhIiLQhHiJiIhYQgLgMgWgKQhrhBhjgWQjuhHlKBHQiCAXhUAqQhTAvgjBHQgYAvAAA5QAACWALA/QASB2A/AzQApAiAyAAQA1AAAegWQCIhNClABQBKgBAxAQQAbAIAVAPQALAQAGAPQAIAXAAAiQAAAUgFAPIgJATIgFALQgTAPghABQgxACh7gSQiDgRhNAAQgoABgkAUQhCAlgcBbIgFAVQgDALgDAGQgKBAAACKQAABBAeAyQAeAyA0AUQAsAcBJAAQA9AAAxgFIDNAAQBYASAlAOIADAFIADABQAYAOAMAYQAQAgAAA4QAAAtgLAYQgJAUgTAJQgSASgpANQg6AShaAAQiCABjnh/IhHgVQgxAFgoAhgAmYmtQAfAAA6AGIB3APQBtALBCAAQAFgJAAgMQAAgigLgLQAPABgogLQgogLg/AAQiUAAhlA3g");
	this.shape_23.setTransform(1.7142,1.3382,0.1277,0.1277);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF5B33").s().p("Ak1CLQhKgJhbgSQAWg0Ayg8QBPhPBpgiQBQgZCMgKQBlgHCFAYQBNAOCdAjQgBAGAGAAQgmAmgWAQQjfCslMAAQhQAAhZgLg");
	this.shape_24.setTransform(2.8984,14.6504,0.1277,0.1277);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAAF4C").s().p("ArpBHQAbhaA8gwQAygpA8AAIBNAVQDiB9B5AAQBSAAA4gSQAigKATgOQAYgRAAg8QAAgzgMgaQgIgPgSgMQgYgKgNgEQgjgKgqgDQAhgvAdgdQAngjArgPQBcgbCFAnIBwAlQBCAXAsAKQBrAOBniSQA2B8AMCRQhUAAhCAVQhCAchRBWQheBngiAXQhlBbgbAUQhXBBg6AAQgpAAg0gnQgggTg0gSQg+gVgOgHIg8gyQgggagigHQgtgHhIALQgbAEhkAUQhaAThOBBQhFA6g1BYQAAiGA8i4g");
	this.shape_25.setTransform(1.3982,7.093,0.1277,0.1277);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F59331").s().p("Aq1EmIgCAAQgGAAgLgLQgWgEgWgZQgtgzgEhqQA1hYBFg5QBOhABagUQBkgUAbgEQBIgLAtAIQAiAGAgAaIA8AyQAOAHA+AVQA0ASAgATQA0AmApAAQA6AABXhAQAbgTBlhbQAigYBehnQBRhWBCgdQBCgVBUAAIAABBQAAFjjVDWQgGAAAAgFQicgkhOgOQiEgXhmAGQiLAKhQAZQhpAihQBQQgyA8gWA0QiggeiwhYg");
	this.shape_26.setTransform(1.3982,10.8177,0.1277,0.1277);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8EB48").s().p("AjTKeIhrAAQgxAFg8AAQhEAAhAgcQg+gdgig3Qgjg4AAhJQAAh+AQhSQAAgHADgMIAFgUQAjAEArAMQAaAGA0ARQA/ARB5AuQBsAlBLgHQBoAABqgaQB4gcBIgyQBHg0AzhqQAohVAShlQAJg7gDgtQgEg0gXgvIgkg4QgZgigIgeQguhqA+h0QAFACAMAJQALAIAGADQCPBjBLCOQBKCPAACxQAACyhXC2QgWAtgLAKQBNBWAmBaQhoCRhrgOQgrgKhDgXIhwglQiFgnhbAbQgrAPgmAjQgfAdggAvQgcgGhEABg");
	this.shape_27.setTransform(2.0972,-4.2473,0.1277,0.1277);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D6DE3B").s().p("AiPIBQh5gug/gRQg0gQgagHQgrgMgjgDQAghpBNgsQAtgaAuAAQAfAAA5AHIB4APQCVAQAZAAQAMAAAHgFIAJgGIAGgNQAFgNAAgSQAAgigHgRIgKgOQgMgMgdgJQgrgMhEAAQiiAAh7BHIAAAFQgoAWg6AAQg4AAgvgjQhPg5gViJQgLhiAAhzQAGAAAFgGQCQgiASgDQBmgRA7AVQAvAWBSAqQBHAeBCAAQBFAAAngVQAqgXAgg8QBkh+BRiSQBpAfBsA+Qg+B0AuBqQAIAeAZAjIAkA4QAXAuAEA1QADArgJA7QgSBlgoBWQgzBqhHA0QhIAyh4AdQhrAZhoAAIgXABQhEAAhbgfg");
	this.shape_28.setTransform(-0.2393,-7.1073,0.1277,0.1277);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8EC549").s().p("AgSCuQhSgpgvgWQg7gWhmARQgSAEiQAiQgFAFgGAAQAAg+Adg3QAohQBdg0QBCgiCcgkQCsghCWAAQCLAAB2AhQhRCRhkB9QggA8gqAXQgnAVhGAAQhCAAhGgeg");
	this.shape_29.setTransform(-2.1159,-11.8629,0.1277,0.1277);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AmYWCQjWg1iphUQgVgLgGAAQhbgpg6hcQhChpgEiZQgIikBJjnQAVhJAng/QAng/AxgpQgxhtAAhpQAAiWAWhqQAKgqAGgSIAAgLQhwhwgei9QgOhRAAirIAAgLQACiMBKh1QBJhzCFhLQCCg+CggfQGHhPEqBVQB9AdCNBWQAhAWAQAFQC9CEBlDBQBlDEAADuQAADOhPC2QAWAiAhBMQBJCRAJDHQAFAxAAAhQAADdhIC7QhJC6iLCJIgpAjIgpAkQkZDgmhAAQjNAAiygmg");
	this.shape_30.setTransform(1.4985,1.2206,0.1277,0.1277);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D1D3D4").s().p("AmTWAQjZgrimheQgLAAgWgLQhbgpg5haQhDhrgEiZQAAipBFjhQAuiXBlhaQguhmAAhwQAAiYARhiIAQg9QAAgEACgDQAAgBAAgBQABAAAAgBQABAAAAgBQABAAAAAAQhyhygfjAQgNhlAAiXIAAgLQADiNBKhxQBKh1CDhGQA4gfBKgXQBDgVBcgSQCzgpCxAAQCvAACbApQCUAqB5BPIAZANQAPAHAJAHQC8B/BmDDQBlDGAADuQAADDhMDCIAbAyQARAfAIAXQBECYARDAIAABSQAADehHC6QhHC3iJCMQg3A3gbAWQkdDbmdAAQjWAAipgng");
	this.shape_31.setTransform(3.4601,3.199,0.1277,0.1277);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFCFD").s().p("AlQD5QAvjmB6iBQBkhpCIgcQBugVBcAbQAlANASARQASARgKAQQgSAbg/APQg0AMgbgEQiVgcjKDdQgtAwhKBeQghAqgGAAQAAAAgBAAQAAAAAAgBQAAgBAAAAQAAgBAAgBg");
	this.shape_32.setTransform(2.411,-7.6984,0.1277,0.1277);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2F2C2D").s().p("AC1TZQgxgCglgHQgOAAgJgGQh2gcg0hcQgfg6AAhBQAAg3AQh5IiTAGQi1AFivAAQhRAAhEguQhEgvgjhSQgshgAAicQACh+AShNQARhNAlg2QAqg1BHhfICDizIAog3QDlluBti1IAxhQQAphIA0hRIAFgLQAxhIBCggQAvgWAzAAQB2AADCBHQAXAMAqAKQBUAlAwBKQAyBLgBBbQAAAfgDA7IgHB7IAAAyQgLBzAABzIAAERQgEAygCBLIARAAQBUAABABDQBGBKAAB0IAADhQADAWAAAbQAABqhABIQg/BHhhAIQAFBRAAAdQADAWAAAbQAABmg7BJQg6BLhbAQQglAHg3ACQgiAChSAAQhEAAgggCgAg9L2QAJAJAAAIQgRCOAABCQAAA2AYArQAnBBBZAVQALAGAMAAQBKAQBlAAQB7AABKgQQBGgNAsg4QAtg6AAhPIAAgxIgDg5QgDgsAAgeQgDAAABgLQgBgJAKgJQAJgKALAAIARAAQBOAAAzg3QAzg4AAhWIgFkSQAAhZg0g4Qgvg0g+AAIgnAAQgQAAgIgFQgFgEgBgFIAAgNIAAmvQAAhOALieIAGgxQAFhdAAhzQAAhMgmg7Qgkg6hEgdQgtgLgSgLQjBhChkAAQhhAAhCBjIgGAFQgcAthBBwIgxBMQhXCXj8GSIgqA8QivDwhCBNQggAxgQBHQgPBGgDBvQAACQAnBWQAcBFA2AoQA2AnBAAAQBJAAEbgLIC0gGQAIAAALALgAh1ByQgRgGgBgXQAAgFAEgGQAGgHAHgEQAIgLAQgUIAUgYQAGgHAJgBQAHgCALAAQAQAIAAATIAGAbIAAAmQAAANgIAHQgHAIgMAAQg6AAgNgEg");
	this.shape_33.setTransform(0.5483,1.0478,0.1277,0.1277);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2F2C2D").s().p("ACzTZQgxgCgjgHIgWAAQh5gggyheQgfg2AAhFQAAg3AOh5IiRAGIjeAHQheAEgoAAQhSAAhEgxQhDgxgjhTQgshfAAidQAAh7AShOQARhPAng2QBXhsCdjWIAmg8QDYlUB7jPIAvhSQALgOAfg0QAeg0AVghIAGgLQAyhJBDgfQAugWAxAAQB7AADABHQAKAGAUAIQAXAJAKAFQBUAgAwBKQAwBJAABcQAAB4gIBdIgDAyQgKCWAABVIAAEMQAABdgDAgIANAAQBVAABABDQBGBKAAB0IAGESQAABqhBBKQhBBJhfAEQAGBRAAAdIAAAxQAABmg7BJQg6BKhbARQgjAHg4ACQgiAChTAAQhEAAgfgCgAhSLxQAQAAAGAFQAFAGAAAQQgQCJAABCQAAA5AZAtQAnBBBbAWQAEAAAGADIAJACQBiALBNAAQBoAABdgLQBGgQAsg8QAtg5AAhOIAAgsIgGiJIAAgFQAAgMAIgIQAHgHANAAIATAAQBMAAAzg7QAzg6AAhWIgDi1QgDgmAAg3QAAhZgyg4Qgug0g/AAQgYAAgOAGQgLAAgLgLQgLgIAAgOIADmqQAAhCAIivIAGgxQAIiAAAhQQAAhOgmg2Qglg4hGgdIgfgNQgTgIgKgGQjChChmAAQhgAAhDBjIgGAFIhdCcIguBTQi4EnieD8IgqA8QivDwg/BSQgiAsgPBIQgOBEgCB1QAACJAmBdQAdBCA0AmQA2AnBBAAQCsAAC1gLgAh3ByQgSgEAAgUQAAgTAQgIQAFgIATgWQARgTADgGQAIgHAJgBQAFgCALAAQATAJAAAXQADAAAAAWQAAAQADAWQAAAMgJAIQgJAIgNAAQg4AAgNgEg");
	this.shape_34.setTransform(0.8643,1.3287,0.1277,0.1277);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4A5BA").s().p("AkPCKQgGgFgQAAQALgWAhghQBGhTBKgwQBLgxBngYQApgLBBgFIBxgHQAAAWACAcQAABagzBAQg0BDhQAQQhYAMhxAAQhdAAhYgMg");
	this.shape_35.setTransform(5.3008,14.6606,0.1277,0.1277);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE6B95").s().p("AmzEFQgcg0AAg8QAAg6ATiPIAAgGQgQAEgVABIglABQARgVAegdQAtgdBGgJQAqgGBUAAQAnAACAAJQBkAIBCgGQD6gPCmjXIAABSQAABjg7A/Qg7A/haAAIgRAAIAAAGQAGA7AABMIhxAHQhBAEgpALQhnAZhLAwQhKAwhGBUQghAigLAVQhqgZgshPg");
	this.shape_36.setTransform(5.1987,11.6923,0.1277,0.1277);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EB307C").s().p("ArtHWQg+gsghhJQgmhlAAiMIAAgGQBFg3BXglQCFgtBIgQQB6gaBUAWQA9ASBjAsQBoAwAwAPQBQAXBPgLQBCgJBTgkQBZgmA/hsQAkhAA4iGIAvhoQAehBAYgnIgBAzIgCA7IAACvIAsAAQBKAAA1A5QA7A/AABoQAAAUAGBvIAAA8QimDXj6APQhCAGhlgIQiAgJgnAAQhUgBgqAGQhFAKgtAdQgeAdgRAUQhEAAgmAGQhaAAh3ACIiTADQhIAAg9gqg");
	this.shape_37.setTransform(0.5515,4.613,0.1277,0.1277);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#902C8E").s().p("ABXDUQjQg/jEgIQACgHAEgGIAGgJQANgYAohCQArhIAeg1IAFgGIADgFQAtg+A6gcQAqgUArAAQB2AAC2BIQgRChgxBgQg0BqhMAAQgRAAgTgGg");
	this.shape_38.setTransform(2.1761,-11.694,0.1277,0.1277);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9D2362").s().p("Ag2HsIhogfQg5gQgvgHQgugGhcgFQhcgGgugFQg1gKgdgMIATgZQAMgRAHgNQCEjQDSlSQDDAHDRBAQBkAdBAiCQAwhgASiiQAXAGArAWQBKAcArBCQAsBCAABTQAABRgIB/QiLAThuBWQheBJhfCLIgtBJQgbArgWAZQgxA2g3AAQgPAAgQgEg");
	this.shape_39.setTransform(1.1962,-7.2301,0.1277,0.1277);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7225D").s().p("Ar0FPQAQhHAkgyIADgGQA1hCC8kAQAdAMA1AKQAuAGBcAFQBcAGAuAFQAvAHA4ARIBoAeQBLARA9hDQAWgYAbgsIAthJQBfiLBehJQBuhWCLgTQAAAggDARQgIBuAAB9IgCCUQgZAngdBAIgwBoQg4CGgkBAQg+BthZAmQhUAkhCAJQhPALhRgXQgvgPhogwQhjgtg9gSQhTgWh6AaQhJAQiEAuQhYAlhEA3QAAh0AQhKgAAHDhQgQAAAfACIAoADQgGg2AAgMg");
	this.shape_40.setTransform(-0.8465,-0.7364,0.1277,0.1277);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ABAWdIgSgIQgKgDgHAAQirglhiiBQhShsgKiGQiIAGiVgBQiPABh2hRQh2hRg9iLQg8iSAAi3QAAiNAUhgQAbiABEhYIALgRQBUhpCRjPIAngxQBlicBiinICEjYIAshNIAshKQAegxAYgkIALgWQBGhmBlg3QBjg4BxAAQCaAADlBXIAiAMQAYAIANADQCPA5BSB9QBSB9AACbQAACDgGBdIgFA3QgJCpAAAyIgCBNIAACqQBnA4A9BkQBCBvAACOIAFESQAAB+g8BqQg7BohkA6IAAAWQAACqhoCCQhoCCikAhIgLAFQh4ALh0AAQhaAAh+gLg");
	this.shape_41.setTransform(0.6217,1.2233,0.1277,0.1277);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D1D3D4").s().p("ACkWnQg6gCgrgIQgJAAgKgDIgTgIQiqgmhgh9QhQhpgMiJQhNAAhdADIh2ADQiOAAh1hQQh3hRg8iPQg5iFAAi+QAAiVAShcQAYh+BDhcIALgLQBEhVCojpIAhgxQCcj2C1koIAshHIBdiiIAQgQQBGhoBig5QBjg6BuAAQBLAABjAXQBWAUB+AsIAiAOQAWAIAMAGQCPA5BVB+QBUB8AACcQAAAmgLC6IgDAxQgIBuAABtIAACUIgDBjQBnA4A8BlQBEBvAACNIABAmIABAyIAACDQAAAWADAhQAACAg8BrQg5BlhkA9IAAAQQAACthpCFQhrCEilAhIgFAAQgrAIhAACQgoABhcAAQhPAAgkgBg");
	this.shape_42.setTransform(2.6293,3.1799,0.1277,0.1277);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFCFD").s().p("Al2CoQgBgBACgTQAOiLAMgsQAThDApgZQAwgbBvgIQBLgFDkAAQDwAAgwAiQgRANgyAJQgvALgkACQlZAOisCbQgiAmgfAvQgHAMgCAAIAAAAg");
	this.shape_43.setTransform(-0.3347,-9.4143,0.1277,0.1277);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2F2C2D").s().p("AmjSvQiKgfhcgjQglgSgdgXQh9hYAAiTQAAg6AYisQALg8AWhYQAghkBDgxQArgfA0gGIA6AAIC+BzQBoA8BQAAQB3AAA8gsQAWgTAIgQQALgWAAgpQAAgZgEgMQgDgGgGgHQgLgKgIAAQg2ghh7AAIiEAQQhpAWhFAAQhNAAg9grQg9gpgfhLIgFgQQgIgWgDgbQgDgPgDgiIAAgsQAAgrAGgcQgCgQABgVIABgcIAAgWQAAhBgGkjIAAlpQAAgsAOgpQAVhLBAhEQAugpAWgNQA+gnBAAAIBhADQBQADA3AAIB/AHQA8AEAfAAQAsAAAbgGICMgFQBfgGCHAAQAvAAArARQAsARAeAgQAlAlAUAyQAUAzAAA1QAAA3gRBrQgLBNAAAbQAAAygTAxQgaBFg4AzQhDA+hcAJQBgAwA5AzIAEAFQACACAAAEQARAOAYAZQAMAPAdAhQBOBnArCBQAqCCAECYIAAAWQAAD9hdDUQhSCkhoBYQh5BsijA5QijA5jEAAQhrAAjngsgArVH1QgSA0gPBVQgWB8AABfQAAB4BlBHIA6AhQBSAjCGAXQDLAxB5AAQF0AADmjNQBqhfBCiSQBYiwAAkGIAAgWQgJkiiOi5QgigwgtgoQiAh0i+grQgKAAgHgHQgHgIAAgMQAJgbAXAAIBNAAQAsAFA8AAQBNAAA2g3QAwgnAUg4QAPgnAAgpQAAgmAIhHQAQhpAAg0QAAgpgPgnQgNgngbgcQg1gyhIAAQiBAAhjAGIjVAFQh9AAhjgFQh4gGhqAAQgxAAguAeQgXAPggAgQg2AugRBFQgOAjAAAiIADFpQAACfACDFIAAAWIgBAdIgBAqIAABtQAAAhALArIAFAQQAZA6AuAiQAvAiA5AAQAWAAAtgHIBggPQB1gWAaAAQB9AABMAnQATAHAJAJQATAPAIAQQALAXAAAtQAAA3gQAiQgOAggeAVQhKA3iQAAQhjAAhzhCQgpgdhCgmQg5gggVgKIgWAAQhqAQgpCJg");
	this.shape_44.setTransform(0.5908,1.0478,0.1277,0.1277);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2F2C2D").s().p("AmhSvQiNgfhWgjQghgOgkgYQhIgwgghLQgWg1AAg5QAAhTAZiTQANhOAUhGQAghnBBgyQArggAzgGIAyAAIAFAAIAFAFIBDAkIB8BKQBmA8BRAAQB3AABAgsQAUgPAHgQQALgXAAgsQAAgagFgLQgDgHgIgGIgIgFQgGgDgDgDQgsgbiHAAQgnAAhdALQhtAWg+AAQhQAAg8goQg8gngehKIgIgWQgKgogEg6IAAgsQAAgrADgWIAAhdQAAjFgDifIgDlqQAAgjARgyQAbhSA3g2QAngoAggUQA9gnBAAAQAuAAC4ALQBiAFB4AAIDVgFQC4gLAuAAQAtAAArATQArATAfAhQAkAgAVAzQAUAxAAA2QAAA0gRB0QgLBHAAAhQAAAugSAwQgZBEg4AzQhLBHhWAAQBdAtA/A7QAAAAABAAQAAABAAAAQABAAAAABQAAABABAAIACADQAZAYA6A/QBNBmAqCEQApCCAECWIAAAWQAAEPhdDCQhHCWhxBrQjyDZmQAAQiUAAi+gsgAqLF9QgzAngZBRQgSA4gMBRQgYCSAABOQAABwBoBKQAQALAmAWQBKAeCPAhQDbAsBsAAQF0AADljNQBxhnA5iKQBai1AAkBIgCgWQAAiLgoh6Qgnh4hLheQgTgag3g+QiHhwi2gpQgdgKAEgXQACgNAIgHQAIgIAMAAIBNAGQAYAAAjADIAwACQBFAAA7g8QAxgnASg4QANgkAAgmQAAgJAEgcIAKhOQAQhrAAgyQAAgogPgoQgPgngZgdQg2gxhIAAQiDAAhjAGIjVAFQh6AAhjgFQh2gGhtAAQgxAAgvAeQgaARgeAeQgaAYgTAfQgSAegJAeQgKAkAAAgIAAFqIAFFkIAAAbIgBAZIgCApQgCAWAAArIAAAsQAAAVADAVIAHAnIAGALQAYA9AvAhQAvAgA8AAQAVAAApgHIBlgPIBhgMQAggEALAAQCHAABFAhQAHACAJAIQAHAGAEAAQASAQAJARQAMAZAAApQAAA2gRAkQgPAegfAbQhJAyiPAAQhlAAhzhCQhOg0hog0IgOgGIgLAAQgxARgXARg");
	this.shape_45.setTransform(0.8844,1.3287,0.1277,0.1277);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#079248").s().p("AhrExIiNgoQhWgYg1AAQiYAThsA0QgDiUAAi5QAAglAOglQBEAsAjATQA8AdA1AOQBfAkAeAEQBEALA0goQBKgpBThbQAwg1BUhrQAJgQAQgMQAngFBkAAQBmgLB+AAQBUAAA9A8QhcAZg2AaQhLAkg1A4QgPAXgpA2QgpAygSAcIgvBjQgcA8gdAbQg7BAhHAQQgYAFgaAAQgnAAgugKg");
	this.shape_46.setTransform(0.2556,-10.4476,0.1277,0.1277);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#32ABDF").s().p("AsVFlQgVgwAAg2QAAhHAYiaQAThoAPglQAYhXA4guQAmgfAugGIAsAAIBDAkQBOArAtAeQBqBCBbAAQCCAABFgxQAZgSAMgaQAPgfAAgtQAAgkgJgTQgFgIgNgOQgDAAgGgDIgOgIQAtgsAsgbQAxgdArgEQAnAAAqAOQAaAJA2AaIBuAhQBHAVAkAMQB9AuBFgNIAOAAIAAAVQAAEEhaC8QhCApgmAUQhhAzgwARQhUAghFgIQgzgFhOglQhZgpgmgJQi+gyjSARQhJAHhHAvQg3Amg6BDQg2A+gvBFQhBgrgdhEg");
	this.shape_47.setTransform(0.5876,8.7367,0.1277,0.1277);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00A79D").s().p("AIXDUQgkgMhIgVIhtghQg3gagZgIQgrgPgmAAQgsAEgwAeQgtAagrAsQhCghh9AAQg4AAhSARQiDAWglAAQhDAAg3gnQg1gmgchCIgCgFIgDgLQgJgegFg5IAAgsQBdgsBxgmQB6gnBkgKQB1gMByAXICrArQBpAaBDANQBTATBXgnQBJggBOhKQBMBgAqB8QAqB9ABCTIgNAAQgQADgSAAQhAAAhggkg");
	this.shape_48.setTransform(1.4621,1.5206,0.1277,0.1277);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2377BA").s().p("AmnC2QiTgahOglQgNgGgugbQAuhFA3g9QA5hDA3gmQBIgvBIgHQDTgRC+AyQAmAJBYApQBOAlAzAFQBFAIBUggQAxgRBggzQAmgUBCgpQhCCVhwBhQjsDZmDAAQh3gBjTgxg");
	this.shape_49.setTransform(0.7472,13.6137,0.1277,0.1277);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#006739").s().p("AguC2QgdgEhggkQg1gPg7gdQgkgThEgsQAKgjAVggQARgbAfgkQAbgfAhgVQA2gkA7AAQAcAAA+ADICKAIQA3AABKADIBcACIBKAAQgQAMgIAQQhVBrgwA0QhUBbhKAqQgpAfgyAAQgOAAgOgCg");
	this.shape_50.setTransform(-2.9265,-12.1202,0.1277,0.1277);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#34B475").s().p("AqnHpIAAhdQAAjFgDifIAAgbQBsg0CZgTQA0AABWAZICNAnQBQARA4gMQBGgPA8hBQAcgaAdg8IAuhkQATgcApgzQAog1AQgYQA0g4BLgkQA3gZBbgZQAfAhASArQASAsAAAxQAAAxgRBxQgLBVAAATQAAAsgQAsQgVA9gzAvQhDA8hWAAQhoAAhQgFQC6AoCRB3IAAAFQAwAnAgA2QhOBKhJAgQhXAnhTgTQhDgNhpgaIirgrQhygXh1AMQhkAKh6AnQhxAmhdAsQADgrAAgWg");
	this.shape_51.setTransform(0.6961,-6.6252,0.1277,0.1277);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AnJV3QhngYgygPQhHgVgvgWQg9gcgpgbQhmhKg3hmQg4hoAAh7QAAhoAcieQARhxAVg/QAlh7BRhVQgDABAAgMIgZg2QgThPAAhAIAAh9QAAgxADgQIAAgRQgDjFAAifIgDjEIgBhgIgChKQABg3AbhaQAjh4BhhkQCeieC4AAQAxAADBALQAzAABFACIBXADQAnAAAbgFICIAAQBjgLCOAAQBYAABMAgQBRAjA+BAQBDBCAhBVQAjBUgBBjQAAA/gQCEQgLA2AAARQAABCgTBFQgbBfg9BNIAXAZIAYAdQBiCAA1ChQA1CgAEC5IAAAWQAAE0huD1QhaC+iWCCQiSCIjDBFQjFBFjtAAQiPAAjpgxg");
	this.shape_52.setTransform(0.6578,1.2233,0.1277,0.1277);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D1D3D4").s().p("AnSV3QiPgdh3gwQgsgSg5gqQhnhGg4hqQg5hqAAh5QAAhQAbi2QAOhKAYhgQAtiGBLhQQgCgFgDAAIgWg8QgLgxgKhYIAAg7QgBgaAGgoIAAhYQAAjFgFiZIAAlvQAAhSAVhCQAoh2BehiQCbifC1AAQCUAABjAGQBdAFB0AAIDNgFICCgIQBCgDAmAAQBWAABTAjQBQAiA/A+QBBBCAkBXQAjBUAABfQAABXgWBuQgFA2AAAWQAABCgUBCQgcBdg9BMQAQARAeAmQBjCEA2ChQA2ChADC0IAAAcQABEzh0D1QhaC7iRCAQknESnfAAQi1AAjPgxg");
	this.shape_53.setTransform(2.6495,3.1799,0.1277,0.1277);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFCFD").s().p("AmBDyQgPgaAJgrQAah6C/iWQB8hlCFgmQBrgbBeALQBOALAZAeQAaAeg6AFQlrAdimC4QghAlhBBjQguBFglAQQgEACgFAAQgMAAgJgQg");
	this.shape_54.setTransform(2.1317,-7.5754,0.1277,0.1277);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2F2C2D").s().p("AmPRzQifhZhuibQg/highhNQhwj6AAlQQAAhhALhoQAxlvDWkoQA4hLAagdQFemYH/AAIAnAAQBEANA0AvQA0AvAZBKIA3CsIADALIACAGQASA2AEAQQAGAXgBAbQAABXgvBJQg1BQhVAXQBkA7BVBZQBABEAiA/QBzDBAAEgQAAB7gRBrQgoEQisDHQjxEPmKAAQjtAAivhogAncsWQgtAtgiA2QjOEcgrFZQgPBhAABjQAAFHBrDtQArBfAzBFQBeCNCaBZQCpBgDWAAQC3AACVhBQCVg+BuiAQCcisAukPQAUhjgBh4QAAkJhvi3QguhJgwgvQhxiCiYgzQgXgJAEgYQAAgIAIgHQAHgHANAAIAlAAQBeAAA5hGQA0hAAAhVQAAgXgDgOQgEgVgPguIgFgLQgFgVgSgzQgVg+gLgmQgVg9gnglQgogkg1gJIgcAAQnjAAlOGIgAhrHvIgWgbQg4hkAAiNQgBhSAhgbQA3gyCCAAQAzAAAiASQAcAOAWAdQAxAxgBBiQAAA/gKA1QgNBCgZAlQg1A9hrAAQg7AAg3g9gAhLCNQgfAJgGALQgHAIgGAVQgDATgBASQAAB+AyBSQADAHAHAGIAJAJQAgAmAjAAQBHAAAtggQAggyABiJQgBhMggghQgOgTgTgIQgWgLgkAAQhCAAgpAMg");
	this.shape_55.setTransform(2.5141,1.0478,0.1277,0.1277);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2F2C2D").s().p("AmOR4QiehXhxiiQhChvgbg7Qhzj/AAlLQAAhcAQhzQAVi0BBimQBBinBriPQAdgqA1g+QCyjODYhpQDXhnD9AAQAaAAALAFQBGAIAzAvQA0AuAZBLQAfBeAXBOIAGALIAAAGQASAwAFAWQAFAVAAAdQAABagxBJQgyBOhYAbQBkAwBXBfQA7BFAnA+QB0DNAAEUQAABrgTB7QgWCNg0B3Qg3B5hTBaQjqEPmRAAQjmAAi0hjgAhow7QjOBjinDCQg5BFgUAdQjJESgzFpQgLBdAABnQABFBBqDuQAeBJA8BbQBtCXCPBPQCiBgDaAAQFtAADij5QCji+Anj+QAVheAAiCQAAkMhyi0QgzhSgpgmQhsh8ibg0QgWgPAAgRQACgNAHgHQAIgIAKAAIAmAAQBgAAA5hEQA1g+AAhZQAAgUgEgRQgEgRgRgyIgFgLQgHgbgQgwIgghhQgVg7gnglQgogngzgIIgdAAQjwAAjNBjgAhpH1IgVghQg6hbAAiQQAAgyAKgeQAJgaANgJQAtgsCNAAQBYAAArA3QAxAxABBiQAACegvBDQg3A3hoAAQg/AAgzg3gAhLCNQgeAJgIALQgNAOAAA6QAAB+AwBMQAEAHAGAGIAJAJQAhAmAjAAQBUAAAcghQARgYAJgwQAKgxAAhBQAAhMghghQgXgUgKgFQgXgNgiAAQhEAAgpAMg");
	this.shape_56.setTransform(2.8077,1.3287,0.1277,0.1277);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D6DE3B").s().p("ApgEFQAxhpBChJQAagcAwg4QAngvAhgaQBZhDBrAcQBFAXBZAyICUBQQBJAUBIg/QApgkBFhVIBjhzQA7hFApgzQgtEQijC7Qh0CAiZBAQicBEi7AAQjgAAithjg");
	this.shape_57.setTransform(5.3835,11.97,0.1277,0.1277);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8EB48").s().p("Aq8GgQg6hRgmhUQBUiUB3g8QBHgoB/AFQBIACCEALIA0AAQAVAaAaALQASAHAaAAQBgAAAogsQApg4AAiRIAMgOIAMgNQB9iWAtg6QBgh7ASgSQBRhWBJgOQAfgGA4ALQB3C5AAEYQAABxgUBvQgpAzg7BFIhjBzQhFBVgpAkQhIBAhJgUIiUhRQhagyhFgXQhqgchZBDQghAagnAvQgwA5gaAcQhCBJgxBpQighfhkiUg");
	this.shape_58.setTransform(3.2386,6.8883,0.1277,0.1277);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FAAF4C").s().p("AsXDWQAAhoAQhjQBTgiBMgZQA9gZBCAPQARADBsAoIB8BEQBQAmAwgOQB5gkB8igQBVhuBSikQA7hyBlhoQBRhTB+hdQAQAwAFAWQAEAUAAAZQAABig7BGQhCBOhsAAIgmAAQCZAwB+CKQAgAjASAYQAaAiAQAhQg4gLgfAGQhJAOhRBWQgSAShgB6QgtA6h9CWIgMANIgMAOQAAhbgpgoQgUgWgUgLQgfgRgqAAQhsAAg6AnQgHAHgGARQgIAaAAArQAACDA2BdQADAGAQAVIg0AAQiEgLhIgCQh/gFhHAoQh3A8hUCUQhtj9AAlBg");
	this.shape_59.setTransform(1.7832,0.0328,0.1277,0.1277);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F59331").s().p("Ai6JFIh8hFQhsgogRgDQhCgPg9AZQhMAZhSAjQAolVDUkwQA4AGByAbQBxAbA9AGQBLAAAxgTQAxgTA2gyQA5g2B1hnQBihbAzhZQAig1AahZQA7AMAuArQAtArAZBCIAhBkQAPAtAHAcQAAAEACADQAAABABABQAAAAAAABQABAAAAAAQABABAAAAQh+BdhRBTQhlBng6ByQhSCkhWBuQh8Chh5AkQgNADgPAAQgpAAg7gbg");
	this.shape_60.setTransform(1.0874,-6.7065,0.1277,0.1277);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EF5B33").s().p("AkzD7Qhygbg4gGIAogyQAYgdASgTQCtjGDRhnQDThlD3AAIAhAAQgbBYgiA2QgzBZhiBaQh0Bmg6A3Qg1AxgwAUQgyAShLABQg+gGhxgbg");
	this.shape_61.setTransform(1.1959,-10.8543,0.1277,0.1277);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AnzUlQjHhriNjGQhIh0grhbQiAkiAAl6QAAiBANhkQApk2CUkOIgOgGIARgGQA1hXA2hNQARgZAcgiIAwg7QDPjuEBh6QD+h5ErAAQAxAAAWAFQB8AVBeBSQBfBSArCAIACAKQAZBHAhBjIAAADQAUBCAGAlQAIArAAAzQAACMhDBwQALAKAFAMQA7A8A9BiQCZEJAAFAQAABxgZCbQg+FTjFDqQiUCkjIBYQjKBXjtAAQkbAAjkiDg");
	this.shape_62.setTransform(2.6003,1.2233,0.1277,0.1277);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D1D3D4").s().p("AnyUqQjJhziIjFQg8hRg2h3QiEkeAAmDQAAhjARiCQAqlFCQj/IgLgGIANAAQAfg9BMhtQAggsA9hGQGjnlJXAAQAYAAAsALQB9AQBgBUQBXBRAsB9IACALQAwCPAHAeIADAAQAXBGAIAhQAKAtAAAxQAAB9hHCEIAQARQBAA/A7BlQCXD0AAFVQAACXgWB1QgdClhDCQQhECPhmBzQiNCojIBWQjIBVjzAAQkmAAjWh+gAgQE4QAEAGAGAEIALAGQACgEACgBIAHAAIgQgWQgKALgGAAgAAgEtQAGAAAAgFIgGAAQgFAAgFgFg");
	this.shape_63.setTransform(4.5728,3.1799,0.1277,0.1277);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFCFD").s().p("Al5CnQgBAAACgTQAOiLAMgsQAThAAwgcQAvgbBvgHQBKgFDkAAQDwAAgvAiQgRAMgxAMQgvALgjACQlbALisCbQgpAmgeAvQgIALgBAAIAAAAg");
	this.shape_64.setTransform(-0.6181,-9.7846,0.1277,0.1277);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2F2C2D").s().p("AlMTTQgugGgigOQgggGglgmQgjgegVgqQgdg7AAhKQAAirBFjqQAchxBBixQAPgqAhhRIA4iMQBAiZBvj7QADAAADgLQgJAAgNADQgNACgGAAIgcAAQg5AIinAPQg/AFhuAAQhwAAhGhUQhAhMAAhnQAAh/ALiIQAFgdALg3QAbh8BAhDQBAhDBcAAQB4AADmARQBBALBjgBQCWAGHRAAQBEAAA6AnQA6AnAgBGQANAQAEARQAQAnAGAyQAFApAABFIAABjQgGAygaAyQgTAkgyBIQhvCthLDCQhGCkgzC0QgSA5gXBSIgmCHIggCIQgSBNgKA3QgYBvgJBsQgIBCgZA8QgZAzgrAnQgsAng3AQQhBAWihAAQhlAAg5gIgAhMnTQAOAAALALQAMAJgJASQAAAGgDAFQgDAGAAAFIgQAhIhcDOQgyB0ghBSIg4CMQggBPgQAsQgvB4guCkQhCDnAACeQAABoBCA6QAZAZAbAIQAbAOArAFQA0AIBeAAQCcAAA2gWQArgMAjgfQAjgdASgtQAKgUAGgaQAEgVAFgmQAIhFAeibQAYh/AkiTQAZhjA0ivQBAjRA7iMQBejnBkiTQAuhEARggQAVgqAEgnQADgVAAhIQAAhugZhEQgGgWgFgFQgdg2grgeQgsgfgzAAQnRAAiWgFIhmgGQgxgCgSgDQjmgQhzAAQiRgBgvDRQgGAZgFA7QgLBjAACZQAABQAwA7QA1BABVAAQBoAABCgGQChgOA9gHIAeAAQA5gBAcgFg");
	this.shape_65.setTransform(2.2809,1.0127,0.1277,0.1277);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2F2C2D").s().p("AlOTUQgrgEgjgLQgfgOgogeQhShRAAiCQAAieBBj3QAbhiBCjAQAag7BOjMQAihQA0h2IBcjOQADAAAAgFIgmAAIgcAFQh/AIhhAIQhCAGhrAAQhyAAhGhRQg+hKAAhnQAAiNALh5QADgqALgxQAch8BAhCQBBhDBcAAQCPAADMAWIBDADQA3ADAqAAQEyAKE4ABQBCgBA6AmQA5AnAjBCQANAQADAQQAcBNAAB7QAAAtgCA2QgEAzgcAzQgLAWg4BUQhgCQhbDfQhEClg0CzQgeBdgxC6QgaBbgjCsQgWBwgNBqQgEAmgIAgQgGAWgMAiQgYA3gsAlQgqAlg5ARQhBAWikAAQhgAAg9gHgAhJnTQAEAAAHADQAHAEAEAEQAJAQgHALQgBAJgHANQgLAWgCALQhwD9hCCXIhoEHQgkBkg5C5QhCDlAACfQAAA7AWAxQARAhAbAbIA2AgQBCAWCUAAQCeAAA3gWQBagaAphWQASgsAEhCIARhqQALhFAKgxQALg9AyjPQAwi6AehdQAriWBRjIQBTjNBsitQAxhFAQgfQAVgqACgmQAGgWAAhIQAAh0gZg9QgCgHgEgHIgIgOQgag1gsgfQgtgfgxAAQnRAAiZgGQhMgFhdAAQjJgWiNAAQhSAAg0BFQgoA1gSBWQgGAZgHA9QgLBiAACeQgBBQAxA4QA1A9BXAAQBoABA/gGQAmAABCgGIB4gKIAcgGQA8ABAcgGg");
	this.shape_66.setTransform(2.5969,1.2935,0.1277,0.1277);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2377BA").s().p("AjeDwQgtgGgggOQgWgGgmggQAFhWAUg2QAdhuB0hGQBWg0CRgjQA+gOBZgFQA0gDBiAAQADAAAGADIAIADQgWBkgOB8QgJBJgVApQgVAvgmAhQgpAlgwAMQgdAKgqAFQg4AHhbAAQhfAAg3gIg");
	this.shape_67.setTransform(0.9723,13.368,0.1277,0.1277);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#32ABDF").s().p("AmqC7QAAiYBCj3QCGhrCDgkQChgtBiBaQAvAsATAKQAmATAsgSQA0gNA/g1QgsC6gRBTIgHgDQgGgDgDAAQhiAAg0ACQhaAGg9AOQiSAjhVAyQh0BHgeBvQgTA2gFBWQhKhCAAh2g");
	this.shape_68.setTransform(0.8861,10.9582,0.1277,0.1277);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A79D").s().p("AmQBSQAQgqAghQIA4iMIBAAaQAlAPATADQBSAWA+gEQBDgEBDgkQCjhGDChuQALgLAYgRQhQDKgpCPQg1CxgZBlQhAA1gzANQgsASgmgTQgUgKgvgsQhghaiiAtQiEAkiGBsQAYhgBFi9g");
	this.shape_69.setTransform(2.5777,3.5629,0.1277,0.1277);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#34B475").s().p("AlbIkQgUgDgkgPIhAgaQA7iRB0kEQADgMAIgRIALgZQhMALgnAAQgyAGhFAEIhpAGQA/ilBfglQAzgUBdAkQAzATBUAlQBpAiBOALQBpAOBOgVQBCgYA8hHQAjgoA6hUQAkhCAthiIBLiiQALAWADALQAbBGAAB3QAABHgFAWQgEAtgYAvQgQAegxBLQhsCrhRDIQgZARgLALQjBBuiiBGQhDAkhEAEIgSAAQg3AAhHgSg");
	this.shape_70.setTransform(4.7641,-5.1794,0.1277,0.1277);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#006739").s().p("AhMD5QhTgxgkgTQgUgLg8gyQg8gxgmgVQADggALg0QAXhrAyg8QA5hFBZAAQCCAADWAWIBGADQA4ADArAAQgbAzhdCiQhAB+gWAjQg+Bng8AcQgSAIgWAAQgjAAgugWg");
	this.shape_71.setTransform(-3.0461,-11.047,0.1277,0.1277);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#079248").s().p("ArXE+Qg3hBAAhdQAAiUALhsQAmAVA7AxQA9AxAUALQAkAUBSAwQBKAkAxgWQA8gcA+hmQAWgjBAh+QBcijAcgzQCIAFHfABQA6gBA0AmQAyAiAgA7IhLCiQgtBigkBCQg7BTgiAoQg8BIhCAYQhOAWhqgPQhPgLhogiQhUglgzgUQhdgjgyAUQhgAlg/ClQhCAGhoAAQhlAAg8hIg");
	this.shape_72.setTransform(2.0383,-9.1754,0.1277,0.1277);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AlvWfQhHgKg3gZQhCgXg/g1QhKhHgnhcQgohcAAhuQAAjEBNkCQAQhAAchVIA2ieQAchMBMjEQAihDANglQg0AFhYAAQi8AAiDiIQh/iHAAjCQAAi1ALhoIAQhrQAtjIB1hvQB2huCnAAQCbAADTAWIA/ADQAzACAoAAQBGAECbABIGAABQB+AABrBGQBsBGA9B6QARAhAFAWQAWA9ALA+QALBCAABSQAAAfgFBUQgIBVgoBRQgaA0g/BZQhQB4hUDLQhACigxClQgSA6gWBOIgkCFQgQA5gQBJIgaB/QgZB0gIBWQgLBlggBNQgtBihPBFQhNBDhiAdQhmAhi4AAQh4AAhFgJg");
	this.shape_73.setTransform(2.4022,1.1882,0.1277,0.1277);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D1D3D4").s().p("AlpWhQhFgJg5gZQg0gShQhAQhIhCgnheQgnhfAAhqQgBi8BLkOQAvijA2iPQBJi9AihOIAUg0QANggAKgUIiIAAQjAAAiDiGQiEiFAAjBQAAidAOiAQAEhGAMgnQArjGB4hyQB3hxCnAAQA2AABkAHIDVAPQAeAFB9AGIDeADQDIACC6AAQB/AABpBDQBqBEA6B7QALAQARAmQAmBqAACmQAABSgDAhQgHBUgoBRQgYAxg8BcQhbCHhMDCQhACYgxCqQg5DHgTBKQgsCvgOBNIgjDOQgIBhgkBOQguBkhLBFQhNBHhhAcQg1ARhDAIQhHAIhiAAQh0AAhGgKg");
	this.shape_74.setTransform(4.3268,3.1799,0.1277,0.1277);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFCFD").s().p("AE3DfQgggOgog9Qg5hWgdggQiRihk9gbQgzgEAWgZQAWgYBEgKQBSgMBeAbQB0AeBtBZQCmCDAXBrQAIAlgMAWQgJAPgKAAQgEAAgEgCg");
	this.shape_75.setTransform(5.24,-8.4728,0.1277,0.1277);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2F2C2D").s().p("AjDTKQjkgqiQh9QhZhHhFh4Qh5jPAAkIQAAgsALhXQAjjFBmiOQAAgCgCgEQgDgEAAgGQgGgLgLghQhBiVAAi0QAAgKADgaQACgaAAgOQANifBDiHQBCiCBuhjIAGgFQA4gwBRgoQCuhYDmAAQCNAACEAsQAtAPAtAZQAhASA4AjIBHA3QDdCxAqEeQALBXAAAbQAACxhNCzQgLAbghA3QAxA4AnBhQA8CbAACoQAAEcikDWQhBBLgnAiQjkDDlOAAQhxAAhjgRgAlixMQhIAgg2AtIgFAGQhtBYg3B6QhAB8gMCWIAABHQAACdA8CbQAEANAMAaQALAWAAALQAHAQgHAQQhqB5gkDEQAAAXgCAqQgDArAAASQAAD9BtC5QAdA2AiAuQAnAwAtAgQCTB3DGAgQBBALAiAEQA4AHAuAAQCbAACHgwQCDgsBshbQAegfA/hKQBJhdAmh2QAlh0AAiEQAAiwg3h9QgZhGg/hTQgOgOAJgTIAFgKQAhg3ALghQBHiqAAifQAAgPgCgiQgDgjAAgUQgViBg9htQg+hxhhhOQgpgggegSQhFgxhdgmQhzgniOAAQjUAAilBSgAhRIlQgigMgZgZIgGgBIgFgFQgWgdAAg6IAAgsQAIghAOgbQAEgJALgDQALgDAMAEICjBBQAAAGALAAQAGADAIAIQAIAIAFADQA3ApAAAZQAAAXgDARQgDAPgFAFQAAAFgFAGQgLAKgZAIQgiAJgzAAQgzAAgkgMgAhxGCQgGALAAAWQAAAZAGAOQAFAKAGAAIAFAGQAlAbBCAAQA4AAAVgLIAAgWQgLgLgQgLQgDgGgIgEIgLgGQhlgtgpgQQgFAGAAALgAB3loIgDgDQhcgjgxgfIgGAAQgxgggWgWQgEgEgBgFIgBgNQAAgLALgLQAqgcBZAAQAhAAAcANQAWAKAPAQQAWASAHATQAEALAAARQAAAagBANQgCAUgIASQgIAQgTAAQgEAAgEgCgAgEnjIAFAFIAfAQQAgAQApARQAEgEABgFIAAgNQAAgFgCgEQgDgFgLgIQgXgVglAAIg2AAQALALAFAAg");
	this.shape_76.setTransform(2.0371,1.0478,0.1277,0.1277);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2F2C2D").s().p("AjDTKQjkgsiRh1QhchThBhyQg7hlgeh0Qggh4AAiBQAAgxALhYQAkjMBriBIgGgIQgCgFgDgDIgIgWIgJgbQgdhKgPhUQgQhTAAhSIAAhNQAMiiBEiIQA9iDBzhjIAGAAQBCg5BHgfQCqhdDqAAQCVAACCAxQBkAmBJAyQAbAWAxAhQBsBbBCB1QBDB6AQCKIAIA8QADAeAAAZQAACthMCxQgGAOgNAbQgOAcgGANQAtA8AmBdQA8CIAAC7QAAEZifDZQgpA3g/A2QjlDDlSAAQhqAAhqgRgAlixMQhKAhg0AtIgFAEQhqBag6B8Qg6B+gNCXQgFAWAAAxQAACXA8CbQAFARAJAWQAJAWAEAQQAAAQgEALQhrB+gaC/QgKBcAAAnQAAD1BtDBQBMB8BHAzQCUB4DFAfQBBALAiAEQA4AHAuAAQCbAACHgwQCDgvBshZQA/g+AegqQCUi9AAkOQAAiwg3h+Qgohigwg2QgFgLgBgFQgBgJAHgIIAAgLQAYgeAUg0QBHiWAAiyQAAhHgFgnQgViAg9hsQg9hthihPIgigbQgVgSgQgKQhLg6hXgYQhugsiTAAQjUAAilBSgAiNIAQgFAAAAgGQgMgMgIgXQgHgYAAgcIAAgnQALgrALgWQARgSAVAHIBUAhQAwAUAfASQAGAAAFAFQAWALAFAGQAXANAPASQARAVAAATQAAAmgLAWQAAAGgFAAQgLAKgZAIQgiAJgzAAQhhAAgygxgAhuF6QgDAFAAADIAAAhQAAAxALAAIAFAFIAAAGQAeAWBJAAQBCAAALgLQAFgLAAgLQgCAAgIgHQgKgJgMgGQgLgLgLgFIhJgeQgsgSgZgNQAAADgCAGgAB5lmIgFgFIhXgiQgjgPgOgLQgEAAgEgDIgDgDQg1gjgNgUQgHgEgCgFQgCgDAAgJQAAgLALgLQAhgWBiAAQAlAAAbAKQATAHAVAQQASAVAGASQADAKAAAQQAAAcgBANQgCAVgIAPQgIAQgTAAIgGAAgAgUnpQADADAFACIAIAGIAFAAIAgAQQAhAQAsARIAAgWQAAgLgLgLQgWgWgrAAQgmAAgQAGg");
	this.shape_77.setTransform(2.3179,1.3287,0.1277,0.1277);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE6B95").s().p("AqGFTQgWgtgLgbQhBibAAinIACgkQADgYAAgLQAggWArgVIBNgnQBDgZBiAHQB+AKAbgDQA6gHBRgcQAvgRBcgkQCEglB9htQBRhIB9iYIAjAaQAWAQAOANQDRCvArEQQgnBMggA1QgrBDgtAxQgrAuhRBKQhfBZgfAgQgvA4gcAcQgwAygjAOQhKAjiBgdIhngaQg7gNgnAAQhxAJh9ApQiBAqhXA9QgaARg0AfQg7AhgbASQAijJByiKgAgchvIgnAMIAXAYQATARAYAOQAJAHAkAPIBgAlQALgqAAgRQAAgLgCgHQgFgLgPgPQgRgNgNgHQgYgMgcAAQgpgBgiAKg");
	this.shape_78.setTransform(1.8647,-4.1452,0.1277,0.1277);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9D2362").s().p("AmpC0QBaixCEhgQCYhvDGAEQA+AABTAsQBkA0AiAIQgwBCgzAqQhvBdiHAwQiKAxigAAQh4AAhYgWg");
	this.shape_79.setTransform(5.0373,13.9959,0.1277,0.1277);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D7225D").s().p("AphF4QhdhYg7hiQArhEAog0QBHhVBYhMQBXhMBcg6QBNgvBBgIQgFALgBAbQAAAeAIASQAEANAKALQAsArBXABQAwgBAegKQAPgGAFgGQAFAAADgMQADgNAAgXQAAgJgsgkQC0AkCNgeQBugkBkhTQBchNBBhjQA8CSAAClQAACIgoB4QgpB5hOBiQgigHhjg0QhUgtg+ABQjGgFiYBwQiEBhhaCwQjQggiZh8g");
	this.shape_80.setTransform(2.7744,9.49,0.1277,0.1277);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EB307C").s().p("AsfEHQAAhYAFgmQAbgRA7giQA0geAagSQBXg8CBgqQB9gpBxgJQAnAAA7AOIBnAZQCBAdBKgjQAjgOAwgyQAcgcAvg4QAfggBfhYQBRhLArguQAtgxArhEQAgg0AnhNQAFAhAABMQAAC2hHCeQgKAXgPAcIgYAvQA+BQAfBVQhBBjhcBMQhkBUhuAjQiNAfizgkQgGgGgWgLQhygxg3gWQgQAZAAAYQhBAIhNAvQhbA6hXBMQhYBMhIBWQgoA0grBEQhti3AAkPg");
	this.shape_81.setTransform(1.8647,2.7586,0.1277,0.1277);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F4A5BA").s().p("AoPAdQA7h9ByhaIBCgwQAkgZAegPQAyAKA9AVQAjAMBJAcIB0AnQBOAXAtgIQAwgGA9g8QAhghA4g7IAAgFIAFgGQAoAOAtAaIBSAvQh9CYhQBIQh+BsiEAlQhdAkguARQhRAcg6AHQgaADh/gKQhhgHhEAZIhNAnQgrAVggAWQAMigBCiCg");
	this.shape_82.setTransform(0.1507,-9.8393,0.1277,0.1277);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8C2CE").s().p("AAGBbIh1goQhJgcgjgMQg8gTgzgLQC4hYDRAAQCIAACEAsIgFAGIAAAFQg3A6giAhQg9A8gwAHQgLACgNAAQgoAAg6gRg");
	this.shape_83.setTransform(1.5264,-13.1001,0.1277,0.1277);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AjqWSQkQgxi6ifQh2hehgibQiOj8AAk9QAAg3ABgbQACguAIgkQAYiuBViaQg8i8AAizQAAg8AGghQAMjCBNikQBOijCLh6IAgghQBahDBQgqQDihuEPAAQCuAACqA8QB4ArBnBIQBIAxAVAQQCIB1BTCSQBVCXAYCwQALBtAAAmQAADnhYC+QAbAtARArQBHCsAADjQAACxg0CgQg0CfhiCAQg6BHhKA/QkcD8meAAQiNAAhugWg");
	this.shape_84.setTransform(2.1073,1.2233,0.1277,0.1277);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D1D3D4").s().p("AjnWSQkeg0izicQg+gxgxhAQg3hAgphFQiUjzAAlJQAAg3ALhuQAkjHBPiAQhCitAAi8QAAgRADghQADghAAgQQAQjBBNiiQBOiiCAh5IAAgFIAngcQBLg7BkgyQDfhzESAAQCwAAChA8QBpAjB9BQQAyAhAmAmQCJBrBUCZQBSCVAZC0QAHAlACAnQACAYAAAwQAADghXDAIAXAuQANAZAIAVQBMC8AADTQAACug1CfQg1ChhmCAQhFBYg/AxQiKB6izA/QiwA9jMAAQiIAAhugWg");
	this.shape_85.setTransform(4.1021,3.1799,0.1277,0.1277);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFCFD").s().p("AFiEAQglgQgnhFQhChkghgkQioi4lqgeQg7gFAZgdQAageBNgJQBegOBrAbQCFAmCABlQC4CYAaB5QAJAqgOAaQgKARgNAAQgEAAgEgCg");
	this.shape_86.setTransform(4.2104,-7.6871,0.1277,0.1277);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2F2C2D").s().p("AlTTbQhPAAg9gvQg/gwgehTIgYhSIgUhCIgQg3IgUg/QgIgaAAgUQAAhbAwhHQAzhNBVgYQhXgxhQhYIgIgFQgGgDgDgDQibijg1kMQgLhuAAhCQAAjoBCi9QBFiuBlhyQB1iDChhEQCihFDAAAQBMAAAmAGQCYAQCCBEQB6BEBjB0QAjAjAZAnQC4ECAYF5QAAASADArQADAqAAAXQAAB6gcCRQghDEhSCuQhUCziBCSQgWAWgGALIgNALQiaCqjBBcQi8BbjYARgAooJcQgvA+AABXQAAASAFARIARA0IAQA8QACAPAPAwIAYBQQAZBGAvAkQAwAnA9AAQAJAAAPgCIAUgDIAWAAQGXgZE1lDIAQgRQAGgCAHgJQAGgIAFgDQD6kwBBlxQAVhvAAiRQAAhSgFgnQgYlkioj7IgegmQgQgUgOgMQhbhshyg9Qh4hAiRgMQgggGhHAAQi2AAiUA/QiXA/hrB9QhXBjhICiQhCC2AADfQAABYARBSQAqDoCVCnIALALQBwByCPAyQAQAIAAAZQAAAIgHAHQgIAHgMAAIgmAAQhgAAg5BGgAh0hWQgZgNgXgXQgFgIgIgRIgOgZQgWg2AAgxQAAhBALg1QAOhEAeghQAmg3BzAAQAmAAAbAPQAlAUAiA0QA8BnAAB/IAAAhQgHBDgfAVQg7Ash5AAQgzAAgmgTgAhznIQgRAVgKAvQgLAxAABAQAAAwAQAiQALAVAGAGQAOATASAIQAXALAmAAQA+AAArgLQAcgIAIgIQAIgIAFgPQAEgNAAgNIAAgcQAAh4gyhSQgWgmgXgNQgRgJgYAAQhXAAgXAmg");
	this.shape_87.setTransform(1.8583,1.035,0.1277,0.1277);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2F2C2D").s().p("AlOTbQhSAAg+gvQg+gwgdhTQgoh3gHgXIgQg9QgOgugDgPQgFgVAAgbQAAhYAuhIQAwhPBZgYQhXgshVhYQgDgFgFgFQgDgDAAgDQinivgpj7QgRhaAAhaQAAjwBIi2QA5ikBwh2QDukSGLAAQAPAAAkADQAlACAUABQEwAgDMDsQAJAOATAWQATAYAIAOQBaB/A1CiQA1ChAMC5QAAATADAqQADAqAAAXQAACWgWB1QhBGGkNE3IgsAsQlAFTmsAZgApSukQhjBqg8CiQhBCzAADdQAAA8ALBuQAnDlCYCpIARALQBlBvCUA1QAJAEAFAKQAGALgEAIQAAAIgHAHQgGAHgJAAQgQAGgWgBQhjABg3BEQguA6AABXQAAAXACANQADARAJAjIAQBBQAbBPAXA6QAYBEAvAmQAwAnA9AAQAcAAAQgFIARAAQDOgMC1hUQC3hXCWifIAhgsQD7kkBCl9QAWhuAAiTIAAh5Qghlqikj1QgLgMgTgXQgTgagLgKQiujTkighQgngFhAAAQl0gBjZD6gAhxhWQgVgLgZgZQgKgLgWghQgRgwAAg9QAAikAxg4QAVgZAogOQApgPA0AAQAmAAAbAPQAlAUAiA1QA8BnAAB+IAAAhQgGA9gbAbQgWARgmALQg1AQhIAAQgyAAgkgTgAhznIQgRAWgKAuQgLAxAABAQAAAxAQAhQAEALAFAHIANAOQASATAOAHQAXANAhAAQA+AAArgPQAbgJAJgJQAIgIAFgPQAEgNAAgNIADgMQACgKAAgGQAAhmg3hkQgWghgYgNQgQgJgYAAQhVAAgZAhg");
	this.shape_88.setTransform(2.1392,1.3127,0.1277,0.1277);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EF5B33").s().p("AlQCQQArg2AXgUQAngmArgXQAsgQBOgoQBUgqAigQQA/gYBkgRQB5gUAigJQk8FHmmAZg");
	this.shape_89.setTransform(3.0744,14.2265,0.1277,0.1277);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F59331").s().p("Ao8H0Qg3grgYhLQgLgegVhIQgQg0gKgVQAAgGgCgIQgDgIAAgGQBqhOCPgqQBugTBEAAQBbAABXAeQBMAgA2gkQAbgSBIhXQA6hEBChhQAng4BNh2QAzhEBegoQBKggBtgTQAGAAAKgCIALgDQhBGBkCEqIglAsQghAJh5AUQhlARg+AZQgjAPhTAqQhOAogsASQgsAWgmAmQgXAUgrA2IghAhQgLAAgWADQgWACgLAAQhGAAg1grg");
	this.shape_90.setTransform(3.2563,9.6145,0.1277,0.1277);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FAAF4C").s().p("ArbHyQgFgTAAgWQAAhiA5hGQA+hOBsAAIAnAAQiMgvh5h7QA3hRA4g1QBHg/BUgaQBsgnBcgNQBlgOBjAQQA7AOB4ApQB6AqA1ANQA3AHApgpQAagWAvhBQBGg7BEhOQAqgxBThtQALgLAAgGQAFAnAABXQAACSgWB1IgLADQgKADgGAAQhtAShKAgQheAogzBEQhNB1gnA4QhCBig6BEQhIBYgbASQg2AkhMghQhXgehbAAQhEAAhuATQiPAqhqBPIgRg6g");
	this.shape_91.setTransform(3.2563,4.8077,0.1277,0.1277);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8EB48").s().p("AqAJ0QhOhRgxhqQgyhngUh4IAggRQBAgWB6g0QBtgpBbAAQA7gDBGAMQApAIBSAWQAEAJAIAMQAIANACAEQAXAXASAKQAfAQArAAQBEAAAygRQAJgDAlgSQAIgLAEgKQAKgUgBgeQAVgOAcgWIAtgjQA2gwAth8QA9irAJgSIBIicQAxheArhBIAeAiIAdAoQBYB9AyCcQAzCfAICyQABAFgLALQhTBtgqAxQhEBPhGA7QgvBAgaAXQgqApg2gIQg1gNh7gpQh4gpg8gOQhhgQhmAOQhcAMhsAnQhTAbhHA/Qg4A0g3BTg");
	this.shape_92.setTransform(1.8935,-2.8972,0.1277,0.1277);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D6DE3B").s().p("ArNF+QAAjXBHjDQBWgJBDAPICLAjQBcAYA+gQQA+gIBEg7QAtgoA2hJQBKhqAshRQA2hnAfhrQEzAhCzDbQgqBAgxBeIhICcQgJARg+CsQgsB8g3AwIgsAkQgcAWgVANIAAgbQAAhCgNg0QgNg0gdgxQgagsgfgQQgVgLgfAAQhgAAgjArQgrA0AACXQAAA8AQAhQhTgWgpgHQhFgNg7AEQhbAAhtApQh7A0g/AWIghAQQgQhSAAhdg");
	this.shape_93.setTransform(0.1476,-7.2316,0.1277,0.1277);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8EC549").s().p("AiSEcIiLglQhEgPhVAKQAviWBvh+QDtkHF1AAQArAABCALQgeBrg2BoQgsBPhKBqQg4BJgtAoQhDA9g+AHQgZAHgeAAQgsAAg2gOg");
	this.shape_94.setTransform(-2.5016,-10.6837,0.1277,0.1277);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AlTWnQiNAAhuhQQhyhSgxiLIgLgWQgJgXgRg4QgOgtgJgVIgQg8QgSgygHgeQgIgmAAguQAAiOBHh0IgQgQQhnhvhBiGQhBiGgZiXQgLgwgDg7QgCglAAhLQAAkXBNjWQBbjZB1iDQCti+DphVQDvhWEUAhQDBAUCeBVQCgBVB7CQQAqAqAjAzQDPEkAiG8QAFAsAABdQAAC3gbB7QhKG+kwFhIgxAxQl5GOn8Agg");
	this.shape_95.setTransform(1.9286,1.2207,0.1277,0.1277);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D1D3D4").s().p("AlQWnQiRAAhvhOQhxhQgyiPIgLgWQgIgdgQgzQgPgtgFgXIgWg0IgUhVQgHgpAAgsQAAiOBBhzQgFgFgLgGQjLjtg2kqQgRhrAAhwQAAkJBSjfQBSjYB+iDQCnjCDshWQDuhXEZAhQF2AoEEEmQAtAyAaAoQDWE6AgGvQAAAVADAsQADAsAAAWQAACMgbCmQglDchhDMQhgDJiUCrIgxAyQlxGPoKAhgAgNk4QgPAHgHAPIAJADQAHACAGAAQAVgLAQgLIgOgIIgMgIg");
	this.shape_96.setTransform(3.9202,3.1794,0.1277,0.1277);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFCFD").s().p("AiQB+QgcgeAIhBQAKhFAxgvQA9g4BfAEQBTAFAYAhQATAbgZAcQgUAWhgA7QhbA8gNAOQgbAbgWAAQgOAAgNgMg");
	this.shape_97.setTransform(-18.0785,-7.2882,0.1277,0.1277);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2F2C2D").s().p("AghTbQhdAAhCg3QgGgLgFAAQgngpgUgwQgVgzAAg6QAAghARmQIAFivQAGjxAAjqIAAhHIgZAAQhvAAhFhOQhAhIAAhhQADhHAAgxIAAhoQAAgmAMgoQARg8AogrQAfgjA7gkQApgOBKg/QADgHARgVIAwg8QAGgKAAgRQALhQAbgpQAzg7DXA2QA5AQBgAWQAOAGARAFIAVAGIAQAFQBOAYAwBEQAvBEAABSQAAAQgDALIAAAhQgMBlgKD5QgLDVAAF6IAGNhQAAB7hIBPQhJBThuAAIgyADQgwADgkAAgAjhjxQAJAAAKALQAEAAADAHQAEAHAAAIIAABoQgDECgFDZIgGC1QgNGKAAAhQAABaA8BAIAFAGQA6AxBCAAQBMAAA/gGQAkAAAwgCIAygDQBYAAA3g7QA2hAAAhmIgDpKIgFkXQAAkGALlJQAJj9ANhmIADgcQACgLAAgQQAAg+glg2Qglg3g5gQQgsgLgWgLQgvgNhqgUQhWgbhLAAQgYAAgLAFIgHAGQgWAegFA/QgFAWgRAgIgwA9QgQAUgHAHQhTBJgwAVQgjAOglApQggAjgNAwQgJAfAAAcIAADgQAABMAuA3QA0A9BVAAQAZAAAWgLg");
	this.shape_98.setTransform(-17.4248,0.9892,0.1277,0.1277);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2F2C2D").s().p("AjAShIgHgIQgDgDgBAAQgogpgTgwQgVg0AAg5QAAghAOmKIAGi1QAFhtAAluIADhHIgZAAQhxAAhEhOQg/hHABhiQAChBAAg3IAAhoQAAhnBChOQArgsAygVQAWgLAfgZIA+gvIBEhYIADAAQAAgQADgLQAGgoAFgVQALgnAQgVQAWgcA9gBQA+gBB5AZQA3AQBiAWQAgAQARAAIAQAGQBPAZAwBEQAwBFAABVQAAARgCALIgDAbQgMBcgKECQgKFJgBEFIADEYIADJJQAACAhHBQQhGBUhvAAIiJAAQgjAAgyACIgyADQhYAAhIg8gAjijuQAMAAAFAFQALAHAAAPIAABtQAAENgFDJIgGC1QgRGPAAAcQABBaA8BAIAFAGQA9AxBDAAICHAAQA9gGBMAAQBWAAA4hCQA3g+AAhnIgGpJIgCkYQAAleAIjwQAGiSATjSIADgxQAAhBglg3Qgkg4g4gQIhEgRQhogdgvgJQhwgbgxAAQgZAAgOAFIgJAFQgJAPgGAcIgJAzQgEAPgIAUQgHATgCAAQg2BDgPAQQhDBIhDAbQgpAZgfAeQgzA6AABUIAABoQgDA3AABBQAABMAwA3QA0A9BWAAQAhAAANgFg");
	this.shape_99.setTransform(-17.1089,1.3126,0.1277,0.1277);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9D2362").s().p("Ak6CWQgDAAgDgEIgFgHQAxhiBAhHQBIhSBngyQBkgsBYADQBQADBfArIAABjQAABxhBBGQhBBKhhAAIkRAFQhVAAg3g2g");
	this.shape_100.setTransform(-15.6249,13.8983,0.1277,0.1277);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BC2131").s().p("AloDdQAAggAPmKQAKAAAmALQATAFCVA3QBpAlBDAHQBpAWBShiQAvg5BOioIAACaQADCIACDEQhfgrhQgCQhYgEhkAsQhnAyhIBTQhABHgxBiQhFhBAAhqg");
	this.shape_101.setTransform(-16.0621,10.6635,0.1277,0.1277);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F59331").s().p("AgaDtQg0gVgQgEQhgguhMgPQgDAAgEgCIgEgDQAigoAwgUQA1gbBDg9QAFgDARgWIAxg/IADAAQAEgFAKg3QAKg5ATgZQAQgaBFAEQA1ACBiAUQglBZhLDJQgMAcgbBXQggBLg1AHQgbAAgpgSg");
	this.shape_102.setTransform(-19.378,-11.2288,0.1277,0.1277);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ED433D").s().p("AAkJIQhDgHhpglQiVg3gTgFQgmgLgKAAQAFh4AAg9QADhLACiGIADkKIBoAxQBKAmA1ABQBGABA/g4QAvgxBDhbIB0icQAlg8A9hNQgFClAAGqIAAEXQhOCngvA5QhDBRhSAAQgTAAgTgEg");
	this.shape_103.setTransform(-15.9728,2.0501,0.1277,0.1277);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EF5B33").s().p("AAEJKQg1gBhKgmIhogxIAAhoQgKAAgSADQgSACgIAAQhiAAg8hGQg1g/AAhWIAAjfQAAghAJgjQAPg1AkgrIAFADQADACADAAQBNAPBfAuQARAEA0AVQAqASAaAAQA2gHAghLQAahXALgcQBMjKAlhZQAxAMBNAWIBPAVIAFAAIALAFQBBAVAqA+QApA+AABGIAAAxIgDALQgTDUgFCJQg+BNglA8Ih0CcQhDBbgvAxQg/A4hEAAIgCgBg");
	this.shape_104.setTransform(-17.4057,-6.7102,0.1277,0.1277);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgfWmQinAAh/hoQgOgQgWgWQg9hCgghUQghhQAAheQAAgnALmPIAIi1QACgzABhpIADjSQh8g4hJh3QhFhzAAiDIAAjgQAAhDAThEQAehpBIhJQBPhQBQgjQACAAAvgnQAJgSASgPQALg0ANglQATg1AfgsQAjgtA3gcQBHgkBcAAQBpAAB0AbIChAsIAWAFQAMADAEADIApAFQCIAuBYB+QBZB+AACTQAAAbgDARIgDArQgMBZgKDwQgID+AAFFQAACkADBzIACJKQAADRiDCOQiDCPjFAAIgwADQgvACgiAAg");
	this.shape_105.setTransform(-17.3355,1.1883,0.1277,0.1277);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D1D3D4").s().p("AlFU7QgZgQgIgQQhAhHghhUQgihWAAhdQAAgdAQmVIAFivQAGirAAjIQh8g4hJh1QhFhxAAiCIADjhQAAhDAThDQAdhpBGhOQBChLBdgoQABgCAOgMQASgKANgPQAHgFAXgcQARhqA5hQQBahuCjAAQBXAACGAhQAlAHAyAMIBKATIAWAIQAKADAGAAIAnALQCLAtBYB7QBYB3AACYIgCAWIgBAWIgGAsQgNC+gGCKQgID+AAFLIAFNbQAADSiDCQQiECRjEAAIh+AAQgnAAg2ADIg2ADQiqAAh5hug");
	this.shape_106.setTransform(-15.3441,3.1798,0.1277,0.1277);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFCFD").s().p("AFmD/QglgQgthFQhChjghglQipi4lrgdQg6gEAZgeQAZgdBOgLQBegMBrAaQCGAmB/BmQC+CVAaB6QAJAqgOAaQgKARgMAAQgEAAgEgCg");
	this.shape_107.setTransform(12.0045,-9.0886,0.1277,0.1277);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2F2C2D").s().p("AlYSXQjjhdiyjsQh7irhFjPQhHjVAAkAQAAhNAFghQAZmiDpk8QAggwAhgdQEVk+GXAAQBrAACAAbQEIBJDJDpIALAJQAIAIALAQQANAQAHAIQD6FcAIHOIAAAQIADAJQACAHAAAHQAAB6gbCcQg7FHixDyQgGADgGAHIgIAMIgJAQQh6CcibBaQiaBVi1AUQgmAGhHAAQi0AAikhCgAqAt4Ig8BMQhwCVg/CxQhBC1gMDHIAABpQAADsBCDTQBDDKB3CgQCWDUDkBpQCcA9CmAAQAgAABCgLQFRgdDzksIALgRQALgKAGgLQBRhzA5iJQA5iIAZiVQAbibAAh1IAAgXIgFgQQgEjeg+jDQg+jDhyigQgHgNgMgNIgUgXIgLgLQiwjVkGhEQhZgbiBAAQl5AAkHEkgAghHRIgmgIQhfgjg0hbQheiMAAjAQAAgOADgcQADgbAAgOQARiWBBhgQAuhDA0ggQA2ggBIAAQBLgBA2AfQA4AgAsBFIADAEQADAEAAADQBSCEAAC6IAAAqIgFALQgICWhQB7QhdCPiDAAQgNAAgUgDgAhjl7QgrAXghA1QhABvgHBxQgFAXAAA3QAACjBMCIQA5BQBAAZQALAAASACIAZADQBiAABNhzQBJh5AJhnIAAhGQAAhegMg9QgPhJgig2IgKgPQgpg4gsgYQgrgYg6AAQg6ABgpAWg");
	this.shape_108.setTransform(9.0826,-0.7914,0.1277,0.1277);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2F2C2D").s().p("AAATZQi0AAikhCQjthgipjpQiAi0g/jGQhHjyAAjkQAAgPADgmQACgkAAgVQANjOBBi5QBDi7B2ibQANgTAUgYIAhgkQCKieCshQQCqhODGAAQBrAACAAcQEPBJDGDlIAEALIAWAYQANAPAHAPQD3FQAQHVIAAAmQAAB4gbCkQg8FFiwDvIgJALQgGAHgHADIgKARQh3CbibBZQiaBYi1AZgAlaxSQiiBLh/CPQgVAVgsA3QjbErghGXIAABoQAADyBCDOQBGDUB0CbQClDeDaBYQCUA/CpAAQBBAAAmgFQFegrDhkkIALgRIAPgQQCtjzAxkrQAbh1AAicIAAgmQgIm0jxlQQgUghgRgQIgFgLQi6jWkChDQhtgbhtAAQi5AAihBKgAhBHJQgvgMgmghQghgcgkg1QhXiIAAjFIAAhSQAQiLBChrQAuhDA2ggQA3ggBFgBQCSAABTCEIAGAKQBSB3AADHIAAA7QgRCWhMB3Qg3BUhCAiQguAYg5AAQgVAAgsgLgAhhl6QgpAYglA4Qg2BWgRCGQgFAbAAAxQAACvBSCCQAXAoAeAYQAbAWAjANQALAAASADIAZADQAugBAjgRQAxgbAthGQAkg7ATg1QAXg/AEhCIAAgLQAAgIADgOQACgOAAgHQAAilhMh3IAAgMQgqg5gpgXQgqgYg9ABQg6gBgnAYg");
	this.shape_109.setTransform(9.3634,-0.5106,0.1277,0.1277);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#902C8E").s().p("AkNH/QhkgcgtgLQipgnh3AeQhYAhgmAWQAYmXDpk7IA8hJQAmAJAzAPIBRAbQDcBuCHAAQA6AAAzhEQAcgnArhLQBgiLBahxQEGBDC7DhQhnBmiDCwQi5D4geAkIgIALIgIALQgFgGAAgKQgqg6gygdQgzgchBAAQhBAAgwAcQguAdgmA6QhEBngICJQg0gLhfgcg");
	this.shape_110.setTransform(7.155,-8.8337,0.1277,0.1277);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#9D2362").s().p("AAXFMIhbgrQg4gYgqgLQg0gQg8ADQg7ADg2AVQhHjOAAj8QAAhIAGgmQAmgWBYghQB3geCpAnQAsALBkAdQBfAbA0AMQgFAWAAA3QAAC5BRCDQA9BeBMAQQg6A6g1AhQhAAmhCAHQgRADgTAAQhJAAhZgog");
	this.shape_111.setTransform(2.403,1.6557,0.1277,0.1277);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#65318F").s().p("AkTB8IhRgcQg0gPglgJQCHiWCnhNQCnhNDAAAQB0AAByAhQhaBxhgCJQgrBLgdAnQgyBEg7AAQiHAAjbhtg");
	this.shape_112.setTransform(6.3157,-13.3048,0.1277,0.1277);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D7225D").s().p("ArzETQh3idhJjWQA2gVA7gDQA8gDA0AQQAqAKA4AZIBcArQBwAxBWgNQBCgHBAgmQA1ggA6g7QARALAsAAQAyAAApgWQA5geAwhKQAmg2AWhEQASg6AKhNQBBgRBjARIB5ALQBIAGAqAAQB6gBBig8QAygdAbgUIAAAmQAABCgIBLQgDAtgMBYQhXA2haBfQg4A7haByQhIBVgHAGQgrAig2gVQhRglgqgNQhIgXg4ASQhKAOhTBJIiECEQhWBRgyA4QhIBPgsBHQjohkidjcg");
	this.shape_113.setTransform(9.5007,6.2839,0.1277,0.1277);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EE6B95").s().p("AkcB6QALgsATgiQAgguA1gtIBlhOQAvgoAYgPQAsgbArAAQAhAGA8AbQBDAfAaAGIAWAAQjrEwloAqQAEg1AJgig");
	this.shape_114.setTransform(14.2143,11.9677,0.1277,0.1277);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EB307C").s().p("AqFGXQAshHBHhPQAzg4BVhRICFiDQBUhJBKgOQA4gSBHAXQApANBSAlQA2AVAqgiQAHgGBJhVQBahzA3g7QBbhfBXg2Qg6E8iuDxQgFAKgVAXIgWAAQgagHhDgfQg8gbghgGQgrAAgsAbQgZAPgvAoIhkBPQg1AsggAvQgTAigLAsQgJAigEA1QgQAAgiADQgjACgTAAQiyAAichAg");
	this.shape_115.setTransform(13.0654,8.6838,0.1277,0.1277);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9D2362").s().p("AgaHZIh5gLQhjgRhBARIAAg3QAAi2hHh3IAIgLIAHgLQAfgkC4j3QCEixBlhmQAPAKAMAPIAVAdQDuFIARHRQgbAUgyAdQhiA8h6ABIgGAAQgqAAhBgGg");
	this.shape_116.setTransform(16.7004,-6.025,0.1277,0.1277);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AmoVOQkShwjVkVQiXjRhKjlQhRkcAAj8QAAgSACgoQADgnAAgXQARjsBMjWQBMjTCEixQA3hCAVghQCpi8DWhiQDVhhDxAAQCbAACCAmQFNBRDtEjIALAGQAhAsALAWQEiF9ARIWIAAArQgBCPgbCuQhAFkjSEtQgFAFgIALIgOARIgGAFQkuGBnBAxQgxAFhSAAQjjAAjHhYgAACjBQgCACgCAAQggBAgGBEQAAAMgDARQgDASAAAHQAAB1AwBKIABgCQABgDADAAQAWgsAJgYQANgoAAgoQAGgcAAgKQAAhogshHIgGgQQgDAAgCADg");
	this.shape_117.setTransform(9.1177,-0.6159,0.1277,0.1277);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D1D3D4").s().p("AmlVRQkjh8jKkQQiUjRhHjkQhSj1AAkdQAAhSAFgmQAinsEMllQAfgvAtgtQCqi7DShiQDVhkD0AAQB8AACgAmQFVBgDmEQIAFALQASASAfAqQEdGGARIXIAAAsQAACPgcCuQhCFojQEiQgGAMgVARIgFALQkyF+m9A4QgWAAgpADQgpADgWAAQjqAAjAhYgAAEjCIgEABQgmBCAABGQgGARAAAmQAABoAsBXIAEgGIABgFQApg5AIhVIAAgmQAAh3gmg9IgLgLIAAgDIgBACg");
	this.shape_118.setTransform(11.1123,1.3755,0.1277,0.1277);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFCFD").s().p("AiRB+QgcgeAIhBQAKhFAxgvQA9g4BhAEQBTAFAYAhQAUAbgZAcQgVAWhfA7QheA8gNAOQgbAbgWAAQgPAAgMgMg");
	this.shape_119.setTransform(10.3801,-7.6871,0.1276,0.1276);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2F2C2D").s().p("AggTdQhfAAhDg3QgFgLgGAAQgngogTgzQgVgzAAg6QAAghAQmQIAGivQAGjxgBjqIAAhHIgYAAQhvAAhFhOQhAhIAAhhQADhHAAgxIAAhoQAAgmALgoQASg8AngrQAggjA6gkQAqgOBJhCQAEgGAQgVIAxg8QAFgKAAgSQAMhQAbgoQAzg8DZA2QA5ARBgAWQAOAGARAEIAVAGIAQAFQBOAZAwBEQAvBDAABVQAAAQgDALIAAAhQgMBlgJD5QgMDVAAF6IAGNhQAAB7hIBRQhJBUhtAAIgzADQgwACgkAAgAjijxQAIAAALALQADAAAEAHQADAHAAAIIAABoQgCECgGDZIgFC1QgOGKAAAhQAABaA9BDIAFAFQA6AxBEAAQBNAAA+gFQAkAAAwgDIAzgDQBXAAA3g9QA2hAABhmIgEpKIgFkXQAAkGALlJQAJj9ANhmIADgcQACgLAAgQQABhAglg3Qgmg2g5gRQgrgLgXgLQgugMhrgVQhWgbhLAAQgXAAgNAGIgIAFQgWAegFA/QgFAWgRAhIgwA8QgRAVgGAGQhTBMgxAVQgjAOgkApQggAjgOAwQgIAfgBAcIAADgQABBMAuA3QA0A9BVAAQAYAAAXgLg");
	this.shape_120.setTransform(11.0336,0.5894,0.1276,0.1276);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2F2C2D").s().p("AjCSjIgGgHQgDgEgCAAQgngogUgzQgUg0AAg5QAAghAOmKIAFi1QAGhtAAluIAChHIgYAAQhxAAhFhOQg+hHAAhiQADhBAAg3IAAhoQAAhnBChOQArgsAygVQAWgLAfgZIA+gyIBEhYIADAAQAAgQACgLQAHgoAFgUQALgnAQgVQAWgdA/gBQA+gBB5AZQA3ARBiAVQAhARAQAAIARAFQBOAZAwBEQAxBGAABXQAAARgDALIgDAbQgLBcgKECQgLFJAAEFIACEYIADJJQAACAhGBSQhHBUhvAAIiJAAQgjAAgxADIgzACQhaAAhJg8gAjjjuQALAAAGAFQALAHAAAPIAABtQAAENgGDJIgFC1QgRGPAAAcQAABaA9BDIAFAFQA+AxBEAAICHAAQA9gFBMAAQBWAAA4hDQA3hAAAhnIgFpJIgDkYQAAleAIjwQAGiSATjSIADgxQAAhDglg4Qgkg3g4gRIhEgQQhngegwgJQhwgbgwAAQgaAAgNAGIgJAFQgLAOgHAcQgDAOgGAlQgEAQgIAUQgIATgCAAIhEBVQhEBIhCAbQgpAZgfAeQg0A6AABUIAABoQgCA3AABBQAABMAwA3QA0A9BWAAQAhAAANgFg");
	this.shape_121.setTransform(11.3495,0.9127,0.1276,0.1276);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9D2362").s().p("Ak8CXQgCAAgDgEIgGgHQAyhkBBhHQBJhSBogzQBjgrBZADQBQACBeArIAABjQAABxhBBJQhABKhhAAIkSAFQhXAAg4g2g");
	this.shape_122.setTransform(12.8334,13.5129,0.1276,0.1276);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BC2131").s().p("AlpDcQAAghAOmJQALAAAmALQASAFCZA3QBoAlBDAHQBqAWBRhjQAvg5BOinIAACZQADCJADDEQhfgrhQgDQhZgDhjAsQhnAyhJBSQhCBIgxBkQhFhDAAhqg");
	this.shape_123.setTransform(12.3962,10.2785,0.1276,0.1276);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F59331").s().p("AgbDvQg0gWgRgEQhfguhNgOQgDAAgDgDIgEgDQAignAvgVQA2gaBDhAQAEgDASgWIAxg/IADAAQAEgFAJg3QAKg5AUgZQAQgaBHAEQA2ACBhAUQgkBZhMDMQgMAbgbBYQgeBLg5AHQgbAAgpgSg");
	this.shape_124.setTransform(9.0808,-11.6431,0.1276,0.1276);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#ED433D").s().p("AAlJIQhDgHhoglQiZg3gSgFQgmgLgLAAQAGh4AAg9QADhLACiGIADkKIBoAxQBMAmA2ABQBFABA/g4QAvgxBDhbIB0icQAlg8A+hNQgGClAAGqIAAEXQhOCngvA5QhCBRhTAAQgSAAgUgEg");
	this.shape_125.setTransform(12.4855,1.6501,0.1276,0.1276);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EF5B33").s().p("AAFJMQg0gBhNgmIhogxIAAhpQgKAAgSADQgTADgIAAQhiAAg7hHQg1g+AAhWIAAjfQAAgiAJgiQAPg2AkgrIAEADQAEADADAAQBNAOBfAuQARAEAzAWQAqASAbAAQA5gHAfhLQAZhYAMgbQBMjNAlhZQAxAMBNAWIBPAVIAFAAIALAFQBCAVApA+QAqA+AABIIAAAyIgEALQgTDTgFCKQg+BNgkA8Ih0CcQhDBbgwAwQg+A4hFAAIgCAAg");
	this.shape_126.setTransform(11.0528,-7.1251,0.1276,0.1276);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgeWpQiqAAh/hoQgNgRgWgWQg+hBgghVQgghSAAheQAAgnALmPIAIi1QACgzABhpIACjSQh7g4hJh3QhFhzAAiDIAAjgQAAhDAThEQAehpBHhMQBQhPBQgkQACAAAugmQAJgSATgPQALg1ANgkQATg1AfgsQAjguA2gcQBIgkBeAAQBpAAB0AcIChArIAXAGQALACAFADIAoAGQCIAtBYB+QBZB+AACWQAAAbgDARIgDArQgMBZgJDwQgJD+AAFFQAACkADBzIADJKQAADTiECPQiDCOjFAAIgwADQgvADgiAAg");
	this.shape_127.setTransform(11.123,0.7885,0.1276,0.1276);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D1D3D4").s().p("AlGU+QgZgRgJgQQhAhGghhVQghhVAAheQAAgfAPmVIAGivQAFirAAjIQh7g4hJh1QhFhxAAiCIADjhQAAhDAThDQAdhpBFhOQBChLBdgoQACgCAOgMQARgNAOgPQAHgEAXgdQARhqA5hQQBdhtCiAAQBXAACGAgQAlAHAyANIBLATIAVAHQAKAEAGAAIAnALQCLAtBYB7QBYB5AACYIgCAWIgBAWIgGAsQgNC+gGCKQgID+AAFLIAGNbQAADUiECRQiDCRjFAAIh+AAQgnAAg2ADIg2ACQiqAAh7htg");
	this.shape_128.setTransform(13.1142,2.7796,0.1276,0.1276);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFCFD").s().p("AFkD/QglgQguhGQhBhigiglQiki4lrgdQg6gDAZgbQAagfBOgLQBdgOBsAeQCFAmB6BiQC/CWAaB5QAJAqgOAaQgKARgMAAQgEAAgEgCg");
	this.shape_129.setTransform(13.0437,-8.5298,0.1277,0.1277);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2F2C2D").s().p("AJwTZQgsgFhogGQhigLhkAAIhvgCQhOgDguAAIiBADQhoAChPAAQiLAGivAAQhAAAgzggQg3gfglg1QgVgxgLgWIAAgRIgskiQAAg5AYg0QAqhXBignQAPgHAcgHIA+gOIAdgHQANgEAHAAIAGAAIAFgFQCwi0CejWIARgbQCBivA0h5QAPgoAHgcQAEgQAAgIQAAgSgGgMQgHgOgQgQQgXgYgYgLQgYgJghAAQgfAAgQAFQhNAKg5AdQhSAmg6AsIh4BdIhHAAQgdAAgNgCQgUgCgQgHIgQgGIgLgFQg9gegmhVIgDgFIg/mmIAAgLQAAgKAGgMIADgLQAfhRA7goQAEgFASgMIAFgFIFVi1QDbhKDiAJQEnAQDJCkQB4BnBCCAQBdCqAADmQAACPg8CYQgvB/hVCKQhVCKiCCgQCkgMBEgKIARAAIAFgCIAGgDIALAAQBfAABEBIQBLBQAACEIgCAsIgBA3IgDA8QgCA8AABNQAABqhCBGQhJBSh3AAgAEZSHIBuAGQA+ACAcADQCIAIAMAJQBggEA2hBQAvg1AAhSQAAhNAGhBIAAg3QAFhQAAgTQAAhog5g/Qg0g5hHAAIgfAFQikALhPALIg6AGQgRAAgIgRQgJgSAMgOQEWlZBij7QA5iUAAiDQAAjLhViqQhAiAhvhRQi0iYkZgRQi/gQjlBMIlKCqIgMAMQgFAEgKABQgyA2gTAtIgCALQAAAKgDAAIA/GhQAWArAxAhQARALACAAQAfALAcAAIArAAIBzhYQBWg7A+gcQBQgkBKgIIA0AAQBaAAA2A3QAbAXAMAbQAKAXAAAfQAAAnggBKQg1CBiFC4IgTAWQiqDnivCzQgDADgGADIgKAFIgOAAQgbALgZAAIg4AOQgbAHgOAHQhIAcggBAQgWAqAAAuIAAAWIAvEMIAJAcQAGARAHAKQAdApAlAYQAqAYAxAAIE6AAQCJgGCvAAg");
	this.shape_130.setTransform(10.6378,1.0481,0.1277,0.1277);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2F2C2D").s().p("AJxTYQgvgGhkgFQhogLheAAIojAAIi5AHQhZAEgpAAQhAAAg3gjQg0ghgjg6QgRgWgQgtIgvktQAAg9Aag1QAphWBhgjQAogRBBgQIAdgIQAOgDAHAAIALAAQCjijCrjtIATgWQCAixA0h7QAPgmAHgdIADgUQgBgXgEgMQgGgQgQgPQgWgUgZgJQgYgJghAAIgxAAQhKAJg6AdQhGAfhIAzIh2BdQgCAAgHADQgFADgFAAIg3AAQgqAAgkgRIgPgFIgMgGQhCgjgghKIAAgLIhCmgIAAgRQAAgDADgIIADgKIAFgLQAYhGA/g0QAMgFAKgLIAGgGIFXi0QD5hNDFAQQEpARDECfQB9BoBAB+QBdC0AADiQAACGg9ChQhfD5j8E1QCggMBMgKIAgAAQBiAABEBGQBLBNAACEQAAAYgFBQIAAA3QgGA8AABMQAABrhBBGQhHBSh5AAgAEaSLQCVAAAxAGQA5ADAyAHIAsAGQBdAAA2hDQAvg2AAhTQAAgWAGh4IACg3QADgmAAg8QAAhmg5g9Qgzg4hJAAIgbAAQhSAKilAMIg6AFQgSAAgIgQQgHgTALgOQCMitBeiSQBeiSAziDQA6ifAAhyQAAjUhYimQggg/gsg2Qgogsg4gwQi6iZkWgRQjRgJjRBFIlMCrQgEADgJAIQgIAIgEADQg1AwgPAtIgDALQgDAFABAGIA7GgQAPAhAYAWQAQAQANAGIAQALIAFAAIAeAHQAQADAOAAIAvAAIBwhXIBKgwQAqgZAggPQAigOAsgMIBLgSIA3AAQAtAAAiANQAhAOAdAcQAxArAABDQABAkggBKQg3CDiECzIgQAcQi2DxijCkQgKALgGAAIgRAAQgcALgbAAQhGAVgcAGQhGAgggBBQgTApAAAwIAAAQIAsENQALAjANAZQAaAmAnAZQAsAaAwAAICAgDQBpgDBPAAQCLgFCsAAQCqAABHAFg");
	this.shape_131.setTransform(10.9346,1.3494,0.1277,0.1277);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#006739").s().p("AhZC1QgiAAg5gDIhugIQAmhKA+hMQA/hHBEgvQA+goBrgVIC1gmIAAAXQAAAkgDAvIgDA7QAABcg4A/QhABKhoAAg");
	this.shape_132.setTransform(17.895,14.0209,0.1277,0.1277);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#079248").s().p("ArjFfQgtgdgdguQAtg3BSg2QB4g1BbgeQB/grBkgLQBOgNB6AeQCcAnAtAEQB2AIBCgsQBCgqAshrQAqhrAUgsQAnhTAqgzIAQAAQBUAAA7BBQBBBGAAB1QAABNgGA1Ii0AlQhsAWg+AoQhEAvg/BHQg/BNglBKIjqAAQivAAiJAGQiJAFiyAAQg6AAgvgeg");
	this.shape_133.setTransform(11.2856,11.4709,0.1277,0.1277);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#34B475").s().p("ArVImIgvkRIAAgXQAAgwAXgvQAlhNBXgkQAOgGAcgHIA7gOQAVgDAYgHQAVgHAFAAQCgifCzj1ICbBjQAtAaArAGQAuAGAxgQQBIgPA+grQAsghA7g+QBlhIAzgfQBbg4BFgWQgxCBhhCZQheCSiQCzIEuggIAQAAQgpAygnBTQgUArgqBsQgsBshCAqQhCArh2gHQgugEicgnQh5gehOAMQhkAMh/ArQhbAeh4A0QhTA3gsA3QgPgYgPgqg");
	this.shape_134.setTransform(9.7825,7.1339,0.1277,0.1277);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00A79D").s().p("AjmH+QgqgFgtgaIichjIAKgLQAGgHAFgEQCCi0Ayh9QAchEAAgkQABgYgHgRQgJgWgXgTQgxgyhKAAQggAAgRAGQAOgcAWgXQAVgVAhgVQA6gbBGAGQA7AEBMAcQAGABCCA0QBZAjAxgGQAygOAphKQAXgpAhhPQAagoAlhWQBbC0AADRQAAB9g9CkQhEAWhbA4QgzAfhlBHQg7A/grAhQg/ArhHAPQgjALgiAAQgNAAgOgCg");
	this.shape_135.setTransform(14.3685,-2.8559,0.1277,0.1277);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#32ABDF").s().p("AoQHXQgtAAgXgQIgNAAIgLgFQg3gegehFIhBmlQADAAAFADIAIADQDyA2DAAbQBlAOAYAAQBHAAAsgjQA0gsAihiQAihsAQguQAXg/AghrQEbAQDFCfQBoBaBMCCQglBVgaAoQghBPgXApQgpBKgyAOQgxAGhZgjQiDg0gGgBQhMgcg7gEQhGgGg6AbQggAVgVAVQgWAXgOAcQg7AAhWAmQg/AehQA0Ih4Bdg");
	this.shape_136.setTransform(9.4155,-8.4241,0.1277,0.1277);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2377BA").s().p("AAJDtQi/gcjyg2IgIgDQgFgCgDAAIAIghQAVg8A6gtQAHgDAIgIIANgKIFTivQC9hCCyAAIA8AAQggBrgXA/QgQAughBrQgkBigzAsQgtAkhHAAQgYAAhlgOg");
	this.shape_137.setTransform(5.1997,-11.2357,0.1277,0.1277);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AJbWnQgxgGhagFQhogLhWAAIhrgDQhMgDgvAAIh+ADQhmADhOAAQiOAFiyAAQhyAAhmg6Qhog7g9hmQgig6gVg/Ig0lkQAAiCBDhuQBPiCCYg5QAxgVBUgRQCGiPCLi5IARgbQAbgiAxhLQgIADgLAIIgTAQIi0CDIiEAAQhMAAgzgWIghAAIgxggQg5gegugzQgyg2gbhEIgRgbIhHntIAFgsQADgFADgOQADgOACgFIAJgcQAuhwBjhbIAxgmIGOjLQD9hWEEAJQFlAZD/DNQCLBqBoC5QB2DkAAEPQAACshNDCQgpByhiCqQCGAoBWByQBeB/AACzQAAAWgFBXIAAA9QgFA8AABBQAADFiECHQiDCHjFAAg");
	this.shape_138.setTransform(10.6888,1.2212,0.1277,0.1277);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D1D3D4").s().p("AJbWlQgugGhbgFQhogLhXAAIoWAAQiMALi0AAQh2AAhng9Qhgg8hBhoQghg1gThJIgLghIgrk5QAAiCBBhvQBOiDCUg8QAtgUBcgSQCXihB6inIATgWIApg7QAWgeALgUQgWALgLALIi0CJIiGAAQhMAAg6gWIghgGIgsgbQg1gdgxg2Qgxg1gfhDIgLghIhMnsIAIgnIAFgVIAGgWIAIgcQAnhvBthXIAugsIGOjKQEchXDmAQQFkAQECDQQCZB8BYCnQBzDnAAERQAACyhKC9Qg9CUhPCCQCIAsBUBzQBcB/AACzIgCCkQgGBrAAAUQAADJiFCFQiECEjGAAg");
	this.shape_139.setTransform(12.6483,3.2062,0.1277,0.1277);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#2F2C2D").s().p("AJwTbQgsgFhogGQhigLhiAAIhvgCQhOgDguAAIiBADQhoAChPAAQiLAGivAAQhAAAg1ggQg3gfglg3QgVgxgLgWIAAgRIgskiQAAg5AYg0QAqhXBignQARgHAcgHIA+gOIAdgHQANgEAHAAIAGAAIAFgFQCwi0CejWIARgbQCBivA0h5QAPgoAHgcQAEgQAAgIQAAgSgGgMQgHgOgQgQQgXgYgYgLQgYgJghAAQgfAAgQAFQhNAKg5AdQhSAmg6AsIh4BdIhHAAQgdAAgNgCQgUgCgSgHIgQgGIgLgFQg9gegmhVIgDgFIg/mmIAAgLQAAgKAGgMIADgLQAfhRA7gqQAEgFASgMIAFgFIFXi1QDbhKDiAJQEnAQDHCkQB4BnBCCCQBdCqAADmQAACPg8CYQgvB/hVCKQhVCKiCCgQCkgMBEgKIARAAIAFgCIAGgDIALAAQBfAABEBIQBLBQAACEIgCAsIgBA3IgDA8QgCA8AABNQAABqhCBIQhJBSh3AAgAEbSJIBsAGQA+ACAcADQCIAIAMAJQBggEA2hBQAvg3AAhSQAAhNAGhBIAAg3QAFhQAAgTQAAhog5g/Qg0g5hHAAIgfAFQikALhPALIg4AGQgRAAgIgRQgJgSAMgOQEUlZBij7QA5iUAAiDQAAjLhViqQhAiAhvhTQiyiYkZgRQi/gQjlBMIlMCqIgMAMQgFAEgKADQgyA2gTAtIgCALQAAAKgDAAIA/GhQAWArAxAhQATALACAAQAfALAcAAIArAAIBzhYQBWg7A+gcQBQgkBKgIIA0AAQBaAAA2A3QAbAXAMAbQAKAXAAAfQAAAnggBKQg1CBiFC4IgTAWQiqDnivCzQgDADgGADIgKAFIgOAAQgbALgZAAIg4AOQgbAHgOAHQhKAcggBAQgWAqAAAuIAAAWIAvEMIAJAcQAGARAHAKQAdArAnAYQAqAYAxAAIE6AAQCJgGCvAAg");
	this.shape_140.setTransform(-19.5227,1.0482,0.1276,0.1276);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2F2C2D").s().p("AJxTaQgvgGhlgFQhogLhcAAIoiAAIi5AHQhYAEgqAAQhBAAg3gjQg0ghgkg6QgRgYgQgtIgvktQAAg9AZg1QAqhWBjgjQAogRBCgQIAdgIQANgDAHAAIALAAQCjijCrjtIATgWQCBixAzh7QAPgmAGgdIADgUQABgXgFgMQgGgQgQgPQgXgUgYgJQgYgJghAAIgyAAQhJAJg6AdQhFAfhJAzIh2BdQgDAAgFADQgHADgEAAIg2AAQgrAAgkgRIgRgFIgLgGQhDgjgghKIAAgLIhCmgIAAgRQAAgDADgIIACgKIAGgLQAYhGA/g2QALgFAMgLIAFgGIFZi0QD5hNDEAQQEoARDECfQB9BqBAB+QBdC0AADiQAACGg8ChQhhD5j7E1QChgMBKgKIAiAAQBhAABEBGQBLBNAACEQAAAYgFBQIAAA3QgGA8AABMQAABrhBBIQhIBSh4AAgAEcSNQCTAAAxAGQA4ADAzAHIArAGQBeAAA2hDQAvg4AAhTQAAgWAFh4IADg3QADgmAAg8QAAhmg4g9Qg0g4hIAAIgcAAQhSAKilAMIg6AFQgRAAgGgQQgIgTAMgOQCJitBeiSQBeiSAziDQA5ifABhyQgBjUhXimQgfg/gtg2Qgpgug4gwQi3iZkWgRQjRgJjRBFIlOCtQgFADgHAIQgJAIgEADQg1AwgPAtIgDALQgCAFgBAGIA9GgQAOAhAXAWQARAQAQAGIAOALIAGAAIAdAHQARADAPAAIAuAAIBwhXIBKgwQAqgZAggPQAigOArgMIBMgSIA3AAQAuAAAiANQAgAOAdAcQAyArgBBDQAAAkgfBKQg3CDiDCzIgRAcQi1DxikCkQgKALgGAAIgQAAQgcALgbAAQhHAVgcAGQhIAgggBBQgTApgBAwIAAAQIAsENQAMAjANAZQAbAoAoAZQAsAaAwAAICBgDQBogDBPAAQCLgFCsAAQCqAABHAFg");
	this.shape_141.setTransform(-19.2259,1.3495,0.1276,0.1276);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#079248").s().p("ArgFgQgwgdgdgwQAtg3BUg2QB5g1BageQB/grBkgLQBOgNB6AeQCbAnAvAEQB3AIA+gsQBCgqAshrQAqhrAUgsQAnhTApgzIARAAQBUAAA7BBQBBBGAAB1QAABNgGA1Ii0AlQhrAWg/AoQhEAvg/BHQg8BNgmBMIjqAAQiwAAiJAGQiIAFiyAAQg6AAgugeg");
	this.shape_142.setTransform(-18.8749,11.4826,0.1276,0.1276);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#34B475").s().p("ArVImIgvkRIAAgXQAAgwAXgvQAlhNBYgkQAPgGAcgHIA7gOQAVgDAYgHQAVgHAFAAQCgifCzj1ICbBjQAtAaArAGQAuAGAxgQQBIgPA+grQAqghA7g+QBlhIAzgfQBbg4BFgWQgxCBhhCZQheCSiNCzQAigEEJgcIAQAAQgpAygnBTQgUArgqBsQgsBshCAqQg/Arh3gHQgugEicgnQh5gehOAMQhkAMh/ArQhbAeh4A0QhVA3gsA3QgPgYgPgqg");
	this.shape_143.setTransform(-20.3779,7.1333,0.1276,0.1276);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00A79D").s().p("AjlH+QgqgFgtgaIichjIAKgLQAGgHAGgEQCAi0A0h9QAchEAAgkQgBgYgGgRQgJgWgWgTQgygyhKAAQggAAgRAGQAOgcAWgXQAVgVAigVQA5gbBHAGQA6AEBMAcQAHABCBA0QBXAjAxgGQAygOAphKQAXgpAhhPQAagoAlhWQBbC0AADRQAAB9g8CkQhFAWhcA4QgyAfhmBHQg6A/gqAhQg+ArhHAPQgjALgiAAQgNAAgOgCg");
	this.shape_144.setTransform(-15.7797,-2.8553,0.1276,0.1276);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#32ABDF").s().p("AoPHYQgrAAgZgQIgOAAIgLgFQg2gegfhFIhCmlQADAAAGADIAIADQD0A2C/AbQBmAOAYAAQBHAAAsgjQA0gsAjhiQAhhuAQguQAXg/AghrQEbAQDDCfQBpBaBLCEQglBVgaAoQghBPgXApQgpBKgyAOQgxAGhXgjQiCg0gHgBQhMgcg6gEQhHgGg5AbQghAVgVAVQgWAXgOAcQg7AAhWAmQg/AehPA0Ih5Bdg");
	this.shape_145.setTransform(-20.7448,-8.4356,0.1276,0.1276);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AJbWpQgxgGhagFQhogLhUAAIhrgDQhMgDgvAAIh+ADQhmADhOAAQiOAFiyAAQhzAAhng6Qhog7g9hmQgig6gVhBIg0lkQAAiCBDhuQBPiCCYg5QAxgVBWgRQCGiPCLi5IARgbQAbgiAxhLQgIADgLAIIgTAQIi0CDIiEAAQhNAAg0gWIghAAIgxggQg5gegugzQgyg2gbhEIgRgbIhHntIAFgsQADgFADgOQADgOACgFIAJgcQAuhyBjhbIAxgmIGQjLQD9hWEEAJQFjAZD/DNQCLBqBoC7QB2DkAAEPQAACshNDCQgpByhiCqQCGAoBWByQBeB/AACzQAAAWgFBXIAAA9QgFA8AABBQAADHiECHQiDCHjFAAg");
	this.shape_146.setTransform(-19.4716,1.2213,0.1276,0.1276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20,p:{scaleX:0.1277,scaleY:0.1277,x:3.7059,y:3.2063}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:0.1277,scaleY:0.1277,x:-3.7309,y:-11.2501}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{scaleX:0.1277,scaleY:0.1277,x:8.9659,y:14.035}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{scaleX:0.1277,scaleY:0.1277,x:4.1141,y:-8.5438}}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-15.3441}},{t:this.shape_105,p:{x:-17.3355}},{t:this.shape_104,p:{x:-17.4057}},{t:this.shape_103,p:{x:-15.9728}},{t:this.shape_102,p:{x:-19.378}},{t:this.shape_101,p:{x:-16.0621}},{t:this.shape_100,p:{x:-15.6249}},{t:this.shape_99,p:{x:-17.1089}},{t:this.shape_98,p:{x:-17.4248}},{t:this.shape_97,p:{x:-18.0785}}]},1).to({state:[{t:this.shape_106,p:{x:-9.2941}},{t:this.shape_105,p:{x:-11.2855}},{t:this.shape_104,p:{x:-11.3557}},{t:this.shape_103,p:{x:-9.9228}},{t:this.shape_102,p:{x:-13.328}},{t:this.shape_101,p:{x:-10.0121}},{t:this.shape_100,p:{x:-9.5749}},{t:this.shape_99,p:{x:-11.0589}},{t:this.shape_98,p:{x:-11.3748}},{t:this.shape_97,p:{x:-12.0285}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}}]},1).to({state:[{t:this.shape_106,p:{x:-13.6941}},{t:this.shape_105,p:{x:-15.6855}},{t:this.shape_104,p:{x:-15.7557}},{t:this.shape_103,p:{x:-14.3228}},{t:this.shape_102,p:{x:-17.728}},{t:this.shape_101,p:{x:-14.4121}},{t:this.shape_100,p:{x:-13.9749}},{t:this.shape_99,p:{x:-15.4589}},{t:this.shape_98,p:{x:-15.7748}},{t:this.shape_97,p:{x:-16.4285}}]},1).to({state:[{t:this.shape_20,p:{scaleX:0.1276,scaleY:0.1276,x:-17.5124,y:3.2061}},{t:this.shape_146},{t:this.shape_18,p:{scaleX:0.1276,scaleY:0.1276,x:-24.9474,y:-11.2468}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_13,p:{scaleX:0.1276,scaleY:0.1276,x:-12.2536,y:14.0322}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_10,p:{scaleX:0.1276,scaleY:0.1276,x:-17.1043,y:-8.5413}}]},1).wait(10));

	// Layer 1
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFCFD").s().p("AFlEAQgkgQgshGQhChjghglQipi4lrgeQg6gEAZgdQAagcBNgLQBegOBsAeQCFAkB+BlQC8CWAbB6QAKArgPAZQgJARgNAAQgEAAgEgCg");
	this.shape_147.setTransform(10.5479,-8.0767,0.1277,0.1277);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#2F2C2D").s().p("AlsS8QiygpimhTQgJAAgLgLQgkgPgZgjQgqg6gDhqQgFiCA+jGQAghnBHg2QA6guBCAAIACADQABABAAAAQABABAAAAQABABAAAAQABAAAAAAIBSAWQB6BCBfAfQBIAXAwAAQBQAAA0gQQAbgJAMgIQAIgHACgGQAGgNAAgdQAAgqgJgSQgEgJgLgHIgCgBIgBgFQgwgQg3gGQgbgFg/AAIhrAAIhBAHQgfAEgNAAQhVAAg6ghQhGghgng/Qgng/AAhSQAAiPAOhFIAGgWIAFgWQAjhsBFgtIgIAAQhBAAg1gmQhZg/gXiXQgLhEAAiXQAAhGAeg7QAshaBlg6QBmgxCAgXQFVhFD/BFQBnAeBxBAIAVANIASAOQCUBiBNCUQBMCVAAC9QAADEhXCwQgEAKgHAOIgLAUQA4A7AwBoQA5B8AICbIACAhIABAhQAAC0g4CWQg5CVhtBrQgwAvgRANQjkCylYAAQiuAAimgggAqGGtQgyAqgXBQQg+DMAHBsQAABZAhAsQAQAWARAEIAKAFQAFADABADIAIAAQCQBMC+AqQC7AnCLAAQFFAADTiuQATgKAngnQBmhnA1iKQA1iKAAioQAAgZgGgjQgIiXg0hwQgohahDhJQgOgSALgPIAOgaQAJgQAFgNQBVixAAitQAAithHiJQhGiGiGhbQgQgNgWgJQhXg9h0gaQjwhHlIBHQiLAahKAnQhUAsgkBJQgaAxAAA5QAACSALBDQAUB2A/AwQAnAfAzAAQAyAAAggQQB7hNCyAAQBLAAAxAPQAfAKAQAOQANAPAFAOQAHAVAAAlQAAAlgOASQgBAAgCAFQgCAGgDAAQgNANgiABQgsABh/gPQiDgRhNAAQgoAAgkAVQhBAkgcBbQgIAPgDAYQgOA+AACLQAABBAeAxQAeAvA0AZQAZAQAfAGQAbAGAmAAQA8AAAxgGIDLAAQA7AGBBAbQAGAAAAAGQAYAOAMAYQAQAfAAA4QAABPgkAUQgSASgpANQg6AShcAAQiJAAjeiDIhHgRQgxAAgqAlgAmamsQAhAAA7AHIB3APQBoALBHAAQADgLAAgLQAAgmgJgGQgGgFgUgFQgogLhBAAQiUAAhlA2g");
	this.shape_148.setTransform(8.3154,1.0336,0.1277,0.1277);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2F2C2D").s().p("AlqS6QjIgsiRhQQgFAAgFgCQgHgDgCAAQgkgPgbglQgrg7gDhnQAAiOA7jAQAfhlBGg1QA5grBDAAIAFAAIBSAVQDhB5BzAAQBRAAAzgOQAjgKAEgJQAFABAEgLQAFgPAAgdQAAgqgJgTQgDgGgKgKIgFAAQgfgVhIgHQgNAAgdgCQgcgDgSAAQgsAAgbAFIgkAAQgxAGg/AAQhRAAg9ghQhEgcgohBQgohBAAhSQAAiDAQhSQAAgRAMgVQAPg7AegoQAagmAggRIgIAAQhAAAg3goQhZg/gZiUQgKhvgBhtQAAhJAfg8QArhaBmg2QBTgtCSgaQFnhJDuBJQBkAWB3BBQAZAWALAGQCUBnBNCTQBPCXAAC9QAAC6hbC0QgJAbgNARQA8BDAtBgQA5CFAICSQAGAxAAAXQAACxg5CVQg6CVhuBuQgUAVguAiQjfCylaABQivgBikgggAqFGtQg0AsgXBSQgdBZgOBQQgPBPACA6QADBZAgAsQAQAYASAHIAKABQAFABACAEQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABIAFADQCTBLC7ArQCbAhCqAAQE+AADbioIAcgbIAdgbQBkhiA1iNQA0iKAAilQAAgtgCgWQgJiRg0hvQgvhng8hCQgHgEgCgLQAAgJAEgJQAWghAGgWQBXioAAiwQAAiwhIiLQhHiJiIhYQgKgNgXgKQhrhAhjgXQjuhGlLBGQiCAYhTAqQhTAugjBIQgYAvAAA5QAACWALA/QARB2BAAzQApAiAyAAQA1AAAdgWQCJhNClABQBKgBAxAQQAbAIAVAPQALAQAGAPQAHAXABAiQgBAUgEAPIgJATIgFALQgUAPggABQgyACh6gSQiDgRhNAAQgoABglAUQhBAlgcBbIgGAVQgCALgDAGQgLBAAACKQAABBAfAyQAeAyA0AUQAsAcBJAAQA8AAAxgFIDOAAQBYASAlAOIACAFIADABQAZAOALAYQARAggBA4QAAAtgLAYQgJAUgSAJQgSASgpANQg6AShaAAQiCABjnh/IhHgVQgyAFgnAhgAmZmtQAgAAA6AGIB2APQBuALBCAAQAFgJAAgMQAAgigLgLQAPABgogLQgogLg/AAQiUAAhmA3g");
	this.shape_149.setTransform(8.6141,1.3383,0.1277,0.1277);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EF5B33").s().p("Ak1CMQhKgJhbgTQAWgzAxg9QBQhPBpgiQBQgZCLgKQBmgHCFAYQBNAOCdAjQAAAGAFAAQgmAmgWAQQjgCtlLAAQhRAAhYgLg");
	this.shape_150.setTransform(9.7981,14.6521,0.1277,0.1277);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FAAF4C").s().p("ArpBHQAbhaA7gwQAzgpA8AAIBNAVQDhB9B6AAQBSAAA3gSQAjgKATgOQAYgRAAg8QAAgzgNgaQgHgPgSgMQgYgKgOgEQgigKgqgDQAhgvAdgdQAngjArgPQBcgbCFAnIBwAlQBDAXArAKQBrAOBoiSQA2B8ALCRQhUAAhCAVQhBAchSBWQheBngiAXQhmBbgaAUQhXBBg6AAQgqAAgzgnQgggTg0gSQg+gVgPgHIg7gyQgggagjgHQgsgHhIALQgbAEhkAUQhaAThOBBQhGA6g0BYQAAiGA8i4g");
	this.shape_151.setTransform(8.2982,7.0924,0.1277,0.1277);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F59331").s().p("Aq1EmIgDAAQgFAAgLgLQgWgEgXgaQgtgygDhqQA0hYBGg5QBOhBBagTQBkgUAbgEQBIgLAsAHQAjAHAgAaIA7AyQAPAHA+AVQA0ASAgATQAzAmAqAAQA6AABXhAQAagUBmhbQAigXBehnQBShXBBgcQBCgVBUAAIAABBQAAFjjVDWQgGAAAAgGQicgjhOgOQiFgYhlAHQiLAKhQAZQhqAihPBPQgyA+gWAzQiggeiwhYg");
	this.shape_152.setTransform(8.2982,10.8199,0.1277,0.1277);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F8EB48").s().p("AjUKeIhqAAQgyAFg8AAQhEAAg/gbQg+gdgjg3Qgig5gBhJQAAh+ARhSQAAgHADgMIAFgTQAjADArAMQAaAHA0AQQA/ARB5AuQBsAlBLgHQBoAABpgZQB5gdBIgyQBHg0AzhqQAohVAThlQAJg7gEgsQgEg1gXguIglg4QgYgjgIgeQguhqA+h0QAEACANAJQALAIAIADQCNBiBLCPQBLCQAACxQgBCxhXC3QgWAsgLALQBNBVAmBaQhoCRhqgOQgsgJhDgYIhwglQiFgnhcAbQgqAQgnAjQgeAcghAvQgbgFhFAAg");
	this.shape_153.setTransform(8.9971,-4.2498,0.1277,0.1277);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D6DE3B").s().p("AiPIBQh5gug/gRQg0gQgagHQgrgMgjgDQAghpBNgsQAtgaAuAAQAfAAA5AHIB4APQCVAQAZAAQAMAAAHgFIAJgGIAGgNQAFgNAAgSQAAgigHgRIgKgOQgMgMgdgJQgrgMhEAAQiiAAh7BHIAAAFQgoAWg6AAQg4AAgvgjQhPg5gViJQgLhiAAhzQAGAAAFgGQCQgiASgDQBmgRA7AVQAvAWBSAqQBHAeBCAAQBFAAAngVQAqgXAgg8QBkh/BRiRQBpAeBsA/Qg+B0AuBqQAIAeAZAjIAkA4QAXAuAEA1QAEArgJA7QgTBlgoBWQgzBqhHA0QhIAyh4AdQhrAZhoAAIgYABQhDAAhbgfg");
	this.shape_154.setTransform(6.6609,-7.1094,0.1277,0.1277);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#8EC549").s().p("AgSCuQhSgpgvgWQg7gVhmARQgSADiQAiQgFAFgGAAQAAg+Adg3QAohRBdgzQBCgiCcglQCsggCWAAQCLAAB2AgQhRCShkB9QggA8gqAXQgnAVhGAAQhCAAhGgeg");
	this.shape_155.setTransform(4.7813,-11.8644,0.1277,0.1277);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AmYWDQjXg1iphUQgVgLgGAAQhbgpg5hdQhDhpgEiZQgIikBKjnQAUhJAng/QAng/AygpQgyhtAAhpQAAiWAWhqQALgqAGgSIAAgLQhwhwgfi9QgNhRAAirIAAgLQACiNBKh1QBJhzCFhKQCBg/ChgeQGHhQEpBVQB+AeCNBVQAhAWAQAGQC9CDBlDCQBlDEAADuQAADOhPC2QAWAiAhBMQBJCRAJDHQAFAxAAAhQAADdhIC7QhJC6iLCJIgpAkIgpAjQkZDhmhAAQjOAAixgmg");
	this.shape_156.setTransform(8.3985,1.2208,0.1277,0.1277);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D1D3D4").s().p("AmTWBQjZgsimhdQgLAAgWgLQhbgqg5hZQhDhrgEiaQAAipBEjhQAuiXBmhaQguhmAAhwQAAiYAQhiIAQg9QAAgEACgDQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQhyhygfjAQgOhlAAiXIAAgLQAEiNBKhyQBKh1CChFQA5ggBKgXQBDgVBcgRQCzgpCwAAQCvAACcApQCUAqB5BOIAaAOQAOAHAJAGQC9CABmDDQBlDGAADuQAADDhNDCIAbAyQARAfAIAXQBFCYAQDAIAABSQAADehHC6QhHC4iJCMQg3A2gbAWQkdDbmdAAQjXAAiogmg");
	this.shape_157.setTransform(10.3598,3.1989,0.1277,0.1277);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFCFD").s().p("AlQD5QAvjmB6iBQBkhpCIgcQBugVBcAbQAlANASARQASARgKAQQgSAbg/APQg0AMgbgEQiVgcjKDdQgtAwhKBeQghAqgGAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_158.setTransform(11.4115,-7.6988,0.1277,0.1277);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2F2C2D").s().p("AC2TaQgygCglgIQgOAAgIgFQh3gcgzhdQggg6AAhBQAAg3ARh5IiUAGQi1AFivAAQhRAAhEguQhFgvgihSQgshgAAicQACh+AShNQARhNAlg2QAqg1BHhfICCizIApg3QDlluBti1IAxhQQAphIA0hSIAGgKQAxhJBCgfQAugWAzAAQB2AADCBHQAXALArALQBTAlAwBJQAyBLAABcQAAAfgEA7IgHB7IAAAyQgLBzAABzIAAERQgDAygDBLIARAAQBUAABABDQBHBKAAB0IAADhQACAWAAAbQAABqhABIQg/BHhhAIQAFBRAAAdQADAWAAAbQAABmg7BKQg6BKhbAQQglAIg3ACQgiABhSAAQhEAAgfgBgAg8L2QAIAJAAAIQgQCOAABCQAAA2AYArQAmBBBaAWQALAFALAAQBKARBlAAQB7AABKgRQBGgMAsg5QAtg6AAhPIAAgxIgDg5QgDgsAAgeQgCAAAAgLQAAgJAJgJQAJgKAMAAIAQAAQBPAAAzg3QAzg4AAhWIgGkSQAAhZg0g4Qgvg0g+AAIgmAAQgRAAgIgFQgEgEgBgFIgBgNIAAmvQAAhOALieIAGgxQAFhdAAhzQAAhMglg7Qglg7hEgdQgsgLgTgKQjBhChkAAQhgAAhDBiIgGAGQgcAshBBxIgxBMQhWCXj9GSIgqA8QivDwhCBNQghAxgPBHQgPBGgDBvQAACQAnBWQAcBFA2AoQA2AnBAAAQBJAAEbgLIC1gGQAIAAALALgAh1ByQgRgGAAgXQAAgFAEgGQAFgHAHgEQAIgLAQgUIAUgYQAGgHAKgBQAGgCALAAQAQAIAAATIAGAbIAAAmQAAANgIAHQgHAIgMAAQg6AAgNgEg");
	this.shape_159.setTransform(9.5457,1.0479,0.1277,0.1277);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#2F2C2D").s().p("AC0TaQgygCgjgIIgWAAQh5gfgyheQgfg3AAhFQAAg3AOh5IiRAGIjeAHQheAEgpAAQhRAAhEgxQhDgxgkhTQgrhfAAidQAAh7ARhOQAShPAmg2QBYhsCdjWIAmg8QDYlUB8jPIAvhSQAKgPAfg0QAfg0AUghIAGgLQAyhIBDggQAvgVAwAAQB7AADABHQAKAGAVAIQAWAIAKAFQBUAhAwBJQAxBJgBBdQAAB4gHBdIgEAyQgKCWAABVIAAEMQAABdgDAgIANAAQBVAABABDQBGBKABB0IAFESQAABqhBBKQhABJhgAEQAGBRAAAdIAAAxQAABmg7BJQg6BLhbAQQgjAIg3ACQgjABhTAAQhEAAgegBgAhSLxQAQAAAGAFQAFAGAAAQQgQCJAABCQAAA5AaAtQAmBCBbAVQAFAAAFADIAJADQBiALBNAAQBoAABdgLQBGgRAsg7QAtg6AAhOIAAgsIgFiJIAAgFQgBgMAIgIQAHgHANAAIATAAQBMAAAzg7QAzg6AAhWIgDi1QgCgmAAg3QAAhZgzg4Qgug0g/AAQgYAAgOAGQgLAAgKgLQgMgIAAgOIAEmqQAAhCAIivIAFgxQAIiAAAhQQAAhOglg2Qgmg4hGgdIgfgOQgSgIgLgGQjChBhmAAQhgAAhDBiIgFAGIheCcIguBTQi4EnieD8IgqA8QivDwg/BSQgiAsgPBIQgOBEgCB1QAACJAmBdQAdBCA0AmQA1AnBBAAQCuAAC0gLgAh3ByQgSgEAAgUQAAgTAQgIQAFgIAUgWQAQgTADgGQAIgHAJgBQAFgCALAAQAUAJAAAXQACAAAAAWQAAAQADAWQAAAMgJAIQgJAIgNAAQg4AAgNgEg");
	this.shape_160.setTransform(9.8617,1.3288,0.1277,0.1277);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F4A5BA").s().p("AkPCLQgGgGgQAAQALgWAhghQBGhUBKgvQBLgxBngZQApgKBBgFIBxgHQAAAWACAcQAABagzBAQg0BDhQARQhYALhxAAQhdAAhYgLg");
	this.shape_161.setTransform(14.3009,14.6623,0.1277,0.1277);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EE6B95").s().p("AmzEEQgcgzAAg8QAAg6ATiQIAAgFQgQADgVACIglAAQARgUAegdQAtgdBGgKQAqgFBUAAQAnAACAAJQBkAIBCgGQD6gPCmjXIAABSQAABjg7A/Qg7A/haAAIgRAAIAAAFQAGA7AABNIhxAHQhBAEgpALQhnAYhLAxQhKAwhGBVQghAhgLAWQhqgZgshRg");
	this.shape_162.setTransform(14.1987,11.6943,0.1277,0.1277);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EB307C").s().p("AruHWQg9gsghhJQgmhlAAiMIAAgGQBFg3BXglQCFgtBJgQQB6gaBTAWQA9ASBjAsQBoAwAwAPQBQAXBPgLQBCgJBTgkQBZgmA/hsQAkhAA4iGIAwhoQAdhBAZgnIgCAzIgCA7IAACvIAsAAQBKAAA1A5QA8A/gBBoQABAUAFBvIAAA8QimDXj6APQhBAGhmgIQh/gJgoAAQhUgBgqAGQhFAKgtAdQgdAdgSAUQhEAAgmAGQhaAAh3ACIiTADQhIAAg+gqg");
	this.shape_163.setTransform(9.5489,4.6127,0.1277,0.1277);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#902C8E").s().p("ABYDVQjShAjCgHQABgHAEgGIAFgJQAOgZAohCQArhIAdg1IAGgGIACgFQAug+A6gcQAqgUAqAAQB4AAC1BIQgSChgwBgQg0BqhMAAQgRAAgSgFg");
	this.shape_164.setTransform(11.1765,-11.6955,0.1277,0.1277);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#9D2362").s().p("Ag1HsIhpgfQg5gQgvgHQgugGhcgFQhbgGgvgFQg2gKgcgMIATgZQAMgRAHgNQCEjQDTlSQDCAHDSBAQBjAdBAiCQAwhgASiiQAXAGArAVQBLAdArBBQAsBDAABTQgBBRgHB/QiLAThvBWQheBJhfCLIgtBJQgbArgWAZQgwA2g4AAQgPAAgPgEg");
	this.shape_165.setTransform(10.1936,-7.2321,0.1277,0.1277);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D7225D").s().p("Ar0FPQAQhHAjgyIAEgGQA1hCC8kAQAcAMA2AKQAvAGBbAFQBcAGAuAFQAvAHA4ARIBpAeQBKARA9hDQAWgYAbgsIAthJQBfiLBehJQBuhWCMgTQAAAggEARQgHBuAAB9IgDCUQgZAngdBAIgwBoQg4CGgjBAQg/BthZAmQhUAkhCAJQhPALhQgXQgwgPhngwQhkgtg8gSQhUgWh6AaQhJAQiFAuQhXAlhEA3QAAh0AQhKgAAHDhQgQAAAfACIAoADQgFg2gBgMg");
	this.shape_166.setTransform(8.1511,-0.7361,0.1277,0.1277);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("ABBWdIgTgHQgKgDgHAAQirgmhiiAQhShsgJiHQiJAGiVgBQiPABh2hRQh2hRg+iLQg7iSgBi3QABiNAUhgQAbiABDhYIALgRQBVhpCRjPIAmgxQBmicBiinICEjZIAshNIAshJQAegyAZgjIAKgWQBGhnBlg3QBjg3BxAAQCagBDlBYIAiALQAYAIANADQCPA5BSB+QBSB9AACbQAACDgFBdIgGA3QgICpgBAyIgCBNIAACqQBnA4A9BkQBCBvAACOIAGESQgBB+g8BqQg7BohjA6IAAAWQAACqhpCDQhoCBikAhIgLAFQh4ALhzAAQhbAAh9gLg");
	this.shape_167.setTransform(9.6191,1.2234,0.1277,0.1277);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D1D3D4").s().p("ACkWnQg6gCgrgHQgIAAgLgEIgTgHQipgmhgh+QhRhpgMiIQhNAAhdADIh1ACQiPAAh1hQQh3hRg8iPQg5iFAAi+QAAiVAShcQAYh+BDhcIALgLQBDhVCpjpIAhgxQCcj2C1koIAshHIBdiiIAQgRQBHhnBig6QBig6BuAAQBMAABiAYQBWAUB+AsIAjAOQAVAHAMAGQCQA6BUB+QBUB8AACcQAAAmgLC6IgCAxQgJBuAABtIAACUIgCBjQBmA4A9BlQBDBvAACNIABAmIABAyIAACDQAAAWADAhQAACAg8BrQg5BlhjA9IAAARQAACthqCEQhqCFimAhIgFAAQgrAHhAACQgoAChcAAQhPAAgkgCg");
	this.shape_168.setTransform(11.6265,3.1798,0.1277,0.1277);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFCFD").s().p("Al2CoQgBgBACgTQAOiLAMgsQAThDApgZQAwgcBvgHQBKgFDkAAQDwAAgvAiQgRAMgzAKQgvALgkACQlZAOisCbQghAmgfAvQgHAMgBAAIgBAAg");
	this.shape_169.setTransform(7.6647,-9.4162,0.1277,0.1277);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#2F2C2D").s().p("AmjSwQiKgfhcgjQglgTgdgXQh9hYAAiTQAAg6AYisQALg8AWhYQAghkBDgxQArgfA0gGIA6AAIC+BzQBnA8BQAAQB4AAA8gsQAWgTAIgQQALgWAAgpQAAgZgFgMQgCgGgHgHQgKgKgJAAQg2ghh7AAIiDAQQhrAWhDAAQhNAAg9grQg9gpgfhLIgFgQQgIgWgDgbQgDgPgDgiIAAgsQAAgrAGgcQgCgQABgVIABgcIAAgWQAAhBgGkjIAAlpQAAgsAOgqQAVhKBAhEQAugpAWgOQA+gmBAAAIBhADQBQACA2AAIB/AIQA8ADAfAAQAsAAAcgFICLgGQBggFCGAAQAwAAArAQQAsARAeAgQAlAlAUAzQAUAyAAA2QAAA3gRBrQgLBNAAAbQAAAygTAxQgaBFg5AzQhCA+hcAJQBfAwA6AzIAEAFQABACAAAEQASAOAYAZIApAwQBOBnArCBQAqCCAECYIAAAWQAAD9hdDUQhSCkhpBYQh5BtiiA5QijA4jEAAQhrAAjngrgArVH1QgSA0gPBVQgWB8AABfQAAB4BlBHIA6AhQBSAjCGAXQDKAyB6AAQF0AADljOQBqhfBDiSQBYiwAAkGIAAgWQgJkiiOi5QgigwgugoQiAh0i9grQgLAAgHgHQgHgIAAgMQAKgbAXAAIBNAAQArAFA9AAQBMAAA3g3QAvgnAVg4QAOgnAAgpQAAgmAJhHQAQhpAAg0QAAgpgPgnQgNgngbgdQg1gxhJAAQiBAAhiAFIjWAGQh9AAhigGQh5gFhpAAQgxAAguAeQgXAOggAgQg2AugRBFQgOAjAAAjIADFpQAACfACDFIAAAWIgBAdIgBAqIAABtQAAAhALArIAFAQQAZA6AuAiQAvAiA5AAQAWAAAtgHIBggPQB0gWAaAAQB+AABMAnQASAHAJAJQAUAPAIAQQAKAXAAAtQAAA3gPAiQgOAggfAVQhJA3iRAAQhiAAhzhCQgpgdhCgmQg5gggVgKIgWAAQhqAQgpCJg");
	this.shape_170.setTransform(8.5933,1.0479,0.1277,0.1277);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#2F2C2D").s().p("AmhSvQiNgfhWgiQghgPgkgYQhIgwgghLQgWg1AAg5QAAhTAZiTQANhOAUhGQAghnBBgyQArggAzgGIAyAAIAFAAIAFAFIBDAkIB8BKQBmA8BRAAQB2AABAgsQAUgPAIgQQALgXAAgsQAAgagFgLQgEgHgIgGIgIgFQgFgDgDgDQgsgbiIAAQgmAAhdALQhuAWg9AAQhQAAg8goQg8gngehKIgIgWQgKgogEg6IAAgsQAAgrADgWIAAhdQAAjFgDifIgDlqQAAgkARgxQAbhSA3g3QAngnAggUQA9gnBAAAQAuAAC3AKQBjAGB3AAIDWgGQC3gKAvAAQAsAAAsATQArATAfAhQAkAgAVAyQAUAyAAA2QAAA0gRB0QgLBHAAAhQAAAugSAwQgZBEg4AzQhMBHhWAAQBdAtA/A7QABAAAAAAQAAABABAAQAAAAAAABQABABAAAAIADADQAZAYA6A/QBNBmAqCEQApCCAECWIAAAWQAAEPhdDCQhHCWhxBrQjzDZmPAAQiVAAi9gsgAqLF9QgzAngZBRQgSA4gMBRQgYCSAABOQAABwBoBKQAQALAmAWQBKAeCNAiQDcAsBtAAQFzAADmjOQBxhnA5iKQBai1AAkBIgCgWQAAiLgoh6Qgnh4hLheQgTgag3g+QiIhwi2gpQgcgKAEgXQACgNAIgHQAIgIAMAAIBMAGQAYAAAjADIAwACQBGAAA7g8QAwgnATg4QANgkAAgmQAAgJAEgcIAKhOQAQhrAAgyQAAgpgPgnQgPgngZgdQg3gxhHAAQiEAAhiAFIjWAGQh6AAhigGQh2gFhtAAQgxAAgvAeQgaAQgeAeQgaAYgTAgQgSAdgJAeQgKAkAAAhIAAFqIAFFkIAAAbIgBAZIgCApQgCAWAAArIAAAsQAAAVADAVIAHAnIAGALQAYA9AvAhQAvAgA8AAQAVAAAogHIBmgPIBggMQAhgEAKAAQCIAABEAhQAHACAJAIQAIAGAEAAQASAQAIARQAMAZAAApQAAA2gRAkQgOAeggAbQhJAyiOAAQhlAAhzhCQhOg0hog0IgOgGIgLAAQgxARgXARg");
	this.shape_171.setTransform(8.8869,1.3288,0.1277,0.1277);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#079248").s().p("AhrExIiNgoQhXgYg0AAQiYAThsA0QgDiUAAi5QAAgmAOglQBEAsAkATQA7AeA1AOQBfAkAdAEQBFALA0goQBJgpBUhcQAvg1BVhrQAIgQARgLQAmgGBlAAQBmgLB+AAQBUAAA9A9QhcAZg2AZQhMAkg0A4QgQAYgoA1QgpAzgSAcIgvBjQgdA8gcAbQg7BAhHAQQgYAGgbAAQgmAAgugLg");
	this.shape_172.setTransform(8.255,-10.4493,0.1277,0.1277);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#32ABDF").s().p("AsVFlQgVgwAAg2QAAhHAYiaQAThoAPglQAYhXA4guQAmgfAugGIAsAAIBDAkQBPArAsAeQBpBCBcAAQCBAABFgxQAagSAMgaQAPgfAAgtQAAgkgKgTQgEgIgOgOQgDAAgGgDIgNgIQAsgsAsgbQAygdAqgEQAnAAAqAOQAaAJA3AaIBtAhQBIAVAjAMQB+AuBFgNIAOAAIAAAVQAAEEhaC8QhDApgmAUQhgAzgxARQhUAghFgIQgzgFhOglQhYgpgmgJQi+gyjTARQhIAHhHAvQg3Amg6BDQg2A+gvBFQhBgrgdhEg");
	this.shape_173.setTransform(8.5901,8.7359,0.1277,0.1277);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00A79D").s().p("AIWDUQgjgMhIgVIhtghQg3gagagIQgrgPgmAAQgrAEgxAeQgsAagrAsQhDghh9AAQg3AAhSARQiDAWglAAQhDAAg3gnQg1gmgchCIgCgFIgDgLQgJgegFg5IAAgsQBdgsBxgmQB6gnBjgKQB1gMByAXICsArQBpAaBDANQBSATBYgnQBIggBPhKQBMBgAqB8QAqB9ABCTIgNAAQgQADgSAAQhAAAhhgkg");
	this.shape_174.setTransform(9.4646,1.5206,0.1277,0.1277);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#2377BA").s().p("AmnC2QiTgZhOgmQgNgGgugbQAuhFA3g+QA5hDA3glQBIgvBHgHQDUgRC+AxQAmAKBYApQBNAlAzAFQBFAIBUggQAygSBfgzQAngTBCgpQhCCUhxBiQjrDZmDAAQh4AAjSgyg");
	this.shape_175.setTransform(8.7497,13.6156,0.1277,0.1277);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#006739").s().p("AgvC2QgdgEhfgkQg0gPg8geQgjgThFgsQAKgiAVggQARgcAfgkQAbgeAhgWQA2gkA7AAQAcAAA+AEICKAHQA3AABKADIBcADIBKAAQgRALgHAQQhWBrgvA0QhVBchJAqQgpAggzAAQgNAAgPgDg");
	this.shape_176.setTransform(5.0732,-12.1217,0.1277,0.1277);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#34B475").s().p("AqnHpIAAhdQAAjFgDifIAAgbQBsg0CZgSQAzAABXAYICNAnQBPASA5gNQBGgPA7hBQAdgaAdg8IAuhjQASgcApg0QAog2AQgXQA0g4BMgkQA2gaBcgYQAfAgASAsQASAsAAAxQAAAxgRBxQgLBWAAASQAAAtgQAsQgVA8gzAwQhEA7hVABQhoAAhQgGQC6AoCRB3IAAAFQAvAoAhA2QhPBJhIAgQhYAnhSgSQhDgNhpgbIisgrQhygXh1AMQhjAKh6AoQhxAlhdAtQADgsAAgWg");
	this.shape_177.setTransform(8.6986,-6.6273,0.1277,0.1277);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AnJV4QhngZgygOQhHgWgvgWQg9gcgpgaQhmhLg3hmQg4hoAAh7QAAhoAcieQARhxAVg/QAlh7BRhVQgDABAAgMIgZg2QgThPAAhAIAAh9QAAgxADgQIAAgRQgDjFAAifIgDjEIgBhgIgChKQABg3AbhbQAjh4BhhjQCeieC4AAQAwgBDCALQAyAABGADIBXACQAmABAbgGICJAAQBigLCPABQBXgBBNAhQBRAiA+BAQBDBDAhBUQAjBVgBBiQAABAgQCEQgLA2AAARQAABCgTBFQgbBfg9BNIAXAZIAYAdQBiCAA1ChQA1CgAEC5IAAAWQAAE0huD1QhaC+iWCDQiSCIjEBFQjEBEjtAAQiQABjogxg");
	this.shape_178.setTransform(8.6603,1.2234,0.1277,0.1277);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D1D3D4").s().p("AnTV3QiNgch4gwQgsgTg5gqQhnhGg4hpQg5hrAAh5QAAhQAbi2QAOhKAYhgQAtiGBLhQQgCgFgDAAIgWg8QgLgxgKhYIAAg7QgBgaAGgoIAAhYQAAjFgFiZIAAlvQAAhSAVhCQAoh2BehiQCbifC0AAQCUAABjAFQBdAGB0AAIDOgGICCgHQBCgEAmAAQBWAABTAjQBQAjA/A+QBBBBAkBXQAjBVAABfQAABXgWBuQgFA2AAAWQAABCgUBCQgcBdg9BMQAQARAeAmQBjCEA2ChQA2ChADC0IAAAcQABEzh0D1QhaC7iRCBQkoESneAAQi1AAjQgyg");
	this.shape_179.setTransform(10.6517,3.1798,0.1277,0.1277);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFCFD").s().p("AmBDyQgPgaAJgrQAah6C/iWQB9hlCFgmQBrgcBeAMQBNALAaAeQAZAeg6AFQlqAdinC4QghAlhBBjQguBFglAQQgFADgEAAQgMAAgJgRg");
	this.shape_180.setTransform(10.1831,-7.5755,0.1277,0.1277);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#2F2C2D").s().p("AmPRzQifhZhuibQg/highhNQhwj6AAlQQAAhhALhoQAxlvDWkoQA4hLAagdQFfmYH/AAIAmAAQBEAMA0AvQA1AwAZBJIA2CtIADALIACAGQATA2AEAQQAFAXAAAbQAABXgwBJQg0BQhWAXQBkA7BWBZQA/BEAjA/QByDBAAEgQAAB7gRBrQgoEQisDHQjwEPmKAAQjuAAivhogAncsWQgtAtgiA2QjOEcgrFZQgPBhAABjQAAFHBrDtQArBfAzBFQBeCNCaBZQCqBhDWAAQC2AACVhBQCVg/BviAQCbisAukPQAUhjAAh4QAAkJhwi3QgthJgwgvQhyiCiXgzQgYgJAFgYQAAgIAHgHQAIgHAMAAIAmAAQBdAAA6hGQA0hAAAhVQAAgXgDgOQgEgVgPguIgFgLQgGgVgSg0QgUg9gMgnQgUg9gnglQgogkg2gIIgbAAQnkAAlOGIgAhqHvIgWgbQg4hkABiNQAAhSAegbQA3gyCDAAQAyAAAjASQAcAOAVAdQAxAxAABiQAAA/gKA1QgNBCgaAlQg0A9hrAAQg8AAg2g9gAhLCNQgfAJgFALQgIAIgFAVQgEATAAASQAAB+AyBSQADAHAGAGIAKAJQAfAmAkAAQBGAAAtggQAhgyAAiJQAAhMghghQgOgTgSgIQgXgLgjAAQhCAAgqAMg");
	this.shape_181.setTransform(10.5622,1.0479,0.1277,0.1277);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#2F2C2D").s().p("AmOR5QiehYhxiiQhChvgbg7Qhzj/AAlLQAAhcAQhzQAVi0BBimQBBinBriPQAdgqA1g+QCyjODZhpQDXhnD8AAQAbAAALAFQBFAIA0AvQA0AuAYBKQAgBfAXBOIAGALIAAAGQASAwAEAWQAFAVAAAdQAABagwBJQgzBOhYAbQBkAwBXBfQA8BFAmA+QB0DNAAEUQAABrgTB7QgWCNgzB3Qg3B5hTBaQjqEPmSAAQjlAAi1higAhow8QjOBkinDCQg5BFgUAdQjJESgzFpQgLBdAABnQABFBBqDuQAeBJA8BbQBtCXCPBPQClBhDXAAQFtAADij6QCki+Amj+QAUheAAiCQAAkMhxi0QgzhSgpgmQhrh8icg0QgVgPgBgRQACgNAIgHQAHgIAKAAIAnAAQBgAAA5hEQA0g+AAhZQAAgUgDgRQgEgRgRgyIgGgLQgGgbgQgwIgghiQgWg6gngmQgogmgygIIgeAAQjvAAjOBigAhpH1IgVghQg6hbAAiQQAAgyALgeQAIgaAOgJQAsgsCOAAQBXAAArA3QAyAxAABiQAACeguBDQg3A3hoAAQg/AAg0g3gAhKCNQgeAJgJALQgNAOAAA6QAAB+AxBMQAEAHAFAGIAKAJQAgAmAkAAQBTAAAdghQAQgYAKgwQAKgxgBhBQAAhMggghQgYgUgJgFQgYgNghAAQhEAAgpAMg");
	this.shape_182.setTransform(10.8558,1.3288,0.1277,0.1277);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D6DE3B").s().p("ApgEFQAyhpBChJQAZgcAwg4QAogwAhgZQBZhDBrAcQBFAXBZAxICTBQQBKAVBHg/QApgkBFhVIBkh0QA6hEAog0QgsERiiC6Qh0CBiZBBQicBEi7gBQjhAAithjg");
	this.shape_183.setTransform(13.4281,11.972,0.1277,0.1277);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F8EB48").s().p("Aq8GgQg6hRgmhUQBUiUB3g8QBHgoB/AFQBIACCFALIA0AAQAUAaAaALQATAHAZAAQBgAAAogsQApg4AAiRIANgOIAMgNQB8iWAtg6QBhh7ARgSQBRhWBKgOQAegGA5ALQB2C5AAEYQAABxgVBvQgoAzg6BFIhkBzQhFBVgpAkQhIBAhJgUIiUhRQhagyhEgXQhqgchZBDQghAagoAvQgwA5gaAcQhCBJgxBqQighghkiUg");
	this.shape_184.setTransform(11.2867,6.891,0.1277,0.1277);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FAAF4C").s().p("AsYDWQAAhoARhjQBTgiBLgZQA+gZBCAPQAQADBsAoIB8BEQBQAmAygOQB4gkB8igQBWhuBRikQA7hyBlhoQBRhTB+hdQAQAwAFAWQAEAUAAAZQAABig7BGQhBBOhtAAIgmAAQCaAwB9CKQAhAjARAYQAaAiAQAhQg4gLgfAGQhJAOhRBWQgSAShgB6QgtA6h8CWIgNANIgMAOQAAhbgpgoQgTgWgVgLQgfgRgpAAQhsAAg7AnQgHAHgGARQgIAaAAArQAACDA2BdQADAGAQAVIg0AAQiEgLhIgCQh/gFhHAoQh3A8hUCUQhtj9gBlBg");
	this.shape_185.setTransform(9.8346,0.0331,0.1277,0.1277);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F59331").s().p("Ai6JFIh8hFQhsgogRgDQhCgPg9AZQhMAZhTAjQAplVDTkwQA4AGByAbQByAbA9AGQBMAAAxgTQAwgTA2gyQA6g2B0hnQBihbAzhZQAig2AbhZQA7ANAtArQAuArAZBCIAgBkQAPAtAHAcQAAAEACADQAAABABABQAAABABAAQAAAAABABQAAAAABAAQh/BdhQBTQhlBng7ByQhSCkhWBuQh7Chh5AkQgNAEgQAAQgqAAg6gcg");
	this.shape_186.setTransform(9.1389,-6.7086,0.1277,0.1277);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EF5B33").s().p("AkzD7Qhygbg4gGIAogxQAYgdASgUQCtjHDRhmQDUhmD2AAIAhAAQgaBZgjA2QgyBZhiBaQh1Bng6A2Qg1AygwATQgyAThMAAQg9gGhxgbg");
	this.shape_187.setTransform(9.2474,-10.8559,0.1277,0.1277);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AnzUlQjHhriNjGQhIh0grhbQiAkiAAl6QAAiBANhkQApk2CUkOIgOgGIARgGQA1hXA2hNQARgZAcgiIAwg7QDPjuEBh6QD/h5ErAAQAxAAAWAEQB8AVBeBTQBfBSAqB/IADAKQAZBIAfBjIAAADQAVBCAGAlQAIArAAAzQAACMhCBwQAKAKAGAMQA6A8A9BiQCZEJAAFAQAABxgZCbQg+FTjEDqQiUCljJBXQjKBYjtgBQkbAAjkiDg");
	this.shape_188.setTransform(10.6484,1.2234,0.1277,0.1277);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D1D3D4").s().p("AnyUrQjJhziIjFQg8hSg2h3QiEkeAAmDQAAhjARiCQAqlFCQj/IgLgGIANAAQAfg9BMhtQAggsA9hGQGjnmJXAAQAZAAAsALQB9ARBgBTQBWBSAsB9IACALQAwCPAHAeIADAAQAXBGAIAhQAKAtAAAxQAAB9hHCEIAQARQBAA/A7BlQCXD0AAFVQAACXgWB1QgdClhDCQQhECQhmByQiMCojJBWQjHBWjzAAQkmAAjXh+gAgPE4QADAGAHAEIALAGQABgEADgBIAGAAIgQgWQgJALgGAAgAAhEtQAFAAAAgFIgFAAQgFAAgGgFg");
	this.shape_189.setTransform(12.6206,3.1798,0.1277,0.1277);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFCFD").s().p("Al5CnQgBAAACgTQAOiLAMgsQAThBAwgbQAvgbBvgIQBKgFDkAAQDwAAgvAiQgRANgxAMQgvALgjABQlbAMisCbQgpAmgeAvQgIAMgBAAIAAgBg");
	this.shape_190.setTransform(7.4325,-9.7863,0.1277,0.1277);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#2F2C2D").s().p("AlMTUQgugGgigOQgggHglglQgjgegVgrQgdg7AAhKQAAirBFjqQAchxBBixQAPgqAhhRIA4iMQBAiZBvj7QADAAADgLQgJAAgNADQgNACgGAAIgcAAQg5AIinAPQg/AFhuAAQhwAAhGhUQhAhMAAhnQAAh/ALiIQAFgeALg3QAbh8BAhDQBAhDBcAAQB4AADmARQBBALBjAAQCWAGHRAAQBEAAA6AmQA6AoAgBFQANAQAEARQAQAnAGAyQAFAqAABFIAABjQgGAygaAyQgTAkgyBIQhvCthLDCQhGCkgzC0QgSA5gXBSIgmCHIggCIQgSBNgKA3QgYBvgJBsQgIBCgZA8QgZA0grAmQgsAng3ARQhBAWihgBQhlABg5gIgAhMnTQAOAAALALQAMAJgJASQAAAGgDAFQgDAGAAAFIgQAhIhcDOQgyB0ghBSIg4CMQggBPgQAsQgvB4guCkQhCDnAACeQAABoBCA7QAZAZAbAHQAbAOArAGQA0AHBeAAQCcAAA2gVQArgMAjggQAjgeASgsQAKgUAGgaQAEgVAFgmQAIhFAeibQAYh/AkiTQAZhjA0ivQBAjRA7iMQBejnBkiTQAuhEARggQAVgqAEgnQADgVAAhIQAAhugZhEQgGgXgFgFQgdg2grgdQgsgggzAAQnRABiWgGIhmgGQgxgBgSgDQjmgRhzAAQiRAAgvDQQgGAZgFA8QgLBjAACZQAABQAwA7QA1BABVAAQBoAABCgGQChgOA9gHIAeAAQA5gBAcgFg");
	this.shape_191.setTransform(10.3312,1.0128,0.1277,0.1277);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#2F2C2D").s().p("AlNTUQgrgEglgLQgegNgpgfQhShRAAiCQAAieBCj3QAbhiBCjAQAZg7BPjMQAihQA0h2IBcjOQADAAAAgFIgnAAIgbAFQh/AIhiAIQhBAGhrAAQhzAAhEhRQg/hKAAhnQAAiNALh5QADgqAKgxQAeh8BAhCQBAhEBbAAQCQAADMAXIBDACQA4ADApAAQEyALE4AAQBBAAA6AmQA6AmAjBCQANAQAEARQAbBNAAB7QAAAtgDA2QgDAzgbAzQgMAWg4BUQhhCQhZDfQhFClg0CzQgeBdgxC6QgaBbgiCsQgXBwgNBqQgDAmgJAgQgFAWgNAiQgYA3gsAmQgqAlg5AQQhBAXikAAQhhAAg7gIgAhJnTQAEAAAHADQAHAEAEAEQAIAQgFALQgCAJgGANQgMAWgCALQhxD9hBCXIhoEHQgkBkg5C5QhCDlAACfQAAA7AXAxQAQAhAbAbIA3AgQBCAXCTAAQCfAAA1gXQBcgaAohWQARgsAFhCIARhqQALhFAKgxQALg9AxjPQAyi6AehdQAqiWBRjIQBTjNBtitQAvhFARgfQAVgqACgmQAGgWgBhIQABhzgZg/QgCgGgEgIIgIgNQgbg1gsggQgsgegxAAQnSgBiYgFQhMgGheABQjIgXiOAAQhRABg1BFQgnA1gSBWQgFAZgJA9QgKBigBCeQABBQAvA4QA1A9BYAAQBoABA/gGQAmAABCgGIB5gKIAbgGQA8ABAbgGg");
	this.shape_192.setTransform(10.6471,1.2936,0.1277,0.1277);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#2377BA").s().p("AjeDwQgtgGgggOQgWgGgmgfQAFhXAUg2QAdhuB0hHQBWgzCRgjQA+gOBZgGQA0gCBiAAQADAAAGADIAIADQgWBjgOB9QgJBJgVAoQgVAwgmAhQgpAlgwAMQgdAKgqAFQg4AHhbAAQhfAAg3gIg");
	this.shape_193.setTransform(9.0227,13.3698,0.1277,0.1277);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#32ABDF").s().p("AmqC7QAAiYBBj3QCHhrCEgkQChgtBhBaQAuAsAVAKQAlATAsgSQA0gNA/g1QgsC6gRBSIgIgCQgFgDgDAAQhjAAg0ACQhYAFg+AOQiRAkhWAyQh0BHgdBvQgVA1gEBXQhKhCAAh2g");
	this.shape_194.setTransform(8.9365,10.9603,0.1277,0.1277);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00A79D").s().p("AmQBSQAQgqAghQIA4iMIBBAaQAjAPAVADQBSAWA9gEQBDgEBEgkQCihGDBhuQALgLAZgRQhQDKgoCPQg3CxgZBlQg/A1g0ANQgrASgmgTQgUgKgvgsQhghaiiAtQiEAkiGBsQAYhgBFi9g");
	this.shape_195.setTransform(10.628,3.5627,0.1277,0.1277);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#34B475").s().p("AlbIkQgUgDgkgPIhAgaQA7iRB0kEQADgMAIgRIALgZQhMALgnAAQgyAGhFAEIhpAGQA/ilBfglQAzgUBdAkQAzATBUAlQBpAiBOALQBpAOBOgVQBCgYA8hHQAjgoA6hUQAkhCAthiIBLijQALAWADALQAbBGAAB4QAABHgFAWQgEAtgYAvQgQAegxBLQhsCrhRDIQgZARgLALQjBBuiiBGQhDAkhEAEIgSABQg3AAhHgTg");
	this.shape_196.setTransform(12.814,-5.1817,0.1277,0.1277);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#006739").s().p("AhND5QhSgxgkgTQgUgLg9gyQg7gxglgVQACggALg1QAWhrAyg8QA6hEBZAAQCBAADXAWIBFADQA5ACAsAAQgdA0hcCiQhAB+gVAjQg/Bng8AcQgSAIgWAAQgjAAgvgWg");
	this.shape_197.setTransform(5.0047,-11.0486,0.1277,0.1277);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#079248").s().p("ArXE+Qg3hBAAhcQAAiUALhtQAmAVA7AxQA9AxAUAMQAkATBSAwQBKAkAxgVQA8gdA+hmQAWgjBAh/QBciiAcgzQCIAFHfAAQA6AAA0AlQAyAjAgA7IhLCjQgtBhgkBCQg7BUgiAoQg8BHhCAYQhOAWhqgPQhPgLhogiQhUglgzgTQhdgkgyAUQhgAlg/CmQhCAFhoAAQhlAAg8hIg");
	this.shape_198.setTransform(10.0886,-9.1773,0.1277,0.1277);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AlvWfQhHgKg3gYQhCgYg+g1QhLhGgnhdQgnhcAAhuQgBjEBNkCQAQhAAchVIA2ieQAchMBNjEQAhhDANglQg0AFhYAAQi8AAiDiIQh/iHAAjCQgBi1ALhoIARhrQAtjJB1huQB2hvCnAAQCbAADTAWIA/ADQAzADAoAAQBGAECbABIGAAAQB+AABrBGQBsBGA+B7QAQAhAFAWQAXA9AKA9QALBDAABSQAAAfgFBUQgIBVgoBRQgaA0g/BZQhQB4hUDLQhACigwClQgTA6gWBOIgkCFQgQA5gPBJIgaB/QgZB0gJBWQgLBlggBOQgtBhhPBFQhNBEhhAdQhnAhi4AAQh3AAhGgKg");
	this.shape_199.setTransform(10.4492,1.1883,0.1277,0.1277);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D1D3D4").s().p("AlpWiQhGgKg5gYQg0gThPhAQhIhBgnhfQgoheAAhrQAAi8BKkOQAwijA1iPQBKi9AhhOIAVg0QANggAKgUIiJAAQi/AAiDiGQiEiFAAjBQAAidANiAQAFhGAMgnQArjHB4hxQB3hxCnAAQA2AABkAGIDUAPQAfAGB9AFIDeADQDIADC5AAQCAAABpBDQBqBEA7B6QALARAQAmQAmBqAACmQAABSgCAhQgIBUgoBRQgWAxg+BcQhbCHhMDCQhACYgxCqQg5DHgTBKQgsCvgOBNIgjDOQgIBhgkBOQguBkhLBFQhNBHhiAdQg0AQhDAIQhHAIhjAAQhzAAhGgJg");
	this.shape_200.setTransform(12.38,3.1798,0.1277,0.1277);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFCFD").s().p("AE3DgQgfgOgog9Qg5hWgeghQiRihk9gaQgzgEAWgZQAWgZBEgKQBSgMBeAbQB0AfBtBYQCnCEAXBqQAIAmgNAWQgIAPgLAAQgEAAgEgCg");
	this.shape_201.setTransform(12.2888,-8.4747,0.1277,0.1277);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#2F2C2D").s().p("AjETLQjkgqiQh+QhYhHhFh4Qh5jPAAkIQAAgsALhXQAjjFBmiOQAAgCgCgEQgDgEAAgGQgGgLgLghQhBiVAAi0QAAgKADgaQACgaAAgOQANifBDiHQBBiCBvhkIAFgEQA5gwBQgpQCvhXDlAAQCOAACEArQAtAPAuAaQAgARA4AjIBHA3QDdCyAqEeQALBXAAAbQAACxhNCzQgLAbghA3QAxA4AnBhQA8CbAACoQAAEcikDWQhBBLgnAiQjkDDlOAAQhyAAhjgQgAlixMQhIAgg2AtIgGAFQhsBZg4B6Qg/B8gMCWIAABHQAACdA8CbQAEANAMAaQAJAWAAALQAIAQgIAQQhoB5gkDEQAAAXgCAqQgDArAAASQAAD9BtC5QAcA2AiAuQAoAwAsAgQCTB4DGAgQBBALAiAEQA4AHAvAAQCaAACIgwQCDgtBshbQAegfA/hKQBJhdAmh2QAlh0AAiEQAAiwg3h9QgZhGg/hTQgOgOAJgTIAFgKQAhg3ALghQBHiqAAifQAAgPgCgiQgDgjAAgUQgViBg9htQg+hxhhhPQgpgfgegSQhFgyhdgmQh0gmiOAAQjTAAilBSgAhRIlQgjgMgZgZIgFgBIgGgFQgWgdAAg6IAAgsQAJghANgbQAEgJALgDQALgDAMAEICkBBQAAAGALAAQAFADAIAIQAJAIAFADQA3ApAAAZQAAAXgEARQgDAPgEAFQAAAFgGAGQgKAKgZAIQgiAJgzAAQg0AAgjgMgAhyGCQgFALAAAWQAAAZAGAOQAFAKAFAAIAGAGQAlAbBCAAQA3AAAVgLIAAgWQgKgLgRgLQgDgGgIgEIgLgGQhkgtgpgQQgGAGAAALgAB3loIgEgDQhcgjgxgfIgFAAQgxgggXgWQgEgEgBgFIAAgNQAAgLALgLQApgcBZAAQAhAAAdANQAVAKAQAQQAWASAHATQAEALAAARQAAAagCANQgCAUgHASQgJAQgTAAQgDAAgEgCgAgEnjIAEAFIAgAQQAfAQApARQAEgEABgFIABgNQAAgFgCgEQgEgFgLgIQgWgVgmAAIg2AAQALALAGAAg");
	this.shape_202.setTransform(9.0895,1.0479,0.1277,0.1277);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#2F2C2D").s().p("AjETLQjjgsiRh2QhehTg/hyQg7hlgeh0Qggh4AAiBQAAgxALhYQAkjMBriBIgGgIQgCgFgDgDIgIgWIgJgbQgdhKgPhUQgQhTAAhSIAAhNQAMiiBEiIQA8iDB0hkIAFAAQBCg4BHgfQCqhdDqAAQCVAACCAxQBlAlBJAyQAbAWAxAhQBsBcBCB1QBDB6AQCKIAIA8QADAeAAAZQAACthMCxQgGAOgNAbQgOAcgGANQAtA8AmBdQA8CIAAC7QAAEZifDZQgpA3g/A2QjkDDlTAAQhqAAhrgQgAljxMQhKAhgzAtIgGAEQhqBag5B8Qg6B+gNCXQgFAWAAAxQAACXA6CbQAFARAKAWQAJAWAFAQQAAAQgFALQhqB+gaC/QgKBcAAAnQAAD1BtDBQBLB8BHAzQCUB4DFAgQBBALAiAEQA4AHAvAAQCaAACIgwQCDgwBshZQA/g+AegqQCUi9AAkOQAAiwg3h+Qgohigwg2QgFgLgBgFQgBgJAHgIIAAgLQAYgeAUg0QBHiWAAiyQAAhHgFgnQgViAg9hsQg9hthihQIgigbQgVgRgQgKQhLg7hYgXQhtgsiUAAQjUAAilBSgAiNIAQgGAAAAgGQgMgMgHgXQgIgYAAgcIAAgnQALgrALgWQARgSAVAHIBVAhQAvAUAgASQAFAAAFAFQAWALAGAGQAXANAPASQARAVAAATQAAAmgLAWQAAAGgGAAQgKAKgZAIQgiAJgzAAQhiAAgxgxgAhvF6QgDAFAAADIAAAhQAAAxALAAIAFAFIABAGQAdAWBKAAQBBAAALgLQAGgLAAgLQgDAAgHgHQgLgJgMgGQgLgLgLgFIhIgeQgsgSgZgNQAAADgDAGgAB5lmIgGgFIhXgiQgigPgPgLQgDAAgEgDIgEgDQg0gjgNgUQgIgEgCgFQgBgDAAgJQAAgLALgLQAhgWBhAAQAlAAAbAKQAUAHAUAQQATAVAFASQAEAKAAAQQAAAcgCANQgCAVgHAPQgIAQgUAAIgFAAgAgVnpQADADAGACIAIAGIAEAAIAhAQQAgAQAtARIAAgWQAAgLgLgLQgWgWgsAAQglAAgRAGg");
	this.shape_203.setTransform(9.3703,1.3288,0.1277,0.1277);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EE6B95").s().p("AqGFTQgWgsgLgcQhBibAAinIACgjQADgZAAgLQAggVArgWIBNgnQBDgZBiAHQB+AKAagDQA6gHBSgcQAugRBcgjQCEglB+huQBQhIB+iYIAjAaQAWAQAOANQDRCvArEQQgnBNggA0QgrBDgtAxQgrAuhRBLQhfBYgfAgQgwA4gbAcQgxAygjAOQhJAjiBgdIhngZQg7gOgoAAQhwAJh+ApQiAAqhYA9QgZASg0AeQg7AigbARQAijJByiKgAgchvIgnANIAWAXQATARAYAOQAKAHAkAPIBgAmQALgrAAgRQAAgLgDgHQgFgLgOgOQgSgOgNgHQgXgMgcAAQgqAAghAJg");
	this.shape_204.setTransform(8.9171,-4.1476,0.1277,0.1277);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#9D2362").s().p("AmpC0QBZixCFhgQCYhwDIAEQA8AABTAsQBkA0AiAIQgvBDgzAqQhwBdiIAwQiJAxigAAQh5AAhXgWg");
	this.shape_205.setTransform(12.0862,13.9976,0.1277,0.1277);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D7225D").s().p("ApiF4QhehZg5hhQAqhEAog1QBIhUBYhNQBXhLBbg6QBOgvBBgIQgGALAAAbQAAAeAHASQAFANAJAKQAtAsBXAAQAwAAAdgLQAPgFAFgGQAFAAADgMQAEgOgBgXQAAgIgrgkQCzAkCOgeQBtgkBlhTQBchNBBhkQA8CSAACmQAACIgpB4QgoB5hOBiQgigIhkg0QhTgsg8AAQjJgEiXBwQiFBhhZCxQjRggiZh9g");
	this.shape_206.setTransform(9.8267,9.4923,0.1277,0.1277);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EB307C").s().p("AsfEHQAAhYAFgmQAbgRA7giQA0geAZgSQBYg8CAgqQB+gpBwgJQAoAAA7AOIBnAZQCBAdBJgjQAjgOAxgyQAbgcAwg4QAfggBfhYQBRhLArguQAtgxArhEQAgg0AnhNQAFAhAABMQAAC2hHCeQgKAXgPAcIgYAvQA+BQAfBVQhBBjhcBMQhkBUhuAjQiOAfizgkQgFgGgWgLQhygxg3gWQgQAZAAAYQhBAIhOAvQhbA6hXBMQhYBMhHBWQgoA0grBEQhti3AAkPg");
	this.shape_207.setTransform(8.9171,2.7585,0.1277,0.1277);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F4A5BA").s().p("AoPAeQA7h/BxhaIBCgwQAlgZAdgOQAzAKA8AVQAkAMBIAcIB1AnQBNAWAugHQAvgGA+g8QAhghA3g7IABgGIAEgFQAoAOAvAaIBRAvQh+CYhQBIQh9BtiFAlQhcAjgvARQhQAcg7AHQgaADh+gKQhigHhDAZIhMAnQgsAWggAVQANigBBiBg");
	this.shape_208.setTransform(7.2034,-9.8411,0.1277,0.1277);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F8C2CE").s().p("AAGBbIh1goQhJgcgjgMQg8gTgzgLQC4hYDRAAQCIAACEAsIgFAGIAAAFQg3A6giAhQg9A8gwAHQgLACgNAAQgoAAg6gRg");
	this.shape_209.setTransform(8.5725,-13.1046,0.1277,0.1277);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AjqWTQkRgyi5ieQh2hfhgibQiOj8AAk9QAAg3ABgbQACguAIgkQAYiuBViaQg8i8AAizQAAg8AGghQAMjCBNikQBOikCLh6IAeghQBchCBPgrQDihtEPAAQCvAACqA7QB4AsBnBHQBIAyAVAQQCIB0BTCTQBVCXAYCwQALBtAAAmQAADnhYC+QAbAtARArQBHCsAADjQAACxg0CgQg0CfhiCAQg6BHhKBAQkcD8megBQiNABhugWg");
	this.shape_210.setTransform(9.1597,1.2234,0.1277,0.1277);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D1D3D4").s().p("AjnWTQkfg1izibQg9gxgyhAQg2hAgphGQiUjzAAlJQAAg3ALhuQAkjHBPiAQhCitAAi8QAAgRADghQACghABgQQAQjBBNiiQBOiiCAh5IAAgGIAmgbQBMg8BkgyQDehzETAAQCwAAChA9QBpAiB9BQQAyAiAmAmQCJBrBVCZQBSCVAYC0QAHAlACAnQACAYAAAwQAADghXDAIAYAuQANAZAHAVQBMC8AADTQAACug1CfQg1ChhmCAQhFBYg+AxQiLB7izA+QiuA+jPAAQiIAAhtgWg");
	this.shape_211.setTransform(11.1543,3.1798,0.1277,0.1277);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFCFD").s().p("AFhEAQglgQgnhFQhBhjghgkQioi4lqgfQg7gEAZgeQAageBNgJQBegOBrAcQCFAmCABlQC4CXAaB5QAJArgPAZQgJARgNAAQgEAAgFgCg");
	this.shape_212.setTransform(12.2676,-7.6887,0.1277,0.1277);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#2F2C2D").s().p("AlTTbQhOAAg+gvQg+gvgfhUIgYhSIgUhCIgQg3IgUg/QgIgaAAgUQAAhbAwhHQA0hNBVgYQhYgxhQhYIgIgFQgGgDgDgDQibijg1kMQgLhuAAhCQAAjoBCi9QBFiuBlhyQB1iECihEQChhEDBAAQBLAAAnAFQCXAQCCBFQB6BEBjBzQAjAkAZAnQC4ECAYF5QAAASADArQADAqAAAXQAAB6gcCRQghDEhSCuQhUCziBCSQgWAWgGALIgNALQiaCqjBBcQi7BcjYAQgAomJcQgxA+AABXQAAASAFARIARA0IAQA8IASA/IAYBQQAZBGAvAlQAvAnA9AAQAJAAAPgDIAUgDIAWAAQGXgYE1lEIARgRQAEgCAHgJQAHgIAFgDQD6kwBBlxQAVhvAAiRQAAhSgFgnQgYlkioj7IgegmQgQgUgOgMQhchthwg9Qh5hAiQgMQghgFhGAAQi3AAiUA+QiXBAhrB9QhXBjhICiQhCC2AADfQAABYARBSQAqDoCVCnIALALQBwByCPAyQARAIAAAZQAAAIgIAHQgIAHgLAAIgnAAQhgAAg3BGgAh0hWQgZgNgWgXQgGgIgIgRIgOgZQgWg2AAgxQAAhBALg1QAOhEAeghQAng3ByAAQAmAAAcAPQAkAUAiA0QA8BnAAB/IAAAhQgGBDggAVQg6Ash6AAQgyAAgngTgAhynIQgRAVgKAvQgLAxAABAQAAAwAQAiQAKAVAGAGQAOATATAIQAXALAlAAQA/AAAqgLQAdgIAIgIQAIgIAEgPQAEgNAAgNIAAgcQAAh4gxhSQgWgmgYgNQgQgJgZAAQhWAAgXAmg");
	this.shape_213.setTransform(9.9126,1.0351,0.1277,0.1277);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#2F2C2D").s().p("AlNTbQhTABg+gwQg+gvgdhUQgoh3gHgXIgQg9QgOgugDgPQgFgVAAgbQAAhYAuhIQAxhPBZgYQhYgshVhYQgDgFgFgFQgDgDAAgDQinivgpj7QgRhaAAhaQAAjwBIi2QA5ikBwh2QDvkTGKAAQAPAAAlADQAlADAUAAQEvAgDMDtQAJANATAXQATAYAIAOQBaB/A1CiQA1ChAMC5QAAATADAqQADAqAAAXQAACWgWB1QhBGGkNE3IgsAsQk/FUmtAYgApSukQhjBqg8CiQhBCzAADdQAAA8ALBuQAnDlCYCpIARALQBlBvCUA1QAJAEAGAKQAGALgEAIQAAAIgHAHQgHAHgIAAQgRAGgVgBQhkABg3BEQguA6AABXQAAAXACANQADARALAjIAPBBQAaBPAXA6QAZBEAvAnQAvAmA+AAQAbABARgGIAQAAQDPgMC0hUQC4hXCVifIAhgsQD7kkBCl9QAWhuAAiTIAAh5Qghlqikj1QgLgMgTgXQgTgagLgKQitjTkjgiQgmgFhBAAQl0AAjZD6gAhxhWQgVgLgYgZQgLgLgWghQgQgwAAg9QAAikAxg4QAVgZAngOQApgPA0AAQAmAAAcAPQAkAUAiA1QA8BnAAB+IAAAhQgGA9gbAbQgWARgmALQg1AQhIAAQgyAAgkgTgAhynIQgRAWgLAuQgLAxAABAQAAAxARAhQAEALAFAHIANAOQASATANAHQAYANAgAAQA+AAArgPQAbgJAKgJQAIgIAEgPQAEgNAAgNIADgMQADgKAAgGQAAhmg3hkQgXghgXgNQgRgJgYAAQhUAAgZAhg");
	this.shape_214.setTransform(10.1934,1.3128,0.1277,0.1277);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EF5B33").s().p("AlPCQQArg2AWgUQAngnArgWQAtgQBOgoQBTgrAigPQA/gZBkgQQB5gUAhgKQk6FJmnAYg");
	this.shape_215.setTransform(11.1285,14.2283,0.1277,0.1277);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F59331").s().p("Ao8H1Qg2gsgZhMIgghmQgQgzgKgVQAAgGgCgIQgDgJAAgFQBrhOCOgqQBvgUBDAAQBcABBWAeQBNAgA2gkQAbgSBHhXQA6hEBDhiQAmg3BMh2QA0hEBegoQBKggBtgTQAGAAAKgDIALgCQhBGBkCEqIglAsQghAJh5AUQhkARg/AYQgiAQhTAqQhPAogsARQgrAXgnAmQgWAUgsA2IggAhQgLAAgWADQgWACgLAAQhGAAg2gqg");
	this.shape_216.setTransform(11.3104,9.6168,0.1277,0.1277);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FAAF4C").s().p("ArbHyQgFgTAAgWQAAhiA5hGQA+hOBtAAIAmAAQiMgvh5h7QA3hRA5g1QBHg/BTgaQBsgnBcgNQBmgOBiAQQA7AOB4ApQB7AqA1ANQA2AHApgpQAagWAvhBQBGg7BEhOQAqgxBThtQALgLAAgGQAFAnAABXQAACSgWB1IgLADQgKADgGAAQhtAShKAgQheAog0BEQhMB1gmA4QhDBig6BEQhHBYgbASQg2AkhNghQhWgehcAAQhDAAhvATQiOAqhrBPIgRg6g");
	this.shape_217.setTransform(11.3104,4.8074,0.1277,0.1277);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#F8EB48").s().p("AqBJ0QhMhQgzhqQgwhogWh4IAhgRQBAgWB7gzQBtgpBbgBQA7gDBFAMQApAIBTAWQADAJAIAMQAJANABAEQAYAXASAKQAeAQArAAQBFABAxgSQAJgCAlgTQAJgLAEgKQAJgTAAgfQAVgNAbgXIAtgjQA3gwAsh8QA9irAJgSIBIicQAxheAqhBQANANASAVIAeAoQBXB9AyCcQA0CfAICyQgBAGgKALQhUBtgpAwQhEBPhGA7QgvBAgbAXQgoApg2gIQg1gMh7gqQh5gpg7gOQhigQhlAOQhcAMhsAnQhTAbhHA/Qg5A1g3BSg");
	this.shape_218.setTransform(9.9477,-2.8998,0.1277,0.1277);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D6DE3B").s().p("ArNF+QAAjXBHjDQBWgJBDAPICMAkQBcAXA+gQQA+gHBDg8QAtgoA3hJQBKhqAshRQA2hnAehsQEzAiCzDaQgqBBgxBeIhICcQgJARg9CsQgsB8g3AxIgtAjQgcAWgUAOIAAgcQAAhCgNg0QgNgzgdgyQgagsgfgQQgVgLggAAQhgAAgiArQgsA0AACYQAAA8ARAgQhTgWgpgHQhGgNg6AEQhcAAhtApQh7A0g/AWIghAQQgQhSAAhdg");
	this.shape_219.setTransform(8.202,-7.2337,0.1277,0.1277);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#8EC549").s().p("AiSEcIiLglQhEgPhVAKQAuiWBwh+QDtkHF1AAQArAABCALQgeBrg2BnQgsBQhKBqQg4BJgsAoQhEA9g+AHQgYAHgfAAQgrAAg3gOg");
	this.shape_220.setTransform(5.5563,-10.6854,0.1277,0.1277);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AlTWoQiMAAhvhRQhyhSgxiKIgLgWQgJgYgRg4QgOgtgJgVIgQg8QgSgygHgeQgIgmAAguQAAiOBHh0IgQgQQhnhvhBiGQhBiGgZiXQgLgwgDg7QgCglAAhLQAAkXBNjWQBbjZB1iDQCti+DqhVQDvhWEUAgQDAAVCeBVQCgBUB7CQQAqAqAjAzQDPElAiG8QAFAsAABdQAAC3gbB7QhKG+kwFhIgxAxQl5GOn7Ahg");
	this.shape_221.setTransform(9.9828,1.2208,0.1277,0.1277);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#D1D3D4").s().p("AlQWoQiQAAhwhPQhwhQgziPIgLgVQgIgegQgyQgPgugFgWIgWg1IgUhVQgHgpAAgsQAAiOBBhzQgFgFgLgGQjLjtg2kqQgRhrAAhwQAAkJBSjfQBSjYB+iEQCojCDrhWQDvhXEYAhQF2ApEEElQAtAzAaAoQDWE6AgGvQAAAVADAsQADAsAAAWQAACMgbCmQglDchhDMQhgDJiUCsIgxAxQlxGPoJAigAgNk4QgOAHgIAPIAJADQAHACAGAAQAVgLAQgLIgNgIIgNgIg");
	this.shape_222.setTransform(11.9742,3.1793,0.1277,0.1277);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFCFD").s().p("AFmEAQglgQgthFQhChjghglQipi4lrgdQg6gEAZgeQAZgeBOgMQBegMBrAcQCGAmB/BmQC+CVAaB6QAJAqgOAaQgKARgMAAQgEAAgEgCg");
	this.shape_223.setTransform(12.0615,-9.1493,0.1276,0.1276);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#2F2C2D").s().p("AlZSZQjjhfiyjsQh7irhFjPQhHjVAAkAQAAhNAFghQAZmiDpk8QAggwAhggQEVk9GYAAQBqAACAAbQEIBJDJDpIALAJIAUAaIAVAYQD6FcAIHOIAAAQIADAJQACAHAAAHQAAB6gbCcQg7FHixDyQgGADgGAHIgJAMIgKAQQh6CcibBaQiaBXi1AVQgmAFhGAAQi1AAikhCgAqBt5Ig8BNQhwCVg/CxQhBC1gMDHIAABpQAADsBCDTQBDDKB3CgQCWDUDkBpQCcA/CnAAQAfAABCgLQFRgfDzksIALgRQALgKAGgLQBThzA5iJQA5iIAZiVQAbibAAh1IAAgXIgFgQQgEjeg+jDQg+jDh0igQgHgNgMgNIgUgXIgLgLQiwjWkGhEQhZgbiAAAQl6AAkHEkgAgiHRIgmgIQhfgjg0hbQheiMAAjAQAAgOADgcQADgbAAgOQARiWBBhgQAuhDA0ggQA2ggBJAAQBKgBA2AfQA4AgAsBFIADAEQADAEAAADQBSCEAAC6IAAAqIgFALQgICWhQB7QhdCPiCAAQgOAAgUgDgAhkl7QgrAXghA1QhABvgHBxQgFAXAAA3QAACjBMCIQA5BQBAAZQALAAASACIAaADQBhAABNhzQBJh5AJhnIAAhGQAAhegMg9QgPhJgig2IgKgPQgpg4gsgYQgrgYg5AAQg7ABgpAWg");
	this.shape_224.setTransform(9.1528,-0.8412,0.1276,0.1276);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#2F2C2D").s().p("AgBTbQi0AAikhCQjthiipjpQiAi0g/jGQhHjyAAjkQAAgPADgmQACgkAAgVQANjOBBi5QBDi7B2ibQANgTAUgYIAhgmQCKieCshQQCqhODGAAQBrAACAAcQEPBJDGDmIAFAMIAXAYQANAPAHAPQD3FQAQHVIAAAmQAAB4gbCkQg8FFiwDvIgJALQgGAHgHADIgKARQh5CcibBYQiaBai1AZgAlbxUQiiBLh/CRQgVAVgsA3QjbErghGXIAABoQAADyBCDOQBGDUB0CbQClDeDaBYQCUBBCpAAQBBAAAmgGQFegrDhklIALgRIAPgQQCvjzAxkrQAbh1AAicIAAgmQgIm0jzlQQgUghgRgQIgFgLQi6jYkChDQhtgbhtAAQi5AAihBKgAhCHJQgvgMgmghQghgcgkg1QhXiIAAjFIAAhSQAQiLBChrQAuhDA2ggQA3ggBFgBQCSAABTCEIAGAKQBSB3AADHIAAA7QgRCWhMB3Qg3BUhCAiQguAYg5AAQgVAAgsgLgAhil6QgpAYglA4Qg2BWgRCGQgFAbAAAxQAACvBSCCQAXAoAeAYQAbAWAjANQALAAASADIAZADQAugBAjgRQAxgbAthGQAkg7ATg1QAXg/AEhCIAAgLQAAgIADgOQACgOAAgHQAAilhMh3IAAgMQgqg5gpgXQgqgYg9ABQg6gBgnAYg");
	this.shape_225.setTransform(9.4336,-0.5604,0.1276,0.1276);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#902C8E").s().p("AkNIAQhkgcgtgLQipgnh3AeQhYAhgmAWQAYmXDpk7IA8hLQAmAJAzARIBRAbQDcBuCHAAQA6AAAzhEQAcgnArhNQBgiLBahwQEGBDC7DhQhnBniDCwQi5D4geAkIgIALIgIALQgFgGAAgKQgqg6gygdQgzgchBAAQhBAAgwAcQguAdgmA6QhEBngICJQg0gLhfgcg");
	this.shape_226.setTransform(7.2126,-8.8952,0.1276,0.1276);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#9D2362").s().p("AAXFMIhbgrQg3gYgrgLQg1gQg7ADQg6ADg3AVQhGjOgBj8QABhIAFgmQAmgWBYghQB3geCpAnQAsALBkAdQBfAbA0AMQgGAWABA3QgBC5BTCDQA8BeBNAQQg7A6g2AhQg+AmhDAHQgRADgTAAQhJAAhZgog");
	this.shape_227.setTransform(2.4612,1.6056,0.1276,0.1276);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#65318F").s().p("AkUB9IhQgcQgzgRgmgJQCIiWCmhNQCmhNDBAAQB0AAByAhQhaBxhgCJQgsBNgbAnQgzBEg6AAQiHAAjdhtg");
	this.shape_228.setTransform(6.3734,-13.3658,0.1276,0.1276);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#D7225D").s().p("Ar0ETQh4idhHjXQA2gUA6gDQA7gDA1APQArALA3AYIBcAsQBwAxBWgOQBDgGA+gmQA2ggA7g7QAQALAsgBQAyABApgWQA4geAxhKQAmg2AWhFQATg6AIhNQBCgQBiAQIB7AMQBGAGAsgBQB7gBBig7QAygeAbgUIAAAnQgBBCgGBLQgEAtgMBYQhXA2hbBeQg5A8haByQhJBVgHAGQgqAig1gWQhTglgpgMQhIgXg4ARQhKAOhUBKIiECDQhVBSgzA4QhHBPgsBHQjohkidjcg");
	this.shape_229.setTransform(9.5708,6.2364,0.1276,0.1276);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EE6B95").s().p("AkcB5QALgsATgiQAgguA1gtIBlhOQAvgoAYgPQAsgbArAAQAhAGA8AbQBDAfAaAGIAWAAQjrEyloApQAEg1AJgjg");
	this.shape_230.setTransform(14.2711,11.9292,0.1276,0.1276);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EB307C").s().p("AqGGXQAshIBHhPQAzg4BVhRICFiDQBUhJBKgOQA4gSBHAXQApANBSAlQA2AVAqgiQAHgGBJhVQBahzA5g7QBbhfBXg2Qg6E8iwDxQgFAKgVAXIgWAAQgagHhDgfQg8gbghgGQgrAAgsAbQgZAPgvAoIhkBPQg1AsggAvQgTAigLAsQgJAjgEA2QgQAAgiADQgjACgTAAQiyAAichBg");
	this.shape_231.setTransform(13.1351,8.6456,0.1276,0.1276);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#9D2362").s().p("AgbHZIh6gLQhigQhCAQIAAg2QABi2hIh4IAIgKIAIgLQAeglC5j2QCDixBmhnQAPALANAOIAUAdQDvFJASHQQgbAUgyAdQhjA8h6ABIgHAAQgqAAhBgGg");
	this.shape_232.setTransform(16.7697,-6.0774,0.1276,0.1276);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AmoVQQkThwjVkXQiXjRhJjlQhSkcAAj8QAAgSADgoQACgnAAgXQAQjsBNjWQBMjTCEizQA3hCAVghQCpi8DWhiQDUhhDyAAQCbAACCAmQFNBRDvEjIALAGQAhAsALAWQEiF/ARIWIAAArQAACPgcCuQhAFkjSEtQgFAFgIALIgOARIgGAFQkvGDnBAxQgyAFhSAAQjjAAjGhYgAABjBQgCACgCAAQgfBAgIBEQABAMgDARQgDASAAAHQAAB1AwBKIAAgCQACgDAEAAQAVgsAJgYQAOgoAAgoQAFgcAAgKQAAhogshHIgFgQQgDAAgDADg");
	this.shape_233.setTransform(9.1879,-0.6657,0.1276,0.1276);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#D1D3D4").s().p("AmmVTQkjh8jKkSQiUjRhHjkQhSj1AAkdQAAhSAFgmQAinsEMllQAfgvAtguQCqi8DShiQDVhkD0AAQB8AACgAmQFXBgDmESIAFALQASASAfAqQEdGGARIXIAAAsQAACPgcCuQhCFojQEiQgGAMgVATIgFALQkzF+m+A4QgWAAgpADQgpADgWAAQjqAAjAhYgAADjCIgEABQgmBCAABGQgGARAAAmQAABoAsBXIAEgGIABgFQApg5AIhVIAAgmQAAh3gmg9IgLgLIAAgDIgBACg");
	this.shape_234.setTransform(11.1822,1.3255,0.1276,0.1276);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFCFD").s().p("AiQB+QgcgeAIhBQAKhFAxgvQA9g4BfAEQBTAFAYAhQATAbgZAcQgUAWhgA7QhbA8gNAOQgbAbgWAAQgOAAgNgMg");
	this.shape_235.setTransform(10.5323,-7.6848,0.1276,0.1276);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#2F2C2D").s().p("AghTbQhdAAhCg3QgGgLgFAAQgngpgUgwQgVgzAAg6QAAghARmQIAFivQAGjxAAjqIAAhHIgZAAQhvAAhFhOQhAhIAAhhQADhHAAgxIAAhoQAAgmAMgoQARg8AogrQAfgjA7gkQApgOBKg/QADgHARgVIAwg8QAGgKAAgRQALhQAbgpQAyg7DYA2QA5AQBgAWQAOAGARAFIAVAGIAQAFQBOAYAwBEQAvBEAABSQAAAQgDALIAAAhQgMBlgKD5QgLDVAAF6IAGNhQAAB7hIBPQhJBThuAAIgyADQgwADgkAAgAjhjxQAJAAAKALQAEAAADAHQAEAHAAAIIAABoQgDECgFDZIgGC1QgNGKAAAhQAABaA8BAIAFAGQA6AxBCAAQBMAAA/gGQAkAAAwgCIAygDQBYAAA3g7QA2hAAAhmIgDpKIgFkXQAAkGALlJQAJj9ANhmIADgcQACgLAAgQQAAg+glg2Qglg3g5gQQgsgLgWgLQgvgNhqgUQhWgbhLAAQgXAAgNAFIgHAGQgVAegFA/QgFAWgRAgIgwA9QgQAUgHAHQhTBJgwAVQgjAOglApQggAjgNAwQgJAfAAAcIAADgQAABMAuA3QA0A9BVAAQAZAAAWgLg");
	this.shape_236.setTransform(11.1857,0.5897,0.1276,0.1276);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#2F2C2D").s().p("AjAShIgHgIQgDgDgBAAQgogpgTgwQgVg0AAg5QAAghAOmKIAGi1QAFhtAAluIADhHIgZAAQhxAAhEhOQg/hHABhiQAChBAAg3IAAhoQAAhnBChOQArgsAygVQAWgLAfgZIA+gvIBEhYIADAAQAAgQADgLQAGgoAFgVQALgnAQgVQAWgcA9gBQA+gBB5AZQA3AQBiAWQAgAQARAAIAQAGQBPAZAwBEQAwBFAABVQAAARgCALIgDAbQgMBcgKECQgKFJgBEFIADEYIADJJQAACAhHBQQhGBUhvAAIiJAAQgjAAgyACIgyADQhYAAhIg8gAjijuQAMAAAFAFQALAHAAAPIAABtQAAENgFDJIgGC1QgRGPAAAcQABBaA8BAIAFAGQA8AxBEAAICHAAQA9gGBMAAQBWAAA4hCQA3g+AAhnIgGpJIgCkYQAAleAIjwQAGiSATjSIADgxQAAhBglg3Qgkg4g4gQIhEgRQhogdgvgJQhwgbgxAAQgZAAgNAFIgJAFQgLAPgGAcQgDAOgFAlQgEAPgIAUQgHATgCAAQg2BDgPAQQhDBIhDAbQgpAZgfAeQgzA6AABUIAABoQgDA3AABBQAABMAwA3QA0A9BWAAQAhAAANgFg");
	this.shape_237.setTransform(11.5015,0.9129,0.1276,0.1276);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#9D2362").s().p("Ak6CWQgDAAgDgEIgFgHQAxhiA/hHQBJhSBngyQBkgsBYADQBQADBfArIAABjQAABxhBBGQhBBKhhAAIkRAFQhVAAg3g2g");
	this.shape_238.setTransform(12.985,13.4942,0.1276,0.1276);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#BC2131").s().p("AloDdQAAggAPmKQAKAAAmALQATAFCVA3QBpAlBDAHQBpAWBShiQAvg5BOioIAACaQADCIACDEQhfgrhQgCQhYgEhkAsQhnAyhJBTQg/BHgxBiQhFhBAAhqg");
	this.shape_239.setTransform(12.5479,10.2605,0.1276,0.1276);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F59331").s().p("AgaDtQg0gVgQgEQhgguhMgPQgDAAgEgCIgEgDQAigoAwgUQA1gbBDg9QAFgDARgWIAxg/IADAAQAEgFAKg3QAKg5ATgZQAQgaBFAEQA1ACBiAUQglBZhLDJQgMAcgbBXQgfBLg2AHQgbAAgpgSg");
	this.shape_240.setTransform(9.2332,-11.624,0.1276,0.1276);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#ED433D").s().p("AAkJIQhDgHhpglQiVg3gTgFQgmgLgKAAQAFh4AAg9QADhLACiGIADkKIBoAxQBKAmA1ABQBGABA/g4QAvgxBDhbIB0icQAlg8A9hNQgFClAAGqIAAEXQhOCngvA5QhDBRhSAAQgTAAgTgEg");
	this.shape_241.setTransform(12.6372,1.6502,0.1276,0.1276);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EF5B33").s().p("AAEJKQg1gBhKgmIhogxIAAhoQgKAAgSADQgSACgIAAQhiAAg8hGQg1g/AAhWIAAjfQAAghAJgjQAPg1AkgrIAFADQADACADAAQBNAPBfAuQARAEA0AVQAqASAaAAQA3gHAfhLQAahXALgcQBMjKAlhZQAxAMBNAWIBPAVIAFAAIALAFQBBAVAqA+QApA+AABGIAAAxIgDALQgTDUgFCJQg+BNglA8Ih0CcQhDBbgvAxQg/A4hEAAIgCgBg");
	this.shape_242.setTransform(11.2048,-7.107,0.1276,0.1276);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgfWmQinAAh/hoQgOgQgWgWQg9hCgghUQghhQAAheQAAgnALmPIAIi1QACgzABhpIADjSQh8g4hJh3QhFhzAAiDIAAjgQAAhDAThEQAehpBIhJQBPhQBQgjQACAAAvgnQAJgSASgPQALg0ANglQATg1AfgsQAjgtA3gcQBHgkBcAAQBpAAB0AbIChAsIAWAFQAMADAEADIApAFQCIAuBYB+QBZB+AACTQAAAbgDARIgDArQgMBZgKDwQgID+AAFFQAACkADBzIACJKQAADRiDCOQiDCPjFAAIgwADQgvACgiAAg");
	this.shape_243.setTransform(11.275,0.7887,0.1276,0.1276);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D1D3D4").s().p("AlFU7QgZgQgIgQQhAhHghhUQgihWAAhdQAAgdAQmVIAFivQAGirAAjIQh8g4hJh1QhFhxAAiCIADjhQAAhDAThDQAdhpBGhOQBChLBdgoQABgCAOgMQASgKANgPQAHgFAXgcQARhqA5hQQBahuCjAAQBXAACGAhQAlAHAyAMIBKATIAWAIQAKADAGAAIAnALQCLAtBYB7QBYB3AACYIgCAWIgBAWIgGAsQgNC+gGCKQgID+AAFLIAFNbQAADSiDCQQiECRjEAAIh+AAQgnAAg2ADIg2ADQiqAAh5hug");
	this.shape_244.setTransform(13.2657,2.7794,0.1276,0.1276);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFCFD").s().p("AFjEAQglgQguhGQhBhigiglQiii4lrgdQg6gDAZgdQAagfBOgLQBdgOBsAeQCFAmB4BkQC/CWAaB5QAJAqgOAaQgKARgMAAQgEAAgEgCg");
	this.shape_245.setTransform(12.9957,-8.5413,0.1276,0.1276);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#2F2C2D").s().p("AJwTbQgsgFhogGQhigLhiAAIhvgCQhOgDguAAIiBADQhoAChPAAQiLAGivAAQhAAAg1ggQg3gfglg3QgVgxgLgWIAAgRIgskiQAAg5AYg0QAqhXBignQARgHAcgHIA+gOIAdgHQANgEAHAAIAGAAIAFgFQCwi0CejWIARgbQCBivA0h5QAPgoAHgcQAEgQAAgIQAAgSgGgMQgHgOgQgQQgXgYgYgLQgYgJghAAQgfAAgQAFQhNAKg5AdQhSAmg6AsIh4BdIhHAAQgdAAgNgCQgUgCgSgHIgQgGIgLgFQg9gegmhVIgDgFIg/mmIAAgLQAAgKAGgMIADgLQAfhRA7gqQAEgFASgMIAFgFIFXi1QDbhKDiAJQEnAQDHCkQB4BnBCCCQBdCqAADmQAACPg8CYQgvB/hVCKQhVCKiCCgQCkgMBEgKIARAAIAFgCIAGgDIALAAQBfAABEBIQBLBQAACEIgCAsIgBA3IgDA8QgCA8AABNQAABqhCBIQhJBSh3AAgAEbSJIBsAGQA+ACAcADQCIAIAMAJQBggEA2hBQAvg3AAhSQAAhNAGhBIAAg3QAFhQAAgTQAAhog5g/Qg0g5hHAAIgfAFQikALhPALIg4AGQgRAAgIgRQgJgSAMgOQEUlZBij7QA5iUAAiDQAAjLhViqQhAiAhvhTQiyiYkZgRQi/gQjlBMIlMCqIgMAMQgFAEgKADQgyA2gTAtIgCALQAAAKgDAAIA/GhQAWArAxAhQATALACAAQAfALAcAAIArAAIBzhYQBWg7A+gcQBQgkBKgIIA0AAQBaAAA2A3QAbAXAMAbQAKAXAAAfQAAAnggBKQg1CBiFC4IgTAWQiqDnivCzQgDADgGADIgKAFIgOAAQgbALgZAAIg4AOQgbAHgOAHQhKAcggBAQgWAqAAAuIAAAWIAvEMIAJAcQAGARAHAKQAdArAnAYQAqAYAxAAIE6AAQCJgGCvAAg");
	this.shape_246.setTransform(10.5773,1.0482,0.1276,0.1276);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#2F2C2D").s().p("AJxTaQgvgGhlgFQhogLhcAAIoiAAIi5AHQhYAEgqAAQhBAAg3gjQg0ghgkg6QgRgYgQgtIgvktQAAg9AZg1QAqhWBjgjQAogRBCgQIAdgIQANgDAHAAIALAAQCjijCrjtIATgWQCBixAzh7QAPgmAGgdIADgUQABgXgFgMQgGgQgQgPQgXgUgYgJQgYgJghAAIgyAAQhJAJg6AdQhFAfhJAzIh2BdQgDAAgFADQgHADgEAAIg2AAQgrAAgkgRIgRgFIgLgGQhDgjgghKIAAgLIhCmgIAAgRQAAgDADgIIACgKIAGgLQAYhGA/g2QALgFAMgLIAFgGIFZi0QD5hNDEAQQEoARDECfQB9BqBAB+QBdC0AADiQAACGg8ChQhhD5j7E1QChgMBKgKIAiAAQBhAABEBGQBLBNAACEQAAAYgFBQIAAA3QgGA8AABMQAABrhBBIQhIBSh4AAgAEcSNQCTAAAxAGQA4ADAzAHIArAGQBeAAA2hDQAvg4AAhTQAAgWAFh4IADg3QADgmAAg8QAAhmg4g9Qg0g4hIAAIgcAAQhSAKilAMIg6AFQgRAAgGgQQgIgTAMgOQCJitBeiSQBeiSAziDQA5ifABhyQgBjUhXimQgfg/gtg2Qgpgug4gwQi3iZkWgRQjRgJjRBFIlOCtQgFADgHAIQgJAIgEADQg1AwgPAtIgDALQgCAFgBAGIA9GgQAOAhAXAWQARAQAQAGIAOALIAGAAIAdAHQARADAPAAIAuAAIBwhXIBKgwQAqgZAggPQAigOArgMIBMgSIA3AAQAuAAAiANQAgAOAdAcQAyArgBBDQAAAkgfBKQg3CDiDCzIgRAcQi1DxikCkQgKALgGAAIgQAAQgcALgbAAQhHAVgcAGQhIAgggBBQgTApgBAwIAAAQIAsENQAMAjANAZQAbAoAoAZQAsAaAwAAICBgDQBogDBPAAQCLgFCsAAQCqAABHAFg");
	this.shape_247.setTransform(10.8741,1.3495,0.1276,0.1276);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#006739").s().p("AhaC2QgiAAg5gDIhsgHQAmhNA8hMQA/hHBEgvQA+goBrgVIC1gmIAAAXQAAAkgDAvIgDA7QAABcg4BBQhABKhoABg");
	this.shape_248.setTransform(17.8464,14.0322,0.1276,0.1276);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#079248").s().p("ArgFgQgwgdgdgwQAtg3BUg2QB5g1BageQB/grBkgLQBOgNB6AeQCbAnAvAEQB3AIA+gsQBCgqAshrQAqhrAUgsQAnhTApgzIARAAQBUAAA7BBQBBBGAAB1QAABNgGA1Ii0AlQhrAWg/AoQhEAvg/BHQg8BNgmBMIjqAAQiwAAiJAGQiIAFiyAAQg6AAgugeg");
	this.shape_249.setTransform(11.2251,11.4826,0.1276,0.1276);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#34B475").s().p("ArVImIgvkRIAAgXQAAgwAXgvQAlhNBYgkQAPgGAcgHIA7gOQAVgDAYgHQAVgHAFAAQCgifCzj1ICbBjQAtAaArAGQAuAGAxgQQBIgPA+grQAqghA7g+QBlhIAzgfQBbg4BFgWQgxCBhhCZQheCSiNCzQAigEEJgcIAQAAQgpAygnBTQgUArgqBsQgsBshCAqQg/Arh3gHQgugEicgnQh5gehOAMQhkAMh/ArQhbAeh4A0QhVA3gsA3QgPgYgPgqg");
	this.shape_250.setTransform(9.7221,7.1333,0.1276,0.1276);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00A79D").s().p("AjlH+QgqgFgtgaIichjIAKgLQAGgHAGgEQCAi0A0h9QAchEAAgkQgBgYgGgRQgJgWgWgTQgygyhKAAQggAAgRAGQAOgcAWgXQAVgVAigVQA5gbBHAGQA6AEBMAcQAHABCBA0QBXAjAxgGQAygOAphKQAXgpAhhPQAagoAlhWQBbC0AADRQAAB9g8CkQhFAWhcA4QgyAfhmBHQg6A/gqAhQg+ArhHAPQgjALgiAAQgNAAgOgCg");
	this.shape_251.setTransform(14.3203,-2.8553,0.1276,0.1276);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#32ABDF").s().p("AoPHYQgrAAgZgQIgOAAIgLgFQg2gegfhFIhCmlQADAAAGADIAIADQD0A2C/AbQBmAOAYAAQBHAAAsgjQA0gsAjhiQAhhuAQguQAXg/AghrQEbAQDDCfQBpBaBLCEQglBVgaAoQghBPgXApQgpBKgyAOQgxAGhXgjQiCg0gHgBQhMgcg6gEQhHgGg5AbQghAVgVAVQgWAXgOAcQg7AAhWAmQg/AehPA0Ih5Bdg");
	this.shape_252.setTransform(9.3552,-8.4356,0.1276,0.1276);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#2377BA").s().p("AAKDuQi/gcj0g2IgIgDQgFgCgDAAIAIghQAVg8A6gvQAHgDAIgIIANgKIFVivQC9hCCyAAIA8AAQggBrgXA/QgQAvghBsQgkBigzAsQgtAkhHAAQgYAAhlgOg");
	this.shape_253.setTransform(5.1526,-11.2468,0.1276,0.1276);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AJbWpQgxgGhagFQhogLhUAAIhrgDQhMgDgvAAIh+ADQhmADhOAAQiOAFiyAAQhzAAhng6Qhog7g9hmQgig6gVhBIg0lkQAAiCBDhuQBPiCCYg5QAxgVBWgRQCGiPCLi5IARgbQAbgiAxhLQgIADgLAIIgTAQIi0CDIiEAAQhNAAg0gWIghAAIgxggQg5gegugzQgyg2gbhEIgRgbIhHntIAFgsQADgFADgOQADgOACgFIAJgcQAuhyBjhbIAxgmIGQjLQD9hWEEAJQFjAZD/DNQCLBqBoC7QB2DkAAEPQAACshNDCQgpByhiCqQCGAoBWByQBeB/AACzQAAAWgFBXIAAA9QgFA8AABBQAADHiECHQiDCHjFAAg");
	this.shape_254.setTransform(10.6284,1.2213,0.1276,0.1276);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D1D3D4").s().p("AJbWnQgugGhbgFQhogLhXAAIoUAAQiMALi0AAQh2AAhng9Qhig8hBhoQghg1gThJIgLghIgrk7QAAiCBBhvQBOiDCWg8QAtgUBcgSQCXihB6inIATgWIApg7QAWgeALgUQgWALgLALIi0CJIiGAAQhMAAg6gWIghgGIgsgbQg3gdgxg2Qgxg1gfhDIgLghIhMnsIAIgnIAFgVIAGgWIAIgcQAnhvBthZIAugsIGQjKQEchXDmAQQFiAQECDQQCZB+BYCnQBzDnAAERQAACyhKC9Qg9CUhPCCQCIAsBUBzQBcB/AACzIgCCkQgGBtAAAUQAADJiFCFQiECEjGAAg");
	this.shape_255.setTransform(12.5876,3.2061,0.1276,0.1276);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFCFD").s().p("AiRB+QgcgeAIhBQAKhFAxgvQA9g4BhAEQBTAFAYAhQATAbgZAcQgUAWhgA7QhdA8gNAOQgbAbgWAAQgOAAgNgMg");
	this.shape_256.setTransform(-16.4976,-7.2871,0.1276,0.1276);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#2F2C2D").s().p("AggTdQhfAAhCg3QgGgLgFAAQgngpgUgyQgVgzAAg6QAAghARmQIAFivQAGjxAAjqIAAhHIgZAAQhvAAhFhOQhAhIAAhhQADhHAAgxIAAhoQAAgmAMgoQARg8AogrQAfgjA7gkQApgOBKhBQADgHARgVIAwg8QAGgKAAgRQALhQAbgpQAzg7DZA2QA5AQBgAWQAOAGARAFIAVAGIAQAFQBOAYAwBEQAvBEAABUQAAAQgDALIAAAhQgMBlgKD5QgLDVAAF6IAGNhQAAB7hIBRQhJBThuAAIgyADQgwADgkAAgAjijxQAJAAAKALQAEAAADAHQAEAHAAAIIAABoQgDECgFDZIgGC1QgNGKAAAhQAABaA8BCIAFAGQA6AxBEAAQBMAAA/gGQAkAAAwgCIAygDQBYAAA3g9QA2hAAAhmIgDpKIgFkXQAAkGALlJQAJj9ANhmIADgcQACgLAAgQQAAhAglg2Qglg3g5gQQgsgLgWgLQgvgNhqgUQhWgbhLAAQgYAAgMAFIgIAGQgWAegFA/QgFAWgRAgIgwA9QgQAUgHAHQhTBLgwAVQgjAOglApQggAjgNAwQgJAfAAAcIAADgQAABMAuA3QA0A9BVAAQAZAAAWgLg");
	this.shape_257.setTransform(-15.844,0.9894,0.1276,0.1276);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#2F2C2D").s().p("AjBSjIgHgIQgDgDgBAAQgngpgVgyQgUg0AAg5QAAghAOmKIAGi1QAFhtAAluIADhHIgZAAQhxAAhFhOQg+hHAAhiQADhBAAg3IAAhoQAAhnBChOQArgsAygVQAWgLAfgZIA+gxIBEhYIADAAQAAgQADgLQAGgoAFgVQALgnAQgVQAWgcA/gBQA+gBB4AZQA3AQBjAWQAgAQARAAIAQAGQBPAZAwBEQAwBFABBXQgBARgCALIgDAbQgLBcgKECQgLFJAAEFIACEYIADJJQAACAhHBSQhGBUhvAAIiJAAQgkAAgwACIgzADQhaAAhIg8gAjjjuQAMAAAFAFQALAHAAAPIAABtQAAENgFDJIgGC1QgRGPAAAcQAABaA9BCIAGAGQA9AxBEAAICHAAQA9gGBMAAQBWAAA4hCQA3hAAAhnIgFpJIgDkYQAAleAIjwQAFiSAUjSIACgxQAAhDgkg3Qglg4g3gQIhFgRQhmgdgwgJQhwgbgwAAQgaAAgPAFIgIAFQgJAPgIAcQgDAOgGAlQgEAPgIAUQgIATgCAAIhEBVQhDBIhDAbQgpAZgfAeQgzA6AABUIAABoQgDA3AABBQAABMAwA3QA0A9BWAAQAhAAANgFg");
	this.shape_258.setTransform(-15.5281,1.3127,0.1276,0.1276);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#9D2362").s().p("Ak7CXQgDAAgDgEIgFgHQAxhkBChHQBIhSBngyQBkgsBYADQBQADBfArIAABjQAABxhBBIQhBBKhhAAIkRAFQhXAAg3g2g");
	this.shape_259.setTransform(-14.0443,13.9097,0.1276,0.1276);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#BC2131").s().p("AlpDcQAAggAOmKQAMAAAlALQATAFCXA3QBpAlBDAHQBqAWBRhiQAvg5BOioIAACaIAGFMQhfgrhRgCQhYgEhkAsQhmAyhJBTQhCBHgxBkQhFhDAAhqg");
	this.shape_260.setTransform(-14.4815,10.6753,0.1276,0.1276);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F59331").s().p("AgbDuQg0gVgQgEQhgguhMgPQgDAAgEgCIgEgDQAigoAwgUQA1gbBDg/QAFgDARgWIAxg/IADAAQAEgFAKg3QAKg5ATgZQAQgaBHAEQA1ACBiAUQglBZhLDLQgMAcgbBXQggBLg3AHQgbAAgpgSg");
	this.shape_261.setTransform(-17.7969,-11.2399,0.1276,0.1276);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#ED433D").s().p("AAlJIQhDgHhpglQiXg3gTgFQglgLgMAAQAGh4AAg9QADhLACiGIADkKIBoAxQBMAmA1ABQBGABA/g4QAvgxBDhbIB0icQAkg8A/hNQgGClAAGqIAAEXQhOCngvA5QhDBRhSAAQgTAAgTgEg");
	this.shape_262.setTransform(-14.3921,2.0501,0.1276,0.1276);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#EF5B33").s().p("AAFJLQg1gBhMgmIhogxIAAhoQgKAAgSADQgSACgIAAQhiAAg8hGQg1g/AAhWIAAjfQAAghAJgjQAPg1AkgrIAFADQADACADAAQBNAPBfAuQARAEA0AVQAqASAaAAQA4gHAghLQAZhXAMgcQBMjMAlhZQAxAMBNAWIBPAVIAFAAIALAFQBBAVAqA+QApA+AABIIAAAxIgDALQgTDUgFCJQg+BNglA8Ih0CcQhDBbgvAxQg/A4hEAAIgCgBg");
	this.shape_263.setTransform(-15.8249,-6.7219,0.1276,0.1276);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgeWoQipAAh/hoQgOgQgWgWQg9hCgghUQghhSAAheQAAgnALmPIAIi1QACgzABhpIADjSQh8g4hJh3QhFhzAAiDIAAjgQAAhDAThEQAehpBIhLQBPhQBQgjQACAAAvgnQAJgSASgPQALg0ANglQATg1AfgsQAjgtA3gcQBHgkBeAAQBpAAB0AbIChAsIAWAFQAMADAEADIApAFQCIAuBYB+QBZB+AACVQAAAbgDARIgDArQgMBZgKDwQgID+AAFFQAACkADBzIACJKQAADTiDCOQiDCPjFAAIgwADQgvACgiAAg");
	this.shape_264.setTransform(-15.7547,1.1885,0.1276,0.1276);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D1D3D4").s().p("AlGU9QgZgQgIgQQhAhHghhUQgihWAAhdQAAgfAQmVIAFivQAGirAAjIQh8g4hJh1QhFhxAAiCIADjhQAAhDAThDQAdhpBGhOQBChLBdgoQABgCAOgMQASgMANgPQAHgFAXgcQARhqA5hQQBchuCjAAQBXAACGAhQAlAHAyAMIBKATIAWAIQAKADAGAAIAnALQCLAtBYB7QBYB5AACYIgCAWIgBAWIgGAsQgNC+gGCKQgID+AAFLIAFNbQAADUiDCQQiECRjEAAIh+AAQgnAAg2ADIg2ADQiqAAh7hug");
	this.shape_265.setTransform(-13.7635,3.1796,0.1276,0.1276);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFCFD").s().p("AFmEBQgkgQguhGQhChjghglQipi4lrgeQg6gEAZgdQAageBNgLQBegOBsAeQCFAmB+BlQC+CWAbB6QAKArgPAZQgJARgNAAQgEAAgEgCg");
	this.shape_266.setTransform(10.471,-8.0883,0.1276,0.1276);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#2F2C2D").s().p("AltS+QiygpimhVQgJAAgLgLQgkgPgZgjQgqg6gDhqQgFiCA+jGQAghnBHg2QA6guBCAAIACADQABABAAAAQABABAAAAQABABAAAAQABAAAAAAIBSAWQB6BCBfAfQBIAXAwAAQBQAAA0gQQAbgJAMgIQAIgHACgGQAGgNAAgdQAAgqgJgSQgEgJgLgHIgCgBIgBgFQgwgQg3gGQgbgFg/AAIhrAAIhBAHQgfAEgNAAQhVAAg6ghQhGghgng/Qgng/AAhSQAAiPAOhFIAGgWIAFgWQAjhsBFgtIgIAAQhBAAg1gmQhZg/gXiXQgLhEAAiXQAAhGAeg9QAshaBlg6QBmgxCAgXQFVhFD/BFQBnAeBxBAIAVANIAUAOQCUBiBNCWQBMCVAAC9QAADEhXCwQgEAKgHAOIgLAUQA4A7AwBoQA5B8AICbIACAhIABAhQAAC0g4CWQg5CVhtBrQgwAvgRANQjmC0lYAAQiuAAimgggAqHGtQgyAqgXBQQg+DMAHBsQAABZAhAsQAQAWARAEIAKAFQAFADABADIAIAAQCQBMC+AsQC7AnCLAAQFFAADViwQATgKAngnQBmhnA1iKQA1iKAAioQAAgZgGgjQgIiXg0hwQgohahDhJQgOgSALgPIAOgaQAJgQAFgNQBVixAAitQAAithHiJQhGiIiIhbQgQgNgWgJQhXg9h0gaQjwhHlIBHQiLAahKAnQhUAsgkBJQgaAzAAA5QAACSALBDQAUB2A/AwQAnAfAzAAQAyAAAggQQB7hNCyAAQBLAAAxAPQAfAKAQAOQANAPAFAOQAHAVAAAlQAAAlgOASQgBAAgCAFQgCAGgDAAQgMANgjABQgsABh/gPQiDgRhNAAQgoAAgkAVQhBAkgcBbQgIAPgDAYQgOA+AACLQAABBAeAxQAeAvA0AZQAZAQAfAGQAbAGAmAAQA8AAAxgGIDLAAQA7AGBBAbQAGAAAAAGQAYAOAMAYQAQAfAAA4QAABPgkAUQgSASgpANQg6AShcAAQiJAAjeiDIhHgRQgxAAgqAlgAmbmsQAhAAA7AHIB3APQBoALBHAAQADgLAAgLQAAgmgJgGQgGgFgUgFQgogLhBAAQiUAAhlA2g");
	this.shape_267.setTransform(8.2387,1.0337,0.1276,0.1276);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#2F2C2D").s().p("AlrS7QjIgriRhSQgEAAgHgCQgGgDgCAAQglgPgaglQgrg7gEhnQABiOA7jAQAfhlBFg1QA6grBDAAIAGAAIBSAVQDgB5BzAAQBRAAAygOQAkgKAFgJQAEABAFgLQAEgPAAgdQAAgqgJgTQgDgGgKgKIgFAAQgfgVhJgHQgMAAgdgCQgcgDgSAAQgsAAgbAFIgjAAQgyAGg/AAQhQAAg+ghQhEgcgohBQgohBAAhSQAAiDAQhSQAAgRALgVQAQg7AdgoQAagmAigRIgJAAQhAAAg3goQhYg/gaiUQgLhvABhtQAAhJAdg+QAshZBmg3QBTgtCTgaQFmhJDtBJQBlAVB2BCQAbAXAMAFQCVBnBNCVQBOCXgBC9QAAC6haC0QgJAbgNARQA8BDAtBgQA6CFAHCSQAGAxgBAXQAACxg4CVQg6CVhuBuQgVAVgtAiQjhC1lZAAQivAAilgigAqHGtQgyAsgZBSQgcBZgPBQQgOBPACA6QACBZAhAsQARAYARAHIAKABQAFABABAEQACAAADADIADADQCUBNC6ArQCcAhCrAAQE8AADeiqIAdgbIAcgbQBkhiA1iNQA0iKAAilQAAgtgDgWQgHiRg0hvQgxhng6hCQgIgEgBgLQgCgJAFgJQAWghAFgWQBYioAAiwQAAiwhIiLQhHiJiIhaQgMgNgYgKQhrhAhigXQjuhGlLBGQiCAYhTAqQhTAugjBIQgYAxAAA5QAACWALA/QASB2A/AzQApAiAyAAQA1AAAdgWQCJhNCkABQBLgBAwAQQAbAIAWAPQALAQAFAPQAIAXAAAiQABAUgFAPIgJATIgGALQgSAPgiABQgwACh7gSQiDgRhNAAQgoABgkAUQhCAlgcBbIgFAVQgDALgDAGQgKBAAACKQAABBAeAyQAeAyAzAUQAtAcBJAAQA8AAAygFIDNAAQBXASAmAOIADAFIACABQAZAOALAYQAQAgABA4QgBAtgKAYQgKAUgSAJQgSASgpANQg6AShaAAQiCABjoh/IhHgVQgwAFgpAhgAmZmtQAfAAA6AGIB3APQBtALBBAAQAGgJAAgMQAAgigLgLQAOABgngLQgogLhAAAQiTAAhlA3g");
	this.shape_268.setTransform(8.5374,1.3384,0.1276,0.1276);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EF5B33").s().p("Ak2CNQhKgJhbgTQAWgzAxg/QBQhPBpgiQBQgZCLgKQBmgHCFAYQBNAOCfAjQAAAGAFAAQgmAmgWAQQjiCvlLAAQhRAAhYgLg");
	this.shape_269.setTransform(9.7213,14.6633,0.1276,0.1276);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FAAF4C").s().p("ArqBHQAbhaA7gwQAzgpA8AAIBNAVQDhB9B6AAQBSAAA3gSQAjgKATgOQAYgRAAg8QAAgzgNgaQgHgPgSgMQgYgKgOgEQgigKgqgDQAhgvAdgdQAngjArgPQBcgbCFAnIBwAlQBFAXArAKQBrAOBoiSQA2B8ALCRQhUAAhCAVQhBAchSBWQhgBngiAXQhmBbgaAUQhXBBg6AAQgqAAgzgnQgggTg0gSQg+gVgPgHIg7gyQgggagjgHQgsgHhIALQgbAEhkAUQhaAThOBBQhGA6g0BYQAAiGA8i4g");
	this.shape_270.setTransform(8.2215,7.0918,0.1276,0.1276);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F59331").s().p("Aq2ElIgDAAQgFAAgLgLQgWgEgXgaQgtgygDhqQA0hYBGg5QBOhBBagTQBkgUAbgEQBIgLAsAHQAjAHAgAaIA7AyQAPAHA+AVQA0ASAgATQAzAmAqAAQA6AABXhAQAagUBmhbQAigXBghnQBShXBBgcQBCgVBUAAIAABBQAAFjjVDWQgGAAAAgGQiegjhOgOQiFgYhlAHQiLAKhQAZQhqAihPBPQgyBAgWAzQiggeiwhag");
	this.shape_271.setTransform(8.2215,10.8316,0.1276,0.1276);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F8EB48").s().p("AjVKfIhqAAQgyAFg8AAQhDAAhAgbQg+gdgig3Qgkg5ABhJQAAh+AQhSQAAgHADgMIAFgTQAiADAsAMQAaAHA0AQQA/ARB4AuQBtAlBLgHQBoAABpgZQB5gdBHgyQBIg0AzhqQAqhVAThlQAIg7gDgsQgEg1gXguIgng4QgYgjgJgeQguhsA/h0QAEACANAJQALAIAHADQCQBiBLCRQBKCQABCxQAACxhYC3QgWAsgLALQBNBVAmBaQhnCRhrgOQgsgJhFgYIhwglQiFgnhbAbQgrAQgmAjQgfAcggAvQgcgFhFAAg");
	this.shape_272.setTransform(8.9204,-4.2618,0.1276,0.1276);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#D6DE3B").s().p("AiQICQh5gug/gRQg0gQgagHQgrgMgjgDQAghpBNgsQAtgaAuAAQAfAAA5AHIB4APQCVAQAZAAQAMAAAHgFIAJgGIAGgNQAFgNAAgSQAAgigHgRIgKgOQgMgMgdgJQgrgMhEAAQiiAAh7BHIAAAFQgoAWg6AAQg4AAgvgjQhPg5gViJQgLhiAAhzQAGAAAFgGQCQgiASgDQBmgRA7AVQAvAWBSAqQBHAeBCAAQBFAAAngVQAqgXAgg8QBkiBBRiRQBpAeBsA/Qg+B0AuBsQAIAeAZAjIAmA4QAXAuAEA1QAEArgJA7QgTBlgqBWQgzBqhHA0QhIAyh4AdQhrAZhoAAIgYABQhDAAhbgfg");
	this.shape_273.setTransform(6.5844,-7.121,0.1276,0.1276);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#8EC549").s().p("AgSCvQhSgpgvgWQg7gVhmARQgSADiQAiQgFAFgGAAQAAg+Adg5QAohRBdgzQBCgiCcglQCsggCWAAQCLAAB2AgQhRCShkB/QggA8gqAXQgnAVhGAAQhCAAhGgeg");
	this.shape_274.setTransform(4.6923,-11.8755,0.1276,0.1276);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AmZWFQjXg1iphUQgVgLgGAAQhbgpg5hdQhDhrgEiZQgIikBKjnQAUhJAng/QAng/AygpQgyhtAAhpQAAiWAWhqQALgqAGgSIAAgLQhwhwgfi9QgNhRAAirIAAgLQACiPBKh1QBJhzCFhKQCBg/ChgeQGHhQEpBVQB+AeCPBVQAhAWAQAGQC9CDBlDEQBlDEAADuQAADOhPC2QAWAiAhBMQBJCRAJDHQAFAxAAAhQAADdhIC7QhJC6iLCLIgpAkIgpAjQkbDhmhAAQjOAAixgmg");
	this.shape_275.setTransform(8.3218,1.2209,0.1276,0.1276);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D1D3D4").s().p("AmUWDQjZgsimhdQgLAAgWgLQhbgqg5hZQhDhrgEicQAAipBEjhQAuiXBmhaQguhmAAhwQAAiYAQhiIAQg9QAAgEACgDQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQhyhygfjAQgOhlAAiXIAAgLQAEiNBKh0QBKh1CChFQA5ggBKgXQBDgVBcgRQCzgpCwAAQCvAACcApQCWAqB5BOIAaAOQAOAHAJAGQC9CABmDFQBlDGAADuQAADDhNDCIAbAyQARAfAIAXQBFCYAQDAIAABSQAADehHC6QhHC6iJCMQg3A2gbAWQkdDbmfAAQjXAAiogmg");
	this.shape_276.setTransform(10.2829,3.1988,0.1276,0.1276);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFCFD").s().p("AlQD5QAvjmB6iAQBkhpCIgdQBugXBcAeQAlAMASASQASARgKAPQgSAbg/APQg0ANgbgFQiVgbjKDdQgtAwhKBeQghAqgGAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAgBAAgBg");
	this.shape_277.setTransform(11.3927,-7.7039,0.1276,0.1276);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#2F2C2D").s().p("AC3TcQgygCglgIQgOAAgIgFQh3gcgzhfQggg6AAhBQAAg3ARh5IiUAGQi1AFixAAQhRAAhEguQhFgvgihSQgshgAAicQACh+AShNQARhNAlg2QAqg1BHhfICCizIApg3QDnluBti1IAxhSQAphIA0hSIAGgKQAxhJBCgfQAugWAzAAQB2AADCBHQAXALArALQBTAlAwBJQAyBLAABeQAAAfgEA7IgHB7IAAAyQgLBzAABzIAAERQgDAygDBLIARAAQBUAABABDQBHBKAAB0IAADhQACAWAAAbQAABqhABIQg/BHhhAIQAFBRAAAdQADAWAAAbQAABmg7BMQg6BKhbAQQglAIg3ACQgiABhSAAQhEAAgfgBgAg7L2QAIAJAAAIQgQCOAABCQAAA2AYArQAmBDBaAWQALAFALAAQBKARBlAAQB7AABKgRQBGgMAsg7QAtg6AAhPIAAgxIgDg5QgDgsAAgeQgCAAAAgLQAAgJAJgJQAJgKAMAAIAQAAQBPAAAzg3QAzg4AAhWIgGkSQAAhZg0g4Qgvg0g+AAIgmAAQgRAAgIgFQgEgEgBgFIgBgNIAAmvQAAhOALieIAGgxQAFhdAAhzQAAhOglg7Qglg7hEgdQgsgLgTgKQjBhChkAAQhgAAhDBiIgGAGQgcAshBBzIgxBMQhWCXj9GSIgsA8QivDwhCBNQghAxgPBHQgPBGgDBvQAACQAnBWQAcBFA2AoQA2AnBAAAQBJAAEdgLIC1gGQAIAAALALgAh0ByQgRgGAAgXQAAgFAEgGQAFgHAHgEQAIgLAQgUIAUgYQAGgHAKgBQAGgCALAAQAQAIAAATIAGAbIAAAmQAAANgIAHQgHAIgMAAQg6AAgNgEg");
	this.shape_278.setTransform(9.5144,1.0481,0.1276,0.1276);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#2F2C2D").s().p("AC0TcQgxgCgjgIIgWAAQh5gfgyheQgeg5gBhFQAAg3AOh5IiRAGIjdAHQhhAEgoAAQhSAAhEgxQhEgxgihTQgshfAAidQAAh7AShOQAQhPAng2QBYhsCcjWIAmg8QDclUB6jPIAwhSIAphFQAeg0AWghIAFgLQAzhIBCggQAvgVAwAAQB7AADABHQAKAGAVAIQAWAIAKAFQBUAhAxBJQAvBJAABfQABB4gJBdIgDAyQgKCWAABVIAAEMQAABdgDAgIANAAQBVAABABDQBGBKAAB0IAGESQAABqhBBKQhBBJhfAEQAGBRAAAdIAAAxQAABmg7BLQg6BLhbAQQgjAIg4ACQgiABhTAAQhEAAgfgBgAhRLxQARAAAFAFQAFAGAAAQQgQCJAABCQAAA5AZAtQAoBEBaAVQAFAAAFADIAJADQBiALBNAAQBoAABdgLQBGgRAsg7QAtg8AAhOIAAgsIgGiJIAAgFQAAgMAIgIQAHgHANAAIATAAQBMAAAzg7QAzg6AAhWIgDi1QgCgmAAg3QgBhZgyg4Qgug0g/AAQgYAAgNAGQgMAAgLgLQgKgIgBgOIADmqQABhCAHivIAGgxQAIiAAAhQQAAhOglg4Qgmg4hGgdIgfgOQgTgIgKgGQjChBhmAAQhgAAhDBiIgGAGIhdCeIguBTQi3EnifD8IgsA8QivDwg/BSQgiAsgPBIQgOBEgDB1QABCJAlBdQAeBCA0AmQA2AnBBAAQCuAAC1gLgAh2ByQgSgEAAgUQAAgTAQgIQAFgIAUgWQARgTADgGQAHgHAJgBQAFgCALAAQATAJABAXQACAAAAAWQAAAQADAWQAAAMgJAIQgJAIgMAAQg4AAgOgEg");
	this.shape_279.setTransform(9.8303,1.3289,0.1276,0.1276);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F4A5BA").s().p("AkPCMQgGgGgQAAQALgWAhghQBGhWBKgvQBLgxBngZQApgKBBgFIBxgHQAAAWACAcQAABagzBCQg0BDhQARQhYALhxAAQhdAAhYgLg");
	this.shape_280.setTransform(14.2818,14.6736,0.1276,0.1276);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EE6B95").s().p("AmzEDQgcgzAAg8QAAg6ATiQIAAgFQgQADgVACIglAAQARgUAegdQAtgdBGgKQAqgFBUAAQAnAACAAJQBkAIBCgGQD6gPCmjXIAABSQAABjg7A/Qg7A/haAAIgRAAIAAAFQAGA7AABNIhxAHQhBAEgpALQhnAYhLAxQhKAwhGBXQghAhgLAWQhqgZgshTg");
	this.shape_281.setTransform(14.1797,11.706,0.1276,0.1276);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EB307C").s().p("AruHWQg+gsghhJQgmhlAAiMIAAgGQBFg3BXglQCFgtBJgQQB7gaBUAWQA9ASBjAsQBpAwAvAPQBQAXBPgLQBCgJBTgkQBagmA+hsQAkhAA4iGIAwhoQAdhBAZgnIgCAzIgCA7IAACvIAsAAQBKAAA1A5QA8A/AABoQgBAUAGBvIAAA8QimDXj6APQhBAGhmgIQiAgJgnAAQhUgBgqAGQhFAKgtAdQgeAdgRAUQhEAAgmAGQhaAAh3ACIiWADQhIAAg8gqg");
	this.shape_282.setTransform(9.5176,4.6124,0.1276,0.1276);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#902C8E").s().p("ABYDWQjShAjCgHQABgHAEgGIAGgJIA1hdQArhIAeg1IAFgGIADgFQAug+A5gcQAqgUArAAQB3AAC1BIQgRChgxBiQg0BqhMAAQgRAAgSgFg");
	this.shape_283.setTransform(11.1578,-11.7066,0.1276,0.1276);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#9D2362").s().p("Ag1HtIhngfQg6gQgvgHQgugGhbgFQhdgGgugFQg4gKgdgMIATgZQANgRAGgNQCHjQDTlSQDCAHDSBAQBjAdBAiCQAxhiARiiQAYAGAqAVQBKAdAsBBQArBDAABVQAABRgHB/QiLAThvBWQheBJheCLIgtBJQgcArgWAZQgwA2g4AAQgPAAgQgEg");
	this.shape_284.setTransform(10.1622,-7.2438,0.1276,0.1276);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#D7225D").s().p("Ar1FPQAQhHAjgyIADgGQA2hCC7kAQAdAMA4AKQAuAGBdAFQBbAGAuAFQAvAHA5ARIBnAeQBLARA9hDQAWgYAcgsIAthJQBeiLBehJQBvhWCLgTQgBAggDARQgHBugBB9IgCCUQgYAngeBAIgvBoQg5CGgjBAQg/BthZAmQhTAkhDAJQhPALhRgXQgvgPhogwQhjgtg8gSQhUgWh7AaQhKAQiEAuQhYAlhFA3QAAh0ARhKgAAIDhQgQAAAfACIAoADQgFg2AAgMg");
	this.shape_285.setTransform(8.12,-0.7357,0.1276,0.1276);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("ABCWfIgTgHQgKgDgHgBQirglhiiAQhShsgKiJQiIAGiXgBQiQABh2hRQh1hRg9iLQg9iSABi3QgBiNAVhgQAbiABEhYIALgRQBThpCSjPIAngxQBkicBlinICFjbIArhNIAshJQAegxAZglIALgVQBGhnBkg3QBjg4BxAAQCaAADlBYIAjALQAXAIANADQCPA5BTB+QBRB9AACdQAACDgGBdIgFA3QgICpAAAyIgDBNIAACqQBnA4A+BkQBBBvAACOIAGESQAAB+g9BqQg6BohlA6IAAAWQAACshnCDQhoCBilAhIgLAFQh4AMhzAAQhbAAh9gMg");
	this.shape_286.setTransform(9.5878,1.2236,0.1276,0.1276);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#D1D3D4").s().p("AClWpQg6gCgrgHQgIAAgLgEIgTgHQipgmhgh+QhRhpgMiIQhNAAhdADIh1ACQiRAAh1hRQh3hSg8iPQg5iFAAi+QAAiVAShcQAYh+BDhcIALgLQBDhVCpjpIAhgxQCej2C1koIAshHIBdikIAQgRQBHhnBig6QBig6BuAAQBMAABiAYQBWAUB+AsIAjAOQAVAHAMAGQCQA6BUB+QBUB+AACcQAAAmgLC6IgCAxQgJBuAABtIAACUIgCBjQBmA4A9BlQBDBvAACNIABAmIABAyIAACDQAAAWADAhQAACAg8BrQg5BlhjA/IAAARQAACthqCEQhqCFimAhIgFAAQgrAHhAACQgoAChcAAQhPAAgkgCg");
	this.shape_287.setTransform(11.595,3.1796,0.1276,0.1276);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFCFD").s().p("Al1CpQgBgBACgTQAOiLAMgsQAThDAngbQAwgcBvgHQBKgFDkAAQDwAAgvAiQgRAMgzAMQgvALgkACQlZAOisCbQgfAmgfAvQgHAMgBAAIgBAAg");
	this.shape_288.setTransform(7.6546,-9.4275,0.1276,0.1276);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#2F2C2D").s().p("AmjSyQiKgfhcgjQglgTgdgZQh9hYAAiTQAAg6AYisQALg8AWhYQAghkBDgxQArgfA0gGIA6AAIC8BzQBnA8BQAAQB4AAA8gsQAWgTAIgQQALgWAAgpQAAgZgFgMQgCgGgHgHQgKgKgJAAQg2ghh7AAIiDAQQhpAWhDAAQhNAAg9grQg9gpgfhLIgFgQQgIgWgDgbQgDgPgDgiIAAgsQAAgrAGgcQgCgQABgVIABgcIAAgWQAAhBgGkjIAAlpQAAguAOgqQAVhKBAhEQAugpAWgOQA+gmBAAAIBfADQBQACA2AAIB/AIQA8ADAfAAQAsAAAcgFICLgGQBggFCGAAQAwAAArAQQAsARAgAgQAlAlAUAzQAUAyAAA2QAAA5gRBrQgLBNAAAbQAAAygTAxQgaBFg7AzQhCA+hcAJQBfAwA6AzIAEAFQABACAAAEQASAOAYAZIArAwQBOBnArCBQAqCCAECYIAAAWQAAD9hdDUQhSCkhrBYQh5BviiA5QijA4jEAAQhrAAjlgrgArVH1QgSA0gPBVQgWB8AABfQAAB4BlBHIA6AhQBSAlCGAXQDIAyB6AAQF0AADljQQBqhfBFiSQBYiwAAkGIAAgWQgJkiiQi5QgigwgugoQiAh0i9grQgLAAgHgHQgHgIAAgMQAKgbAXAAIBNAAQArAFA9AAQBMAAA3g3QAvgnAVg4QAOgnAAgpQAAgmALhHQAQhrAAg0QAAgpgPgnQgPgngbgdQg1gxhJAAQiBAAhiAFIjWAGQh9AAhigGQh5gFhnAAQgxAAguAeQgXAOggAgQg2AugRBFQgOAjAAAlIADFpQAACfACDFIAAAWIgBAdIgBAqIAABtQAAAhALArIAFAQQAZA6AuAiQAvAiA5AAQAWAAAtgHIBegPQB0gWAaAAQB+AABMAnQASAHAJAJQAUAPAIAQQAKAXAAAtQAAA3gPAiQgOAggfAVQhJA3iRAAQhiAAhzhCQgngdhCgmQg5gggVgKIgWAAQhqAQgpCJg");
	this.shape_289.setTransform(8.5958,1.0481,0.1276,0.1276);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#2F2C2D").s().p("AmhSxQiNgfhWgiQghgPgkgYQhIgygghLQgWg1AAg5QAAhTAZiTQANhOAUhGQAghnBBgyQArggAzgGIAyAAIAFAAIAFAFIBDAkQBFArA1AfQBmA8BRAAQB2AABAgsQAUgPAIgQQALgXAAgsQAAgagFgLQgEgHgIgGIgIgFQgFgDgDgDQgsgbiIAAQgmAAhdALQhuAWg7AAQhQAAg8goQg8gngehKIgIgWQgKgogEg6IAAgsQAAgrADgWIAAhdQAAjFgDifIgDlqQAAgmARgxQAbhSA3g3QAngnAggUQA9gnBAAAQAsAAC3AKQBjAGB3AAIDWgGQC3gKAvAAQAsAAAsATQArATAhAhQAkAgAVAyQAUAyAAA2QAAA2gRB0QgLBHAAAhQAAAugSAwQgZBEg6AzQhMBHhWAAQBdAtA/A7QABAAAAAAQAAABABAAQAAAAAAABQABABAAAAIADADQAbAYA6A/QBNBmAqCEQApCCAECWIAAAWQAAEPhdDCQhHCWhzBrQjzDbmPAAQiVAAi7gsgAqLF9QgzAngZBRQgSA4gMBRQgYCSAABOQAABwBoBKQAQALAmAWQBKAgCNAiQDaAsBtAAQFzAADmjQQBzhnA5iKQBai1AAkBIgCgWQAAiLgoh6Qgnh4hLheQgVgag3g+QiIhwi2gpQgcgKAEgXQACgNAIgHQAIgIAMAAIBMAGQAYAAAjADIAwACQBGAAA7g8QAwgnAVg4QANgkAAgmQAAgJAEgcIAKhOQAQhrAAg0QAAgpgPgnQgPgngbgdQg3gxhHAAQiEAAhiAFIjWAGQh6AAhigGQh2gFhrAAQgxAAgvAeQgaAQgeAeQgaAYgTAgQgSAdgJAeQgKAkAAAjIAAFqIAFFkIAAAbIgBAZIgCApQgCAWAAArIAAAsQAAAVADAVIAHAnIAGALQAYA9AvAhQAvAgA8AAQAVAAAmgHIBmgPIBggMQAhgEAKAAQCIAABEAhQAHACAJAIQAIAGAEAAQASAQAIARQAMAZAAApQAAA2gRAkQgOAeggAbQhJAyiOAAQhlAAhzhCQhMg0hog0IgOgGIgLAAQgxARgXARg");
	this.shape_290.setTransform(8.8894,1.3289,0.1276,0.1276);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#079248").s().p("AhsEyIiNgoQhXgYgyAAQiYAThsA0QgDiUAAi5QAAgoAOglQBEAsAkATQA7AgA1AOQBdAkAdAEQBFALA0goQBJgpBUheQAvg1BVhrQAIgQARgLQAmgGBlAAQBmgLB+AAQBUAAA9A9QhcAZg2AZQhMAkg0A4QgQAYgoA1QgpA1gSAcIgvBjQgdA8gcAbQg7BAhHAQQgYAGgbAAQgmAAgugLg");
	this.shape_291.setTransform(8.2448,-10.4605,0.1276,0.1276);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#32ABDF").s().p("AsVFlQgVgwAAg2QAAhHAYiaQAThoAPglQAYhXA4guQAmgfAugGIAsAAIBDAkQBPArAqAeQBpBCBcAAQCBAABGgxQAZgSAMgaQAPgfAAgtQAAgkgKgTQgEgIgOgOQgDAAgGgDIgNgIQAsgsAtgbQAxgdAqgEQAnAAAqAOQAaAJA3AaIBtAhQBIAVAjAMQCAAuBFgNIAOAAIAAAVQAAEEhaC8QhDApgoAUQhgAzgxARQhUAghFgIQgzgFhOglQhYgpgmgJQi+gyjTARQhGAHhHAvQg3Amg6BDQg2A+gvBFQhBgrgdhEg");
	this.shape_292.setTransform(8.5927,8.7352,0.1276,0.1276);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00A79D").s().p("AIUDUQgjgMhIgVIhtghQg4gagZgIQgqgPgnAAQgrAEgxAeQgsAagrAsQhCghh+AAQg3AAhSARQiBAWglAAQhDAAg3gnQg1gmgchCIgCgFIgDgLQgJgegFg5IAAgsQBdgsBxgmQB4gnBjgKQB1gMBzAXICrArQBoAaBEANQBSATBYgnQBIggBRhKQBMBgAqB8QAqB9ABCTIgNAAQgQADgTAAQg/AAhjgkg");
	this.shape_293.setTransform(9.467,1.5207,0.1276,0.1276);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#2377BA").s().p("AmnC3QiTgZhOgoQgNgGgugbQAuhFA3g+QA5hDA3glQBIgvBFgHQDUgRC+AxQAlAKBZApQBNAlAzAFQBGAIBTggQAygSBfgzQApgTBCgpQhCCUhyBiQjsDbmDAAQh4AAjQgyg");
	this.shape_294.setTransform(8.7522,13.627,0.1276,0.1276);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#006739").s().p("AgvC3QgdgEhegkQg0gPg8ggQgjgThFgsQAKghAVghQARgcAfgkQAbgeAhgWQA2gkA7AAQAaAAA+AEICJAHQA4AABKADIBcADIBKAAQgRALgIAQQhVBrgvA0QhVBehJAqQgpAggzAAQgNAAgOgDg");
	this.shape_295.setTransform(5.0634,-12.1328,0.1276,0.1276);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#34B475").s().p("AqnHqIAAhdQAAjFgDifIAAgbQBsg0CZgSQAyAABWAYICNAnQBPASA5gNQBGgPA7hBQAdgaAdg8IAuhjQATgcAog2QApg2APgXQA1g4BLgkQA2gZBcgaQAhAiASArQASAsAAAxQAAAxgRBzQgLBWAAASQAAAtgQAsQgYA8gyAwQhEA7hVABQhoAAhQgGQC6AoCRB3IAAAFQAvAoAjA2QhRBJhIAgQhYAnhSgSQhEgNhogbIirgrQhzgXh1AMQhjAKh4AoQhxAlhdAtQADgsAAgWg");
	this.shape_296.setTransform(8.7011,-6.6391,0.1276,0.1276);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AnJV5QhngYgygOQhHgWgvgWQg9gbgpgcQhmhKg3hoQg4hoAAh7QAAhoAcieQARhxAVg/QAlh7BRhVQgDABAAgMIgZg2QgThPAAhAIAAh9QAAgxADgQIAAgRQgDjFAAifIgDjEIgBhgIgChKQABg5AbhbQAjh3BhhkQCeieC4gBQAuAADBALQAzAABGADIBXACQAmAAAcgFICIAAQBjgLCOAAQBYAABOAhQBRAiA+BBQBDBCAhBUQAjBVgBBiQAABCgQCEQgLA2AAARQAABCgTBFQgbBfg9BNIAXAZIAYAdQBiCAA1ChQA1CgAEC5IAAAWQAAE0huD1QhaC+iWCFQiVCIjDBEQjEBGjtAAQiQAAjmgyg");
	this.shape_297.setTransform(8.6629,1.2236,0.1276,0.1276);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#D1D3D4").s().p("AnVV5QiLgch4gwQgsgTg5gqQhnhGg4hpQg5hrAAh7QAAhQAbi2QAOhKAYhgQAtiGBLhQQgCgFgDAAIgWg8QgLgxgKhYIAAg7QgBgaAGgoIAAhYQAAjFgFiZIAAlvQAAhSAVhCQAoh4BehiQCbifCyAAQCVAABiAFQBdAGB1AAIDNgGICCgHQBCgEAoAAQBWAABTAjQBQAjA/A+QBBBBAkBXQAjBXAABfQAABXgWBuQgFA2AAAWQAABCgUBCQgcBdg9BMQAQARAeAmQBjCEA2ChQA2ChADC0IAAAcQABEzh0D1QhaC9iRCBQkpESnfAAQi2AAjPgyg");
	this.shape_298.setTransform(10.654,3.1796,0.1276,0.1276);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFCFD").s().p("AmCDyQgPgZAJgrQAah6C/iXQB/hlCFglQBrgeBeANQBNAMAaAeQAZAeg6AEQlqAdipC5QghAkhBBjQguBGglAQQgFACgEAAQgMAAgJgRg");
	this.shape_299.setTransform(10.193,-7.5797,0.1276,0.1276);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#2F2C2D").s().p("AmQR1QiehbhuibQg/higghNQhxj6AAlQQAAhhALhoQAxlvDWkoQA4hLAagdQFhmaH/AAIAmAAQBFAMA0AvQA0AwAYBJQAoB9APAyIADALIACAGQASA2AEAQQAGAXAAAbQAABXgwBJQg0BQhWAXQBkA7BWBZQA/BEAjA/QBwDBAAEgQAAB7gQBrQgnEQisDHQjxERmJAAQjwAAiwhogAncsWQgtAtgjA2QjMEcgtFZQgOBhABBjQAAFHBrDtQAqBfAyBFQBeCNCcBZQCoBjDZAAQC2AACVhBQCVhBBuiAQCcisAvkPQAThjAAh4QAAkJhwi3QgthJgwgvQhyiCiXgzQgYgJAFgYQgBgIAIgHQAIgHAMAAIAmAAQBdAAA6hGQAzhAAAhVQAAgXgCgOQgEgVgPguIgGgLQgFgVgSg2QgUg9gMgnQgUg9gnglQgogkg2gIIgbAAQnkAAlQGKgAhoHvIgWgbQg6hkAAiNQABhSAggbQA3gyCDAAQAzAAAiASQAcAOAVAdQAxAxAABiQAAA/gKA1QgNBCgaAlQg0A9hrAAQg8AAg2g9gAhJCNQgfAJgFALQgIAIgFAVQgEATAAASQAAB+AxBSQAEAHAGAGIAJAJQAhAmAjAAQBHAAAsggQAhgyAAiJQAAhMghghQgOgTgSgIQgXgLgjAAQhDAAgpAMg");
	this.shape_300.setTransform(10.5593,1.0481,0.1276,0.1276);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#2F2C2D").s().p("AmOR7QiehahxiiQhChvgbg7Qhzj/AAlLQAAhcARhzQAUi0BBimQBCinBqiPQAdgqA1g+QCxjQDchpQDXhnD8AAQAbAAALAFQBFAIA0AvQAzAuAZBKQAgBfAXBQIAFALIAAAGQATAwAEAWQAFAVAAAdQAABagwBJQgzBOhXAbQBkAwBWBfQA7BFAnA+QByDNAAEUQAABrgTB7QgWCNgxB3Qg4B5hSBaQjrERmRAAQjnAAi1higAhmw+QjQBkioDEQg4BFgUAdQjKESgyFpQgKBdAABnQAAFBBqDuQAdBJA+BbQBsCXCPBPQCkBjDaAAQFtAADjj8QCii+Anj+QATheAAiCQAAkMhvi0Qg0hSgpgmQhsh8ibg0QgWgPAAgRQACgNAIgHQAHgIAKAAIAnAAQBgAAA5hEQA1g+gBhZQAAgUgDgRQgEgRgSgyIgFgLQgGgbgQgwIgghkQgWg6gmgmQgpgmgygIIgeAAQjvAAjOBigAhnH1IgVghQg5hbgBiQQABgyAJgeQAJgaAOgJQAsgsCOAAQBXAAArA3QAyAxAABiQAACegvBDQg3A3hnAAQg/AAg0g3gAhJCNQgdAJgJALQgNAOAAA6QAAB+AxBMQAEAHAFAGIAKAJQAgAmAkAAQBTAAAdghQAQgYAKgwQAJgxAAhBQAAhMggghQgXgUgKgFQgXgNgiAAQhEAAgqAMg");
	this.shape_301.setTransform(10.8529,1.3289,0.1276,0.1276);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#D6DE3B").s().p("ApgEGQAwhrBDhJQAZgcAwg4QAqgwAhgZQBZhDBrAcQBFAXBYAxICVBQQBIAVBIg/QApgkBFhVIBkh0QA6hEAog0QgrERijC6Qh0CBiaBDQibBDi7AAQjjABishkg");
	this.shape_302.setTransform(13.4376,11.9836,0.1276,0.1276);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#F8EB48").s().p("Aq8GfQg6hRgmhUQBUiUB3g8QBHgoB/AFQBIACCHALIA0AAQAUAaAaALQATAHAZAAQBgAAAogsQApg4AAiRIANgOIAMgNQB8iWAtg6QBhh7ARgSQBRhWBKgOQAegGA5ALQB0C5AAEYQAABxgTBvQgoAzg6BFIhkBzQhFBVgpAkQhIBAhJgUIiUhRQhagyhEgXQhqgchZBDQghAagqAvQgwA5gaAcQhCBJgxBsQighihkiUg");
	this.shape_303.setTransform(11.2836,6.9032,0.1276,0.1276);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FAAF4C").s().p("AsYDWQAAhoAQhjQBSgiBNgZQA9gZBBAPQARADBtAoIB8BEQBQAmAygOQB5gkB8igQBVhuBSikQA7hyBlhoQBRhTB+hdQAQAwAFAWQAEAUAAAZQAABig7BGQhCBOhsAAIgmAAQCZAwB+CKQAhAjARAYQAaAiARAhQg5gLgfAGQhJAOhRBWQgSAShgB6QgtA6h8CWIgNANIgMAOQAAhbgpgoQgUgWgUgLQgegRgqAAQhsAAg7AnQgHAHgFARQgJAaAAArQAACDA3BdQADAGAPAVIg0AAQiHgLhHgCQiAgFhHAoQh2A8hUCUQhtj9AAlBg");
	this.shape_304.setTransform(9.8445,0.0333,0.1276,0.1276);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#F59331").s().p("Ai7JGIh8hFQhsgogRgDQhCgPg9AZQhMAZhSAjQAnlVDVkwQA3AGBzAbQBwAbA+AGQBNAAAxgTQAxgTA2gyQA5g2B1hnQBihdAzhZQAig2AahZQA8ANAtArQAtArAaBCIAgBkQAPAvAHAcQAAAEACADQAAABABABQAAABABAAQAAAAABABQAAAAAAAAQh+BdhRBTQhkBng7ByQhSCkhWBuQh7Chh5AkQgOAEgQAAQgrAAg6gcg");
	this.shape_305.setTransform(9.1489,-6.7203,0.1276,0.1276);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#EF5B33").s().p("Ak0D8Qhygbg4gGIAogxQAYgdASgUQCtjJDThmQDThmD3AAIAhAAQgaBZgjA2QgzBZhhBcQh1Bng6A2Qg1AygwATQgyAThNAAQg+gGhxgbg");
	this.shape_306.setTransform(9.2574,-10.8671,0.1276,0.1276);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AnzUnQjHhriNjIQhIh0grhbQiAkiAAl6QAAiBANhkQApk2CUkOIgOgGIARgGQA1hXA2hNQARgZAcgiIAwg9QDPjuEBh6QEBh6ErAAQAxABAWAFQB8AUBeBSQBfBTAqB/IADALQAZBHAfBjIAAAFQATBCAGAlQAIArAAAzQAACMhABwQAKAKAGAMQA4A8A9BiQCZEJAAFAQAABxgZCbQg+FTjCDsQiUCljJBXQjKBYjtAAQkdgBjkiDg");
	this.shape_307.setTransform(10.6454,1.2236,0.1276,0.1276);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#D1D3D4").s().p("AnyUtQjJhziIjFQg8hUg2h3QiEkeAAmDQAAhjARiCQAqlFCQj/IgLgGIANAAQAfg9BMhtQAggsA9hGQGlnoJXAAQAZAAAsALQB9ARBgBTQBUBSAsB9IACALQAwCRAHAeIADAAQAXBGAIAhQAKAtAAAxQAAB9hHCEIAQARQBAA/A7BlQCXD0AAFVQAACXgWB1QgdClhDCQQhECShmByQiKCojJBWQjHBWjzAAQkmAAjZh+gAgNE4QADAGAHAEIALAGQABgEADgBIAGAAIgQgWQgJALgGAAgAAjEtQAFAAAAgFIgFAAQgFAAgGgFg");
	this.shape_308.setTransform(12.6175,3.1796,0.1276,0.1276);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFCFD").s().p("Al5CoQgBAAACgTQAOiLAMgsQAThDAwgbQAvgbBvgIQBKgFDkAAQDwAAgvAiQgRANgxAMQgvALgjABQlbAOisCbQgpAmgeAvQgIAMgBAAIAAgBg");
	this.shape_309.setTransform(7.4512,-9.7977,0.1276,0.1276);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#2F2C2D").s().p("AlMTWQgugGgigOQgggHglglQgjgegVgtQgdg7AAhKQAAirBFjqQAchxBBixQAPgqAhhRIA4iMQBAiZBvj7QADAAADgLQgJAAgNADQgNACgGAAIgcAAQg5AIinAPQg/AFhuAAQhwAAhGhUQhAhMAAhnQAAh/ALiIIAQhXQAbh7BAhEQBAhDBcABQB4AADmAQQBBALBjAAQCWAGHRgBQBEAAA6AoQA6AnAgBGQANAPAEARQAQAnAGAyQAFAsAABFIAABjQgGAygaAyQgTAkgyBIQhvCthLDCQhGCkgzC0QgSA5gXBSIgmCHIggCIQgSBNgKA3QgYBvgJBsQgIBCgZA8QgZA2grAmQgsAng3AQQhBAXihAAQhlAAg5gIgAhMnTQAOAAALALQAMAJgJASQAAAGgDAFQgDAGAAAFIgQAhIhcDOQgyB0ghBSIg4CMQggBPgQAsQgvB4guCkQhCDnAACeQAABoBCA9QAZAZAbAHQAbAOArAGQA0AIBegBQCcABA2gXQArgMAjgfQAjggASgsQAKgUAGgaQAEgVAFgmQAIhFAeibQAYh/AkiTQAZhjA0ivQBAjRA7iMQBejnBkiTQAuhEARggQAVgqAEgnQADgVAAhIQAAhwgZhEQgGgWgFgFQgdg2grgeQgsgggzAAQnRAAiWgFIhmgFQgxgCgSgEQjmgQhzAAQiRAAgvDQQgGAZgFA+QgLBjAACZQAABQAwA7QA1BABVAAQBoAABCgGQChgOA9gHIAeAAQA5gBAcgFg");
	this.shape_310.setTransform(10.3495,1.013,0.1276,0.1276);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#2F2C2D").s().p("AlNTWQgrgEglgKQgegOgpgeQhShRAAiFQAAieBCj3QAbhiBCjAQAag7BOjMQAihQA0h2IBcjOQADAAAAgFIgnAAIgbAFQh/AIhiAIQhBAGhrAAQhyAAhGhRQg+hKAAhnQAAiNALh5QADgqAKgzQAdh8BBhCQA/hDBdgBQCPAADMAXIBDACQA4ADAqAAQEwALE5AAQBCAAA5AmQA6AmAjBCQANAQADARQAcBNAAB9QAAAtgDA2QgDAzgbAzQgMAWg4BUQhgCQhbDfQhFClgzCzQgeBdgxC6QgaBbgiCsQgXBwgNBqQgEAmgIAgQgGAWgMAiQgZA5grAmQgrAkg4ASQhBAVikAAQhgABg8gIgAhJnTQAEAAAHADQAHAEAEAEQAIAQgGALQgCAJgFANQgLAWgDALQhxD9hBCXIhoEHQgkBkg5C5QhCDlAACfQAAA7AXAxQARAkAaAaIA2AgQBCAXCUAAQCeAAA3gXQBbgZAohZQARgsAFhCIARhqQALhFAKgxQALg9AyjPQAwi6AfhdQAqiWBRjIQBTjNBtitQAvhFARgfQAWgqABgmQAFgWAAhIQABhzgZhBQgCgHgEgGIgIgPQgbg1grgfQgtgegxAAQnRAAiYgGQhNgGhdAAQjJgViNAAQhSgBg0BGQgpA1gRBWQgFAbgJA9QgLBiABCeQAABQAvA4QA2A9BXAAQBoABA/gGQAmAABCgGIB4gKIAcgGQA8ABAbgGg");
	this.shape_311.setTransform(10.6654,1.2938,0.1276,0.1276);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#2377BA").s().p("AjeDyQgtgHgggOQgWgGgmggQAFhYAUg2QAdhuB0hHQBWgzCRgjQA+gOBZgGQA0gCBiAAQADAAAGADIAIADQgWBjgOB9QgJBJgVAoQgVAwgmAjQgpAlgwAMQgdAKgqAFQg4AHhbAAQhfAAg3gHg");
	this.shape_312.setTransform(9.0412,13.3812,0.1276,0.1276);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#32ABDF").s().p("AmqC6QAAiYBCj3QCGhrCDgkQCigtBhBaQAuAsAVAKQAlATAsgSQAzgNBAg1QgsC6gQBSIgIgCQgGgDgDAAQhiAAg1ACQhYAFg+AOQiRAkhWAyQh0BHgdBvQgUA1gFBZQhKhEAAh2g");
	this.shape_313.setTransform(8.955,10.972,0.1276,0.1276);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00A79D").s().p("AmQBSQAPgqAhhQIA4iMIBAAaQAkAPAVADQBSAWA9gEQBEgEBDgkQCihGDBhuQAMgLAYgRQhPDKgpCPQg2CxgaBlQg/A1g0ANQgsASglgTQgUgKgugsQhhhaiiAtQiDAkiHBsQAYhgBFi9g");
	this.shape_314.setTransform(10.6463,3.5626,0.1276,0.1276);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#34B475").s().p("AlbIlQgUgDgkgPIhAgaQA7iRB0kEQADgMAIgRIALgZQhMALgnAAQgyAGhFAEIhpAGQA/ilBfglQAzgUBdAkQAzATBUAlQBpAiBOALQBpAOBOgVQBCgYA8hHQAjgoA6hUQAkhCAthiIBLilQALAWADALQAbBGAAB6QAABHgFAWQgEAtgYAvQgQAegxBLQhsCrhRDIQgZARgLALQjBBuiiBGQhDAkhEAEIgSABQg3AAhHgTg");
	this.shape_315.setTransform(12.8321,-5.1936,0.1276,0.1276);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#006739").s().p("AhND6QhSgxgkgTQgTgLg+gyQg7gxgmgVQADggALg3QAWhrAzg8QA5hEBZAAQCBAADXAWIBFADQA5ACArAAQgcA0hcCiQhACAgWAjQg+Bng8AcQgSAIgWAAQgjAAgvgWg");
	this.shape_316.setTransform(5.0237,-11.0598,0.1276,0.1276);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#079248").s().p("ArXE/Qg3hBAAhcQAAiUALhtQAmAVA7AxQA9AxAUAMQAkATBSAwQBKAkAxgVQA8gdA+hmQAWgjBAiBQBciiAcgzQCIAFHfAAQA6AAA0AlQAyAjAgA7IhLClQgtBhgkBCQg7BUgiAoQg8BHhCAYQhOAWhqgPQhPgLhogiQhUglgzgTQhdgkgyAUQhgAlg/CmQhCAFhoAAQhlAAg8hIg");
	this.shape_317.setTransform(10.107,-9.1887,0.1276,0.1276);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AluWhQhHgKg2gYQhDgYg+g1QhLhGgnhdQgnheAAhuQAAjEBMkCQAQhAAchVIA3ieQAbhMBNjEQAhhDANglQg0AFhYAAQi8AAiCiIQiDiHAAjCQAAi1AMhoIAQhtQAtjJB3huQB2hvCnAAQCbAADUAWIA+ADQAzADAoAAQBGAECbABIGBAAQB9AABsBGQBrBGA+B7QAQAhAFAWQAXA9AKA9QAMBFAABSQgBAfgFBUQgIBVgoBRQgZA0hABZQhQB4hUDLQhACigxClQgSA6gWBOIgkCFQgQA5gQBJIgaB/QgYB0gIBWQgLBlghBQQgtBhhPBFQhNBEhhAdQhnAhi4AAQh4AAhFgKg");
	this.shape_318.setTransform(10.4548,1.1885,0.1276,0.1276);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#D1D3D4").s().p("AlqWkQhGgKg5gYQg0gThPhAQhIhBgnhfQgoheAAhrQAAi+BKkOQAwijA1iPQBKi9AhhOIAVg0QANggAKgUIiJAAQi/AAiDiGQiEiFAAjBQAAidANiAQAFhGAMgnQArjJB4hxQB3hxCnAAQA2AABkAGIDUAPQAfAGB9AFIDeADQDIADC5AAQCAAABpBDQBqBEA9B6QALARAQAmQAmBsAACmQAABSgCAhQgIBUgoBRQgYAxg+BcQhbCHhMDCQhACYgxCqQg5DHgTBKQgsCvgOBNIgjDQQgIBhgkBOQguBkhLBFQhNBHhiAdQg0AQhDAIQhHAIhjAAQhzAAhGgJg");
	this.shape_319.setTransform(12.4109,3.1796,0.1276,0.1276);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFCFD").s().p("AE4DhQgfgOgog9Qg5hWgeghQiTihk9gaQgzgEAWgaQAWgaBEgKQBSgMBeAbQB0AhBvBYQCnCEAXBqQAIAmgNAWQgIAPgLAAQgEAAgEgCg");
	this.shape_320.setTransform(12.3599,-8.4862,0.1276,0.1276);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#2F2C2D").s().p("AjGTNQjkgqiQiAQhWhHhFh4Qh5jPAAkIQAAgsALhXQAjjFBmiOQAAgCgCgEQgDgEAAgGQgGgLgLghQhBiVAAi0QAAgKADgaQACgaAAgOQANifBDiHQA/iEBvhkIAFgEQA5gwBQgpQCvhXDlAAQCOAACEArQAtAPAvAaQAhARA4AjIBHA3QDdC0AqEeQALBXAAAbQAACxhNCzQgLAbghA3QAxA4AnBhQA8CbAACoQAAEcikDWQhBBLgnAiQjmDFlOAAQhyAAhjgQgAlkxOQhIAgg2AtIgGAFQhsBbg2B6Qg/B8gMCWIAABHQAACdA8CbQAEANALAaQAJAWAAALQAHAQgHAQQhnB5gkDEQAAAXgCAqQgDArAAASQAAD9BtC5QAcA2AgAuQAoAwAsAgQCTB6DGAgQBBALAiAEQA4AHAvAAQCaAACIgwQCFgvBshbQAegfA/hKQBJhdAmh2QAlh0AAiEQAAiwg3h9QgZhGg/hTQgOgOAJgTIAFgKQAhg3ALghQBHiqAAifQAAgPgCgiQgDgjAAgUQgViBg9htQg+hxhhhRQgpgfgegSQhHgyhdgmQh0gmiOAAQjTAAilBSgAhTIlQgjgMgZgZIgFgBIgGgFQgWgdAAg6IAAgsQAJghANgbQAEgJALgDQALgDAMAEICkBBQAAAGALAAQAFADAIAIQAJAIAFADQA3ApAAAZQAAAXgEARQgDAPgEAFQAAAFgGAGQgKAKgZAIQgiAJgzAAQg0AAgjgMgAh0GCQgFALAAAWQAAAZAGAOQAFAKAFAAIAGAGQAlAbBCAAQA3AAAVgLIAAgWQgKgLgRgLQgDgGgIgEIgLgGQhkgtgpgQQgGAGAAALgAB1loIgEgDQhcgjgxgfIgFAAQgxgggXgWQgEgEgBgFIAAgNQAAgLALgLQApgcBZAAQAhAAAdANQAVAKAQAQQAWASAHATQAEALAAARQAAAagCANQgCAUgHASQgJAQgTAAQgDAAgEgCgAgGnjIAFAFIAfAQQAfAQApARQAEgEABgFIABgNQAAgFgCgEQgEgFgLgIQgWgVgmAAIg2AAQALALAGAAg");
	this.shape_321.setTransform(9.1738,1.0481,0.1276,0.1276);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#2F2C2D").s().p("AjGTNQjjgsiRh4QhchTg/hyQg7hlgeh0Qggh4AAiBQAAgxALhYQAkjMBriBIgGgIQgCgFgDgDIgIgWIgJgbQgdhKgPhUQgQhTAAhSIAAhNQAMiiBEiIQA6iFB0hkIAFAAQBCg4BHgfQCqhdDqAAQCVAACCAxQBnAlBJAyQAbAWAxAhQBsBcBCB3QBDB6AQCKIAIA8QADAeAAAZQAACthMCxQgGAOgNAbQgOAcgGANQAtA8AmBdQA8CIAAC7QAAEZifDZQgpA3g/A2QjmDFlTAAQhqAAhrgQgAllxOQhKAhgzAtIgGAEQhqBcg5B8Qg4B+gNCXQgFAWAAAxQAACXA6CbQAEARAJAWQAJAWAFAQQAAAQgFALQhoB+gaC/QgKBcAAAnQAAD1BtDBQBJB8BHAzQCUB6DFAgQBBALAiAEQA4AHAvAAQCaAACIgwQCFgwBshbQA/g+AegqQCUi9AAkOQAAiwg3h+Qgohigwg2QgFgLgBgFQgBgJAHgIIAAgLQAYgeAUg0QBHiWAAiyQAAhHgFgnQgViAg9hsQg9hthihSIgigbQgVgRgQgKQhLg7hagXQhtgsiUAAQjUAAilBSgAiPIAQgGAAAAgGQgMgMgHgXQgIgYAAgcIAAgnQALgrALgWQARgSAVAHIBVAhQAvAUAgASQAFAAAFAFQAWALAGAGQAXANAPASQARAVAAATQAAAmgLAWQAAAGgGAAQgKAKgZAIQgiAJgzAAQhiAAgxgxgAhxF6QgDAFAAADIAAAhQAAAxALAAIAFAFIABAGQAdAWBKAAQBBAAALgLQAGgLAAgLQgDAAgHgHQgLgJgMgGQgLgLgLgFIhIgeQgsgSgZgNQAAADgDAGgAB3lmIgGgFIhXgiQgigPgPgLQgDAAgEgDIgEgDQg0gjgNgUQgIgEgCgFQgBgDAAgJQAAgLALgLQAhgWBhAAQAlAAAbAKQAUAHAUAQQATAVAFASQAEAKAAAQQAAAcgCANQgCAVgHAPQgIAQgUAAIgFAAgAgXnpQADADAGACIAIAGIAFAAIAgAQQAgAQAtARIAAgWQAAgLgLgLQgWgWgsAAQglAAgRAGg");
	this.shape_322.setTransform(9.4546,1.3289,0.1276,0.1276);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#EE6B95").s().p("AqGFUQgWgsgLgcQhBibAAinIACgjQADgZAAgLQAggVArgWIBLgnQBDgZBiAHQB+AKAagDQA6gHBSgcQAugRBcgjQCEglB+huQBQhICAiaIAjAaQAWAQAOANQDRCxArEQQgnBNggA0QgrBDgtAxQgrAuhRBLQhfBYghAgQgwA4gbAcQgxAygjAOQhJAjiBgdIhngZQg7gOgoAAQhwAJh+ApQiAAqhXA9QgYASg0AeQg7AigbARQAijJByiKgAgehuIgnANIAWAXQATARAYAOQAKAHAkAPIBgAmQALgrAAgRQAAgLgDgHQgFgLgOgOQgSgOgNgHQgXgMgcAAQgqAAghAJg");
	this.shape_323.setTransform(9.0014,-4.1597,0.1276,0.1276);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#9D2362").s().p("AmqC1QBaizCDhgQCZhwDIAEQA+AABUAsQBjA0AiAIQgvBDgzAqQhwBfiKAwQiJAxigAAQh4AAhYgWg");
	this.shape_324.setTransform(12.1573,14.009,0.1276,0.1276);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#D7225D").s().p("ApjF3QhdhZg5hhQAqhEAmg1QBIhUBYhNQBXhLBbg6QBNgvBBgIQgFALAAAbQAAAeAHASQAEANAKAKQAtAsBXAAQAwAAAdgLQAPgFAGgGQAEAAADgMQADgOABgXQAAgIgsgkQCzAkCQgeQBugkBkhTQBchNBBhkQA8CSAACmQAACIgoB4QgpB5hOBiQgigIhjg0QhUgsg+AAQjJgEiYBwQiDBhhaCzQjQggiZh/g");
	this.shape_325.setTransform(9.9109,9.5042,0.1276,0.1276);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EB307C").s().p("AsfEHQAAhYAFgmQAbgRA7giQA0geAYgSQBXg8CAgqQB+gpBwgJQAoAAA7AOIBnAZQCBAdBJgjQAjgOAxgyQAbgcAwg4QAhggBfhYQBRhLArguQAtgxArhEQAgg0AnhNQAFAhAABMQAAC2hHCeQgKAXgPAcIgYAvQA+BQAfBVQhBBjhcBMQhkBUhuAjQiQAfizgkQgFgGgWgLQhygxg3gWQgQAZAAAYQhBAIhOAvQhbA6hXBMQhYBMhHBWQgmA0grBEQhti3AAkPg");
	this.shape_326.setTransform(9.0014,2.7584,0.1276,0.1276);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#F4A5BA").s().p("AoPAfQA4iBBzhaIBBgwQAlgZAdgOQAzAKA9AVQAiAMBJAcIB1AnQBNAWAtgHQAwgGA9g8QAighA3g7IAAgGIAGgFQAnAOAvAaQAZANA6AiQh/CahRBIQh9BtiFAlQhdAjguARQhRAcg6AHQgaADh+gKQhigHhDAZIhLAnQgrAWggAVQAMigBCiBg");
	this.shape_327.setTransform(7.2879,-9.8524,0.1276,0.1276);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AjsWUQkRgwi3igQh2hehgidQiOj8AAk9QAAg3ABgbQACguAIgkQAYiuBViaQg8i8AAizQAAg8AGghQAMjCBNikQBOilCLh7IAeghQBahCBPgrQDihuEPAAQCvABCqA7QB6AsBnBIQBIAwAVARQCIB0BTCVQBVCXAYCwQALBtAAAmQAADnhYC+QAbAtARArQBHCsAADjQAACxg0CgQg0CfhiCAQg6BJhKBAQkcD8mgAAQiNAAhugXg");
	this.shape_328.setTransform(9.244,1.2236,0.1276,0.1276);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#D1D3D4").s().p("AjqWVQkeg1izibQg+gxgwhAQg2hAgohGQiUj1AAlJQAAg3ALhuQAkjHBPiAQhCitAAi8QAAgRADghQADghAAgQQAQjBBNiiQBOiiB+h7IAAgGIAmgbQBMg8BjgyQDfhzETAAQCvAACkA9QBpAiB9BQQAyAiAmAmQCJBtBUCZQBSCVAZC0QAHAlACAnQACAYAAAwQAADghXDAIAXAuQANAZAIAVQBMC8AADTQAACug1CfQg1ChhmCCQhFBYg/AxQiKB7izA+QixA+jOAAQiIAAhugWg");
	this.shape_329.setTransform(11.2383,3.1796,0.1276,0.1276);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFCFD").s().p("AFgEBQglgQgmhFQhAhjghgkQioi4lqgfQg7gEAZgeQAageBNgLQBegOBrAeQCFAmCABlQC2CXAaB5QAJArgPAZQgJARgNAAQgEAAgFgCg");
	this.shape_330.setTransform(12.3662,-7.699,0.1276,0.1276);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#2F2C2D").s().p("AlRTdQhOAAg+gvQg+gvghhWIgYhSIgUhCIgQg3IgUg/QgIgaAAgUQAAhbAwhHQA0hNBXgYQhagxhQhYIgIgFQgGgDgDgDQibijg1kMQgLhuAAhCQAAjoBCi9QBFiuBlh0QB3iECihEQChhEDBAAQBLAAAnAFQCXAQCCBFQB4BEBjBzQAjAkAZApQC4ECAYF5QAAASADArQADAqAAAXQAAB6gcCRQghDEhSCuQhUCziBCSQgWAWgGALIgNALQiYCqjBBeQi7BcjYAQgAolJcQgyA+AABXQAAASAFARIARA0IAQA8IAUA/IAYBQQAZBGAvAnQAvAnA9AAQAJAAAPgDIAUgDIAWAAQGXgYE1lGIAQgRQAEgCAHgJQAGgIAFgDQD6kwBBlxQAVhvAAiRQAAhSgFgnQgYlkioj7IgegmQgQgUgOgNQhbhuhvg9Qh5hAiQgMQghgFhGAAQi3AAiUA+QiXBAhtB+QhXBkhICiQhCC2AADfQAABYARBSQAqDoCVCnIALALQByByCPAyQARAIAAAZQAAAIgIAHQgIAHgLAAIgnAAQhgAAg4BGgAhyhWQgZgNgWgXQgGgIgIgRIgOgZQgWg2AAgxQAAhBALg1QAOhEAeghQAng3ByAAQAmAAAcAPQAkAUAiA0QA8BnAAB/IAAAhQgGBDggAVQg6Ash6AAQgyAAgngTgAhwnIQgRAVgKAvQgLAxAABAQAAAwAQAiQAKAVAGAGQAOATATAIQAXALAlAAQA/AAAqgLQAdgIAIgIQAIgIAEgPQAEgNAAgNIAAgcQAAh4gxhSQgWgmgYgNQgQgJgZAAQhWAAgXAmg");
	this.shape_331.setTransform(9.9987,1.0353,0.1276,0.1276);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#2F2C2D").s().p("AlLTeQhTAAg+gwQg+gvgdhWQgqh3gHgXIgQg9QgOgugDgPQgFgVAAgbQAAhYAuhIQAzhPBZgYQhYgshXhYQgDgFgFgFQgDgDAAgDQinivgpj7QgRhaAAhaQAAjwBIi2QA5ikBwh5QDxkRGKAAQAPAAAlACQAlADAUAAQEvAgDKDsQAJAOATAZQATAYAIAOQBaB/A1CiQA1ChAMC5QAAATADAqQADAqAAAXQAACWgWB1QhBGGkNE3IgsAsQk9FWmtAZgApSukQhjBqg8CiQhBCzAADdQAAA8ALBuQAnDlCYCpIARALQBnBvCUA1QAJAEAGAKQAGALgEAIQAAAIgHAHQgHAHgIAAQgRAGgVgBQhkABg3BEQgwA6AABXQAAAXACANQADARALAjIARBBQAaBPAXA6QAZBGAvAmQAvAoA+AAQAbAAARgGIAQAAQDPgMC0hWQC4hXCTifIAhgsQD7kkBCl9QAWhuAAiTIAAh5Qghlqikj1QgLgMgTgXQgTgagLgKQirjVkjgiQgmgFhBAAQl0AAjbD8gAhvhWQgVgLgYgZQgLgLgWghQgQgwAAg9QAAikAxg4QAVgZAngOQApgPA0AAQAmAAAcAPQAkAUAiA1QA8BnAAB+IAAAhQgGA9gbAbQgWARgmALQg1AQhIAAQgyAAgkgTgAhwnIQgRAWgLAuQgLAxAABAQAAAxARAhQAEALAFAHIANAOQASATANAHQAYANAgAAQA+AAArgPQAbgJAKgJQAIgIAEgPQAEgNAAgNIADgMQADgKAAgGQAAhmg3hkQgXghgXgNQgRgJgYAAQhUAAgZAhg");
	this.shape_332.setTransform(10.2795,1.3129,0.1276,0.1276);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#EF5B33").s().p("AlPCRQArg2AXgWQAngnArgWQAsgQBOgoQBTgrAjgPQA/gZBkgQQB5gUAfgKQk5FLmmAYg");
	this.shape_333.setTransform(11.2336,14.2396,0.1276,0.1276);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F59331").s().p("Ao6H2Qg2gsgZhOIgihmQgQgzgKgWQAAgFgCgIQgDgJAAgFQBthOCOgqQBvgUBDAAQBcABBWAeQBNAgA2gkQAbgSBHhXQA6hEBDhiQAmg3BLh2QAzhEBegoQBKggBtgTQAGAAAKgDIALgCQhBGBkCEqIgkAsQggAJh5AUQhkARg/AYQgiAQhTAqQhPAogsARQgrAXgnAmQgWAWgsA2IggAhQgLAAgWADQgWADgLAAQhGAAg2grg");
	this.shape_334.setTransform(11.3964,9.6286,0.1276,0.1276);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FAAF4C").s().p("ArbHyQgFgTAAgWQAAhiA5hGQBAhOBtAAIAmAAQiMgvh7h7QA3hRA7g1QBHg/BTgaQBsgnBcgNQBmgOBiAQQA7AOB4ApQB7AqA1ANQA2AHAngpQAagWAvhBQBGg7BEhOQAqgxBThtQALgLAAgGQAFAnAABXQAACSgWB1IgLADQgKADgGAAQhtAShKAgQheAogzBEQhLB1gmA4QhDBig6BEQhHBYgbASQg2AkhNghQhWgehcAAQhDAAhvATQiOAqhtBPIgRg6g");
	this.shape_335.setTransform(11.3964,4.807,0.1276,0.1276);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#F8EB48").s().p("AqAJ1QhOhQgxhqQgyhogUh4IAhgRQA+gWB7gzQBvgpBcgBQA7gDBFAMQApAIBTAWQADAJAIAMQAJANABAEQAYAXASAKQAeAQAsAAQBDABAygSQAKgCAkgTQAIgLAFgKQAJgTAAgfQAVgNAcgXIAsgjQA3gwAsh8QA9irAKgSIBGicQAwheArhDQAMANARAXIAeAoQBYB9AyCcQA0CfAHCyQAAAGgLALQhTBtgqAwQhDBPhGA7QgvBAgaAXQgnApg3gIQg1gMh6gqQh5gpg7gOQhhgQhmAOQhcAMhsAnQhUAbhHA/Qg6A1g3BSg");
	this.shape_336.setTransform(10.0338,-2.912,0.1276,0.1276);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#D6DE3B").s().p("ArNF/QAAjXBHjDQBWgJBDAPICOAkQBcAXA+gQQA+gHBDg8QAtgoA3hJQBKhqAshTQA2hoAehrQEzAiCxDaQgqBDgxBeIhGCcQgJARg9CsQgsB8g3AxIgtAjQgcAWgUAOIAAgcQAAhCgNg0QgNgzgdgyQgagsgfgQQgVgLggAAQhgAAgiArQgsA0AACYQAAA8ARAgQhTgWgpgHQhGgNg6AEQhcAAhvApQh7A0g/AWIghAQQgQhSAAhdg");
	this.shape_337.setTransform(8.2883,-7.2453,0.1276,0.1276);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#8EC549").s().p("AiREdIiOglQhDgPhVAKQAuiWBwiAQDvkHF1AAQArAABDALQgfBrg2BnQgsBShKBqQg3BJguAoQhDA9g+AHQgYAHgfAAQgrAAg3gOg");
	this.shape_338.setTransform(5.6558,-10.6966,0.1276,0.1276);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AlRWqQiMAAhxhRQhyhSgxiKIgLgWQgJgagRg4QgOgtgJgVIgQg8QgSgygHgeQgIgmAAguQAAiOBHh0IgQgQQhnhvhBiGQhBiGgZiXQgLgwgDg7QgCglAAhLQAAkXBNjWQBbjbB1iDQCti+DshVQDvhWEUAgQDAAVCcBVQCgBUB7CQQAqAqAjAzQDPEnAiG8QAFAsAABdQAAC3gbB7QhKG+kwFhIgxAxQl3GQn7Ahg");
	this.shape_339.setTransform(10.0689,1.2209,0.1276,0.1276);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#D1D3D4").s().p("AlOWqQiQAAhwhPQhwhQg1iPIgLgVQgIgegQgyQgPgugFgWIgWg3IgUhVQgHgpAAgsQAAiOBBhzQgFgFgLgGQjLjtg2kqQgRhrAAhwQAAkJBSjfQBSjYB+iGQCqjCDrhWQDvhXEYAhQF0ApEEElQAtA1AaAoQDWE6AgGvQAAAVADAsQADAsAAAWQAACMgbCmQglDchhDMQhgDJiUCuIgxAxQlvGPoJAigAgLk4QgOAHgIAPIAJADQAHACAGAAQAVgLAQgLIgNgIIgNgIg");
	this.shape_340.setTransform(12.0601,3.1792,0.1276,0.1276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},12).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209,p:{scaleX:0.1277,scaleY:0.1277,x:8.5725,y:-13.1046}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_329},{t:this.shape_328},{t:this.shape_209,p:{scaleX:0.1276,scaleY:0.1276,x:8.6313,y:-13.1283}},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-19.1,60.2,41.900000000000006);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"stp":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol12();
	this.instance.setTransform(0.05,0,1,1,0,0,0,1.9,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:3.8,regY:5.8,rotation:16.3636,x:2.95,y:-3.35},0).wait(1).to({rotation:32.7273,x:3.8,y:-2.3},0).wait(1).to({rotation:49.0909,x:4.3,y:-1.2},0).wait(1).to({rotation:65.4545,x:4.5,y:0.05},0).wait(1).to({rotation:81.8182,x:4.3,y:1.3},0).wait(1).to({rotation:98.1818,x:3.75,y:2.4},0).wait(1).to({rotation:114.5455,x:2.9,y:3.3},0).wait(1).to({rotation:130.9091,x:1.85,y:3.95},0).wait(1).to({rotation:147.2727,x:0.65,y:4.3},0).wait(1).to({rotation:163.6364,x:-0.6,y:4.35},0).wait(1).to({rotation:180,x:-1.75,y:4},0).wait(1).to({rotation:196.3636,x:-2.75,y:3.35},0).wait(1).to({rotation:212.7273,x:-3.6,y:2.3},0).wait(1).to({rotation:229.0909,x:-4.1,y:1.2},0).wait(1).to({rotation:245.4545,x:-4.3,y:-0.05},0).wait(1).to({rotation:261.8182,x:-4.1,y:-1.3},0).wait(1).to({rotation:278.1818,x:-3.55,y:-2.4},0).wait(1).to({rotation:294.5455,x:-2.7,y:-3.3},0).wait(1).to({rotation:310.9091,x:-1.65,y:-3.95},0).wait(1).to({rotation:327.2727,x:-0.45,y:-4.3},0).wait(1).to({rotation:343.6364,x:0.8,y:-4.35},0).wait(1).to({rotation:360,x:1.95,y:-4},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AgqEXQjSgSiQijQgXgZgQgYQhah7gTiaQACgXAGgdQAXBmA0BWQAMAVAOATQCLDBDiAgQDhAgC0iWQBLg9AzhVQA1hYAWhlQAFAXAEAcQgMBbglBUQgmBUg9BEQgdAhghAaQiUB8i4AAQgVAAgYgCg");
	this.shape.setTransform(0.011,6.4811,0.3199,0.3199);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5E5").s().p("AojEAQAKh5A2hrQA3htBdhOQC1iWDhAgQDiAgCLDDQBhCHAPCqIgDAcQgVibhYh8QiLjCjigfQjhggi1CWQhYBJg2BlQg1BjgOByQgCgPgBgNg");
	this.shape_1.setTransform(0.011,-9.9207,0.3199,0.3199);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989898").s().p("AhGE4QjiggiLjDQg3hOgehbQgchZgBhfQAAgVACgaQAOCqBiCJQATAZAUAXQCRCjDRARQDSASCoiLQAhgbAcghQBChIAnhdQAmhaAIhkIACAvQgBCGg3B4Qg4B7hmBVQiVB8i1AAQglAAgngFg");
	this.shape_2.setTransform(0.003,8.9043,0.3199,0.3199);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("AhGFAQjjggiKjDQhBhbgdhtQgchqAKhvQAOCqBiCJQAQAXAXAZQCQCjDSASQDSARCniLQAhgaAdghQBBhJAnhdQAmhaAJhjQANCVg3CLQg4COhzBfQiVB8i0AAQglAAgngFg");
	this.shape_3.setTransform(0.012,8.6404,0.3199,0.3199);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOgcIAVgDIAIA8IgVADg");
	this.shape_4.setTransform(-1.6123,-14.8044,0.3199,0.3199);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAYIAXg4IAUAIIgXA4g");
	this.shape_5.setTransform(4.8008,-14.0288,0.3199,0.3199);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAKIAvgkIAOARIgwAkg");
	this.shape_6.setTransform(9.9745,-10.1665,0.3199,0.3199);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfgGIA8gIIADAVIg8AIg");
	this.shape_7.setTransform(12.5173,-4.2332,0.3199,0.3199);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgggBIAJgUIA3AXIgIAUg");
	this.shape_8.setTransform(11.7497,2.1799,0.3199,0.3199);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgagQIARgOIAkAwIgRANg");
	this.shape_9.setTransform(7.8874,7.3535,0.3199,0.3199);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOgcIAUgDIAJA8IgVADg");
	this.shape_10.setTransform(1.9461,9.9044,0.3199,0.3199);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAZIAWg4IAVAIIgXA4g");
	this.shape_11.setTransform(-4.467,9.1287,0.3199,0.3199);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAKIAwgkIANARIgwAkg");
	this.shape_12.setTransform(-9.6406,5.2665,0.3199,0.3199);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfgGIA8gIIADAUIg8AJg");
	this.shape_13.setTransform(-12.1835,-0.6748,0.3199,0.3199);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAAIAIgUIA3AVIgIAUg");
	this.shape_14.setTransform(-11.4158,-7.0879,0.3199,0.3199);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgagRIARgNIAkAvIgRAOg");
	this.shape_15.setTransform(-7.5456,-12.2536,0.3199,0.3199);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3F3F3").s().p("Ag2GqQixgXhsiNQhtiNAXivQAXixCNhtQCNhsCvAXQCxAXBsCNQBtCNgXCvQgXCxiNBsQh0BaiNAAQgdAAgegEg");
	this.shape_16.setTransform(0.0053,-2.3463,0.3199,0.3199);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CBCBCB").s().p("AhGJNQjiggiLjDQiLjCAdjzQAej0C0iXQC1iWDhAgQDiAgCLDDQCLDCgdDzQgdD0i1CXQiWB8i0AAQglAAgngGg");
	this.shape_17.setTransform(0.0055,0.0263,0.3199,0.3199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-19,35.2,38.1);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"go":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_23 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.mc();
	this.instance.setTransform(-291.75,255.35,0.25,0.25,0,0,0,13.6,14);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.4372,scaleY:0.4372,x:-35.85,y:142.6},9).to({regY:13.8,scaleX:0.53,scaleY:0.53,x:7.25,y:7.35},12).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305,-20.8,325.8,282.5);


(lib.sea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPBBIgWgDQg3gUhIALIjAgHQgRgEgQgCIjVAIIiLgMQgpgCgnAIIhpACIgegEQgbgHghgDIiIAFIg1AKIiIAHQgUgHgcADIiwgHIgXACQgxAPhDgCIlqgMIgWgDQgogMgvgJIicgIIgKgDQgKgHgUgCIAYgKQAkgNAzAIIBpAMQAmAEAlgEQATgCAPgFIBrgQICMgFQA2gWBBATIAUgDIAbgPQAjgbBQAIQAtAEAgANQANAFAUAAIA7gDQBrgNBNAbQAoAOAXgLIAWgDQAUAEAPAGQAbAOArgKQA4gLA3ALIA/AGIEsgUQAPgDALgHIAJgEQArAJBBABIAvAEQA3AKA4gCICgAMIAegCQAUgEARgHQAjALAoAGQAnAEAQgKQAbgSAxgJIAUABIAnAKQA1AQAqgVIA8gcQAqgQAiANIAaAPQAEADAKgBIB7gDIAbAKIAOAPQADAEAKAAIAwgDQA+gGAlAOIAlADIA0gHQA6gKAyAQQATAGAcgCIDggLQAngEAhgIIBAABIAjAHQAbAEAAAFIABAGQA+gQBPALIANAJQACAOAogEIBtgGIDDAHICXgEIBLAGQBEAKA9gRIBiAAQAsAJA1gBIBtAHQBGAEgtASIkPAHIlYgJIjiAGIgwgHIgQAMQgGAGgbACIiTAKIhIgGIj8ALIjYgHQgnABgagJQgWgHggAEIh3AGIgNADQgjAOgngIIgegFIgSABIgNgCQgfgNghAJIghAJIhqABIgqgIIgeADQguAQg5gMQhDgOgyAPIgtAKIgfABIglgGIgWABQgmAGgjAIQgKgNgdAAg");
	this.shape.setTransform(-0.0734,31.3509);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjhA+IgZgBQg4gThIAKIixgHQgUgFgSAAIjBAHIiAgLQgngBglAHQg0ACg0AAIgdgEQgggIgmgCIiBAFQgbAFgdAFIiQAGQgmgGgtABIjQgFQgvAOg9gCIligOQg0gLg7gJIi/gJQgbgGgjgDQAFgFATgGQAogMA1AHIBrAKQApAEAogEQAYAAAWgFIBrgPICSgFQA9gUBHARIAggCQARgGANgJQAggYBJAGQAzADAlANQAMAFASgBIA4gEQBjgLBHAYQApANAZgLIAdgBQAhAEAcAGQAbAMAqgJQA4gMA6AMIA/AGIETgSIAkgLIAOgDQApAIA7ABIAsACQAzAIA0gCICgALQAxgGARgHQAkAIApAHQAnAFATgIQAdgOAzgKIAXAAIAmAJQA2AQAqgSIA9gXQArgQAjAKIAcAPQAFADALAAICEgFIAnAJIASANQAMADAOgBIAtgBQA5gFAkAMIBIAFIA3gGQA8gLA0AQQAWAGAdgDIDOgLQAlgDAfgIQAgACAigBQAZABAeAEQAcADAEAFIAGAFQA8gQBMAKQARADAKAHQADANAmgDIBlgFQBhACBeAFICagDIBSAHQA/AKA5gPQAxAAAygBQAuAJA3gCQA3ACA2ADQBBAFgnARIj4AGIk4gHIjfAGIg3gEIhAAMQgPAGgeABIiIAJIhXgGIjpALIjQgHQgoABgegJQgdgHglADIhzAHIgPACQgnANgqgHIglgGIgjADIgngDQgegLggAIIg3AJQg5AAg3ACIgogHQgSACgOACQgvANg4gLQg+gMguANIgtAJIggABIgogGQgQgBgSACIhQAMQgLgMgcAAg");
	this.shape_1.setTransform(-0.2187,32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjyA7IgdgBQg6gQhHAJIiigHQgXgGgVACIitAGIh0gKQglAAgjAGQg0ADg0gCIgbgEQglgGgqgDQg+ABg8AEQgdAFgfAEIiZAHQg3gHg+ABIjYgEQguALg3gCIlEgNQhAgKhGgIIjZgHQgsgGgzgEQgCgGAbgFQAsgLA2AFQA4AFA2ADQArAEArgEQAeACAegGIBpgOICYgDQBFgSBNAOIAsgBQAWgFALgJQAegXBBAGQA5ABAqAOQALADAQAAIA2gFQBagLBCAVQAoALAbgJQASABATgBQAtAEApAHQAdALAogJQA5gMA7ALIBBAGID5gRQAVgFAagEIATgDQAmAHA1AAIApABQAvAHAwgDIChAKQAvgHAQgHIBQAOQAnAGAVgFQAhgKA1gLIAagBIAkAIQA4APAogOQAdgIAigNQAsgNAkAHIAeAPQAHADAMgBICNgFQAZAFAZACIAXALQAUACATgBIApgCQA1gDAhALIBrAHIA7gHQA9gKA2APQAaAHAegEIC9gLQAhgDAegHQAgADAjgCQAigCAqAFQAdADAIAEIAKAFQA6gQBLAIQAaACAOAJQAFANAkgCIBcgFQBfgBBcAIICdgCIBYAIQA7AJA1gOQAyABAxgBQAwAHA5gCQA5ABA0AFQA8AEghAQIjhAHIkWgHIjdAHIg9gCIhxANQgXAFgigBIh8AHIhngDQhtAEhqAGIjHgHQgqAAghgJQgjgGgrACIhvAIIgSACQgqAMgtgHQgWgEgXgBIgzADIhCgDQgcgKgfAIIhNAIQg9gBg5AEIgngGQgTABgPAEQguALg4gKQg4gMgrAMIguAJIghABIgpgHQgWgDgaAEQgtAHgpADQgMgLgaAAg");
	this.shape_2.setTransform(-0.3968,34.0161);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgroAAEQgJgIAkgFQAvgJA4AEQA6AEA2ABQAuAEAtgDQAlADAlgGIBogNICegDQBLgQBUANIA5gBQAZgEAKgKQAbgUA7AFQA+gBAvAOQAJADAPgBQAUgDAfgCQBSgKA9ASQAoAKAdgJQAVACAXAAQA6AEA2AHQAeAKAlgJQA7gNA9ALIBBAHIDggPQAZgHAggDIAZgCQAiAHAvgBIAmgBQAsAFAsgDIChAKQAtgIARgHQAmAEAtAJQAmAHAYgDQAjgGA4gMIAcgCIAjAHQA5AOAogKQAbgGAkgLQAtgNAmAFQAPAIASAGQAIADANAAICVgGQAfAEAfABIAcAJQAcACAYgDIAlAAQAwgCAgAKICOAIIA+gGQA+gLA5APQAeAHAegFQBVgGBWgFQAfgCAcgGQAfAEAmgEQAqgFA3AGQAeADALAEQAJACAFABQA4gPBJAGQAkABATALQAGAMAhgBIBUgDQBegDBaAJICggBIBeAJQA2AIAygLQAxABAxgCQAzAGA6gDQA6ABA0AGQA2ADgbAOQhmAEhjAEIj1gFIjbAGQgjABghAAIihANQgfAFgmgDIhwAHIh3gDQhkAEhgAFIi/gGQgsgBgjgIQgqgGgxACQg3ADg0AFIgVADQgtAJgwgGQgZgEgbgBIhDAEIhdgEQgbgIgeAHIhjAJQhBgDg7AGIglgEQgWABgPAEQguAJg3gKQgzgKgnAKIguAJIgiAAIgrgHQgbgEgiAFQgyAHgqACQgNgKgagBIggABQg7gPhHAIIiUgHQgZgGgXADIiaAFIhogIQgjgBghAGQg0AEgzgDIgagEQgqgGgvgDQg7AAg4AEQgdAHgiADIiiAGQhIgGhPAAIjggEQgtAKgygDIklgMQhMgJhRgHIj0gGQg7gGhEgDg");
	this.shape_3.setTransform(-0.641,35.3432);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkDA4IggABQg7gPhHAIIiUgHQgZgGgXADIiaAFIhogIQgjgBghAGQg0AEgzgDIgagEQgqgGgvgDQg7AAg4AEQgdAHgiADIiiAGQhIgGhPAAIjggEQgtAKgygDIklgMQhMgJhRgHIj0gGQg7gGhEgDQgJgIAkgFQAvgJA4AEQA6AEA2ABQAuAEAtgDQAlADAlgGIBogNICegDQBLgQBUANIA5gBQAZgEAKgKQAbgUA7AFQA+gBAvAOQAJADAPgBIAzgFQBSgKA9ASQAoAKAdgJQAVACAXAAQA6AEA2AHQAeAKAlgJQA7gNA9ALIBBAHIDggPQAZgHAggDIAZgCQAiAHAvgBIAmgBQAsAFAsgDIChAKQAtgIARgHQAmAEAtAJQAmAHAYgDIBbgSIAcgCIAjAHQA5AOAogKQAbgGAkgLQAtgNAmAFQAPAIASAGQAIADANAAICVgGQAfAEAfABIAcAJQAcACAYgDIAlAAQAwgCAgAKICOAIIA+gGQA+gLA5APQAeAHAegFICrgLQAfgCAcgGQAfAEAmgEQAqgFA3AGQAeADALAEIAOADQA4gPBJAGQAkABATALQAGAMAhgBIBUgDQBegDBaAJICggBIBeAJQA2AIAygLQAxABAxgCQAzAGA6gDQA6ABA0AGQA2ADgbAOIjJAIIj1gFIjbAGIhEABIihANQgfAFgmgDIhwAHIh3gDQhkAEhgAFIi/gGQgsgBgjgIQgqgGgxACQg3ADg0AFIgVADQgtAJgwgGQgZgEgbgBIhDAEIhdgEQgbgIgeAHIhjAJQhBgDg7AGIglgEQgWABgPAEQguAJg3gKQgzgKgnAKIguAJIgiAAIgrgHQgbgEgiAFQgyAHgqACQgNgKgagBg");
	this.shape_4.setTransform(-0.641,35.3432);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgszAAGQgQgKAsgFQAygIA6ADQA8AEA2gBQAxAEAwgDQAqAFAtgHIBogMICjgBQBTgPBaAKIBFABQAdgDAJgKQAYgSA0ADQBEgCAzAOQAJACAMgBQASgDAfgDQBKgIA3AOQAoAIAfgHQAYADAbABQBHAEBDAGQAfAJAjgIQA8gNA/AKIBCAHIDGgOQAdgHAngCIAegBQAgAFAogBIAkgDQAoAEAogDIChAIQAsgHAQgIQAnACAuAKQAnAIAagBQAmgCA6gMIAfgDIAhAFQA6AOAogGQAagEAmgKQAvgMAmADQARAHASAGQAKADAOAAICegHQAlAEAlgBIAgAHQAkACAdgDIAhAAQAsgBAeAJICyAKIBAgGQBAgLA7AOQAiAHAfgGQBLgGBNgFQAdgBAagFQAfAFAogFQAzgJBCAHQAgADAPAEQALACAHAAQA2gPBHAFQAuAAAWANQAIALAfABIBMgDQBdgFBWAKICkAAIBlAKQAxAJAtgKQAxACAygDQA1AEA8gDQA7gBAzAHQAxAFgVAMQhcADhWAFIjUgEIjZAGQgmACgkACIjSANQgnAFgpgFIhlAFIiHgBQhaADhWAGIi3gHQgugBgngIQgwgFg2ABQg2ADgxAFIgYADQgxAIgygFQgdgFgfgBIhUAGIh2gEQgbgHgdAGIh4AJQhFgEg9AIIgkgEQgYABgPAGQguAGg2gJQgugJgkAJIguAIIgjABIgtgIQghgGgpAGQg1AJgugCQgNgIgZgBIgjACQg9gNhHAHIiEgIQgcgGgaAEIiGAFIhdgHQghAAgfAFQgzAFgzgFIgZgEQgugFg0gDQg4gBg1AFQgeAGgkADIiqAGQhagGhfAAIjpgFQgrAJgsgEIjigMIgmABQhYgIhcgGIkNgEQhNgFhTgDg");
	this.shape_5.setTransform(-0.9205,36.67);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhAA3QghgGgpAGQg1AJgugCQgNgIgZgBIgjACQg9gNhHAHIiEgIQgcgGgaAEIiGAFIhdgHQghAAgfAFQgzAFgzgFIgZgEQgugFg0gDQg4gBg1AFQgeAGgkADIiqAGQhagGhfAAIjpgFQgrAJgsgEIjigMIgmABQhYgIhcgGIkNgEQhNgFhTgDQgQgKAsgFQAygIA6ADQA8AEA2gBQAxAEAwgDQAqAFAtgHIBogMICjgBQBTgPBaAKIBFABQAdgDAJgKQAYgSA0ADQBEgCAzAOQAJACAMgBQASgDAfgDQBKgIA3AOQAoAIAfgHQAYADAbABQBHAEBDAGQAfAJAjgIQA8gNA/AKIBCAHIDGgOQAdgHAngCIAegBQAgAFAogBIAkgDQAoAEAogDIChAIQAsgHAQgIQAnACAuAKQAnAIAagBQAmgCA6gMIAfgDIAhAFQA6AOAogGQAagEAmgKQAvgMAmADQARAHASAGQAKADAOAAICegHQAlAEAlgBIAgAHQAkACAdgDIAhAAQAsgBAeAJICyAKIBAgGQBAgLA7AOQAiAHAfgGICYgLQAdgBAagFQAfAFAogFQAzgJBCAHQAgADAPAEQALACAHAAQA2gPBHAFQAuAAAWANQAIALAfABIBMgDQBdgFBWAKICkAAIBlAKQAxAJAtgKQAxACAygDQA1AEA8gDQA7gBAzAHQAxAFgVAMIiyAIIjUgEIjZAGIhKAEIjSANQgnAFgpgFIhlAFIiHgBQhaADhWAGIi3gHQgugBgngIQgwgFg2ABQg2ADgxAFIgYADQgxAIgygFQgdgFgfgBIhUAGIh2gEQgbgHgdAGIh4AJQhFgEg9AIIgkgEQgYABgPAGQguAGg2gJQgugJgkAJIguAIIgjABg");
	this.shape_6.setTransform(-0.9205,36.67);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Egt+AAHQgYgLA0gFQA2gIA8ACQA+AEA2gCQA0ADAygDQAxAIA0gIIBngLICogBQBbgMBgAIIBRABQAhgBAIgMQAWgPAsACQBKgEA4APQAIABAKgCQAPgDAggDQBBgHAyALQAoAHAhgGQAbADAfACQBTAEBRAGQAfAIAigIQA9gOBBALIBCAGICugLQAfgJAuAAIAkgBQAcAFAjgCIAggFQAlADAkgEIChAIQAqgIARgIQAoAAAvALQAnAIAcACQApACA8gNIAjgEIAfAEQA8ANAmgCQAagCAogJQAvgLAoABQASAHATAGQAMADAPAAICmgIQArAEArgDIAlAGQAsABAhgFIAeABQAnAAAcAJIDWALIBDgGQBBgLA9AOQAmAIAggIQBCgGBFgEQAagCAYgDQAfAGAqgHQA7gLBPAIQAgACATAEQAOABAJgBQA0gOBEADQA4gBAaAPQAKALAdABIBDgBQBcgIBTANICnAAIBsALQAsAIAqgIQAxADAxgDQA4ACA9gDQA8gCAzAIQArAEgOALQhRADhLAFIiygDIjXAHQgqADgnAEIkCANQgvAEgtgGIjwAEQhRAChMAGIivgGQgvgCgqgIQg3gFg8ABQg0ADgvAFIgaADQg0AHg2gFQghgFgiAAIhkAGIiRgFQgagFgcAGIiOAIQhJgFg/AKIgjgCQgaAAgOAHQguAEg2gIQgogIggAHIgvAIIgkAAIgwgIQgmgHgxAIQg4AIgwgDQgPgIgYAAIgmACQg+gKhHAFIh1gIQgfgGgcAFIhzAFIhRgHQgfABgdAFQgzAFgygHIgXgDQg0gFg4gDQg2gBgwAFQgfAHgnACIizAGQhrgGhvgBIjzgEQgpAGgmgEIi/gMIgrADQhkgIhngGIkngBQhegFhigDg");
	this.shape_7.setTransform(-1.1829,38.0958);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOA8IgwgIQgmgHgxAIQg4AIgwgDQgPgIgYAAIgmACQg+gKhHAFIh1gIQgfgGgcAFIhzAFIhRgHQgfABgdAFQgzAFgygHIgXgDQg0gFg4gDQg2gBgwAFQgfAHgnACIizAGQhrgGhvgBIjzgEQgpAGgmgEIi/gMIgrADQhkgIhngGIkngBQhegFhigDQgYgLA0gFQA2gIA8ACQA+AEA2gCQA0ADAygDQAxAIA0gIIBngLICogBQBbgMBgAIIBRABQAhgBAIgMQAWgPAsACQBKgEA4APQAIABAKgCQAPgDAggDQBBgHAyALQAoAHAhgGQAbADAfACQBTAEBRAGQAfAIAigIQA9gOBBALIBCAGICugLQAfgJAuAAIAkgBQAcAFAjgCIAggFQAlADAkgEIChAIQAqgIARgIQAoAAAvALQAnAIAcACQApACA8gNIAjgEIAfAEQA8ANAmgCQAagCAogJQAvgLAoABQASAHATAGQAMADAPAAICmgIQArAEArgDIAlAGQAsABAhgFIAeABQAnAAAcAJIDWALIBDgGQBBgLA9AOQAmAIAggIQBCgGBFgEQAagCAYgDQAfAGAqgHQA7gLBPAIQAgACATAEQAOABAJgBQA0gOBEADQA4gBAaAPQAKALAdABIBDgBQBcgIBTANICnAAIBsALQAsAIAqgIQAxADAxgDQA4ACA9gDQA8gCAzAIQArAEgOALIicAIIiygDIjXAHQgqADgnAEIkCANQgvAEgtgGIjwAEQhRAChMAGIivgGQgvgCgqgIQg3gFg8ABQg0ADgvAFIgaADQg0AHg2gFQghgFgiAAIhkAGIiRgFQgagFgcAGIiOAIQhJgFg/AKIgjgCQgaAAgOAHQguAEg2gIQgogIggAHIgvAIg");
	this.shape_8.setTransform(-1.1829,38.0958);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgvJAALQgfgLA8gFQA5gHA/ABQA/ADA2gEQA3ACA1gBQA3AJA7gIIBmgKICuAAQBigKBnAFIBdACQAkAAAHgMQAUgNAlABQBQgFA8APQAHAAAIgCQAMgEAhgDQA4gHAtAJQApAFAigFQAeAFAjABQBgAFBeAGQAgAGAggHQA+gOBDALIBCAGICVgKQAjgJA1ABIApgBQAZAEAdgCIAdgHQAhABAhgEIChAHQAogJASgHQAogDAxAMQAnAKAeAEQArAFA+gNIAmgFIAeADQA9AMAmACQAZABAqgJQAwgJApgCQATAHAVAGQANACAQAAICvgJQAwAEAxgEIAqAEQA0AAAmgFIAaABQAiACAbAHID5AOIBGgHQBDgLA/AOQAqAIAggJQA5gGA8gEQAYgBAWgDQAfAHAsgIQBDgOBbAJQAiACAXADQAQABALgBQAxgPBDACQBCgDAeASQALAKAaADIA8gBQBagKBRAPICqABIByAMQAnAIAngHQAwADAygDQA7ABA+gEQA9gDAzAJQAlAEgJAKQhGADg+AFIiRgCIjUAIQgvAEgpAFIkzAOQg3ADgxgIIj0AFQhIAAhCAHIimgGQgygDgsgHQg+gFhCAAQgyADgtAGIgdADQg3AGg5gFQgkgFgmAAIh0AHIisgFQgZgEgbAGIikAHQhNgGhAAMIgigBQgcAAgOAJQguABg1gIQgkgGgcAGIgvAHIgkAAIgzgIQgrgJg5AJQg8AJgygGQgQgGgYgBIgpADQg/gIhGAEIhngIQghgHgeAHIhgAEIhGgFQgcABgcAEQgzAGgwgIIgXgDQg5gFg8gDQg0gCgsAGQgfAHgpABIi8AHQh9gGiAgCIh+ABIh9gFQgoAFgggFIidgMIgvAEQhvgHhzgFIlBAAQhugEhygEg");
	this.shape_9.setTransform(-1.4547,39.07);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA+IgzgIQgrgJg5AJQg8AJgygGQgQgGgYgBIgpADQg/gIhGAEIhngIQghgHgeAHIhgAEIhGgFQgcABgcAEQgzAGgwgIIgXgDQg5gFg8gDQg0gCgsAGQgfAHgpABIi8AHQh9gGiAgCIh+ABIh9gFQgoAFgggFIidgMIgvAEIjigMIlBAAIjggIQgfgLA8gFQA5gHA/ABQA/ADA2gEQA3ACA1gBQA3AJA7gIIBmgKICuAAQBigKBnAFIBdACQAkAAAHgMQAUgNAlABQBQgFA8APQAHAAAIgCQAMgEAhgDQA4gHAtAJQApAFAigFQAeAFAjABIC+ALQAgAGAggHQA+gOBDALIBCAGICVgKQAjgJA1ABIApgBQAZAEAdgCIAdgHQAhABAhgEIChAHQAogJASgHQAogDAxAMQAnAKAeAEQArAFA+gNIAmgFIAeADQA9AMAmACQAZABAqgJQAwgJApgCQATAHAVAGQANACAQAAICvgJQAwAEAxgEIAqAEQA0AAAmgFIAaABQAiACAbAHID5AOIBGgHQBDgLA/AOQAqAIAggJQA5gGA8gEQAYgBAWgDQAfAHAsgIQBDgOBbAJQAiACAXADQAQABALgBQAxgPBDACQBCgDAeASQALAKAaADIA8gBQBagKBRAPICqABIByAMQAnAIAngHQAwADAygDQA7ABA+gEQA9gDAzAJQAlAEgJAKQhGADg+AFIiRgCIjUAIQgvAEgpAFIkzAOQg3ADgxgIIj0AFQhIAAhCAHIimgGQgygDgsgHQg+gFhCAAQgyADgtAGIgdADQg3AGg5gFQgkgFgmAAIh0AHIisgFQgZgEgbAGIikAHQhNgGhAAMIgigBQgcAAgOAJQguABg1gIQgkgGgcAGIgvAHg");
	this.shape_10.setTransform(-1.4547,39.07);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgwVAAQQgmgOBEgEQA8gGBBAAQBBADA3gFQA5ABA4gBQA8ALBEgIIBkgJIC0ABQBqgJBsADIBqADQAoABAGgMQARgLAegBQBVgGBCAPQAFgBAHgCQAJgEAhgDQAwgGAnAGQApADAkgEQAiAGAmACQBtAFBrAGQAhAFAegHQA/gOBFAKIBDAGIB8gIQAmgKA8ACIAvAAQAWADAWgCIAbgJQAcgBAdgEICiAGQAngJARgHQApgFAyANQAoAKAgAHQAuAJBAgOIApgGIAeACQA9ALAlAGQAYADAsgHQAygJAqgEQATAHAWAFQAPACARABIC4gKQA2ADA2gFIAvACQA9AAAqgGIAXACQAdACAZAHIEcAPIBKgGQBEgLBBAMQAuAJAggKQAwgGA0gEQAVgBAUgBQAfAIAugKQBMgRBnAKQAjACAaADQATABANgDQAvgOBBAAQBLgEAiAUQANAKAYAEIAzAAQBZgMBOAQICuACIB4ANQAiAHAjgEQAxADAxgDQA+gBBAgFQA+gEAyAKQAgAEgDAJQg7ADgyAFIhwAAIjSAHQgyAFgsAHIlkAOQg/ADg0gJIj4AEQhAAAg4AHIiegGQgzgEgwgHQhEgEhIAAQgwADgqAGIggADQg6AEg8gEQgogGgqABIiFAIIjGgFQgYgDgZAFIi6AIQhSgIhCAOIggAAQgeAAgOAKQgugBg1gIQgegEgYAEIgwAHIglAAIg1gJQgxgKhAAKQg/AKg2gJQgQgFgXgBIgtAFQhAgGhGACIhYgIQgkgHggAIIhMAEIg7gFQgaACgZAEQgzAGgwgKIgVgDQg/gEhAgDQgxgCgoAGQghAHgrABIjFAGQiNgFiRgDIh2ACIiOgGQgnADgagFIh6gMIgzAFQh8gGh9gFIlcADQh/gEiBgEg");
	this.shape_11.setTransform(-1.6971,40.0932);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACHA5QgegEgYAEIgwAHIglAAIg1gJQgxgKhAAKQg/AKg2gJQgQgFgXgBIgtAFQhAgGhGACIhYgIQgkgHggAIIhMAEIg7gFQgaACgZAEQgzAGgwgKIgVgDIh/gHQgxgCgoAGQghAHgrABIjFAGQiNgFiRgDIh2ACIiOgGQgnADgagFIh6gMIgzAFIj5gLIlcADIkAgIQgmgOBEgEQA8gGBBAAQBBADA3gFQA5ABA4gBQA8ALBEgIIBkgJIC0ABQBqgJBsADIBqADQAoABAGgMQARgLAegBQBVgGBCAPIAMgDQAJgEAhgDQAwgGAnAGQApADAkgEQAiAGAmACIDYALQAhAFAegHQA/gOBFAKIBDAGIB8gIQAmgKA8ACIAvAAQAWADAWgCIAbgJQAcgBAdgEICiAGQAngJARgHQApgFAyANQAoAKAgAHQAuAJBAgOIApgGIAeACIBiARQAYADAsgHQAygJAqgEQATAHAWAFQAPACARABIC4gKQA2ADA2gFIAvACQA9AAAqgGIAXACQAdACAZAHIEcAPIBKgGQBEgLBBAMQAuAJAggKQAwgGA0gEIApgCQAfAIAugKQBMgRBnAKIA9AFQATABANgDQAvgOBBAAQBLgEAiAUQANAKAYAEIAzAAQBZgMBOAQICuACIB4ANQAiAHAjgEQAxADAxgDQA+gBBAgFQA+gEAyAKQAgAEgDAJQg7ADgyAFIhwAAIjSAHQgyAFgsAHIlkAOQg/ADg0gJIj4AEQhAAAg4AHIiegGQgzgEgwgHQhEgEhIAAQgwADgqAGIggADQg6AEg8gEQgogGgqABIiFAIIjGgFQgYgDgZAFIi6AIQhSgIhCAOIggAAQgeAAgOAKQgugBg1gIg");
	this.shape_12.setTransform(-1.6971,40.0932);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgxiAAVQgsgQBMgFQBAgDBCgCQBDACA3gHQA8ACA7gBQBCAMBLgIIBkgIIC5ACQBxgHBzABIB2AEQAsACAFgNQAOgJAXgBQBbgIBGAPQAEgBAFgDQAGgEAigEQAogEAhACQApACAmgDQAlAHArADQB5AFB4AFQAjAEAbgGQBAgPBIAKIBDAHIBigHQAqgLBCADIA1ABQATACAQgDIAYgLQAZgCAZgEIChAFQAmgJARgIQAqgHA0AOQAnALAjAJQAxANBCgOIAsgIIAcABQA+ALAlAKQAXAFAugGQAzgIArgGQAUAHAYAEQAQACASABIDAgLQA9ADA8gHIAzAAQBFAAAwgHIASADQAZAEAXAFIFAARIBMgGQBGgMBDANQAyAIAhgLQAmgGArgEQAUABASgBQAeAJAxgLQBTgVB0ALQAkACAeADQAVAAAOgDQAugOA/gBQBVgFAmAWQAOAJAWAFIArABQBYgOBLARICxAEIB/AOQAdAGAfgCQAwAEAygFQBAgCBCgFQA/gFAxAKQAbAFADAHQgwADgmAGIkfAIQg1AHgvAIImVAOQhHADg4gLIj8AEQg2gBguAHIiWgGQg1gEgzgGQhLgEhNgBQgvADgoAGIgiAEQg+ACg/gDQgrgGguAAIiVAKIjggGQgYgBgYAEIjPAIQhWgJhEAQIgfABQghAAgOALQgtgEg0gHQgZgDgVADIgvAGIgnAAIg2gJQg3gMhIALQhDALg4gLQgRgEgWgBIgwAGQhCgFhGACIhJgJQgmgHgjAKIg4ACIgvgDQgYACgYADQgyAIgwgLIgUgDQhDgEhFgDQgugEglAHQghAIgtAAIjOAGQifgFihgDIhuADIiegIQgmACgVgFIhYgMIg3AFQiHgEiJgEIl2AEQiPgEiSgDg");
	this.shape_13.setTransform(-1.8717,41.1442);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACEA7QgZgDgVADIgvAGIgnAAIg2gJQg3gMhIALQhDALg4gLQgRgEgWgBIgwAGQhCgFhGACIhJgJQgmgHgjAKIg4ACIgvgDQgYACgYADQgyAIgwgLIgUgDIiIgHQgugEglAHQghAIgtAAIjOAGQifgFihgDIhuADIiegIQgmACgVgFIhYgMIg3AFIkQgIIl2AEIkhgHQgsgQBMgFQBAgDBCgCQBDACA3gHQA8ACA7gBQBCAMBLgIIBkgIIC5ACQBxgHBzABIB2AEQAsACAFgNQAOgJAXgBQBbgIBGAPIAJgEQAGgEAigEQAogEAhACQApACAmgDQAlAHArADIDxAKQAjAEAbgGQBAgPBIAKIBDAHIBigHQAqgLBCADIA1ABQATACAQgDIAYgLQAZgCAZgEIChAFQAmgJARgIQAqgHA0AOIBKAUQAxANBCgOIAsgIIAcABQA+ALAlAKQAXAFAugGIBegOQAUAHAYAEQAQACASABIDAgLQA9ADA8gHIAzAAQBFAAAwgHIASADQAZAEAXAFIFAARIBMgGQBGgMBDANQAyAIAhgLQAmgGArgEQAUABASgBQAeAJAxgLQBTgVB0ALIBCAFQAVAAAOgDQAugOA/gBQBVgFAmAWQAOAJAWAFIArABQBYgOBLARICxAEIB/AOQAdAGAfgCQAwAEAygFQBAgCBCgFQA/gFAxAKQAbAFADAHQgwADgmAGIkfAIQg1AHgvAIImVAOQhHADg4gLIj8AEQg2gBguAHIiWgGQg1gEgzgGQhLgEhNgBQgvADgoAGIgiAEQg+ACg/gDQgrgGguAAIiVAKIjggGQgYgBgYAEIjPAIQhWgJhEAQIgfABQghAAgOALQgtgEg0gHg");
	this.shape_14.setTransform(-1.8717,41.1442);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgyuAAZQg0gRBUgEQBEgEBEgCQBFACA4gJQA+ABA9AAQBJAOBSgJIBjgHIC/ADQB4gFB6gBICBAFQAxADADgOQAMgGAPgDQBhgKBMAQQADgCACgDQADgFAjgDQAfgEAcgBQApABAogCQAoAHAvAEQCGAFCFAGQAkACAagGQBAgPBKAKIBEAHIBJgFQAsgNBKAFIA6ACQAQABALgDIAUgNQAVgEAWgEIChAEQAkgKARgHQAsgKA1APQAnAMAlALQA0ASBEgQIAvgIIAbAAQA/AKAkANQAXAIAwgGQAzgGAtgJQAVAHAZAFQASABASABIDJgMQBCADBCgIIA5gCQBNgBA0gIIAOADQAVAGAVAEIFjASIBQgGQBGgLBGAMQA1AJAigMQAdgHAjgDQARABAQAAQAfAKAygMQBcgYB/AMQAlACAjACQAYAAAPgEQAsgOA9gCQBfgHAqAZQAQAIATAGIAjACQBWgRBJAUICzAEICGAPQAYAGAcgBQAwAFAygFQBCgEBDgFQBBgHAwAMQAVAFAKAFQgmADgZAHIj7AJQg5AIgyAKInGAPQhPACg7gNIkAAEQgugCgkAHIiNgFQg3gFg2gGQhSgDhTgCQgtADglAHIglAEQhBAAhCgCQgvgHgyABIilALIj7gHQgXAAgXAFIjlAGQhagJhGASIgdABQgjABgOALQgtgGgzgGQgUgCgRABIgwAHIgpgBIg3gKQg8gNhQANQhHALg6gOQgTgCgUgBIg0AGQhDgChFABIg6gJQgqgIglALIhIAAQgWACgWADQgyAIgvgMIgSgDQhJgDhJgEQgrgEghAHQgiAJgwgBIjWAHQixgGixgEIhmAFIivgJQglAAgOgGIg2gMIg7AHQiUgEiUgDImPAGQiggEiigDg");
	this.shape_15.setTransform(-2.0691,42.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACBA9QgUgCgRABIgwAHIgpgBIg3gKQg8gNhQANQhHALg6gOIgngDIg0AGQhDgChFABIg6gJQgqgIglALIhIAAIgsAFQgyAIgvgMIgSgDIiSgHQgrgEghAHQgiAJgwgBIjWAHQixgGixgEIhmAFIivgJQglAAgOgGIg2gMIg7AHIkogHImPAGIlCgHQg0gRBUgEQBEgEBEgCQBFACA4gJIB7ABQBJAOBSgJIBjgHIC/ADQB4gFB6gBICBAFQAxADADgOQAMgGAPgDQBhgKBMAQIAFgFQADgFAjgDQAfgEAcgBQApABAogCQAoAHAvAEIELALQAkACAagGQBAgPBKAKIBEAHIBJgFQAsgNBKAFIA6ACQAQABALgDIAUgNIArgIIChAEQAkgKARgHQAsgKA1APIBMAXQA0ASBEgQIAvgIIAbAAQA/AKAkANQAXAIAwgGQAzgGAtgJQAVAHAZAFIAkACIDJgMQBCADBCgIIA5gCQBNgBA0gIIAOADIAqAKIFjASIBQgGQBGgLBGAMQA1AJAigMQAdgHAjgDIAhABQAfAKAygMQBcgYB/AMIBIAEQAYAAAPgEQAsgOA9gCQBfgHAqAZQAQAIATAGIAjACQBWgRBJAUICzAEICGAPQAYAGAcgBQAwAFAygFICFgJQBBgHAwAMQAVAFAKAFQgmADgZAHIj7AJQg5AIgyAKInGAPQhPACg7gNIkAAEQgugCgkAHIiNgFQg3gFg2gGQhSgDhTgCQgtADglAHIglAEQhBAAhCgCQgvgHgyABIilALIj7gHQgXAAgXAFIjlAGQhagJhGASIgdABQgjABgOALIhggMg");
	this.shape_16.setTransform(-2.0691,42.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Egz6AAdQg7gSBcgEIAlgDIBogEQBGABA5gJICBABQBOAQBagJIA0gFIAugBIDEADIBAgCIAyABIA9gCIBRgDICOAFQA0AEACgOIASgIQBmgLBRAQIACgGQAAgFAjgEIAugGIBTgCQArAIAzAEIBvAFIBXACIBeAEQAlACAYgGQBCgQBMAKIBEAHIAwgDQAwgOBQAGIBAADQANAAAEgEIASgPIAjgKIBIAAIBZAEQANABAEgEIAjgPQAsgMA3AQIBOAbQA3AVBGgQIAygKIAagBQBAAJAjASQAWAKAygFQA1gFAugLQAVAHAbAEIAnACIAwgEIBtgHIA0gBQBIACBIgKIA9gEQBWgBA4gJIALAEQAQAHATADIAsAEIA0ACIDNALIBaADIBTgGQBIgLBIALQA5AJAigNQAUgGAagEIAdADQAeALA1gOQBkgaCMAMIBMAEQAaAAASgFQApgOA7gEQBpgHAuAaIAjAPIAaADQBVgTBGAWIAnACICQADIAyAGIBaAKQATAFAYABQAwAEAygEIBNgGIA9gFQBBgIAwANIASAFIANAEQgaADgNAGIgNAEIiZAGIgyABQg9AJg1AMIgcACImNAKIhNADQhXABg/gOIgfgCIh8AFIg5ABIgwAAQglgCgaAHIhCgCIhDgDIgsgCIhGgKIgYgBIhrgEIguAAQgrADgjAHIgoAEIglAAIg/AAIglgCQgygIg3ACIg/ADIh2AIIgjAAIhXgDIgsgCIglgCIhKAAQgWACgWAEIhXAEIh6ADIgqgBQhegKhIAUIgcACQglAAgNANQgugIgygGIgcgBIgwAGIgqgBIg6gKQhBgOhYAOQhKALg9gQIgngCIg3AHIiJAAIgsgKQgsgIgnANIgRABIgYgBIgoAFQgyAJgugOIgRgDIhpgEIgygCQgpgFgdAIQgjAJgygCIjfAHIg6ABIibgEIhAgCIg/gEIgwgBIguAFIgwABIglgDIibgHQgjgCgJgGIgNgJIgGgDIgYACIgSADIgVACIkngGIgYABIhPAEIgnAAIg2AAIj+AEIlAgGg");
	this.shape_17.setTransform(-2.2276,43.2259);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AB9A/IgcgBIgwAGIgqgBIg6gKQhBgOhYAOQhKALg9gQIgngCIg3AHIiJAAIgsgKQgsgIgnANIgRABIgYgBIgoAFQgyAJgugOIgRgDIhpgEIgygCQgpgFgdAIQgjAJgygCIjfAHIg6ABIibgEIhAgCIg/gEIgwgBIguAFIgwABIglgDIibgHQgjgCgJgGIgNgJIgGgDIgYACIgSADIgVACIkngGIgYABIhPAEIgnAAIg2AAIj+AEIlAgGIghgBQg7gSBcgEIAlgDIBogEQBGABA5gJICBABQBOAQBagJIA0gFIAugBIDEADIBAgCIAyABIA9gCIBRgDICOAFQA0AEACgOIASgIQBmgLBRAQIACgGQAAgFAjgEIAugGIBTgCQArAIAzAEIBvAFIBXACIBeAEQAlACAYgGQBCgQBMAKIBEAHIAwgDQAwgOBQAGIBAADQANAAAEgEIASgPIAjgKIBIAAIBZAEQANABAEgEIAjgPQAsgMA3AQIBOAbQA3AVBGgQIAygKIAagBQBAAJAjASQAWAKAygFQA1gFAugLQAVAHAbAEIAnACIAwgEIBtgHIA0gBQBIACBIgKIA9gEQBWgBA4gJIALAEQAQAHATADIAsAEIA0ACIDNALIBaADIBTgGQBIgLBIALQA5AJAigNQAUgGAagEIAdADQAeALA1gOQBkgaCMAMIBMAEQAaAAASgFQApgOA7gEQBpgHAuAaIAjAPIAaADQBVgTBGAWIAnACICQADIAyAGIBaAKQATAFAYABQAwAEAygEIBNgGIA9gFQBBgIAwANIASAFIANAEQgaADgNAGIgNAEIiZAGIgyABQg9AJg1AMIgcACImNAKIhNADQhXABg/gOIgfgCIh8AFIg5ABIgwAAQglgCgaAHIhCgCIhDgDIgsgCIhGgKIgYgBIhrgEIguAAQgrADgjAHIgoAEIglAAIg/AAIglgCQgygIg3ACIg/ADIh2AIIgjAAIhXgDIgsgCIglgCIhKAAQgWACgWAEIhXAEIh6ADIgqgBQhegKhIAUIgcACQglAAgNANQgugIgygGg");
	this.shape_18.setTransform(-2.2276,43.2259);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkUBAIgdgDQhKgThgAKIkBgGQgWgEgXgCIkbAHIi6gLQg4gCgzAIIiNACIgogEQgkgHgsgDIi1AFIj8ARQgbgHgmACIjrgGIgfABQhBAPhZgBIoCgPQg1gMg/gJIjQgHIgNgEQgNgGgbgDIAfgJQAxgNBDAIICNALQAzAEAxgEQAZgBAUgFICPgQIC8gFQBHgWBXATIAbgDIAkgPQAvgaBrAHQA8AEArAOQARAFAbAAIBOgEQCPgMBnAaQA2AOAfgLIAdgDQAbAEAUAGQAkANA6gJQBJgLBKALIBVAGIGQgUQAUgDAPgHIAMgEQA6AJBXABIA+AEQBKAKBKgCIDWAMIAogCQAbgEAWgHQAvALA2AFQAzAFAXgKQAjgSBCgJIAbABIA0AKQBHAQA4gVIBQgbQA4gQAtAMIAjAPQAFAEANgBICmgDIAjAJIASAPQAFAEANAAIBBgDQBSgGAyAOIAxADIBFgHQBOgKBDAQQAZAGAmgCIErgLQAzgEAtgIIBVACIAvAGQAjAEAAAFIADAGQBSgQBpALIASAIQACAOA2gEICRgFIEFAGID4gCIA2AFQBcAJBQgQICEgBQA6AJBHgBICRAHQBeAEg8ASIlqAHInMgJIktAGIhBgHIgUALQgJAHgkACIjFAKIhggGImNAKIjkgHQgzACgkgJQgdgIgqAEIifAHIgSADQgvAOgzgJIgogFIgZABIgSgBQgogNgtAIIgsAJIiNABIg4gHIgoACQg/AQhMgMQhZgOhDAPIg7AKIgrABIgxgGIgdABQgzAGgvAIQgNgNgmAAg");
	this.shape_19.setTransform(-2.3655,44.4382);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Eg2VAAdQg+gSBggEIAngDIBugEQBJABA7gJICHABQBSAQBegJIA3gFIAwgBIDNADIBCgCIA1ABIBAgCIBUgDICVAFQA3AEACgOIASgIQBsgKBUAPIADgGQAAgFAkgEIAwgGIBXgCQAuAIA0AEIB1AFIBbACIBiAEQAnACAZgGQBFgQBQAKIBGAHIAzgDQAygOBUAGIBDADQANAAAFgEIASgOIAlgKIBLgBIBeAEQAOABAEgEIAlgOQAtgNA5AQIBTAbQA5AVBJgQIA0gKIAcgBQBDAJAlASQAXAKA0gFQA3gFAwgLQAXAHAbAEIAqACIAygEIBygHIA3gBQBLACBMgKIBAgEQBZgBA7gJIALAFQAQAGAVADIAuAEIA3ACIDWALIBeADIBXgGQBLgLBLALQA8AJAkgNQAVgGAbgEIAeADQAgALA3gOQBpgaCSAMIBQAEQAcAAASgFQArgNA+gFQBugHAwAaIAkAPIAcAEQBZgTBJAVIApACICXADIA0AGIBeAKQAUAFAZABQAzAEA0gEIBQgGIBAgFQBFgIAyANIASAFIAOAEQgbADgOAGIgOAEIigAGIg0ABQhAAJg3AMIgeACImgAKIhQADQhbABhCgPIgggBIiCAFIg8ABIgyAAQgngCgbAGIhFgBIhHgEIgtgBIhJgKIgZgBIhwgEIgwAAQguACglAIIgpAEIgnAAIhCAAIgngCQg0gIg5ACIhDADIh7AIIgkAAIhcgDIgugCIgmgCIhOAAQgXACgXAEIhbAEIiAADIgrgBQhjgKhLATIgeADQgnAAgNANQgwgIg1gGIgdgBIgzAGIgrgBIg9gKQhEgPhcAOQhNAMhAgQIgpgCIg6AHIiQgBIgtgJQgugIgpAMIgSACIgZgBIgqAFQg0AIgwgOIgSgCIhugEIg1gDQgrgEgeAIQgkAJg1gCIjpAHIg9ABIijgFIhCgBIhCgEIgygBIgwAFIgzABIgmgDIijgHQgkgCgJgHIgOgIIgHgDIgZACIgSADIgXACIk0gGIgaABIhSAEIgpAAIg5AAIkJAEIlQgGg");
	this.shape_20.setTransform(-2.6507,45.646);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACDA/IgdgBIgzAGIgrgBIg9gKQhEgPhcAOQhNAMhAgQIgpgCIg6AHIiQgBIgtgJQgugIgpAMIgSACIgZgBIgqAFQg0AIgwgOIgSgCIhugEIg1gDQgrgEgeAIQgkAJg1gCIjpAHIg9ABIijgFIhCgBIhCgEIgygBIgwAFIgzABIgmgDIijgHQgkgCgJgHIgOgIIgHgDIgZACIgSADIgXACIk0gGIgaABIhSAEIgpAAIg5AAIkJAEIlQgGIgigBQg+gSBggEIAngDIBugEQBJABA7gJICHABQBSAQBegJIA3gFIAwgBIDNADIBCgCIA1ABIBAgCIBUgDICVAFQA3AEACgOIASgIQBsgKBUAPIADgGQAAgFAkgEIAwgGIBXgCQAuAIA0AEIB1AFIBbACIBiAEQAnACAZgGQBFgQBQAKIBGAHIAzgDQAygOBUAGIBDADQANAAAFgEIASgOIAlgKIBLgBIBeAEQAOABAEgEIAlgOQAtgNA5AQIBTAbQA5AVBJgQIA0gKIAcgBQBDAJAlASQAXAKA0gFQA3gFAwgLQAXAHAbAEIAqACIAygEIBygHIA3gBQBLACBMgKIBAgEQBZgBA7gJIALAFQAQAGAVADIAuAEIA3ACIDWALIBeADIBXgGQBLgLBLALQA8AJAkgNQAVgGAbgEIAeADQAgALA3gOQBpgaCSAMIBQAEQAcAAASgFQArgNA+gFQBugHAwAaIAkAPIAcAEQBZgTBJAVIApACICXADIA0AGIBeAKQAUAFAZABQAzAEA0gEIBQgGIBAgFQBFgIAyANIASAFIAOAEQgbADgOAGIgOAEIigAGIg0ABQhAAJg3AMIgeACImgAKIhQADQhbABhCgPIgggBIiCAFIg8ABIgyAAQgngCgbAGIhFgBIhHgEIgtgBIhJgKIgZgBIhwgEIgwAAQguACglAIIgpAEIgnAAIhCAAIgngCQg0gIg5ACIhDADIh7AIIgkAAIhcgDIgugCIgmgCIhOAAQgXACgXAEIhbAEIiAADIgrgBQhjgKhLATIgeADQgnAAgNANQgwgIg1gGg");
	this.shape_21.setTransform(-2.6507,45.646);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Eg3sAANQgNgHAJgFQANgFAsgDQAhgBAjAAIBUAAQAgABAfAAQAmAAAjgFQAQAAARAAIAvgCQAcgCAdAAQASACAUABQAbACAagBQAsAAAtgDIBpgFICpABIBDgGQBGgKBbABQAsAAAqACQAKACALABQAVACAYABIBSABQACAAACAAQAwACANgKQAJgDAKgDQBegGBMANQANACAMACQACgBACgDQAHgCAegDQALgCAKgCIAcgDQAcABAXACQASACAUAAQAbAEAgABQAVAAAVAAQA4AAA4AFIDIAEQAmABAdgEQBIgMBPAFIBIAEIA0gGQAHgCAIgCQAxgDBJAEQAPAAAOAAIAnACQAMAAAHgCIAFgCQAIgDAHgDQAUgDASgDQAxACAxAAIBLACQANABAGgCIAngJQAqgHAvAIQAIABAHABIAbAFQAZAEAZADQAEACAFABQAsANA0gBQASgBATgCQAWgDASgFQAGgCAHgBQAOgCAOgCQAjABAfAEQAPACANAEQAHACAGACQAQAFAYACQARABATAAQA2gCAvgMQACAAABgBQAXACAbAAIAjgCQAEAAADAAQAzgGAwACIAnADQAHABAKgBIBEgDQA1ABA1gDQATABATAAQAFAAAEABIANACQAIABALAAIAggCQASAAASgBQBEgDAwgCQAGACAGACQAEABAFABQANAEAPABIBgACQBPgBBKAHICoAGIBYgFQA+gHA+ADQAPAAAPABQAmADAggEQAPgBAOgDQAWgEAbgCIAeACQAOAEAQABQAZABAPgBQADABADAAQAFgBAFgBQBRgRBnAEQAKACAKACQASAFAiAAQAEAAAEAAIBKABQAaAAAVgEQAOgDAPgCQAkgEAqgCQBngEA+ASIAmAKIAcACQBZgNBNAOIBqAEQAuACAsAAQAtADAsAAIA9AEQAVAEAZAAQAQABAQABQAkADAmgCQAdgBAfgCIBXgDQAigCAfACQAhABAVAFQATAFgCAGQgCAAgBAAQgYADgPAEIgOACIjZAHQg3AFgzAHQgIABgIABIoZAHQhZAChIgKIiXAAIgXAEQgSADgbAAIg6ACQgmgBgeAEIi9gEIhLgGIi9gBQguABgnAGIi9AAQg1gFg3AAQgBAAgCAAQgwACgqgBIkEAEQgzAEg0gEIglgCQgXABgYACIgCAAQgrgDguADIiwAHQgJgBgJAAQgegDgdgBQgVAAgVACQgeAEgdAGQgPABgPABQgigBgTAHQgBAAgBABQgzgIgzgEQgPAAgPABQgQACgPACIhAAEIgBAAIg+gHQgPgDgQgCQgPgBgQAAQgwABg1AIQgBAAgBAAQgYgCgfAAQgQAAgOgBQgdgDgdgFQgUgCgVgBQgdADgeADQgKAAgJAAIiBgBIgugHQgugFgrAHIhXADQg1AFgygJIi4gFQgqgDghAEQgoAFgzgCIjuAHIhBgCQgogEgrgBIi9gBIizAHIhWgCQgggDgkAAIg0gCQghgBgOgFIgWgIIhEAFIhUgCQhMAEhVgCIobAAQgGAAgGAAQg1gFg3gDIjpgGQgQgCgWgCg");
	this.shape_22.setTransform(-2.9614,47.4293);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACAA0IgeABIgfAEIhAAEIgBAAIg+gHIgfgFIgfgBQgwABg1AIIgCAAQgYgCgfAAIgegBQgdgDgdgFIgpgDIg7AGIgTAAIiBgBIgugHQgugFgrAHIhXADQg1AFgygJIi4gFQgqgDghAEQgoAFgzgCIjuAHIhBgCQgogEgrgBIi9gBIizAHIhWgCQgggDgkAAIg0gCQghgBgOgFIgWgIIhEAFIhUgCQhMAEhVgCIobAAIgMAAQg1gFg3gDIjpgGQgQgCgWgCIgBAAQgNgHAJgFQANgFAsgDQAhgBAjAAIBUAAIA/ABQAmAAAjgFIAhAAIAvgCIA5gCIAmADQAbACAagBQAsAAAtgDIBpgFICpABIBDgGQBGgKBbABQAsAAAqACIAVADQAVACAYABIBSABIAEAAQAwACANgKIATgGQBegGBMANIAZAEIAEgEQAHgCAegDIAVgEIAcgDQAcABAXACQASACAUAAQAbAEAgABIAqAAQA4AAA4AFIDIAEQAmABAdgEQBIgMBPAFIBIAEIA0gGIAPgEQAxgDBJAEIAdAAIAnACQAMAAAHgCIAFgCIAPgGIAmgGQAxACAxAAIBLACQANABAGgCIAngJQAqgHAvAIIAPACIAbAFIAyAHIAJADQAsANA0gBQASgBATgCQAWgDASgFIANgDIAcgEQAjABAfAEIAcAGIANAEQAQAFAYACQARABATAAQA2gCAvgMIADgBQAXACAbAAIAjgCIAHAAQAzgGAwACIAnADIARAAIBEgDQA1ABA1gDIAmABIAJABIANACIATABIAggCIAkgBIB0gFIAMAEIAJACQANAEAPABIBgACQBPgBBKAHICoAGIBYgFQA+gHA+ADIAeABQAmADAggEQAPgBAOgDQAWgEAbgCIAeACQAOAEAQABQAZABAPgBIAGABIAKgCQBRgRBnAEIAUAEQASAFAiAAIAIAAIBKABQAaAAAVgEIAdgFQAkgEAqgCQBngEA+ASIAmAKIAcACQBZgNBNAOIBqAEIBaACQAtADAsAAIA9AEQAVAEAZAAIAgACQAkADAmgCIA8gDIBXgDQAigCAfACQAhABAVAFQATAFgCAGIgDAAQgYADgPAEIgOACIjZAHIhqAMIgQACIoZAHQhZAChIgKIiXAAIgXAEQgSADgbAAIg6ACQgmgBgeAEIi9gEIhLgGIi9gBQguABgnAGIi9AAQg1gFg3AAIgDAAQgwACgqgBIkEAEQgzAEg0gEIglgCIgvADIgCAAQgrgDguADIiwAHIgSgBQgegDgdgBIgqACQgeAEgdAGIgeACQgigBgTAHIgCABQgzgIgzgEg");
	this.shape_23.setTransform(-2.9614,47.4293);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Eg5DAAEQACgFANgGQAUgGAlgBQAhgCAkACIBWADQAgACAgABQAmACAkgDQARAAARgBIAwgFQAbgDAfgCQATABAUAAQAdABAagDQAtAAAtgDIEYgFIApgFIAbgHQA8gSBoAFQAwABAoAGQAMABAKADQAUADAbAAIBUgBQACAAACAAQApAAAXgFQAKgCAJgBQBhgDBNAPQANADAMACQAEgBACAAQAOAAAYgDQALgBAKgDIAcgDQAeACAWAEQASAEAWABQAbADAhgCQAWgBAWgBQA5gCA5AGIBaAFIBygCQAlAAAggDQBLgIBPABIBagBIAkgHQAHgCAIgCQAzACBKACQAPABAPAAIAnACQAMABAIgBIAHgBQAIgBAIgBQAUAAAUgBQAyACAyAAIBLADQAMAAAJgBIAogDQAsgCAwAFQAHABAIAAIAbACQAcAAAYgCQAFABAFABQAtALA0ADQAVAAARgCQAZgCAQgFQAGgCAHgCQAOgDAPgDQAfgDAkgBQAPACAOABQAHACAIACQASAEAVADQASACASABQA4ACAugOQACgBABAAQAYgDAagDIAjgHQAEgBADAAQA2gKAvAHIAnAJQAGACANAAIBEgDQA3AAA2gCQATADATACQAEACAEACIANAGQAGACANgBIAhgBQASAAASgBQBHgEAxADQAGABAGACQAFABAEABQAOACAOACIBjgCQBSgFBJALIBDAEIDCgFQA/gEA/AAQAQgBAQAAQAlgBAigEQAPAAAPgCQAYgCAagBIAeADQAPADAQACQAgACAHACQADACABACQAGgBAGgCQBTgOBpAHQAKADAKACQAKAJAqgBQAEAAAEAAIBLgBQAbAAAWgDQAPgBAQgCQAmgCAqAAQBfgBBLAKIBFAHQBYgHBTAGIBrAEQAvAEAtgBQAvABAtgEIA9ACQAXABAYAAQARABAQAAQAkAEAoAAQAeABAfgCIBZABQAigBAhACQAkABASAFQAVAEgVAJQgBAAgBABQgWABgTACIgOACIjeAEQg3AEg2AEQgIAAgIABIokAAQhWABhPgEIhVABIhFgEIgWAIQgOAEgiACIg7ABQgkAAghADIiGACIgygEIkWAAQguABgqADIjBgBQg2gDg3gBQgCAAgCAAQgyACgogFIkKAFQgzAJg2gGIgngCQgXgBgYABIgCAAQgsgIgvAGIgwAGIiEABQgJAAgJAAQgegDgegCQgWABgVABQgeAFgfAEQgPABgQAAQgeAAgZABQgBAAgBAAQg2gIgygBQgPABgPAAQgQACgPADIhAAHIhDgEQgPgCgQgCQgPAAgQAAQgyAEg2AHQgBAAgBAAQgTgIgkABQgPgBgQgBQgcgFgegEQgVgCgWgBQgdABgfADQgKAAgKABIizgGQgugEgtADIg0gDIgkACQg2AEg0gEIi8gBQgpgDgkABQgrABgxgCIkLAHIgrgDQgngFgugCIjCACIhMAGIjCAFQgegFgnABIg2gCQgcgBgUgCIgYgEIicAAQhJAJhbgCIomgHQgGAAgHgBQg1gHg5gGIjfgGIgOgDQgQgEgXgCg");
	this.shape_24.setTransform(-3.2187,48.593);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AjtBAQgTgIgkABIgfgCQgcgFgegEIgrgDQgdABgfADIgUABIizgGQgugEgtADIg0gDIgkACQg2AEg0gEIi8gBQgpgDgkABQgrABgxgCIkLAHIgrgDQgngFgugCIjCACIhMAGIjCAFQgegFgnABIg2gCQgcgBgUgCIgYgEIicAAQhJAJhbgCIomgHIgNgBQg1gHg5gGIjfgGIgOgDQgQgEgXgCIgDAAQACgFANgGQAUgGAlgBQAhgCAkACIBWADIBAADQAmACAkgDIAigBIAwgFQAbgDAfgCIAnABQAdABAagDQAtAAAtgDIEYgFIApgFIAbgHQA8gSBoAFQAwABAoAGIAWAEQAUADAbAAIBUgBIAEAAQApAAAXgFIATgDQBhgDBNAPIAZAFIAGgBQAOAAAYgDIAVgEIAcgDQAeACAWAEQASAEAWABQAbADAhgCIAsgCQA5gCA5AGIBaAFIBygCQAlAAAggDQBLgIBPABIBagBIAkgHIAPgEIB9AEIAeABIAnACQAMABAIgBIAHgBIAQgCIAogBQAyACAyAAIBLADQAMAAAJgBIAogDQAsgCAwAFIAPABIAbACQAcAAAYgCIAKACQAtALA0ADQAVAAARgCQAZgCAQgFIANgEIAdgGQAfgDAkgBIAdADIAPAEQASAEAVADQASACASABQA4ACAugOIADgBIAygGIAjgHIAHgBQA2gKAvAHIAnAJQAGACANAAIBEgDQA3AAA2gCIAmAFIAIAEIANAGQAGACANgBIAhgBIAkgBQBHgEAxADIAMADIAJACIAcAEIBjgCQBSgFBJALIBDAEIDCgFQA/gEA/AAIAggBQAlgBAigEQAPAAAPgCIAygDIAeADQAPADAQACQAgACAHACIAEAEIAMgDQBTgOBpAHIAUAFQAKAJAqgBIAIAAIBLgBQAbAAAWgDIAfgDQAmgCAqAAQBfgBBLAKIBFAHQBYgHBTAGIBrAEQAvAEAtgBQAvABAtgEIA9ACIAvABIAhABQAkAEAoAAQAeABAfgCIBZABQAigBAhACQAkABASAFQAVAEgVAJIgCABIgpADIgOACIjeAEIhtAIIgQABIokAAQhWABhPgEIhVABIhFgEIgWAIQgOAEgiACIg7ABQgkAAghADIiGACIgygEIkWAAQguABgqADIjBgBQg2gDg3gBIgEAAQgyACgogFIkKAFQgzAJg2gGIgngCIgvAAIgCAAQgsgIgvAGIgwAGIiEABIgSAAIg8gFIgrACQgeAFgfAEIgfABIg3ABIgCAAQg2gIgygBIgeABIgfAFIhAAHIhDgEIgfgEIgfAAQgyAEg2AHIgCAAg");
	this.shape_25.setTransform(-3.2187,48.593);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Eg6YAAAIAPgEIATgFQA2gNBJAIIBEAFIBVAGQA4AEA2gEIAxgGQAsgJA4gBQAdgBAbgFIChgDIAsgCICtgCQAJABAUgFIAngOQAzgbB1AIQBCAEAuANQAUAFAdAAIBVgDQCcgNBwAbQA7AOAigMIAggCQAdADAWAGQAnAOA/gJQBRgMBQAMIBdAFIBkgDIDlgLIA6gCIAxgDIAngKIAMgEQBAAJBfAAIBEAFQBQAJBRgCIA6ABIB6AHIA2AEIAsgCQAdgEAYgHQA0ALA6AGQA4AEAYgKQAngRBJgJIAdAAIA4AKQBOAQA9gVIBYgbQA8gPAxAMIAnAPQAFADAPgBIBkgEIBQABIAnAKIAUAPQAEADAPAAIBHgDQBagFA2ANIA1ADIBMgHQBVgJBJAPIBEAEIBpgEIBigCIB8gEIBpgNIBdACIAzAHQAnADAAAFIACAGQBagPBzAKIATAJQADANA6gEICfgFIBaADIBEACIA4gBIBHACIDbgDIA0ABIA6AFQBkAJBYgQICQgBQA/AJBOgBIB1AEIApADQBnAEhCASIglABIlmAGIkbgFIg9AAIgsAAIhXgEIgbAAIlJAGIgZgCIgTgEIgbgBIgHADIgPAIQgKAHgnABIitAIIgpACIg2gBIgzgEIg1AAIhHAEIhHACIitAEIhCgBIj4gGQg4ABgngJIhOgDIg4ADIh1AEIgUACQgzAOg4gIIgsgFIgbABIgTgCQgsgMgxAIIgxAJIiZABIg9gHIgsACQhEAQhTgMQhigOhJAPIhBAKIguABIg2gGIgfABIhsAOQgOgOgqAAIgfgCQhRgUhpALIguABIiIgDIhigFIgxgFIhSAAIgqABIgxADIhhADIgnAAIiEgIIhGgDIh1AFIgqADIhHAAIgpAAIgsgEQgngIgxgCIgzAAIh3AEIgbABIhOAKIgxABIhLAEIhKABQgdgGgpACIg2AAIg/gCIiLgEIgiABQhHAPhhgCIhWgCIm7gKIgggCQg7gMhEgJIg4gBIirgGIgOgEQgPgGgdgDg");
	this.shape_26.setTransform(-3.6574,49.1882);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkuA/IgfgCQhRgUhpALIguABIiIgDIhigFIgxgFIhSAAIgqABIgxADIhhADIgnAAIiEgIIhGgDIh1AFIgqADIhHAAIgpAAIgsgEQgngIgxgCIgzAAIh3AEIgbABIhOAKIgxABIhLAEIhKABQgdgGgpACIg2AAIg/gCIiLgEIgiABQhHAPhhgCIhWgCIm7gKIgggCQg7gMhEgJIg4gBIirgGIgOgEQgPgGgdgDIAPgEIATgFQA2gNBJAIIBEAFIBVAGQA4AEA2gEIAxgGQAsgJA4gBQAdgBAbgFIChgDIAsgCICtgCQAJABAUgFIAngOQAzgbB1AIQBCAEAuANQAUAFAdAAIBVgDQCcgNBwAbQA7AOAigMIAggCQAdADAWAGQAnAOA/gJQBRgMBQAMIBdAFIBkgDIDlgLIA6gCIAxgDIAngKIAMgEQBAAJBfAAIBEAFQBQAJBRgCIA6ABIB6AHIA2AEIAsgCQAdgEAYgHQA0ALA6AGQA4AEAYgKQAngRBJgJIAdAAIA4AKQBOAQA9gVIBYgbQA8gPAxAMIAnAPQAFADAPgBIBkgEIBQABIAnAKIAUAPQAEADAPAAIBHgDQBagFA2ANIA1ADIBMgHQBVgJBJAPIBEAEIBpgEIBigCIB8gEIBpgNIBdACIAzAHQAnADAAAFIACAGQBagPBzAKIATAJQADANA6gEICfgFIBaADIBEACIA4gBIBHACIDbgDIA0ABIA6AFQBkAJBYgQICQgBQA/AJBOgBIB1AEIApADQBnAEhCASIglABIlmAGIkbgFIg9AAIgsAAIhXgEIgbAAIlJAGIgZgCIgTgEIgbgBIgHADIgPAIQgKAHgnABIitAIIgpACIg2gBIgzgEIg1AAIhHAEIhHACIitAEIhCgBIj4gGQg4ABgngJIhOgDIg4ADIh1AEIgUACQgzAOg4gIIgsgFIgbABIgTgCQgsgMgxAIIgxAJIiZABIg9gHIgsACQhEAQhTgMQhigOhJAPIhBAKIguABIg2gGIgfABIhsAOQgOgOgqAAg");
	this.shape_27.setTransform(-3.6574,49.1882);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Eg7NAAdQhCgSBogEIAqgDIB4gEQBPABBBgJICTABQBZAQBmgJIA8gFIA0gBIDgADIBIgCIA6ABIBFgCIBcgDICiAFQA8AEACgNIAUgJQB1gKBcAPIADgGQAAgFAogDIA0gHIBegCQAyAJA5AEIB/AEIBkACIBrAEQAqACAcgGQBKgPBXAJIBOAHIA2gDQA3gNBcAFIBIADQAPAAAFgDIAUgPIAogKIBSgBIBmAEQAPABAFgDIAogPQAygMA+APIBZAbQA/AVBPgQIA5gKIAeAAQBKAJAoARQAZAKA5gEQA8gGA0gLQAZAHAeAEIAsACIA3gEIB9gHIA7gBQBSACBTgJIBFgEQBhgBBBgJIAMAEQASAGAWAEIAyADIA8ACIDqALIBmADIBegFQBSgMBSAMQBBAJAogOQAWgGAegDIAhACQAiAMA8gOQBzgbCfANIBXADQAeAAAUgFQAvgNBDgEQB4gHA0AaIAoAOIAeAEQBhgTBPAVIAtACICkADIA6AGIBmAKQAWAFAbABQA3AEA5gEIBXgGIBGgFQBLgIA3ANIATAFIAPAEQgdADgPAGIgPAEIivAGIg5ABQhFAJg8ALIghADInEAKIhYACQhjAChIgPIgjgCIiOAFIhBACIg2AAQgrgCgeAGIhKgCIhNgDIgygBIhQgKIgbgBIh6gEIg0AAQgyACgoAIIgtAEIgqAAIhIAAIgqgDQg6gHg+ACIhIADIiGAIIgoAAIhkgDIgygDIgqgBIhUAAQgZABgZAEIhkAEIiLAEIgvgBQhrgLhTAUIggACQgqAAgPANQg0gIg6gFIgggBIg3AFIgvAAIhCgKQhLgPhjAOQhVALhGgPIgtgDIg+AIIicgBIgygJQgygIgtAMIgUACIgbgBIgtAFQg5AIg0gOIgUgCIh4gEIg5gDQgvgEghAHQgnAJg6gBIj+AGIhDABIiwgEIhJgCIhIgEIg2gBIg1AFIg2ABIgrgCIiwgIQgogBgKgHIgPgIIgIgDIgbABIgUAEIgZACIlQgGIgbAAIhaAEIgsAAIg/AAIkgAFIlugGg");
	this.shape_28.setTransform(-3.4968,50.321);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ACOA/IgggBIg3AFIgvAAIhCgKQhLgPhjAOQhVALhGgPIgtgDIg+AIIicgBIgygJQgygIgtAMIgUACIgbgBIgtAFQg5AIg0gOIgUgCIh4gEIg5gDQgvgEghAHQgnAJg6gBIj+AGIhDABIiwgEIhJgCIhIgEIg2gBIg1AFIg2ABIgrgCIiwgIQgogBgKgHIgPgIIgIgDIgbABIgUAEIgZACIlQgGIgbAAIhaAEIgsAAIg/AAIkgAFIlugGIgmgBQhCgSBogEIAqgDIB4gEQBPABBBgJICTABQBZAQBmgJIA8gFIA0gBIDgADIBIgCIA6ABIBFgCIBcgDICiAFQA8AEACgNIAUgJQB1gKBcAPIADgGQAAgFAogDIA0gHIBegCQAyAJA5AEIB/AEIBkACIBrAEQAqACAcgGQBKgPBXAJIBOAHIA2gDQA3gNBcAFIBIADQAPAAAFgDIAUgPIAogKIBSgBIBmAEQAPABAFgDIAogPQAygMA+APIBZAbQA/AVBPgQIA5gKIAeAAQBKAJAoARQAZAKA5gEQA8gGA0gLQAZAHAeAEIAsACIA3gEIB9gHIA7gBQBSACBTgJIBFgEQBhgBBBgJIAMAEQASAGAWAEIAyADIA8ACIDqALIBmADIBegFQBSgMBSAMQBBAJAogOQAWgGAegDIAhACQAiAMA8gOQBzgbCfANIBXADQAeAAAUgFQAvgNBDgEQB4gHA0AaIAoAOIAeAEQBhgTBPAVIAtACICkADIA6AGIBmAKQAWAFAbABQA3AEA5gEIBXgGIBGgFQBLgIA3ANIATAFIAPAEQgdADgPAGIgPAEIivAGIg5ABQhFAJg8ALIghADInEAKIhYACQhjAChIgPIgjgCIiOAFIhBACIg2AAQgrgCgeAGIhKgCIhNgDIgygBIhQgKIgbgBIh6gEIg0AAQgyACgoAIIgtAEIgqAAIhIAAIgqgDQg6gHg+ACIhIADIiGAIIgoAAIhkgDIgygDIgqgBIhUAAQgZABgZAEIhkAEIiLAEIgvgBQhrgLhTAUIggACQgqAAgPANQg0gIg6gFg");
	this.shape_29.setTransform(-3.4968,50.321);

	this.instance = new lib.shape12("synched",0);
	this.instance.setTransform(-310.65,3.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({scaleX:1.0508,scaleY:1.1473,x:-314.45,y:7.2,alpha:1},12).to({scaleX:1.1216,scaleY:1.3526,x:-335.1,y:12.35},23).to({scaleX:1.2,scaleY:1.2,x:-348.05,y:19.6,alpha:0},10).wait(1));

	// Layer_2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ar9AAIADgCIAEgDQALgIAPAFIAOADIARAEQAMACALgCQAFgBAFgDIAUgGIAMgEIAhgCIAJgBQAQgNATAMIAGgCIAIgJQALgQAYAEQANADAKAIQAEADAGAAIARgCQAggIAXAQQAMAJAHgHIAHgCQAGACAEAEQAIAIANgFQARgHAQAHIATADIAVgCIAvgGIAMgCIAKgCQAEgCAEgEIACgCQANAFAUABIAOACQAQAGARgBIAMAAIAZAFIALACIAJgBQAGgDAFgEQAKAHAMADQAMADAFgGQAIgLANgFIAGAAIAMAGQAQAKAMgNIASgQQANgKAKAIIAIAJQABACADgBIAUgCIARAAIAIAGIAEAJQABACADAAIAOgBQATgEALAIIALACIAPgEQASgGAPAKQAFADAJgBIAVgCIAUgCIAagCQALgDAKgFIATABIALAEQAIACAAADIAAAEQATgJAXAGIAEAFQABAIAMgCIAggDIATACIAOABIALgBIAPACIAtgCIAKAAIAMADQAVAGASgKIAdAAQANAFAQgBIAYADIAJABQAVADgOALIgHAAIhKAEIg6gDIgMAAIgJAAIgSgCIgGgBIhDAEIgFgBIgEgCIgGgBIgBACIgDAFQgCAEgIABIgkAEIgIACIgLgBIgLgDIgLABIgOACIgPABIgjADIgOgBIgzgEQgLABgIgFQgHgFgJADIgMABIgYADIgEABQgKAJgMgFIgJgDIgFAAIgEgBQgJgHgKAFIgKAFIggABIgMgFIgJACQgOAJgRgHQgUgIgPAJIgMAGIgKAAIgLgDIgGAAQgMAEgKAFQgDgIgJAAIgGgCQgRgMgVAHIgKAAIgcgCIgUgCQgFgDgFgBIgRAAIgIABIgKACIgUACIgIAAIgbgFIgPgCQgMgBgMAEIgIACIgPAAIgIAAIgJgDQgIgEgKgCIgLAAIgYADIgGAAIgQAGIgKABIgPACIgPABQgGgEgJACIgLAAIgNgBIgcgDIgHABQgPAJgUgBIgRgCIhbgGIgHgBQgMgHgOgGIgLAAIgjgEIgDgCQgDgEgGgCg");
	this.shape_30.setTransform(37.4891,2.5346);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag9AnIgGgCQgRgMgVAHIgKAAIgcgCIgUgCIgKgEIgRAAIgIABIgKACIgUACIgIAAIgbgFIgPgCQgMgBgMAEIgIACIgPAAIgIAAIgJgDQgIgEgKgCIgLAAIgYADIgGAAIgQAGIgKABIgPACIgPABQgGgEgJACIgLAAIgNgBIgcgDIgHABQgPAJgUgBIgRgCIhbgGIgHgBQgMgHgOgGIgLAAIgjgEIgDgCQgDgEgGgCIADgCIAEgDQALgIAPAFIAOADIARAEQAMACALgCQAFgBAFgDIAUgGIAMgEIAhgCIAJgBQAQgNATAMIAGgCIAIgJQALgQAYAEQANADAKAIQAEADAGAAIARgCQAggIAXAQQAMAJAHgHIAHgCQAGACAEAEQAIAIANgFQARgHAQAHIATADIAVgCIAvgGIAMgCIAKgCQAEgCAEgEIACgCQANAFAUABIAOACQAQAGARgBIAMAAIAZAFIALACIAJgBQAGgDAFgEQAKAHAMADQAMADAFgGQAIgLANgFIAGAAIAMAGQAQAKAMgNIASgQQANgKAKAIIAIAJQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAUgCIARAAIAIAGIAEAJQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAOgBQATgEALAIIALACIAPgEQASgGAPAKQAFADAJgBIAVgCIAUgCIAagCQALgDAKgFIATABIALAEQAIACAAADIAAAEQATgJAXAGIAEAFQABAIAMgCIAggDIATACIAOABIALgBIAPACIAtgCIAKAAIAMADQAVAGASgKIAdAAQANAFAQgBIAYADIAJABQAVADgOALIgHAAIhKAEIg6gDIgMAAIgJAAIgSgCIgGgBIhDAEIgFgBIgEgCIgGgBIgBACIgDAFQgCAEgIABIgkAEIgIACIgLgBIgLgDIgLABIgOACIgPABIgjADIgOgBIgzgEQgLABgIgFQgHgFgJADIgMABIgYADIgEABQgKAJgMgFIgJgDIgFAAIgEgBQgJgHgKAFIgKAFIggABIgMgFIgJACQgOAJgRgHQgUgIgPAJIgMAGIgKAAIgLgDIgGAAQgMAEgKAFQgDgIgJAAg");
	this.shape_31.setTransform(37.4891,2.5346);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AsXAAQADgCADgDQASgFAFABIAYAEQAGABAGABQAJACAJgBQADAAADgBQAFgBAFgDIANgDQAKgCAKgDQAKAAAKgBIAYgCQAQgLAUAKIAHgCIAJgIQAFgHAIgCQAKgEAMACQAHACAHACQAFACAFAEQAFADAGAAIAKgBQAEAAAEgBQAEgBADgBQADgBADAAQAXgDARALIADABQAEADAFAAQAGACAEgDIAHgDQAHACAFAEQAIAHANgEQASgGAQAGIAUADIARgBQAHgBAHgBQARgEARgBIAbgDQABAAABgBQADgBAEgDQABgBABgCQAJADAKACQAHABAIAAQACAAABAAIAIABIADAAQAEABADAAQAJACAJABQAEAAAFgBIALABQADAAACABIALAAQALABALADQABAAABAAIAHgBQAGgBAFgEQACACACABQAJAFAKADQAHABAFgCQADgBACgCQADgDADgDQACgBACgCQAGgDAHgCQADABADAAQADABACACQAEACADABQAEACAFABQALACAJgJQACgBABgBQAEgCAEgDIAIgGIABgBQANgJAKAHIAIAHIABABQABABADAAIAFgBQAIAAAJgBQAIAAAJAAQAAAAABABIAHAEIADAEQABACABACQACACADAAQAHgBAIgBQAEgBAFAAQABAAACAAQAEAAAEACQAFABAEADIABAAIALACIAQgEQASgFAQAJQAGADAIgBIAagDQASgBARgBQAEAAAEAAQAJgCAHgDQADgCAEgBQACAAACAAIAHAAQAEABAEAAQAGACAFABQAIACAAACQABACAAACQATgKAYAGQABACABABIADACQABAIAMgCQAFgBAFgBQALgBAMgCIABAAQARABAQACQAEABADAAIAEAAIAOACQAAAAABAAQATgCATABIATAAIAMADQAGACAGAAQAOABAOgGIAIAAQAFABAFAAQAGAAAGAAQAFACAGABQAJACAKgBIAOABQAKAAAKABQAEABADABQAHADgCAEQgBACgEADQgBAAgCAAIg0ADQgNACgNABIhUgCIgYgCIgMABQgTABgRAAIgWABIgFgCIgEgCIgGAAIgCABIgDAFQgDAEgHABIgHABQgIAAgHACIgYACIgLAAIgLgDIg3ADQgKABgJABIgKABIghgDQgMgBgNgBIgDAAQgLABgJgFQgHgEgJADIgCAAIgjADIgEABQgLAIgMgFIgDAAQgDgBgDgBQgDAAgCABIgBAAIgEgBQgKgHgKAFIgLAFIgWAAQgFAAgFAAQgGgCgHgCQgFABgEABQgDABgDABQgDACgDABQgHABgHAAQgDgBgDgCQgHgDgHgBQgDgBgEAAQgFABgGACQgCABgDABIgEACIgIADIgGAAQgCAAgCAAQgGgBgFgCQgEAAgDAAQgHACgIADQgEACgEACQgDgHgJgBQgDAAgDgBQgCgBgCgBQgEgDgFgBQgGgCgHABQgGAAgIACIgKAAIgVgCQgLgCgLAAIgGAAQgCgBgCAAQgDgCgDAAIgEAAQgHAAgHAAQgFABgFAAIgEAAIgZACIgMAAQgIgBgJgBQgKgBgKgCIgCAAQgNgBgMAEIgJABIgYABIgJgDQgIgEgKgBIgqACIgQAFIgBAAIgqAEQgGgEgJACIgKgBQgGgBgGgBIgHgBIgGAAIgEABIgOgCIgHABQgQAIgUgBIhwgHIgHgBQgDgCgEgBQgKgFgKgDIgwgEIgDgCQgDgEgGgCg");
	this.shape_32.setTransform(36.9722,3.0637);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhAAlIgGgBIgEgCIgJgEQgGgCgHABIgOACIgKAAIgVgCQgLgCgLAAIgGAAIgEgBQgDgCgDAAIgEAAIgOAAIgKABIgEAAIgZACIgMAAIgRgCIgUgDIgCAAQgNgBgMAEIgJABIgYABIgJgDQgIgEgKgBIgqACIgQAFIgBAAIgqAEQgGgEgJACIgKgBIgMgCIgHgBIgGAAIgEABIgOgCIgHABQgQAIgUgBIhwgHIgHgBIgHgDIgUgIIgwgEIgDgCQgDgEgGgCIgBAAIAGgFQASgFAFABIAYAEIAMACQAJACAJgBIAGgBQAFgBAFgDIANgDIAUgFIAUgBIAYgCQAQgLAUAKIAHgCIAJgIQAFgHAIgCQAKgEAMACIAOAEIAKAGQAFADAGAAIAKgBIAIgBIAHgCIAGgBQAXgDARALIADABQAEADAFAAQAGACAEgDIAHgDQAHACAFAEQAIAHANgEQASgGAQAGIAUADIARgBIAOgCQARgEARgBIAbgDIACgBIAHgEIACgDQAJADAKACIAPABIADAAIAIABIADAAIAHABQAJACAJABIAJgBIALABIAFABIALAAIAWAEIACAAIAHgBQAGgBAFgEIAEADQAJAFAKADQAHABAFgCQADgBACgCIAGgGIAEgDQAGgDAHgCIAGABIAFADIAHADIAJADQALACAJgJIADgCIAIgFIAIgGIABgBQANgJAKAHIAIAHIABABQABAAAAAAQAAABABAAQAAAAABAAQABAAAAAAIAFgBIARgBIARAAIABABIAHAEIADAEIACAEQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAPgCIAJgBIADAAIAIACQAFABAEADIABAAIALACIAQgEQASgFAQAJQAGADAIgBIAagDIAjgCIAIAAQAJgCAHgDIAHgDIAEAAIAHAAIAIABIALADQAIACAAACIABAEQATgKAYAGIACADIADACQABAIAMgCIAKgCIAXgDIABAAQARABAQACIAHABIAEAAIAOACIABAAQATgCATABIATAAIAMADIAMACQAOABAOgGIAIAAIAKABIAMAAIALADQAJACAKgBIAOABIAUABIAHACQAHADgCAEIgFAFIgDAAIg0ADIgaADIhUgCIgYgCIgMABIgkABIgWABIgFgCIgEgCIgGAAIgCABIgDAFQgDAEgHABIgHABIgPACIgYACIgLAAIgLgDIg3ADIgTACIgKABIghgDIgZgCIgDAAQgLABgJgFQgHgEgJADIgCAAIgjADIgEABQgLAIgMgFIgDAAIgGgCIgFABIgBAAIgEgBQgKgHgKAFIgLAFIgWAAIgKAAIgNgEIgJACIgGACIgGADQgHABgHAAIgGgDIgOgEIgHgBIgLADIgFACIgEACIgIADIgGAAIgEAAIgLgDIgHAAIgPAFIgIAEQgDgHgJgBg");
	this.shape_33.setTransform(36.9722,3.0637);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AswABQABgCADgDQATgGAFABIAZADQAGABAHABQAJACAJgBQADgBADgBQAGAAAFgDIANgDQAKgBALgCQAKAAAKgBIAYgCQASgLAVAJIAGgBIAKgHQAGgGAIgDQAKgDANACQAHABAHACQAGACAFADQAEADAHAAIAKAAQAFgBADAAQAEgBADgCQADgBADAAQAYgDATAKIACABQAEACAFAAQAGABAFgDIAHgCQAHABAFADQAJAIANgEQASgFARAGIAVADIARgBQAIgBAHgBQARgFASAAIARgBIALgBQABgBABAAQADgCAEgDQABgBACgBQAIACALACQAHABAIAAQACABACgBIAHAAIADgBQAEABADAAQAJACAJAAQAFAAAFAAIAMABQADAAACAAIALAAQALAAALADQABAAABAAIAHAAQAGgBAGgCQACACACABQAJAFAKACQAHABAFgCQADgBACgCQADgDADgCQADgCADgBQAGgCAHgCQADABADABQADABACACQADACAEABQAFACAEABQAMABAKgIQABgBABgBQAEgCAFgCIAKgGQANgIALAFIAIAGIABABQACACADgBIAFAAQAJgBAIgBQAJAAAJgBQAAABABAAIAIAEIADAEQABABACACQABABADAAQAJAAAHgCQAEgBAFAAQABAAACABQAEABAFABQAFABAEADQABAAAAAAIAMACIAQgDQASgEARAIQAGADAJgBIAagDQATgCASAAQAEAAAEAAQAIgBAIgEQADgCAEgBQACAAACgBIAHABQAEABAEAAQAGACAGAAQAHACABACQABABABABQATgJAZAGQABABACACIACABQACAHAMgBIAAAAQAGgBAEgBQAMgCANgCIAAAAQASAAAQAEQAEAAADAAIASAEQAAAAABAAQAUgDATACIAIAAIAYADQAGACAGAAQAPACANgFIAJAAQAFABAFAAQAHAAAGAAQAFACAGABQAKABAKgBIAOABQALAAAKACQAEAAADABQAHACgBAFQgCABgEADQgBABgCAAIg2AEQgNABgOACIgCAAIgEABIhpgDIgMABQgUABgSgBIgHgBIgPABIgFgBIgFgBIgFgBIgGAGQgDADgIABIgGABQgJAAgHACIgYACIgMgBIgLgDIg6ACQgJABgKACIgKABIgigDQgMgBgNgBIgEAAQgLABgJgEQgIgDgKACIgmADIgEABQgLAHgMgEIgEgBQgDgBgDAAQgCAAgCAAIgCAAIgEAAQgKgGgLAEIgLAFIgXAAQgFAAgFAAQgHgCgHgCQgFABgEABQgDACgDABQgDABgEABQgHACgGAAQgEgBgEgBQgHgEgGgBQgEAAgEAAQgGAAgFACQgDABgCABIgNAEIgGAAQgCAAgCAAQgGgCgGgCQgDABgEAAQgHACgIADQgEABgEACQgEgGgJAAQgDgBgEgBQgCgBgBgBQgFgCgFgCQgGgBgHABQgHAAgHACIgVgBIgMgCQgLgCgKABIgHAAQgCgBgCgBQgDAAgDgBIgEABQgHAAgHAAQgFAAgGAAIgqABQgJgCgIAAQgKAAgLgCIgDAAQgNgBgNAEIgJACIgYAAIgHgBIgDgBQgIgEgLgBIgrABIgQAFIgBAAIgrADQgHgDgJABIgKgBQgHgBgFgBIgHgCIgGABIgTgBIgIAAQgQAHgUgBIh0gFIgHgBQgDgCgEgBQgKgEgLgDIgygEIgDgCQgEgDgGgCg");
	this.shape_34.setTransform(36.4817,3.563);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhDAlIgHgCIgDgCIgKgEQgGgBgHABQgHAAgHACIgVgBIgMgCQgLgCgKABIgHAAIgEgCIgGgBIgEABIgOAAIgLAAIgqABQgJgCgIAAIgVgCIgDAAQgNgBgNAEIgJACIgYAAIgHgBIgDgBQgIgEgLgBIgrABIgQAFIgBAAIgrADQgHgDgJABIgKgBIgMgCIgHgCIgGABIgTgBIgIAAQgQAHgUgBIh0gFIgHgBIgHgDIgVgHIgygEIgDgCQgEgDgGgCQABgCADgDQATgGAFABIAZADIANACQAJACAJgBIAGgCQAGAAAFgDIANgDIAVgDIAUgBIAYgCQASgLAVAJIAGgBIAKgHQAGgGAIgDQAKgDANACIAOADIALAFQAEADAHAAIAKAAIAIgBIAHgDIAGgBQAYgDATAKIACABQAEACAFAAQAGABAFgDIAHgCQAHABAFADQAJAIANgEQASgFARAGIAVADIARgBIAPgCQARgFASAAIARgBIALgBIACgBIAHgFIADgCIATAEIAPABIAEAAIAHAAIADgBIAHABIASACIAKAAIAMABIAFAAIALAAQALAAALADIACAAIAHAAIAMgDIAEADQAJAFAKACQAHABAFgCIAFgDIAGgFIAGgDIANgEIAGACIAFADIAHADIAJADQAMABAKgIIACgCIAJgEIAKgGQANgIALAFIAIAGIABABQACACADgBIAFAAIARgCIASgBIABABIAIAEIADAEIADADQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAQgCIAJgBIADABIAJACIAJAEIABAAIAMACIAQgDQASgEARAIQAGADAJgBIAagDQATgCASAAIAIAAQAIgBAIgEIAHgDIAEgBIAHABIAIABIAMACQAHACABACIACACQATgJAZAGIADADIACABQACAHAMgBIAAAAIAKgCIAZgEIAAAAQASAAAQAEIAHAAIASAEIABAAQAUgDATACIAIAAIAYADIAMACQAPACANgFIAJAAIAKABIANAAIALADQAKABAKgBIAOABQALAAAKACIAHABQAHACgBAFIgGAEIgDABIg2AEIgbADIgCAAIgEABIhpgDIgMABQgUABgSgBIgHgBIgPABIgFgBIgFgBIgFgBIgGAGQgDADgIABIgGABIgQACIgYACIgMgBIgLgDIg6ACIgTADIgKABIgigDIgZgCIgEAAQgLABgJgEQgIgDgKACIgmADIgEABQgLAHgMgEIgEgBIgGgBIgEAAIgCAAIgEAAQgKgGgLAEIgLAFIgXAAIgKAAIgOgEIgJACIgGADIgHACIgNACIgIgCQgHgEgGgBIgIAAQgGAAgFACIgFACIgNAEIgGAAIgEAAIgMgEIgHABIgPAFIgIADQgEgGgJAAg");
	this.shape_35.setTransform(36.4817,3.563);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AtJACQAAgCADgEQATgFAEAAIAaADQAHABAHABQAJABAJgCQAEAAADgBQAGgBAFgCIAOgCQAKAAALgCQALAAAKgCIAZgCQATgJAVAIIAHgBIAKgHQAHgFAJgCQAKgDAMACQAIABAHABQAGACAFADQAFACAHABIALgBQAEAAAEAAQAEgBADgDQADgBADgBQAZgDATAKQACABAAgBQADABAGABQAGAAAFgDIAIgCQAHACAFACQAKAHANgDQATgEASAGIAVADIARgBQAJgBAHgCQARgEATAAIARAAIALgCQABAAABAAQAEgCADgDQACgBACgBQAIACAMABQAHABAIABQADAAABgBIAKgCQAEAAAEAAQAJACAJAAQAFAAAFAAIAMABQAEAAACAAIAKgCQALAAAMADQABABABAAIAHAAQAHAAAFgBQACACACABQAKAGAKABQAHABAFgCQADgBACgCQAEgDADgCQADgCADgBQAGgCAIAAQADABADABQADABACACQADACAEABQAFACAFABQAMAAAKgIQABgBABgBQAFgBAFgBIAJgEIABgBQAOgIALAFIAJAFIACAAQACACADgBIAFAAQAJgBAIgBQAKAAAJgBQAAABABAAIAIADIAEADQABACACABQACABADAAQAJAAAHgCQAFgBAEAAQACAAABABQAFABAEABQAGACAEACIABAAIAMACIARgCQATgEAQAIQAHACAJAAIAcgDQASgDATABQAEAAAFAAQAIgBAHgDQAEgDAEgBQACgBACAAIAHABQAFABAEABQAGABAGAAQAHABABABQABABABABQAUgJAaAGQABABACABIACACQAEAGALgBIAAAAQAGgBAFgBQAMgEANgCIAAAAQATAAAQAFQADAAAEABIAEABIAHADIAHABQAAAAABAAQAUgEATADIAVABIANACQAHACAGAAQAOACAOgEIAJABQAFABAGAAQAGABAHgBQAFACAGABQAKAAALgBIAOABQALgBAKACQAFABADABQAHACgBAEQgCACgEADQgBAAgBABIg4AEQgOACgOADIgCAAIhxgBIgNABQgUABgSgDIgXABIgFgBIgFgBIgGgBIgGAGQgEACgHABIgHABQgJAAgHACIgZACIgMgBIgMgDIgOgBIgtACQgKABgJACIgFAAIgGABIgjgCQgNgDgNAAIgDABQgMABgKgEQgIgCgKACIgnACIgFABQgLAGgNgEIgDgBQgEAAgDgBQgCABgCAAIgCAAIgEgBQgLgEgLADIgLAEIgNABIgLAAQgFAAgGAAQgGgCgIgBQgFABgEABQgEABgCACQgEABgEABQgIABgFACQgEgCgEgBQgHgDgHgCQgEAAgEAAQgGABgGACQgCAAgDABIgFACIgJABIgFAAQgDAAgCgBQgGgCgGgBQgDAAgEAAQgHACgIADQgFACgEABQgFgFgIAAQgDgBgEgBQgCgBgCgBQgFgCgEgCQgHAAgHABQgHAAgIABIgKABIgLgBIgMgDQgLgCgLACIgGAAQgDgBgCgBQgDAAgEAAIgEAAQgHABgHgBQgFAAgGgBIgfACIgMgBQgKgCgIABQgKAAgMgCIgCAAQgOAAgNADIgJACIgaAAIgKgBQgIgEgLgBIgLgBIghACIgRAEIgtADQgIgEgJABIgKgBQgIgBgEgBIgHgDIgRABIgJgBIgIABQgQAGgVgBIh3gEIgIgBQgEgCgEgBQgKgDgLgDIgzgEIgEgBQgEgDgGgCg");
	this.shape_36.setTransform(35.9768,4.0906);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhGAkIgHgCIgEgCIgJgEQgHAAgHABIgPABIgKABIgLgBIgMgDQgLgCgLACIgGAAIgFgCIgHAAIgEAAQgHABgHgBIgLgBIgfACIgMgBQgKgCgIABQgKAAgMgCIgCAAQgOAAgNADIgJACIgaAAIgKgBQgIgEgLgBIgLgBIghACIgRAEIgtADQgIgEgJABIgKgBIgMgCIgHgDIgRABIgJgBIgIABQgQAGgVgBIh3gEIgIgBIgIgDIgVgGIgzgEIgEgBQgEgDgGgCIAAAAQAAgCADgEQATgFAEAAIAaADIAOACQAJABAJgCIAHgBQAGgBAFgCIAOgCQAKAAALgCIAVgCIAZgCQATgJAVAIIAHgBIAKgHQAHgFAJgCQAKgDAMACIAPACQAGACAFADQAFACAHABIALgBIAIAAQAEgBADgDIAGgCQAZgDATAKIACAAIAJACQAGAAAFgDIAIgCIAMAEQAKAHANgDQATgEASAGIAVADIARgBQAJgBAHgCQARgEATAAIARAAIALgCIACAAIAHgFIAEgCIAUADIAPACIAEgBIAKgCIAIAAIASACIAKAAIAMABIAGAAIAKgCQALAAAMADIACABIAHAAQAHAAAFgBIAEADQAKAGAKABQAHABAFgCIAFgDIAHgFIAGgDIAOgCIAGACIAFADQADACAEABQAFACAFABQAMAAAKgIIACgCIAKgCIAJgEIABgBQAOgIALAFIAJAFIACAAQACACADgBIAFAAIARgCIATgBIABABIAIADIAEADIADADIAFABIAQgCIAJgBIADABIAJACIAKAEIABAAIAMACIARgCQATgEAQAIQAHACAJAAIAcgDQASgDATABIAJAAQAIgBAHgDIAIgEIAEgBIAHABIAJACIAMABIAIACIACACQAUgJAaAGIADACIACACQAEAGALgBIAAAAIALgCQAMgEANgCIAAAAQATAAAQAFIAHABIAEABIAHADIAHABIABAAQAUgEATADIAVABIANACIANACQAOACAOgEIAJABIALABIANAAQAFACAGABIAVgBIAOABQALgBAKACIAIACQAHACgBAEIgGAFIgCABIg4AEIgcAFIgCAAIhxgBIgNABQgUABgSgDIgXABIgFgBIgFgBIgGgBIgGAGQgEACgHABIgHABQgJAAgHACIgZACIgMgBIgMgDIgOgBIgtACQgKABgJACIgFAAIgGABIgjgCQgNgDgNAAIgDABQgMABgKgEQgIgCgKACIgnACIgFABQgLAGgNgEIgDgBIgHgBIgEABIgCAAIgEgBQgLgEgLADIgLAEIgNABIgLAAIgLAAIgOgDIgJACIgGADIgIACIgNADIgIgDIgOgFIgIAAIgMADIgFABIgFACIgJABIgFAAIgFgBIgMgDIgHAAQgHACgIADIgJADQgFgFgIAAg");
	this.shape_37.setTransform(35.9768,4.0906);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AtiADQgBgDACgDQATgGAFAAIAbACQAHABAHAAQAKABAJgCQAEAAADgBQAGgBAGgBIAOgCQALAAALgBQALAAALgCIAZgCQAUgIAVAHIAHgBIALgFQAIgFAJgCQAKgCANABQAIABAHABQAGABAGADQAFACAHABIALgBQAFAAAEAAQAEgBACgDQADgBADgBQAagEAUAKQACAAAAgBQADABAHAAQAGAAAFgDIAIgCQAHABAGADQAKAGANgCQAUgDASAFIAVADIASgBQAKAAAHgCQARgGAUABIASABIALgCQABAAABAAQADgCAEgDQACgBACgBQAJABAMACQAHABAJABQACAAACgBIAKgEQADAAAEAAQAJABAKAAQAFAAAFAAIANABQADABACgBIALgDQALgBAMAEQACAAABABIAHABQAGAAAGAAQACACACABQAJAGALACQAHAAAGgCQADgBACgCQADgDAEgCQADgCADgBQAHgBAIABQADABADABQADACACABQADADAFABQAEACAFAAQANAAAKgIQABgBACgBQAFAAAFgBIAJgDIACgBQAOgHAMAEIALAEQACABAEAAIAFAAQAJgBAJgBQAJAAAKgBQAAAAABAAIAJADIAEACQACABABACQADABADgBQAJAAAHgCQAFgBAFAAQABAAACABQAEACAFABQAFABAFADQABAAABAAIAMACIARgCQATgDARAHQAHACAJAAIAdgDQATgEATADQAFAAAEAAQAJgBAHgEQAEgCAEgCQACAAACAAIAIAAQAEACAFAAQAGABAGAAQAHAAACABQABABABAAQAVgJAZAGQACABACABIADACQAEAFALgBIAAAAQAGAAAFgCQAMgEAOgCQAAAAABAAQATgBAQAFQADABAEABIAKAFIAIABQAAAAABAAQAVgFATAFIAVABIAOACQAHABAGABQAPACAOgDIAJABQAGABAFABQAHABAHgBQAFACAHAAQAKAAALgBIAOAAQAMgBAKACQAFABADABQAHADAAADQgDACgEADQgBAAgBABIgEABIg2AEQgOACgOAEIgDAAIgFABIhvgBIgNABQgVABgSgDIgIgBIgQABIgFAAIgFgCIgGAAIgCABIgFAEQgEACgHABIgHABQgKAAgHACIgmAAIgJgBIgDgBIgVgCIgoABQgLABgJADIgFAAIgGABIgkgCQgNgDgOAAIgDAAQgMACgKgDQgJgCgKACIgpABIgEABQgMAFgNgEIgEAAQgDAAgEgBQgCABgCAAIgCAAIgEAAQgLgEgLADIgMAEIgOABIgLgBQgFAAgGAAQgHgCgHgBQgGABgEACQgEABgDACQgDABgEABQgJABgFADQgEgCgEgBQgIgDgHgCQgEAAgEgBQgGABgGACQgDABgCABIgFABIgKABIgGgBQgCAAgCgBQgGgCgHgBQgDAAgEAAQgHACgIADQgFACgEABQgGgEgIgBQgDAAgEgCQgCgBgCgBQgFgCgFgBQgHAAgHABQgIAAgHABIgLABIgLgBIgMgDQgMgDgLADIgGAAQgDgBgCAAQgEgBgDAAIgEABQgHABgIgBQgFAAgGgBIgsAAQgKgDgJACQgKABgMgCIgDAAQgOAAgNADIgkACIgKgBQgJgDgLgCIguAAIgRAEIgBAAIgLABIgiABQgIgDgKABIgLgBQgHgBgFgCIgGgDIgHAAIgEABIgGAAIgKgBIgIABQgRAFgVgBIh7gDIgIgBQgEgBgEgBQgLgDgLgDIg1gDIgDgBQgFgDgGgBg");
	this.shape_38.setTransform(35.4833,4.6137);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhJAiIgHgCIgEgCIgKgDQgHAAgHABIgPABIgLABIgLgBIgMgDQgMgDgLADIgGAAIgFgBIgHgBIgEABQgHABgIgBIgLgBIgsAAQgKgDgJACQgKABgMgCIgDAAQgOAAgNADIgkACIgKgBQgJgDgLgCIguAAIgRAEIgBAAIgLABIgiABQgIgDgKABIgLgBQgHgBgFgCIgGgDIgHAAIgEABIgGAAIgKgBIgIABQgRAFgVgBIh7gDIgIgBIgIgCIgWgGIg1gDIgDgBQgFgDgGgBQgBgDACgDQATgGAFAAIAbACIAOABQAKABAJgCIAHgBIAMgCIAOgCQALAAALgBIAWgCIAZgCQAUgIAVAHIAHgBIALgFQAIgFAJgCQAKgCANABIAPACIAMAEQAFACAHABIALgBIAJAAQAEgBACgDIAGgCQAagEAUAKIACgBIAKABQAGAAAFgDIAIgCQAHABAGADQAKAGANgCQAUgDASAFIAVADIASgBQAKAAAHgCQARgGAUABIASABIALgCIACAAIAHgFIAEgCIAVADIAQACIAEgBIAKgEIAHAAQAJABAKAAIAKAAIANABIAFAAIALgDQALgBAMAEIADABIAHABIAMAAIAEADQAJAGALACQAHAAAGgCIAFgDIAHgFIAGgDIAPAAIAGACIAFADIAIAEQAEACAFAAQANAAAKgIIADgCIAKgBIAJgDIACgBQAOgHAMAEIALAEQACABAEAAIAFAAIASgCIATgBIABAAIAJADIAEACIADADQADABADgBIAQgCIAKgBIADABIAJADIAKAEIACAAIAMACIARgCQATgDARAHQAHACAJAAIAdgDQATgEATADIAJAAQAJgBAHgEIAIgEIAEAAIAIAAQAEACAFAAQAGABAGAAIAJABIACABQAVgJAZAGIAEACIADACQAEAFALgBIAAAAIALgCQAMgEAOgCIABAAQATgBAQAFIAHACIAKAFIAIABIABAAQAVgFATAFIAVABIAOACIANACQAPACAOgDIAJABIALACQAHABAHgBQAFACAHAAQAKAAALgBIAOAAQAMgBAKACIAIACQAHADAAADIgHAFIgCABIgEABIg2AEIgcAGIgDAAIgFABIhvgBIgNABQgVABgSgDIgIgBIgQABIgFAAIgFgCIgGAAIgCABIgFAEQgEACgHABIgHABQgKAAgHACIgmAAIgJgBIgDgBIgVgCIgoABQgLABgJADIgFAAIgGABIgkgCQgNgDgOAAIgDAAQgMACgKgDQgJgCgKACIgpABIgEABQgMAFgNgEIgEAAIgHgBIgEABIgCAAIgEAAQgLgEgLADIgMAEIgOABIgLgBIgLAAIgOgDIgKADIgHADIgHACQgJABgFADIgIgDIgPgFIgIgBIgMADIgFACIgFABIgKABIgGgBIgEgBIgNgDIgHAAQgHACgIADIgJADQgGgEgIgBg");
	this.shape_39.setTransform(35.4833,4.6137);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("At8AEQgCgEACgCQAUgGAFAAIAcABQAHABAHAAQALAAAJgCQAEAAADgBQAGAAAGgCIAPgBQALABAMgBQALAAALgCIAagCQAUgGAWAFIAIgBIAMgEQAIgEAJgBQALgDANABQAIABAHAAQAGACAGACQAGACAHABIAMAAQAFAAADgBQAFgBACgDQADgCADgBQAbgFAUALIACgBQACgBAIAAQAGAAAGgDIAIgBQAHAAAGACQALAHAOgCQATgCATAEIApADQAJAAAHgDQATgGAUACIASABIALgBQABgBABAAQAEgCAEgCQACgBACgBQAJAAANACQAIABAIABQADAAABgBIAHgEIADgBQAEgBADAAQAKABAKAAQAFAAAGAAIANABQADABACgBIALgEQALgDANAFQABAAABABIAHACQAGABAGAAQACACACABQAKAHALABQAHAAAGgCQADgBACgCQAEgDAEgCQADgBADgBQAJAAAHABQADACAEABQACACACABQADADAFABQAFABAFAAQANAAALgIQABgBABgBQAFABAGAAIAKgDIACgBQAOgGANADIAMADQACABAEAAIAFgBQAJAAAJgBQAKAAAKgCQAAAAABABIAJABIAFACQACABACABQADABADAAQAJgBAIgCQAFgBAEAAQACAAABABQAFACAFACQAFABAGACQAAAAABAAIAMACIATgBQATgCARAGQAIACAJAAIAIAAIAWgDQATgEAUADQAFABAEAAQAJAAAHgFQAEgCAFgCQACgBACAAIAHABQAFACAEAAQAHABAGgBQAHAAACAAQABAAACABQAVgJAaAFQACABACABIADACQAFAEALAAIABAAQAGgBAFgCQAMgFAOgCIABAAQAVgBAPAGQADABAEACIAKAFIAIACQAAAAABgBQAWgGATAHIAkADQAHABAGAAQAPADAPgCIAKABQAFACAGABQAHABAHgBQAGABAGAAQALAAALgBIAPgBQAMgBAKACQAFABAEACQAGADABADQgEABgDADQgCABgBAAIgEABIg3AEQgPAEgPAEIgCAAIgFABIiAACQgWABgSgFIgIAAIgQABIgLgCIgGAAIgDABIgFADQgEACgHABIgIABQgJgBgIADIgnAAIgJgCIgDgBIgQgCIgvAAQgLABgKADIgLACIglgCQgNgEgPABIgDAAQgMACgLgCQgJgCgKACIgqABIgFAAQgMAEgNgDIgEAAQgEAAgDAAQgDAAgCABIgCAAIgEgBQgLgDgMADIgMADIgZABQgGAAgGgBQgHgBgIgBQgFABgFACQgEABgDACQgEABgEABQgJABgFAEQgEgCgEgBQgIgDgIgCQgEgBgEAAQgGABgGACQgDABgDABIgPAAIgGgBQgCAAgCgBQgGgCgHgBQgEAAgEABQgHABgJADQgEACgFABQgGgDgIgBQgDgBgEgBQgDgBgCgBQgFgCgFgBQgHAAgIACQgHAAgIABIgWgBIgNgEQgMgDgLAEIgFAAIgBAAQgDAAgCgBQgEAAgDAAIgEABQgIABgHAAQgGgBgFgCIgFAAIgqgBQgKgCgIACQgLACgMgCIgDAAQgPAAgOADIgJABIgbABIgLgBQgJgDgLgBIgvgBIgSADIgBAAIgLACIgkAAQgIgCgJAAIgMgBQgIgBgEgDIgHgEIgLACIgQAAIgIAAQgSAEgVgBIh/gCIgHgBQgFAAgEgBQgLgDgMgCIg3gDIgDgBQgFgDgGgBg");
	this.shape_40.setTransform(34.975,5.0938);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAzAkIgQgFIgIgBIgMADIgGACIgPAAIgGgBIgEgBIgNgDIgIABQgHABgJADIgJADQgGgDgIgBIgHgCIgFgCIgKgDIgPACIgPABIgWgBIgNgEQgMgDgLAEIgFAAIgBAAIgFgBIgHAAIgEABQgIABgHAAIgLgDIgFAAIgqgBQgKgCgIACQgLACgMgCIgDAAQgPAAgOADIgJABIgbABIgLgBIgUgEIgvgBIgSADIgBAAIgLACIgkAAQgIgCgJAAIgMgBQgIgBgEgDIgHgEIgLACIgQAAIgIAAQgSAEgVgBIh/gCIgHgBIgJgBIgXgFIg3gDIgDgBQgFgDgGgBIgBAAQgCgEACgCQAUgGAFAAIAcABIAOABQALAAAJgCIAHgBIAMgCIAPgBQALABAMgBQALAAALgCIAagCQAUgGAWAFIAIgBIAMgEQAIgEAJgBQALgDANABIAPABIAMAEQAGACAHABIAMAAIAIgBQAFgBACgDIAGgDQAbgFAUALIACgBIAKgBQAGAAAGgDIAIgBQAHAAAGACQALAHAOgCQATgCATAEIApADQAJAAAHgDQATgGAUACIASABIALgBIACgBIAIgEIAEgCIAWACIAQACIAEgBIAHgEIADgBIAHgBIAUABIALAAIANABQADABACgBIALgEQALgDANAFIACABIAHACIAMABIAEADQAKAHALABQAHAAAGgCIAFgDIAIgFIAGgCIAQABIAHADIAEADQADADAFABQAFABAFAAQANAAALgIIACgCIALABIAKgDIACgBQAOgGANADIAMADQACABAEAAIAFgBIASgBIAUgCIABABIAJABIAFACIAEACQADABADAAQAJgBAIgCIAJgBIADABIAKAEIALADIABAAIAMACIATgBQATgCARAGQAIACAJAAIAIAAIAWgDQATgEAUADIAJABQAJAAAHgFIAJgEIAEgBIAHABQAFACAEAAQAHABAGgBIAJAAIADABQAVgJAaAFIAEACIADACQAFAEALAAIABAAQAGgBAFgCQAMgFAOgCIABAAQAVgBAPAGIAHADIAKAFIAIACIABgBQAWgGATAHIAkADQAHABAGAAQAPADAPgCIAKABQAFACAGABQAHABAHgBIAMABIAWgBIAPgBQAMgBAKACIAJADQAGADABADIgHAEIgDABIgEABIg3AEIgeAIIgCAAIgFABIiAACQgWABgSgFIgIAAIgQABIgLgCIgGAAIgDABIgFADQgEACgHABIgIABQgJgBgIADIgnAAIgJgCIgDgBIgQgCIgvAAQgLABgKADIgLACIglgCQgNgEgPABIgDAAQgMACgLgCQgJgCgKACIgqABIgFAAQgMAEgNgDIgEAAIgHAAIgFABIgCAAIgEgBQgLgDgMADIgMADIgZABIgMgBIgPgCIgKADIgHADIgIACQgJABgFAEIgIgDg");
	this.shape_41.setTransform(34.975,5.0938);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AuVAHQgDgEACgDQAVgGAFAAIAcAAQAIABAHAAQALAAAJgDQAEAAADAAQAHgBAGgBIAPgBQALADANgBQALAAALgCIAbgDQAVgFAXAFIAIgBIANgEQAIgDAJgBQAMgCANABQAIAAAHAAQAHACAGACQAGABAHABIAMAAQAGABADgBQAFgBACgEQADgCADgCQAbgFAWALIABgCQACgBAIgBQAHAAAGgDIAIgBQAHABAHABQALAGAOAAQAUgCATAEIArADQAJAAAHgDQATgHAVADIATACIALgCQABAAABAAQAEgCAFgDQACAAACgBQAJAAANACQAIABAJAAQADAAABgBIAHgFIADgBQAEgBADgBQAKAAAKAAQAGABAFAAIAOABQADABACgCIALgFQALgEANAGQABABACAAIAHADQAGACAGABQACACACABQAKAHALABQAHAAAHgDQACgBADgCQAEgCAEgDQADAAAEgBQAJAAAHACQAEACADACQACACACABQADADAFABQAFABAGAAQANgBALgHQACgBABgBQAFABAHAAIAKgBIACgBQAOgGAOACIALACIABAAQADABAEAAIAFgBQAKABAJgBQAKgBAKgCQAAAAABAAIAKABIAFACQACABADAAQADABADAAQAKgBAIgCQAEgBAFgBQABABACABQAEACAGACQAGACAFABQABAAAAAAIANACIATAAQATgBATAFQAIACAJAAIAIAAIAWgDQAVgFAUAEQAFABAEAAQAJAAAIgFQAEgCAEgCQACgBACAAIAIABQAEACAFABQAHAAAHgCQAGgBACAAQACAAACABQAVgKAbAGQACABADABIADABQAGAEALgBIAAAAQAHAAAEgCQANgGAPgCIAAAAQAWgCAPAHQAEACADACIALAGIAHACQAAgBABAAQAXgHAUAIIAkADQAHABAHAAQAPADAPgBIAKACQAFACAGABQAIABAHgBQAGABAGAAQAMgBALgBIAQgBQAMgCALACQAEABAEACQAGADACADQgEACgEADQgBAAgCABIgEABIg4AEQgQAFgPAEIgCABIiIAEQgYABgSgGIgIgBIgiAAIgJAEQgEACgHAAIgIABQgKgBgIADIgxgCIgDgBIgQgDIgxgBQgLACgKADIgLACIgmgCQgOgEgPABIgEAAQgMACgLgBQgKgBgKACIgrgBIgFABQgNADgNgDIgFAAQgDAAgEAAQgCABgCABIgCAAIgFgBQgLgCgMACIgNADIgaABQgGgBgGAAQgIgBgIAAQgFABgFABQgEACgDACQgEABgEABQgJAAgFAFQgFgBgEgCQgIgDgIgCQgEgBgFAAQgGACgGACQgDAAgDABIgGAAIgJgBIgGgBQgDgBgCAAQgGgDgHAAQgEAAgEAAQgIABgJADQgEACgFABQgGgCgJgBQgDgBgEgBQgDgBgCgCQgFgBgGgBQgHABgIABQgHAAgIABIgXAAIgNgFQgMgDgLAEIgFABIgCAAQgCgBgDAAQgDAAgEABIgEAAQgIACgIgBQgFgBgGgCIgFgBIgngBIgEAAQgKgCgJACQgKADgNgCIgDAAQgPABgPACIgKABIgbABIgLgBQgKgCgLgBIgwgBIgTABIgBAAIgLADIgOABIgXgBQgIgDgKAAIgLgBQgJgBgEgDIgHgFIgRADIgTAAQgTACgVgBIiKgBQgEAAgFgBQgMgCgMgCIg4gDIgEgBQgFgCgGgBg");
	this.shape_42.setTransform(34.435,5.3658);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AA0AmQgIgDgIgCIgJgBIgMAEIgGABIgGAAIgJgBIgGgBIgFgBQgGgDgHAAIgIAAQgIABgJADIgJADIgPgDIgHgCIgFgDIgLgCIgPACIgPABIgXAAIgNgFQgMgDgLAEIgFABIgCAAIgFgBIgHABIgEAAQgIACgIgBIgLgDIgFgBIgngBIgEAAQgKgCgJACQgKADgNgCIgDAAQgPABgPACIgKABIgbABIgLgBQgKgCgLgBIgwgBIgTABIgBAAIgLADIgOABIgXgBQgIgDgKAAIgLgBQgJgBgEgDIgHgFIgRADIgTAAQgTACgVgBIiKgBIgJgBIgYgEIg4gDIgEgBIgLgDIgBAAQgDgEACgDQAVgGAFAAIAcAAIAPABQALAAAJgDIAHAAIANgCIAPgBQALADANgBQALAAALgCIAbgDQAVgFAXAFIAIgBIANgEQAIgDAJgBQAMgCANABIAPAAIANAEIANACIAMAAIAJAAQAFgBACgEIAGgEQAbgFAWALIABgCIAKgCQAHAAAGgDIAIgBIAOACQALAGAOAAQAUgCATAEIArADQAJAAAHgDQATgHAVADIATACIALgCIACAAIAJgFIAEgBQAJAAANACIARABQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIAHgFIADgBIAHgCIAUAAIALABIAOABQADABACgCIALgFQALgEANAGIADABIAHADIAMADIAEADQAKAHALABQAHAAAHgDIAFgDIAIgFIAHgBQAJAAAHACIAHAEIAEADQADADAFABQAFABAGAAQANgBALgHIADgCQAFABAHAAIAKgBIACgBQAOgGAOACIALACIABAAQADABAEAAIAFgBQAKABAJgBIAUgDIABAAIAKABIAFACIAFABIAGABIASgDIAJgCIADACIAKAEIALADIABAAIANACIATAAQATgBATAFQAIACAJAAIAIAAIAWgDQAVgFAUAEIAJABQAJAAAIgFIAIgEIAEgBIAIABQAEACAFABQAHAAAHgCIAIgBIAEABQAVgKAbAGIAFACIADABQAGAEALgBIAAAAQAHAAAEgCQANgGAPgCIAAAAQAWgCAPAHIAHAEIALAGIAHACIABgBQAXgHAUAIIAkADIAOABQAPADAPgBIAKACQAFACAGABIAPAAIAMABIAXgCIAQgBQAMgCALACIAIADQAGADACADQgEACgEADIgDABIgEABIg4AEIgfAJIgCABIiIAEQgYABgSgGIgIgBIgiAAIgJAEQgEACgHAAIgIABQgKgBgIADIgxgCIgDgBIgQgDIgxgBQgLACgKADIgLACIgmgCQgOgEgPABIgEAAQgMACgLgBQgKgBgKACIgrgBIgFABQgNADgNgDIgFAAIgHAAIgEACIgCAAIgFgBQgLgCgMACIgNADIgaABIgMgBIgQgBIgKACIgHAEIgIACQgJAAgFAFIgJgDg");
	this.shape_43.setTransform(34.435,5.3658);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AutAKQgFgEACgDQAVgGAFgBIAeAAQAHABAIgBQALAAAKgDQADAAAEAAQAHgBAGgBIAPAAQAMADANAAQALAAAMgCIAPgDIAMAAQAXgEAXAEIAIgBIANgCQAJgDAKgBQAMgBANAAQAIAAAIAAQAHABAGACQAHABAHABIAMAAQAGABADgBQAGgBABgEQADgCADgCQAcgGAXALIABgDQABgBAJgCQAHAAAGgDIAIgBQAIAAAHABQAMAGAOABQAUgBAUADIArADQALABAHgDQATgJAVAFIAUACIALgCQABAAABAAQAEgCAFgDQACAAACgBQAKgBANADQAJABAJAAQADAAABgBIAHgHIADgBQADgBAEgCQAKABAKgBQAGABAGAAIAOACQADAAACgCIALgGQAMgFANAHQABAAACABIAHADQAGADAGACQACACACABQAKAIALAAQAIAAAHgDQACgBADgCQAEgCAEgDQAEAAADgBQALABAHADQADACAEADQABABACACQAEACAFACQAFABAGgBQAOgBALgHQABgBACgBQAFACAHABIALgBIACgBQAPgFAOABIAMABIABAAQADABAEgBIAGAAQAJABAKgBQAKgBAKgDQABAAAAAAIALABIAFABQADAAADABQADAAAEAAQAJgBAIgCQAFgBAFgBQABABACABQAEADAGACQAGABAGACQAAAAABAAIANACIAUAAQATAAATAEQAIACAKAAIAIABIAXgEQAVgFAVAEQAFACAEAAQAKAAAHgFQAEgDAFgCQACAAACgBIAIACQAEACAFAAQAHABAHgDQAGgBADgBQACAAACAAQAWgJAbAFQADABADABIADABQAHADAKAAIABAAQAHAAAEgDQANgGAPgDQABAAAAAAQAXgCAOAIQAEACADACIALAHIAHACQABAAAAgBQAYgIAUAJIAmAEQAHABAHAAQAPADAPAAIALACQAFADAGAAQAIACAHgBQAHABAGgBQAMgBAMgCIAPgBQANgCALACQAFABAEACQAFADADADQgFACgDADQgCAAgBABIgEACIg6AEQgRAFgPAFIgHACIiHAEQgYABgTgGIgIgCIgRABIgLAAIgKABIgHACQgEACgHAAIgIAAQgKAAgIADIgzgDIgTgEIgygCQgMACgLADIgLACIgngBQgOgEgPAAIgEABQgNACgLgBQgKAAgLACIgsgBIgFAAQgOACgNgCIgFgBQgDABgEAAQgCABgDABIgHAAQgLgCgMACIgOADIgaABQgGgBgGgBQgJgBgIAAQgFABgGACQgDACgEACQgEABgEABQgKAAgFAGQgEgBgFgCQgIgDgJgCQgEgBgEAAQgHABgGACQgDABgDAAIgGAAIgQgDQgCgBgDAAQgGgDgIAAQgDAAgFAAQgIABgIADQgFACgFABQgHgBgIgBQgEgBgEgBQgDgBgCgCQgFgBgGgBQgHABgIACQgIAAgIAAIgYAAIgNgFQgMgEgMAFIgFABIgBAAQgDAAgCgBQgEABgEAAIgEABQgIACgIgBQgGgBgFgCIgFgBIgpgCIgDgBQgLgCgJADQgLADgNgBIgDAAQgQABgPACIgmACIgLgBQgLgCgKgBIhGgBIgMADIgOABIgXgCQgJgCgKgBIgMgBQgJAAgEgEIgGgFIgHABIgFABIgGABIgTAAQgUABgVgBIiOAAQgFAAgEAAQgNgCgNgBIg5gEIgEAAQgFgCgHgBg");
	this.shape_44.setTransform(33.8813,5.6413);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AA1ApQgIgDgJgCIgIgBIgNADIgGABIgGAAIgQgDIgFgBQgGgDgIAAIgIAAQgIABgIADIgKADIgPgCIgIgCIgFgDIgLgCIgPADIgQAAIgYAAIgNgFQgMgEgMAFIgFABIgBAAIgFgBIgIABIgEABQgIACgIgBQgGgBgFgCIgFgBIgpgCIgDgBQgLgCgJADQgLADgNgBIgDAAQgQABgPACIgmACIgLgBIgVgDIhGgBIgMADIgOABIgXgCIgTgDIgMgBQgJAAgEgEIgGgFIgHABIgFABIgGABIgTAAQgUABgVgBIiOAAIgJAAIgagDIg5gEIgEAAIgMgDIAAAAQgFgEACgDQAVgGAFgBIAeAAIAPAAQALAAAKgDIAHAAIANgCIAPAAQAMADANAAQALAAAMgCIAPgDIAMAAQAXgEAXAEIAIgBIANgCQAJgDAKgBQAMgBANAAIAQAAIANADIAOACIAMAAIAJAAQAGgBABgEIAGgEQAcgGAXALIABgDQABgBAJgCQAHAAAGgDIAIgBIAPABQAMAGAOABQAUgBAUADIArADQALABAHgDQATgJAVAFIAUACIALgCIACAAIAJgFIAEgBQAKgBANADIASABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIAHgHIADgBIAHgDIAUAAIAMABIAOACQADAAACgCIALgGQAMgFANAHIADABIAHADIAMAFIAEADQAKAIALAAQAIAAAHgDIAFgDIAIgFIAHgBQALABAHADIAHAFIADADQAEACAFACQAFABAGgBQAOgBALgHIADgCIAMADIALgBIACgBQAPgFAOABIAMABIABAAIAHAAIAGAAIATAAIAUgEIABAAIALABIAFABIAGABIAHAAIARgDIAKgCIADACQAEADAGACIAMADIABAAIANACIAUAAQATAAATAEQAIACAKAAIAIABIAXgEQAVgFAVAEIAJACQAKAAAHgFIAJgFIAEgBIAIACQAEACAFAAQAHABAHgDIAJgCIAEAAQAWgJAbAFIAGACIADABQAHADAKAAIABAAQAHAAAEgDQANgGAPgDIABAAQAXgCAOAIIAHAEIALAHIAHACIABgBQAYgIAUAJIAmAEIAOABQAPADAPAAIALACQAFADAGAAQAIACAHgBIANAAIAYgDIAPgBQANgCALACIAJADQAFADADADQgFACgDADIgDABIgEACIg6AEQgRAFgPAFIgHACIiHAEQgYABgTgGIgIgCIgRABIgLAAIgKABIgHACQgEACgHAAIgIAAQgKAAgIADIgzgDIgTgEIgygCQgMACgLADIgLACIgngBQgOgEgPAAIgEABQgNACgLgBQgKAAgLACIgsgBIgFAAQgOACgNgCIgFgBIgHABIgFACIgHAAQgLgCgMACIgOADIgaABIgMgCIgRgBIgLADIgHAEIgIACQgKAAgFAGIgJgDg");
	this.shape_45.setTransform(33.8813,5.6413);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AvGANQgFgEABgEQAVgGAFAAIAfgBQAIAAAHAAQAMgBAKgEQAEAAADAAQAHAAAHgBIAQAAQAMAFANAAQAMAAAMgDIAPgCIANgBQAXgCAXADIAXgDQAKgBAKgBQAMgBANgBQAIAAAIAAQAHABAHABQAHACAHAAIANABQAGABAEgBQAFgBABgFQADgCADgDQAdgGAXALQABgDAAAAQABgDAKgBQAHgBAGgDIAIAAQAIAAAIAAQAMAGAOABQAWAAAUADIAsADQALABAHgEQATgIAWAFIAUADIAMgCQABAAABgBQAEgCAFgCQADAAACgBQAKgBANACQAJABAJAAQAEAAABgBIAGgIIADgBQAEgCAEgCQAKABALgBQAGABAFAAIAPACQADAAACgCIALgHQAMgGANAHQACABABAAIAHAEQAHAEAGADQACACACABQAKAIAMAAQAHAAAHgEQADgBACgBQAFgCAFgDQADAAAEgBQALACAHAEQAEACADADQACABACACQADADAGABQAFABAGgBQAOgCAMgHQABgBACgBQAGADAHACIALAAIACgBQAPgEAPgBIAMAAIACABQADAAAEgBIAGAAQAKABAKgBQAKgBALgDQAAAAABAAIARAAQADABACAAQAEAAAEAAQAKgBAIgCQAFgBAFgCQABACACABQAEADAGACQAGACAGABQABAAABAAIANACIAUABQAUAAATAEQAJABAJABIAJAAIAYgDQAVgGAVAFQAGACAEAAQAKABAHgGQAFgDAFgCQACgBACAAIAIACQAEADAGAAQAGAAAIgEQAFgBAEgCQACAAACAAQAXgJAcAFQACABADAAIAEABQAIADAKAAIAAAAQAHAAAFgDQANgIAQgCQAAAAABAAQAXgDAPAJQADACAEADIAKAIIAIACQAAAAABgBQAYgJAUALIAnADQAIABAHAAQAPADAQACIAKACQAGADAGAAQAIACAIAAQAGAAAHgBQAMgBAMgDIAQgCQANgCALACQAFACAEACQAGADADADQgFACgEACQgBABgBABIgEACIg8AEQgRAGgPAGIgDABIiQAGQgZABgSgIIgJgBIgSABIgLAAIgHABIgDAAIgHACQgFABgHABIgIAAQgLgBgIAEIgzgEIgVgFIgzgCQgNABgKAEIgLADIgogCQgPgFgQABIgDABQgNACgMAAQgLAAgLACIgygBQgOABgOgCIgFAAQgDAAgEABQgDABgCABIgCAAIgFgBQgMAAgNACIgdADIgMAAQgGgBgGgBQgJgBgIABQgGABgFACQgEABgEACQgEACgEABQgLAAgEAHQgFgCgEgCQgJgDgJgCQgEgBgFAAQgGACgHACQgDAAgDAAIgGAAIgLgCIgGgCQgCgBgDgBQgGgCgIgBQgEAAgEABQgIAAgJAEQgFACgFABQgIgBgIgBQgDgBgEgBQgDgBgDgCQgGgBgFgBQgIABgIADQgIAAgIAAIgMAAIgMgBIgNgFQgNgFgMAHIgFABIgBAAQgDAAgDgBQgEABgEABIgEAAQgIADgIgBQgGgBgGgEIgFgBIgtgDQgMgCgIADQgLAFgOgBIgDAAQgQAAgPACIgoADIgMgBQgKgCgLgBIhIgCIgMADIgOABIgYgCQgKgCgKgBIgMgBQgKgBgDgEIgGgGIgHABIgFACIgHABIgKgBIgJAAQgUABgWgCIiSACQgFAAgEAAQgNgBgNgBIg7gDIgEgBQgGgBgGgBg");
	this.shape_46.setTransform(33.3417,5.924);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AA3ArIgSgFIgJgBIgNAEIgGAAIgGAAIgLgCIgGgCIgFgCQgGgCgIgBIgIABQgIAAgJAEIgKADIgQgCIgHgCIgGgDIgLgCIgQAEIgQAAIgMAAIgMgBIgNgFQgNgFgMAHIgFABIgBAAIgGgBIgIACIgEAAQgIADgIgBQgGgBgGgEIgFgBIgtgDQgMgCgIADQgLAFgOgBIgDAAIgfACIgoADIgMgBIgVgDIhIgCIgMADIgOABIgYgCIgUgDIgMgBQgKgBgDgEIgGgGIgHABIgFACIgHABIgKgBIgJAAQgUABgWgCIiSACIgJAAIgagCIg7gDIgEgBIgMgCIgBAAQgFgEABgEQAVgGAFAAIAfgBIAPAAQAMgBAKgEIAHAAIAOgBIAQAAQAMAFANAAQAMAAAMgDIAPgCIANgBQAXgCAXADIAXgDIAUgCIAZgCIAQAAIAOACIAOACIANABIAKAAQAFgBABgFIAGgFQAdgGAXALIABgDQABgDAKgBIANgEIAIAAIAQAAQAMAGAOABQAWAAAUADIAsADQALABAHgEQATgIAWAFIAUADIAMgCIACgBIAJgEIAFgBQAKgBANACIASABQAEAAABgBIAGgIIADgBIAIgEIAVAAIALABIAPACQADAAACgCIALgHQAMgGANAHIADABIAHAEIANAHIAEADQAKAIAMAAQAHAAAHgEIAFgCIAKgFIAHgBQALACAHAEIAHAFIAEADQADADAGABQAFABAGgBQAOgCAMgHIADgCQAGADAHACIALAAIACgBQAPgEAPgBIAMAAIACABIAHgBIAGAAQAKABAKgBIAVgEIABAAIARAAIAFABIAIAAIASgDIAKgDIADADQAEADAGACIAMADIACAAIANACIAUABQAUAAATAEIASACIAJAAIAYgDQAVgGAVAFIAKACQAKABAHgGIAKgFIAEgBIAIACQAEADAGAAQAGAAAIgEIAJgDIAEAAQAXgJAcAFIAFABIAEABQAIADAKAAIAAAAQAHAAAFgDQANgIAQgCIABAAQAXgDAPAJIAHAFIAKAIIAIACIABgBQAYgJAUALIAnADIAPABQAPADAQACIAKACQAGADAGAAQAIACAIAAQAGAAAHgBIAYgEIAQgCQANgCALACIAJAEQAGADADADIgJAEIgCACIgEACIg8AEIggAMIgDABIiQAGQgZABgSgIIgJgBIgSABIgLAAIgHABIgDAAIgHACIgMACIgIAAQgLgBgIAEIgzgEIgVgFIgzgCQgNABgKAEIgLADIgogCQgPgFgQABIgDABQgNACgMAAQgLAAgLACIgygBQgOABgOgCIgFAAIgHABIgFACIgCAAIgFgBQgMAAgNACIgdADIgMAAIgMgCQgJgBgIABIgLADIgIADIgIADQgLAAgEAHIgJgEg");
	this.shape_47.setTransform(33.3417,5.924);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AvfARQgGgFAAgDQAWgIAGgBIAfAAQAIAAAIgBQAMgBAKgEQAEAAAEAAQAHAAAHAAIAQAAQANAFANABQAMAAANgDIAPgDIANAAQAYgBAYACIAYgBQAKgBAKgBQANgBANAAQAJgBAIAAQAHAAAHABQAHABAIABIANABQAGABAEgBQAFgBABgFQADgDADgCQAegHAYALQABgEAAAAQAAgDALgCQAGgBAHgDIAJAAQAIgBAIAAQAMAGAPACQAWABAUACIAuAEQALABAHgEQAUgKAXAGIAUAEIAMgCQABAAABAAQAFgDAFgCQACAAADgBQAKgCAOADQAJABAJAAQAEAAABgBIAGgJIADgCQAEgCADgCQALAAALgBQAGABAGAAIAPACQAEABABgDIALgIQAMgHAOAIQACAAABABIAHAFQAGAEAHAEQACACACABQAKAJAMgBQAHAAAIgEQADgBACgBQAFgCAFgDQAEAAAEgBQALADAHAFQAEACAEADQABACACABQADADAHACQAFAAAGgBQAOgCANgHQABgBABgBQAHAEAHACIAMABIADgBQAPgDAPgCIAPgBQAEABAEgBIAFAAQALABAKgBQALgBAKgEQABAAAAAAIASgBQAEAAACABQAEgBAEAAQALgBAIgCQAFgBAEgCQACACABABQAFAEAGACQAGABAHACQABAAABAAIAiADQAUABAUADQAJABAJABIAJABIAZgEQAWgHAVAHQAGACAEAAQAKABAIgGQAEgDAFgCQACgBACgBIAJACQAEADAGAAQAGAAAJgEQAEgCAFgCQACAAACgBQAYgJAcAFQADABADAAIAEABQAIACAKAAQABAAAAAAQAHAAAFgDQANgIARgDQAAAAABAAQAYgDAOAKQAEACADADIAEAEIAGAFIAIACQABAAAAgBQAZgKAVAMIAoAEQAHAAAHAAQAQAEAQADIALACQAGADAGABQAIACAIgBQAHABAHgCQAMgCAMgCIARgCQAOgDALACQAEACAFACQAFADAEADQgFACgEACQgCABgBABIgEACIg9AFQgSAGgPAHIgDABIgGABIiNAHQgaABgTgJIgJgCIgwAEQgFABgHAAIgIAAQgLgBgIAEIg1gEIgVgFIgHgBIgugCQgNABgKAFIgMACIgeAAIgLgBQgPgFgQABIgEABQgNACgMABQgLABgMABIgugCIgGAAQgOAAgOgBIgFgBQgEABgEABQgCABgCABIgIAAQgMAAgNABIgeAEIgMgBQgHgBgGgBQgJgBgIABQgGABgGADQgEABgEADQgEABgEABQgLAAgEAIQgFgCgFgCQgJgDgJgCQgFgBgEAAQgHABgHACQgDABgDAAIgGgBIgSgFQgCgBgCgBQgHgDgIAAQgEAAgEABQgJAAgJAEQgFACgFAAQgIABgIgBQgEgBgEgCQgDgBgDgCQgGAAgGgBQgIACgIACQgIAAgIAAIgZAAIgNgGQgOgFgLAHIgGABIgBAAQgDAAgDgBQgEACgDAAIgEABQgJADgIgBQgGgCgGgDIgGgBIgugEQgMgDgIAEQgLAFgPgBIgDAAQgQABgQACIg1ACQgLgBgLgBIhJgEIgNADIgPABIgYgDQgKgBgKgCIgNgBQgKAAgDgFIgGgHIgTAFIgUgBQgVAAgWgCIgZgBIh0AFIgIgBQgFABgFAAQgNgBgOgBIhAgDQgHgBgGAAg");
	this.shape_48.setTransform(32.7732,6.1991);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA4AuQgJgDgJgCIgJgBIgOADIgGABIgGgBIgSgFIgEgCQgHgDgIAAIgIABQgJAAgJAEIgKACQgIABgIgBIgIgDIgGgDIgMgBIgQAEIgQAAIgZAAIgNgGQgOgFgLAHIgGABIgBAAIgGgBIgHACIgEABQgJADgIgBQgGgCgGgDIgGgBIgugEQgMgDgIAEQgLAFgPgBIgDAAIggADIg1ACIgWgCIhJgEIgNADIgPABIgYgDIgUgDIgNgBQgKAAgDgFIgGgHIgTAFIgUgBIgrgCIgZgBIh0AFIgIgBIgKABIgbgCIhAgDIgNgBIgBAAQgGgFAAgDIAcgJIAfAAIAQgBQAMgBAKgEIAIAAIAOAAIAQAAQANAFANABQAMAAANgDIAPgDIANAAQAYgBAYACIAYgBIAUgCIAagBIARgBIAOABIAPACIANABIAKAAQAFgBABgFIAGgFQAegHAYALIABgEQAAgDALgCIANgEIAJAAIAQgBQAMAGAPACIAqADIAuAEQALABAHgEQAUgKAXAGIAUAEIAMgCIACAAIAKgFIAFgBQAKgCAOADIASABQAEAAABgBIAGgJIADgCIAHgEIAWgBIAMABIAPACQAEABABgDIALgIQAMgHAOAIIADABIAHAFIANAIIAEADQAKAJAMgBQAHAAAIgEIAFgCIAKgFIAIgBQALADAHAFIAIAFIADADQADADAHACQAFAAAGgBQAOgCANgHIACgCIAOAGIAMABIADgBIAegFIAPgBIAIAAIAFAAQALABAKgBQALgBAKgEIABAAIASgBIAGABIAIgBIATgDIAJgDIADADQAFAEAGACIANADIACAAIAiADQAUABAUADIASACIAJABIAZgEQAWgHAVAHQAGACAEAAQAKABAIgGIAJgFIAEgCIAJACQAEADAGAAQAGAAAJgEIAJgEIAEgBQAYgJAcAFIAGABIAEABQAIACAKAAIABAAQAHAAAFgDQANgIARgDIABAAQAYgDAOAKIAHAFIAEAEIAGAFIAIACIABgBQAZgKAVAMIAoAEIAOAAIAgAHIALACQAGADAGABQAIACAIgBQAHABAHgCIAYgEIARgCQAOgDALACIAJAEIAJAGIgJAEIgDACIgEACIg9AFQgSAGgPAHIgDABIgGABIiNAHQgaABgTgJIgJgCIgwAEIgMABIgIAAQgLgBgIAEIg1gEIgVgFIgHgBIgugCQgNABgKAFIgMACIgeAAIgLgBQgPgFgQABIgEABIgZADIgXACIgugCIgGAAIgcgBIgFgBIgIACIgEACIgIAAQgMAAgNABIgeAEIgMgBIgNgCQgJgBgIABQgGABgGADIgIAEIgIACQgLAAgEAIIgKgEg");
	this.shape_49.setTransform(32.7732,6.1991);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Av4AUQgSgNAcgCIALgCIAggDQAWABARgGIAoAAQAYALAbgGIAQgDIAOgBIA8ACIAUgBIAPAAIATgBIAYgCIAsAEQAQACAAgJIAGgGQAfgHAZALIAAgFQAAgDALgCIAOgFIAagBQANAGAPACIAiADIAbACIAdADQALABAHgEQAUgLAYAHIAVAFIAOgDQAPgJAZAEIATACQAEAAABgCIAGgKIAKgHIAWgBIAcADQAEABABgDIALgKQANgIARALIAYASQARAOAVgLIAPgGIAIgBQATAGALAMQAHAHAPgDQAQgEAOgHQAHAEAIADIAMACIAPgDIAhgFIAQgBQAWACAWgHIATgCQAagBARgGIADADQAFAEAGACIANADIAQABIA/AIIAcACIAZgEQAWgIAWAIQARAGALgJQAGgEAIgDIAJACQAJAIAQgKQAfgSArAJIAXACQAIAAAFgDQANgJASgDQAggFAOASIALAKIAIACQAagNAVAPIAMABIAsACIAQAEIAbAHQAGADAHABQAPADAPgDIAYgEIATgEQAUgFAOAJIAGAEIAEACQgIACgEAEIgEACIgvAFIgQAAQgSAHgQAHIgJACIh5AHIgYACQgbABgTgKIgJgCIgmAEIgSABIgOAAQgMgCgIAFIgUgBIgUgDIgOgBIgVgGIgIgBIgggDIgOAAQgOACgKAFIgMADIgMAAIgTAAIgLgCQgQgFgQABIgUACIgkAGIgLAAIgagCIgOgCIgLgBIgXAAQgGABgHADIgbADIglACIgNgBQgcgHgXANIgIACQgMAAgEAJQgOgGgPgDIgJgBIgOAEIgNgBIgRgGQgUgKgbAJQgWAIgTgLIgMgBIgRAFIgqgBIgNgGQgOgGgMAJIgFABIgHgBIgMAEQgQAFgOgJIgFgCIgggDIgQgBQgMgDgJAFQgLAGgPgBIhEAEIgSABIgvgDIgUgBIgTgDIgPAAIgOADIgPABIgLgCIgvgFQgLgBgDgFIgEgFIgCgDIgHACIgFACIgHABIhagEIgIABIgYACIgMAAIgQAAIhOADIhigEg");
	this.shape_50.setTransform(32.2228,6.477);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAmArIgJgBIgOAEIgNgBIgRgGQgUgKgbAJQgWAIgTgLIgMgBIgRAFIgqgBIgNgGQgOgGgMAJIgFABIgHgBIgMAEQgQAFgOgJIgFgCIgggDIgQgBQgMgDgJAFQgLAGgPgBIhEAEIgSABIgvgDIgUgBIgTgDIgPAAIgOADIgPABIgLgCIgvgFQgLgBgDgFIgEgFIgCgDIgHACIgFACIgHABIhagEIgIABIgYACIgMAAIgQAAIhOADIhigEIgKAAQgSgNAcgCIALgCIAggDQAWABARgGIAoAAQAYALAbgGIAQgDIAOgBIA8ACIAUgBIAPAAIATgBIAYgCIAsAEQAQACAAgJIAGgGQAfgHAZALIAAgFQAAgDALgCIAOgFIAagBQANAGAPACIAiADIAbACIAdADQALABAHgEQAUgLAYAHIAVAFIAOgDQAPgJAZAEIATACQAEAAABgCIAGgKIAKgHIAWgBIAcADQAEABABgDIALgKQANgIARALIAYASQARAOAVgLIAPgGIAIgBQATAGALAMQAHAHAPgDQAQgEAOgHQAHAEAIADIAMACIAPgDIAhgFIAQgBQAWACAWgHIATgCQAagBARgGIADADQAFAEAGACIANADIAQABIA/AIIAcACIAZgEQAWgIAWAIQARAGALgJQAGgEAIgDIAJACQAJAIAQgKQAfgSArAJIAXACQAIAAAFgDQANgJASgDQAggFAOASIALAKIAIACQAagNAVAPIAMABIAsACIAQAEIAbAHQAGADAHABQAPADAPgDIAYgEIATgEQAUgFAOAJIAGAEIAEACQgIACgEAEIgEACIgvAFIgQAAQgSAHgQAHIgJACIh5AHIgYACQgbABgTgKIgJgCIgmAEIgSABIgOAAQgMgCgIAFIgUgBIgUgDIgOgBIgVgGIgIgBIgggDIgOAAQgOACgKAFIgMADIgMAAIgTAAIgLgCQgQgFgQABIgUACIgkAGIgLAAIgagCIgOgCIgLgBIgXAAIgNAEIgbADIglACIgNgBQgcgHgXANIgIACQgMAAgEAJQgOgGgPgDg");
	this.shape_51.setTransform(32.2228,6.477);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AwYAAIAEgCIAFgEQAPgJAVAFIATAEIAYAEQAQADAPgDQAHgBAGgDIAdgHIAPgEIAtgCIANgBQAWgPAaANIAJgCIALgLQAOgSAhAFQASADANAJQAGAEAIAAIAYgDQAsgIAfASQARAKAJgIIAJgCQAIACAGAFQALAJASgGQAXgIAWAIIAaAEIAcgDIBBgHIAQgCIAOgCQAGgCAFgFIADgDQASAHAbAAIATADQAXAHAWgCIARABIAiAFIAPADIAMgCQAIgDAHgEQAPAHAQAEQAQADAHgHQALgMATgGIAIAAIAQAHQAWALARgOIAZgTQARgLAOAJIAKAKQACACAEAAIAcgDIAXABIALAGIAFAKQABADAFAAIATgCQAagEAPAJIAPACIAVgEQAYgHAVALQAHAEAMgBIAdgDIAcgCIAigDQAQgDAOgFIAaABIAOAEQALADAAADIABAFQAZgLAgAHIAGAGQABAJAQgCIAsgEIAaACIATABIAQAAIAUABIA9gCIAPABIAQADQAcAGAZgLIAoAAQASAGAWgBIAhADIALACQAdACgTANIgKAAIhkAEIhQgCIgRAAIgMAAIgZgDIgHgBIhdAFIgHgCIgFgCIgIgBIgCACIgEAFQgDAFgLABIgwAFIgMACIgPgBIgOgDIgPABIgUACIgUABIgxADIgSAAIhGgFQgQABgLgGQgIgFgNADIgQACIghACIgGACQgOAKgQgGIgMgDIgHAAIgGgBQgMgIgOAFIgOAGIgrABIgRgFIgMACQgTAKgYgIQgbgJgVAKIgRAHIgNAAIgPgEIgJABQgQAEgOAGQgEgJgMAAIgJgCQgWgOgeAIIgNAAIgmgCIgcgDQgGgDgHgBIgXAAIgMABIgOACIgbACIgLAAIglgFIgUgDQgRgBgQAFIgLACIgUAAIgMAAIgMgDQgLgFgOgCIgOAAIgiADIgHABIgWAHIgOABIgVACIgVABQgIgEgMABIgPAAIgRgBIgngDIgKABQgUAKgbgBIgYgCIh9gHIgJgBQgQgIgTgGIgQgBIgwgEIgEgDQgEgEgIgCg");
	this.shape_52.setTransform(31.6891,6.8647);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhUAsIgJgCQgWgOgeAIIgNAAIgmgCIgcgDQgGgDgHgBIgXAAIgMABIgOACIgbACIgLAAIglgFIgUgDQgRgBgQAFIgLACIgUAAIgMAAIgMgDQgLgFgOgCIgOAAIgiADIgHABIgWAHIgOABIgVACIgVABQgIgEgMABIgPAAIgRgBIgngDIgKABQgUAKgbgBIgYgCIh9gHIgJgBQgQgIgTgGIgQgBIgwgEIgEgDQgEgEgIgCIAEgCIAFgEQAPgJAVAFIATAEIAYAEQAQADAPgDQAHgBAGgDIAdgHIAPgEIAtgCIANgBQAWgPAaANIAJgCIALgLQAOgSAhAFQASADANAJQAGAEAIAAIAYgDQAsgIAfASQARAKAJgIIAJgCQAIACAGAFQALAJASgGQAXgIAWAIIAaAEIAcgDIBBgHIAQgCIAOgCQAGgCAFgFIADgDQASAHAbAAIATADQAXAHAWgCIARABIAiAFIAPADIAMgCQAIgDAHgEQAPAHAQAEQAQADAHgHQALgMATgGIAIAAIAQAHQAWALARgOIAZgTQARgLAOAJIAKAKQACACAEAAIAcgDIAXABIALAGIAFAKQABADAFAAIATgCQAagEAPAJIAPACIAVgEQAYgHAVALQAHAEAMgBIAdgDIAcgCIAigDQAQgDAOgFIAaABIAOAEQALADAAADIABAFQAZgLAgAHIAGAGQABAJAQgCIAsgEIAaACIATABIAQAAIAUABIA9gCIAPABIAQADQAcAGAZgLIAoAAQASAGAWgBIAhADIALACQAdACgTANIgKAAIhkAEIhQgCIgRAAIgMAAIgZgDIgHgBIhdAFIgHgCIgFgCIgIgBIgCACIgEAFQgDAFgLABIgwAFIgMACIgPgBIgOgDIgPABIgUACIgUABIgxADIgSAAIhGgFQgQABgLgGQgIgFgNADIgQACIghACIgGACQgOAKgQgGIgMgDIgHAAIgGgBQgMgIgOAFIgOAGIgrABIgRgFIgMACQgTAKgYgIQgbgJgVAKIgRAHIgNAAIgPgEIgJABQgQAEgOAGQgEgJgMAAg");
	this.shape_53.setTransform(31.6891,6.8647);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AwrAUQgTgNAdgCIAMgCIAigDQAXABASgGIApAAQAZALAdgGIARgDIAPgBIA/ACIAUgBIAQAAIAUgBIAagCIAtAEQARACABgJIAGgGQAhgHAZALIABgFQAAgDALgDIAPgEIAbgBQAOAFAQADIAkADIAcACIAeADQAMABAIgEQAVgLAYAHIAWAEIAPgCQAQgJAaAEIAUACQAEAAACgDIAFgKIALgHIAYAAIAcACQAFABABgCIALgLQAOgIASALIAZATQARAOAXgLIAQgHIAIAAQAVAGALAMQAHAHAQgDQARgEAOgIQAHAFAJADIAMACIAQgDIAjgFIARgBQAXACAXgHIAUgDQAbgBASgGIAEADQAFAFAGACIAOACIARACIBCAHIAdADIAagEQAXgIAXAIQATAGALgJQAGgFAJgCIAJACQAKAIAQgKQAhgSAtAIIAYACQAJAAAFgDQANgJATgDQAigFAPASIALAKIAIADQAcgNAWAOIANACIAuACIAQAEIAdAHQAGADAIABQAPADARgDIAYgEIAUgEQAVgFAPAJIAGAEIAEACQgIACgFAEIgEADIgxAEIgQABQgUAGgQAIIgKACIh/AHIgZABQgcABgUgKIgKgBIgoADIgSACIgQAAQgMgCgIAEIgVgBIgWgCIgOgBIgWgHIgIgBIgigCIgPAAQgOABgLAFIgNADIgMAAIgUAAIgMgBQgQgGgSACIgUACIgmAGIgLAAIgcgDIgOgBIgMgCIgYAAQgHACgHACIgcADIgnADIgOgBQgegHgXANIgJACQgMAAgEAJQgPgGgQgEIgJAAIgQAEIgNgBIgSgHQgVgKgcAKQgYAIgTgLIgNgCIgSAFIgsAAIgOgGQgOgGgMAIIgGACIgIgBIgMADQgQAGgPgKIgGgBIghgDIgRgCQgNgDgJAFQgLAHgQgBIhIAEIgTABIgygDIgUgBIgUgDIgQgBIgOAEIgQAAIgMgBIgygGQgLgBgDgEIgEgGIgCgCIgIABIgFACIgHACIhfgFIgIABIgZADIgNAAIgRAAIhRADIhogEg");
	this.shape_54.setTransform(31.2147,7.2647);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAoArIgJAAIgQAEIgNgBIgSgHQgVgKgcAKQgYAIgTgLIgNgCIgSAFIgsAAIgOgGQgOgGgMAIIgGACIgIgBIgMADQgQAGgPgKIgGgBIghgDIgRgCQgNgDgJAFQgLAHgQgBIhIAEIgTABIgygDIgUgBIgUgDIgQgBIgOAEIgQAAIgMgBIgygGQgLgBgDgEIgEgGIgCgCIgIABIgFACIgHACIhfgFIgIABIgZADIgNAAIgRAAIhRADIhogEIgKgBQgTgNAdgCIAMgCIAigDQAXABASgGIApAAQAZALAdgGIARgDIAPgBIA/ACIAUgBIAQAAIAUgBIAagCIAtAEQARACABgJIAGgGQAhgHAZALIABgFQAAgDALgDIAPgEIAbgBQAOAFAQADIAkADIAcACIAeADQAMABAIgEQAVgLAYAHIAWAEIAPgCQAQgJAaAEIAUACQAEAAACgDIAFgKIALgHIAYAAIAcACQAFABABgCIALgLQAOgIASALIAZATQARAOAXgLIAQgHIAIAAQAVAGALAMQAHAHAQgDQARgEAOgIQAHAFAJADIAMACIAQgDIAjgFIARgBQAXACAXgHIAUgDQAbgBASgGIAEADQAFAFAGACIAOACIARACIBCAHIAdADIAagEQAXgIAXAIQATAGALgJQAGgFAJgCIAJACQAKAIAQgKQAhgSAtAIIAYACQAJAAAFgDQANgJATgDQAigFAPASIALAKIAIADQAcgNAWAOIANACIAuACIAQAEIAdAHQAGADAIABQAPADARgDIAYgEIAUgEQAVgFAPAJIAGAEIAEACQgIACgFAEIgEADIgxAEIgQABQgUAGgQAIIgKACIh/AHIgZABQgcABgUgKIgKgBIgoADIgSACIgQAAQgMgCgIAEIgVgBIgWgCIgOgBIgWgHIgIgBIgigCIgPAAQgOABgLAFIgNADIgMAAIgUAAIgMgBQgQgGgSACIgUACIgmAGIgLAAIgcgDIgOgBIgMgCIgYAAIgOAEIgcADIgnADIgOgBQgegHgXANIgJACQgMAAgEAJQgPgGgQgEg");
	this.shape_55.setTransform(31.2147,7.2647);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AxFARQgGgFABgDQAYgIAGgBIAjAAQAJAAAJgBQAMgBALgEQAFAAAEAAIAOgBQAKABAKgBQAEADAFABQAJACAIAAQAOABAPgDIAggEIAzABQAFAAAEgBIAOgBQANAAAOAAQANgCANAAQALgBAKAAQAGABAHAAQAHABAHABIATABQAEABADAAQAKAAACgHQADgDADgCQAggHAaAKQABABABAAQAAgCABgCQABgDALgCQAEgBAEgCIAHgCIABAAQAIAAAIAAQAFABAFAAQAJADAKACQAGABAGABQARABASACIA9AEQAMABAIgEQAWgKAZAGIAWAEIAQgDQABgBACAAQACgCACgBQAPgDAUADQAFAAAGABIAKABQAEAAACgDIACgCQACgDADgEQAFgCAGgDQAMAAANABIAcABQAFAAABgCIAMgJQAIgEAJABQAGABAHADQACABABAAQAGAEAGAEQAHAFAHAFQAGAFAIACQAMACAMgGQALgEAIgDQAEgBAEAAQAFABAFABQAEABADACQAJAFAHAGIAAABQAIAGAPgDQAKgBAIgEQAHgDAHgEQAHAEAJACQAHABAFABQAMgCAKgBIAOgBQADAAAEAAIAJgCIARgBQANABAOgCQAHAAAGgBQAEgBADgBIAEAAQADAAAEgBIAJgBQAFAAAGAAQAVgCAOgEQADACABABQACABABACQAEACAFABIAfAEQAYACAXADIAyAEIAbgEQAUgGAUAEQAEABADABQAOAEALgEQADgBACgCQAHgEAJgDIACAAIAHACQAEADAEABQAHAAAGgCQACAAABAAQABgBACgBQAZgOAgADQAEAAAEABQAGABAIABQACAAADAAIAUACQAJAAAFgEQAGgDAGgCQAKgEALgBQAOgCALACQAQACAJAKIANAJIAIACQAZgKAWAJQACABACACIAcABQAQACARAAQALADAKABIAZAGQAGADAIABQABAAABAAQAPADAQgDQAFAAAGgBIAigFQAGgCAHAAQAPAAAIAGQACACACACIAEACQgJACgEAEIgFACIhDAFQgNAEgMAFQgGACgFACIgKABIicAIQgcABgVgJIgKgBIgQAAIgHAAIgHABIgDAAIgGABQgGAAgHABIgYACQgMgCgIAFIg6gFIgYgFIg5gDQgLABgJADQgDABgEABIgMADIgigBIgMgBQgNgEgPAAQgDAAgDAAQgLACgLAAIgmAFIgpgCQgPABgPgCIgUgCQgBAAgBABQgCAAgDABQgEABgDABQgKAAgLABIgwAEIgOAAQgJgCgHgBQgHAAgGAAQgNACgMAHQgFABgFAAQgFAAgEACQgFACgDAEQgPgGgQgDQgFAAgEAAQgCAAgBABIgNADIgNAAIgTgHQgBAAgCgBQgEgCgFgBQgPgCgSAFQgCAAgDABQgGABgHABQgEABgFAAQgLgBgLgGQgHgBgHgBQgIADgJACIguAAIgOgGQgLgEgKADQgDABgEACIgGABIgHAAIgNACQgRAGgPgJIgGgBIgzgEQgNgDgKAEQgIAEgLABQgEAAgEAAIhWAFQgDAAgEgBQgKAAgJgBIg1gCIgGgBIgegCIgPAEIgQAAIgVgCQgKgBgKgBIgXgCQgKgBgEgFIgHgHIgIABIgFACIgIABIgQAAQgYAAgZgBIgfgCIh9AFIgKgBQgGAAgHABQgMgBgNgBIhIgDQgHgBgHgBg");
	this.shape_56.setTransform(30.6479,7.79);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAoAqIgJAAIgDABIgNADIgNAAIgTgHIgDgBIgJgDQgPgCgSAFIgFABIgNACIgJABQgLgBgLgGIgOgCIgRAFIguAAIgOgGQgLgEgKADIgHADIgGABIgHAAIgNACQgRAGgPgJIgGgBIgzgEQgNgDgKAEQgIAEgLABIgIAAIhWAFIgHgBIgTgBIg1gCIgGgBIgegCIgPAEIgQAAIgVgCIgUgCIgXgCQgKgBgEgFIgHgHIgIABIgFACIgIABIgQAAIgxgBIgfgCIh9AFIgKgBIgNABIgZgCIhIgDIgOgCIgFAAQgGgFABgDQAYgIAGgBIAjAAIASgBQAMgBALgEIAJAAIAOgBIAUAAQAEADAFABQAJACAIAAQAOABAPgDIAggEIAzABIAJgBIAOgBIAbAAIAagCIAVgBIANABIAOACIATABIAHABQAKAAACgHIAGgFQAggHAaAKIACABIABgEQABgDALgCIAIgDIAHgCIABAAIAQAAIAKABIATAFIAMACIAjADIA9AEQAMABAIgEQAWgKAZAGIAWAEIAQgDIADgBIAEgDQAPgDAUADIALABIAKABQAEAAACgDIACgCIAFgHIALgFIAZABIAcABQAFAAABgCIAMgJQAIgEAJABQAGABAHADIADABIAMAIIAOAKQAGAFAIACQAMACAMgGIATgHIAIgBIAKACIAHADQAJAFAHAGIAAABQAIAGAPgDQAKgBAIgEIAOgHIAQAGIAMACIAWgDIAOgBIAHAAIAJgCIARgBQANABAOgCIANgBIAHgCIAEAAIAHgBIAJgBIALAAQAVgCAOgEIAEADIADADQAEACAFABIAfAEQAYACAXADIAyAEIAbgEQAUgGAUAEIAHACQAOAEALgEIAFgDQAHgEAJgDIACAAIAHACQAEADAEABQAHAAAGgCIADAAIADgCQAZgOAgADIAIABIAOACIAFAAIAUACQAJAAAFgEIAMgFQAKgEALgBQAOgCALACQAQACAJAKIANAJIAIACQAZgKAWAJIAEADIAcABIAhACIAVAEIAZAGQAGADAIABIACAAQAPADAQgDIALgBIAigFIANgCQAPAAAIAGIAEAEIAEACQgJACgEAEIgFACIhDAFIgZAJIgLAEIgKABIicAIQgcABgVgJIgKgBIgQAAIgHAAIgHABIgDAAIgGABIgNABIgYACQgMgCgIAFIg6gFIgYgFIg5gDQgLABgJADIgHACIgMADIgigBIgMgBQgNgEgPAAIgGAAIgWACIgmAFIgpgCQgPABgPgCIgUgCIgCABIgFABIgHACIgVABIgwAEIgOAAIgQgDIgNAAQgNACgMAHIgKABQgFAAgEACQgFACgDAEQgPgGgQgDg");
	this.shape_57.setTransform(30.6479,7.79);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AxfAOQgFgEABgEQAZgHAHAAIAjgBQAJAAAJAAQANgBALgEQAFAAAEAAIAPgBQAJAAALAAQAEABAGACQAIABAJAAQAOABAPgDIAhgEIA0ABQAFAAAEgBIAOgCQANgCAPAAQAMgBAOgBQALAAAKAAQAHABAHABQAHABAHABIAUABQADAAAEAAQAKAAACgGQADgCAEgDQAggGAaALQABAAABABQACgCAAgCQACgCAKgCQAEgBAEgCIAIgCIACAAQAIAAAHABQAFABAGAAQAJADAKABQAGABAHABQARAAASADIA/AEQAMAAAJgDQAWgKAZAFIAXAEIAQgEQACgBABAAQACgBADgBQAOgDAVADQAGAAAFABIAKABQAFAAACgCIACgCQADgDACgDQAGgCAGgDQANABAMAAIAeABQAEABACgCIANgIQAIgDAJABQAHAAAHADQABAAABABQAHADAGADQAHAFAHAFQAHAFAIABQANADALgGQALgEAIgEQAFgBAEAAQAFAAAFABQADACAEABQAKAFAGAGIABAAQAIAHAPgDQAKgCAIgDQAIgEAHgEQAHADAIACQAIAAAFAAQAMgCALAAIAOABQACAAAEgBIAJgBIASgBQAOAAAOgBQAGAAAHgBQADAAAEAAIADAAQADAAAEAAIAJgBQAGgBAGAAQAVgBAPgDQACABACABQABABACACQAEACAEABIAgADQAZABAXAEIA0AEIAbgEQAVgFAUADQAEAAAEABQAOADAKgDQAEgCADgCQAHgDAJgCIACAAIAHACQAEADAFAAQAHABAFgCQACAAABAAQACAAABgBQAagNAhACQAEABAEABQAFACAIABQADAAADAAIAUABQAJAAAGgDQAGgDAGgCQAKgDAMgCQAOgBALACQAQACALAJIAMAIIAJACQAagKAWAJQADABACABIAcACQARACARAAQALACALABIAZAFQAHADAIAAQABABABAAQAPADAQgCQAGgBAGgBIAigEQAHgBAGgBQARAAAHAHQABACABACIADACQgIABgGAEIgEACIhFAFQgNAEgMAEQgGACgGACIipAHQgdABgWgIIghgBIgQACQgGACgIAAIgYACQgMgBgJAEIg8gEIgXgFIg8gCQgKABgJADQgEAAgDACIgOACIgiAAIgMgCQgOgEgPAAQgDAAgDABQgLABgLAAIgnAEIgkgBIgGAAQgQABgQgCIgNgBIgGAAQgBAAgBAAQgDAAgDABQgDAAgEABQgKAAgLABIgxAFIgPgBQgIgCgIgBQgHAAgHABQgNACgMAGQgFABgFAAQgGAAgEACQgEABgDAEQgQgGgRgDQgEABgFAAQgBAAgCABIgNADIgOAAIgSgGQgCgBgCAAQgEgCgFgBQgPgBgSAFQgDAAgCAAQgHABgGABQgFAAgFAAQgMgBgLgGQgHgBgHAAQgIACgJACIgvgBIgPgFQgLgEgKAEQgEAAgDACIgPAAIgNADQgQAFgQgIIgGgBIg1gEQgNgDgKAEQgJADgKABQgFAAgEAAIhXAFQgEgBgEAAQgJgBgLgBIhKgDIgQAAIgQADIglAAQgKgCgLgBIgXgCQgLgBgEgEIgHgHIgIABIgGACIgHABIgSAAQgYABgZgBIghgCIh/ADIgKAAQgHAAgHAAQgMgCgNgBIhKgDQgGgCgHgBg");
	this.shape_58.setTransform(30.0909,8.2889);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAnAoIgJABIgDABIgNADIgOAAIgSgGIgEgBIgJgDQgPgBgSAFIgFAAIgNACIgKAAQgMgBgLgGIgOgBIgRAEIgvgBIgPgFQgLgEgKAEIgHACIgPAAIgNADQgQAFgQgIIgGgBIg1gEQgNgDgKAEQgJADgKABIgJAAIhXAFIgIgBIgUgCIhKgDIgQAAIgQADIglAAQgKgCgLgBIgXgCQgLgBgEgEIgHgHIgIABIgGACIgHABIgSAAQgYABgZgBIghgCIh/ADIgKAAIgOAAIgZgDIhKgDIgNgDIgFAAQgFgEABgEQAZgHAHAAIAjgBIASAAQANgBALgEIAJAAIAPgBIAUAAIAKADIARABQAOABAPgDIAhgEIA0ABIAJgBIAOgCQANgCAPAAIAagCIAVAAIAOACIAOACIAUABIAHAAQAKAAACgGIAHgFQAggGAaALIACABIACgEQACgCAKgCIAIgDIAIgCIACAAIAPABIALABQAJADAKABIANACQARAAASADIA/AEQAMAAAJgDQAWgKAZAFIAXAEIAQgEIADgBIAFgCQAOgDAVADIALABIAKABQAFAAACgCIACgCIAFgGIAMgFIAZABIAeABQAEABACgCIANgIQAIgDAJABQAHAAAHADIACABIANAGIAOAKQAHAFAIABQANADALgGIATgIIAJgBIAKABIAHADQAKAFAGAGIABAAQAIAHAPgDQAKgCAIgDIAPgIQAHADAIACIANAAQAMgCALAAIAOABIAGgBIAJgBIASgBQAOAAAOgBIANgBIAHAAIADAAIAHAAIAJgBIAMgBQAVgBAPgDIAEACIADADIAIADIAgADQAZABAXAEIA0AEIAbgEQAVgFAUADIAIABQAOADAKgDIAHgEQAHgDAJgCIACAAIAHACQAEADAFAAQAHABAFgCIADAAIADgBQAagNAhACIAIACQAFACAIABIAGAAIAUABQAJAAAGgDIAMgFQAKgDAMgCQAOgBALACQAQACALAJIAMAIIAJACQAagKAWAJIAFACIAcACIAiACIAWADIAZAFQAHADAIAAIACABQAPADAQgCIAMgCIAigEIANgCQARAAAHAHIACAEIADACQgIABgGAEIgEACIhFAFIgZAIIgMAEIipAHQgdABgWgIIghgBIgQACIgOACIgYACQgMgBgJAEIg8gEIgXgFIg8gCQgKABgJADIgHACIgOACIgiAAIgMgCQgOgEgPAAIgGABIgWABIgnAEIgkgBIgGAAQgQABgQgCIgNgBIgGAAIgCAAIgGABIgHABIgVABIgxAFIgPgBIgQgDIgOABQgNACgMAGIgKABQgGAAgEACQgEABgDAEQgQgGgRgDg");
	this.shape_59.setTransform(30.0909,8.2889);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ax5ALQgEgFACgDQAagHAGAAIAkAAQAKAAAJAAQANAAAMgEQAEAAAFAAIAPgCQAKAAAKgBQAFACAFABQAJABAJAAQAOAAAQgDIAhgDIA2AAQAEAAAFgBIAOgDQANgDAPAAQANgCAOAAQALAAAKABQAHABAHABQAHACAIAAIAUABQADABAEgBQAKAAADgGQADgCAEgCQAhgFAbALQABAAABABQABgCABgBQADgCAKgCQAEgBAEgCIAIgCIABAAQAIABAIABQAFABAGAAQAJADALABQAGAAAHABQASAAASADIBAADQAMABAJgDQAYgJAZAEIAXADIARgEQABgBACAAQACgCACgBQAPgBAWACQAFABAGAAIAKABQAFAAACgCIACgBQADgDAEgCQAGgCAGgCQANABANAAIAeABQAEABACgCIAOgHQAIgCAJABQAHAAAHACQACABABAAQAHADAGACQAIAFAHAEQAHAFAIACQAOACALgGQALgFAIgDQAEgBAFgBQAFABAEAAQAFABAEACQAJAFAHAFQABAAAAABQAJAGAPgDQAKgBAIgFQAIgDAHgEQAHACAIABQAIgBAFABQAMgDALABIAOACQADAAAEAAIAJgCIASgBQAOABAPgCQAGABAHAAQADAAADAAIAEABQADAAAEgBIAJgBQAGAAAGAAQAWgCAPgCQADACABABQACABABABQAEACAFABIAgADQAagBAYAFIA0AEIAcgEQAVgFAVADQAEAAADABQAPACALgEQADAAADgCQAIgDAJgCIACAAIAIACQAEACAEABQAIABAFgBQACABABAAQABgBACgBQAagNAiAEQAEABAEABQAFADAJAAQACAAADAAIAVABQAJAAAGgDQAGgCAHgCQAKgDAMgBQAOgBAMABQAQACALAIIAOAHIAJACQAagIAXAHQADABACABIAdACQARACARAAQAMACALAAIAaAEQAHADAIAAQABABABAAQAPADARgCQAGAAAGgBIAjgDQAHgBAHgBQASABAFAHQABACAAABIACACQgJACgFADIgFACIhGAEQgOAEgMAEQgGABgGACIgKABIijAFQgdABgXgHIgbAAIgHgBIgHAAIgDABIgGACQgGABgIABIgZACQgMgBgJAEIg9gEIgZgEIg8gBQgLABgKACQgDABgEABIgNACIgjgBIgNgBQgOgEgPAAQgDAAgDAAQgMACgLgBIhMADIgHAAQgQADgQgDIgOgCIgGAAQgBAAgCABQgCAAgDAAQgEABgDAAQgLgBgLACIgQADIgxACQgJgDgIgBQgHAAgGABQgOADgMAFQgFABgGAAQgFAAgFABQgEABgEADQgQgGgQgCQgFABgFAAQgCAAgBABIgNAEIgOAAIgUgGQgBAAgCgBQgEgBgFgBQgQgBgTAFQgCAAgCAAQgGAAgIABQgFAAgFAAQgLgCgMgFQgHgBgHgBQgJACgJADIgxgBIgPgFQgLgDgLACQgDABgEABIgHAAIgHAAIgOACQgRAFgQgHIgGgBIg2gDQgNgDgLADQgJADgLAAQgEABgEAAIhaAEQgDAAgEgBQgKgBgKgBIhWgCIgHABIgQADIgmgBQgKgCgLAAIgYgCQgKgBgFgEIgIgGIgIABIgGABIgIABIgRAAQgYADgbgBIiugBQgGgBgIAAQgMgCgOgBIhLgEQgGgCgIgBg");
	this.shape_60.setTransform(29.4886,8.8107);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAoAmIgKABIgDABIgNAEIgOAAIgUgGIgDgBIgJgCQgQgBgTAFIgEAAIgOABIgKAAQgLgCgMgFIgOgCIgSAFIgxgBIgPgFQgLgDgLACIgHACIgHAAIgHAAIgOACQgRAFgQgHIgGgBIg2gDQgNgDgLADQgJADgLAAIgIABIhaAEIgHgBIgUgCIhWgCIgHABIgQADIgmgBQgKgCgLAAIgYgCQgKgBgFgEIgIgGIgIABIgGABIgIABIgRAAQgYADgbgBIiugBIgOgBIgagDIhLgEIgOgDIgEAAQgEgFACgDQAagHAGAAIAkAAIATAAQANAAAMgEIAJAAIAPgCIAUgBIAKADQAJABAJAAQAOAAAQgDIAhgDIA2AAIAJgBIAOgDQANgDAPAAQANgCAOAAIAVABIAOACIAPACIAUABIAHAAQAKAAADgGIAHgEQAhgFAbALIACABIACgDQADgCAKgCIAIgDIAIgCIABAAIAQACIALABQAJADALABIANABQASAAASADIBAADQAMABAJgDQAYgJAZAEIAXADIARgEIADgBIAEgDQAPgBAWACIALABIAKABQAFAAACgCIACgBIAHgFIAMgEIAaABIAeABQAEABACgCIAOgHQAIgCAJABIAOACIADABIANAFIAPAJQAHAFAIACQAOACALgGIATgIIAJgCIAJABIAJADQAJAFAHAFIABABQAJAGAPgDQAKgBAIgFIAPgHIAPADIANAAQAMgDALABIAOACIAHAAIAJgCIASgBQAOABAPgCIANABIAGAAIAEABIAHgBIAJgBIAMAAIAlgEIAEADIADACIAJADIAgADQAagBAYAFIA0AEIAcgEQAVgFAVADIAHABQAPACALgEQADAAADgCIARgFIACAAIAIACQAEACAEABQAIABAFgBIADABIADgCQAagNAiAEIAIACQAFADAJAAIAFAAIAVABQAJAAAGgDIANgEQAKgDAMgBQAOgBAMABQAQACALAIIAOAHIAJACQAagIAXAHIAFACIAdACQARACARAAQAMACALAAIAaAEQAHADAIAAIACABQAPADARgCIAMgBIAjgDIAOgCQASABAFAHIABADIACACQgJACgFADIgFACIhGAEIgaAIIgMADIgKABIijAFQgdABgXgHIgbAAIgHgBIgHAAIgDABIgGACIgOACIgZACQgMgBgJAEIg9gEIgZgEIg8gBIgVADIgHACIgNACIgjgBIgNgBQgOgEgPAAIgGAAQgMACgLgBIhMADIgHAAQgQADgQgDIgOgCIgGAAIgDABIgFAAIgHABQgLgBgLACIgQADIgxACIgRgEIgNABQgOADgMAFIgLABQgFAAgFABQgEABgEADQgQgGgQgCg");
	this.shape_61.setTransform(29.4886,8.8107);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AyUAIQgCgFADgDQAagHAHAAIAkABQAKABAJgBQAOABAMgDQAEgBAFAAIAPgCQAKgBALgBQAFACAFAAQAJACAJgBQAPAAAQgDIBZgDQAEAAAFgBIAOgEQANgEAPgBQANgCAPABQALAAALABQAHABAHACQAHACAIAAIAUABQAEAAADAAQAKAAAEgGQAEgBADgCQAjgFAaALQACABABAAQABgBACgBQADgBAKgCQAEgBAEgCIAIgCIABAAQAJABAIABQAFACAFAAQAKADALAAQAHAAAGABQATAAASADIBCADQAMAAAKgDQAYgIAaADIAXACIARgDQABgBACgBQACgBACgCQAQAAAWACQAGABAFAAIALABQAEAAADgBIACgCQAEgCADgCQAHgBAHgCQAMABAOAAIAeACQAFAAACgBIAOgGQAJgCAJABQAHABAIABQABABACAAQAGACAHABQAIAFAIAEQAHAFAIACQAPACALgGQAKgFAJgEQAEgBAEgBQAFAAAFAAQAFABAEACQAJAFAIAFIAAAAQAKAHAPgDQAKgCAJgEQAHgEAHgEQAIABAIAAQAHgBAGAAQAMgCALABIAOADQADABAEgBIAcgCQAOAAAPgBQAHABAHAAQADABADABIADABQADAAAEAAIAKgBQAGAAAGgBQAWgCAQgBQADACABABQACABABABQAEACAFABIAPACIASAAQAagCAYAGIA1ADIAegDQAVgFAVACQAEABAEAAQAOACAMgEQADgBAEgBQAIgDAJgCIACAAIAIACQAEADAFABQAIABAFAAQABAAABABQACgBABgBQAbgMAjADQADACAEABQAFAEAJAAQADAAADAAIAVABQAJgBAGgCQAHgCAHgCQAKgDANAAQAOgBAMABQAQACAMAHIAPAGIAJACQAbgIAYAHQACAAADACIAdACQASACARAAQAMABAMgBIAaAEQAHACAJABQABAAABAAQAPAEARgCQAGAAAGgBIAlgCQAHgBAGAAQAUABADAHQABACAAABIAAACQgJACgGADIgEABIhIAEQgOADgMAEQgHABgGACIgKABIimADQgdACgYgGIgdgBIgGgBIgIAAIgJAEQgFACgJABIgZACQgNgBgJADIgVAAIhDgGIg9gBQgLABgKACQgEABgEAAIgNACIgkgBIgNgBQgOgDgQgBQgDABgDAAQgNABgKgBIhPACIgGABQgQADgRgDIgOgCIgHAAQgBAAgBABQgDAAgDAAQgDAAgEAAQgLgBgLACIgRADIgxACQgKgCgIgBQgHAAgHAAQgNAEgNAEQgFABgGAAQgFAAgFAAQgFABgDADQgRgGgRgBQgFAAgEABQgCAAgCABIgNAEIgNAAIgIgBIgNgEQgCgBgCAAQgEgBgFgBQgRAAgSAFQgCAAgDAAQgGgBgIABQgFAAgFgBQgMgCgMgFQgHgBgHgBQgJACgKADIgxgCIgQgEQgLgDgLACQgEABgEAAIgHABIgHgBIgOADQgSAEgRgGIgGgBIg2gDQgOgDgLADQgJACgLAAQgEABgFAAIhNAEIgOAAQgEgBgDAAQgLgCgKAAIhOgBIhIAEQgKgDgMAAIgYgCQgKgBgGgDIgIgFIgJAAIgGABIgaABQgYAEgcgBIixgCQgHgBgHgBQgNgCgOgCIhHgEIgGgBQgGgCgIgBg");
	this.shape_62.setTransform(28.9056,9.3083);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAnAlIgJABIgEABIgNAEIgNAAIgIgBIgNgEIgEgBIgJgCQgRAAgSAFIgFAAQgGgBgIABIgKgBQgMgCgMgFIgOgCIgTAFIgxgCIgQgEQgLgDgLACIgIABIgHABIgHgBIgOADQgSAEgRgGIgGgBIg2gDQgOgDgLADQgJACgLAAIgJABIhNAEIgOAAIgHgBIgVgCIhOgBIhIAEQgKgDgMAAIgYgCQgKgBgGgDIgIgFIgJAAIgGABIgaABQgYAEgcgBIixgCIgOgCIgbgEIhHgEIgGgBIgOgDIgEAAQgCgFADgDQAagHAHAAIAkABQAKABAJgBQAOABAMgDIAJgBIAPgCIAVgCIAKACQAJACAJgBQAPAAAQgDIBZgDIAJgBIAOgEQANgEAPgBQANgCAPABIAWABIAOADIAPACIAUABIAHAAQAKAAAEgGIAHgDQAjgFAaALIADABIADgCIANgDIAIgDIAIgCIABAAIARACIAKACQAKADALAAIANABQATAAASADIBCADQAMAAAKgDQAYgIAaADIAXACIARgDIADgCIAEgDQAQAAAWACIALABIALABQAEAAADgBIACgCIAHgEIAOgDIAaABIAeACQAFAAACgBIAOgGQAJgCAJABIAPACIADABIANADIAQAJQAHAFAIACQAPACALgGIATgJIAIgCIAKAAIAJADIARAKIAAAAQAKAHAPgDQAKgCAJgEIAOgIIAQABIANgBQAMgCALABIAOADIAHAAIAcgCIAdgBIAOABIAGACIADABIAHAAIAKgBIAMgBIAmgDIAEADIADACIAJADIAPACIASAAQAagCAYAGIA1ADIAegDQAVgFAVACIAIABQAOACAMgEIAHgCQAIgDAJgCIACAAIAIACQAEADAFABIANABIACABIADgCQAbgMAjADIAHADQAFAEAJAAIAGAAIAVABQAJgBAGgCIAOgEQAKgDANAAQAOgBAMABQAQACAMAHIAPAGIAJACQAbgIAYAHIAFACIAdACQASACARAAIAYAAIAaAEQAHACAJABIACAAQAPAEARgCIAMgBIAlgCIANgBQAUABADAHIABADIAAACQgJACgGADIgEABIhIAEIgaAHIgNADIgKABIimADQgdACgYgGIgdgBIgGgBIgIAAIgJAEQgFACgJABIgZACQgNgBgJADIgVAAIhDgGIg9gBIgVADIgIABIgNACIgkgBIgNgBQgOgDgQgBIgGABQgNABgKgBIhPACIgGABQgQADgRgDIgOgCIgHAAIgCABIgGAAIgHAAQgLgBgLACIgRADIgxACIgSgDIgOAAIgaAIIgLABIgKAAQgFABgDADQgRgGgRgBg");
	this.shape_63.setTransform(28.9056,9.3083);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AyuAEQgBgEADgDQAbgHAHAAIAlACQAKABAKAAQANAAANgDQAEAAAFAAIAQgDQAKgBALgBQAFABAGAAQAJACAJgCQAPAAAQgCIBbgDQAEAAAFgCIAOgFQANgFAQgBQANgCAPABQAMAAAKACQAIABAGACQAHACAJABIAVAAQADAAAEAAQAKAAAEgFQAEgCAEgBQAjgFAbAMQABABACAAQABAAACgBQAEgBAJgBQAFgBAEgDIAIgCIABAAQAJABAIACQAFACAGABQAKADALgBQAHAAAHAAQATgBATAEIAeADIAlAAQAMAAAKgDQAZgHAaACIAYACIAHgBIAKgEQABgBACAAQACgCACgBQAQAAAXADQAGAAAGAAIAKABQAFABADgCIACgBQAEgBAEgCQAHAAAHgCQANABANAAIAgACQAEAAADgBIAPgEQAJgCAJABQAHAAAIACQACAAABAAQAHABAGABQAJAFAIAEQAIAEAIACQAPADALgHQAKgFAJgEQAEgCAFgBQAEAAAGAAQAFABAEABQAJAFAIAFQABAAAAABQALAGAOgDQAKgBAJgFQAIgEAHgEQAHAAAIgBQAIgBAGAAQAMgDAMACIAOAEQACABAEAAIAKgCIATgBQAPABAPgBQAGABAHABQADABADABIADABQADABAEAAIAKgBQAHAAAGgBQAXgCAQAAQACABACABQACABABACQAEABAFABIAJACIAYgBQAbgCAZAGIA2ADIAegDQAWgEAVABQAEABAEAAQAPABAMgEQADgBAEgBQAIgCAKgCIACAAIAIACQAEADAFABQAJABAEAAQABABABABQACgBACAAQAbgNAjAFQAEABAEACQAEAEAKABQADAAADgBIAWABQAIgBAHgCQAHgCAHgCQALgCAMAAQAOgBANACQARABANAGIAPAFIAJACQAbgHAZAGQADAAADACIAdACQATADARgBQANABALgCIAbAEQAIABAJABQABAAABAAQAPAEARgBQAHAAAGgBIAlgBQAHgBAHAAQAVABACAHQAAACgBACIgBACQgIABgHADIgFABIhJAEQgOADgNADQgGABgGABIgLABIiqACQgdACgZgFIgdgBIgGgBIgIAAIgDABIgGADQgFACgKABIgaADQgMgBgKADIgnAAIgRgDIgIAAIgZgCIg/gBQgMABgKACQgEABgDABIgPABIgxgCQgPgDgPgBQgEABgDAAQgNABgLgCIhQACIgHABQgQAFgSgEIgOgCIgGAAQgBAAgCAAQgDAAgDABQgDgBgEAAQgLgBgMACIgQAEIgzABQgJgCgJgCQgHABgHAAQgOAEgNAEQgFABgGAAQgGgBgFAAQgEABgEACQgRgFgRgBQgFAAgFABQgCABgBAAIgOAEIgIABIgFAAIgWgFQgBAAgCgBQgFgBgFAAQgRABgTAFQgCgBgCAAQgGgCgJABQgFAAgFgBQgMgDgMgEQgHgBgIgBQgJACgKACIgzgBIgQgEQgMgDgLACQgEAAgDABIgPgBIgPACQgSAEgRgFIgGgBIg4gCQgNgDgMACQgKACgLAAQgEAAgFAAIhOAFIgPgBQgDAAgEgBQgKgCgLgBIg5AAIgHAAIhDAGIgWgBQgLgDgMABIgYgCQgKgBgGgDIgKgFIgIAAIgHACIgaABQgYAEgdgBIirgCIgKgBQgHgCgIgBQgNgCgOgDIhJgDIgFgCQgGgCgJgCg");
	this.shape_64.setTransform(28.3625,9.88);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgBAqIgWgFIgDgBIgKgBQgRABgTAFIgEgBQgGgCgJABIgKgBIgYgHIgPgCIgTAEIgzgBIgQgEQgMgDgLACIgHABIgPgBIgPACQgSAEgRgFIgGgBIg4gCQgNgDgMACQgKACgLAAIgJAAIhOAFIgPgBIgHgBIgVgDIg5AAIgHAAIhDAGIgWgBQgLgDgMABIgYgCQgKgBgGgDIgKgFIgIAAIgHACIgaABQgYAEgdgBIirgCIgKgBIgPgDIgbgFIhJgDIgFgCQgGgCgJgCIgDAAQgBgEADgDQAbgHAHAAIAlACIAUABQANAAANgDIAJAAIAQgDIAVgCIALABQAJACAJgCQAPAAAQgCIBbgDIAJgCIAOgFQANgFAQgBQANgCAPABIAWACIAOADQAHACAJABIAVAAIAHAAQAKAAAEgFIAIgDQAjgFAbAMIADABIADgBIANgCQAFgBAEgDIAIgCIABAAIARADQAFACAGABQAKADALgBIAOAAQATgBATAEIAeADIAlAAQAMAAAKgDQAZgHAaACIAYACIAHgBIAKgEIADgBIAEgDQAQAAAXADIAMAAIAKABQAFABADgCIACgBIAIgDIAOgCQANABANAAIAgACQAEAAADgBIAPgEQAJgCAJABIAPACIADAAIANACIARAJQAIAEAIACQAPADALgHIATgJIAJgDIAKAAIAJACIARAKIABABQALAGAOgDQAKgBAJgFIAPgIIAPgBIAOgBQAMgDAMACIAOAEQACABAEAAIAKgCIATgBIAeAAIANACIAGACIADABQADABAEAAIAKgBIANgBQAXgCAQAAIAEACIADADIAJACIAJACIAYgBQAbgCAZAGIA2ADIAegDQAWgEAVABIAIABQAPABAMgEIAHgCIASgEIACAAIAIACIAJAEIANABIACACIAEgBQAbgNAjAFIAIADQAEAEAKABIAGgBIAWABQAIgBAHgCIAOgEQALgCAMAAQAOgBANACQARABANAGIAPAFIAJACQAbgHAZAGIAGACIAdACQATADARgBQANABALgCIAbAEIARACIACAAQAPAEARgBIANgBIAlgBIAOgBQAVABACAHIgBAEIgBACQgIABgHADIgFABIhJAEIgbAGIgMACIgLABIiqACQgdACgZgFIgdgBIgGgBIgIAAIgDABIgGADQgFACgKABIgaADQgMgBgKADIgnAAIgRgDIgIAAIgZgCIg/gBIgWADIgHACIgPABIgxgCQgPgDgPgBIgHABQgNABgLgCIhQACIgHABQgQAFgSgEIgOgCIgGAAIgDAAIgGABIgHgBQgLgBgMACIgQAEIgzABIgSgEIgOABIgbAIIgLABIgLgBQgEABgEACQgRgFgRgBIgKABIgDABIgOAEIgIABg");
	this.shape_65.setTransform(28.3625,9.88);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AzIAEQAAgEADgEQAcgHAIABIAlACQAKABAKAAQAOABAMgCQAFgBAFAAIAQgDQAKgCAMgBQAFABAGAAQAJABAJgCQAQAAAQgCIBdgEQAEABAGgCIAOgGQAMgGAQgCQANgCAQABQAMABALACQAHACAHACQAHADAJAAIAVAAQAEAAAEAAQAJgBAFgEQAEgBAFgCQAjgEAcAMQABABABABQADgBABAAQAFAAAJgCQAEgBAEgCIAJgCIACAAQAJABAHADQAGACAGABQAKACAMgBQAGAAAIAAQATgBATAEIAfADIAlgBQANAAAKgDQAZgGAbABIAZABIAHgBIAKgDQACgBABgBQACgBADgCQAQABAXACQAGABAGAAIALABQAFAAADAAIADgBQAEgBAEgBQAHgBAHgBQAOABANAAIAgACQAFAAADAAIAQgDQAJgCAJACQAIAAAHABQACAAACAAQAHAAAGAAQAJAFAJAEQAIAEAIACQAQACAKgGQAKgGAJgEQAFgBAEgCQAFAAAFgBQAFABAFACQAKAEAIAFQAAAAABAAQALAHAOgDQAKgCAJgFQAIgEAHgEQAIgBAIgBQAIgCAGgBQAMgCAMACIAOAGQACABAEgBIAegCQAPAAAPgBQAHACAHABQADACADACIACABQADABAEAAIALgBQAGAAAGgBQAYgCARABQACABACACQABABACAAQAEACAEABIAKABIAZgBQAbgDAZAHIAXADIA/gDQAXgEAWABQAEAAAEAAQAOAAAMgEQAFAAADgBQAJgCAJgBIADAAIAIACQAEACAFABQAKACADABQABABABABQACgBACgBQAcgLAkAEQAEACADACQADAGALgBQADAAAEAAIAWAAQAIAAAIgCQAGgCAHgCQAMgBANAAQAOgBANACQARABAOAFIAPAEIAKABQAcgFAZAEQAEABACABIAfADQASADATgBQAMAAAMgCIAbACQAJACAJABQABAAABAAQAPAEASgBQAGAAAHgBIAlAAQAIgBAHABQAWABAAAGQAAADgCACIgBABQgJACgHACIgFABIhLAEQgOACgNADQgHABgGABIi4ACQgeABgagEIgVABIgPgDIgIAAIgDABIgFAEQgGADgKABIgaACQgMAAgLADIgWAAIhFgFIhBABQgLABgKABQgEABgEAAIgPABIgzgCQgPgDgPAAQgDAAgEAAQgNABgLgDIgaAAIgRACIgnABIgHABQgRAFgSgEIgOgCIgHAAQgBAAgBAAQgDAAgDAAQgEAAgDgBQgMgCgMADIgRAEIg0ACQgJgCgJgCQgIAAgHABQgNAEgOADQgFABgGAAQgGgBgFAAQgFAAgEACQgSgFgRAAQgFAAgFABQgBABgCAAIgVAGIgHAAIgIgBIgNgEQgCgBgCAAQgFgBgFAAQgRABgTAGQgCgBgCgBQgHgCgIAAQgFAAgGgBQgMgDgNgEQgHgBgIgBQgJACgLACIgzgCIgRgDQgMgCgLABQgEAAgEAAIgQAAIgOACQgSADgSgEIgGgBIglAAIgVgCQgNgCgMABQgKABgLAAQgFABgFAAIhQAEIgOgBQgEgBgEAAQgKgDgMAAIg6AAIgGAAIhcAHQgKgEgNABIgYgCQgLgBgGgCIgKgEIgJAAIgGABIgbAAQgZAGgegBIiugEIgKgBQgIgBgHgCQgOgDgOgCIhLgFIgFgBQgGgDgIgBg");
	this.shape_66.setTransform(27.825,10.1625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgDAsIgIgBIgNgEIgEgBIgKgBQgRABgTAGIgEgCQgHgCgIAAIgLgBIgZgHIgPgCIgUAEIgzgCIgRgDQgMgCgLABIgIAAIgQAAIgOACQgSADgSgEIgGgBIglAAIgVgCQgNgCgMABIgVABIgKABIhQAEIgOgBIgIgBQgKgDgMAAIg6AAIgGAAIhcAHQgKgEgNABIgYgCQgLgBgGgCIgKgEIgJAAIgGABIgbAAQgZAGgegBIiugEIgKgBIgPgDIgcgFIhLgFIgFgBQgGgDgIgBIgDAAQAAgEADgEQAcgHAIABIAlACIAUABQAOABAMgCIAKgBIAQgDIAWgDIALABQAJABAJgCQAQAAAQgCIBdgEQAEABAGgCIAOgGQAMgGAQgCQANgCAQABIAXADIAOAEQAHADAJAAIAVAAIAIAAQAJgBAFgEIAJgDQAjgEAcAMIACACIAEgBQAFAAAJgCIAIgDIAJgCIACAAQAJABAHADQAGACAGABQAKACAMgBIAOAAQATgBATAEIAfADIAlgBQANAAAKgDQAZgGAbABIAZABIAHgBIAKgDIADgCIAFgDIAnADIAMABIALABIAIAAIADgBIAIgCIAOgCIAbABIAgACIAIAAIAQgDQAJgCAJACIAPABIAEAAIANAAIASAJQAIAEAIACQAQACAKgGIATgKIAJgDIAKgBIAKADQAKAEAIAFIABAAQALAHAOgDQAKgCAJgFIAPgIIAQgCIAOgDQAMgCAMACIAOAGQACABAEgBIAegCIAegBIAOADIAGAEIACABIAHABIALgBIAMgBQAYgCARABIAEADIADABIAIADIAKABIAZgBQAbgDAZAHIAXADIA/gDQAXgEAWABIAIAAQAOAAAMgEIAIgBQAJgCAJgBIADAAIAIACIAJADIANADIACACIAEgCQAcgLAkAEIAHAEQADAGALgBIAHAAIAWAAQAIAAAIgCIANgEIAZgBQAOgBANACQARABAOAFIAPAEIAKABQAcgFAZAEIAGACIAfADQASADATgBQAMAAAMgCIAbACQAJACAJABIACAAQAPAEASgBIANgBIAlAAIAPAAQAWABAAAGQAAADgCACIgBABIgQAEIgFABIhLAEIgbAFIgNACIi4ACQgeABgagEIgVABIgPgDIgIAAIgDABIgFAEQgGADgKABIgaACQgMAAgLADIgWAAIhFgFIhBABIgVACIgIABIgPABIgzgCQgPgDgPAAIgHAAQgNABgLgDIgaAAIgRACIgnABIgHABQgRAFgSgEIgOgCIgHAAIgCAAIgGAAIgHgBQgMgCgMADIgRAEIg0ACIgSgEIgPABIgbAHIgLABIgLgBQgFAAgEACQgSgFgRAAIgKABIgDABIgVAGg");
	this.shape_67.setTransform(27.825,10.1625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AzjADQACgEADgEQAdgGAIAAIAlADQALABAKABQAOABANgCQAFAAAEgBIARgDQAKgDAMgBQAGAAAGABQAJAAAJgCQAQAAARgCIBfgEQADABAGgCIAOgHQAMgIARgCQANgCAQABQANACALACQAIACAGADQAHADAKAAIAVAAQAEgBAEAAQAJgBAGgDQAEgBAFgBQAkgEAcANQABABACAAQACAAACAAQAGABAIgCQAFgBAEgCIAIgCIACAAQAKABAHAEQAGACAGABQAKACAMgBQAHgBAIgBQAUgBATAFIAgADIAmgBQAMgBALgCQAagGAbABIAaAAIAGgBIALgEQABgBACgBQACgBACgBQARABAYACQAGABAGAAIALABQAFAAADAAIADAAQAFgBAEgBQAIAAAHAAQAOABANgBIAhACQAFABADAAIARgCQAJgBAKABQAHAAAIABQACgBACAAQAHAAAGgBQAJAFAKAEQAIAEAIABQARADAKgGQAJgGAKgFQAFgBADgCQAGgBAGAAQAFABAFABQAJAEAJAFQAAAAABAAQAMAGAOgCQAKgCAJgFQAIgFAHgEQAIgCAIgCQAIgCAGgBQANgDAMAEIAOAGQACACAEgBIAegCQAQAAAPgBQAHACAHACQADACADACIACACQACACAFAAIALgBQAHgBAGAAQAYgDARACQACABADACQABABABAAQAEACAFABIAKABIAZgCQAcgEAZAIIAYADIBAgDQAXgEAWABQAEgBAFAAQAOgBANgDQAEgBAEgBQAJgBAKAAIACAAIAJACQAEACAFABQALACACABQABABABACQACgBACgBQAcgLAlAFQAEACADACQADAHALgBQAEAAADAAIAXgBQAIAAAIgBQAHgCAHgCQAMAAANgBQAOAAAOACQARABAPADIAQAEIAKABQAcgFAaAEQAEABADAAIAeADQAUAEASgBQANgBAMgCIAcABQAJACAJAAQABAAABAAQAQAFARgBQAHAAAHAAIAmAAQAIAAAHAAQAYABgCAHQAAADgDACIgDABQgIABgIACIgFABIhMAEQgOACgOACQgHABgGAAIi8ABQgeABgbgCIgWAAIgOgDIgJAAIgDABIgFAEQgFAEgMABIgaACQgMABgMACIgoAAIgRgDIhlABQgMABgKABQgFAAgDABIhDgCQgQgCgPgBQgEAAgDABQgOAAgLgDIhUADIgHABQgRAGgTgEIgOgDIgHAAQgBAAgBAAQgEAAgDAAQgDgBgEAAQgMgDgMADIgRAFIg1ABQgJgCgKgCQgHAAgIABQgNAFgOADQgGAAgFAAQgHgBgFAAQgFgBgEACQgSgFgSAAQgFABgFABQgBABgCAAIgWAGIgGAAIgIgBIgOgDQgCgBgCAAQgFgBgGAAQgRACgTAGQgCgCgCgBQgHgCgJAAQgFgBgFAAQgNgFgNgDQgHgBgIAAQgKABgLACIg0gCIgSgDQgMgCgLACQgFgBgDAAIgHgBIgJAAIgPACQgTADgSgDIgGgBIgmABIgVgDQgNgCgNABQgKABgLgBQgFABgFAAIhRAFIgPgCQgEgBgEgBQgKgCgMgBIg7ABIgHAAIhdAIQgLgEgNABIgZgCQgKgBgHgBIgLgEIgJAAIgHABIgbAAQgZAHgfgBIiygFIgKgBQgIgCgHgCQgOgDgOgDIhNgFIgFgBQgGgEgJgBg");
	this.shape_68.setTransform(27.3077,10.4558);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhRAsQgHgCgJAAIgKgBIgagIIgPgBIgVADIg0gCIgSgDQgMgCgLACIgIgBIgHgBIgJAAIgPACQgTADgSgDIgGgBIgmABIgVgDQgNgCgNABQgKABgLgBIgKABIhRAFIgPgCIgIgCQgKgCgMgBIg7ABIgHAAIhdAIQgLgEgNABIgZgCIgRgCIgLgEIgJAAIgHABIgbAAQgZAHgfgBIiygFIgKgBIgPgEIgcgGIhNgFIgFgBQgGgEgJgBIgCAAQACgEADgEQAdgGAIAAIAlADIAVACQAOABANgCIAJgBIARgDQAKgDAMgBIAMABQAJAAAJgCIAhgCIBfgEQADABAGgCIAOgHQAMgIARgCQANgCAQABIAYAEIAOAFQAHADAKAAIAVAAIAIgBQAJgBAGgDIAJgCQAkgEAcANIADABIAEAAQAGABAIgCQAFgBAEgCIAIgCIACAAQAKABAHAEQAGACAGABQAKACAMgBIAPgCQAUgBATAFIAgADIAmgBQAMgBALgCQAagGAbABIAaAAIAGgBIALgEIADgCIAEgCIApADIAMABIALABIAIAAIADAAIAJgCIAPAAIAbAAIAhACIAIABIARgCQAJgBAKABQAHAAAIABIAEgBIANgBIATAJQAIAEAIABQARADAKgGQAJgGAKgFIAIgDIAMgBIAKACIASAJIABAAQAMAGAOgCQAKgCAJgFIAPgJIAQgEQAIgCAGgBQANgDAMAEIAOAGQACACAEgBIAegCIAfgBIAOAEIAGAEIACACQACACAFAAIALgBIANgBQAYgDARACIAFADIACABIAJADIAKABIAZgCQAcgEAZAIIAYADIBAgDQAXgEAWABIAJgBQAOgBANgDIAIgCIATgBIACAAIAJACIAJADIANADIACADIAEgCQAcgLAlAFIAHAEQADAHALgBIAHAAIAXgBQAIAAAIgBIAOgEIAZgBQAOAAAOACQARABAPADIAQAEIAKABQAcgFAaAEIAHABIAeADQAUAEASgBQANgBAMgCIAcABIASACIACAAQAQAFARgBIAOAAIAmAAIAPAAQAYABgCAHQAAADgDACIgDABIgQADIgFABIhMAEIgcAEIgNABIi8ABQgeABgbgCIgWAAIgOgDIgJAAIgDABIgFAEQgFAEgMABIgaACQgMABgMACIgoAAIgRgDIhlABIgWACIgIABIhDgCQgQgCgPgBIgHABQgOAAgLgDIhUADIgHABQgRAGgTgEIgOgDIgHAAIgCAAIgHAAIgHgBQgMgDgMADIgRAFIg1ABIgTgEIgPABQgNAFgOADIgLAAIgMgBQgFgBgEACQgSgFgSAAIgKACIgDABIgWAGIgGAAIgIgBIgOgDIgEgBIgLgBQgRACgTAGIgEgDg");
	this.shape_69.setTransform(27.3077,10.4558);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Az9ACQADgDAEgEQAdgHAIABIAmAEQALABAKABQAOACAOgCQAFgBAEAAIARgEQALgDAMgBQAGAAAGAAQAKAAAJgDQAQAAARgBIBhgEQADABAHgDIAOgIQALgJASgCQANgCAQABQAOACALADQAHACAHADQAHADAKAAIAWAAQAEgBADAAQAKgBAGgCQAFgBAEgBQAlgDAdANQABABACAAQACABADAAQAGABAIgBQAFgBAEgDIAIgCIACAAQAKACAIAEQAFADAHAAQAKADANgDQAHgBAHAAQAVgCAUAFIAgAEIAmgCQANgBALgCQAbgFAcgBIAaAAIAGgBIALgEQABgBACgBQACgBACgCQASADAYACQAGAAAGABIAMABQAEAAAEAAIADAAQAFAAAFgBQAIABAHAAQAOABAOgBIAhACQAFABAEAAIARgBQAKAAAKABQAHAAAIAAQACAAACgBQAIgBAGgBQAJAFALAEQAIADAIACQASADAKgHQAIgGALgFQAEgCAEgBQAFgCAGgBQAGABAFABQAJAEAJAFQABAAABAAQAMAGAOgCQAKgCAKgFQAHgFAIgFQAHgCAJgDQAHgDAHgBQANgDAMAEIAOAIQACACAEgBIAfgBQAQgBAPAAQAIACAGACQADADADACIACADQACACAFAAIAMgBQAGgBAGAAQAagDARADQACABADABQABABABABQAEABAFABIAKABIAagDQAcgFAaAKIAYADIBCgEQAXgDAXAAQAEgBAEAAQAOgCAOgDQAEgBAEAAQAJgBAKAAIADAAIAJACQAEACAFABQAMACACACQAAABABACQACAAACgBQAdgLAlAFQAEADAEACQACAHAMAAQADAAAEgBIAXgBQAIAAAIgBQAHgCAIgBQANAAAMAAQAPAAAOABQARABAQADIAbADQAcgEAcADQADABADAAIAgADQATAEATgBQANgBAMgDIAdABQAJABAKAAQABAAABAAQAQAFASAAQAHAAAHAAIAnABQAHAAAIAAQAZACgDAHQgBACgDADIgEABQgJABgIABIgGABIhNAEQgOABgPACQgGAAgHABIjAgBQgdABgcgBIgXAAIgYgEIgDACIgFAFQgFAEgMABIgaACQgNABgMACIgWABIgkgEIhnACQgMABgLACQgEAAgEAAIhFgCQgPgCgQgBQgDAAgEABQgOAAgMgEIgagBIg7AEIgHABQgSAHgTgFIgPgCIgGAAQgCAAgBAAQgDAAgDAAQgEgCgDAAQgNgDgMADIgRAFIg2ABQgKgCgKgCQgIAAgHABQgOAGgOACQgGAAgFgBQgHAAgGgBQgFgBgEABQgTgFgRABQgFABgFACQgCAAgBABIgXAGIgPAAIgOgEQgCgBgCAAQgFAAgGgBQgSAEgTAFQgCgCgCgBQgGgDgKAAQgFgBgFAAQgNgFgNgEQgIgBgIAAQgKABgLADIgCAAIhGgFQgMgCgMABQgEAAgEgBIgHgBIgZACQgTACgSgCIgtABIgVgDQgOgCgNAAQgLAAgLAAQgFAAgFAAIhTAFIgPgBQgEgCgEgBQgKgCgMgBIg9ACIgHgBIgbAFIhEAFQgKgFgOABIgZgBQgKgBgIgBIgLgDIgKgBIgGABIgJAAIgTABQgZAHgggBIi2gGIgKgBQgIgCgIgCQgOgEgOgEIhOgEIgFgCQgGgEgKgCg");
	this.shape_70.setTransform(26.7711,10.7357);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhUAvQgGgDgKAAIgKgBIgagJIgQgBIgVAEIgCAAIhGgFQgMgCgMABIgIgBIgHgBIgZACQgTACgSgCIgtABIgVgDIgbgCIgWAAIgKAAIhTAFIgPgBIgIgDQgKgCgMgBIg9ACIgHgBIgbAFIhEAFQgKgFgOABIgZgBIgSgCIgLgDIgKgBIgGABIgJAAIgTABQgZAHgggBIi2gGIgKgBIgQgEIgcgIIhOgEIgFgCQgGgEgKgCIgBAAIAHgHQAdgHAIABIAmAEIAVACQAOACAOgCIAJgBIARgEQALgDAMgBIAMAAQAKAAAJgDQAQAAARgBIBhgEQADABAHgDIAOgIQALgJASgCQANgCAQABQAOACALADIAOAFQAHADAKAAIAWAAIAHgBQAKgBAGgCIAJgCQAlgDAdANIADABIAFABQAGABAIgBQAFgBAEgDIAIgCIACAAQAKACAIAEQAFADAHAAQAKADANgDIAOgBQAVgCAUAFIAgAEIAmgCQANgBALgCQAbgFAcgBIAaAAIAGgBIALgEIADgCIAEgDIAqAFIAMABIAMABIAIAAIADAAIAKgBIAPABQAOABAOgBIAhACIAJABIARgBQAKAAAKABIAPAAIAEgBIAOgCQAJAFALAEIAQAFQASADAKgHQAIgGALgFIAIgDIALgDIALACIASAJIACAAQAMAGAOgCQAKgCAKgFIAPgKIAQgFQAHgDAHgBQANgDAMAEIAOAIQACACAEgBIAfgBIAfgBIAOAEIAGAFIACADQACACAFAAIAMgBIAMgBQAagDARADIAFACIACACIAJACIAKABIAagDQAcgFAaAKIAYADIBCgEQAXgDAXAAIAIgBQAOgCAOgDIAIgBIATgBIADAAIAJACIAJADQAMACACACIABADIAEgBQAdgLAlAFIAIAFQACAHAMAAIAHgBIAXgBQAIAAAIgBIAPgDIAZAAQAPAAAOABQARABAQADIAbADQAcgEAcADIAGABIAgADQATAEATgBQANgBAMgDIAdABIATABIACAAQAQAFASAAIAOAAIAnABIAPAAQAZACgDAHIgEAFIgEABIgRACIgGABIhNAEIgdADIgNABIjAgBQgdABgcgBIgXAAIgYgEIgDACIgFAFQgFAEgMABIgaACQgNABgMACIgWABIgkgEIhnACIgXADIgIAAIhFgCQgPgCgQgBIgHABQgOAAgMgEIgagBIg7AEIgHABQgSAHgTgFIgPgCIgGAAIgDAAIgGAAIgHgCQgNgDgMADIgRAFIg2ABIgUgEIgPABQgOAGgOACIgLgBIgNgBIgJAAQgTgFgRABIgKADIgDABIgXAGIgPAAIgOgEIgEgBIgLgBQgSAEgTAFIgEgDg");
	this.shape_71.setTransform(26.7711,10.7357);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A0YABQAEgDAFgEQAegGAIABIAnAEQALACALABQAOACAOgCQAFAAAFgBIARgEQALgDAMgCQAGAAAGgBQAKABAJgEQARAAARgBIBjgEQADABAHgDIAOgKQALgJASgDQAOgCARACQANABALAEQAIACAHAEQAHADAKAAIAWgBQAEAAAEAAQAJgBAIgCQAEgBAFgBQAmgCAdANQABABACABQACABADAAQAHACAIgBQAFgBAEgDIAJgCIABAAQAKACAIAEQAGADAGABQALADANgDQAHgCAIgBQAVgCAUAGIAhAEIAngDQANgBALgCQAcgEAcgBIAagBIAHgBIALgFQABgBACgBQACgBACgCQASAEAZACQAGAAAHAAIALABQAFABAEAAIADAAQAFABAGAAQAIABAIAAQAOABAOAAIAiACQAFAAAEAAIASABQAKAAAKACQAHgBAIAAQADAAACgBQAHgCAHgCQAKAFAKAEQAIADAJACQATADAJgIQAJgGAKgFQADgCAFgCQAGgBAGgBQAGAAAFABQAJAEAKAEQABABAAAAQAOAGANgCQALgCAJgGQAIgFAHgEQAIgEAIgDQAIgEAGgBQAOgDAMAFIAOAJQACACAFgBIAfgCQAQAAAQAAQAHADAHACQADADACADIADADQACACAFAAIALgBQAHAAAGgBQAagDARAEQADABACABQACABABABQAEABAFAAIAKACIAagEQAegGAaAKIAYAEIBDgEQAYgDAXgBQAEAAAEgBQAPgCAOgEQAEAAAEAAQAKgBAKAAIADAAIAJACQAEACAFABQANACABADQABACAAACQACgBACAAQAegLAmAGQAEADADADQACAHANAAQADAAAEgBIAXgBQAJgBAIgBQAHgBAIgBQANAAANABQAPAAAOABQASABAQABIAcADQAdgDAcACQAEAAADABIAgADQAUAEATgCQAOgBAMgEIAdABQAKAAAJABQABAAABAAQAQAFATAAQAHAAAHAAIAoACQAIAAAIAAQAbACgGAIQgBACgEADIgFABQgJABgIABIhVAEQgPABgOABQgHAAgGAAIjEgCQgeACgdgBIgXABIgPgEIgJgBIgDACIgFAGQgFAEgMABIgcADQgMAAgMACIgqABIgSgDIhpADQgMABgMABQgEABgEAAIhGgDQgQgCgQgBQgDABgEAAQgPAAgLgEIgbgCIg8AEIgIACQgRAIgUgFIgPgDIgHAAQgBAAgCAAQgDAAgDAAQgEgCgDgBQgNgDgNADIgRAGIg3ABQgKgCgKgDQgIABgHABQgOAGgPABQgGAAgGAAQgGgBgGgCQgFAAgFAAQgTgFgRACQgGAAgFACQgCABgBAAIgXAHIgPAAIgPgDQgBgBgDAAQgFAAgGAAQgSAEgUAFQgBgCgCgBQgGgFgLABQgFgBgGgBQgMgGgOgCQgIgBgIgBQgKABgMADIgCAAIhHgFQgMgBgNAAQgEAAgEgBIgQgCIgQACQgUACgTgBIgGgBIgoACIgVgDQgOgCgNAAQgLAAgMgBQgEAAgFAAIhVAGIgQgDQgDgBgEgBQgLgDgMgBIhFACIgcAGIhFAFQgLgFgOACIgagCQgJAAgJgCIgVgDIgHABIgQgBIgMACQgZAIgigBIi5gHIgLgBQgHgDgIgDQgOgEgQgEIhPgEIgFgDQgGgEgKgCg");
	this.shape_72.setTransform(26.2465,11.0029);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhWAyQgGgFgLABIgLgCQgMgGgOgCIgQgCIgWAEIgCAAIhHgFIgZgBIgIgBIgQgCIgQACQgUACgTgBIgGgBIgoACIgVgDQgOgCgNAAIgXgBIgJAAIhVAGIgQgDIgHgCQgLgDgMgBIhFACIgcAGIhFAFQgLgFgOACIgagCIgSgCIgVgDIgHABIgQgBIgMACQgZAIgigBIi5gHIgLgBIgPgGIgegIIhPgEIgFgDQgGgEgKgCIgBAAIAJgHQAegGAIABIAnAEIAWADQAOACAOgCIAKgBIARgEIAXgFIAMgBQAKABAJgEQARAAARgBIBjgEQADABAHgDIAOgKQALgJASgDQAOgCARACQANABALAEIAPAGQAHADAKAAIAWgBIAIAAIARgDIAJgCQAmgCAdANIADACIAFABQAHACAIgBQAFgBAEgDIAJgCIABAAQAKACAIAEQAGADAGABQALADANgDIAPgDQAVgCAUAGIAhAEIAngDQANgBALgCQAcgEAcgBIAagBIAHgBIALgFIADgCIAEgDQASAEAZACIANAAIALABIAJABIADAAIALABIAQABQAOABAOAAIAiACIAJAAIASABIAUACIAPgBIAFgBIAOgEIAUAJIARAFQATADAJgIQAJgGAKgFIAIgEIAMgCIALABIATAIIABABQAOAGANgCQALgCAJgGIAPgJIAQgHQAIgEAGgBQAOgDAMAFIAOAJQACACAFgBIAfgCIAgAAIAOAFIAFAGIADADQACACAFAAIALgBIANgBQAagDARAEIAFACIADACIAJABIAKACIAagEQAegGAaAKIAYAEIBDgEQAYgDAXgBIAIgBQAPgCAOgEIAIAAIAUgBIADAAIAJACIAJADQANACABADIABAEIAEgBQAegLAmAGIAHAGQACAHANAAIAHgBIAXgBIARgCIAPgCIAaABIAdABIAiACIAcADQAdgDAcACIAHABIAgADQAUAEATgCQAOgBAMgEIAdABIATABIACAAQAQAFATAAIAOAAIAoACIAQAAQAbACgGAIIgFAFIgFABIgRACIhVAEIgdACIgNAAIjEgCQgeACgdgBIgXABIgPgEIgJgBIgDACIgFAGQgFAEgMABIgcADQgMAAgMACIgqABIgSgDIhpADIgYACIgIABIhGgDIgggDIgHABQgPAAgLgEIgbgCIg8AEIgIACQgRAIgUgFIgPgDIgHAAIgDAAIgGAAIgHgDQgNgDgNADIgRAGIg3ABIgUgFIgPACQgOAGgPABIgMAAIgMgDIgKAAQgTgFgRACQgGAAgFACIgDABIgXAHIgPAAIgPgDIgEgBIgLAAIgmAJIgDgDg");
	this.shape_73.setTransform(26.2465,11.0029);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A0yABQAFgDAFgEQAfgHAIACIAoAFQALACAKABQAPADAOgCQAFgBAFAAIASgFQALgEAMgBQAGgBAHAAQAKgBAJgDQARgBASgBIBkgEQAEABAHgDIAOgKQALgLASgDQAOgCARACQAOACALAEQAIACAHAEQAHAEALAAIAWgBQAEgBAEAAQAJgCAIgBQAFAAAFgBQAmgCAeAOQABABACABQADABADABQAIACAHgBQAFgBAEgDIAJgCIACAAQAKACAIAFQAGAEAHABQAKACAOgEQAHgCAIAAQAVgDAVAGIAhAEIAogDQANgBAMgCQAcgDAdgDIAbgBIAHgBIALgFQABgBACgBQACgBACgCQASAFAaABQAGABAGAAIAMABQAFAAAEABIAEAAQAFABAGABQAIABAIABQAPABAOgBIAVABIAOACQAFAAAEABIATABQAKABAKACQAIgBAIgBQACAAADgBQAIgCAGgDQAKAFALADQAJADAIACQAUADAJgHQAIgHALgFQADgCAFgCQAGgCAGgCQAGABAFABQAKAEAKAEQABAAABAAQANAGAOgCQAKgCAKgGQAIgFAHgFQAIgEAIgEQAIgEAHgCQANgDANAFIAOALQACACAEgBIAggBQARgBAQAAQAHADAHADQADAEACADIACAEQACACAFAAIAMgBQAHgBAGAAQAbgDASAFQACABADABQABABABAAQAEABAFABIAKABIAbgEQAegHAbALIAYADIBFgEQAYgCAYgCQAEgBAEAAQAPgDAOgEQAFAAAEAAQAKAAAKAAIADAAIAJACQAFACAFABQANADABADQAAACABACQACAAACgBQAegKAnAGQAEAEADACQABAJAOgBQADAAAEgBIAYgBQAIgBAJAAQAHgBAIgBQAOAAANABQAPABAPABQARAAASABIAdABQAdgCAdABQAEAAADABIAhADQAUAEAUgBQANgCANgFIAeAAQAKABAKAAQABAAABAAQAQAFATABQAHAAAIAAIAoACQAIAAAIABQAcACgHAJQgCACgEADIgGAAQgJABgJABIhWADQgPABgPABQgHAAgHAAIjHgEQgeACgeAAIgXABIgZgFIgDACIgFAGQgFAFgNABIgbACQgNACgNABIgXACIgUgBIgSgDIhrAFQgMABgMABQgEAAgEAAIhIgDQgQgCgQgBQgDABgEAAQgPAAgMgFIgcgCIg9AEIgHACQgTAJgUgGIgPgDIgHABQgBAAgCAAQgDgBgDAAQgEgCgDgBQgNgEgNAEIgSAGIg4ABQgKgCgLgDQgIABgHABQgOAGgPABQgGAAgGgBQgHgBgGgBQgFgCgFAAQgUgFgRADQgGABgFACQgCAAgBABIgWAHIgRABIgPgEQgCgBgCAAQgFAAgGAAQgTAFgUAFQgBgCgCgCQgGgEgLAAQgFgBgGgBQgNgGgOgDQgIgBgIAAQgLABgMACIhKgEQgNgBgNAAQgEgBgEgBIgHgCIgaACQgUABgTAAIgvACIgWgDQgOgCgOgBQgLgBgMgBQgFABgFAAIhWAFIgQgCQgEgCgEgBQgKgDgNgBIhGADIgcAGIhHAGQgKgGgPACIgagBQgKgBgJAAIgMgCIguAAQgZAKgjgBIi8gJIgLgBQgIgDgIgDQgPgFgPgEIhRgFIgFgCQgGgFgKgCg");
	this.shape_74.setTransform(25.744,11.2819);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhZA0QgGgEgLAAIgLgCQgNgGgOgDIgQgBQgLABgMACIhKgEIgagBIgIgCIgHgCIgaACIgnABIgvACIgWgDIgcgDIgXgCIgKABIhWAFIgQgCIgIgDQgKgDgNgBIhGADIgcAGIhHAGQgKgGgPACIgagBIgTgBIgMgCIguAAQgZAKgjgBIi8gJIgLgBIgQgGIgegJIhRgFIgFgCQgGgFgKgCIAAAAIAKgHQAfgHAIACIAoAFIAVADQAPADAOgCIAKgBIASgFQALgEAMgBIANgBQAKgBAJgDIAjgCIBkgEQAEABAHgDIAOgKQALgLASgDQAOgCARACQAOACALAEQAIACAHAEQAHAEALAAIAWgBIAIgBIARgDIAKgBQAmgCAeAOIADACIAGACQAIACAHgBQAFgBAEgDIAJgCIACAAQAKACAIAFQAGAEAHABQAKACAOgEQAHgCAIAAQAVgDAVAGIAhAEIAogDIAZgDIA5gGIAbgBIAHgBIALgFIADgCIAEgDQASAFAaABIAMABIAMABIAJABIAEAAIALACIAQACQAPABAOgBIAVABIAOACIAJABIATABIAUADIAQgCIAFgBIAOgFQAKAFALADIARAFQAUADAJgHQAIgHALgFIAIgEIAMgEIALACIAUAIIACAAQANAGAOgCQAKgCAKgGIAPgKIAQgIQAIgEAHgCQANgDANAFIAOALQACACAEgBIAggBIAhgBIAOAGIAFAHIACAEQACACAFAAIAMgBIANgBQAbgDASAFIAFACIACABIAJACIAKABIAbgEQAegHAbALIAYADIBFgEIAwgEIAIgBIAdgHIAJAAIAUAAIADAAIAJACIAKADQANADABADIABAEIAEgBQAegKAnAGIAHAGQABAJAOgBIAHgBIAYgBIARgBIAPgCIAbABIAeACIAjABIAdABQAdgCAdABIAHABIAhADQAUAEAUgBQANgCANgFIAeAAIAUABIACAAQAQAFATABIAPAAIAoACIAQABQAcACgHAJIgGAFIgGAAIgSACIhWADIgeACIgOAAIjHgEIg8ACIgXABIgZgFIgDACIgFAGQgFAFgNABIgbACIgaADIgXACIgUgBIgSgDIhrAFIgYACIgIAAIhIgDIgggDIgHABQgPAAgMgFIgcgCIg9AEIgHACQgTAJgUgGIgPgDIgHABIgDAAIgGgBIgHgDQgNgEgNAEIgSAGIg4ABIgVgFIgPACQgOAGgPABIgMgBIgNgCIgKgCQgUgFgRADIgLADIgDABIgWAHIgRABIgPgEIgEgBIgLAAIgnAKIgDgEg");
	this.shape_75.setTransform(25.744,11.2819);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A1NAAIAFgDIAHgEQAUgKAaAGIAZAEIAfAFQAUADAUgDIASgFQAQgGAUgCQALAAAJgEIA7gDIAQgBIA/gCQADABAHgDIAOgMQATgUArAFQAYAEAQAKQAHAEALAAIAfgDQA5gJAoAUQAWALAMgJIAMgCQAKACAIAGQAOAKAXgHQAegJAdAJIAiAEIAkgCIBTgJIAVgCIASgCIAOgIIAFgDQAXAHAiABIAZADQAdAIAegCIAVAAIAsAGIAUADIAQgCQAKgDAJgFQATAIAVAFQAUADAJgIQAOgNAagHIALABIAUAHQAcAMAWgQIAggVQAWgMASAKIAOALQACADAFgBIAlgDIAdABIAOAHIAHAMQACACAFAAIAagCQAhgEATAKIAUADIAbgFQAfgIAbAMIAZADIAmgDIAjgCIAtgDIAmgKIAiACIATAFQAOACAAAEIABAFQAggMAqAIIAHAHQABAKAVgDIA6gEIAhACIAYACIAVgBIAZACIBQgDIATABIAVAEQAkAHAggMIA1gBQAXAHAcgBIAqADIAPACQAmADgYAOIgOABIiCAEIhngDIgWAAIgQAAIgfgDIgKgBIh4AGIgJgCIgHgDIgJgBIgDACIgFAHQgEAFgOABIg/AGIgPACIgUgBIgSgEIgUABIgZADIgaABIg/AEIgYgBIhagFQgVABgOgHIgcgCIgUABIgrAEIgHACQgTAKgUgGIgQgEIgKABIgHgBQgQgKgRAGIgSAHIg4ABIgWgGIgQACQgZAMgegJQgjgKgbALIgXAIIgRAAIgTgEIgMAAIgnALQgFgKgPAAIgMgCQgdgPgmAIIgRABIgxgDIgkgDIgSgEIgeAAIgPABIgRACIgkACIgOAAIgwgGIgagDIgqAFIgPACIgaAAIgPAAIgQgDQgOgGgSgCIgSAAIgsADIgJABIgdAHIgRACIgcACIgbACQgKgGgPACIgUAAIgXgBIgygEIgNACQgZALgkgBIgfgCIihgIIgLgCQgWgJgZgHIgUAAIg+gFIgFgDQgGgFgKgCg");
	this.shape_76.setTransform(25.2183,11.5651);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhtAxIgMgCQgdgPgmAIIgRABIgxgDIgkgDIgSgEIgeAAIgPABIgRACIgkACIgOAAIgwgGIgagDIgqAFIgPACIgaAAIgPAAIgQgDQgOgGgSgCIgSAAIgsADIgJABIgdAHIgRACIgcACIgbACQgKgGgPACIgUAAIgXgBIgygEIgNACQgZALgkgBIgfgCIihgIIgLgCQgWgJgZgHIgUAAIg+gFIgFgDQgGgFgKgCIAFgDIAHgEQAUgKAaAGIAZAEIAfAFQAUADAUgDIASgFQAQgGAUgCQALAAAJgEIA7gDIAQgBIA/gCQADABAHgDIAOgMQATgUArAFQAYAEAQAKQAHAEALAAIAfgDQA5gJAoAUQAWALAMgJIAMgCQAKACAIAGQAOAKAXgHQAegJAdAJIAiAEIAkgCIBTgJIAVgCIASgCIAOgIIAFgDQAXAHAiABIAZADQAdAIAegCIAVAAIAsAGIAUADIAQgCQAKgDAJgFQATAIAVAFQAUADAJgIQAOgNAagHIALABIAUAHQAcAMAWgQIAggVQAWgMASAKIAOALQACADAFgBIAlgDIAdABIAOAHIAHAMQACACAFAAIAagCQAhgEATAKIAUADIAbgFQAfgIAbAMIAZADIAmgDIAjgCIAtgDIAmgKIAiACIATAFQAOACAAAEIABAFQAggMAqAIIAHAHQABAKAVgDIA6gEIAhACIAYACIAVgBIAZACIBQgDIATABIAVAEQAkAHAggMIA1gBQAXAHAcgBIAqADIAPACQAmADgYAOIgOABIiCAEIhngDIgWAAIgQAAIgfgDIgKgBIh4AGIgJgCIgHgDIgJgBIgDACIgFAHQgEAFgOABIg/AGIgPACIgUgBIgSgEIgUABIgZADIgaABIg/AEIgYgBIhagFQgVABgOgHIgcgCIgUABIgrAEIgHACQgTAKgUgGIgQgEIgKABIgHgBQgQgKgRAGIgSAHIg4ABIgWgGIgQACQgZAMgegJQgjgKgbALIgXAIIgRAAIgTgEIgMAAIgnALQgFgKgPAAg");
	this.shape_77.setTransform(25.2183,11.5651);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A1eAXQgYgPAmgDIAPgCIAsgDQAdABAXgHIA1ABQAhAMAlgHIAVgEIATgBIBSADIAagCIAUABIAagCIAhgCIA7AEQAVADABgKIAIgHQAqgIAhAMIABgFQAAgEAPgDIATgFIAigBQASAGAVAEIAuADIAkACIAnADQAPABAKgEQAbgMAgAHIAcAFIAUgCQATgKAiAEIAaACQAFAAACgDIAHgLIAPgIIAeAAIAlADQAFAAACgCIAOgMQASgJAXAMIAgAVQAXAQAdgMIAVgIIAKAAQAbAHAOANQAJAIAVgDQAVgFATgIQAJAFALADIAQACIAUgDIAtgGIAWgBQAeACAegHIAZgEQAjAAAYgHIAEADQAGAFAJADIASACIAVACIBVAIIAlADIAigEQAegJAeAJQAXAHAPgLQAIgFALgCIAMACQAMAJAWgLQApgVA6AKIAgACQALAAAHgEQARgKAYgDQAsgGATAVIAOALIALADQAjgPAdARIAQABIA8ADIAVAEIAlAIQAIAEAKABQATADAVgDIAggFIAZgEQAbgGAUAKIAHAEIAGADQgLACgGAFIgFADIg/AFIgVABQgZAHgWAJIgMABIikAIIggACQgkABgagLIgMgBIg0ADIgXACIgUAAQgQgCgKAFIgbgBIgcgDIgSgBIgdgIIgKgBIgtgDIgSAAQgTACgOAGIgQADIgQAAIgaAAIgPgCQgVgGgWACIgbACIgwAHIgPAAIgkgDIgSgCIgPgBIgfAAQgJABgJADIgkAEIgzACIgRAAQgngJgdAQIgMACQgPAAgGAKQgTgHgVgEIgLgBIgUAFIgRgBIgYgIQgbgLgkALQgfAJgZgMIgQgCIgXAFIg4AAIgTgHQgSgHgQAKIgHABIgKAAIgQADQgVAHgTgLIgHgCIgrgDIgVgCQgRgDgMAFQgPAHgUgBIhcAFIgZABIhAgDIgagCIgagDIgUAAIgTADIgUABIgPgCIhAgGQgPgBgDgFIgGgGIgCgDIgKABIgIADIgJACIh5gFIgKAAIghAEIgQAAIgXAAIhoADIiFgFg");
	this.shape_78.setTransform(24.8067,11.9651);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAzAxIgLgBIgUAFIgRgBIgYgIQgbgLgkALQgfAJgZgMIgQgCIgXAFIg4AAIgTgHQgSgHgQAKIgHABIgKAAIgQADQgVAHgTgLIgHgCIgrgDIgVgCQgRgDgMAFQgPAHgUgBIhcAFIgZABIhAgDIgagCIgagDIgUAAIgTADIgUABIgPgCIhAgGQgPgBgDgFIgGgGIgCgDIgKABIgIADIgJACIh5gFIgKAAIghAEIgQAAIgXAAIhoADIiFgFIgOAAQgYgPAmgDIAPgCIAsgDQAdABAXgHIA1ABQAhAMAlgHIAVgEIATgBIBSADIAagCIAUABIAagCIAhgCIA7AEQAVADABgKIAIgHQAqgIAhAMIABgFQAAgEAPgDIATgFIAigBQASAGAVAEIAuADIAkACIAnADQAPABAKgEQAbgMAgAHIAcAFIAUgCQATgKAiAEIAaACQAFAAACgDIAHgLIAPgIIAeAAIAlADQAFAAACgCIAOgMQASgJAXAMIAgAVQAXAQAdgMIAVgIIAKAAQAbAHAOANQAJAIAVgDQAVgFATgIQAJAFALADIAQACIAUgDIAtgGIAWgBQAeACAegHIAZgEQAjAAAYgHIAEADQAGAFAJADIASACIAVACIBVAIIAlADIAigEQAegJAeAJQAXAHAPgLQAIgFALgCIAMACQAMAJAWgLQApgVA6AKIAgACQALAAAHgEQARgKAYgDQAsgGATAVIAOALIALADQAjgPAdARIAQABIA8ADIAVAEIAlAIQAIAEAKABQATADAVgDIAggFIAZgEQAbgGAUAKIAHAEIAGADQgLACgGAFIgFADIg/AFIgVABQgZAHgWAJIgMABIikAIIggACQgkABgagLIgMgBIg0ADIgXACIgUAAQgQgCgKAFIgbgBIgcgDIgSgBIgdgIIgKgBIgtgDIgSAAQgTACgOAGIgQADIgQAAIgaAAIgPgCQgVgGgWACIgbACIgwAHIgPAAIgkgDIgSgCIgPgBIgfAAIgSAEIgkAEIgzACIgRAAQgngJgdAQIgMACQgPAAgGAKQgTgHgVgEg");
	this.shape_79.setTransform(24.8067,11.9651);

	this.instance_1 = new lib.shape13("synched",0);
	this.instance_1.setTransform(24.35,12.35,1.8386,1.2948);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A2aAAIAGgDIAHgEQAVgKAcAGIAaAEIAhAFQAVADAVgDQAKgBAJgEIAmgIIAVgFIA+gCIARgCQAegRAlAPIALgCIAPgMQATgVAtAGQAaADARALQAIAEALAAIAhgDQA8gKArAVQAWALANgJIANgCQALADAIAFQAPAKAZgHQAfgJAeAJIAkAFIAmgDIBYgIIAXgCIATgDQAIgDAHgFIAEgDQAZAHAkABIAaADQAfAIAfgCIAWABIAvAGIAVADIARgCQALgDAJgGQAUAJAWAEQAWAEAJgIQAPgOAbgHIAMABIAVAHQAeANAYgRIAhgVQAYgMASAJIAPAMQACADAGgBIAmgDIAfAAIAPAIIAIAMQABADAGAAIAbgCQAjgFAUALIAVACIAdgFQAhgIAcANQAKAEAQgBIAogDIAmgCIAwgEQAVgDATgHIAjACIAUAFQAPADAAAEIABAFQAjgNAsAJIAHAGQABALAWgDIA9gEIAjACIAaACIAWgBIAbACIBUgDIAUABIAWAEQAnAHAhgMIA3gBQAZAHAegBIAtADIAQACQAnAEgZAOIgOABIiKAEIhtgDIgXAAIgRAAIgigDIgKgBIh+AFIgKgCIgHgCIgKgCIgDADIgGAHQgEAFgOABIhDAGIgQACIgUgBIgUgEIgVABIgbADIgbACIhCADIgagBIhfgFQgWABgPgHQgMgGgSADIgVACIgtAEIgIACQgTALgWgHIgRgEIgKABIgHgBQgRgKgTAGIgTAIIg7AAIgXgGIgRACQgaANgggJQglgMgdAMIgYAIIgSABIgUgFIgMABQgWAEgUAHQgFgLgQAAIgMgCQgfgPgoAIIgSABIg1gDIglgDQgJgDgKgBIggAAIgPABIgTACIgmACIgPAAIgygGIgbgDQgYgBgVAGIgQACIgbAAIgQAAIgRgDQgPgGgTgCIgTAAIguADIgLABIgeAHIgSACIgdACIgcACQgMgGgQACIgUAAIgYgBIg2gEIgNABQgbAMgmgBIgggCIirgIIgMgCQgWgJgbgHIgVgBIhCgFIgFgDQgGgFgLgCg");
	this.shape_80.setTransform(23.8383,12.7651);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhzAyIgMgCQgfgPgoAIIgSABIg1gDIglgDQgJgDgKgBIggAAIgPABIgTACIgmACIgPAAIgygGIgbgDQgYgBgVAGIgQACIgbAAIgQAAIgRgDQgPgGgTgCIgTAAIguADIgLABIgeAHIgSACIgdACIgcACQgMgGgQACIgUAAIgYgBIg2gEIgNABQgbAMgmgBIgggCIirgIIgMgCQgWgJgbgHIgVgBIhCgFIgFgDQgGgFgLgCIAGgDIAHgEQAVgKAcAGIAaAEIAhAFQAVADAVgDQAKgBAJgEIAmgIIAVgFIA+gCIARgCQAegRAlAPIALgCIAPgMQATgVAtAGQAaADARALQAIAEALAAIAhgDQA8gKArAVQAWALANgJIANgCQALADAIAFQAPAKAZgHQAfgJAeAJIAkAFIAmgDIBYgIIAXgCIATgDQAIgDAHgFIAEgDQAZAHAkABIAaADQAfAIAfgCIAWABIAvAGIAVADIARgCQALgDAJgGQAUAJAWAEQAWAEAJgIQAPgOAbgHIAMABIAVAHQAeANAYgRIAhgVQAYgMASAJIAPAMQACADAGgBIAmgDIAfAAIAPAIIAIAMQABADAGAAIAbgCQAjgFAUALIAVACIAdgFQAhgIAcANQAKAEAQgBIAogDIAmgCIAwgEQAVgDATgHIAjACIAUAFQAPADAAAEIABAFQAjgNAsAJIAHAGQABALAWgDIA9gEIAjACIAaACIAWgBIAbACIBUgDIAUABIAWAEQAnAHAhgMIA3gBQAZAHAegBIAtADIAQACQAnAEgZAOIgOABIiKAEIhtgDIgXAAIgRAAIgigDIgKgBIh+AFIgKgCIgHgCIgKgCIgDADIgGAHQgEAFgOABIhDAGIgQACIgUgBIgUgEIgVABIgbADIgbACIhCADIgagBIhfgFQgWABgPgHQgMgGgSADIgVACIgtAEIgIACQgTALgWgHIgRgEIgKABIgHgBQgRgKgTAGIgTAIIg7AAIgXgGIgRACQgaANgggJQglgMgdAMIgYAIIgSABIgUgFIgMABQgWAEgUAHQgFgLgQAAg");
	this.shape_81.setTransform(23.8383,12.7651);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A2zABQAFgDAGgFQAkgHANADIAkAEQAMACAMABQAQADAOgBQAHgBAGgBQALgBAJgEIAUgDQAVgDAUgEQAPgBAQgBIAxgCQAfgQAlAOIAIgBIAEgBIAPgLQAWgTAsAFQALABAKADQANADAKAGQAIADAMABIASgCQAIAAAHgBQAHgBAHgBQAFgBAFgBQAtgDAiAQIABAAQAIADAIABQALABAJgFIANgCQALACAJAFQAAAAABABQAPAJAYgGQABAAACgBQAegGAdAIIAlAEIAegDQAOAAAOgCQAfgEAegBIAzgEQAIgEAIgEQACgCACgBQAQADATACQANACAOAAIABAAQAFAAADABIARAAQAHABAHABQAYAEAZgBIAVACQAFAAADAAIATABQAVABAWAEIARgBQAKgCAJgEQABAAAAAAQAUAJAXADQAGABAFAAQANAAAIgGQAEgDAFgDQAOgIAUgEQAGABAFABQACAAABABQAJAEAKACQAGADAGABQAXAEATgNQALgFAJgFIAPgIQAYgLATAIIAQALQACACAFAAIATgCQAaAAAagCQAFACAFADIAGACIAIALQACACAFAAQAAAAABAAQAOgBANgBQASgCAOABQADAAADABQAJACAHADQABAAABABIAWACIAdgEQAhgHAdAMQALAEAQgBIBAgEQAfgDAggBIAAAAQAXgCASgHQALgBALABIANAAQAAAAABAAQAKAEAKACQAOACABADQABACAAACQAkgNAtAIQAEADAEADQABAGAGACQAGABALgBIAQgBQAKAAAKgCQANgBAMgCQAKAAAIAAQAlAAAiACIAdACQAjgBAiACIAeABIAXAEQAOADAOAAQAXABAWgHIAPAAQAKAAAKABQALgBAKAAQAKADAMACQAPACASgBIAdABQAQAAARACQAKABAGACQAMAEgGAGQgCACgFADQgFAAgFAAIhfAEQgYABgYACQgCAAgCAAIjcgEQghACghAAIgkABIgbgGIgJAJQgFAFgOABIgSACQgOAAgNACIgnADIgVgBIgQgCIgEgBIhoAEQgSABgSACIhOgEQgXgBgYgBIgCAAQgVACgQgGQgMgGgSADIhEAFIgIACQgTAKgWgGIgQgEQgBAAgBAAQgFABgFAAQgDgBgEAAQgSgJgTAGIgTAHIg2ABQgDAAgDAAQgMgDgMgDQgIABgJABQgMAFgMACQgGABgHgBQgLAAgLgCQgDgBgCAAQgXgGgUACQgGABgGABQgDABgDACIgZAHIgSAAIgOgDQgDgBgEgBQgGABgGAAQgWADgUAHQgCgCgBgBQgHgGgNAAQgGgBgGgBQgLgFgNgDQgIgBgJgBQgMAAgNADQgDAAgDABIhKgEQgSgCgSABQgEgCgDgBQgFgBgGAAQAAAAgBAAIgRABQgWABgWAAIgHAAIg1ACIgPgCQgPgCgOgBQgRgBgSgCQgBAAgBAAQgXAAgVAFIgQACIgsAAIgRgDQgCAAgBgBQgOgEgRgCIhNADIgfAGIgEAAIhJAGQgMgFgQABIgYgBQgKgBgJgBIgLgBIgtgCIgNABQgdALglgCIjPgIIgMgBQgGgCgGgCQgSgGgUgFIhZgGIgGgCQgGgFgLgCg");
	this.shape_82.setTransform(23.325,13.3066);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhhA3QgHgGgNAAIgMgCQgLgFgNgDIgRgCQgMAAgNADIgGABIhKgEQgSgCgSABIgHgDIgLgBIgBAAIgRABQgWABgWAAIgHAAIg1ACIgPgCIgdgDIgjgDIgCAAQgXAAgVAFIgQACIgsAAIgRgDIgDgBQgOgEgRgCIhNADIgfAGIgEAAIhJAGQgMgFgQABIgYgBIgTgCIgLgBIgtgCIgNABQgdALglgCIjPgIIgMgBIgMgEIgmgLIhZgGIgGgCQgGgFgLgCIAAAAIALgIQAkgHANADIAkAEIAYADQAQADAOgBIANgCQALgBAJgEIAUgDQAVgDAUgEIAfgCIAxgCQAfgQAlAOIAIgBIAEgBIAPgLQAWgTAsAFQALABAKADQANADAKAGQAIADAMABIASgCIAPgBIAOgCIAKgCQAtgDAiAQIABAAQAIADAIABQALABAJgFIANgCQALACAJAFIABABQAPAJAYgGIADgBQAegGAdAIIAlAEIAegDQAOAAAOgCQAfgEAegBIAzgEIAQgIIAEgDQAQADATACIAbACIABAAIAIABIARAAIAOACQAYAEAZgBIAVACIAIAAIATABQAVABAWAEIARgBQAKgCAJgEIABAAQAUAJAXADIALABQANAAAIgGIAJgGQAOgIAUgEIALACIADABIATAGQAGADAGABQAXAEATgNIAUgKIAPgIQAYgLATAIIAQALQACACAFAAIATgCIA0gCIAKAFIAGACIAIALQACACAFAAIABAAIAbgCQASgCAOABIAGABIAQAFIACABIAWACIAdgEQAhgHAdAMQALAEAQgBIBAgEQAfgDAggBIAAAAQAXgCASgHIAWAAIANAAIABAAIAUAGQAOACABADIABAEQAkgNAtAIIAIAGQABAGAGACQAGABALgBIAQgBIAUgCIAZgDIASAAQAlAAAiACIAdACQAjgBAiACIAeABIAXAEQAOADAOAAQAXABAWgHIAPAAIAUABIAVgBIAWAFQAPACASgBIAdABIAhACQAKABAGACQAMAEgGAGIgHAFIgKAAIhfAEIgwADIgEAAIjcgEIhCACIgkABIgbgGIgJAJQgFAFgOABIgSACIgbACIgnADIgVgBIgQgCIgEgBIhoAEIgkADIhOgEIgvgCIgCAAQgVACgQgGQgMgGgSADIhEAFIgIACQgTAKgWgGIgQgEIgCAAIgKABIgHgBQgSgJgTAGIgTAHIg2ABIgGAAIgYgGIgRACQgMAFgMACIgNAAIgWgCIgFgBQgXgGgUACIgMACIgGADIgZAHIgSAAIgOgDIgHgCIgMABQgWADgUAHIgDgDg");
	this.shape_83.setTransform(23.325,13.3066);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A3MACQADgEAFgEQAlgHAOACIAkADQANACAMABQAQACAOgCQAHAAAHgBQALgBAJgDIAVgDQAVgCAUgDQAQgBAQgCIAygCQAhgNAlAMIAIgBIADgBIARgKQAXgRAsAEQALABALADQAMADALAFQAIADAMAAIASgBQAIAAAHgBQAIgBAHgCQAEgBAFgBQAugEAjAQQAAAAAAgBQAIADAJAAQALABAJgFIABAAIANgCQALACAJAEQAAAAABABQAQAIAXgEQACgBACAAQAegFAeAHIAlAEIAfgCQAPgBAOgCQAfgEAfgBIA0gDQAIgDAIgFQACgBADgCQAPADAUADQANABAPAAIABAAQAEABAEgBIAMgBIAEABQAHAAAHAAQAZAEAZgBIAVACQAFAAAEAAIASgBQAVAAAWAFIARAAQALgBAKgDQAAABABgBQAUAKAXACQAGABAFgBQANAAAIgGQAFgDAFgCQAOgHAUgCQAGABAFABQACABABAAQAJAEAKADQAHACAGABQAXADAUgNQAKgDALgFIAPgHQAYgKAUAHIAQAKQADACAFgBIATgBQAbgBAagCQAFACAGACIAFACIAJAJQACACAFAAQABAAAAAAQAOgBAOgBQASgCAPAAQADABACABQAJACAIADQABABABAAIAWACIAegDQAigGAdALQALAEAQgBIBBgEQAggEAgABQABAAAAAAQAXgBASgIQALgBALAAIANABQABAAAAAAQAKAEALABQANACACACQABACABABQAkgNAuAIQAEADAEACQACAFAGACQAGABALgBIAQAAQALgBAKgBQAMgDAOgBQAJgBAJAAQAmgBAhAFIAdADQAkgDAjAFIA1AEQAOADAOAAQAYABAWgGIAQABQAKABAKAAQALAAAKAAQALADAMABQAQABARgBIAdABQASAAAQACQAKABAHABQAMAEgFAHQgDACgEACQgGAAgFABIhgAEQgZADgYACQgCAAgCABIjfgDQgjACghgCIgkABIgcgEIgKAHQgFAFgOABIgSABQgOABgNACIgpACIgmgDIgEgBIhpADQgTABgRACIgEAAIhMgDQgXgCgYgBIgCAAQgWACgQgFQgNgEgSACIhFAEIgIACQgUAJgWgGIgPgDQgBAAgBAAQgGAAgFABQgDAAgEgBQgSgHgTAFIgUAGIg3ABQgDAAgDAAQgMgDgMgCQgJAAgIACQgNAFgNACQgGABgGAAQgMgBgKgBQgDAAgDAAQgWgGgVABQgGABgGABQgDABgEABIgZAHIgSAAIgOgEQgEAAgDgBQgHAAgGgBQgWADgVAHQgBgBgCgCQgIgEgMAAQgHgBgGgBQgMgFgMgDQgIgBgKgBQgMAAgNADQgDAAgDABIg3gCIgVgCQgSgDgSACQgEgBgDgBQgGgBgFgBQAAAAgBAAIgSACQgWACgWgBIgHgBIg2ABIgPgCQgQgCgOABQgRgBgSgBQgCAAgBAAQgXgBgVAFIg9ACIgSgCQgBgBgCAAQgOgEgRgCIhPACIgfAGIhOAEQgNgEgQABIgZgBQgLgBgIgBIgLgDIg7AAQgdAJgmgBIjSgHIgNgBQgFgCgGgBQgTgGgVgFIhagFIgGgCQgGgEgLgCg");
	this.shape_84.setTransform(22.8364,13.8559);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhiA0QgIgEgMAAIgNgCQgMgFgMgDIgSgCQgMAAgNADIgGABIg3gCIgVgCQgSgDgSACIgHgCIgLgCIgBAAIgSACQgWACgWgBIgHgBIg2ABIgPgCQgQgCgOABIgjgCIgDAAQgXgBgVAFIg9ACIgSgCIgDgBQgOgEgRgCIhPACIgfAGIhOAEQgNgEgQABIgZgBIgTgCIgLgDIg7AAQgdAJgmgBIjSgHIgNgBIgLgDQgTgGgVgFIhagFIgGgCQgGgEgLgCIgBAAIAIgIQAlgHAOACIAkADIAZADQAQACAOgCIAOgBQALgBAJgDIAVgDQAVgCAUgDIAggDIAygCQAhgNAlAMIAIgBIADgBIARgKQAXgRAsAEQALABALADQAMADALAFQAIADAMAAIASgBIAPgBIAPgDIAJgCQAugEAjAQIAAgBQAIADAJAAQALABAJgFIABAAIANgCQALACAJAEIABABQAQAIAXgEIAEgBQAegFAeAHIAlAEIAfgCIAdgDQAfgEAfgBIA0gDQAIgDAIgFIAFgDIAjAGQANABAPAAIABAAIAIAAIAMgBIAEABIAOAAQAZAEAZgBIAVACIAJAAIASgBQAVAAAWAFIARAAQALgBAKgDIABAAQAUAKAXACIALAAQANAAAIgGIAKgFQAOgHAUgCIALACIADABQAJAEAKADIANADQAXADAUgNIAVgIIAPgHQAYgKAUAHIAQAKQADACAFgBIATgBQAbgBAagCIALAEIAFACIAJAJQACACAFAAIABAAIAcgCQASgCAPAAIAFACIARAFIACABIAWACIAegDQAigGAdALQALAEAQgBIBBgEQAggEAgABIABAAQAXgBASgIIAWgBIANABIABAAQAKAEALABQANACACACIACADQAkgNAuAIIAIAFQACAFAGACQAGABALgBIAQAAIAVgCIAagEIASgBQAmgBAhAFIAdADQAkgDAjAFIA1AEQAOADAOAAQAYABAWgGIAQABIAUABIAVAAQALADAMABQAQABARgBIAdABQASAAAQACQAKABAHABQAMAEgFAHIgHAEIgLABIhgAEIgxAFIgEABIjfgDQgjACghgCIgkABIgcgEIgKAHQgFAFgOABIgSABQgOABgNACIgpACIgmgDIgEgBIhpADIgkADIgEAAIhMgDQgXgCgYgBIgCAAQgWACgQgFQgNgEgSACIhFAEIgIACQgUAJgWgGIgPgDIgCAAIgLABIgHgBQgSgHgTAFIgUAGIg3ABIgGAAIgYgFIgRACQgNAFgNACIgMABIgWgCIgGAAQgWgGgVABIgMACIgHACIgZAHIgSAAIgOgEIgHgBIgNgBQgWADgVAHIgDgDg");
	this.shape_85.setTransform(22.8364,13.8559);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A3lADQABgEAFgEQAlgIAOACIAlACQANACAMABQARABAOgCQAHAAAHgBQALgBAKgCIAVgDQAVAAAVgDQAQgBARgCIAzgDQAhgLAmALIAIgBIAEgBIARgJQAZgPAsAEQALAAAKACQAOADALAFQAIADAMAAIATgBQAIAAAHAAQAIgCAFgCQAFgCAFgBQAvgFAjAQQABgBAAAAQAHABAJAAQAMABAJgFQAAAAABAAIANgCQALACAKADQAAABABAAQAQAIAYgDQABgBACAAQAfgEAfAGIAmAEIAfgBQAPgBAOgCQAfgGAgABIA1gDQAIgDAIgEQADgBACgCQAQACAUADQANABAPABIABAAQAFAAADgBIAMgCIAEAAQAHAAAHgBQAZAEAagBIAWACQAFAAADAAIASgDQAWgBAXAGIARABQALAAAJgBQABAAAAAAQAVAKAXABQAGAAAGgBQANAAAJgGQAEgCAGgDQAQgEASgCQAGACAFABQACABABAAQAJAFAKACQAHABAGABQAYACAUgMQALgCAKgEIAQgFQAYgJAVAGIARAHQADACAFgBIAUgBQAbAAAagDQAGACAFABIAGACIAKAIQACABAFAAQABAAAAAAQAPAAAOgCQASgCAPAAQADABADABQAIADAIACQABABACAAIAWACIAfgDQAhgEAfAKQAMAEAPgBIBCgEQAhgEAhABIAAAAQAYABASgJQALgBALgBIANABQABABAAAAQAKADALABQANACADABQABABABACQAlgOAuAHQAFADAEACQACAFAGABQAHACALgBIAQAAQALgBAKgCQANgDANgCQAKAAAJgBQAogBAgAHIASAEIALABQAlgFAiAGIAfABIAYADQAOACAPABQAYACAWgFIAQABQAKACALAAQALAAAKAAQALACAMABQAQABASgBIAeAAQARAAARACQAKABAHACQALADgDAGQgDACgEACQgGABgFABIhiAFQgZADgYADQgCABgCAAIjkgBQgjACghgDIglABIgdgEIgKAHQgGADgOACIgSABQgPAAgNACIg+ACIgRgDIgEgBIhsABQgTABgRADIhRgCQgYgDgYAAIgDAAQgVACgRgFQgNgDgSADIhGADIgIABQgUAHgWgEIgRgDQgBAAgBAAQgFAAgFABQgEAAgEAAQgSgHgTAFIgVAGIg3ABQgDgBgEAAQgMgDgNgCQgIABgJABQgNAFgMADQgHABgHAAQgLgBgKAAQgDAAgCABQgXgHgVABQgHABgGAAQgDABgEACIgaAGIgSgBIgOgDQgEgBgEgBQgGAAgGgBQgWADgWAGQgCgBgCgBQgIgEgNAAQgGAAgGgBQgMgEgNgEQgJgBgJgBQgMABgOACQgDABgDAAIg4gCIgUgDQgTgCgSACIgBAAQgDgBgEAAQgFgBgGgBQAAAAgBAAIgSACQgWADgWgDIgIgBIg3ABIgPgCQgQgCgPABQgRABgTgCQgBAAgBAAQgXgBgWAFIg+ACIgSgCQgCAAgBAAQgPgEgRgCIhQABIhvAJQgNgEgRABIgZgBQgLgBgIgCIgLgEIgLAAIgIABIgpAAQgeAIgmgCIjjgGQgGgBgGgCQgTgFgVgEIhcgFIgGgCQgHgDgLgCg");
	this.shape_86.setTransform(22.3571,14.405);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhkAyQgIgEgNAAIgMgBIgZgIIgSgCIgaADIgGABIg4gCIgUgDQgTgCgSACIgBAAIgHgBIgLgCIgBAAIgSACQgWADgWgDIgIgBIg3ABIgPgCQgQgCgPABQgRABgTgCIgCAAQgXgBgWAFIg+ACIgSgCIgDAAQgPgEgRgCIhQABIhvAJQgNgEgRABIgZgBQgLgBgIgCIgLgEIgLAAIgIABIgpAAQgeAIgmgCIjjgGIgMgDIgogJIhcgFIgGgCQgHgDgLgCIAAAAQABgEAFgEQAlgIAOACIAlACIAZADQARABAOgCIAOgBQALgBAKgCIAVgDQAVAAAVgDIAhgDIAzgDQAhgLAmALIAIgBIAEgBIARgJQAZgPAsAEQALAAAKACQAOADALAFQAIADAMAAIATgBIAPAAQAIgCAFgCIAKgDQAvgFAjAQIABgBQAHABAJAAQAMABAJgFIABAAIANgCQALACAKADIABABQAQAIAYgDIADgBQAfgEAfAGIAmAEIAfgBQAPgBAOgCQAfgGAgABIA1gDIAQgHIAFgDIAkAFIAcACIABAAIAIgBIAMgCIAEAAIAOgBQAZAEAagBIAWACIAIAAIASgDQAWgBAXAGIARABQALAAAJgBIABAAQAVAKAXABQAGAAAGgBQANAAAJgGIAKgFQAQgEASgCIALADIADABQAJAFAKACIANACQAYACAUgMIAVgGIAQgFQAYgJAVAGIARAHQADACAFgBIAUgBQAbAAAagDIALADIAGACIAKAIQACABAFAAIABAAIAdgCIAhgCIAGACIAQAFIADABIAWACIAfgDQAhgEAfAKQAMAEAPgBIBCgEQAhgEAhABIAAAAQAYABASgJIAWgCIANABIABABQAKADALABQANACADABIACADQAlgOAuAHIAJAFQACAFAGABQAHACALgBIAQAAQALgBAKgCIAagFIATgBQAogBAgAHIASAEIALABQAlgFAiAGIAfABIAYADIAdADQAYACAWgFIAQABIAVACIAVAAIAXADQAQABASgBIAeAAQARAAARACQAKABAHACQALADgDAGIgHAEIgLACIhiAFIgxAGIgEABIjkgBQgjACghgDIglABIgdgEIgKAHQgGADgOACIgSABQgPAAgNACIg+ACIgRgDIgEgBIhsABQgTABgRADIhRgCQgYgDgYAAIgDAAQgVACgRgFQgNgDgSADIhGADIgIABQgUAHgWgEIgRgDIgCAAIgKABIgIAAQgSgHgTAFIgVAGIg3ABIgHgBIgZgFIgRACIgZAIIgOABIgVgBIgFABQgXgHgVABIgNABIgHADIgaAGIgSgBIgOgDIgIgCIgMgBQgWADgWAGIgEgCg");
	this.shape_87.setTransform(22.3571,14.405);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A3+AEQgBgEAEgEQAmgIAOABIAmACQANABANABQARABAPgDQAHAAAHgBQALAAAKgCIAWgDQAVABAWgCQAQgBARgCIAugDIAGAAQAigKAnAKIAIgBIAEgBIASgHQAbgNArACQALABALACQANACAMAEQAJADALAAIATgBQAJABAGgBQAJgBAFgDQAFgCAEgCQAwgFAkAPQAAAAABgBQAGAAAKgBQAMABAJgFQABAAABAAIANgBQALABAKADQAAAAABAAQARAIAXgCQACAAACAAQAggEAfAGIAmAEIAggBQAQAAAOgDQAfgHAhACIAfAAIAXgCQAIgDAIgEQADgBADgCQAPACAVACQANACAPAAIABAAQAGABADgBIALgEIAEgBQAHAAAHgBQAaADAaAAIAWABQAFABADgBIASgEQAWgDAYAHIARADQALABAJAAQABAAABAAQAUAKAYAAQAGAAAGgBQANgBAJgFQAFgCAGgCQARgEARAAQAGACAGACQABAAABABQAJAFALABQAGACAHAAQAYABAVgLIAAAAQAKgBALgDIARgEQAYgJAWAFIARAHQADABAFgBIAVgBQAbAAAbgDQAGABAGABIAFABIAMAHQACABAEAAQABAAABAAQAPgBAOgBQATgCAPgBQADABACABQAJADAIADQABAAACABIAWACIAggCQAigDAfAIQAMAEAQgBIBDgDQAhgFAhADIABAAQAYABASgJQALgCALgBIAOABQAAABABAAQAKAEALAAQAMABAEABQABABACABQAlgOAvAGQAFADAFACQACAEAGABQAHABALAAIARAAQALgBAKgCQAMgDAPgDQAJgBAJAAQArgCAeAJIASAFIAMABQAlgGAjAIIA3AEQAPACAOAAQAZADAXgEIAQACQAKACALAAQALABAKgBQAMADAMAAQARAAARgBIAegBQATAAAQACQAKABAIACQAKAEgBAFQgEACgEACQgGABgEACIgHABIhdAEQgaAEgYAEQgCAAgCAAIgNABIjaABQglABghgEIglABIgegDIgKAGQgHADgOABIgSABQgPAAgNADIgqABIgogDIgEgBIhtgBQgTABgSAEIgEAAIhOgCQgYgDgZAAIgCAAQgVACgSgEQgOgCgRACIhIADIgIABQgVAGgWgEIgQgDQgBAAgBAAQgGAAgFABQgEAAgEAAQgSgFgUAEIgVAFIg4ACQgDgBgEAAQgNgDgMgBQgJAAgJABQgNAFgNADQgGABgHAAQgMAAgKABQgDAAgCABQgXgHgVAAQgHABgGAAQgEABgDACIgbAFIgSgBIgPgEQgDAAgEgBQgGgBgHAAQgWABgXAHQgCgBgCgBQgIgDgNABQgHgBgGgBQgNgDgMgEQgJgCgKgBQgMABgOADQgDAAgDABIg5gCIgVgDQgTgEgSAEIgBAAQgDgBgEAAQgGgBgFgBQAAAAgBAAIgSADQgXADgWgEIhAgBIgPgCQgRgCgPABQgRACgTgBQgBAAgCAAQgXgBgWAEIg/ADIgTgCQgBAAgCAAQgPgEgSgBIhRAAIggAEIgFAAIgVACIg3ACQgNgEgRAAIgZgBQgNgBgHgDIgLgEIgLAAIgIACIgpgBQggAHgmgCIjmgEQgGgBgGgBQgUgFgWgEIhdgEIgGgCQgHgDgLgCg");
	this.shape_88.setTransform(21.8503,14.9324);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AhlAwQgIgDgNABIgNgCIgZgHIgTgDQgMABgOADIgGABIg5gCIgVgDQgSgEgTAEIgBAAIgHgBIgLgCIgBAAIgSADQgWADgXgEIg/gBIgQgCQgRgCgPABQgRACgTgBIgDAAQgXgBgWAEIg/ADIgTgCIgCAAQgQgEgSgBIhRAAIggAEIgFAAIgUACIg4ACQgNgEgRAAIgZgBQgMgBgIgDIgLgEIgLAAIgIACIgpgBQggAHgmgCIjmgEIgMgCIgqgJIhdgEIgGgCQgHgDgLgCIgBAAQgBgEAEgEQAmgIAOABIAmACIAaACQARABAPgDIAOgBQALAAAKgCIAWgDQAWABAVgCIAhgDIAugDIAGAAQAigKAnAKIAIgBIAEgBIASgHQAbgNArACQALABALACQANACAMAEQAJADALAAIATgBIAQAAQAIgBAFgDIAJgEQAwgFAkAPIABgBIAQgBQAMABAKgFIABAAIANgBIAVAEIABAAQARAIAXgCIAEAAQAggEAfAGIAmAEIAggBQAQAAAOgDQAfgHAhACIAfAAIAXgCIARgHIAFgDIAkAEIAcACIACAAQAFABADgBIALgEIAEgBIAOgBQAaADAaAAIAWABIAIAAIASgEQAXgDAXAHIARADIAUABIACAAQAUAKAYAAIAMgBQANgBAJgFIALgEQARgEARAAIAMAEIADABQAIAFALABIANACQAYABAVgLIAAAAIAWgEIAQgEQAZgJAVAFIASAHQACABAFgBIAVgBQAbAAAbgDIAMACIAGABIALAHIAHABIABAAIAdgCIAigDIAFACIARAGIADABIAWACIAggCQAigDAfAIQAMAEAQgBIBDgDQAhgFAhADIABAAQAYABATgJIAVgDIAOABIABABQAKAEALAAIAQACIADACQAlgOAvAGIAKAFQACAEAGABQAHABALAAIARAAQALgBAKgCIAbgGIATgBQAqgCAeAJIASAFIAMABQAlgGAjAIIA3AEIAdACQAZADAXgEIARACQAJACALAAIAVAAQAMADAMAAIAjgBIAdgBQATAAAQACQALABAHACQAKAEgBAFIgIAEIgKADIgHABIhdAEIgyAIIgEAAIgNABIjaABQglABghgEIglABIgegDIgKAGQgHADgOABIgSABQgPAAgNADIgqABIgogDIgEgBIhsgBQgUABgRAEIgFAAIhOgCQgXgDgaAAIgCAAQgVACgSgEQgOgCgRACIhIADIgIABQgUAGgXgEIgQgDIgCAAIgLABIgIAAQgSgFgUAEIgUAFIg5ACIgGgBIgagEIgSABIgaAIIgNABIgWABIgEABQgYgHgVAAIgNABIgHADIgbAFIgSgBIgOgEIgIgBIgNgBQgVABgYAHIgEgCg");
	this.shape_89.setTransform(21.8503,14.9324);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A4XAGQgCgFADgEQAngIAPABIAmABQAOABAMAAQARABAQgDQAHAAAHgBQAMAAAKgCIAWgCQAWACAWgCQARAAARgDIAugDIAGAAQAkgIAnAIIAMgBIATgGQAdgMAqACQAMABALABQANACAMAEQAKACALABIATgBQAJABAHgBQAJgBAEgEQAFgCAEgCQAxgGAlAPQAAgBAAgBQAFgBAMgBQAMAAAJgEQABAAABAAIAOgCQALABAKADQAAAAABAAQARAIAYgCQACAAABAAQAhgCAgAFIAnAEIAggBQARAAANgDQAfgIAjADIAfABIAXgCQAIgEAJgDQADgBACgBQAQABAVACQAOACAPAAIABAAQAGAAADgBIALgFIADgBQAHgBAHgBQAbADAagBIAXACQAFAAADgBIASgFQAWgEAYAIIARAEQALACAKABQABAAABAAQAUALAZgBQAGAAAFgCQAOgBAJgGQAGgBAFgCQASgCARABQAGACAGACQABABABABQAJAFALABQAHABAHABQAYAAAVgLIABAAQAKgBALgBIARgDQAZgIAWAEIASAFQAEABAFgBIAUgCQAcABAcgEQAGABAFABIAGABIANAFQACABAEAAQABAAABAAQAPgBAOgBQAUgCAPgCQADABACABQAJAEAIADQACAAABAAIAXADIAggCQAjgCAgAIQAMADAQAAIAdABIAngEQAigGAhAEQABAAAAAAQAZACASgJQALgDALgBIAOACQAAAAABAAQAKAEALAAQAMABAFgBQABABACABQAmgPAwAGQAFACAFACQADAEAFABQAIABALAAIARAAQAMAAAJgDQANgEAOgCQAKgCAKAAQAsgDAdALIASAHIAMABQAmgIAjAKIA4ADQAPACAPABQAZADAXgCIARACQAKACALABQALAAAKAAQAMACAMAAQARAAASgCIAfgBQASgBARACQAKABAIADQAKAEAAAFQgEABgEACQgGABgEACIgHABIhfAFQgaAEgYAGQgCAAgCAAIjrADQgmACghgGIhEgCIgLAGQgIACgNABIgTACQgQgBgNADIhSgCIgEgBIgdgDIhSAAQgUACgSADIgTACIhAgDQgYgEgaABIgCAAQgVACgSgDQgPgCgRADIhRACQgVAFgXgDIgRgDQgBAAgBAAQgFABgGABQgDAAgEAAQgTgEgUAEIgVAEIg6ACQgDgBgDAAQgNgDgNgBQgJAAgJACQgNAEgOAEQgGABgHAAQgMAAgKACQgCAAgDABQgWgGgXgBQgGAAgHABQgDABgEABIgcAFIgFAAIgNgCIgPgEQgDgBgEgBQgGAAgHgBQgWABgYAHQgCgBgCgBQgJgBgNAAQgHAAgGgBQgNgDgNgFQgJgBgKgBQgMABgOADQgDAAgDABIg6gCIgVgEQgUgEgTAFIAAAAQgEgBgEAAQgFgBgGAAQAAAAgBAAIgSACQgXAEgXgFIgHgBIhJgDQgSgCgOACQgRADgUgCQgBAAgCAAQgXAAgXAEIgRABIhCAAQgBAAgCAAQgQgDgRgCIh4ACIgWADIg4ABQgOgDgQAAIgagCQgOgBgGgDIgLgFIgLAAIgIACIgqAAQghAFgmgCIjqgCQgGgBgGgBQgVgEgWgDIhfgFIgGgBQgIgDgKgBg");
	this.shape_90.setTransform(21.3479,15.4333);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgDAxIgNgCIgPgEIgHgCIgNgBQgWABgYAHIgEgCQgJgBgNAAIgNgBQgNgDgNgFIgTgCIgaAEIgGABIg6gCIgVgEQgUgEgTAFIAAAAIgIgBIgLgBIgBAAIgSACQgXAEgXgFIgHgBIhJgDQgSgCgOACQgRADgUgCIgDAAQgXAAgXAEIgRABIhCAAIgDAAQgQgDgRgCIh4ACIgWADIg4ABQgOgDgQAAIgagCQgOgBgGgDIgLgFIgLAAIgIACIgqAAQghAFgmgCIjqgCIgMgCIgrgHIhfgFIgGgBQgIgDgKgBIgCAAQgCgFADgEQAngIAPABIAmABIAaABQARABAQgDIAOgBQAMAAAKgCIAWgCQAWACAWgCQARAAARgDIAugDIAGAAQAkgIAnAIIAMgBIATgGQAdgMAqACIAXACIAZAGQAKACALABIATgBIAQAAQAJgBAEgEIAJgEQAxgGAlAPIAAgCIARgCQAMAAAJgEIACAAIAOgCQALABAKADIABAAQARAIAYgCIADAAQAhgCAgAFIAnAEIAggBQARAAANgDQAfgIAjADIAfABIAXgCIARgHIAFgCIAlADIAdACIABAAIAJgBIALgFIADgBIAOgCQAbADAagBIAXACQAFAAADgBIASgFQAWgEAYAIIARAEIAVADIACAAQAUALAZgBQAGAAAFgCQAOgBAJgGIALgDQASgCARABIAMAEIACACQAJAFALABIAOACQAYAAAVgLIABAAIAVgCIARgDQAZgIAWAEIASAFQAEABAFgBIAUgCQAcABAcgEIALACIAGABIANAFIAGABIACAAIAdgCIAjgEIAFACIARAHIADAAIAXADIAggCQAjgCAgAIQAMADAQAAIAdABIAngEQAigGAhAEIABAAQAZACASgJQALgDALgBIAOACIABAAQAKAEALAAIARAAIADACQAmgPAwAGIAKAEQADAEAFABIATABIARAAQAMAAAJgDQANgEAOgCIAUgCQAsgDAdALIASAHIAMABQAmgIAjAKIA4ADQAPACAPABQAZADAXgCIARACIAVADIAVAAQAMACAMAAIAjgCIAfgBQASgBARACQAKABAIADQAKAEAAAFIgIADIgKADIgHABIhfAFQgaAEgYAGIgEAAIjrADQgmACghgGIhEgCIgLAGQgIACgNABIgTACQgQgBgNADIhSgCIgEgBIgdgDIhSAAQgUACgSADIgTACIhAgDQgYgEgaABIgCAAQgVACgSgDQgPgCgRADIhRACQgVAFgXgDIgRgDIgCAAIgLACIgHAAQgTgEgUAEIgVAEIg6ACIgGgBIgagEIgSACIgbAIIgNABQgMAAgKACIgFABQgWgGgXgBIgNABIgHACIgcAFg");
	this.shape_91.setTransform(21.3479,15.4333);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A4vAKQgFgGADgEQAogIAPABIAnAAQAOABAMAAQASAAAPgDQAIgBAHAAQAMAAALgCIAWgBQAWADAXgBQARAAARgDIAwgEIAGAAQAlgGAnAHIAJgBIADAAIAUgFQAfgKApABQAMABAMAAQANACANADQAJADAMAAIATAAQAJABAHgBQAJgBAEgFQAEgCAFgDQAxgGAmAPQAAgCAAgBQAEgCAOgBQALgBAKgEQABAAABAAIAOgBQALABALACQAAAAABAAQASAIAXgBQACAAACAAQAggCAhAFIBJAEQARAAANgEQAggJAjAEIAgADIAXgDQAIgEAJgDQADgBADgBQAQABAVACQAPACAPAAIABAAQAFAAADgBIALgHIADgBQAIgBAHgCQAaACAbAAIAXACQAGAAADgBIASgHQAVgFAZAJIARAFQALADALACQAAAAABAAQAVALAZgBQAGgBAGgBQANgDAKgFQAGgBAGgCQASAAARACQAGADAFACQACABABABQAIAFAMABQAHABAHAAQAZgBAVgKIABAAQAKAAAMAAIARgCQAZgGAXACIATADQAEABAFAAIAVgDQAcABAcgEQAGABAGAAIAGAAIANAEQADABAEAAQABAAABAAQAPgBAPgBQATgCAQgCQADABACABQAJAEAJADQABAAACAAIAXADIAhgBQAjgBAgAHQANADAPAAIAeABIAogEQAigHAiAFQABAAAAAAQAaAEARgKQALgDAMgCIAOACQAAAAABABQAJAEANgBQAKAAAGgBQACAAACABQAmgPAyAGQAFABAFACQADADAGABQAIACALAAIARAAQAMAAAJgEQANgEAPgDQAKgBAKgBQAtgEAcAOIASAIIAMACQAogKAjALIA4ADQAQACAPABQAZADAYAAIARACQAKACALABQALABALAAQAMABANAAQARAAASgCIAfgCQATgCARACQAKABAIADQAKAFABAEQgEABgEACQgGACgFACIgGABIhhAGQgaAEgZAHQgCAAgCAAIjuAFQgoACgggHIhFgCIgMAFQgJACgMABIgTABQgRgBgNAEIhUgDIgEgBIgegEIhTgBQgVACgRAEIgTACIhCgCQgYgFgaABIgCAAQgWACgSgBQgPgCgRADIgMABIhHAAQgVAEgXgDIgRgCQgBAAgBAAQgGABgFABQgEAAgEABQgTgEgUAEIgWADIg6ACQgEAAgDgBQgNgCgNgCQgJABgJABQgOAEgOAFQgGABgHAAQgNAAgJADQgCAAgDACQgWgHgYgCQgGABgHAAQgDABgEABIgPAEIgTABIgcgGQgEgCgDgBQgHgBgGAAQgXAAgYAHQgCgBgCAAQgLgBgMAAQgHAAgGAAQgOgDgNgFQgJgBgKgBQgNACgNACQgEABgDAAIg7gBIgVgGQgUgEgTAGIgBAAQgEAAgDAAQgGgBgGAAQAAAAgBAAIgSACQgYAFgWgHIgIgBIhKgDQgSgDgPADQgQAEgVgCQgCAAgBAAQgYABgXACIhUADQgCAAgBgBQgQgCgSgCIh6AAIgWAEIg5AAQgPgDgQAAIgagCQgPgBgGgEIgKgGIgeADIgggBQgiAEgmgBIjugBQgGgBgHgBQgVgDgWgCIhhgFIgGgBQgIgCgKgBg");
	this.shape_92.setTransform(20.79,15.6607);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AA0ArIgNABIgHACIgPAEIgTABIgcgGIgHgDIgNgBQgXAAgYAHIgEgBIgXgBIgNAAQgOgDgNgFIgTgCIgaAEIgHABIg7gBIgVgGQgUgEgTAGIgBAAIgHAAIgMgBIgBAAIgSACQgYAFgWgHIgIgBIhKgDQgSgDgPADQgQAEgVgCIgDAAQgYABgXACIhUADIgDgBIgigEIh6AAIgWAEIg5AAQgPgDgQAAIgagCQgPgBgGgEIgKgGIgeADIgggBQgiAEgmgBIjugBIgNgCIgrgFIhhgFIgGgBIgSgDIgCAAQgFgGADgEQAogIAPABIAnAAIAaABQASAAAPgDIAPgBQAMAAALgCIAWgBQAWADAXgBQARAAARgDIAwgEIAGAAQAlgGAnAHIAJgBIADAAIAUgFQAfgKApABIAYABIAaAFQAJADAMAAIATAAIAQAAQAJgBAEgFIAJgFQAxgGAmAPIAAgDQAEgCAOgBQALgBAKgEIACAAIAOgBQALABALACIABAAQASAIAXgBIAEAAQAggCAhAFIBJAEQARAAANgEQAggJAjAEIAgADIAXgDIARgHIAGgCQAQABAVACIAeACIABAAQAFAAADgBIALgHIADgBIAPgDQAaACAbAAIAXACQAGAAADgBIASgHQAVgFAZAJIARAFIAWAFIABAAQAVALAZgBIAMgCQANgDAKgFIAMgDQASAAARACIALAFIADACQAIAFAMABIAOABQAZgBAVgKIABAAIAWAAIARgCQAZgGAXACIATADQAEABAFAAIAVgDQAcABAcgEIAMABIAGAAIANAEIAHABIACAAIAegCIAjgEIAFACQAJAEAJADIADAAIAXADIAhgBQAjgBAgAHQANADAPAAIAeABIAogEQAigHAiAFIABAAQAaAEARgKQALgDAMgCIAOACIABABQAJAEANgBIAQgBIAEABQAmgPAyAGIAKADQADADAGABQAIACALAAIARAAQAMAAAJgEQANgEAPgDIAUgCQAtgEAcAOIASAIIAMACQAogKAjALIA4ADIAfADQAZADAYAAIARACQAKACALABIAWABIAZABIAjgCIAfgCQATgCARACQAKABAIADQAKAFABAEIgIADIgLAEIgGABIhhAGQgaAEgZAHIgEAAIjuAFQgoACgggHIhFgCIgMAFQgJACgMABIgTABQgRgBgNAEIhUgDIgEgBIgegEIhTgBQgVACgRAEIgTACIhCgCQgYgFgaABIgCAAQgWACgSgBQgPgCgRADIgMABIhHAAQgVAEgXgDIgRgCIgCAAIgLACIgIABQgTgEgUAEIgWADIg6ACIgHgBIgagEIgSACIgcAJIgNABQgNAAgJADIgFACQgWgHgYgCg");
	this.shape_93.setTransform(20.79,15.6607);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A5IAOQgGgGACgEQApgIAPAAIAogBQAOABANgBQARAAAQgEQAIAAAHAAQAMAAAMgBIAWgBQAXAEAXgBQARABASgEIAwgEIAGAAQAmgEAoAGIANgBIAUgEQAhgIApAAQAMABAMAAQANACANACQAKACALABIAUAAQAKABAGgBQAKgBADgGQAEgCAFgDQAygHAmAPQAAgCABgBQADgDAOgCQAMgBAKgEQABAAABAAIAOgBQAMABAKABQABAAAAAAQATAHAXAAQACABACAAQAhgBAiAEIBKAEQARABANgEQAggKAkAFIAhADIAXgDQAIgDAJgDQAEgBADgBQAQAAAWACQAOACAPAAIABAAQAGABADgCIAKgJIAEgBQAHgCAHgCQAbACAbAAIAYACQAGAAACgBIASgJQAWgGAaAKIARAGQALAEAKADQABABABAAQAVALAZgCQAGgBAGgCQAOgDAKgFQAGgBAGgBQAUABAPAEQAHACAFADQABABACABQAIAFAMABQAHABAHAAQAagCAVgKQABAAAAAAQAKACAMAAIASgBQAZgFAYABIAUACQAEABAFgBIAVgCQAdAAAdgEQAGAAAGAAIAGAAIAOADQADAAAEAAQABAAABAAQAQgBAOgBQAUgCAQgDQADACACABQAJAEAJADQACAAABAAIA5ADQAkAAAhAGQANACAPABIAfACIAogFQAjgHAiAGQABAAAAAAQAaAEASgKQALgDAMgCIAOACQAAAAABAAQAJAFANgBQAKgBAHgCQACAAACAAQAngPAyAFQAFACAGABQAEACAFACQAJABAKAAIASAAQAMAAAJgDQANgFAQgDQAJgCALgBQAvgEAbAQIASAJIAMACQAogMAkAOIA5ACQAQACAPABQAaADAYABIARADQAKADAMABQALABALAAQAMABANgBQASgBARgCIAggCQAUgDARACQAKACAIADQAJAEADAFQgEABgEACQgHABgEADIgGACIhjAFQgbAGgYAHQgCAAgCAAIgOACIjkAFQgpACgggJIhHAAIgMADQgKACgMABIgTABQgRgBgNAEIhWgEIgEgBIgegEIhVgCQgVACgRAEIgEABIgQACIhCgDQgYgFgbABIgCAAQgWACgTAAQgPAAgRACIgNABIhHgBQgWADgXgDIgRgCQgBAAgBAAQgGABgGACQgEAAgDABQgUgCgUADIhSAEQgDAAgDAAQgOgDgNgBQgJAAgKACQgOAEgOAFQgGABgHAAQgNAAgJAEQgCABgDABQgWgGgYgDQgHAAgGABQgEABgEABIgPADIgTABIgdgHQgEgBgDgBQgHgCgGAAQgXgBgaAHQgCAAgCgBQgLABgMAAQgHAAgGAAQgPgDgNgFQgJgBgKgBQgNACgOADQgDAAgEAAIg7gBIgWgGQgUgFgUAHIAAAAQgEAAgEAAQgGAAgFgBQgBAAAAAAIgTADQgYAGgXgIIgIgCIhLgEQgTgDgOAEQgRAFgVgBQgCAAgBAAQgYAAgXACIhWADQgCAAgBAAQgRgCgSgCIh8gBIgWADIg6AAQgPgDgQAAIgbgDQgQgBgFgEIgLgHIgLABIgIACIgLABIgggBQgjADgmgCIjyABQgGAAgHgBQgWgCgWgDIhpgEQgIgCgKgBg");
	this.shape_94.setTransform(20.2153,15.922);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AA3AuIgNABIgIACIgPADIgTABIgdgHIgHgCIgNgCQgXgBgaAHIgEgBIgXABIgNAAQgPgDgNgFIgTgCIgbAFIgHAAIg7gBIgWgGQgUgFgUAHIAAAAIgIAAIgLgBIgBAAIgTADQgYAGgXgIIgIgCIhLgEQgTgDgOAEQgRAFgVgBIgDAAQgYAAgXACIhWADIgDAAIgjgEIh8gBIgWADIg6AAQgPgDgQAAIgbgDQgQgBgFgEIgLgHIgLABIgIACIgLABIgggBQgjADgmgCIjyABIgNgBIgsgFIhpgEIgSgDIgDAAQgGgGACgEQApgIAPAAIAogBIAbAAQARAAAQgEIAPAAIAYgBIAWgBQAXAEAXgBQARABASgEIAwgEIAGAAQAmgEAoAGIANgBIAUgEQAhgIApAAIAYABIAaAEQAKACALABIAUAAIAQAAQAKgBADgGIAJgFQAygHAmAPIABgDQADgDAOgCQAMgBAKgEIACAAIAOgBIAWACIABAAQATAHAXAAIAEABQAhgBAiAEIBKAEQARABANgEQAggKAkAFIAhADIAXgDIARgGIAHgCQAQAAAWACIAdACIABAAQAGABADgCIAKgJIAEgBIAOgEQAbACAbAAIAYACQAGAAACgBIASgJQAWgGAaAKIARAGIAVAHIACABQAVALAZgCIAMgDQAOgDAKgFIAMgCQAUABAPAEIAMAFIADACQAIAFAMABQAHABAHAAQAagCAVgKIABAAQAKACAMAAIASgBQAZgFAYABIAUACIAJAAIAVgCQAdAAAdgEIAMAAIAGAAIAOADIAHAAIACAAIAegCIAkgFIAFADQAJAEAJADIADAAIA5ADQAkAAAhAGIAcADIAfACIAogFQAjgHAiAGIABAAQAaAEASgKQALgDAMgCIAOACIABAAQAJAFANgBQAKgBAHgCIAEAAQAngPAyAFIALADIAJAEIATABIASAAQAMAAAJgDQANgFAQgDIAUgDQAvgEAbAQIASAJIAMACQAogMAkAOIA5ACIAfADQAaADAYABIARADQAKADAMABQALABALAAQAMABANgBIAjgDIAggCQAUgDARACQAKACAIADQAJAEADAFIgIADQgHABgEADIgGACIhjAFQgbAGgYAHIgEAAIgOACIjkAFQgpACgggJIhHAAIgMADQgKACgMABIgTABQgRgBgNAEIhWgEIgEgBIgegEIhVgCQgVACgRAEIgEABIgQACIhCgDQgYgFgbABIgCAAQgWACgTAAQgPAAgRACIgNABIhHgBQgWADgXgDIgRgCIgCAAIgMADIgHABQgUgCgUADIhSAEIgGAAIgbgEIgTACIgcAJIgNABQgNAAgJAEIgFACQgWgGgYgDg");
	this.shape_95.setTransform(20.2153,15.922);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A5fASQgJgGACgFQApgIAPAAIApgCQAOABANgBQATgBAQgEQAHAAAIAAQAMAAAMAAIAXgBQAXAGAXgBQASAAASgDIAxgEIAGAAQAngDApAFIANgBIAVgDQAjgGAoAAQAMAAAMAAQAOABANACQALACALABIAUAAQAKABAGAAQAKgCACgGQAFgDAEgDQAzgIAnAOQAAgBABgCQACgEAPgCQAMgBAKgEQACAAABAAIAOgBQAMAAALABQAAAAABAAQATAHAXABQACABACAAQAiAAAiAEIBLAEQASABANgFQAggLAlAGIAhAEIAYgCQAIgEAJgDQAEAAADgBQAQgBAWACQAPACAPABIABAAQAHAAACgCIAKgKIADgCQAIgCAHgDQAbACAcABIAYABQAGAAACgCIASgKQAWgIAbAMIARAHQALAFAKAFQABAAABAAQAVAMAagEQAGgBAHgCQANgDALgEQAGgBAGgBQAVACAPAFQAGADAGAEQABAAABABQAIAGANAAQAGABAIgBQAagDAWgJQAAAAABAAQAKADAMABIATABQAZgFAZAAIAUABQAEAAAFgBIAWgCQAdABAdgFQAHAAAGgBIAWABQADAAADAAQABAAABAAQARAAAOgCQAVgCAQgDQADABACACQAIAFAKACQABAAACABIA6ADQAkABAiAFQAOACAPABIAfACIApgEQAjgJAjAIIABAAQAbAFARgKQALgFAMgCIAOACQABABAAAAQAKAFANgCQAJgBAIgCQACgBADAAQAngQAzAFQAGABAGABQAEACAFABQAJABALABIARAAQANAAAJgEQANgFAQgEQAKgCAKgBQAygFAZASIASALIANACQApgNAjAPIA6ADQAQABAQABQAaAEAZACIARADQAKAEAMABQALABALAAQANABANgBQASgCASgCIAggEQAUgCARACQAKABAJAEQAIAEAFAEQgFABgEACQgGACgEADIgHACIhkAGQgbAGgZAIQgCAAgCAAIgOACIjoAHQgqACgggKIgPgBIg5ABIgNADQgKABgMABIgTABQgSgCgNAFIhXgEIgigHIhXgDQgVACgSAGIgTACIgxAAIgTgCQgYgFgbABIgDAAQgVACgUAAQgQABgRACIgMABIhJgBQgWABgXgCIgSgCQgBAAgBAAQgGABgGACQgEAAgEABQgTgBgVACIhTAFQgDgBgEAAQgOgDgNAAQgJAAgKABQgOAEgOAFQgHACgHAAQgNAAgIAFQgDABgCACQgXgHgYgDQgHAAgHAAQgEABgDABIgQADIgVAAIgbgHQgEgBgEgBQgGgCgHAAQgXgCgaAHQgDAAgCAAQgLABgNABQgHAAgGgBQgPgBgNgGQgKgBgKgCQgNADgOADQgDAAgEAAIg8gBIgWgGQgVgGgTAIIgBAAQgEABgEAAQgGAAgGgBQAAAAgBAAIgSAEQgZAFgXgJIgIgCIhMgEQgUgDgOAEQgRAGgWgBQgBAAgCAAQgYAAgYACIhXAEQgCAAgBAAQgRgCgTgBIh+gEIgWAEIg7gBQgPgDgRgBIgbgCQgQgBgFgFIgKgIIgMABIgJADIgKABIghgBQgkABgmgBIj2ADQgGgBgHAAQgWgCgXgCIhqgEQgJgBgKgBg");
	this.shape_96.setTransform(19.6478,16.1859);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AA6AxIgOAAIgHACIgQADIgVAAIgbgHIgIgCIgNgCQgXgCgaAHIgFAAIgYACQgHAAgGgBQgPgBgNgGIgUgDIgbAGIgHAAIg8gBIgWgGQgVgGgTAIIgBAAIgIABIgMgBIgBAAIgSAEQgZAFgXgJIgIgCIhMgEQgUgDgOAEQgRAGgWgBIgDAAQgYAAgYACIhXAEIgDAAIgkgDIh+gEIgWAEIg7gBQgPgDgRgBIgbgCQgQgBgFgFIgKgIIgMABIgJADIgKABIghgBQgkABgmgBIj2ADIgNgBIgtgEIhqgEIgTgCIgCAAQgJgGACgFQApgIAPAAIApgCQAOABANgBQATgBAQgEIAPAAIAYAAIAXgBQAXAGAXgBQASAAASgDIAxgEIAGAAQAngDApAFIANgBIAVgDQAjgGAoAAIAYAAIAbADIAWADIAUAAIAQABQAKgCACgGIAJgGQAzgIAnAOIABgDQACgEAPgCQAMgBAKgEIADAAIAOgBIAXABIABAAQATAHAXABIAEABQAiAAAiAEIBLAEQASABANgFQAggLAlAGIAhAEIAYgCQAIgEAJgDIAHgBQAQgBAWACIAeADIABAAQAHAAACgCIAKgKIADgCIAPgFQAbACAcABIAYABQAGAAACgCIASgKQAWgIAbAMIARAHIAVAKIACAAQAVAMAagEIANgDQANgDALgEIAMgCQAVACAPAFIAMAHIACABQAIAGANAAIAOAAQAagDAWgJIABAAQAKADAMABIATABQAZgFAZAAIAUABIAJgBIAWgCQAdABAdgFIANgBIAWABIAGAAIACAAQARAAAOgCIAlgFIAFADQAIAFAKACIADABIA6ADQAkABAiAFIAdADIAfACIApgEQAjgJAjAIIABAAQAbAFARgKQALgFAMgCIAOACIABABQAKAFANgCQAJgBAIgCIAFgBQAngQAzAFIAMACIAJADIAUACIARAAQANAAAJgEQANgFAQgEIAUgDQAygFAZASIASALIANACQApgNAjAPIA6ADIAgACIAzAGIARADQAKAEAMABIAWABIAaAAIAkgEIAggEQAUgCARACQAKABAJAEQAIAEAFAEIgJADIgKAFIgHACIhkAGQgbAGgZAIIgEAAIgOACIjoAHQgqACgggKIgPgBIg5ABIgNADIgWACIgTABQgSgCgNAFIhXgEIgigHIhXgDQgVACgSAGIgTACIgxAAIgTgCQgYgFgbABIgDAAIgpACQgQABgRACIgMABIhJgBQgWABgXgCIgSgCIgCAAIgMADIgIABQgTgBgVACIhTAFIgHgBQgOgDgNAAIgTABQgOAEgOAFIgOACQgNAAgIAFIgFADQgXgHgYgDg");
	this.shape_97.setTransform(19.6478,16.1859);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A54AWQgKgHABgEQAqgJAPgBIAqgBQAOAAAOgBQASgBAQgFQAIAAAIAAQAMAAANAAIAXAAQAXAHAYAAQASAAATgDIAxgFIAHAAQAoAAApACIAjgCQAlgEAngBQANAAAMAAQAOABAOABQAKACALAAIAVABQAKABAGAAQALgBABgIQAEgDAFgDQAzgIAoANQAAgBABgCQABgFARgDQALgCALgDQACAAABAAIAPgBQALAAALAAQABAAAAAAQAUAHAXACQACAAACABQAjABAiADIBNAFQASAAANgEQAggNAmAIIAiAFIAYgDQAIgEAKgCQADgBAEgBQAQgBAXADQAPABAPABIABAAQAHAAACgDIAJgLIAEgBQAHgDAHgDQAcABAcABIAYABQAHAAACgCIASgLQAWgKAbANIARAJQALAGALAFQABAAABABQAVAMAagFQAHgBAGgCQANgEAMgEQAGgBAHAAQAVADAOAHQAHADAFAEQABABACABQAHAFAOABQAHAAAHgBQAbgEAWgJQABAAAAAAQAKAEANADIATABQAagEAZgBIAVAAQAFgBAEAAIAXgDQAdABAegFQAGAAAHgCIAWAAQAEgBADAAQABAAABAAQARAAAPgBQAUgDARgEQADACACABQAIAGAKADQACAAACAAIA7AEQAkACAjAEQAOACAPABIAfADIAqgFQAkgJAjAJQABAAAAAAQAbAGASgLQAKgFANgDIAOADQABAAAAABQAKAFANgDQAJgBAJgDQACgBADgBQAogQA0AEQAFABAHABQAEABAFABQAKABAKABIASABQANAAAJgEQANgHARgDQAJgDALgBQAzgFAZAUIASAMIAMACQAqgOAkAQIA7ADQAQABAQABQAaAEAaAEIARADQAKAEANABQALACALAAQANABANgCQATgCARgCIAhgFQAVgDARACQAKACAJADQAIAFAGAEQgFABgEABQgHADgEADIgGACIhmAGQgcAHgYAJQgCAAgCABIgOABIjsAJQgrACgggLIgPgCIhIAEQgLABgLAAIgUABQgSgBgNAFIhZgFIgjgIIhXgDQgWACgSAGIgEABIgQACIhEgCQgZgGgbABIgDAAQgVACgVACQgQABgRACIgNABIhJgCQgXAAgXgCIgSgBQgBAAgBAAQgGABgGACQgEABgEAAQgUABgVABIhAAFIgUgBQgEAAgDgBQgPgCgNAAQgJAAgKABQgPADgOAGQgHACgHABQgOAAgHAFQgDACgCACQgXgHgZgEQgHAAgGAAQgEABgEABIgQADIgVgBIgcgIQgEgBgEgBQgHgCgGgBQgXgCgcAHQgCAAgCABQgNACgMABQgHAAgGgBQgQgBgNgGQgKgBgKgCQgNADgOADQgEAAgDAAIg+AAIgWgHQgVgHgUAJIgBAAQgEABgEABQgGgBgFAAQgBAAAAAAIgTAEQgZAGgXgLIgJgBIhNgFQgUgEgPAGQgQAGgXgBQgCAAgBAAQgYABgYABIhZAEQgCAAgBAAQgSgBgSgBIiAgGIgXAEIg8gCQgQgCgQgBIgcgCQgRgBgEgFIgLgKIgMACIgIADIgLABIghgBQglAAgmgCIj6AFQgGAAgHAAQgXgCgXgBIhsgEQgJgBgKAAg");
	this.shape_98.setTransform(19.0906,16.4449);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AA8A0IgNAAIgIACIgQADIgVgBIgcgIIgIgCIgNgDQgXgCgcAHIgEABQgNACgMABIgNgBQgQgBgNgGIgUgDIgbAGIgHAAIg+AAIgWgHQgVgHgUAJIgBAAIgIACIgLgBIgBAAIgTAEQgZAGgXgLIgJgBIhNgFQgUgEgPAGQgQAGgXgBIgDAAIgwACIhZAEIgDAAIgkgCIiAgGIgXAEIg8gCIgggDIgcgCQgRgBgEgFIgLgKIgMACIgIADIgLABIghgBIhLgCIj6AFIgNAAIgugDIhsgEIgTgBIgDAAQgKgHABgEQAqgJAPgBIAqgBIAcgBQASgBAQgFIAQAAIAZAAIAXAAQAXAHAYAAQASAAATgDIAxgFIAHAAQAoAAApACIAjgCQAlgEAngBIAZAAIAcACIAVACIAVABIAQABQALgBABgIIAJgGQAzgIAoANIABgDQABgFARgDQALgCALgDIADAAIAPgBIAWAAIABAAQAUAHAXACIAEABIBFAEIBNAFQASAAANgEQAggNAmAIIAiAFIAYgDIASgGIAHgCQAQgBAXADIAeACIABAAQAHAAACgDIAJgLIAEgBIAOgGIA4ACIAYABQAHAAACgCIASgLQAWgKAbANIARAJIAWALIACABQAVAMAagFIANgDIAZgIIANgBQAVADAOAHIAMAHIADACQAHAFAOABIAOgBQAbgEAWgJIABAAQAKAEANADIATABQAagEAZgBIAVAAIAJgBIAXgDQAdABAegFIANgCIAWAAIAHgBIACAAIAggBQAUgDARgEIAFADQAIAGAKADIAEAAIA7AEQAkACAjAEIAdADIAfADIAqgFQAkgJAjAJIABAAQAbAGASgLQAKgFANgDIAOADIABABQAKAFANgDQAJgBAJgDIAFgCQAogQA0AEIAMACIAJACIAUACIASABQANAAAJgEQANgHARgDQAJgDALgBQAzgFAZAUIASAMIAMACQAqgOAkAQIA7ADIAgACIA0AIIARADQAKAEANABQALACALAAQANABANgCIAkgEIAhgFQAVgDARACQAKACAJADQAIAFAGAEIgJACQgHADgEADIgGACIhmAGQgcAHgYAJIgEABIgOABIjsAJQgrACgggLIgPgCIhIAEIgWABIgUABQgSgBgNAFIhZgFIgjgIIhXgDQgWACgSAGIgEABIgQACIhEgCQgZgGgbABIgDAAIgqAEIghADIgNABIhJgCQgXAAgXgCIgSgBIgCAAIgMADIgIABIgpACIhAAFIgUgBIgHgBQgPgCgNAAIgTABQgPADgOAGIgOADQgOAAgHAFIgFAEQgXgHgZgEg");
	this.shape_99.setTransform(19.0906,16.4449);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A6QAZQgdgQAugDIATgCIA1gEQAjABAdgIIBBABQAoAOAtgIIAagEIAYgBIBjADIAggCIAZAAIAfgBIApgDIBIAFQAaADABgMIAJgHQA0gJApAOIABgGQAAgEASgDIAXgGIAqgBQAWAHAZADIA5AEIAsACIAvAEQATABAMgFQAhgOAnAJIAiAGIAYgDQAZgMAoAFIAgADQAHAAACgDIAJgNIASgJIAkAAIAtADQAHABACgDIASgNQAWgKAcANIAnAYQAcARAjgNIAagJIANAAQAgAHASAPQALAJAZgEQAbgFAXgJQALAGANADIAUADIAYgEIA3gGIAbgBQAkACAlgJIAfgDQArgBAcgIIAGAEQAIAGAKACIAWADIAaACIBoAKIAtADIAqgFQAlgKAkAKQAdAHARgLQAKgGANgDIAPADQAPAKAbgNQAzgWBGAKIAnADQANAAAJgEQAVgLAegEQA1gGAXAWIASANIANADQArgQAjASIAUACIBJACIAZAFIAtAJQAKAEANACQAYADAZgDIAngGIAfgEQAhgHAYALIAJAFIAHADQgOACgGAGIgHADIhNAGIgaAAQgeAIgbAKIgOACIjJAJIgnACQgsABgggMIgPgCIg/AEIgdACIgYAAQgTgCgNAFIghgBIgjgDIgWgBIgjgJIgMgBIg2gDIgXAAQgXACgRAGIgUAEIgTAAIggAAIgTgCQgZgHgcACIggADIg7AHIgSAAIgsgDIgWgCIgTgCIglAAQgLACgLADIgtAEIg9ADIgVgBQgwgJgkARIgPACQgSAAgHALQgXgHgagFIgOAAIgYAFIgVgBIgdgJQghgMgsAMQgmAKgfgOIgUgCIgbAGIhGAAIgWgIQgWgHgUAKIgJACIgMgBIgUAEQgZAHgXgMIgJgCIg1gDIgZgCQgVgEgPAGQgRAIgagBIhwAFIgeABIhOgDIgggCIgggDIgZgBIgXAEIgYABIgTgCIhOgHQgSgBgEgGIgHgHIgDgDIgNACIgIADIgLACIiVgGIgNABIgnADIgUAAIgcAAIiAAEIiigFg");
	this.shape_100.setTransform(18.4987,16.7203);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AA/A2IgOAAIgYAFIgVgBIgdgJQghgMgsAMQgmAKgfgOIgUgCIgbAGIhGAAIgWgIQgWgHgUAKIgJACIgMgBIgUAEQgZAHgXgMIgJgCIg1gDIgZgCQgVgEgPAGQgRAIgagBIhwAFIgeABIhOgDIgggCIgggDIgZgBIgXAEIgYABIgTgCIhOgHQgSgBgEgGIgHgHIgDgDIgNACIgIADIgLACIiVgGIgNABIgnADIgUAAIgcAAIiAAEIiigFIgRgBQgdgQAugDIATgCIA1gEQAjABAdgIIBBABQAoAOAtgIIAagEIAYgBIBjADIAggCIAZAAIAfgBIApgDIBIAFQAaADABgMIAJgHQA0gJApAOIABgGQAAgEASgDIAXgGIAqgBQAWAHAZADIA5AEIAsACIAvAEQATABAMgFQAhgOAnAJIAiAGIAYgDQAZgMAoAFIAgADQAHAAACgDIAJgNIASgJIAkAAIAtADQAHABACgDIASgNQAWgKAcANIAnAYQAcARAjgNIAagJIANAAQAgAHASAPQALAJAZgEQAbgFAXgJQALAGANADIAUADIAYgEIA3gGIAbgBQAkACAlgJIAfgDQArgBAcgIIAGAEQAIAGAKACIAWADIAaACIBoAKIAtADIAqgFQAlgKAkAKQAdAHARgLQAKgGANgDIAPADQAPAKAbgNQAzgWBGAKIAnADQANAAAJgEQAVgLAegEQA1gGAXAWIASANIANADQArgQAjASIAUACIBJACIAZAFIAtAJQAKAEANACQAYADAZgDIAngGIAfgEQAhgHAYALIAJAFIAHADQgOACgGAGIgHADIhNAGIgaAAQgeAIgbAKIgOACIjJAJIgnACQgsABgggMIgPgCIg/AEIgdACIgYAAQgTgCgNAFIghgBIgjgDIgWgBIgjgJIgMgBIg2gDIgXAAQgXACgRAGIgUAEIgTAAIggAAIgTgCQgZgHgcACIggADIg7AHIgSAAIgsgDIgWgCIgTgCIglAAQgLACgLADIgtAEIg9ADIgVgBQgwgJgkARIgPACQgSAAgHALQgXgHgagFg");
	this.shape_101.setTransform(18.4987,16.7203);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A61AAIAGgDIAJgFQAZgLAiAHIAfAEIAnAGQAaADAZgDQAMgCAKgEIAugJIAagFIBKgDIAUgBQAkgTArARIAOgDIASgNQAXgXA2AGQAeAEAWAMQAJAEANAAIAngDQBIgLA0AXQAaAMAQgKIAPgCQANADAKAGQASALAdgIQAlgKAlAKIArAFIAugCIBpgKIAbgCIAWgDQALgDAHgFIAGgEQAdAIAsABIAfADQAlAJAlgCIAbAAIA4AHIAZADIAUgCQANgDAMgGQAXAJAbAFQAaAEALgJQASgPAhgIIANABIAaAJQAkANAcgSIAogXQAcgOAWALIASANQADADAGgBIAugEIAlABIASAJIAJAMQACADAHAAIAhgCQApgFAZAMIAYADIAjgGQAngJAiAOQAMAFATgCIAwgDIAtgCIA5gEQAagEAXgHIAqACIAYAFQASADAAAFIABAFQApgNA1AJIAJAHQABAMAbgDIBJgFIApADIAgABIAZgBIAhADIBlgDIAXAAIAbAFQAuAIAogOIBDgBQAdAIAkgBIA1AEIATACQAvAEgeAPIgRABIikAFIiCgDIgcAAIgVAAIgogEIgMgBIiXAGIgMgCIgJgDIgMgCIgDADIgHAIQgFAFgRACIhQAGIgTACIgZAAIgXgFIgZABIggAEIghABIhPAEIgfgBIhygGQgaACgSgIQgOgHgWAEIgZACIg2AEIgJACQgYAMgZgHIgVgFIgMABIgJgBQgUgLgWAHIgXAIIhHABIgcgHIgUACQgfAOgmgKQgtgMgiANIgdAIIgVABIgZgFIgOABQgaAFgYAHQgGgLgTAAIgPgDQglgRgwAJIgVABIg/gDIgtgDQgLgEgLgBIgnAAIgTABIgWACIgtADIgSAAIg8gHIghgDQgcgBgaAGIgTACIggAAIgTAAIgUgDQgSgHgXgCIgXAAIg3AEIgMAAIgkAJIgXABIgiADIgiACQgOgGgTACIgYAAIgdgBIhAgFIgQACQggANgtgCIgngCIjMgIIgPgDQgbgKgfgIIgaAAIhOgGIgHgDQgHgGgNgCg");
	this.shape_102.setTransform(18.1094,17.133);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AiKA4IgPgDQglgRgwAJIgVABIg/gDIgtgDQgLgEgLgBIgnAAIgTABIgWACIgtADIgSAAIg8gHIghgDQgcgBgaAGIgTACIggAAIgTAAIgUgDQgSgHgXgCIgXAAIg3AEIgMAAIgkAJIgXABIgiADIgiACQgOgGgTACIgYAAIgdgBIhAgFIgQACQggANgtgCIgngCIjMgIIgPgDQgbgKgfgIIgaAAIhOgGIgHgDQgHgGgNgCIAGgDIAJgFQAZgLAiAHIAfAEIAnAGQAaADAZgDQAMgCAKgEIAugJIAagFIBKgDIAUgBQAkgTArARIAOgDIASgNQAXgXA2AGQAeAEAWAMQAJAEANAAIAngDQBIgLA0AXQAaAMAQgKIAPgCQANADAKAGQASALAdgIQAlgKAlAKIArAFIAugCIBpgKIAbgCIAWgDQALgDAHgFIAGgEQAdAIAsABIAfADQAlAJAlgCIAbAAIA4AHIAZADIAUgCQANgDAMgGQAXAJAbAFQAaAEALgJQASgPAhgIIANABIAaAJQAkANAcgSIAogXQAcgOAWALIASANQADADAGgBIAugEIAlABIASAJIAJAMQACADAHAAIAhgCQApgFAZAMIAYADIAjgGQAngJAiAOQAMAFATgCIAwgDIAtgCIA5gEQAagEAXgHIAqACIAYAFQASADAAAFIABAFQApgNA1AJIAJAHQABAMAbgDIBJgFIApADIAgABIAZgBIAhADIBlgDIAXAAIAbAFQAuAIAogOIBDgBQAdAIAkgBIA1AEIATACQAvAEgeAPIgRABIikAFIiCgDIgcAAIgVAAIgogEIgMgBIiXAGIgMgCIgJgDIgMgCIgDADIgHAIQgFAFgRACIhQAGIgTACIgZAAIgXgFIgZABIggAEIghABIhPAEIgfgBIhygGQgaACgSgIQgOgHgWAEIgZACIg2AEIgJACQgYAMgZgHIgVgFIgMABIgJgBQgUgLgWAHIgXAIIhHABIgcgHIgUACQgfAOgmgKQgtgMgiANIgdAIIgVABIgZgFIgOABQgaAFgYAHQgGgLgTAAg");
	this.shape_103.setTransform(18.1094,17.133);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A7DAaQgfgQAwgEIATgCIA3gEQAkABAegIIBDABQApAOAugIIAcgFIAYAAIBmADIAhgDIAaABIAggBIAqgDIBKAFQAbADABgMIAKgHQA1gJAqANIABgFQAAgFASgDIAYgGIArgBQAXAHAaAEIA6AEIAuACIAxADQATACANgFQAigOAoAJIAjAFIAZgCQAZgMAqAFIAhACQAHAAACgDIAJgNIASgIIAmgBIAvADQAGABADgDIASgNQAXgLAcAOIApAYQAcASAlgOIAagIIAOgBQAhAIASAPQALAJAagEQAcgFAYgJQALAGAOADIAUACIAZgDIA5gHIAbgBQAmADAlgJIAggEQAtAAAdgIIAGADQAIAGAKADIAXADIAbACIBrAJIAvADIArgFQAlgKAmAKQAdAIATgLQAKgGAOgDIAOACQAQAKAcgMQA0gXBJALIAnADQAOAAAJgFQAWgLAfgEQA2gHAYAYIASANIAOADQAsgRAlATIAUABIBLADIAaAFIAvAJQAKAEANACQAZADAagDIAogGIAggFQAigGAZALIAJAFIAHADQgOACgHAGIgHADIhPAGIgaABQggAIgcAKIgOACIjPAJIgoACQguABghgNIgQgBIhAAEIgeABIgZAAQgTgCgOAGIgigBIgjgDIgXgCIglgIIgMgBIg4gEIgYAAQgWACgTAHIgUAEIgTAAIghAAIgUgDQgagGgcABIghADIg+AHIgSAAIgtgCIgXgDIgUgBIgmAAQgMABgLAEIgtAEIhAADIgWgBQgxgKglASIgPACQgTAAgHAMQgYgIgagFIgPAAIgZAFIgWgBIgdgJQgigNguAMQgnALgfgOIgVgCIgcAGIhIgBIgXgIQgWgHgVALIgJACIgNgBIgUAEQgaAHgYgMIgJgCIg3gEIgagCQgWgDgOAGQgTAIgagBIh0AFIgeABIhRgEIghgBIghgEIgZAAIgYAEIgZABIgTgCIhRgHQgSgBgFgGIgHgHIgDgDIgNABIgJADIgLACIiagGIgMABIgpAEIgVAAIgcAAIiEADIingFg");
	this.shape_104.setTransform(17.4537,17.483);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("ABBA3IgPAAIgZAFIgWgBIgdgJQgigNguAMQgnALgfgOIgVgCIgcAGIhIgBIgXgIQgWgHgVALIgJACIgNgBIgUAEQgaAHgYgMIgJgCIg3gEIgagCQgWgDgOAGQgTAIgagBIh0AFIgeABIhRgEIghgBIghgEIgZAAIgYAEIgZABIgTgCIhRgHQgSgBgFgGIgHgHIgDgDIgNABIgJADIgLACIiagGIgMABIgpAEIgVAAIgcAAIiEADIingFIgRAAQgfgQAwgEIATgCIA3gEQAkABAegIIBDABQApAOAugIIAcgFIAYAAIBmADIAhgDIAaABIAggBIAqgDIBKAFQAbADABgMIAKgHQA1gJAqANIABgFQAAgFASgDIAYgGIArgBQAXAHAaAEIA6AEIAuACIAxADQATACANgFQAigOAoAJIAjAFIAZgCQAZgMAqAFIAhACQAHAAACgDIAJgNIASgIIAmgBIAvADQAGABADgDIASgNQAXgLAcAOIApAYQAcASAlgOIAagIIAOgBQAhAIASAPQALAJAagEQAcgFAYgJQALAGAOADIAUACIAZgDIA5gHIAbgBQAmADAlgJIAggEQAtAAAdgIIAGADQAIAGAKADIAXADIAbACIBrAJIAvADIArgFQAlgKAmAKQAdAIATgLQAKgGAOgDIAOACQAQAKAcgMQA0gXBJALIAnADQAOAAAJgFQAWgLAfgEQA2gHAYAYIASANIAOADQAsgRAlATIAUABIBLADIAaAFIAvAJQAKAEANACQAZADAagDIAogGIAggFQAigGAZALIAJAFIAHADQgOACgHAGIgHADIhPAGIgaABQggAIgcAKIgOACIjPAJIgoACQguABghgNIgQgBIhAAEIgeABIgZAAQgTgCgOAGIgigBIgjgDIgXgCIglgIIgMgBIg4gEIgYAAQgWACgTAHIgUAEIgTAAIghAAIgUgDQgagGgcABIghADIg+AHIgSAAIgtgCIgXgDIgUgBIgmAAQgMABgLAEIgtAEIhAADIgWgBQgxgKglASIgPACQgTAAgHAMQgYgIgagFg");
	this.shape_105.setTransform(17.4537,17.483);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A7eAUQgJgHABgEQADgHAbgCQAOAAAOAAIAvgCQAwgBATgFQAGAAAHgBIAXgBQAPAAAQAAQAJADAJABQAOADAOAAQAVABAVgEIAcgEIBuABQAGAAAGAAIAXgDQAIgBAIgCQANAAAOAAQASgBATgBQATAAATgBQAKABAKABQAKACAMABIAgABQAFABADgBQATABADgJQAFgDAFgDQA0gIAqANQADgBAAgCQACgDARgDQAJgCAIgCIAHgCIAIAAQAOAAAMAAQAFABAFAAQASAFAUACQAGABAFAAQAhABAgADIBaAFQATABANgEQAkgNAoAHIAjAFIAagDQAHgEAKgCQAVgEAdAEQAMABANAAIAJABQAHAAADgCIAIgJQABgBABgBQAJgDAJgEQAbACAaAAIAhABQAGABADgDIATgKQAWgJAaAKQACABACABIAOAGQALAFAKAEQAEACAEACQAUAMAXgCQALgBAMgEQAIgCAIgDQAFgCAFgCQAHgBAHAAQAQACAMAEQAHADAGADQAGADAFAEQAGAEAIABQAKACAOgBQAXgEAUgHQAFgCAEgCQALAEAOACIAMAAQAEAAAFAAQAWgDAVAAIAWAAQAEAAAEAAIAlgEQAYABAZgCQAKgBAKgBQADAAADAAIAJAAQADAAAEgBIAQgBQAJAAAJgBQAigCAXgEQADACADABQADACACABQAGADAIACIAuADQAnABAmAFIBTAGIAsgFQAegHAfAEQAHABAIABQAUAFAPgEQAHgCAGgDQALgFAOgCIAPACQAGAEAJABQAKABAKgDQACgBADgBQABAAACgBQAogQAzADQAGABAGABQAKACANABQAEABAEAAIAgABQAOAAAJgEQAJgEAKgCQAQgFATgCQAXgCASACQAYADAPAMIATALIAOADQAtgPAlAQIA1ADQAWACAWAAQAWAEAWACIAeAFQALADANACQAGAAAHABQASACAUgCQAOgCAPgCIAsgFQAQgCAOAAQASACAMAGQAHAEAEAEIABAAQgOACgHAGIgHACIhrAGQgZAFgXAHQgHACgGACIkKAKQgtACgigLIgRgCIg0ACIgNACQgLABgNABIgfABQgTgBgPAFIhdgFIglgHIhdgDQgUABgRAFQgCAAgDABIgVAEIg1gBIgTgCQgYgFgaAAQgDAAgDAAQgUACgTABIg5AFIg+gCIgJAAQgbABgagCIgWgCQgGABgGABQgEABgFABQgBAAAAABQgVgBgWACIhEAFIgWgBQgDAAgDgBQgQgCgOgBQgLAAgKACQgQADgPAHQgHABgIAAQgOAAgJAFQgCACgCADQgZgIgagDQgHAAgIgBQgFACgGABIgOADIgWAAIgegIQgFgCgGgBQgHgCgIAAQgYgBgcAGQgBAAgBABQgOABgOABQgHAAgHgBQgPgCgPgGQgKgBgKgBQgPADgOADQgFAAgEAAIhAgBIgYgHQgWgGgVAJIgCAAIgIABIgMgBIgDAAIgSAEQgaAGgZgKIgJgCIhSgFQgVgDgQAFQgTAHgagCIiWAGQgUgBgVgCIiEgEIgYAEIhFgCQgRgCgRgBIgYgCQgRgBgGgFIgLgJIgNABIgJADIgMABIgngCQgmABgogBIkKAEQgFgBgFAAQgZgBgagCIhzgEQgKgCgLAAg");
	this.shape_106.setTransform(16.895,18.1047);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("ABAA0IgPgBIgLADIgOADIgWAAIgegIIgLgDIgPgCQgYgBgcAGIgCABIgcACIgOgBQgPgCgPgGIgUgCIgdAGIgJAAIhAgBIgYgHQgWgGgVAJIgCAAIgIABIgMgBIgDAAIgSAEQgaAGgZgKIgJgCIhSgFQgVgDgQAFQgTAHgagCIiWAGIgpgDIiEgEIgYAEIhFgCQgRgCgRgBIgYgCQgRgBgGgFIgLgJIgNABIgJADIgMABIgngCQgmABgogBIkKAEIgKgBIgzgDIhzgEIgVgCIAAAAQgJgHABgEQADgHAbgCIAcAAIAvgCQAwgBATgFIANgBIAXgBIAfAAQAJADAJABQAOADAOAAQAVABAVgEIAcgEIBuABIAMAAIAXgDIAQgDIAbAAIAlgCIAmgBIAUACIAWADIAgABIAIAAQATABADgJIAKgGQA0gIAqANQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQACgDARgDIARgEIAHgCIAIAAIAaAAIAKABQASAFAUACIALABQAhABAgADIBaAFQATABANgEQAkgNAoAHIAjAFIAagDQAHgEAKgCQAVgEAdAEIAZABIAJABQAHAAADgCIAIgJIACgCIASgHQAbACAaAAIAhABQAGABADgDIATgKQAWgJAaAKIAEACIAOAGIAVAJIAIAEQAUAMAXgCQALgBAMgEQAIgCAIgDIAKgEIAOgBQAQACAMAEIANAGIALAHQAGAEAIABQAKACAOgBQAXgEAUgHIAJgEQALAEAOACIAMAAIAJAAQAWgDAVAAIAWAAIAIAAIAlgEQAYABAZgCIAUgCIAGAAIAJAAIAHgBIAQgBIASgBQAigCAXgEIAGADIAFADQAGADAIACIAuADQAnABAmAFIBTAGIAsgFQAegHAfAEIAPACQAUAFAPgEIANgFQALgFAOgCIAPACQAGAEAJABQAKABAKgDIAFgCIADgBQAogQAzADIAMACQAKACANABIAIABIAgABQAOAAAJgEQAJgEAKgCQAQgFATgCQAXgCASACQAYADAPAMIATALIAOADQAtgPAlAQIA1ADIAsACIAsAGIAeAFQALADANACIANABQASACAUgCIAdgEIAsgFQAQgCAOAAQASACAMAGQAHAEAEAEIABAAQgOACgHAGIgHACIhrAGQgZAFgXAHIgNAEIkKAKQgtACgigLIgRgCIg0ACIgNACIgYACIgfABQgTgBgPAFIhdgFIglgHIhdgDQgUABgRAFIgFABIgVAEIg1gBIgTgCQgYgFgaAAIgGAAIgnADIg5AFIg+gCIgJAAQgbABgagCIgWgCIgMACIgJACIgBABQgVgBgWACIhEAFIgWgBIgGgBQgQgCgOgBQgLAAgKACQgQADgPAHIgPABQgOAAgJAFIgEAFQgZgIgagDg");
	this.shape_107.setTransform(16.895,18.1047);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A76AOQgGgGACgFQAFgFAZgCQAPgBAPAAIAvgBQAwABATgFQAHAAAHAAIAXgCQAQgBAQgBQAIADAKABQANACAOgBQAWABAWgEIAcgDIBvAAQAGABAHgCIAGAAIAQgEQAIgCAIgCQANgBAOgBQASgBAVAAQATAAASABQAKABAKACQALACALAAIAhABQAFAAAEAAQASABAEgIQAFgDAFgDQA1gHAqAPQADgBACgCQADgCAQgCQAJgCAIgCIAHgCIAIAAQAOAAAMACQAFAAAFABQASAFAVABQAGAAAGABQAhgBAgAEIBbAEQATABAOgEQAkgLApAFIAkADIAQgBIAJgCQAIgEAKgCQAVgCAeADQAMABANAAIAJABQAHAAADgCIAJgGQABgBACgBQAJgCAKgDQAaACAbAAIAhABQAHABADgCIATgJQAXgGAaAJQACAAACABIAPAFQALADALADQAEACAEACQAUALAYgBQALAAALgEQAJgCAIgDQAFgDAFgCQAHgBAHgBQAQABANACQAHADAGACQAGADAGAEQAGAEAHABQAMADAOgBQAXgDAUgIQAEgCAFgCQALACAOAAIALgBQAFAAAEAAQAXgEAVABIAWADQAEABAFgBIAlgDQAYABAZgDQAKAAAKAAQADABADAAIAIABQAEABAEAAIARgCQAJAAAIgBQAjgCAYgCQADABACACQADABACABQAHADAIACIAKABIAkAAQAoAAAnAGIBUAGIAsgFQAfgGAeADQAIAAAIABQAUADAQgEQAHgBAGgCQALgFAOgCIAPADQAHADAIABQAMABAIgBQADAAACAAQABgBACAAQApgQA0AEQAGABAGABQAIAEAOABQAEAAAFABIAgAAQAOAAAKgDQAJgEAJgCQARgEATgBQAXgCATADQAYACAQAKIAUAJIAOACQAtgMAnANIA1ADQAXADAWAAQAXACAVABIAfAEQAMADAMABQAHABAHAAQASADAVgCQAOgBAPgCIAtgDQAQgCAOABQATABALAGQAHAEABAFIAAAAQgNACgIAEIgIADIhsAFQgZAFgYAFQgHACgHABIgPACIj+AGQgtABgkgIIhFgBIgNADQgKADgOAAIggACQgTgBgPAFIhfgFIglgGIhfgBQgTABgSAEQgDABgCAAIgVADIg2gBIgUgCQgZgFgZABQgDAAgDAAQgVABgTAAIiCADQgaADgcgDIgVgCIAAAAQgGABgHABQgEABgEAAQgBAAgBABQgVgCgWADIhGAFIgWgBQgDAAgDAAQgQgDgOgBQgLAAgKACQgQAEgQAFQgHABgIABQgOgBgJAEQgDABgDACQgZgHgagDQgHABgHAAQgGABgGABIgOAEIgWAAIgfgGQgFgCgGgCQgHgBgIAAQgZAAgcAGQgBABgBAAQgMgBgPAAQgIABgHgBQgPgDgPgFQgKgCgLAAQgOACgQADQgEAAgEAAIhBgBIgYgGQgXgGgVAIIgKAAIgNgBIgVADQgbAFgZgIIgJgBIhSgEQgWgDgQAEQgUAFgagCIiYAGQgUgDgWgBIiFgBIgzAEIgsgCQgQgCgTgBIgYgCQgQgBgIgEIgMgIIgMABIgKACIgMABIgngBQgmADgqgBIkOABQgFgBgEAAQgagDgbgDIh0gFQgJgCgLgBg");
	this.shape_108.setTransform(16.3632,18.7259);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AA+AwIgOABIgMACIgOAEIgWAAIgfgGIgLgEIgPgBQgZAAgcAGIgCABIgbgBQgIABgHgBQgPgDgPgFIgVgCIgeAFIgIAAIhBgBIgYgGQgXgGgVAIIgKAAIgNgBIgVADQgbAFgZgIIgJgBIhSgEQgWgDgQAEQgUAFgagCIiYAGQgUgDgWgBIiFgBIgzAEIgsgCQgQgCgTgBIgYgCQgQgBgIgEIgMgIIgMABIgKACIgMABIgngBQgmADgqgBIkOABIgJgBIg1gGIh0gFIgUgDIgBAAQgGgGACgFQAFgFAZgCIAegBIAvgBQAwABATgFIAOAAIAXgCIAggCQAIADAKABQANACAOgBQAWABAWgEIAcgDIBvAAQAGABAHgCIAGAAIAQgEIAQgEIAbgCQASgBAVAAIAlABIAUADQALACALAAIAhABIAJAAQASABAEgIIAKgGQA1gHAqAPQADgBACgCQADgCAQgCIARgEIAHgCIAIAAIAaACIAKABQASAFAVABIAMABQAhgBAgAEIBbAEQATABAOgEQAkgLApAFIAkADIAQgBIAJgCQAIgEAKgCQAVgCAeADIAZABIAJABQAHAAADgCIAJgGIADgCIATgFQAaACAbAAIAhABQAHABADgCIATgJQAXgGAaAJIAEABIAPAFIAWAGIAIAEQAUALAYgBQALAAALgEIARgFIAKgFIAOgCQAQABANACIANAFIAMAHQAGAEAHABQAMADAOgBQAXgDAUgIIAJgEQALACAOAAIALgBIAJAAQAXgEAVABIAWADQAEABAFgBIAlgDQAYABAZgDIAUAAIAGABIAIABIAIABIARgCIARgBIA7gEIAFADIAFACQAHADAIACIAKABIAkAAQAoAAAnAGIBUAGIAsgFQAfgGAeADIAQABQAUADAQgEQAHgBAGgCQALgFAOgCIAPADQAHADAIABQAMABAIgBIAFAAIADgBQApgQA0AEIAMACQAIAEAOABIAJABIAgAAQAOAAAKgDIASgGQARgEATgBQAXgCATADQAYACAQAKIAUAJIAOACQAtgMAnANIA1ADQAXADAWAAQAXACAVABIAfAEQAMADAMABIAOABQASADAVgCIAdgDIAtgDQAQgCAOABQATABALAGQAHAEABAFIAAAAQgNACgIAEIgIADIhsAFIgxAKIgOADIgPACIj+AGQgtABgkgIIhFgBIgNADQgKADgOAAIggACQgTgBgPAFIhfgFIglgGIhfgBQgTABgSAEIgFABIgVADIg2gBIgUgCQgZgFgZABIgGAAQgVABgTAAIiCADQgaADgcgDIgVgCIAAAAIgNACIgIABIgCABQgVgCgWADIhGAFIgWgBIgGAAQgQgDgOgBIgVACQgQAEgQAFIgPACQgOgBgJAEIgGADQgZgHgagDg");
	this.shape_109.setTransform(16.3632,18.7259);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A8WAIQgDgGAEgDQAHgHAYgBQAOgBAQABIAvAAQAxACAUgEQAGAAAHgBIAYgCQAPgCARgBQAIACAKAAQAOACAOgCQAVABAWgDIAdgDIBxgBQAFABAIgCIAGgBIAQgFQAHgDAJgDQANgCAOAAQASgCAVAAQAUABASACQAKABAKADQAKACANABIAhAAQAFAAAEAAQARAAAGgHQAFgCAGgCQA1gGAqAPQAEAAABgBQAGgBAOgCQAJgBAIgDIAIgCIAIAAQAOABAMACQAFABAFABQASAFAWAAQAFAAAGAAQAigCAhAFIBcAEQATAAAOgEQAmgJApADIAkACIARgBIAJgCQAIgEAJgDQAWgBAeADQAMABANABIAKABQAGAAAEgCIAKgFQABAAACgBQAKgBAJgCQAbACAcAAIAhACQAGAAAEgBIAUgHQAYgEAZAHQACABACAAIAQAEQAMACALAAQAEACAEACQAVALAYAAQAMAAALgDQAJgCAHgEQAFgCAFgDQAHgBAHgCQAQAAAOABQAHACAHACQAGADAGADQAGAEAIABQAMADANAAQAYgCAUgJQAEgCAFgCQALAAAOgBIALgCQAFgBAEAAQAXgFAWADIAVAEQAEACAFgBIAmgDQAZABAZgCQAKABAKAAQADABADABIAHADQAEABAFAAIAQgCQAJAAAJgBQAjgCAYgBQADACADABQADABACACQAHACAIACIALABIAkgBQApgCAmAIIBWAEIAtgEQAfgGAfACQAIAAAIABQATABARgDQAHgBAGgCQAMgEAOgBIAPACQAHADAIACQAOABAGAAQACAAACABQACgBACAAQApgPA1AFQAGACAGABQAGAGAQAAQAEAAAFAAIAgAAQAOAAAKgDQAKgDAKgCQARgCATgBQAWgBAUACQAYACASAHIAUAIIAPACQAtgKAoAKIA2AEQAXADAXgBQAXACAWgBIAfADQAMACANABQAGABAHAAQATADAVgBQAOAAAPgCIAugCQAQgBAPABQAUABAKAGQAHAFgDAFQgNACgJADIgIACIhuAFQgZAEgZAFQgHABgHABIkRAFQgsABgmgGIgvgBIgKgBIgNAAIgNAFQgIADgQABIggABQgTAAgQAEIiGgIIhgAAQgTABgSADQgDABgDAAIgVACIhLgDQgZgEgaAAQgDAAgDAAQgWACgTgCIh6ADIgJABQgbAFgbgEIgWgDIAAAAQgGABgHABQgEAAgFAAQgBAAAAABQgWgEgWAEIgZAEIgtACIgXgBQgDAAgDAAQgQgDgPgCQgKABgLABQgQAFgQAFQgIAAgHABQgOgBgLACQgDABgCACQgagHgagCQgHABgIAAQgFABgGACIgOADIgTACIgDAAIgSgCIgPgEQgFgCgGgBQgHgBgIAAQgaABgbAHQgBAAgBAAQgMgDgQAAQgHAAgHgBQgQgDgPgFQgKgCgLAAQgPABgPADQgFAAgEABIhCgCIgZgFQgWgEgWAFIgKAAIgNgBIgCAAIgUACQgaAFgagHIgJgBIhGgBIgOgBQgVgDgRADQgVADgZgCIgBAAIiEAHIgWgBQgUgEgWgBIhggCIhbAIIgsgBQgQgEgTAAIgZgBQgQgBgJgEIgMgGIgNAAIgKACIg0AAQgmAFgrgBIkSgCQgFgBgEgBQgagEgbgDIhvgFIgHgBQgJgDgLgBg");
	this.shape_110.setTransform(15.8031,19.3406);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AA9AtIgPABIgLADIgOADIgTACIgDAAIgSgCIgPgEIgLgDIgPgBQgaABgbAHIgCAAQgMgDgQAAIgOgBQgQgDgPgFIgVgCIgeAEIgJABIhCgCIgZgFQgWgEgWAFIgKAAIgNgBIgCAAIgUACQgaAFgagHIgJgBIhGgBIgOgBQgVgDgRADQgVADgZgCIgBAAIiEAHIgWgBQgUgEgWgBIhggCIhbAIIgsgBQgQgEgTAAIgZgBQgQgBgJgEIgMgGIgNAAIgKACIg0AAQgmAFgrgBIkSgCIgJgCIg1gHIhvgFIgHgBQgJgDgLgBIgCgBQgDgGAEgDQAHgHAYgBIAeAAIAvAAQAxACAUgEIANgBIAYgCIAggDQAIACAKAAQAOACAOgCQAVABAWgDIAdgDIBxgBQAFABAIgCIAGgBIAQgFIAQgGQANgCAOAAQASgCAVAAQAUABASACIAUAEQAKACANABIAhAAIAJAAQARAAAGgHIALgEQA1gGAqAPQAEAAABgBIAUgDQAJgBAIgDIAIgCIAIAAQAOABAMACIAKACQASAFAWAAIALAAQAigCAhAFIBcAEQATAAAOgEQAmgJApADIAkACIARgBIAJgCIARgHQAWgBAeADIAZACIAKABQAGAAAEgCIAKgFIADgBIATgDQAbACAcAAIAhACQAGAAAEgBIAUgHQAYgEAZAHIAEABIAQAEIAXACIAIAEQAVALAYAAQAMAAALgDQAJgCAHgEIAKgFIAOgDQAQAAAOABIAOAEIAMAGQAGAEAIABQAMADANAAQAYgCAUgJIAJgEQALAAAOgBIALgCIAJgBQAXgFAWADIAVAEQAEACAFgBIAmgDQAZABAZgCIAUABIAGACIAHADIAJABIAQgCIASgBIA7gDIAGADIAFADIAPAEIALABIAkgBQApgCAmAIIBWAEIAtgEQAfgGAfACIAQABQATABARgDIANgDQAMgEAOgBIAPACQAHADAIACQAOABAGAAIAEABIAEgBQApgPA1AFIAMADQAGAGAQAAIAJAAIAgAAQAOAAAKgDIAUgFQARgCATgBQAWgBAUACQAYACASAHIAUAIIAPACQAtgKAoAKIA2AEQAXADAXgBQAXACAWgBIAfADIAZADIANABQATADAVgBIAdgCIAugCIAfAAQAUABAKAGQAHAFgDAFQgNACgJADIgIACIhuAFQgZAEgZAFIgOACIkRAFQgsABgmgGIgvgBIgKgBIgNAAIgNAFQgIADgQABIggABQgTAAgQAEIiGgIIhgAAQgTABgSADIgGABIgVACIhLgDQgZgEgaAAIgGAAQgWACgTgCIh6ADIgJABQgbAFgbgEIgWgDIAAAAIgNACIgJAAIgBABQgWgEgWAEIgZAEIgtACIgXgBIgGAAIgfgFIgVACIggAKIgPABQgOgBgLACIgFADQgagHgagCg");
	this.shape_111.setTransform(15.8031,19.3406);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A8xAEQAAgEAFgFQAJgGAWgBQAPgBAPABIAxACQAxADAUgDQAHAAAGgBIAZgDQAPgDARgBQAJAAAJABQAOABAOgCQAWgBAWgCICQgEQAFABAIgCIAWgJQAHgDAIgDQANgDAPgBQASgCAWABQAVABASADQAKACAJADQAKADANAAIAiAAQAEAAAEAAQARgBAIgFQAGgCAFgBQA2gFAqAPQAEABACgBQAHABANgCQAKgBAIgDIAHgCIAJAAQAOABAMADQAEACAFABQASAGAXgDQAGAAAGAAQAigDAhAGIBeADQASAAAQgDQAmgIApACIAmAAIAQgBIAJgDQAJgEAIgDQAXABAeACQANABANABIAKABQAGAAAEgBIALgDQABAAACgBQAKAAAKgBQAcACAbgBIAiADQAGABAEgBIAVgFQAYgDAZAGQADABACAAIAQADQANAAALgBQAEACAEABQAWAKAYACQANAAAKgCQAKgCAHgEQAFgDAFgCQAGgDAIgCQAOgCARAAQAHACAGABQAHADAHADQAGADAHACQAMAEAOgBQAXAAAVgKQAEgCAFgDQAMgBANgDIALgDQAEgBAFAAQAYgHAWAFIAVAHQADACAGgBIAmgCQAZAAAagCQAKACAKACQADABACABIAIAFQACABAGAAIARgBQAJgBAJAAQAjgDAZABQADABADABQADACACABQAIACAIABIAKABIAlgCQAqgDAmAJIAiADIBigDQAggFAfABQAIAAAIAAQATAAARgEQAIgBAHgBQAMgCAOgBIAEAAIALACQAHADAIABQAQACAEABQACABACABQACgBACAAQAqgPA2AHQAFACAFACQAGAHAQAAQAFAAAEAAIAhAAQAOgBALgDQAKgCAKgBQARgCATgBQAXAAAUACQAYABATAGIAVAGIAPABQAugHAqAIIAZAAIAdADQAXADAXAAQAYABAWgDIAgACQAMACANAAQAHABAGAAQAUAEAUAAQAPAAAPgBIAvgBQAQgBAQABQAWACAIAFQAGAEgHAHQgNABgJADIgIABIhvAFQgaADgaAEQgHABgHABIkUACQgtABgogFIhGgDIgMAHQgIAEgQABIghACQgTAAgRADIglACIg0gFIiQgBQgUABgSADQgDAAgDABIgWABIhLgEQgagDgaAAQgDAAgDAAQgWABgTgDIh8ADIgKABQgaAHgcgFIgWgDQgGABgHABQgFAAgEAAQgBAAgBgBQgVgFgXAFIgZAFIhFACQgDgBgEAAQgPgDgPgCQgLABgLABQgQAFgQAEQgIABgIAAQgOAAgLAAQgDABgDAAQgbgGgZgBQgHAAgIABQgGABgFACIgiAGIgDAAIgSgBIgPgEQgGgBgFgBQgIgBgIAAQgaACgbAHQgBAAgBAAQgLgFgRAAQgHAAgIgBQgPgFgPgEQgLgBgLgBQgPABgQADQgEAAgFABIhDgCIgZgEQgXgEgWAEIgKAAIgQgDIgTADQgbADgagEIhegCQgVgDgSACQgWACgZgCIiGAGIgVgCIgCAAQgUgEgWgCIhiABIhBAHIhIABQgQgEgTABIgZgCQgQgBgJgDIgOgEIhMABQglAHgtgCIkWgFQgEAAgFgBQgagGgcgEIhwgFIgHgCQgJgDgMgCg");
	this.shape_112.setTransform(15.251,19.7163);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ah2A3QgLgFgRAAIgPgBIgegJIgWgCIgfAEIgJABIhDgCIgZgEQgXgEgWAEIgKAAIgQgDIgTADQgbADgagEIhegCQgVgDgSACQgWACgZgCIiGAGIgVgCIgCAAQgUgEgWgCIhiABIhBAHIhIABQgQgEgTABIgZgCQgQgBgJgDIgOgEIhMABQglAHgtgCIkWgFIgJgBIg2gKIhwgFIgHgCQgJgDgMgCIgBgBQAAgEAFgFQAJgGAWgBQAPgBAPABIAxACQAxADAUgDIANgBIAZgDQAPgDARgBIASABQAOABAOgCQAWgBAWgCICQgEQAFABAIgCIAWgJIAPgGQANgDAPgBQASgCAWABQAVABASADIATAFQAKADANAAIAiAAIAIAAQARgBAIgFIALgDQA2gFAqAPIAGAAQAHABANgCQAKgBAIgDIAHgCIAJAAQAOABAMADIAJADQASAGAXgDIAMAAQAigDAhAGIBeADQASAAAQgDQAmgIApACIAmAAIAQgBIAJgDIARgHIA1ADIAaACIAKABQAGAAAEgBIALgDIADgBIAUgBQAcACAbgBIAiADQAGABAEgBIAVgFQAYgDAZAGIAFABIAQADIAYgBIAIADQAWAKAYACQANAAAKgCQAKgCAHgEIAKgFIAOgFQAOgCARAAIANADIAOAGIANAFQAMAEAOgBQAXAAAVgKIAJgFIAZgEIALgDIAJgBQAYgHAWAFIAVAHQADACAGgBIAmgCQAZAAAagCIAUAEIAFACIAIAFQACABAGAAIARgBIASgBQAjgDAZABIAGACIAFADIAQADIAKABIAlgCQAqgDAmAJIAiADIBigDQAggFAfABIAQAAQATAAARgEIAPgCIAagDIAEAAIALACQAHADAIABIAUADIAEACIAEgBQAqgPA2AHIAKAEQAGAHAQAAIAJAAIAhAAQAOgBALgDIAUgDQARgCATgBQAXAAAUACQAYABATAGIAVAGIAPABQAugHAqAIIAZAAIAdADQAXADAXAAQAYABAWgDIAgACQAMACANAAIANABQAUAEAUAAIAegBIAvgBQAQgBAQABQAWACAIAFQAGAEgHAHQgNABgJADIgIABIhvAFIg0AHIgOACIkUACQgtABgogFIhGgDIgMAHQgIAEgQABIghACQgTAAgRADIglACIg0gFIiQgBQgUABgSADIgGABIgWABIhLgEQgagDgaAAIgGAAQgWABgTgDIh8ADIgKABQgaAHgcgFIgWgDIgNACIgJAAIgCgBQgVgFgXAFIgZAFIhFACIgHgBIgegFIgWACQgQAFgQAEIgQABIgZAAIgGABQgbgGgZgBIgPABIgLADIgiAGIgDAAIgSgBIgPgEIgLgCIgQgBQgaACgbAHIgCAAg");
	this.shape_113.setTransform(15.251,19.7163);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A9MADQADgEAGgFQALgHAVgBQAPAAAQACIAxADQAyAFAUgDQAHAAAGgBIAZgFQAPgDASgCQAIAAAJABQAPAAAOgDQAWgBAWgCICSgEQAFABAJgDIAVgKQAHgEAIgDQANgFAPgBQATgCAWACQAVABASAEQAKADAJADQAKADAOABIAigBQAFAAAEgBQAPgBAKgDQAGgCAGgBQA2gEArARQAEABACAAQAJACAMgCQAKAAAIgEIAHgCIAJAAQAOACAMAEQAEACAGABQASAGAXgEQAGgBAGAAQAigEAiAHIAvAEIAwgCQASAAAQgDQAogGApAAIA3gCIAJgDQAJgEAIgEQAXACAfADQAMABAOAAIAKABQAGABAFgBIALgBQACAAABgBQALABAKAAQAcADAcgCIAjADQAFABAEgBIAXgCQAYgBAZAFQADAAACAAIARABQANgBAMgCQAEABAEACQAWAJAYACQAOABAKgCQAKgBAHgFQAFgCAFgDQAGgDAIgCQAOgEARgBQAIABAGABQAIADAGACQAHADAHACQANAEANAAQAYAAAUgKQAFgCAEgDQAMgDANgEIALgEQAFgCAEgBQAZgHAWAHIAVAJQACACAHgBIAmgCQAaAAAagCQAKADAKADQADACACACIAHAFQADACAGAAIARgBQAJgBAKAAQAjgEAZADQADACAEABQACABADABQAHACAJABIAKABIAmgDQAqgGAmAMIAiADIBkgFQAggDAgAAQAIgBAIgBQATgBASgEQAHAAAHgBQANgBAOgBIAFAAIAKACQAIADAIABQARADADACQABACACABQACgBACAAQArgOA2AIQAGACAFADQAEAIARAAQAFAAAFAAIAhgBQANgBAMgCQAKgCALgBQASgBASAAQAXABAVABQAXABAVAEIAWAEIAPAAQAugEArAFIAaAAIAdAEQAYADAXAAQAYAAAXgFIAgACQAMABAOAAQAHAAAGAAQAUAEAVABQAPABAPgBIAwABQAQgBAQABQAXACAIAFQAFAFgKAHIgBAAQgMABgLACIh4AFQgbACgaADQgHABgIAAIkYAAQgsABgpgDIgjABIgkgFIgMAJQgHAEgSABIghADQgTAAgRADIhBABIgZgEIiTACQgTABgTACQgDAAgDABIhjgEQgagCgaAAQgDAAgDAAQgXABgTgFIh+ADIgKACQgaAJgcgGIgWgEQgHABgGAAQgFAAgFAAQgBAAAAgBQgWgHgYAGIgYAGIhHACQgDgBgDAAQgQgDgPgCQgLAAgLABQgQAGgRADQgIABgIAAQgOAAgMgBQgDAAgDAAQgcgHgYABQgIAAgIABQgGACgFACIghAHIgXgBIgPgDQgGgBgFgCQgIAAgIAAQgbAEgbAGQgBAAgBAAQgKgHgSAAQgHgBgIgBQgPgFgQgEQgKgBgMgBQgPABgQACQgFABgEAAIgXABIhHgFQgXgDgWACIgCAAIgVgDIgDgBIgUACQgbADgagDIhSABIgOgCQgVgCgSAAQgXABgZgCIiIAHIgVgDIgCAAQgUgFgXgCIhjACIhCAJIhJACQgPgFgUABIgZgBQgQgBgLgCIgOgEIgOAAIgJABIg2gBQglAKgvgCIkJgGIgQgCQgFgBgFgBQgagGgcgGIhxgFIgIgDQgIgEgMgCg");
	this.shape_114.setTransform(14.6833,19.906);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("Ah5A8QgKgHgSAAIgPgCIgfgJIgWgCIgfADIgJABIgXABIhHgFQgXgDgWACIgCAAIgVgDIgDgBIgUACQgbADgagDIhSABIgOgCQgVgCgSAAQgXABgZgCIiIAHIgVgDIgCAAQgUgFgXgCIhjACIhCAJIhJACQgPgFgUABIgZgBIgbgDIgOgEIgOAAIgJABIg2gBQglAKgvgCIkJgGIgQgCIgKgCIg2gMIhxgFIgIgDQgIgEgMgCIgCAAQADgEAGgFQALgHAVgBQAPAAAQACIAxADQAyAFAUgDIANgBIAZgFQAPgDASgCIARABQAPAAAOgDQAWgBAWgCICSgEQAFABAJgDIAVgKQAHgEAIgDQANgFAPgBQATgCAWACQAVABASAEIATAGQAKADAOABIAigBIAJgBQAPgBAKgDIAMgDQA2gEArARIAGABQAJACAMgCQAKAAAIgEIAHgCIAJAAQAOACAMAEQAEACAGABQASAGAXgEIAMgBQAigEAiAHIAvAEIAwgCQASAAAQgDQAogGApAAIA3gCIAJgDIARgIIA2AFIAaABIAKABIALAAIALgBIADgBQALABAKAAQAcADAcgCIAjADIAJAAIAXgCQAYgBAZAFIAFAAIARABQANgBAMgCIAIADQAWAJAYACQAOABAKgCQAKgBAHgFIAKgFIAOgFQAOgEARgBIAOACIAOAFIAOAFQANAEANAAQAYAAAUgKIAJgFIAZgHIALgEIAJgDQAZgHAWAHIAVAJQACACAHgBIAmgCIA0gCIAUAGIAFAEIAHAFQADACAGAAIARgBIATgBQAjgEAZADIAHADIAFACIAQADIAKABIAmgDQAqgGAmAMIAiADIBkgFQAggDAgAAIAQgCQATgBASgEIAOgBIAbgCIAFAAIAKACIAQAEQARADADACIADADIAEgBQArgOA2AIIALAFQAEAIARAAIAKAAIAhgBIAZgDIAVgDIAkgBIAsACQAXABAVAEIAWAEIAPAAQAugEArAFIAaAAIAdAEQAYADAXAAQAYAAAXgFIAgACIAaABIANAAQAUAEAVABQAPABAPgBIAwABQAQgBAQABQAXACAIAFQAFAFgKAHIgBAAQgMABgLACIh4AFIg1AFIgPABIkYAAQgsABgpgDIgjABIgkgFIgMAJQgHAEgSABIghADQgTAAgRADIhBABIgZgEIiTACQgTABgTACIgGABIhjgEQgagCgaAAIgGAAQgXABgTgFIh+ADIgKACQgaAJgcgGIgWgEIgNABIgKAAIgBgBQgWgHgYAGIgYAGIhHACIgGgBIgfgFIgWABQgQAGgRADQgIABgIAAIgagBIgGAAQgcgHgYABIgQABIgLAEIghAHIgXgBIgPgDIgLgDIgQAAQgbAEgbAGIgCAAg");
	this.shape_115.setTransform(14.6833,19.906);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A9oABQAGgDAIgFQANgHATAAQAPgBARACIAxAFQAyAGAVgCQAHAAAHgBIAZgFQAPgFASgCQAIAAAKAAQAOgBAOgDQAXgBAWgCICUgEQAFABAJgEIAFgCIAQgKQAGgFAJgDQAMgFAQgCQASgCAYACQAWACARAFQAKADAJAEQAKAEAOAAIAjgCQAEAAAFAAQAPgCALgCQAGgBAGgBQA3gDArASQAEABADABQAKADALgBQAKgBAIgEIAQgCQAPADALAFQAFACAFACQASAFAYgFQAHgBAGAAQAjgGAiAIIAvAFIAxgDQASgBARgCQAogFAqgCIA3gDIAJgDQAJgFAJgEQAXAEAfACQANABANABIALABQAGAAAFAAIAMABQACAAACAAQAKACALAAQAcADAcgBIAjADQAGABAEAAIAXgBQAZABAaAEQACAAADAAIARAAQAOgDAMgEQAEABAFACQAWAIAZAEQANABAKgBQALgCAHgEQAEgEAGgDQAGgDAHgDQAOgFATgDQAHABAHABQAHACAIADQAGADAHACQAOAEANABQAYABAUgMQAFgCAEgDQANgFAMgGIALgFQAFgBAEgBQAagJAVAIIAVAMQADADAHgBIAngCQAaAAAagCQAKAEAKAEQADACACACIAGAHQADADAHAAIARgBQAJgBAJgBQAlgDAZAFQADABADABQADABACABQAJABAIABIALABIAmgEQArgHAmAMIAjAEIBlgFQAggDAggBQAJgBAIgBQATgDASgEQAHAAAIAAQANgBAOAAIAEAAIALACQAIADAIABQASADACADQABADABACQACgBADAAQArgOA4AJQAFADAFADQACAKATgBQAFAAAFAAIAhgCQAOgBAMgBQALgBAKgBQASAAATAAQAXABAVACQAYAAAVACIAnACQAugCAtACIAZAAIAeAEQAYAFAYgBQAYgBAXgGIAhAAQANABANgBQAHABAHAAQATAFAWABQAPABAQgBIAwACQAQAAAQABQAZACAGAFQAFAFgNAIIgBAAQgMABgLABIh7AEQgaACgbACQgIAAgIAAIjvgFIgsACQgtABgrAAIgjABIgkgGIgMAJQgGAGgSABIgiADQgTABgSACIgmADIg2gGIiUAFQgTABgUACQgDAAgDAAIhkgEQgbgCgaAAQgDAAgDAAQgYAAgTgGIgngCIhYAFIgKACQgaALgdgGIgWgFIAAAAQgHABgHABQgFgBgEAAQgBgBgBAAQgWgJgYAHIgZAHIhHABQgDAAgEAAQgPgDgQgDQgLABgLABQgQAGgRACQgIABgIAAQgOgBgNgCQgEgBgDAAQgcgGgZABQgHABgIABQgGABgGADIghAIIgXAAIgPgDQgGgBgGgCQgIAAgIAAQgbAFgcAHQAAAAgBgBQgJgJgTAAQgIAAgIgCQgOgGgQgDQgLgCgMAAQgPAAgRACQgEABgFABIhfgEQgXgDgXABIgBAAIgZgFIgUACQgcABgbAAIhTACIgNgBQgVgDgTAAQgYgBgYgDIiKAHIgVgDIgCAAQgUgGgYgCIhlADIgoAIIhkAFQgPgFgVACIgagCQgOAAgNgCIgPgCIg9gCIgRACQglALgwgBIkNgJIgQgCQgFgBgEgCQgbgIgdgGIhzgGIgHgDQgIgEgMgDg");
	this.shape_116.setTransform(14.1176,20.0811);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("Ah8BBQgJgJgTAAIgQgCQgOgGgQgDQgLgCgMAAQgPAAgRACIgJACIhfgEQgXgDgXABIgBAAIgZgFIgUACQgcABgbAAIhTACIgNgBQgVgDgTAAIgwgEIiKAHIgVgDIgCAAQgUgGgYgCIhlADIgoAIIhkAFQgPgFgVACIgagCIgbgCIgPgCIg9gCIgRACQglALgwgBIkNgJIgQgCIgJgDQgbgIgdgGIhzgGIgHgDQgIgEgMgDIgDgBIAOgIQANgHATAAQAPgBARACIAxAFQAyAGAVgCIAOgBIAZgFQAPgFASgCIASAAQAOgBAOgDIAtgDICUgEQAFABAJgEIAFgCIAQgKQAGgFAJgDQAMgFAQgCQASgCAYACQAWACARAFIATAHQAKAEAOAAIAjgCIAJAAQAPgCALgCIAMgCQA3gDArASIAHACQAKADALgBQAKgBAIgEIAQgCQAPADALAFIAKAEQASAFAYgFIANgBQAjgGAiAIIAvAFIAxgDIAjgDQAogFAqgCIA3gDIAJgDIASgJQAXAEAfACIAaACIALABIALAAIAMABIAEAAIAVACQAcADAcgBIAjADIAKABIAXgBQAZABAaAEIAFAAIARAAIAagHIAJADQAWAIAZAEQANABAKgBQALgCAHgEIAKgHIANgGQAOgFATgDIAOACIAPAFIANAFQAOAEANABQAYABAUgMIAJgFIAZgLIALgFIAJgCQAagJAVAIIAVAMQADADAHgBIAngCIA0gCIAUAIIAFAEIAGAHQADADAHAAIARgBIASgCQAlgDAZAFIAGACIAFACIARACIALABIAmgEQArgHAmAMIAjAEIBlgFQAggDAggBIARgCIAlgHIAPAAIAbgBIAEAAIALACIAQAEQASADACADIACAFIAFgBQArgOA4AJIAKAGQACAKATgBIAKAAIAhgCIAagCIAVgCIAlAAIAsADQAYAAAVACIAnACQAugCAtACIAZAAIAeAEQAYAFAYgBQAYgBAXgGIAhAAIAaAAIAOABQATAFAWABQAPABAQgBIAwACIAgABQAZACAGAFQAFAFgNAIIgBAAIgXACIh7AEIg1AEIgQAAIjvgFIgsACQgtABgrAAIgjABIgkgGIgMAJQgGAGgSABIgiADIglADIgmADIg2gGIiUAFIgnADIgGAAIhkgEQgbgCgaAAIgGAAQgYAAgTgGIgngCIhYAFIgKACQgaALgdgGIgWgFIAAAAIgOACIgJgBIgCgBQgWgJgYAHIgZAHIhHABIgHAAIgfgGIgWACQgQAGgRACIgQABQgOgBgNgCIgHgBQgcgGgZABIgPACIgMAEIghAIIgXAAIgPgDIgMgDIgQAAIg3AMIgBgBg");
	this.shape_117.setTransform(14.1176,20.0811);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A+DAAIAHgDIAKgGQAcgLAmAHIAjAEIAsAGQAdAEAbgEIAZgGQAXgHAdgCQAPgBAOgEIBSgDIAXgCIBZgCQAFABAKgEIAUgOQAbgYA8AGQAiAEAYANQAKAEAPAAIAsgDQBQgLA6AYQAeANARgLIARgCQAPADALAGQAUAMAhgIQApgLApALIAwAFIA0gDIB2gKIAegCIAZgDIAUgJIAGgEQAhAIAxABIAjAEQApAJAqgCIAeABIA+AHIAcADIAXgCQAPgEAMgGQAbAKAeAFQAdAEAMgJQAUgQAlgIIAPAAIAdAKQAoAOAfgTIAtgZQAggPAZAMIAUANQADAEAHgBIAzgEIAqABIAUAJIAKAOQADADAHAAIAkgDQAvgFAbAMIAcADIAngGQAsgJAmAPIAjADIA2gDIAygDIBAgEIA2gLIAvACIAbAGQAUADAAAEIABAGQAvgOA7AKIAKAHQABANAegDIBSgGIAuADIAjACIAdgBIAkACIBxgDIAbABIAeAFQAzAJAtgPIBKgBQAhAIAogBIA8AEIAWACQA0AEghARIgTABIi5AFIiRgEIggAAIgWAAIgtgDIgOgBIiqAGIgMgCIgKgDIgOgCIgEADIgHAIQgFAGgUABIhaAHIgVADIgbgBIgbgFIgbABIglAEIgkABIhZAEIgigBIiAgGQgdACgUgJIgogDIgdADIg8ADIgKADQgbANgdgIIgWgFIgOABIgKgBQgXgMgZAIIgZAIIhPABIgfgHIgXACQgjAPgrgLQgygNglAOIghAJIgYABIgcgFIgQAAIg3ANQgIgMgVAAIgQgCQgqgSg2AJIgYABIhGgDIgygEIgZgFIgrAAIgVACIgZACIgyADIgVAAIhDgIIglgDIg8AGIgVACIglAAIgVAAIgXgEQgUgHgZgCIgaAAIg+AEIgNAAIgpAKIgZABIgmADIgmACQgPgGgWACIgbAAIghgCIhHgEIgSABQgkAOgygBIgsgDIjlgJIgQgCQgegLgjgIIgdgBIhYgGIgHgDQgIgGgPgDg");
	this.shape_118.setTransform(13.5525,20.2707);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AibA7IgQgCQgqgSg2AJIgYABIhGgDIgygEIgZgFIgrAAIgVACIgZACIgyADIgVAAIhDgIIglgDIg8AGIgVACIglAAIgVAAIgXgEQgUgHgZgCIgaAAIg+AEIgNAAIgpAKIgZABIgmADIgmACQgPgGgWACIgbAAIghgCIhHgEIgSABQgkAOgygBIgsgDIjlgJIgQgCQgegLgjgIIgdgBIhYgGIgHgDQgIgGgPgDIAHgDIAKgGQAcgLAmAHIAjAEIAsAGQAdAEAbgEIAZgGQAXgHAdgCQAPgBAOgEIBSgDIAXgCIBZgCQAFABAKgEIAUgOQAbgYA8AGQAiAEAYANQAKAEAPAAIAsgDQBQgLA6AYQAeANARgLIARgCQAPADALAGQAUAMAhgIQApgLApALIAwAFIA0gDIB2gKIAegCIAZgDIAUgJIAGgEQAhAIAxABIAjAEQApAJAqgCIAeABIA+AHIAcADIAXgCQAPgEAMgGQAbAKAeAFQAdAEAMgJQAUgQAlgIIAPAAIAdAKQAoAOAfgTIAtgZQAggPAZAMIAUANQADAEAHgBIAzgEIAqABIAUAJIAKAOQADADAHAAIAkgDQAvgFAbAMIAcADIAngGQAsgJAmAPIAjADIA2gDIAygDIBAgEIA2gLIAvACIAbAGQAUADAAAEIABAGQAvgOA7AKIAKAHQABANAegDIBSgGIAuADIAjACIAdgBIAkACIBxgDIAbABIAeAFQAzAJAtgPIBKgBQAhAIAogBIA8AEIAWACQA0AEghARIgTABIi5AFIiRgEIggAAIgWAAIgtgDIgOgBIiqAGIgMgCIgKgDIgOgCIgEADIgHAIQgFAGgUABIhaAHIgVADIgbgBIgbgFIgbABIglAEIgkABIhZAEIgigBIiAgGQgdACgUgJIgogDIgdADIg8ADIgKADQgbANgdgIIgWgFIgOABIgKgBQgXgMgZAIIgZAIIhPABIgfgHIgXACQgjAPgrgLQgygNglAOIghAJIgYABIgcgFIgQAAIg3ANQgIgMgVAAg");
	this.shape_119.setTransform(13.5525,20.2707);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A+PAbQgigRA1gEIAWgCIA9gEQAoABAhgIIBLABQAuAPA0gJIAfgFIAbgBIByADIAlgCIAdABIAkgCIAvgDIBSAGQAfADABgNIAKgHQA8gKAvAOIABgGQAAgEAVgEIAbgGIAwgBQAZAHAeAEIBAAEIAzACIA3AEQAWACANgGQAngOAsAJIAoAGIAcgDQAcgMAvAFIAkADQAIAAADgEIAKgNIAUgKIAqAAIA0ADQAIABACgDIAVgOQAZgLAgAOIAuAaQAgATAogPIAdgJIAQgBQAlAJAUAQQANAJAdgEQAfgFAagKQANAGAPAEIAXACIAcgEIBAgGIAegBQAqACAqgJIAkgEQAxgBAhgIIAHAEQAJAGALADIAaADIAeACIB4AKIA0ADIAwgFQAqgLAqALQAhAIAUgMQAMgGAPgDIARACQARALAfgNQA6gZBSAMIAsADQAQAAAKgFQAYgMAigEQA9gHAbAZIAUAOIAQADQAxgSApAUIAXACIBUADIAdAFIA0AJQAMAFAOABQAcAEAdgEIAsgGIAkgEQAmgHAcALIAKAGIAIADQgPADgIAGIgIADIhZAGIgdABQgkAIgeALIgRACIjnAKIgtACQgyABglgNIgSgCIhJAFIghABIgcAAQgVgCgPAGIgngBIgngEIgZgBIgpgJIgOgBIg+gEIgbAAQgaACgUAHIgXAEIgVAAIglAAIgWgCQgdgHggABIglAEIhFAHIgUAAIgzgDIgZgCIgWgCIgrAAQgNACgMAEIgzAEIhIADIgYgBQg2gKgqASIgRADQgVAAgIAMQgbgIgdgFIgRgBIgcAGIgYgBIghgKQgmgNgzANQgrALgkgPIgXgCIggAGIhQAAIgZgJQgagHgWALIgLACIgOgBIgWAEQgeAIgagNIgLgCIg9gEIgdgCQgYgEgRAHQgUAIgdgBIiCAGIgiABIhagEIglgCIglgEIgcAAIgbAEIgcABIgVgCIhbgHQgUgCgFgGIgIgIIgEgDIgOACIgKADIgMACIisgGIgOABIguAEIgXAAIggAAIiTADIi7gFg");
	this.shape_120.setTransform(13.2894,20.6707);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("ABJA7IgRgBIgcAGIgYgBIghgKQgmgNgzANQgrALgkgPIgXgCIggAGIhQAAIgZgJQgagHgWALIgLACIgOgBIgWAEQgeAIgagNIgLgCIg9gEIgdgCQgYgEgRAHQgUAIgdgBIiCAGIgiABIhagEIglgCIglgEIgcAAIgbAEIgcABIgVgCIhbgHQgUgCgFgGIgIgIIgEgDIgOACIgKADIgMACIisgGIgOABIguAEIgXAAIggAAIiTADIi7gFIgTgBQgigRA1gEIAWgCIA9gEQAoABAhgIIBLABQAuAPA0gJIAfgFIAbgBIByADIAlgCIAdABIAkgCIAvgDIBSAGQAfADABgNIAKgHQA8gKAvAOIABgGQAAgEAVgEIAbgGIAwgBQAZAHAeAEIBAAEIAzACIA3AEQAWACANgGQAngOAsAJIAoAGIAcgDQAcgMAvAFIAkADQAIAAADgEIAKgNIAUgKIAqAAIA0ADQAIABACgDIAVgOQAZgLAgAOIAuAaQAgATAogPIAdgJIAQgBQAlAJAUAQQANAJAdgEQAfgFAagKQANAGAPAEIAXACIAcgEIBAgGIAegBQAqACAqgJIAkgEQAxgBAhgIIAHAEQAJAGALADIAaADIAeACIB4AKIA0ADIAwgFQAqgLAqALQAhAIAUgMQAMgGAPgDIARACQARALAfgNQA6gZBSAMIAsADQAQAAAKgFQAYgMAigEQA9gHAbAZIAUAOIAQADQAxgSApAUIAXACIBUADIAdAFIA0AJQAMAFAOABQAcAEAdgEIAsgGIAkgEQAmgHAcALIAKAGIAIADQgPADgIAGIgIADIhZAGIgdABQgkAIgeALIgRACIjnAKIgtACQgyABglgNIgSgCIhJAFIghABIgcAAQgVgCgPAGIgngBIgngEIgZgBIgpgJIgOgBIg+gEIgbAAQgaACgUAHIgXAEIgVAAIglAAIgWgCQgdgHggABIglAEIhFAHIgUAAIgzgDIgZgCIgWgCIgrAAQgNACgMAEIgzAEIhIADIgYgBQg2gKgqASIgRADQgVAAgIAMQgbgIgdgFg");
	this.shape_121.setTransform(13.2894,20.6707);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A+qAOQgUgNAngDQAlgGApAAQApADAjgFQAkACAigBQAjAJAngHQATgEAUgCQA0AAA0gBICogGQAdACAfAAQAYABAEgMQANgLAYAAQA0gFAoAOQARgGAWgDQAlgGAdAGQAbAEAWgEQAUAFAWACQA+AEA9AGQAVAFAVgHQAogNAsAKIArAGIBigIQAWgKAjACIAbAAQAQADATgCIATgIQAWAAAVgEIBJADQAVACASAAIAVgKQAWgJAaAHQAYANAaAKQAgAOAfgNQARgJAXgGIAPAAQAeAHATANQAWALAfgJQAcgIAagLQATgBATAGIAWAHQAqgDArgEQAtABAsgHIAfABQAiACAYgEQADADAFABQAMAEAOABQBdAFBVAKIAqgDQAjgIAjAGQAlADAbgDQAOgEAQgBIBGgCQAVAFAegLQAvgQA/AIIAnAEQARABAHgBQAQgHAYgCQA5gJAmATIARAMQAGAGAPAAQAwgNApAMIDiAOQANAEAPACQAlAGAjgIIBPgHQAlgCAhAHIAoAJQAJACgRAKIhNAEIipACQg2AHgyAIIjQAHQgiABgagIIgOABQguAEg0ADQgiAAgdAGIhOgFIglgHIiHAAQguAAgpAEQgSABgPgBIhjgBQgVgEgXABQgsAJguABIh0gHQgKABgLADIhVAEQgQgEgRACQgpgFggAOIgnACQgUgBgLAHQgVgFgYgDQgRAFgVgEQgbgDgXAHIgcACIgegGQgegKgnAIQgfAHgbgKIgjAEQgNgCgSACIg7gBQgXgJgcAAQgVgFgTAIIgxgBIgTgDIhHAFQglAEgkgLIh0gDQgVgDgPAEQgUADgcgBIiRAGIiPgEIg1AFQgPgBgQAAIh5gIQgRAAgGgEQgQACgUgDIhxgGQgSgCgUgBIicgHIixAFQhHgEhKgDg");
	this.shape_122.setTransform(12.3889,21.4545);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AB4A0QgRAFgVgEQgbgDgXAHIgcACIgegGQgegKgnAIQgfAHgbgKIgjAEQgNgCgSACIg7gBQgXgJgcAAQgVgFgTAIIgxgBIgTgDIhHAFQglAEgkgLIh0gDQgVgDgPAEQgUADgcgBIiRAGIiPgEIg1AFQgPgBgQAAIh5gIQgRAAgGgEQgQACgUgDIhxgGIgmgDIicgHIixAFIiRgHQgUgNAngDQAlgGApAAQApADAjgFQAkACAigBQAjAJAngHQATgEAUgCIBogBICogGQAdACAfAAQAYABAEgMQANgLAYAAQA0gFAoAOQARgGAWgDQAlgGAdAGQAbAEAWgEQAUAFAWACQA+AEA9AGQAVAFAVgHQAogNAsAKIArAGIBigIQAWgKAjACIAbAAQAQADATgCIATgIQAWAAAVgEIBJADQAVACASAAIAVgKQAWgJAaAHQAYANAaAKQAgAOAfgNQARgJAXgGIAPAAQAeAHATANQAWALAfgJQAcgIAagLQATgBATAGIAWAHQAqgDArgEQAtABAsgHIAfABQAiACAYgEQADADAFABQAMAEAOABQBdAFBVAKIAqgDQAjgIAjAGQAlADAbgDQAOgEAQgBIBGgCQAVAFAegLQAvgQA/AIIAnAEQARABAHgBQAQgHAYgCQA5gJAmATIARAMQAGAGAPAAQAwgNApAMIDiAOQANAEAPACQAlAGAjgIIBPgHQAlgCAhAHIAoAJQAJACgRAKIhNAEIipACIhoAPIjQAHQgiABgagIIgOABQguAEg0ADQgiAAgdAGIhOgFIglgHIiHAAQguAAgpAEQgSABgPgBIhjgBQgVgEgXABQgsAJguABIh0gHQgKABgLADIhVAEQgQgEgRACQgpgFggAOIgnACQgUgBgLAHQgVgFgYgDg");
	this.shape_123.setTransform(12.3889,21.4545);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A/LAFQgFgIAYgEQAhgJAoADQApAEAnABQAhADAggDQAYAEAagGQAVgGAagCQAhAAAigDIC6gHQARADAVgDQARgDAIgJQAUgSAsADQAsgBAgAOQAigCAWgCQA9gJAtAQQAdAJAUgIQAOACAQAAQAnAEAkAGQAWAJAbgIQAqgMAsAKIAvAGICngNQAQgHAXgCIAQgCQAaAGAjgBIAcgBQAhAEAggDIA0ABQAjAEAgADIAXgGQATgGATAAQAbALAcAIQAfAJAXgLQATgMAegIIAQAAQAXAHAQAIQAhANAggPQAagKAYgMQAbgIAWAJIAWAKQAWABAagDQAuAAAvgEIAaAFQAUAEAOACQADADAHABQAQABAQAAQBHAAA5ALIAjAAQAcgFAcABQAqgDAhAFQAQAAARAAIB8gGQAZAAAdgJQAkgHAsAEIAhAFQAUACADACQAJgCALABQA1gNAzAQIANAKQAEAJAYgCQAtgIAqAFIEIAJQAOADAPACQAuAHApgLIBPgEQAjAEAmADIA/AHQAgADgaAOIiSAFIjcgDQhIAEhFAGIgWgDIhmADQgSABgNgDIgMAFQgZAFglACQguADgrAFIg2gDIgggGIioAFQhBgChAAAQgYACgSgFIh1ABQgNgBgPABQgkALgmgEIhFgFQgJABgJABIgwACQgUgJgWAGQgagBgXAJIg+ACQgSgDgNACQgRgCgSgBQgbAKghgIQgogHgfAKIgfAGIgcgDQgWgGgbACQgUAEgSgEIguAIQgLgHgUABIgmgCQghgOgrAFQgRgCgPAEIhZgEIgWgEIh3AGQgvgBgtgIIg9AFIhGgCQgQgDgOABQgVgCgbgCIkrAOQgPgEgUACIiBgIQgNAAgIgBQgbAIglgCIjQgKQgZgHgcgFIiMgGIhcAAQgogFgtgDg");
	this.shape_124.setTransform(12.0071,21.8295);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AjAA3IgmgCQghgOgrAFQgRgCgPAEIhZgEIgWgEIh3AGQgvgBgtgIIg9AFIhGgCQgQgDgOABIgwgEIkrAOQgPgEgUACIiBgIQgNAAgIgBQgbAIglgCIjQgKQgZgHgcgFIiMgGIhcAAQgogFgtgDQgFgIAYgEQAhgJAoADQApAEAnABQAhADAggDQAYAEAagGQAVgGAagCQAhAAAigDIC6gHQARADAVgDQARgDAIgJQAUgSAsADQAsgBAgAOIA4gEQA9gJAtAQQAdAJAUgIQAOACAQAAQAnAEAkAGQAWAJAbgIQAqgMAsAKIAvAGICngNQAQgHAXgCIAQgCQAaAGAjgBIAcgBQAhAEAggDIA0ABIBDAHIAXgGQATgGATAAQAbALAcAIQAfAJAXgLQATgMAegIIAQAAQAXAHAQAIQAhANAggPQAagKAYgMQAbgIAWAJIAWAKQAWABAagDQAuAAAvgEIAaAFIAiAGQADADAHABIAgABQBHAAA5ALIAjAAQAcgFAcABQAqgDAhAFIAhAAIB8gGQAZAAAdgJQAkgHAsAEIAhAFQAUACADACQAJgCALABQA1gNAzAQIANAKQAEAJAYgCQAtgIAqAFIEIAJIAdAFQAuAHApgLIBPgEIBJAHIA/AHQAgADgaAOIiSAFIjcgDQhIAEhFAGIgWgDIhmADQgSABgNgDIgMAFQgZAFglACQguADgrAFIg2gDIgggGIioAFQhBgChAAAQgYACgSgFIh1ABQgNgBgPABQgkALgmgEIhFgFIgSACIgwACQgUgJgWAGQgagBgXAJIg+ACQgSgDgNACIgjgDQgbAKghgIQgogHgfAKIgfAGIgcgDQgWgGgbACQgUAEgSgEIguAIQgLgHgUABg");
	this.shape_125.setTransform(12.0071,21.8295);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("A/qAAIAIgDIALgGQAdgMAoAHIAlAFIAuAGQAeAEAdgEIAbgGQAYgIAegBQAQgBAOgFIBYgDIAYgCIBdgCQAGACAKgFIAVgOQAcgaBAAHQAjAEAZANQALAFAQAAIAugDQBVgMA9AZQAfANATgLIARgCQAQADAMAGQAVANAigJQAsgLArALIAzAGIA2gDIB8gKIAggDIAagDIAVgJIAHgEQAiAIA0ABIAlAEQAsAJArgCIAgABIBCAHIAdAEIAYgCQAQgEANgHQAcALAfAFQAfAEANgJQAVgRAngJIAQABIAeAKQAqAPAigUIAvgaQAhgPAbAMIAVAOQACADAIgBIA3gEIArABIAVAKIALAOQACADAIAAIAngCQAxgGAdANIAdADIApgHQAugJAoAPIAlAEIA5gEIA0gCIBEgEIA5gMIAyABIAcAHQAVADAAAFIABAGQAxgPA+AKIALAIQABANAggDIBWgGIAxADIAlACIAegBIAmACIB3gDIAcABIAgAFQA2AJAwgQIBOAAQAiAIAqgBIBAAEIAWADQA4AEgkARIgUABIjCAFIiZgEIghAAIgYAAIgwgEIgOAAIizAGIgNgDIgLgDIgOgBIgEADIgIAIQgFAGgWACIhdAHIgXACIgdgBIgcgEIgdAAIgmAEIgmACIheAEIgkgBIiHgGQgeABgVgIIgrgDIgeACIhAAEIgKACQgcAOgegIIgYgFIgPABIgKgCQgYgMgaAIIgbAJIhTABIghgHIgYACQglAPgtgLQg1gNgnAOIgjAJIgZABIgdgGIgRABIg7AOQgIgNgWAAIgRgCQgsgTg5AKIgZABIhKgDIg1gEIgagGIgtAAIgXACIgaACIg1ADIgVAAIhHgIIgngDIg/AGIgXACIgmAAIgWAAIgYgEQgVgHgbgCIgcAAIhAAEIgPAAIgqAKIgbABIgpAEIgnABQgQgGgXACIgdAAIgigBIhLgFIgTACQgmAOg1gCIgugCIjxgKIgRgCQgggLglgJIgegBIhdgGIgIgDQgIgGgQgDg");
	this.shape_126.setTransform(11.4924,21.8333);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AijA9IgRgCQgsgTg5AKIgZABIhKgDIg1gEIgagGIgtAAIgXACIgaACIg1ADIgVAAIhHgIIgngDIg/AGIgXACIgmAAIgWAAIgYgEQgVgHgbgCIgcAAIhAAEIgPAAIgqAKIgbABIgpAEIgnABQgQgGgXACIgdAAIgigBIhLgFIgTACQgmAOg1gCIgugCIjxgKIgRgCQgggLglgJIgegBIhdgGIgIgDQgIgGgQgDIAIgDIALgGQAdgMAoAHIAlAFIAuAGQAeAEAdgEIAbgGQAYgIAegBQAQgBAOgFIBYgDIAYgCIBdgCQAGACAKgFIAVgOQAcgaBAAHQAjAEAZANQALAFAQAAIAugDQBVgMA9AZQAfANATgLIARgCQAQADAMAGQAVANAigJQAsgLArALIAzAGIA2gDIB8gKIAggDIAagDIAVgJIAHgEQAiAIA0ABIAlAEQAsAJArgCIAgABIBCAHIAdAEIAYgCQAQgEANgHQAcALAfAFQAfAEANgJQAVgRAngJIAQABIAeAKQAqAPAigUIAvgaQAhgPAbAMIAVAOQACADAIgBIA3gEIArABIAVAKIALAOQACADAIAAIAngCQAxgGAdANIAdADIApgHQAugJAoAPIAlAEIA5gEIA0gCIBEgEIA5gMIAyABIAcAHQAVADAAAFIABAGQAxgPA+AKIALAIQABANAggDIBWgGIAxADIAlACIAegBIAmACIB3gDIAcABIAgAFQA2AJAwgQIBOAAQAiAIAqgBIBAAEIAWADQA4AEgkARIgUABIjCAFIiZgEIghAAIgYAAIgwgEIgOAAIizAGIgNgDIgLgDIgOgBIgEADIgIAIQgFAGgWACIhdAHIgXACIgdgBIgcgEIgdAAIgmAEIgmACIheAEIgkgBIiHgGQgeABgVgIIgrgDIgeACIhAAEIgKACQgcAOgegIIgYgFIgPABIgKgCQgYgMgaAIIgbAJIhTABIghgHIgYACQglAPgtgLQg1gNgnAOIgjAJIgZABIgdgGIgRABIg7AOQgIgNgWAAg");
	this.shape_127.setTransform(11.4924,21.8333);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("ABNA9IgSgBIgdAFIgZAAIgkgKQgogOg1ANQguALglgPIgYgCIgiAHIhUgBIgbgIQgbgIgYAMIgLABIgOgBIgYAFQgfAIgcgNIgLgDIhfgGQgZgEgSAHQgVAJgfgCIitAHIjKgKIgcAFIgdABIh2gKQgWgCgFgGIgMgLIgnAHIi1gGIkTAIIjZgGQgkgRA4gEIBXgHQArABAjgIIBOAAQAxAQA3gJIAggFICUACICdgGIBXAGQAgADABgNIALgIQA/gKAyAPIABgHQAAgEAVgDIAcgHIAzgBQAbAIAfADICzALQAXABAPgFQAogPAvAJIApAHIAegEQAdgMAyAFIAmADQAIAAADgDIALgPIAVgJIBjADQAIABADgEIAVgOQAbgMAiAPIAwAbQAhATArgPIAfgJIAQgBQAnAJAWAQQANAKAfgEQAggGAcgKQANAGAQAEIAZADICAgMQAsACAsgJIAmgEQA0gBAjgJIAHAEQAJAHAMADIDwATIAzgGQAsgLAsALQAjAJAVgNQAMgGAQgDIASACQASALAggNQA+gaBWAMIAvADQAQAAAKgEQAagNAkgEQBAgHAcAZIAWAPIAQADQA0gTArAVIBwAFIBWAPQAMAFAPABQAdAEAfgEIBUgLQAogHAeAMIATAJQgQADgIAGIgJADIh8AHQglAJghALIgRADIkjAMQg1ABgngOIgTgCIiMAHQgXgDgQAHIhsgHIgrgJIhtgFQgaACgWAHIgYAEIg+AAIgWgCQgfgHgiABIhvAMIiqgIQgNACgNAEIiBAHIgZgBQg6gKgsATIgSACQgWAAgIANQgcgIgfgFg");
	this.shape_128.setTransform(11.1957,22.2333);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Egg3AAAIAJgEIALgFQAegMApAHIAmAFIAwAGQAgAEAegEQAPgBANgFIA4gKIAfgGIBbgDIAZgBQAsgVA1ASIARgDIAWgPQAcgZBCAHQAlAEAaANQALAFARAAIAwgEQBYgMA/AaQAhAOATgLIASgDQAQADANAHQAWANAjgJQAtgLAuALIA0AGIA4gEICBgKIAhgDIAcgDQAMgDAJgGIAHgFQAkAJA2ABIAmAEQAtAKAugDIAgABIBFAIIAeAEIAZgDQAQgEAOgGQAdAKAhAGQAfAEAOgKQAWgRAogJIARABIAfAKQAsAPAjgUIAxgbQAigPAcAMIAWAPQACADAJgBIA4gEIAtABIAWAKIALAOQADADAIAAIAogCQAzgGAeANIAeADIArgGQAwgKApAQQAPAFAXgBIA7gEIA3gDIBGgEQAggEAbgIIA0ACIAdAGQAWADAAAFIABAHQAzgQBBALIALAIQABANAhgEIBZgFIAzADIAmACIAggBIAoACIB7gDIAdABIAhAFQA4AJAygQIBQgBQAkAJAsgBIBCAEIAXADQA6AEglASIgVAAIjJAGIiggEIgiAAIgZAAIgxgEIgPgBIi5AHIgOgDIgLgDIgPgCIgEAEIgJAIQgFAGgWACIhhAHIgYACIgeAAIgdgFIgeABIgoAEIgnABIhiAEIglgBIiMgGQgfACgWgJQgSgIgaAEIggADIhCAEIgLACQgdAOgfgIIgZgFIgPABIgLgCQgZgMgbAIIgbAJIhXABIgigHIgZACQgmAPgvgLQg3gOgpAPIgkAKIgaAAIgegFIgSABQggAFgdAIQgIgNgXAAIgSgCQgtgTg7AKIgaABIhNgDIg3gEQgOgEgOgCIguAAIgYACIgbACIg3ADIgWAAIhKgIIgogDQgigCggAIIgXACIgoAAIgXAAIgZgEQgWgHgbgDIgdAAIhDAEIgPABIgsAKIgcABIgqAEIgpABQgRgGgXACIgeAAIgkgBIhOgFIgTABQgoAPg3gCIgwgCIj6gKIgSgCQghgLgmgJIgggBIhggHIgIgDQgIgGgRgDg");
	this.shape_129.setTransform(10.1493,23.0333);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AipA+IgSgCQgtgTg7AKIgaABIhNgDIg3gEQgOgEgOgCIguAAIgYACIgbACIg3ADIgWAAIhKgIIgogDQgigCggAIIgXACIgoAAIgXAAIgZgEQgWgHgbgDIgdAAIhDAEIgPABIgsAKIgcABIgqAEIgpABQgRgGgXACIgeAAIgkgBIhOgFIgTABQgoAPg3gCIgwgCIj6gKIgSgCQghgLgmgJIgggBIhggHIgIgDQgIgGgRgDIAJgEIALgFQAegMApAHIAmAFIAwAGQAgAEAegEQAPgBANgFIA4gKIAfgGIBbgDIAZgBQAsgVA1ASIARgDIAWgPQAcgZBCAHQAlAEAaANQALAFARAAIAwgEQBYgMA/AaQAhAOATgLIASgDQAQADANAHQAWANAjgJQAtgLAuALIA0AGIA4gEICBgKIAhgDIAcgDQAMgDAJgGIAHgFQAkAJA2ABIAmAEQAtAKAugDIAgABIBFAIIAeAEIAZgDQAQgEAOgGQAdAKAhAGQAfAEAOgKQAWgRAogJIARABIAfAKQAsAPAjgUIAxgbQAigPAcAMIAWAPQACADAJgBIA4gEIAtABIAWAKIALAOQADADAIAAIAogCQAzgGAeANIAeADIArgGQAwgKApAQQAPAFAXgBIA7gEIA3gDIBGgEQAggEAbgIIA0ACIAdAGQAWADAAAFIABAHQAzgQBBALIALAIQABANAhgEIBZgFIAzADIAmACIAggBIAoACIB7gDIAdABIAhAFQA4AJAygQIBQgBQAkAJAsgBIBCAEIAXADQA6AEglASIgVAAIjJAGIiggEIgiAAIgZAAIgxgEIgPgBIi5AHIgOgDIgLgDIgPgCIgEAEIgJAIQgFAGgWACIhhAHIgYACIgeAAIgdgFIgeABIgoAEIgnABIhiAEIglgBIiMgGQgfACgWgJQgSgIgaAEIggADIhCAEIgLACQgdAOgfgIIgZgFIgPABIgLgCQgZgMgbAIIgbAJIhXABIgigHIgZACQgmAPgvgLQg3gOgpAPIgkAKIgaAAIgegFIgSABQggAFgdAIQgIgNgXAAg");
	this.shape_130.setTransform(10.1493,23.0333);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EghQAABQAFgGAPgFQAggLArAGQArAGArAEQAhAEAggEQATAAARgFIBTgPIB5gEQAwgTA6AQIAZgCQANgGAKgIQAagYA8AGQApADAdANQAvACAYgCQBQgLA7AXQAgAMAUgKQAMAAALgBQAZADAWAHQAWALAigIQAtgMAvALIAzAGIDhgSQAOgEAOgFIALgEQAhAIAxABIAjACQAqAIArgDIAiABIBfALQANgBALgCQAQgEAOgHQAcAIAiAHQAfAFAPgHQAYgNApgKIASAAIAeAIQAtAPAhgQQAYgLAZgNQAjgOAcAKQALAHAMAHQAEADAJAAIBqgFQAPAFAPADIAOANQAJADALgBIAkgCQAvgEAdAMIA3AEIAsgGQAwgKAqAPQASAGAXgCQBVgGBUgFQAegDAZgIQAaACAbAAQAUAAAXAEQAWADADAFQACADACACQAxgPA+AIQANADAIAHQACANAfgDIBSgFQAuAAAtAFIDWAAIAoAGQA0AJAugOQAoAAAogBQAlAIAsgBQAtACAsADQA0AEggARQhmADhkADIkAgHIi1AHQgLAAgKgBIgLgCIgvAAQgMAFgKAEQgGAFgVACIh9AJQgQAAgPAAIgngFIi/AIIisgHQgfACgWgIQgSgGgZAEIhhAFQgJABgJABQggANgjgHIgpgFQgJABgIAAIgcAAQgdgMgeAJIgaAIQgpABgoABQgTgEgTgEIgYADQglANgsgJQgygNgnANIgkAIQgRgBgRACQgTgCgSgEIgTABQgeAFgcAIQgMgMgaAAIgTgDQgsgSg4ALIiQgGQgNgEgNgBIifAHQg3gEg3gHQgfgCgdAHIggABQgfAAgfABQgNgBgPgCQgegGgjgCIh7ADIgqAJIhoAGQgVgGgcABQhEgChBgEIgSAAQgkANgygBIkggNQgpgKgugIIiYgJQgUgGgcgDg");
	this.shape_131.setTransform(9.6559,23.608);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AjBA8IgTgDQgsgSg4ALIiQgGQgNgEgNgBIifAHQg3gEg3gHQgfgCgdAHIggABQgfAAgfABIgcgDQgegGgjgCIh7ADIgqAJIhoAGQgVgGgcABQhEgChBgEIgSAAQgkANgygBIkggNQgpgKgugIIiYgJQgUgGgcgDQAFgGAPgFQAggLArAGIBWAKQAhAEAggEQATAAARgFIBTgPIB5gEQAwgTA6AQIAZgCQANgGAKgIQAagYA8AGQApADAdANQAvACAYgCQBQgLA7AXQAgAMAUgKIAXgBQAZADAWAHQAWALAigIQAtgMAvALIAzAGIDhgSIAcgJIALgEQAhAIAxABIAjACQAqAIArgDIAiABIBfALIAYgDQAQgEAOgHQAcAIAiAHQAfAFAPgHQAYgNApgKIASAAIAeAIQAtAPAhgQIAxgYQAjgOAcAKIAXAOQAEADAJAAIBqgFIAeAIIAOANQAJADALgBIAkgCQAvgEAdAMIA3AEIAsgGQAwgKAqAPQASAGAXgCICpgLQAegDAZgIQAaACAbAAQAUAAAXAEQAWADADAFIAEAFQAxgPA+AIQANADAIAHQACANAfgDIBSgFQAuAAAtAFIDWAAIAoAGQA0AJAugOIBQgBQAlAIAsgBQAtACAsADQA0AEggARIjKAGIkAgHIi1AHIgVgBIgLgCIgvAAIgWAJQgGAFgVACIh9AJIgfAAIgngFIi/AIIisgHQgfACgWgIQgSgGgZAEIhhAFIgSACQggANgjgHIgpgFIgRABIgcAAQgdgMgeAJIgaAIIhRACIgmgIIgYADQglANgsgJQgygNgnANIgkAIQgRgBgRACQgTgCgSgEIgTABQgeAFgcAIQgMgMgaAAg");
	this.shape_132.setTransform(9.6559,23.608);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EghoAACQAAgGAUgFQAigLArAFQAtAFAqADQAjAEAhgEQAXACAXgGIBNgOIB/gDQA1gRA9AOIAhgBQAQgFAJgJQAYgVA2AEQAsABAgAOQAqAAAYgCQBKgKA1AUQAhAKAVgJQANABAOAAQAiAEAfAGQAXALAfgJQAugMAvALIAzAGIDLgQQARgGATgDIAOgDQAfAHArAAIAhAAQAnAHAngDIAkAAIBcAKQAMAAAKgCQAQgFANgHQAdAGAiAIQAfAGARgFQAZgJAqgLIAUgBIAdAHQAtAPAggNQAXgIAagMQAjgNAdAHQAMAHAMAHQAFADAKgBIBugFQATAFATACIASAKQAOACAPgBIAhgCQArgDAaAMIBQAGIAugGQAwgKArAOQAUAHAYgEQBMgGBOgFQAbgDAYgGQAZADAcgCQAagDAfAFQAXADAFAEQAFADACABQAvgPA8AIQATABALAJQADANAdgCIBMgEQAvgCAuAHIDMAAIAuAHQAwAJArgNQAoABAngBQAmAGAtgCQAtACAqAEQAwAEgbAPQhdADhaAEIjkgGIixAHQgOABgNABIgNgCIhPABQgRAFgOACQgHAFgTABIiBAJQgRgBgQABIgwgFIiwAGIimgHQggACgWgFQgRgGgYAEIhhAEQgMAAgMABQgkANgmgGIg7gFQgJABgJAAIgsABQghgMggAKIgaAIQgoAAgkADQgUgEgVgEIgYABQgiANgpgIQgvgLgkALIglAGQgTgDgXADQgXABgUgGIgUAAQgdAFgbAIQgQgLgdAAIgUgEQgrgRg0ALIiBgFQgNgDgNgBIiQAGQg1gCg0gIQgdgBgaAFIgpABQgfgBgdACQgPAAgRgCQglgFgqgBIiIABIgpAJIhgAFQgagGghABQg+gDg7gEIgRAAQghALgsgCIkGgKQgwgJg2gIIiogHQgggGgmgDg");
	this.shape_133.setTransform(9.1508,24.1878);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AjZA6IgUgEQgrgRg0ALIiBgFQgNgDgNgBIiQAGQg1gCg0gIQgdgBgaAFIgpABQgfgBgdACQgPAAgRgCQglgFgqgBIiIABIgpAJIhgAFQgagGghABQg+gDg7gEIgRAAQghALgsgCIkGgKQgwgJg2gIIiogHQgggGgmgDQAAgGAUgFQAigLArAFQAtAFAqADQAjAEAhgEQAXACAXgGIBNgOIB/gDQA1gRA9AOIAhgBQAQgFAJgJQAYgVA2AEQAsABAgAOQAqAAAYgCQBKgKA1AUQAhAKAVgJIAbABQAiAEAfAGQAXALAfgJQAugMAvALIAzAGIDLgQQARgGATgDIAOgDQAfAHArAAIAhAAQAnAHAngDIAkAAIBcAKQAMAAAKgCQAQgFANgHIA/AOQAfAGARgFQAZgJAqgLIAUgBIAdAHQAtAPAggNQAXgIAagMQAjgNAdAHIAYAOQAFADAKgBIBugFQATAFATACIASAKQAOACAPgBIAhgCQArgDAaAMIBQAGIAugGQAwgKArAOQAUAHAYgEICagLQAbgDAYgGQAZADAcgCQAagDAfAFQAXADAFAEIAHAEQAvgPA8AIQATABALAJQADANAdgCIBMgEQAvgCAuAHIDMAAIAuAHQAwAJArgNQAoABAngBQAmAGAtgCQAtACAqAEQAwAEgbAPIi3AHIjkgGIixAHIgbACIgNgCIhPABQgRAFgOACQgHAFgTABIiBAJQgRgBgQABIgwgFIiwAGIimgHQggACgWgFQgRgGgYAEIhhAEQgMAAgMABQgkANgmgGIg7gFIgSABIgsABQghgMggAKIgaAIQgoAAgkADIgpgIIgYABQgiANgpgIQgvgLgkALIglAGQgTgDgXADQgXABgUgGIgUAAQgdAFgbAIQgQgLgdAAg");
	this.shape_134.setTransform(9.1508,24.1878);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgiAAADQgFgIAagFQAkgJAsAEQAtAEAqABQAkAEAigEQAcAFAbgHIBJgNICEgCQA5gQBBAMIAqAAQASgEAIgKQAWgTAwAEQAwgBAjAOQAlgBAYgCQBCgKAxARQAgAKAWgIQAQABARABQAqADAoAHQAXAJAegIQAtgMAxAKIAyAHIC3gPQASgHAYgCIASgCQAcAGAnAAIAegCQAjAFAkgEIAmABIBYAJQAMAAAJgCQAPgFAOgHQAdADAjAJQAeAHASgCQAbgGAsgLIAVgCIAbAGQAtAOAfgJQAWgGAcgLQAjgMAdAFQAMAHAOAGQAGADAKAAIBzgHQAXAFAXAAIAVAJQAUACARgDIAeAAQAngCAaAKIBoAIIAvgGQAxgKAsAOQAWAHAYgFQBFgGBFgFQAagCAWgGQAYAEAegDQAfgGAoAGQAXADAIAEQAGACAEABQAtgPA5AFQAbABANALQAFAMAagBIBEgCQAygFAuAJIDDABIA0AIQAsAJAogLQAmABAngCQAoAFAtgCQAtAAAqAGQArADgXAOQhTADhQAFIjJgFIitAHQgSACgQACIgNgBIhvADQgXAEgSAAQgHAEgSABIiFAIQgTAAgQABIg5gFIigAEIihgHQggACgWgEQgRgEgXADIhhAEQgOgBgQABQgnALgqgEIhLgFQgKABgKABIg9ABQglgMgjAMIgZAHQgmABghAEQgVgFgXgFIgXACQghALgmgHQgqgKghAKIgmAEQgXgEgbAFQgbABgXgHIgVAAQgcAFgaAHQgUgJgfAAIgVgFQgqgQgxAMIhzgFQgMgDgMgBIiCAHQgygBgygJQgagCgYAFIgxAAQgfgBgcACQgQABgTgBQgtgEgygBIiTAAIgoAIIhYAFQgggGglAAQg6gCg0gFIgQgCQgdAKgngBIjqgIQg5gJg9gHIi5gFQgrgFgxgEg");
	this.shape_135.setTransform(8.6497,24.7536);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AjwA4IgWgFQgpgQgyAMIhygFQgMgDgMgBIiCAHQgygBgzgJQgZgCgYAFIgxAAQgfgBgcACQgQABgTgBQgtgEgygBIiTAAIgoAIIhYAFQghgGgkAAQg6gCg0gFIgQgCQgdAKgngBIjqgIIh2gQIi5gFQgrgFgxgEQgFgIAagFQAkgJAsAEQAsAEArABQAjAEAjgEQAcAFAbgHIBJgNICEgCQA5gQBBAMIApAAQATgEAIgKQAWgTAwAEQAwgBAjAOQAlgBAYgCQBCgKAxARQAgAKAWgIIAhACQAqADAoAHQAXAJAegIQAtgMAxAKIAyAHIC3gPQASgHAYgCIASgCQAcAGAnAAIAdgCQAkAFAkgEIAlABIBZAJQAMAAAJgCQAPgFAOgHQAdADAjAJQAdAHATgCIBHgRIAVgCIAbAGQAsAOAggJQAWgGAcgLQAjgMAdAFQAMAHAOAGQAGADAJAAIB0gHQAXAFAXAAIAVAJQAUACARgDIAeAAQAngCAaAKIBoAIIAvgGQAxgKArAOQAXAHAYgFICKgLQAZgCAXgGQAYAEAegDQAfgGAoAGQAXADAIAEIAKADQAsgPA6AFQAbABANALQAEAMAbgBIBEgCQAygFAuAJIDDABIA0AIQAsAJAogLQAmABAngCQAoAFAtgCQAtAAApAGQAsADgXAOQhTADhQAFIjJgFIitAHIgiAEIgNgBIhwADQgWAEgSAAQgHAEgSABIiGAIQgSAAgQABIg5gFIigAEIiigHQgfACgXgEQgRgEgWADIhhAEQgOgBgQABQgnALgqgEIhLgFIgUACIg9ABQglgMgjAMIgZAHQgmABghAEIgsgKIgYACQggALgmgHQgqgKghAKIgmAEQgXgEgcAFQgaABgXgHIgVAAQgcAFgaAHQgUgJgfAAg");
	this.shape_136.setTransform(8.6497,24.7536);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgiYAAFQgKgKAfgEQAmgJAtADQAuAEApgBQAmADAkgDQAfAHAhgIIBDgLICKgCQA+gOBEAKIAyAAQAWgCAHgLQAUgRAqADQAzgCAmAOQAggDAYgCQA7gJAsAOQAgAIAXgHQASADATABQA0AEAwAGQAYAJAcgIQAtgNAxAKIAzAHIChgOQAUgHAdgBIAWgCQAZAFAiAAIAbgEQAhAEAggEIB8AJQALAAAJgDQAPgFANgHQAdABAkAKQAeAIATAAQAdgCAsgMIAXgDIAbAFQAsANAfgFQAVgDAdgKQAjgMAdADQANAHAOAGQAHADALAAIB4gIQAbAEAbgBIAYAHQAZACAVgEIAbAAQAjAAAYAJICAAKIAxgGQAxgLAtAOQAZAHAYgGQA9gGA+gFQAXgBAVgFQAYAFAegFQAlgJAxAHQAXADALADQAIACAFAAQArgPA3AFQAhgBAQAOQAGALAYAAIA9gBQAzgHAvALIC5ABIA7AKQAoAIAkgJQAmABAngCQApAEAtgEQAtAAApAHQAnAEgSAMQhKADhHAFIitgEIioAHQgWADgTAEIgPgBIiOAEQgcAFgWgDQgIADgRABIiJAIQgUgBgQADIhDgGIiQACIicgGQggACgXgDQgQgDgVADIhhADQgSgCgTABQgrALgsgDIhdgGQgLABgKACIhOACQgpgMglANIgYAHQglAAgdAGQgXgGgZgEIgXABQgeAKgjgGQgmgIgfAIIgmACQgagGghAGQgeAEgagJIgWAAQgaAFgZAGQgYgIgiAAIgXgFQgogPguALIhkgDQgLgDgMgBIhzAHQgxAAgvgKQgXgBgVAEIg6gBQgfgCgaADQgSACgVgBQg1gDg5AAIifgCIgoAIIhQAEQglgGgpAAQg1gDgugFIgPgCQgZAIgigCIi5gGIgWABQhBgIhEgHIjJgDQg3gFg8gDg");
	this.shape_137.setTransform(8.078,25.3027);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AkHA2IgXgFQgogPguALIhkgDQgLgDgMgBIhzAHQgxAAgvgKQgXgBgVAEIg6gBQgfgCgaADQgSACgVgBQg1gDg5AAIifgCIgoAIIhQAEQglgGgpAAQg1gDgugFIgPgCQgZAIgigCIi5gGIgWABQhBgIhEgHIjJgDQg3gFg8gDQgKgKAfgEQAmgJAtADQAuAEApgBQAmADAkgDQAfAHAhgIIBDgLICKgCQA+gOBEAKIAyAAQAWgCAHgLQAUgRAqADQAzgCAmAOIA4gFQA7gJAsAOQAgAIAXgHQASADATABQA0AEAwAGQAYAJAcgIQAtgNAxAKIAzAHIChgOQAUgHAdgBIAWgCQAZAFAiAAIAbgEQAhAEAggEIB8AJQALAAAJgDQAPgFANgHQAdABAkAKQAeAIATAAQAdgCAsgMIAXgDIAbAFQAsANAfgFQAVgDAdgKQAjgMAdADQANAHAOAGQAHADALAAIB4gIQAbAEAbgBIAYAHQAZACAVgEIAbAAQAjAAAYAJICAAKIAxgGQAxgLAtAOQAZAHAYgGIB7gLQAXgBAVgFQAYAFAegFQAlgJAxAHQAXADALADQAIACAFAAQArgPA3AFQAhgBAQAOQAGALAYAAIA9gBQAzgHAvALIC5ABIA7AKQAoAIAkgJQAmABAngCQApAEAtgEQAtAAApAHQAnAEgSAMQhKADhHAFIitgEIioAHIgpAHIgPgBIiOAEQgcAFgWgDQgIADgRABIiJAIQgUgBgQADIhDgGIiQACIicgGQggACgXgDQgQgDgVADIhhADQgSgCgTABQgrALgsgDIhdgGIgVADIhOACQgpgMglANIgYAHQglAAgdAGIgwgKIgXABQgeAKgjgGQgmgIgfAIIgmACQgagGghAGQgeAEgagJIgWAAQgaAFgZAGQgYgIgiAAg");
	this.shape_138.setTransform(8.078,25.3027);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgiwAAIQgPgLAlgFQAogIAtACQAvADApgCQAnADAmgDQAjAJAmgIIA+gLICPgBQBDgMBIAIIA6ABQAYgBAGgMQASgOAkABQA3gEApAPQAbgEAYgDQA0gIAnALQAgAHAYgGQAUAEAWABQA8AEA6AGQAYAIAagIQAtgNAyAKIAyAHICMgMQAXgIAhAAIAagBQAXAEAcgBIAZgGQAdACAdgEIAqAAIBRAIQAKAAAIgCQAOgGAOgHQAdgBAkALQAeAJAUACQAfACAtgMIAagFIAYAEQAtANAdgBQAUgCAegJQAkgKAeAAQANAHAPAGQAIACALABIB9gJQAfAEAfgCIAbAFQAfABAYgFIAYABQAfABAWAIICZAMIAygHQAygKAuANQAbAIAYgIQA1gGA3gEQAVgBATgEQAYAGAfgGQArgNA4AIQAZADANADQAKACAGgBQAogPA1ADQAogCATAQQAHALAWACIA2gBQA1gJAvAMICwADIBCAKQAjAIAhgHQAlACAmgDQAqACAvgEQAtgCAnAIQAiAFgNALQhBADg8AFIiSgDIikAHQgZAFgWAFIi+AFQgiAEgagFQgIADgQAAIiNAIQgVgBgQADIhNgGIiAAAIiXgGQgfACgYAAQgQgDgUADIhhACQgUgDgWABQgvAKgwgBIhugGQgLABgLACIhfADQgtgMgnAPIgYAGQgiAAgbAHQgYgGgbgFIgWABQgcAJgggEQgigIgcAHIgnAAQgdgHgmAHQghAFgdgKIgXgBQgZAFgZAGQgcgHgkAAIgYgGQgmgOgsAMIhVgCQgLgDgLgBIhlAHQguABgtgKQgUgCgTADIhCgCQgegCgaAEQgTAEgYgCQg8gChAABIisgDIgmAHIhIAEQgqgGgugCQgwgCgngFIgOgEQgWAHgcgCIidgFIgXACQhJgHhMgGIjZgBQhDgFhHgDg");
	this.shape_139.setTransform(7.501,25.7958);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("ACjAyIgWABQgcAJgggEQgigIgcAHIgnAAQgdgHgmAHQghAFgdgKIgXgBIgyALQgcgHgkAAIgYgGQgmgOgsAMIhVgCQgLgDgLgBIhlAHQguABgtgKQgUgCgTADIhCgCQgegCgaAEQgTAEgYgCQg8gChAABIisgDIgmAHIhIAEQgqgGgugCQgwgCgngFIgOgEQgWAHgcgCIidgFIgXACIiVgNIjZgBQhDgFhHgDQgPgLAlgFQAogIAtACQAvADApgCQAnADAmgDQAjAJAmgIIA+gLICPgBQBDgMBIAIIA6ABQAYgBAGgMQASgOAkABQA3gEApAPIAzgHQA0gIAnALQAgAHAYgGQAUAEAWABQA8AEA6AGQAYAIAagIQAtgNAyAKIAyAHICMgMQAXgIAhAAIAagBQAXAEAcgBIAZgGQAdACAdgEIAqAAIBRAIQAKAAAIgCQAOgGAOgHQAdgBAkALQAeAJAUACQAfACAtgMIAagFIAYAEQAtANAdgBQAUgCAegJQAkgKAeAAIAcANQAIACALABIB9gJQAfAEAfgCIAbAFQAfABAYgFIAYABQAfABAWAIICZAMIAygHQAygKAuANQAbAIAYgIQA1gGA3gEQAVgBATgEQAYAGAfgGQArgNA4AIQAZADANADQAKACAGgBQAogPA1ADQAogCATAQQAHALAWACIA2gBQA1gJAvAMICwADIBCAKQAjAIAhgHQAlACAmgDQAqACAvgEQAtgCAnAIQAiAFgNALQhBADg8AFIiSgDIikAHIgvAKIi+AFQgiAEgagFQgIADgQAAIiNAIQgVgBgQADIhNgGIiAAAIiXgGQgfACgYAAQgQgDgUADIhhACQgUgDgWABQgvAKgwgBIhugGIgWADIhfADQgtgMgnAPIgYAGQgiAAgbAHIgzgLg");
	this.shape_140.setTransform(7.501,25.7958);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgjHAAMQgVgMArgFQAqgHAvABQAuADAqgEQAoACAngCQAnAKArgIIA5gKICVAAQBIgKBLAFIBDADQAagBAGgMQAPgMAeAAQA6gGAtAQQAVgGAZgDQAsgHAjAIQAfAFAZgFQAWAFAZACQBFAFBDAGQAYAGAZgIQAtgOAzALIAxAGIB3gJQAZgKAmABIAeAAQAUAEAXgCIAXgIQAZABAagEIArgBIBOAIQAKAAAHgDQAOgGANgHQAegEAkAMQAdALAWAEQAgAGAugNIAcgGIAXADQAtAMAdADQATABAfgIQAkgKAegCQAOAHAPAGQAKACALAAICCgJQAjAEAjgEIAeADQAlAAAbgFIAUABQAbACAVAIICxANIA0gGQAygLAvANQAeAIAYgJQAtgGAwgEQATgBARgCQAXAHAhgIQAwgQBBAJQAZADAQADQALABAIgCQAmgOAzABQAugDAWASQAIALAUADIAvgBQA2gLAvAPICnADIBJAMQAfAHAegGQAkADAlgDQAsAAAvgEQAtgDAmAJQAeAFgJAJQg3ADgyAFIh3gBIigAIQgdAFgZAGIjeAIQgoADgdgHQgJACgPAAIiRAIQgWgBgRAEIlZgPQgeADgYABQgQgCgSADIhiABQgXgEgZABQgyAKgzAAIh/gHQgNACgMACIhvAEQgxgMgqAQIgXAFQggAAgXAIQgbgGgcgFIgWAAQgZAIgdgCQgfgGgZAFIgngCQghgJgqAJQglAGgggLIgYgBQgYAEgXAGQghgGgmAAIgagHQgkgMgpAMIhGgCQgLgCgKgBIhXAGQgsADgqgLQgRgBgRACIhKgDQgegDgZAFQgUAFgagCQhFgBhGACIi4gFIglAHIhBADQgvgGgygCQgsgCgggGIgNgEQgSAFgXgCIiBgEIgYACQhRgGhTgFIjqABQhOgFhSgDg");
	this.shape_141.setTransform(6.8978,26.0355);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("ACVA1IgWAAQgZAIgdgCQgfgGgZAFIgngCQghgJgqAJQglAGgggLIgYgBIgvAKQghgGgmAAIgagHQgkgMgpAMIhGgCIgVgDIhXAGQgsADgqgLQgRgBgRACIhKgDQgegDgZAFQgUAFgagCQhFgBhGACIi4gFIglAHIhBADQgvgGgygCQgsgCgggGIgNgEQgSAFgXgCIiBgEIgYACIikgLIjqABQhOgFhSgDQgVgMArgFQAqgHAvABQAuADAqgEQAoACAngCQAnAKArgIIA5gKICVAAQBIgKBLAFIBDADQAagBAGgMQAPgMAeAAQA6gGAtAQQAVgGAZgDQAsgHAjAIQAfAFAZgFQAWAFAZACQBFAFBDAGQAYAGAZgIQAtgOAzALIAxAGIB3gJQAZgKAmABIAeAAQAUAEAXgCIAXgIQAZABAagEIArgBIBOAIQAKAAAHgDQAOgGANgHQAegEAkAMQAdALAWAEQAgAGAugNIAcgGIAXADQAtAMAdADQATABAfgIQAkgKAegCQAOAHAPAGQAKACALAAICCgJQAjAEAjgEIAeADQAlAAAbgFIAUABQAbACAVAIICxANIA0gGQAygLAvANQAeAIAYgJQAtgGAwgEQATgBARgCQAXAHAhgIQAwgQBBAJQAZADAQADQALABAIgCQAmgOAzABQAugDAWASQAIALAUADIAvgBQA2gLAvAPICnADIBJAMQAfAHAegGQAkADAlgDQAsAAAvgEQAtgDAmAJQAeAFgJAJQg3ADgyAFIh3gBIigAIQgdAFgZAGIjeAIQgoADgdgHQgJACgPAAIiRAIQgWgBgRAEIlZgPIg2AEQgQgCgSADIhiABQgXgEgZABQgyAKgzAAIh/gHIgZAEIhvAEQgxgMgqAQIgXAFQggAAgXAIQgbgGgcgFg");
	this.shape_142.setTransform(6.8978,26.0355);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgjfAARQgagPAwgEQAsgGAwAAQAvACApgFQAqABApgBQArALAwgIIA0gIICaAAQBNgIBPADIBKADQAeABAEgNQANgKAYgBQA+gHAvAPQARgHAZgDQAlgGAeAFQAfAEAagEQAYAGAcACQBNAFBMAGQAZAFAWgHQAugPAzALIAyAGIBhgIQAbgKArACIAhAAQASADASgCIAUgKQAXAAAWgFIAtAAIBKAGQAKABAGgDQANgHANgHQAegGAlANQAdALAXAHQAiAKAvgOIAegHIAWACQAtAMAbAGQASAEAggIQAlgIAegFQAPAHAQAGQAKACANAAICFgKQAnADAngFIAiABQAqAAAfgGIARACQAXADATAHIDKAPIA2gGQAygMAvANQAhAJAYgLQAlgGApgEQAQAAAQgCQAXAJAhgKQA2gSBKAKQAZACATACQANACAJgDQAkgPAwABQA1gFAZAVQAJAKASAEIAoAAQA3gNAwARICeADIBPANQAaAHAbgEQAkAEAlgEQAtgBAvgFQAtgEAlAKQAZAFgDAIQgvADgoAFIhbAAIibAIQghAGgcAIIj/AJQgtAEgigKQgJACgOgBIiVAIQgXgCgRAFIlOgQQgeACgZADQgOgBgSADIhhAAQgbgFgcACQg2AIg2ACIiQgHQgNABgNADIiAAFQg1gMgsARIgWAFQgfAAgUAJQgcgHgegFIgVAAQgXAHgagBQgbgFgXAEIgngEQgkgLgvAKQgpAIgjgMIgZgCQgWAFgXAFQgkgEgpgBIgbgHQgjgMglAMIg4AAQgKgCgLgBIhHAGQgqAEgogLQgOgCgOABIhUgEQgdgDgYAGQgVAGgcgCQhNAAhNADIjFgHIgjAGIg5ADQg0gFg3gEQgngCgagFIgMgGQgOADgSgCIhlgCIgZADQhYgFhbgFIj6ADQhagEhdgDg");
	this.shape_143.setTransform(6.3397,26.2827);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("ACGA4IgVAAQgXAHgagBQgbgFgXAEIgngEQgkgLgvAKQgpAIgjgMIgZgCIgtAKQgkgEgpgBIgbgHQgjgMglAMIg4AAIgVgDIhHAGQgqAEgogLQgOgCgOABIhUgEQgdgDgYAGQgVAGgcgCQhNAAhNADIjFgHIgjAGIg5ADQg0gFg3gEQgngCgagFIgMgGQgOADgSgCIhlgCIgZADIizgKIj6ADQhagEhdgDQgagPAwgEQAsgGAwAAQAvACApgFQAqABApgBQArALAwgIIA0gIICaAAQBNgIBPADIBKADQAeABAEgNQANgKAYgBQA+gHAvAPQARgHAZgDQAlgGAeAFQAfAEAagEQAYAGAcACICZALQAZAFAWgHQAugPAzALIAyAGIBhgIQAbgKArACIAhAAQASADASgCIAUgKQAXAAAWgFIAtAAIBKAGQAKABAGgDIAagOQAegGAlANQAdALAXAHQAiAKAvgOIAegHIAWACIBIASQASAEAggIQAlgIAegFQAPAHAQAGQAKACANAAICFgKQAnADAngFIAiABQAqAAAfgGIARACQAXADATAHIDKAPIA2gGQAygMAvANQAhAJAYgLQAlgGApgEQAQAAAQgCQAXAJAhgKQA2gSBKAKIAsAEQANACAJgDQAkgPAwABQA1gFAZAVQAJAKASAEIAoAAQA3gNAwARICeADIBPANQAaAHAbgEQAkAEAlgEQAtgBAvgFQAtgEAlAKQAZAFgDAIQgvADgoAFIhbAAIibAIQghAGgcAIIj/AJQgtAEgigKQgJACgOgBIiVAIQgXgCgRAFIlOgQIg3AFQgOgBgSADIhhAAQgbgFgcACQg2AIg2ACIiQgHIgaAEIiAAFQg1gMgsARIgWAFQgfAAgUAJQgcgHgegFg");
	this.shape_144.setTransform(6.3397,26.2827);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Egj3AAVQgfgQA1gFQAugEAxgBQAwACAogIQArACArgBQAvANA1gIIAvgIICgACQBRgHBSAAIBUAFQAgACADgOQALgIASgCQBBgJAzAQQAMgJAYgDQAegFAaACQAeADAbgDQAbAGAeADQBWAFBVAGQAZAEAVgHQAtgPA1ALIAxAGIBMgGQAdgMAwAEIAlABQAOACAOgDIARgMQATgCATgFIAvAAIBGAGQAKAAAFgDQANgHANgHQAegJAmAPQAcAMAZAJQAjAOAwgPIAggIIAVACQAsAKAbALQARAFAigGQAkgIAfgHQAPAIARAFQALABANABICLgLQArADArgHIAkgBQAxAAAhgIIAOAEQATAEASAFIDiARIA3gGQAzgLAwANQAjAIAZgLQAdgGAhgEQAPAAANgBQAXAKAigLQA8gWBSALQAaACAVACQAPABAKgDQAigPAugBQA8gFAbAWQALAKAQAFIAgABQA5gPAxASICUAFIBVAOQAXAGAXgCQAjAEAlgEQAugDAvgFQAugGAkALQAVAGABAGQglADgeAGIjXAJQglAIgfAJIkgALQgyADgmgLQgJAAgNAAIiaAHQgYgCgRAGIlCgTQgfADgYAEQgPAAgQADIhhgBQgegGggACQg5AHg5AEIihgIQgOACgOADIiQAFQg6gLguASIgVAEQgeABgQAKQgdgHgggGIgVAAQgVAFgXABQgXgEgUADIgngGQgogMg0ALQgtAJglgNIgagCQgVAEgWAFQgogDgsgBIgcgIQgigKgiAMIgpAAQgKgBgJgBIg5AGQgoAGglgNQgMgCgLABIhcgFQgegEgWAGQgXAIgegCQhUAChVACIjQgIIgjAGIgxACQg6gFg7gEQgigCgTgGIgLgHQgKACgNgCIhJgBIgaAEQhhgEhhgEIkLAFQhmgEhngEg");
	this.shape_145.setTransform(5.8413,26.5179);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AB3A7IgVAAQgVAFgXABQgXgEgUADIgngGQgogMg0ALQgtAJglgNIgagCIgrAJQgogDgsgBIgcgIQgigKgiAMIgpAAIgTgCIg5AGQgoAGglgNQgMgCgLABIhcgFQgegEgWAGQgXAIgegCIipAEIjQgIIgjAGIgxACQg6gFg7gEQgigCgTgGIgLgHQgKACgNgCIhJgBIgaAEIjCgIIkLAFIjNgIQgfgQA1gFQAugEAxgBQAwACAogIQArACArgBQAvANA1gIIAvgIICgACQBRgHBSAAIBUAFQAgACADgOQALgIASgCQBBgJAzAQQAMgJAYgDQAegFAaACQAeADAbgDQAbAGAeADICrALQAZAEAVgHQAtgPA1ALIAxAGIBMgGQAdgMAwAEIAlABQAOACAOgDIARgMQATgCATgFIAvAAIBGAGQAKAAAFgDIAagOQAegJAmAPQAcAMAZAJQAjAOAwgPIAggIIAVACQAsAKAbALQARAFAigGIBDgPQAPAIARAFIAYACICLgLQArADArgHIAkgBQAxAAAhgIIAOAEIAlAJIDiARIA3gGQAzgLAwANQAjAIAZgLQAdgGAhgEQAPAAANgBQAXAKAigLQA8gWBSALIAvAEQAPABAKgDQAigPAugBQA8gFAbAWQALAKAQAFIAgABQA5gPAxASICUAFIBVAOQAXAGAXgCQAjAEAlgEQAugDAvgFQAugGAkALQAVAGABAGQglADgeAGIjXAJQglAIgfAJIkgALQgyADgmgLIgWAAIiaAHQgYgCgRAGIlCgTQgfADgYAEQgPAAgQADIhhgBQgegGggACQg5AHg5AEIihgIQgOACgOADIiQAFQg6gLguASIgVAEQgeABgQAKQgdgHgggGg");
	this.shape_146.setTransform(5.8413,26.5179);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgkPAAaQglgSA7gEQAwgEAxgCQAxABApgJQAsABAsAAQAzAPA6gJIAqgHICmADQBVgGBWgBIBcAFQAiADADgOQAJgGAMgDQBEgKA2AQQAHgLAYgDQAYgEAUgBQAeABAdgCQAcAIAhAEQBfAFBdAFQAaAEATgHQAugQA1AKIAwAHIA3gFQAggMA0AEIApACQAMABAIgDIAPgNQAQgEAPgFIB0AEQAJABAEgDQANgHANgIQAegLAmAQQAdANAaAMQAlARAwgQIAigJIAUABQAsAKAaAOQAQAIAjgFQAkgHAggJQAPAHASAEQANACANABICPgMQAvADAvgJIAogDQA2AAAlgJIALAEQAPAGAPAEID7ATIA5gGQAzgMAxANQAmAJAZgNQAVgGAagEQAMABAMAAQAWALAkgNQBBgZBaAMQAaACAZACQARAAAKgEQAggOAsgDQBDgGAeAZQALAIAOAHIAaACQA6gRAxAUICLAFIBcAPQASAGAUAAQAjAEAkgEQAvgFAwgGQAugGAjAMQAQAFAFAGQgbADgUAGIi4AKQgnAJgiALIlCANQg4ACgpgNQgKAAgMgBIidAHQgZgCgSAGIh0gHIhBgIIiCgFQgeACgZAGQgOACgPACIhhgCQghgHgjACQg8AHg9AEIizgHQgOACgPADIigAGQg+gLgxATIgVAEQgbAAgNAMQgfgIghgFIgVgBQgTAEgUACQgSgCgSABIgogIQgrgOg5ANQgwALgogQIgbgCQgUAEgVAFQgsgCguAAIgegJQgggKgfANIgbABQgJgBgJgBIgqAGQgmAHgjgOQgJgBgIgBIhlgFQgdgEgVAGQgYAJghgCQhcADhcADIjcgKIgiAGIgpABQg/gFg/gEQgegCgMgHIgKgHQgHAAgHgCIgtAAIgbAFQhpgEhpgDIkbAHQhxgEhygDg");
	this.shape_147.setTransform(5.3275,26.763);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("ABoA/IgVgBQgTAEgUACQgSgCgSABIgogIQgrgOg5ANQgwALgogQIgbgCIgpAJIhagCIgegJQgggKgfANIgbABIgSgCIgqAGQgmAHgjgOIgRgCIhlgFQgdgEgVAGQgYAJghgCIi4AGIjcgKIgiAGIgpABIh+gJQgegCgMgHIgKgHQgHAAgHgCIgtAAIgbAFIjSgHIkbAHIjjgHQglgSA7gEQAwgEAxgCQAxABApgJIBYABQAzAPA6gJIAqgHICmADQBVgGBWgBIBcAFQAiADADgOQAJgGAMgDQBEgKA2AQQAHgLAYgDQAYgEAUgBQAeABAdgCQAcAIAhAEIC8AKQAaAEATgHQAugQA1AKIAwAHIA3gFQAggMA0AEIApACQAMABAIgDIAPgNQAQgEAPgFIB0AEQAJABAEgDIAagPQAegLAmAQIA3AZQAlARAwgQIAigJIAUABQAsAKAaAOQAQAIAjgFQAkgHAggJQAPAHASAEQANACANABICPgMQAvADAvgJIAogDQA2AAAlgJIALAEIAeAKID7ATIA5gGQAzgMAxANQAmAJAZgNQAVgGAagEIAYABQAWALAkgNQBBgZBaAMIAzAEQARAAAKgEQAggOAsgDQBDgGAeAZQALAIAOAHIAaACQA6gRAxAUICLAFIBcAPQASAGAUAAQAjAEAkgEIBfgLQAugGAjAMQAQAFAFAGQgbADgUAGIi4AKQgnAJgiALIlCANQg4ACgpgNIgWgBIidAHQgZgCgSAGIh0gHIhBgIIiCgFQgeACgZAGIgdAEIhhgCQghgHgjACQg8AHg9AEIizgHIgdAFIigAGQg+gLgxATIgVAEQgbAAgNAMQgfgIghgFg");
	this.shape_148.setTransform(5.3275,26.763);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgkoAAfQgpgTBAgFIAbgCIBJgFQAyABAogJIBbABQA3ARA/gKIAlgGIAgAAICLADIAtgDIAjABIArgBIA5gEIBkAGQAlAEACgOIAMgJQBJgLA4AQIACgHQAAgFAZgDIAggHIA7gCQAeAJAkAEIBOAEIA+ADIBCAEQAaACARgGQAugQA2AKIAwAHIAigEQAigNA5AGIAsACQAKAAADgDIAMgQIAZgKIAzgBIA/AEQAJABADgDIAZgQQAegNAnARIA3AcQAnAWAxgRIAkgKIASgBQAtAKAZASQAPAKAkgEQAlgGAggMQAPAHATAFIAcACIAhgEIBNgIIAlgBQAzADAzgKIArgFQA8gBAogJIAIAEQALAHAOAEIAeADIAlADICRALIA/ADIA7gGQAzgMAyAMQAoAKAZgOQAOgHASgDIAUACQAWAMAlgOQBHgcBiANIA2ADQATAAAMgFQAdgOAqgEQBKgIAgAcIAZAPIASAEQA8gUAyAWIAbACIBmAEIAjAGIA/AKQAOAFARACQAiAEAkgEIA1gHIAsgFQAugIAiANIAMAGIAJAEQgSADgKAHIgJADIhsAHIgjABQgrAKglAMIgUACIkYALIg2ACQg+ACgtgPIgVgCIhYAFIgoACIgiAAQgagDgSAHIgvgCIgvgDIgfgCIgxgKIgRgBIhMgEIggAAQgfACgZAIIgbAEIgaAAIgtAAIgagCQgkgIgmACIgtADIhTAJIgZAAIg9gEIgfgCIgagCIg1AAQgPACgPAEIg+AEIhWAEIgegBQhCgLgzAUIgUADQgaAAgJAOQgggJgkgGIgUgBIgiAGIgdgBIgogKQgvgPg9AOQg1AMgrgQIgbgDIgnAIIhhgBIgfgJQgfgJgbANIgNACIgRgBIgbAFQgkAJgggPIgMgDIhKgEIgkgCQgdgFgUAIQgZAJgjgBIidAHIgqABIhtgFIgtgCIgsgEIgigBIggAFIgiABIgbgCIhtgIQgZgCgGgHIgJgIIgFgEIgQACIgNADIgPADIjQgHIgRABIg3AEIgcAAIgnAAIiyAFIjjgGg");
	this.shape_149.setTransform(4.8376,26.9886);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("ABYBCIgUgBIgiAGIgdgBIgogKQgvgPg9AOQg1AMgrgQIgbgDIgnAIIhhgBIgfgJQgfgJgbANIgNACIgRgBIgbAFQgkAJgggPIgMgDIhKgEIgkgCQgdgFgUAIQgZAJgjgBIidAHIgqABIhtgFIgtgCIgsgEIgigBIggAFIgiABIgbgCIhtgIQgZgCgGgHIgJgIIgFgEIgQACIgNADIgPADIjQgHIgRABIg3AEIgcAAIgnAAIiyAFIjjgGIgXgBQgpgTBAgFIAbgCIBJgFQAyABAogJIBbABQA3ARA/gKIAlgGIAgAAICLADIAtgDIAjABIArgBIA5gEIBkAGQAlAEACgOIAMgJQBJgLA4AQIACgHQAAgFAZgDIAggHIA7gCQAeAJAkAEIBOAEIA+ADIBCAEQAaACARgGQAugQA2AKIAwAHIAigEQAigNA5AGIAsACQAKAAADgDIAMgQIAZgKIAzgBIA/AEQAJABADgDIAZgQQAegNAnARIA3AcQAnAWAxgRIAkgKIASgBQAtAKAZASQAPAKAkgEQAlgGAggMQAPAHATAFIAcACIAhgEIBNgIIAlgBQAzADAzgKIArgFQA8gBAogJIAIAEQALAHAOAEIAeADIAlADICRALIA/ADIA7gGQAzgMAyAMQAoAKAZgOQAOgHASgDIAUACQAWAMAlgOQBHgcBiANIA2ADQATAAAMgFQAdgOAqgEQBKgIAgAcIAZAPIASAEQA8gUAyAWIAbACIBmAEIAjAGIA/AKQAOAFARACQAiAEAkgEIA1gHIAsgFQAugIAiANIAMAGIAJAEQgSADgKAHIgJADIhsAHIgjABQgrAKglAMIgUACIkYALIg2ACQg+ACgtgPIgVgCIhYAFIgoACIgiAAQgagDgSAHIgvgCIgvgDIgfgCIgxgKIgRgBIhMgEIggAAQgfACgZAIIgbAEIgaAAIgtAAIgagCQgkgIgmACIgtADIhTAJIgZAAIg9gEIgfgCIgagCIg1AAQgPACgPAEIg+AEIhWAEIgegBQhCgLgzAUIgUADQgaAAgJAOQgggJgkgGg");
	this.shape_150.setTransform(4.8376,26.9886);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EglSAAAIAJgEIANgGQAigNAvAIIArAFIA3AHQAkAEAigEQARgCAOgFIBAgKIAkgHIBmgDIAdgCQAxgWA9AUIATgEIAZgQQAggbBLAHQAqAFAeAOQAMAFATAAIA2gEQBkgNBHAcQAmAPAWgMIAUgDQATAEAOAHQAYAOApgKQAzgMA0AMIA7AGIBAgDICSgMIAlgCIAfgEQAOgDALgHIAIgFQApAKA8ABIAsAEQAzALA0gDIAlABIBOAIIAiAEIAcgCQATgFAPgHQAhAMAlAGQAkAEAQgKQAZgTAtgJIATABIAkAKQAyARAngWIA4gdQAngRAfAOIAZAPQADAEAJgBIBAgEIAzAAIAZALIANAQQADADAJAAIAtgDQA6gGAiAOIAiAEIAxgHQA2gLAvARQARAGAagCIBDgEIA/gDIBPgEQAkgEAfgJIA7ACIAhAHQAZADAAAFIABAHQA6gQBJALIAMAJQACAOAlgEIBmgGIA5AEIAsABIAjgBIAuADICMgDIAgAAIAmAGQBAAKA4gRIBbgBQApAJAygBIBKAFIAbACQBBAFgqATIgXABIjlAGIi0gFIgnAAIgcAAIg4gEIgSgBIjSAHIgPgCIgNgEIgRgCIgFAEIgJAJQgGAHgZABIhvAIIgaADIgigBIghgFIgiABIgtAEIgtACIhvAEIgqgBIifgHQgkACgYgKQgVgIgdAFIgkACIhLAFIgMACQghAPgkgJIgcgFIgRABIgMgCQgcgNggAJIgfAKIhiAAIgngHIgcACQgrARg1gMQg+gPgvAPIgpALIgeABIgigGIgUABQgkAGghAIQgJgOgbAAIgUgCQgzgVhDALIgeABIhXgDIg+gFQgQgEgPgCIg1AAIgbACIgfADIg+ADIgZAAIhUgJIgtgDQgngCgkAIIgaADIgtAAIgbAAIgcgFQgZgIgfgCIghAAIhMAEIgRABIgyAKIgfACIgwAEIgvABQgTgHgaADIgiAAIgpgCIhZgFIgVACQgtAPg/gBIg2gDIkcgKIgUgDQglgMgsgKIgkgBIhtgHIgJgDQgJgHgTgDg");
	this.shape_151.setTransform(4.4205,27.3262);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AjBBDIgUgCQgzgVhDALIgeABIhXgDIg+gFQgQgEgPgCIg1AAIgbACIgfADIg+ADIgZAAIhUgJIgtgDQgngCgkAIIgaADIgtAAIgbAAIgcgFQgZgIgfgCIghAAIhMAEIgRABIgyAKIgfACIgwAEIgvABQgTgHgaADIgiAAIgpgCIhZgFIgVACQgtAPg/gBIg2gDIkcgKIgUgDQglgMgsgKIgkgBIhtgHIgJgDQgJgHgTgDIAJgEIANgGQAigNAvAIIArAFIA3AHQAkAEAigEQARgCAOgFIBAgKIAkgHIBmgDIAdgCQAxgWA9AUIATgEIAZgQQAggbBLAHQAqAFAeAOQAMAFATAAIA2gEQBkgNBHAcQAmAPAWgMIAUgDQATAEAOAHQAYAOApgKQAzgMA0AMIA7AGIBAgDICSgMIAlgCIAfgEQAOgDALgHIAIgFQApAKA8ABIAsAEQAzALA0gDIAlABIBOAIIAiAEIAcgCQATgFAPgHQAhAMAlAGQAkAEAQgKQAZgTAtgJIATABIAkAKQAyARAngWIA4gdQAngRAfAOIAZAPQADAEAJgBIBAgEIAzAAIAZALIANAQQADADAJAAIAtgDQA6gGAiAOIAiAEIAxgHQA2gLAvARQARAGAagCIBDgEIA/gDIBPgEQAkgEAfgJIA7ACIAhAHQAZADAAAFIABAHQA6gQBJALIAMAJQACAOAlgEIBmgGIA5AEIAsABIAjgBIAuADICMgDIAgAAIAmAGQBAAKA4gRIBbgBQApAJAygBIBKAFIAbACQBBAFgqATIgXABIjlAGIi0gFIgnAAIgcAAIg4gEIgSgBIjSAHIgPgCIgNgEIgRgCIgFAEIgJAJQgGAHgZABIhvAIIgaADIgigBIghgFIgiABIgtAEIgtACIhvAEIgqgBIifgHQgkACgYgKQgVgIgdAFIgkACIhLAFIgMACQghAPgkgJIgcgFIgRABIgMgCQgcgNggAJIgfAKIhiAAIgngHIgcACQgrARg1gMQg+gPgvAPIgpALIgeABIgigGIgUABQgkAGghAIQgJgOgbAAg");
	this.shape_152.setTransform(4.4205,27.3262);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EglbAAfQgqgTBCgFIAagCIBMgFQAyABApgJIBdABQA5ARBAgKIAmgGIAhgBICOAEIAtgDIAkABIAtgCIA6gDIBmAGQAmAEABgOIANgJQBKgMA6ARIACgHQAAgFAZgEIAhgHIA8gBQAfAIAkAFIBRAEIA/ADIBDAEQAbACARgGQAvgRA4ALIAwAHIAjgEQAjgOA6AGIAtADQAKAAADgEIANgQIAZgKIA0gBIBAAEQAKABADgDIAZgQQAfgNAoARIA4AdQAoAVAygQIAkgLIATgBQAuAKAaASQAPALAkgEQAmgHAhgLQAQAHATAEIAcADIAjgEIBPgIIAlgBQA0ADA0gLIAsgEQA+gBAogKIAIAEQALAIAOADIAgAEIAmACICUAMIBAADIA8gGQA0gMA0AMQApAKAZgOQAOgHATgEIAUADQAWAMAmgPQBJgcBkANIA3AEQATAAANgGQAegOAqgEQBMgIAhAcIAZAQIATADQA9gUAyAXIAdACIBoADIAkAGIBAALQAPAFARACQAiAEAlgEIA3gHIAsgFQAvgIAjANIAMAGIAKAEQgTADgKAHIgJAEIhuAHIgkAAQgtAKglAMIgVADIkeALIg3ACQg/ACgugQIgWgCIhZAGIgpABIgjAAQgbgCgTAHIgvgCIgxgDIgfgCIgygLIgSgBIhNgEIghAAQgfADgaAHIgcAFIgbAAIgtAAIgbgDQgkgIgoACIgtAEIhVAIIgZAAIg/gDIgggDIgagCIg2AAQgQACgPAFIg/AEIhYAEIgegBQhEgMg0AVIgUADQgbAAgKAOQghgJgkgGIgUgBIgjAGIgegBIgpgKQgvgQg/APQg2AMgsgQIgcgDIgoAIIhjgBIgfgKQgggIgcANIgNACIgRgBIgcAFQgkAJghgPIgNgDIhMgEIgkgDQgegEgUAIQgZAJgkgBIihAHIgqAAIhwgEIgugCIgtgEIgjgBIghAFIgjABIgagCIhwgIQgZgCgHgHIgJgJIgFgDIgRABIgNAEIgPACIjVgHIgRABIg5AFIgcAAIgnAAIi3AEIjngGg");
	this.shape_153.setTransform(3.7926,27.7262);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("ABaBDIgUgBIgjAGIgegBIgpgKQgvgQg/APQg2AMgsgQIgcgDIgoAIIhjgBIgfgKQgggIgcANIgNACIgRgBIgcAFQgkAJghgPIgNgDIhMgEIgkgDQgegEgUAIQgZAJgkgBIihAHIgqAAIhwgEIgugCIgtgEIgjgBIghAFIgjABIgagCIhwgIQgZgCgHgHIgJgJIgFgDIgRABIgNAEIgPACIjVgHIgRABIg5AFIgcAAIgnAAIi3AEIjngGIgYgBQgqgTBCgFIAagCIBMgFQAyABApgJIBdABQA5ARBAgKIAmgGIAhgBICOAEIAtgDIAkABIAtgCIA6gDIBmAGQAmAEABgOIANgJQBKgMA6ARIACgHQAAgFAZgEIAhgHIA8gBQAfAIAkAFIBRAEIA/ADIBDAEQAbACARgGQAvgRA4ALIAwAHIAjgEQAjgOA6AGIAtADQAKAAADgEIANgQIAZgKIA0gBIBAAEQAKABADgDIAZgQQAfgNAoARIA4AdQAoAVAygQIAkgLIATgBQAuAKAaASQAPALAkgEQAmgHAhgLQAQAHATAEIAcADIAjgEIBPgIIAlgBQA0ADA0gLIAsgEQA+gBAogKIAIAEQALAIAOADIAgAEIAmACICUAMIBAADIA8gGQA0gMA0AMQApAKAZgOQAOgHATgEIAUADQAWAMAmgPQBJgcBkANIA3AEQATAAANgGQAegOAqgEQBMgIAhAcIAZAQIATADQA9gUAyAXIAdACIBoADIAkAGIBAALQAPAFARACQAiAEAlgEIA3gHIAsgFQAvgIAjANIAMAGIAKAEQgTADgKAHIgJAEIhuAHIgkAAQgtAKglAMIgVADIkeALIg3ACQg/ACgugQIgWgCIhZAGIgpABIgjAAQgbgCgTAHIgvgCIgxgDIgfgCIgygLIgSgBIhNgEIghAAQgfADgaAHIgcAFIgbAAIgtAAIgbgDQgkgIgoACIgtAEIhVAIIgZAAIg/gDIgggDIgagCIg2AAQgQACgPAFIg/AEIhYAEIgegBQhEgMg0AVIgUADQgbAAgKAOQghgJgkgGg");
	this.shape_154.setTransform(3.7926,27.7262);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Egl/AAGQgDgGAGgGQAKgHAegCQAVgBAWABIA8ACQAVABAUABQAbAAAYgEIA1gEQATgDAWgBQALABAMABQATACASgDQAfABAfgEIC4gEQAJABALgDIAbgIQAugQBCADQAcABAZAEQALACALADQAPADASAAIAuAAQAFAAAFAAQAXAAAKgHQAHgDAHgCQBFgGA3ARQAEACAEABQACgBACgCQAHAAASgCQAMgCAKgEIALgCIAKAAQASACAQADQAIACAHAAQAXAHAdgCQAIAAAIAAQAtgDAsAHIA9AEIA/AAQAZAAAVgEQAxgLA2AEIAxACIAXgDIALgCQAIgDAIgDQAEgBAEgCQAeABAoADQAQABAQABIAPABQAIAAAEgCIAPgGQABAAABAAQANgBAOgCQAlADAlgBIArADQAIABAEgCIAcgGQAggFAkAIQACABACAAIAXAFQARABAQABQACABADABQAeANAjAAQAOAAANgCQAOgDALgFQAFgCAFgCQAJgDAKgCQAXgBAXABQAJADAJACQAFACAFACQALAFAPADQAMACAMAAQAlAAAfgOQACgBACAAQAQgBARgCIAXgEQACAAACgBQAkgJAgAFIAcAHQAFABAIAAIApgEQAMAAAMAAQAaAAAagBQAOACANABIAQAHQAFABAIAAIAMgBQASgBARgBQAngDAdgBQAFACAEABQAIADAHADQAGACAGABIAWACIAxgCQA3gDAyAKIBsAEIA8gEQAtgHAsACQAJAAAIABQAcABAYgGQAIgBAHgBQAPgDATgCIALABIAJABQALAFAOABQAUABAIAAQABABABAAQABABABAAQA6gTBLAHQAHADAHACQAGAGAQACQAJAAAKAAIAmAAQARgBAOgDQAQgEARgDQAUgBAVgBQBDgDAtAPIAbAIIAUACQA8gKA2ALIBRAEQAbACAaABQAlACAigCIAfACQAPADARAAQAPACAPAAQAVADAWgBQAXAAAYgCIA1gBQAbgBAXACQAUABANAFQAPAFgDAHQgFABgFACQgLACgKADIgKABIiTAGQgoAFglAGQgDABgDAAIluAEQg8ABgzgGIhogCIgSAGQgLAEgVABIghACQgYAAgVAEIg+ABIhCgFIgCAAIgygEIiAAAQgeACgaAFIgdACIhkgEQgmgEgoAAIgGAAQghADgdgEIiwAEQgiAHglgFIgRgDQgGAAgFAAQgKABgIACQgCAAAAAAIgLAAQgegGggAFIghAGIhMABQgMgBgLgBQgVgDgTgBQgPABgOACQgPAFgOAEQgKABgLABQgYAAgQAFQgCgBgCAAQgigIghgCQgKAAgKAAQgMACgMADIgoAFIgDAAIgegDIgKgCQgMgDgMgCQgKAAgLAAQggADgiAHQgCABgDAAQgOgFgXAAQgKAAgLgCQgRgEgSgFQgOgCgOgBQgUACgVACQgIABgIABIhUgCIghgGQgfgFgeAGIgEABIgIAAIgRgDIgHAAIgWADQgkAFgigHIgNgBIhggBIgRgCQgcgDgYADQgcADgigCIhoAGIhmgBQgbgFgfgCIiBABIh4AJIg7gBQgVgEgZABIgjgDQgUgBgMgEIgQgGIhoACQgyAHg7gCIltgEQgGgBgFAAQgjgGgmgFIiUgGIgKgCQgLgDgPgCg");
	this.shape_155.setTransform(3.35,29.1107);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AjDA5IgVgCIgjgJIgdgDIgpAEIgQACIhUgCIghgGQgegFgfAGIgEABIgIAAIgRgDIgHAAIgWADQgkAFgigHIgNgBIhggBIgRgCQgcgDgYADQgcADghgCIhpAGIhlgBQgbgFgggCIiAABIh4AJIg8gBQgVgEgZABIgjgDQgUgBgMgEIgQgGIhoACQgyAHg7gCIltgEIgLgBQgjgGgmgFIiUgGIgKgCQgLgDgOgCIgCAAQgDgGAGgGQAKgHAegCQAVgBAWABIA8ACIApACQAbAAAYgEIA1gEQATgDAWgBIAXACQATACASgDQAfABAfgEIC4gEQAJABAMgDIAbgIQAtgQBCADQAcABAZAEIAWAFQAPADASAAIAuAAIAKAAQAXAAAKgHIAOgFQBFgGA3ARIAIADIAFgDIAYgCQAMgCAKgEIALgCIAKAAIAiAFIAQACQAWAHAdgCIAQAAQAtgDAsAHIA9AEIBAAAQAZAAAUgEQAygLA1AEIAyACIAWgDIAMgCIAPgGIAIgDQAeABAoADIAhACIAOABQAIAAAFgCIAOgGIADAAIAagDQAlADAmgBIAqADQAIABAFgCIAbgGQAggFAkAIIAEABIAXAFIAhACIAFACQAeANAjAAQAOAAANgCQAOgDAMgFIAKgEIASgFQAXgBAXABIASAFIAKAEQALAFAPADQAMACANAAQAkAAAfgOIAEgBIAhgDIAXgEIAFgBQAjgJAgAFIAcAHQAFABAJAAIAogEIAYAAQAaAAAbgBIAbADIAPAHQAFABAJAAIALgBIAjgCQAngDAegBIAIADIAPAGIAMADIAWACIAygCQA2gDAyAKIBsAEIA9gEQAsgHAsACIARABQAcABAYgGIAPgCQAPgDATgCIALABIAJABQALAFAOABQAUABAIAAIACABIABABQA7gTBKAHIAPAFQAHAGAPACIATAAIAmAAQARgBAOgDIAigHIAogCQBDgDAtAPIAcAIIAUACQA7gKA2ALIBSAEQAaACAaABQAlACAigCIAfACQAPADARAAQAOACAQAAQAVADAVgBIAwgCIA2gBQAZgBAYACQAUABANAFQAOAFgDAHIgJADQgLACgKADIgKABIiUAGIhMALIgGABIlvAEQg7ABgzgGIhpgCIgRAGQgLAEgVABIghACQgYAAgVAEIg+ABIhCgFIgCAAIgygEIiAAAQgeACgaAFIgdACIhkgEQgmgEgnAAIgHAAQghADgdgEIiwAEQgiAHglgFIgQgDIgMAAIgSADIgDAAIgKAAQgegGggAFIggAGIhNABIgXgCQgUgDgUgBIgdADIgcAJIgWACQgXAAgRAFIgDgBQgjgIghgCIgUAAIgYAFIgoAFIgDAAIgegDIgKgCIgYgFIgUAAQggADgiAHIgGABQgOgFgWAAg");
	this.shape_156.setTransform(3.35,29.1107);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EgmfAAAIAJgEIANgHQAkgNAwAIIAtAFIA4AHQAlAFAjgFIAhgHQAcgJAlgBQAUgBARgGIBqgDIAdgCIBygDQAHACANgFIAZgQQAigdBNAIQAsAFAeAOQANAFATAAIA5gDQBmgNBKAcQAnAPAWgMIAVgDQAUAEAOAHQAaAOAqgKQA1gMA1AMIA9AGIBCgDICXgMIAmgCIAggEIAagLIAIgEQAqAKA/ABIAtAEQA1ALA1gDIAmABIBRAIIAjAEIAdgCQATgFAQgHQAiAMAnAGQAkAEARgKQAZgTAvgKIAUABIAlALQAzARAogXIA6gdQAogRAgAOIAaAQQADADAKgBIBCgEIA1ABIAaAKIANAQQADAEAJAAIAvgDQA7gGAkAOIAjAEIAygHQA4gLAwARIAtAEIBGgEIBAgDIBSgEIBFgOIA9ACIAiAHQAZAEAAAFIACAHQA7gRBMAMIANAJQABAPAngEIBogHIA8AEIAtACIAlgBIAuACICRgDIAiABIAmAFQBCALA6gSIBfgBQAqAKAzgBIBNAEIAcADQBDAEgrAUIgYABIjtAGIi6gEIgoAAIgdAAIg6gFIgSgBIjZAHIgQgCIgMgEIgSgCIgFAEIgKAJQgGAHgaACIhyAIIgbACIgkAAIghgGIgkABIguAFIgvABIhyAFIgrgBIikgHQglACgagKIgzgEIglADIhNAEIgNADQgiAPglgJIgdgFIgSABIgMgCQgdgNghAJIggAJIhlABIgogIIgdADQgtARg3gNQhAgPgwAQIgrALIgeABIgjgGIgVAAIhHAQQgKgPgbAAIgVgCQg1gWhFAMIgfABIhagEIhAgEIgggGIg3AAIgbABIggADIhAAEIgaAAIhXgJIgugEIhOAGIgbADIguAAIgcAAIgdgEQgZgIghgDIghAAIhPAEIgSABIgzALIggACIgyADIgwACQgUgHgbADIgjAAIgqgCIhcgGIgWACQgvAQhAgCIg4gCIklgLIgVgDQgmgMgtgKIglgBIhxgHIgJgDQgKgHgTgDg");
	this.shape_157.setTransform(2.5024,28.5512);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AjHBEIgVgCQg1gWhFAMIgfABIhagEIhAgEIgggGIg3AAIgbABIggADIhAAEIgaAAIhXgJIgugEIhOAGIgbADIguAAIgcAAIgdgEQgZgIghgDIghAAIhPAEIgSABIgzALIggACIgyADIgwACQgUgHgbADIgjAAIgqgCIhcgGIgWACQgvAQhAgCIg4gCIklgLIgVgDQgmgMgtgKIglgBIhxgHIgJgDQgKgHgTgDIAJgEIANgHQAkgNAwAIIAtAFIA4AHQAlAFAjgFIAhgHQAcgJAlgBQAUgBARgGIBqgDIAdgCIBygDQAHACANgFIAZgQQAigdBNAIQAsAFAeAOQANAFATAAIA5gDQBmgNBKAcQAnAPAWgMIAVgDQAUAEAOAHQAaAOAqgKQA1gMA1AMIA9AGIBCgDICXgMIAmgCIAggEIAagLIAIgEQAqAKA/ABIAtAEQA1ALA1gDIAmABIBRAIIAjAEIAdgCQATgFAQgHQAiAMAnAGQAkAEARgKQAZgTAvgKIAUABIAlALQAzARAogXIA6gdQAogRAgAOIAaAQQADADAKgBIBCgEIA1ABIAaAKIANAQQADAEAJAAIAvgDQA7gGAkAOIAjAEIAygHQA4gLAwARIAtAEIBGgEIBAgDIBSgEIBFgOIA9ACIAiAHQAZAEAAAFIACAHQA7gRBMAMIANAJQABAPAngEIBogHIA8AEIAtACIAlgBIAuACICRgDIAiABIAmAFQBCALA6gSIBfgBQAqAKAzgBIBNAEIAcADQBDAEgrAUIgYABIjtAGIi6gEIgoAAIgdAAIg6gFIgSgBIjZAHIgQgCIgMgEIgSgCIgFAEIgKAJQgGAHgaACIhyAIIgbACIgkAAIghgGIgkABIguAFIgvABIhyAFIgrgBIikgHQglACgagKIgzgEIglADIhNAEIgNADQgiAPglgJIgdgFIgSABIgMgCQgdgNghAJIggAJIhlABIgogIIgdADQgtARg3gNQhAgPgwAQIgrALIgeABIgjgGIgVAAIhHAQQgKgPgbAAg");
	this.shape_158.setTransform(2.5024,28.5512);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("ABdBEIgVgBIgkAGIgfgBIgqgKQgxgQhBAPQg3AMgugRIgdgCIgpAIIhmgBIgggKQghgJgdANIgNACIgSgBIgdAGQgmAJgigQIgNgCIhzgHQgfgFgVAIQgaAKglgCIjSAIIj1gLIhGAGIiPgLQgagCgGgHIgKgJIgFgDIgSABIgNAEIgQADIjtgHIk8AJIkIgHQgrgTBEgFIBpgHQA0ABArgKIBfABQA7ASBCgLIAngFIC1ACIC+gHIBpAHQAnAEACgPIANgJQBMgMA8ARIACgHQAAgFAagEIAigHIA+gCQAgAJAlAFIDaALQAcACARgGQAxgRA5AKIAyAIIAkgEQAkgOA8AGIAvADQAKAAADgEIANgQIAagLIA1gBIBDAFQAKABADgEIAagQQAggNApARIA7AdQAoAXA0gRIAlgLIAUgBQAwAKAaATQAQAKAlgEQAngGAigMQAQAHAUAFIAdACICcgNQA2ACA1gKIAugFQA/gBAqgJIAIAEQAMAHAOAEIEjAVIA+gGQA1gNA2ANQAqAKAagPQAPgHATgDIAVACQAXANAngPQBLgdBoAOIA4ADQAUAAANgFQAfgPAsgEQBOgIAiAdIAaAQIATADQA/gUA0AXICJAFIBoARQAOAGASABQAkAFAlgFIBngMQAwgIAkANIAXALQgUADgJAHIgKADIiXAIQguAKgnANIgVACIlgAOQhBACgvgQIgXgCIiqAHQgcgDgUAHIiDgHIg0gLIiEgFQggADgaAIIgdAEIhLAAIgbgCQgmgIgoABIiHANIjOgIQgRACgQAEIicAIIgfgBQhFgLg2AVIgVADQgcAAgJAOQgjgJglgGg");
	this.shape_159.setTransform(2.1765,28.9512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},6).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.8386,scaleY:1.2948,x:24.35,y:12.35}}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.instance_1,p:{scaleX:2.7108,scaleY:1.6013,x:10.7,y:22.6}}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_159}]},1).wait(1));

	// Layer_3
	this.instance_2 = new lib.shape5copy("synched",0);
	this.instance_2.setTransform(308.05,-3.45,1,0.6564);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:2.5475,scaleY:1.9946,x:462.85,y:9.75},65).to({scaleX:2.6428,scaleY:2.0769,x:492.4,y:14.6,alpha:0},8).wait(1));

	// Layer_4
	this.instance_3 = new lib.shape10("synched",0);
	this.instance_3.setTransform(-1.15,57.15,1,1.5882);
	this.instance_3._off = true;

	this.instance_4 = new lib.shape12("synched",0);
	this.instance_4.setTransform(-161,-4.05,0.9766,0.5737);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({scaleY:1,y:59.15},4).to({scaleY:0.7647,alpha:0},11).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({scaleX:0.9989,scaleY:0.7457,x:-163.05,y:-3.3,alpha:0.3008},3).to({scaleX:1.0508,scaleY:1.1473,x:-167.9,y:-1.8,alpha:1},7).to({scaleX:1.0589,x:-177.45,y:1.5,alpha:0},16).wait(1));

	// Layer_5
	this.instance_5 = new lib.shape4("synched",0);
	this.instance_5.setTransform(-384,-272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74));

	// Layer_6
	this.instance_6 = new lib.shape9copy2("synched",0);
	this.instance_6.setTransform(0.95,44.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({x:1.95,y:70.3},7).to({y:57.3,alpha:0},18).to({_off:true},1).wait(34));

	// Layer_7
	this.instance_7 = new lib.shape11copy("synched",0);
	this.instance_7.setTransform(3.4,69.95);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({_off:false},0).to({x:6.1,y:68.3,alpha:0.9492},17).to({x:6.2,y:68.2,alpha:0.8984},1).to({x:6.55,y:68.05,alpha:0.75},3).to({x:6.65,y:67.95,alpha:0.6992},1).to({x:6.85,y:67.85,alpha:0.6016},2).to({x:6.95,y:67.75,alpha:0.5508},1).to({x:7.2,y:67.65,alpha:0.4492},2).to({x:7.3,y:67.55,alpha:0.3984},1).to({x:7.6,y:67.4,alpha:0.25},3).to({x:7.7,y:67.3,alpha:0.1992},1).to({x:7.95,y:67.2,alpha:0.1016},2).to({x:8.05,y:67.1,alpha:0.0508},1).to({x:6.4,y:69.95,alpha:0},1).to({_off:true},1).wait(14));

	// Layer_8
	this.instance_8 = new lib.shape3copy("synched",0);
	this.instance_8.setTransform(-384,-272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74));

	// Layer_9
	this.instance_9 = new lib.shape2copy2("synched",0);
	this.instance_9.setTransform(0.95,-124,1,1.1825);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.8,-422.4,1057.3,562.9);


(lib.sprite330 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"stp":0,"tr":1,"fl":96};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		playSound("levelWin");
	}
	this.frame_95 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		playSound("failSound");
	}
	this.frame_127 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(93).call(this.frame_95).wait(1).call(this.frame_96).wait(31).call(this.frame_127).wait(1));

	// Layer_2
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-0.15,11.8,0.5,0.5,0,0,0,29.4,20.1);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(-0.1,4.45,0.5,0.5,0,0,0,25.6,23.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:29,regY:19.8,scaleX:0.5875,scaleY:0.5875,x:-0.35,y:11.65},0).wait(1).to({scaleX:0.675,scaleY:0.675,x:-0.4,y:11.6},0).wait(1).to({scaleX:0.7625,scaleY:0.7625,x:-0.45},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.9375,scaleY:0.9375,x:-0.5,y:11.55},0).wait(1).to({scaleX:1.025,scaleY:1.025,x:-0.55,y:11.5},0).wait(1).to({scaleX:1.1125,scaleY:1.1125,x:-0.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:11.45},0).wait(86).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).wait(1).to({regX:24,regY:22.6,scaleX:0.5778,scaleY:0.5778,x:-1,y:4.65},0).wait(1).to({scaleX:0.6556,scaleY:0.6556,x:-1.1,y:5.15},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:-1.25,y:5.6},0).wait(1).to({scaleX:0.8111,scaleY:0.8111,x:-1.4,y:6.15},0).wait(1).to({scaleX:0.8889,scaleY:0.8889,x:-1.5,y:6.6},0).wait(1).to({scaleX:0.9667,scaleY:0.9667,x:-1.6,y:7.1},0).wait(1).to({scaleX:1.0444,scaleY:1.0444,x:-1.75,y:7.6},0).wait(1).to({scaleX:1.1222,scaleY:1.1222,x:-1.85,y:8.05},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-2,y:8.55},0).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-19,70.4,55.3);


(lib.sprite110 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.shape107copy("synched",0);

	this.instance_1 = new lib.shape108copy("synched",0);

	this.instance_2 = new lib.shape109copy("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-19.1,88,25.5);


(lib.sprite103 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shape102("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite103, new cjs.Rectangle(-40.9,-11.7,82.3,15.7), null);


(lib.sprite57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shape56("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite57, new cjs.Rectangle(-10.2,-4.7,19.299999999999997,10.8), null);


(lib.sprite53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shape52("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite53, new cjs.Rectangle(-36.2,-10.6,72.4,14.399999999999999), null);


(lib.sprite50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shape49("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite50, new cjs.Rectangle(-35.8,-6.7,72.4,13.9), null);


(lib.Symbol3copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"go":2,error:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(11).call(this.frame_29).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhrA3QgXAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAXAAIDXAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAg");
	this.shape.setTransform(0,-0.025);

	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-0.05,0.05);
	this.instance._off = true;

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(-0.05,0.05);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1.11,scaleY:1.11},5).to({scaleX:1,scaleY:1,x:0,y:0},4).to({scaleX:1.05,scaleY:1.05},4).to({scaleX:1,scaleY:1,x:-0.05,y:0.05},3).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},1).to({scaleX:1.07,scaleY:1.07},5).to({scaleX:1,scaleY:1},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-6,36.2,12.2);


(lib.Symbol2copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1_1("synched",0);
	this.instance.setTransform(10.85,-1.45);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(5.85,-6.45);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3_1("synched",0);
	this.instance_2.setTransform(15.85,-6.45);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(10.85,-1.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:5.85,y:-6.45},8).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},8).to({_off:true,x:15.85},6).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},6).to({_off:true,x:10.85,y:-1.45},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-11.5,20.099999999999998,15.1);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer_4
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(0,-91.5,0.27,0.27,0,0,0,0,-0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-183.5},18).wait(1));

	// Layer_2
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AFZB2QguCHh+BEQh9BEiJgjQiKgkhOh3QhOh3AYiLQAYiNBwhXQBxhYCMAMQCOAMBgBpQBhBpAACNIltAAg");
	this.shape_36.setTransform(-0.047,-0.0027);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0033").s().p("AhZFiQiKgkhOh3QhOh3AYiLQAYiNBwhXQBxhYCMAMQCOAMBgBpQBhBpAACNIltAAIFZB2QguCHh+BEQhSAshYAAQgtAAgvgLg");
	this.shape_37.setTransform(-0.047,-0.0027);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEgDfQhTBriCAbQiCAch2hAQh1hAgxh9Qgxh9Ash9QAsh+BzhFQBzhECCAWQCEAWBWBmQBXBnAACEIltAAg");
	this.shape_38.setTransform(-0.0465,-0.0292);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0033").s().p("AitFBQh1hAgxh9Qgxh9Ash9QAsh+BzhFQBzhECCAWQCEAWBWBmQBXBnAACEIltAAIEgDfQhTBriCAbQgnAJglAAQhZAAhTgtg");
	this.shape_39.setTransform(-0.0465,-0.0292);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("ADHExQh6BQiNgaQiOgahWh0QhXh1ARiOQASiPBvheQBvhdCPAJQCRAJBkBpQBjBqAACPIltAAg");
	this.shape_40.setTransform(-0.0396,-0.0009);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0033").s().p("AhAFnQiOgahWh0QhXh1ARiOQASiPBvheQBvhdCPAJQCRAJBkBpQBjBqAACPIltAAIDHExQhcA8hoAAQggAAgjgGg");
	this.shape_41.setTransform(-0.0396,-0.0009);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABZFiQiAAhh5g8Qh5g8g1h9Qg2h9Aqh/QApiAByhHQBzhICEAVQCGAVBXBnQBZBmAACGIltAAg");
	this.shape_42.setTransform(-0.0564,-0.0132);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0033").s().p("AigFHQh5g8g1h9Qg2h9Aqh/QApiAByhHQBzhICEAVQCGAVBXBnQBZBmAACGIltAAIBYFiQguAMgtAAQhRAAhNgng");
	this.shape_43.setTransform(-0.0564,-0.0132);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgdFsQiTgMhihwQhihwAJiTQAIiUBthkQBthkCTAEQCUAEBoBqQBnBrAACTIltAAg");
	this.shape_44.setTransform(-0.0091,-0.0827);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0033").s().p("AkSDwQhihwAJiTQAIiUBthkQBthkCTAEQCUAEBoBqQBnBrAACTIltAAIgdFrQiTgMhihwg");
	this.shape_45.setTransform(-0.0091,-0.0827);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiQFeQh+g3g6h8Qg7h9AliBQAmiDByhLQBzhLCGATQCHATBaBmQBaBoAACIIltAAg");
	this.shape_46.setTransform(-0.0536,-1.584);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0033").s().p("AlICrQg7h9AliBQAmiDByhLQBzhLCGATQCHATBaBmQBaBoAACIIltAAIiRFOQh+g3g6h8g");
	this.shape_47.setTransform(-0.0536,-1.584);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj1E9QhdhVgVh7QgVh5A8hvQA8hvBzgyQB0gzB3AfQB5AfBNBkQBNBjAAB7IltAAg");
	this.shape_48.setTransform(-0.036,-4.9146);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0033").s().p("AlnBtQgVh5A8hvQA8hvBzgyQB0gzB3AfQB5AfBNBkQBNBjAAB7IltAAIj1EMQhdhVgVh7g");
	this.shape_49.setTransform(-0.036,-4.9146);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlAENQhCh6AgiHQAgiGByhQQByhQCIAQQCKAQBcBoQBdBoAACKIltAAg");
	this.shape_50.setTransform(-0.0448,-9.6333);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0033").s().p("AliAMQAgiGByhQQByhQCIAQQCKAQBcBoQBdBoAACKIltAAIlACtQhCh6AgiHg");
	this.shape_51.setTransform(-0.0448,-9.6333);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlnDUQgVh5A8huQA8huBzgzQB0gyB3AfQB5AfBNBjQBNBiAAB9IltAAg");
	this.shape_52.setTransform(-0.0222,-15.3646);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0033").s().p("AlAgTQA8huBzgzQB0gyB3AfQB5AfBNBjQBNBiAAB9IltAAIlnA6QgVh5A8hug");
	this.shape_53.setTransform(-0.0222,-15.3646);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlqB6QAYiLBwhYQBxhXCNAMQCOAMBgBoQBhBoAACPIltAAg");
	this.shape_54.setTransform(0.25,-18.2724);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0033").s().p("AgCC3Ilog9QAYiLBwhYQBxhXCMAMQCPAMBgBoQBhBoAACPg");
	this.shape_55.setTransform(0.25,-18.2724);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlWAJQA8htBzgzQB0gyB3AfQB5AfBNBjQBNBiAAB9IlsAAg");
	this.shape_56.setTransform(2.2,-18.2896);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0033").s().p("AgVC3IlBiuQA8htBzgzQBzgyB4AfQB5AfBMBjQBOBiAAB9g");
	this.shape_57.setTransform(2.2,-18.2896);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkxhVQBshkCUAEQCTAEBoBqQBoBqAACUIlsAAg");
	this.shape_58.setTransform(5.925,-18.2577);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0033").s().p("Ag6C3Ij3kMQBshkCUAEQCTAEBoBqQBoBqAACUg");
	this.shape_59.setTransform(5.925,-18.2577);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj+iXQBzgyB5AfQB3AfBNBjQBOBiAAB9IltAAg");
	this.shape_60.setTransform(10.95,-18.2896);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0033").s().p("AhtC3IiRlOQBzgyB5AfQB3AfBNBjQBOBiAAB9g");
	this.shape_61.setTransform(10.95,-18.2896);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjEi0QBlgJBcAvQBbAvA3BXQA2BYAABnIlsAAg");
	this.shape_62.setTransform(16.8,-18.2657);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0033").s().p("AinC3IgdlrQBlgJBcAvQBbAvA2BXQA3BYAABng");
	this.shape_63.setTransform(16.8,-18.2657);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AhciwQB4AfBNBjQBOBjAAB8IltAAg");
	this.shape_64.setTransform(18.25,-17.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0033").s().p("Ai2CxIBalhQB4AfBNBkQBOBiAAB8g");
	this.shape_65.setTransform(18.25,-17.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AAQiYQBOAzAtBRQAsBRAABcIltAAg");
	this.shape_66.setTransform(18.25,-15.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0033").s().p("Ai2CZIDGkxQBOAzAtBRQAsBRAABcg");
	this.shape_67.setTransform(18.25,-15.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("ABphvQBOBjAAB8IltAAg");
	this.shape_68.setTransform(18.25,-11.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0033").s().p("Ai2BwIEfjfQBOBjAAB8g");
	this.shape_69.setTransform(18.25,-11.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("ACjg6QAUA6AAA7IltAAg");
	this.shape_70.setTransform(18.25,-5.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0033").s().p("Ai2A7IFYh1QAVA6AAA7g");
	this.shape_71.setTransform(18.25,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[]},1).wait(1));

	// Layer_5
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AFtAAQAACXhrBrQhrBriXAAQiWAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWg");

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#009900").s().p("AkBECQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAQiWAAhrhrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72}]}).wait(20));

	// Layer_3
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#406282").ss(2,1,1).p("AHqAAQAADLiPCPQiQCQjLAAQjKAAiQiQQiPiPAAjLQAAjKCPiPQCQiQDKAAQDLAACQCQQCPCPAADKg");

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#689FD2").s().p("AlZFaQiQiPAAjLQAAjKCQiQQCPiPDKAAQDLAACQCPQCPCQAADKQAADLiPCPQiQCQjLAAQjKAAiPiQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74}]}).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-296.5,171.7,346.5);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol2copy3();
	this.instance.setTransform(-22.85,-1.05);

	this.instance_1 = new lib.Symbol2copy3();
	this.instance_1.setTransform(-1.05,-6.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(20));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AhNA8QALATARAIQBIAkAnghQAXgTAIgsQAGgggCgvQhMhfhsBNQgXBIAhA6gABdAbQgZhIhIgFQhOAWAFBY");
	this.shape_8.setTransform(2.7984,34.0425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D3234").s().p("AhXgvQBshNBMBfQACAugGAhQgZhIhIgFQhOAWAFBYQghg6AXhIg");
	this.shape_9.setTransform(2.7984,31.7341);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A23943").s().p("Ag5A7QgRgIgLgTQgFhXBOgWQBJAFAZBIQgJAsgWATQgTAPgaAAQgcAAgngTg");
	this.shape_10.setTransform(3.5099,36.7835);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ACgBYQCGhPgWiTQkRCIkRhaQAjC+CjAiADthoQg8AkgTgBQAYA7AngZQAagVgKgwgACgBYQgRgwgygOQgeAEgXA7QgBhEgvAHQhHAiADBGACgBYQgfAfhcASQg+AFgzgKAiTgsQg4gDgegQQgBBRAtgIQAugHgEgvg");
	this.shape_11.setTransform(2.2612,30.7083);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDCBC3").s().p("AjsgQQAfAQA4ACQADAwgtAHIgIABQgmAAABhKgACcgWQATABA7gkQAKAwgaAUQgLAHgLAAQgYAAgQgog");
	this.shape_12.setTransform(2.5378,26.0066);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#983439").s().p("AkShZQERBaERiHQAWCTiGBOQgRgvgygPQgeAEgXA8QgBhFgvAIQhHAhADBGQijghgji/gAi9AOQAugIgEgvQg4gCgegQQgBBQAtgHgADdggQAagVgKgwQg8AlgTgBQAYA6AngZg");
	this.shape_13.setTransform(2.2612,30.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C35664").s().p("Ah1AyQgDhFBHgiQAwgHABBDQAWg6AegEQAyAOARAvQgfAfhbASQgVABgUAAQgnAAgigGg");
	this.shape_14.setTransform(6.3939,38.9333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},14).wait(6));

	// Layer_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("ADigRQAAAvghAhQghAhgvAAQgvAAghghQghghAAgvQAAgvAhghQAhghAvAAQAvAAAhAhQAhAhAAAvgAgOAZQAAAsgfAfQgfAfgsAAQgrAAgfgfQgfgfAAgsQAAgqAfgfQAfggArAAQAsAAAfAgQAfAfAAAqg");
	this.shape_15.setTransform(-2.625,-11.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AijBLQgfgggBgrQABgqAfggQAegeAsAAQArAAAfAeQAfAgAAAqQAAArgfAgQgfAegrAAQgsAAgegegAB+AnQgLgMAAgQQAAgRALgMQAMgLARAAQARAAAMALQALAMABARQgBAQgLAMQgMAMgRAAQgRAAgMgMg");
	this.shape_16.setTransform(-5.7,-8.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFBF7").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghgAgRAYQgLAMAAARQAAARALALQAMANAQAAQARAAAMgNQALgLABgRQgBgRgLgMQgMgLgRAAQgQAAgMALg");
	this.shape_17.setTransform(8.7,-12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("ADhkXQgWgEgWgDQjXgcjYBGQgSAGgSAGQghCJAtCvQF5h1B6AvQAWAJANANQBfBdAMCDQAOCZh0BgQk9CgjRijIgrhDQgGgPgGgSQhIj+ByhEADclEIgegmQBUgcgugvQgthNjWg1QgxgggxAgQiBBThEBBQhAA9AkAsQAkgHAbAvADclEIgnAmADVBjQgFAPgJAJQgJAKgIgCQgHgDgCgNQgCgNAGgPQAFgQAJgKQAIgJAIACQAIADABAMQACAOgFAQgADhAKIAAkhQkSAujtABAgOmzQAAAcgUATQgTAUgcAAQgcAAgUgUQgTgTAAgcQAAgcATgUQAUgTAcAAQAcAAATATQAUAUAAAcgAj6j0IgpgeAipCAQAFAQgCANQgBAMgHADQgIADgJgKQgJgJgFgPQgGgQACgNQABgNAIgCQAHgDAJAJQAJAKAGAPgADclEQkvg1jQBn");
	this.shape_18.setTransform(-0.0006,-0.0122);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B66A67").s().p("AjCA0QgJgJgFgQQgGgPACgMQABgNAIgDQAHgCAJAJQAJAJAGAPQAFAPgCAOQgBAMgHADIgEABQgGAAgHgIgACzASQgHgDgCgNQgCgMAGgQQAFgQAJgJQAIgJAIACQAIACABANQACAOgFAPQgFAPgJAJQgHAIgHAAIgDAAg");
	this.shape_19.setTransform(0.2875,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F69D96").s().p("AkRDUIgqhDIgNghQhHj9ByhEQF5h2B6AwQAVAJAOANQBeBdAMCDQAOCYhzBgQieBPiCAAQiGAAhphSgAjUjAQgHACgCANQgBANAFAQQAGAPAIAJQAKAKAHgDQAIgDABgMQACgNgGgQQgFgPgJgKQgHgHgGAAIgEABgACzjkQgJAKgFAQQgFAPACANQABANAIADQAIACAIgKQAJgJAGgPQAFgQgCgOQgCgMgIgDIgDAAQgGAAgHAHg");
	this.shape_20.setTransform(1.1477,28.9815);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#243465").s().p("AguAwQgUgUAAgcQAAgbAUgUQATgTAbAAQAcAAATATQAUAUAAAbQAAAcgUAUQgTATgcAAQgbAAgTgTg");
	this.shape_21.setTransform(-8.25,-43.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4360B9").s().p("AkkByQgkgsBAg9QBEhACBhSQAxggAwAgQDXA1AtBNQAuAuhUAcIAeAlQkvg0jQBmQgbgvgkAHgAhDg1QgTATAAAcQAAAbATAUQAUATAcAAQAbAAATgTQAUgUAAgbQAAgcgUgTQgTgUgbAAQgcAAgUAUg");
	this.shape_22.setTransform(-6.2093,-42.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1940B9").s().p("AjbATQDYhFDXAcIAsAGQkSAujtABIAkgMg");
	this.shape_23.setTransform(-3.125,-26.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C78B34").s().p("Aj/ATQDQhmEvA1IgnAlQjYgbjXBFg");
	this.shape_24.setTransform(-3.625,-29.4141);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8A2A1").s().p("Aj4iEQDtAAESgvIAAEhQh6gwl5B2QgtiwAhiIgAi2g7QgfAgAAAqQAAArAfAgQAfAeArAAQAsAAAfgeQAfggAAgrQAAgqgfggQgfgegsAAQgrAAgfAegAAthqQghAgAAAwQAAAtAhAiQAhAgAvAAQAvAAAhggQAhgiAAgtQAAgwghggQghgigvAAQgvAAghAig");
	this.shape_25.setTransform(-3.8065,-10.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-59.4,75.6,118.8);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"go":2,"error":19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(11).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.Tween2copy3("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween1copy3("synched",0);
	this.instance_1.setTransform(0.05,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:0.05,alpha:1},5).to({scaleX:1,scaleY:1},4).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:1,scaleY:1},3).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},1).to({scaleX:1.07,scaleY:1.07},5).to({scaleX:0.963,scaleY:0.963,x:0},5).wait(1));

	// Layer_2
	this.instance_2 = new lib.Tween1copy4("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition:0},0).to({scaleX:1.2,scaleY:1.2},5).to({scaleX:1,scaleY:1},4).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:1,scaleY:1},3).to({startPosition:0},1).to({scaleX:1.0699,scaleY:1.0699},5).to({scaleX:0.963,scaleY:0.963},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-10.1,20.4,20.299999999999997);


(lib.sprite55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shape54("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite55, new cjs.Rectangle(-38.6,-11.3,77.30000000000001,15.100000000000001), null);


(lib.sprite48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.shape45("synched",0);

	this.instance_1 = new lib.shape46copy("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// Layer_2
	this.instance_2 = new lib.shape47("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-15.1,26.4,19.7);


(lib.soundscopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA1C27").s().p("AgwBPQAWgMANgVQAMgVAAgZQAAgXgMgWQgNgVgWgMIAagsQAgASATAiQAUAhAAAlQAAAmgUAhQgTAiggASg");
	this.shape.setTransform(-10.7714,0.0676,0.7816,0.7819,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA1C27").s().p("AhJCmQAtgaAagsQAZgtAAgzQAAgygZgtQgagsgtgaIAZgsQA4AhAhA4QAhA4AABAQAABBghA4QghA4g4Ahg");
	this.shape_1.setTransform(-16.5357,0.0676,0.7816,0.7819,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA1C27").s().p("AhhD6QBDgmAnhDQAnhEAAhNQAAhMgnhDQgnhDhDgnIAZgsQBOAtAuBPQAuBPAABaQAABbguBPQguBPhOAtg");
	this.shape_2.setTransform(-22.1632,0.0676,0.7816,0.7819,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA1C27").s().p("AhjgLIAAhxIDHAAIAAD5g");
	this.shape_3.setTransform(5.7204,9.841,0.7816,0.7819,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D79923").s().p("AhjB9IAAhxIDHiIIAAD5g");
	this.shape_4.setTransform(5.7204,-9.6863,0.7816,0.7819,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#05367D").s().p("AgoA4IAAhvIBRAAIAABvg");
	this.shape_5.setTransform(16.7605,4.4852,0.7816,0.7819,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2023").s().p("Ag/A4IAAhvIB/AAIAABvg");
	this.shape_6.setTransform(24.9478,4.4852,0.7816,0.7819,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#118168").s().p("AgoA5IAAhxIBRAAIAABxg");
	this.shape_7.setTransform(16.7605,-4.3305,0.7816,0.7819,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C475A").s().p("Ag/A5IAAhxIB/AAIAABxg");
	this.shape_8.setTransform(24.9478,-4.3305,0.7816,0.7819,0,0,180);

	this.instance = new lib.Soundmccopy2();
	this.instance.setTransform(-0.1,0,0.43,0.43,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AisD2QhkAAhJhIQhIhIAAhmQAAhkBIhJQBJhIBkAAIFYAAQBmAABIBIQBIBIAABlQAABmhJBIIABAAQhIBIhmAAg");
	this.shape_9.setTransform(-0.8,-0.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFCF68").s().p("AisETQhyAAhQhRQhRhQABhyQgBhxBRhRQBQhQBygBIFYAAQByABBRBQQBQBRAABxQAAByhQBQQhRBRhyAAgAlZitQhIBJAABkQAABmBIBIQBJBHBkABIFYAAQBmgBBIhHIgBAAQBJhIAAhmQAAhlhIhIQhIhIhmAAIlYAAQhkAAhJBIg");
	this.shape_10.setTransform(-0.8,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-28.2,89.5,55.099999999999994);


(lib.dolp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.shape7copy("synched",0);
	this.instance.setTransform(104.1,-84.1,0.6912,0.6912);

	this.instance_1 = new lib.shape8copy2("synched",0);
	this.instance_1.setTransform(104.1,-84.1,0.6912,0.6912);

	this.instance_2 = new lib.shape9copy("synched",0);
	this.instance_2.setTransform(104.1,-84.1,0.6912,0.6912);

	this.instance_3 = new lib.shape10copy2("synched",0);
	this.instance_3.setTransform(104.1,-84.1,0.6912,0.6912);

	this.instance_4 = new lib.shape11copy3("synched",0);
	this.instance_4.setTransform(104.1,-84.1,0.6912,0.6912);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},30).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.7,-142.2,297.7,215.2);


(lib.sprite106 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_40
	this.instance = new lib.sprite103();
	this.instance.setTransform(-0.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.9705,skewY:0.0594,y:2.1},3).to({scaleX:1.0001,scaleY:0.9115,skewY:0.7099,y:-0.05},6).to({scaleY:0.9203,skewY:0.5359,y:0.3},1).to({scaleX:1,scaleY:1,skewY:0,y:3.2},9).wait(1));

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6DFCC").s().p("Aj8EVQAVhkgah6QgYhzgxg7Qgqg0AKgXQAJgUAtACQAhACAlgJQATgEAMgFQAYgIAaAIQAZAHAdgKQAcgJAfgMQAVgGAVAGQAYAJAmgDQApgDAtgNQAqgNAkArQAhAngHAdQAmgXANg9QAFg1ACAHQByEdhyD7QgPgggagJQgYgIgRAPQgWATgPAFQgXAHgMgXQgMgXgtAKQgfAGgoAUQgLAGgSgDQgVgEgLgBQgqgDgdA1QgVgdgegHQghgIgRAZQgVAegKAGIgFACQgIAAgBgTg");
	this.shape.setTransform(0.189,-31.7886,0.6199,0.6199);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B49275").s().p("Aj1EfQAOiIgth2QgOglgSgfIgQgYQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIAQAYQATAfAOAlQAtB4gOCJQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBgAmSi0IgKgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAIAHAEQAIAFAKABQAdAGAigYQABAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgcAUgbAAQgPAAgNgGgAF6i9QAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAagjAFghIAAgaQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIAAAbQgFAigbAlIgCAAg");
	this.shape_1.setTransform(-7.193,-33.9168,0.6199,0.6199);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFBFA3").s().p("AkCAPQgwithzhxIABAAIALAEIAPAEIATAEIASACIAEAAQAKABAJgBQAsAFAtghQgIAegiAWQgeAUgbAAQArAXAmA1QAlA1AYBFQA0CfgtCRQAagcAeAIQAZAHAMAbIAAACQgSgdgkARQgJAFgJAHQgPALgNATQgHAKgIANIgBAAQgDjQgliHgAkhh6QAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIARAYQARAfAOAmQAtB1gNCIQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAOiJgth3QgOgmgTgfIgQgYIgBgBIgBAAgAl6j5QAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIAKAGQANAGAPAAQAbAAAdgUQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAABgBAAQghAYgegGQgKgBgIgFIgGgEIgCgBIgCABgAiVkQIApgIQAsgQAKgjQAtAhA5gFQA9gFAXgxQAiAjA4ABQA5ABARglQArAaAhAJQAiAKAPgKQgNAMgnACQgoACgbgLQgbAUg6gBQg/AAgUgeQgYAiguALQg4ANg0giQgOAYgfAHQgNADgRAAQgOAAgQgCg");
	this.shape_2.setTransform(-9.3161,-30.1936,0.6199,0.6199);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A87D53").s().p("AjrGJQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQACgCACAAIAHgDIABAAIAEgCQA6gXA6gSIAJgDQBDgVBBgNIAGgBQAhgHAigFIAGgBIAXgDIAfgDIAGgBQBHgHBFACIAFAAQA8ACA7AIIAAAAIADABIABACQACACgBADQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCACgDgBQiQgUibAUIgVADIgIABQihAYikBCIgPAFQgDAAgCgBgAm/j8QgBgDABgDQABgDADgBQAcgMAwgRQBfghBmgXQBigXBhgLIAcgDIAzgFQCzgMCfAaQADAAACADQACACgBAEQAAADgDACQgDACgDgBQiZgZisALIgEAAIgGABIgwAEIgcADQgyAGgyAJIgBAAQgvAIgvALQgsAKgqAMIgCABQg3APg0ASQgoAOgZALIgBAAIgIADIgDABQgGAAgCgFg");
	this.shape_3.setTransform(-8.8636,-31.4197,0.6199,0.6199);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFD2BA").s().p("AjAFYQgLgbgagIQgdgIgaAcQAtiQg1igQgXhFgmg1Qglg1grgXQAbAAAegUQAigWAHgeQgsAigsgGQgJABgKAAIAFAAQBNAAAXhJIACgBQBAAjA2gMQA2gNAIgyIABAAQAtAyBCgKIABgBQAPgCALgFQANgGAJgJQATgQADgYIAEAAQAxAsA4AAQA5AAAIgtQAZAuA9AFQAbACASgJQAUgKAEgUQAbAbAYBJQAYBMAIBcQASDkhhCUIgDgBQgFg1gsAAQgrAAgbArIgFAAQgRgtgxAEQgvADgbAqIgGABQgMgcgVgHQgNgFgRAEIgDABQgqAKgSAsIgGABQgTgjgtAOQgqANgbArIgJACIgGgLgAkqizQgKAXAqA0QAxA7AYBzQAaB6gVBkQACAYAMgHQAKgGAVgeQARgZAhAIQAeAHAVAdQAdg1ApADQALABAVAEQATADALgGQAogUAfgGQAtgKAMAXQAMAXAXgHQAPgFAWgTQARgPAYAIQAaAJAPAgQByj8hykcQgCgHgFA1QgNA9gmAXQAHgdghgnQgkgrgqANQgtANgpADQgmADgZgJQgVgGgVAGQgeAMgcAJQgdAKgZgHQgagIgYAIQgMAFgTAEQglAJghgCIgKAAQgkAAgIASgAFkk0QgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAZQgFAhgaAkQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIABABIACgBQAbglAFghIAAgcIgCgBIAAAAgAjFjwIgqAJQAlAEAYgFQAfgIAOgXQA1AiA4gOQAtgLAYghQAUAeA/AAQA6ABAbgVQAbAMAogCQAmgDAOgMQgPAKgigJQgigJgqgbQgSAlg4gBQg4gBgjgjQgWAyg9AFQg5AEgtggQgKAjgsAPg");
	this.shape_4.setTransform(-3.7851,-32.7042,0.6199,0.6199);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B724B").s().p("AAfHXQAFhegEhlIAIgBIAVgDQAEBngEBggAAdDbQARgEANAFIACAmIgXADIgGABIgDgrgAgxmFIAcgDIAJAyQgLAFgPADIgBAAIgKg3gAg8m/QgDgHABgGQACgHAIgDQAKgBAFAHQAFAHAAAGIAIAsIgcADIgIgrg");
	this.shape_5.setTransform(-4.0363,-29.9999,0.6199,0.6199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer_10
	this.instance_1 = new lib.sprite57();
	this.instance_1.setTransform(-23.65,-0.4,0.9958,1.0123,0,5.6774,-1.5805);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9961,scaleY:0.9874,skewX:7.0585,skewY:-1.0252,x:-23.75,y:-0.55},1).to({scaleX:0.9964,scaleY:0.9629,skewX:8.7597,skewY:-0.53,x:-23.8,y:-0.75},1).to({scaleX:0.9966,scaleY:0.9383,skewX:10.2733,skewY:-0.0342,x:-23.9,y:-0.9},1).to({scaleX:0.9972,scaleY:0.8893,skewX:13.3009,skewY:0.7689,y:-1.35},2).to({scaleX:0.9975,scaleY:0.8647,skewX:14.8153,skewY:1.264,x:-24,y:-1.55},1).to({scaleX:0.9977,scaleY:0.8402,skewX:16.5173,skewY:1.7581,x:-24.1,y:-1.65},1).to({scaleX:0.9984,scaleY:0.792,skewX:19.6051,skewY:2.7445,x:-24.2,y:-2.05},2).to({scaleX:0.998,scaleY:0.8133,skewX:18.0726,skewY:2.266,y:-1.9},1).to({scaleX:0.9977,scaleY:0.8353,skewX:16.7832,skewY:1.7826,x:-24.05,y:-1.75},1).to({scaleX:0.9976,scaleY:0.8574,skewX:15.3075,skewY:1.299,y:-1.6},1).to({scaleX:0.9966,scaleY:0.9457,skewX:9.7803,skewY:-0.2579,x:-23.85,y:-0.85},4).to({scaleX:0.9963,scaleY:0.9678,skewX:8.3074,skewY:-0.5537,x:-23.8,y:-0.8},1).to({scaleX:0.996,scaleY:0.9899,skewX:7.0195,skewY:-1.0385,x:-23.75,y:-0.55},1).to({scaleX:0.9958,scaleY:1.0123,skewX:5.6774,skewY:-1.5805,x:-23.65,y:-0.4},1).wait(1));

	// Layer_8
	this.instance_2 = new lib.sprite57();
	this.instance_2.setTransform(10.25,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.0001,scaleY:0.973,skewY:0.0586,x:10.15,y:-3.95},1).to({scaleX:1.0002,scaleY:0.9459,skewY:0.3051,x:10.05,y:-3.85},1).to({scaleY:0.8919,skewY:0.7981,x:9.85,y:-3.55},2).to({scaleX:1.0003,scaleY:0.8649,skewY:1.0445,x:9.75,y:-3.45},1).to({scaleX:1.0005,scaleY:0.8108,skewY:1.5373,x:9.55,y:-3.1},2).to({scaleY:0.7838,skewY:1.7838,x:9.45,y:-3.05},1).to({scaleX:1.0007,scaleY:0.7568,skewY:2.1209,x:9.35,y:-2.9},1).to({scaleX:1.0005,scaleY:0.7811,skewY:1.7899,x:9.45,y:-3},1).to({scaleX:1.0004,scaleY:0.854,skewY:1.256,x:9.7,y:-3.4},3).to({scaleX:1.0003,scaleY:0.8784,skewY:1.0148,x:9.8,y:-3.45},1).to({scaleX:1.0001,scaleY:0.9757,skewY:0.0533,x:10.15,y:-4},4).to({scaleX:1,scaleY:1,skewY:0,x:10.25,y:-4.1},1).wait(1));

	// Layer_6
	this.instance_3 = new lib.sprite55();
	this.instance_3.setTransform(-0.45,6.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:6.45},2).to({scaleX:1.0001,skewY:0.7606,y:4.95},7).to({scaleX:1,skewY:0,y:6.85},10).wait(1));

	// Layer_4
	this.instance_4 = new lib.sprite53();
	this.instance_4.setTransform(-1.75,10.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewY:0.0568,y:9.9},5).to({skewY:0.4074,y:9.6},4).to({skewY:0,y:10.25},10).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#222222").ss(0.1,1,1).p("AmPA+QAUgyBMgSQHVhOBpAIQBpAIAZBEQgRA1gggvQgUgviqAQIkOAcIikAYQhAAKgMAUQgLAVgWgBQgWgBAEgOg");
	this.shape_6.setTransform(0.0442,-6.9909);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E065A1").s().p("Al9BNQgWgBAEgOQAUgyBMgSQHVhOBpAIQBpAIAZBEQgRA1gggvQgUgviqAQIkOAcIikAYQhAAKgMAUQgLAUgVAAIgBAAg");
	this.shape_7.setTransform(0.0442,-6.9909);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#222222").ss(0.1,1,1).p("AmPA6QAUgwBMgRQHYhJBrAIQBqAIASBBQgSAzgggtQgSgriqAPIkOAZIikAWQhBAKgLATQgLATgWgBQgWgBAEgOg");
	this.shape_8.setTransform(0.0192,-7.0916);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E065A1").s().p("Al9BJQgWgBAEgOQAUgwBMgRQHYhJBrAIQBqAIASBBQgSAzgggtQgSgriqAPIkOAZIikAWQhBAKgLATQgLASgUAAIgCAAg");
	this.shape_9.setTransform(0.0192,-7.0916);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#222222").ss(0.1,1,1).p("AmOA3QAUgvBMgQQHZhEBtAIQBsAIAMBAQgUAwghgrQgPgoipANIkOAYIimAUQhAAJgLASQgLASgWgBQgVgCAEgNg");
	this.shape_10.setTransform(0.0186,-7.1648);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E065A1").s().p("Al9BGQgVgCAEgNQAUgvBMgQQHZhEBtAIQBsAIAMBAQgUAwghgrQgPgoipANIkOAYIimAUQhAAJgLASQgLARgTAAIgDAAg");
	this.shape_11.setTransform(0.0186,-7.1648);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#222222").ss(0.1,1,1).p("AmOAzQAVgtBMgPQHbg/BvAIQBtAHAFA/QgVAtghgpQgMgkiqAMIkNAVIimATQhBAIgLARQgLAQgVgBQgWgCAEgNg");
	this.shape_12.setTransform(-0.0314,-7.2674);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E065A1").s().p("Al8BCQgWgCAEgNQAVgtBMgPQHbg/BvAIQBtAHAFA/QgVAtghgpQgMgkiqAMIkNAVIimATQhBAIgLARQgKAPgUAAIgCAAg");
	this.shape_13.setTransform(-0.0314,-7.2674);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#222222").ss(0.1,1,1).p("AmNAvQAVgsBMgOQHdg5BwAIQBwAHgCA9QgXAqghgnQgKggipAKIkOATIimARQhBAIgLAPQgLAPgVgBQgWgCAFgNg");
	this.shape_14.setTransform(-0.0372,-7.3407);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E065A1").s().p("Al8A+QgWgCAFgNQAVgsBMgOQHdg5BwAIQBwAHgCA9QgXAqghgnQgKggipAKIkOATIimARQhBAIgLAPQgKAOgTAAIgDAAg");
	this.shape_15.setTransform(-0.0372,-7.3407);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#222222").ss(0.1,1,1).p("AmNAsQAVgrBNgNQHegzByAHQByAHgJA7QgYAogiglQgHgcipAJIkOAPIinAQQhBAIgKANQgLAOgVgCQgWgCAFgMg");
	this.shape_16.setTransform(-0.0343,-7.4594);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E065A1").s().p("Al8A6QgWgCAFgMQAVgrBNgNQHegzByAHQByAHgJA7QgYAogiglQgHgcipAJIkOAPIinAQQhBAIgKANQgKAMgSAAIgEAAg");
	this.shape_17.setTransform(-0.0343,-7.4594);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#222222").ss(0.1,1,1).p("AmOAoQAWgoBNgNQHgguB0AHQBzAGgPA6QgZAmgjgkQgEgYipAHIkOANIinAPQhCAHgKAMQgKAMgWgCQgVgCAEgMg");
	this.shape_18.setTransform(0.0042,-7.5569);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E065A1").s().p("Al9A2QgVgCAEgMQAWgoBNgNQHgguB0AHQBzAGgPA6QgZAmgjgkQgEgYipAHIkOANIinAPQhCAHgKAMQgJAKgRAAIgGAAg");
	this.shape_19.setTransform(0.0042,-7.5569);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#222222").ss(0.1,1,1).p("AmOAkQAWgnBNgMQHigoB2AGQB1AHgWA4QgbAjgjgiQgCgUioAFIkOALIioANQhCAHgKAKQgKALgVgCQgVgCAEgMg");
	this.shape_20.setTransform(0.0594,-7.6356);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E065A1").s().p("Al9AyQgVgCAEgMQAWgnBNgMQHigoB2AGQB1AHgWA4QgbAjgjgiQgCgUioAFIkOALIioANQhCAHgKAKQgIAKgSAAIgFgBg");
	this.shape_21.setTransform(0.0594,-7.6356);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#222222").ss(1,1,1,3,true).p("AmOAhQAWgmBNgLQHkgjB3AGQB3AGgcA3QgdAggjgfQABgRioADIkOAJIipALQhCAHgJAJQgKAJgWgCQgVgCAFgLg");
	this.shape_22.setTransform(0.1356,-7.7327);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E065A1").s().p("Al+AuQgVgCAFgLQAWgmBNgLQHkgjB3AGQB3AGgcA3QgdAggjgfQABgRioADIkOAJIipALQhCAHgJAJQgJAIgPAAIgIgBg");
	this.shape_23.setTransform(0.1356,-7.7327);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#222222").ss(0.1,1,1).p("AmOAkQAWgnBNgMQHjgoB1AHQB1AGgWA4QgbAjgjgiQgCgUioAFIkOALIioAMQhCAHgKALQgKAKgVgBQgVgDAEgLg");
	this.shape_24.setTransform(0.0661,-7.6423);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E065A1").s().p("Al9AyQgVgDAEgLQAWgnBNgMQHjgoB1AHQB1AGgWA4QgbAjgjgiQgCgUioAFIkOALIioAMQhCAHgKALQgIAJgSAAIgFAAg");
	this.shape_25.setTransform(0.0661,-7.6423);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#222222").ss(0.1,1,1).p("AmNAnQAWgoBNgNQHggsB0AHQB0AGgRA6QgZAkgjgjQgEgXioAHIkOAMIioAOQhBAHgKAMQgLAMgVgCQgVgCAEgMg");
	this.shape_26.setTransform(-0.0039,-7.5639);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E065A1").s().p("Al8A1QgVgCAEgMQAWgoBNgNQHggsB0AHQB0AGgRA6QgZAkgjgjQgEgXioAHIkOAMIioAOQhBAHgKAMQgKAKgSAAIgEAAg");
	this.shape_27.setTransform(-0.0039,-7.5639);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#222222").ss(0.1,1,1).p("AmNAqQAVgqBNgNQHfgxByAHQBzAHgLA7QgZAngiglQgGgbipAIIkNAPIioAPQhBAIgKANQgLANgVgBQgWgCAFgNg");
	this.shape_28.setTransform(-0.0407,-7.4856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E065A1").s().p("Al8A5QgWgCAFgNQAVgqBNgNQHfgxByAHQBzAHgLA7QgZAngiglQgGgbipAIIkNAPIioAPQhBAIgKANQgKAMgSAAIgEAAg");
	this.shape_29.setTransform(-0.0407,-7.4856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#222222").ss(0.1,1,1).p("AmNAuQAVgsBNgNQHdg3BxAIQBxAHgFA8QgXAqgignQgIgeiqAJIkNASIinAQQhBAIgLAPQgKAOgWgCQgVgBAEgNg");
	this.shape_30.setTransform(-0.0533,-7.4131);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E065A1").s().p("Al8A8QgVgBAEgNQAVgsBNgNQHdg3BxAIQBxAHgFA8QgXAqgignQgIgeiqAJIkNASIinAQQhBAIgLAPQgJAMgTAAIgEAAg");
	this.shape_31.setTransform(-0.0533,-7.4131);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#222222").ss(0.1,1,1).p("AmOAxQAVgtBNgOQHcg7BvAHQBvAHABA+QgWAsghgoQgLgiipALIkOATIimASQhBAJgLAPQgLAQgVgBQgWgCAEgNg");
	this.shape_32.setTransform(-0.0314,-7.3143);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E065A1").s().p("Al8BAQgWgCAEgNQAVgtBNgOQHcg7BvAHQBvAHABA+QgWAsghgoQgLgiipALIkOATIimASQhBAJgLAPQgKAPgUAAIgCAAg");
	this.shape_33.setTransform(-0.0314,-7.3143);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#222222").ss(0.1,1,1).p("AmOA0QAVguBMgPQHahABuAIQBtAHAIA/QgVAughgqQgNgliqANIkOAVIilAUQhBAIgLARQgLARgVgBQgWgCAEgNg");
	this.shape_34.setTransform(-0.0064,-7.2416);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E065A1").s().p("Al8BDQgWgCAEgNQAVguBMgPQHahABuAIQBtAHAIA/QgVAughgqQgNgliqANIkOAVIilAUQhBAIgLARQgKAQgUAAIgCAAg");
	this.shape_35.setTransform(-0.0064,-7.2416);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#222222").ss(0.1,1,1).p("AmOA4QAUgwBMgQQHZhFBsAIQBsAIANBAQgUAxgggrQgQgpiqAOIkNAYIimAUQhAAKgLASQgLASgWgBQgWgCAFgNg");
	this.shape_36.setTransform(0.0118,-7.1639);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E065A1").s().p("Al9BHQgWgCAFgNQAUgwBMgQQHZhFBsAIQBsAIANBAQgUAxgggrQgQgpiqAOIkNAYIimAUQhAAKgLASQgLARgTAAIgDAAg");
	this.shape_37.setTransform(0.0118,-7.1639);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#222222").ss(0.1,1,1).p("AmPA7QAUgxBMgRQHXhJBrAIQBqAIATBBQgSAzgggtQgSgsiqAPIkOAaIikAXQhBAJgLATQgLAUgWgBQgWgBAEgOg");
	this.shape_38.setTransform(0.0192,-7.0868);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E065A1").s().p("Al9BKQgWgBAEgOQAUgxBMgRQHXhJBrAIQBqAIATBBQgSAzgggtQgSgsiqAPIkOAaIikAXQhBAJgLATQgLATgUAAIgCAAg");
	this.shape_39.setTransform(0.0192,-7.0868);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#222222").ss(1,1,1,3,true).p("AmPA+QAUgyBMgSQHVhOBpAIQBpAIAZBEQgRA1gggvQgUgviqAQIkOAcIikAYQhAAKgMAUQgLAVgWgBQgWgBAEgOg");
	this.shape_40.setTransform(0.0442,-6.9909);

	this.instance_5 = new lib.shape105copy("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_7},{t:this.shape_40}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// Layer_1
	this.instance_6 = new lib.sprite50();
	this.instance_6.setTransform(-0.1,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0.0568,x:-0.2},1).to({scaleX:0.9999,scaleY:0.9999,rotation:2.0587,x:-0.85},8).to({scaleX:0.9998,scaleY:0.9998,rotation:1.5374,x:-0.7},2).to({scaleX:0.9999,scaleY:0.9999,rotation:0.5299,x:-0.3,y:-4.45},5).to({scaleX:1,scaleY:1,rotation:0.2911,x:-0.25,y:-4.4},1).to({rotation:0,x:-0.1},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-59.2,82.30000000000001,73.2);


(lib.Symbol4copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("soundoverbtncar");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.b = new lib.sprite106();
	this.b.name = "b";
	this.b.setTransform(18.05,-3.3,1.4319,1.4319);

	this.instance = new lib.sprite48();
	this.instance.setTransform(-6.65,3.6,1.4319,1.4319);

	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-18.8,15.7,1.4319,1.4319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.b}]}).to({state:[{t:this.instance},{t:this.b},{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-88,151.1,112.5);


// stage content:
(lib.index4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"stp":0,finish:6,"go":7,start:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,6,9];
	// timeline functions:
	this.frame_0 = function() {
		document.title ="Game ";
		
		
		this.percents.visible=false;
		
		this.stop();
		var self = this;
		
		this.theButton.addEventListener("click", go1.bind(this));
		
		function go1()
		{
		
		self.gotoAndStop("start");
		
		
		}
	}
	this.frame_1 = function() {
		stage.on("stagemousemove", function (event) {
			var p = this.globalToLocal(stage.mouseX, stage.mouseY);
				this.mose.x = p.x;
				this.mose.y = p.y;
		
			
			
		
		}, this);
		var that = this;
		this.stop();
		this.initialMinutes = 0.4; // set here to 45
		this.totalTime = 0;
		this.currentTime = 0;
		this.interval = 0;
		this.end = function () {
			that.pauseTimer(that.pauseCallback);
		
		
		};
		this.start = function () {
			that.startTimer(that.updateCallBack, that.endCallback);
		
			//that.startButton.on("click", function(e){that.startTimer(that.updateCallBack, that.endCallback)}, this);
			//that.stopButton.on("click", function(e){that.stopTimer(that.stopCallback)}, this);
			//that.pauseButton.on("click", function(e){that.pauseTimer(that.pauseCallback)}, this);
			//that.resumeButton.on("click", function(e){that.resumeTimer(that.resumeCallback, that.updateCallBack, that.endCallback)}, this);
		};
		
		this.updateCallBack = function () {
			that.setText();
		};
		
		this.endCallback = function () {
			if (qno == 0) {
				that.start1.gotoAndPlay("error");
			}
		
			if (qno == 1) {
				that.start2.gotoAndPlay("error");
			}
			if (qno == 2) {
				that.start3.gotoAndPlay("error");
			}
			if (qno == 3) {
				that.start4.gotoAndPlay("error");
			}
			if (qno == 4) {
				that.start5.gotoAndPlay("error");
			}
			if (qno == 5) {
				that.start6.gotoAndPlay("error");
			}
			
		
		
			that.next.gotoAndPlay("go");	that.answermc.gotoAndPlay("fl");
		
		
		};
		
		this.stopCallback = function () {
			console.log("stopped");
		};
		
		this.pauseCallback = function () {
			console.log("paused");
		};
		
		this.resumeCallback = function () {
			console.log("resumed");
		};
		
		this.startTimer = function (updateCallback, endCallback) {
			clearInterval(that.interval);
			that.totalTime = that.minutesToMilliseconds(that.initialMinutes);
			that.currentTime = that.totalTime;
			that.setText();
			that.setTime(updateCallback, endCallback);
		};
		
		this.stopTimer = function (callback) {
			clearInterval(that.interval);
			that.totalTime = 0;
			that.currentTime = 0;
			that.setText();
			callback();
		};
		
		this.pauseTimer = function (callback) {
			clearInterval(that.interval);
			that.totalTime = that.currentTime;
			callback();
		};
		
		this.resumeTimer = function (resumeCallback, updateCallback, endCallback) {
			if (that.currentTime == 0)
				return;
		
			clearInterval(that.interval);
			that.totalTime = that.currentTime;
			that.setTime(updateCallback, endCallback);
			resumeCallback();
		};
		
		this.setTime = function (updateCallback, endCallback) {
			that.interval = setInterval(function () {
				that.currentTime -= 1000;
				updateCallback();
		
				if (that.currentTime == 0) {
					clearInterval(that.interval);
					endCallback();
				}
		
			}, 1000);
		};
		
		this.setText = function () {
			var time = that.timeCode(that.currentTime);
			that.timeText.text = time.minutes + ":" + time.seconds;
		};
		
		this.minutesToMilliseconds = function (minutes) {
			return 1000 * 60 * minutes;
		};
		
		this.timeCode = function (milliseconds) {
			var seconds = Math.floor((milliseconds / 1000) % 60);
			var strSeconds = (seconds < 10) ? ("0" + String(seconds)) : String(seconds);
			var minutes = Math.round(Math.floor((milliseconds / 1000) / 60));
			var strMinutes = (minutes < 10) ? ("0" + String(minutes)) : String(minutes);
		
			return {
				seconds: strSeconds,
				minutes: strMinutes
			};
		};
		
		this.start();
		this.stop();
		var that = this;
		
		
		that.answermc.gotoAndStop("stp");
		
		var tf = 0;
		var err = 0;
		var chance = 0;
		var score = 0;
		var qno = 0;
		var truecount = 0;
		var noofletter = 0;
		
		var currentFrame = this.currentFrame;
		var currentFramefalse = this.Framefalse.currentFrame;
		var currentFrametrue = this.Frametrue.currentFrame;
		var Percents = this.percents.currentFrame;
		that.soln.visible = false;
		
		var hit = false;
		var direction = 0;
		var i = 0;
		var j = 0;
		
		var b1press = false;
		var b2press = false;
		var b3press = false;
		var b4press = false;
		var b5press = false;
		var b6press = false;
		
		this.frames0 = [2, 3, 4, 5];
		
		this.frames = [];
		this.vide = [];
		
		while (this.frames0.length > 0) {
			var rand = Math.floor(Math.random() * this.frames0.length)
			this.frames.push(this.frames0[rand])
			this.frames0.splice(rand, 1);
		
		}
		
		
		
		//this.next.addEventListener("click", next_func.bind(this));
		
		this.next_func = function () {
		
		
			that.soln.visible = false;
		
		
		
		
			that.answermc.gotoAndStop("stp");
			that.box.gotoAndStop("stp");
		
		
			noofletter = 0;
			b1press = false;
			this.b1.mouseEnabled = true;
		
			this.e1.mouseEnabled = true;
			this.e2.mouseEnabled = true;
			this.e3.mouseEnabled = true;
		
			/*	this.b4.mouseEnabled = true;
			this.b5.mouseEnabled = true;*/
		
			chance = 0;
		
		
		
		
		
		
		
		
		
			qno++
			this.questionsno.gotoAndStop(qno);
			var go = this;
			var Ful = this.frames.length;
			var r = 0
			this.FrameNo = this.frames[r];
			this.vide.push(this.FrameNo);
			this.frames.splice(r, 1);
			if (this.FrameNo == undefined) {
				//if (qno == 20) {
		
				go.gotoAndPlay("finish");
			} else {
				go.gotoAndStop(this.FrameNo);
				go.soln.gotoAndStop(this.FrameNo);
		
		
			}
		}
		
		this.btnSound.addEventListener("mouseover", soundoverfunc.bind(this));
		function soundoverfunc(evt) {
			if (this.currentFrame == 1) {
				sn1.play();
			}
			if (this.currentFrame == 2) {
				sn2.play();
			}
			if (this.currentFrame == 3) {
				sn3.play();
			}
			if (this.currentFrame == 4) {
				sn4.play();
			}
			if (this.currentFrame == 5) {
				sn5.play();
			}
		
		
		
		}
		
		this.b1.addEventListener("click", bt_l1.bind(this));
		this.e1.addEventListener("click", bf_func.bind(this));
		this.e2.addEventListener("click", bf_func.bind(this));
		this.e3.addEventListener("click", bf_func.bind(this));
		
		
		
		function bt_l1(evt) {
		
			that.answermc.x = that.b1.x
			j++
			this.ScoreText.text = String(j);
			this.coin.gotoAndPlay("go");
		
			this.mose.gotoAndPlay("hit");
		
			b1press = true;
			this.box.gotoAndPlay("tr");
		
			this.b1.mouseEnabled = true;
			noofletter++
			this.percents.gotoAndStop(j);
			that.soln.visible = true;
		
			this.answermc.gotoAndPlay("tr");
		
			that.next.gotoAndPlay("go");
		
			if (qno == 0) {
				this.start1.gotoAndPlay("go");
			}
			if (qno == 1) {
				this.start2.gotoAndPlay("go");
			}
			if (qno == 2) {
				this.start3.gotoAndPlay("go");
			}
			if (qno == 3) {
				this.start4.gotoAndPlay("go");
			}
			if (qno == 4) {
				this.start5.gotoAndPlay("go");
			}
		
		
		
		
		
		
		}
		
		
		
		
		
		
		
		function bf_func(evt) {
			this.mose.gotoAndPlay("hit");
			console.log(evt)
		
			switch (evt.currentTarget.name) {
		
		
				case "e1":
		
		
					that.answermc.x = that.e1.x
					break;
				case "e2":
		
		
					that.answermc.x = that.e2.x
		
					break;
		
				case "e3":
		
		
					that.answermc.x = that.e3.x
		
					break;
		
			}
		
			this.answermc.gotoAndPlay("fl");
			i++
			chance++
			if (chance <= 1) {
				err++;
				this.Framefalse.gotoAndStop(err);
				that.heart1.visible = false;
			}
		
			if (chance > 1) {
				that.heart2.visible = false;
			}
			if (chance > 2) {
				that.heart3.visible = false;
				that.soln.visible = true;
		
		
		
				that.next.gotoAndPlay("go");
		
		
		
			}
			if (qno == 0) {
				this.start1.gotoAndPlay("error");
			}
		
			if (qno == 1) {
				this.start2.gotoAndPlay("error");
			}
			if (qno == 2) {
				this.start3.gotoAndPlay("error");
			}
			if (qno == 3) {
				this.start4.gotoAndPlay("error");
			}
			if (qno == 4) {
				this.start5.gotoAndPlay("error");
			}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		}
		var sn1 = new Audio('sounds/q1.mp3');
		var sn2 = new Audio('sounds/q2.mp3');
		var sn3 = new Audio('sounds/q3.mp3');
		var sn4 = new Audio('sounds/q4.mp3');
		var sn5 = new Audio('sounds/q5.mp3');
	}
	this.frame_6 = function() {
		this.end();
		this.clock.stop();
		playSound("win_fish");
		this.percents.visible=true;
		
		this.stop();
		
		this.replay.addEventListener("click", go2.bind(this));
		
		function go2()
		{
		
		//this.gotoAndStop("stp");
		window.location.reload(true);
		
		
		}
	}
	this.frame_9 = function() {
		this.gotoAndPlay("go");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(3).call(this.frame_9).wait(1));

	// Layer_4
	this.next = new lib.Symbol1copy();
	this.next.name = "next";
	this.next.setTransform(399.95,347,1.93,1.9299,0,0,0,-0.1,4.5);

	this.timeline.addTween(cjs.Tween.get(this.next).to({_off:true},6).wait(4));

	// Layer_22
	this.start5 = new lib.stars();
	this.start5.name = "start5";
	this.start5.setTransform(745.7,150.35,1.3331,1.3331,0,0,0,0.1,0.1);

	this.start4 = new lib.stars();
	this.start4.name = "start4";
	this.start4.setTransform(745.7,189.55,1.3331,1.3331,0,0,0,0.1,0.1);

	this.start3 = new lib.stars();
	this.start3.name = "start3";
	this.start3.setTransform(745.7,229.55,1.3331,1.3331,0,0,0,0.1,0.1);

	this.start2 = new lib.stars();
	this.start2.name = "start2";
	this.start2.setTransform(745.7,268.9,1.3331,1.3331,0,0,0,0.1,0.1);

	this.start1 = new lib.stars();
	this.start1.name = "start1";
	this.start1.setTransform(745.7,308.7,1.3331,1.3331,0,0,0,0.1,0.1);

	this.questionsno = new lib.numqcopy2();
	this.questionsno.name = "questionsno";
	this.questionsno.setTransform(56,70,0.76,0.76,0,0,0,0.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.questionsno},{t:this.start1},{t:this.start2},{t:this.start3},{t:this.start4},{t:this.start5}]},1).to({state:[]},5).to({state:[]},3).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8FE9A","#E8CD2D","#DCA325","#D28C20"],[0,0.318,0.702,1],0,-35.5,0,8.4).s().p("AhGBIQAhAKAlAAQBuAABAhVQAcgmALgmQgOA3grArQhBBAhbAAQgkAAgigLgAjUhSIAFATQAMAeARAZQgYgigKgog");
	this.shape.setTransform(56.95,82.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F8FE9A","#E8C22B","#D27F1E"],[0,0.498,1],0,24.1,0,-24.1).s().p("AipCqQhHhGAAhkQAAhjBHhGQBGhHBjAAQBkAABGBHQBHBGAABjQAAA4gWAvIAIgWQgpBghWApQgQAIgPAGQghAJgkAAQhjAAhGhHgAjUA1QAJAoAZAiIADAFIAGAGQAoA0A7ASQAhALAlAAQBbAABAhAQAsgsAOg3IACgIIgBABQAFgXAAgaQAAhahAhAQhAhBhbAAQhaAAhABBQhABAAABaQAAAaAFAXIgCgEg");
	this.shape_1.setTransform(56.975,69.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbEBQAPgGAQgIQBWgpAphgIgHAWQgkBThPAjQgcAMgeAGIgKABQAPgDARgFgAgvDpQg8gSgog0IgFgGIgDgFQgRgZgMgeIgGgTIgCgIIABAEIAIAVQAOAeAUAZQBBBQBpADQBqACBChSQAggnAMgoIAAAAIAAgBIgCAIQgLAmgcAmQhABWhvAAQgkAAgggKgAjUibIAPgTQBBhPBTgKIAIgBQhRAOhHBQQgkAogTAlQANgfAXgfg");
	this.shape_2.setTransform(54.725,66.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F8FE9A","#E8C22B","#FED136","#D39F23"],[0,0.325,0.69,1],0,-29.6,0,29.7).s().p("AjRDSQhXhXAAh6QAAhnA9hNQgXAegNAgQAUgmAjgoQBHhQBRgNIgHABQAigJAlAAQB7AABXBXQBXBXAAB7QAAB6hXBXQhXBXh7AAQh6AAhXhXgAipipQhHBGAABkQAABjBHBHQBGBGBjAAQAkAAAhgJQgRAGgQACIALgBQAegGAcgMQBPgjAjhTQAWguAAg4QAAhkhHhGQhGhHhkAAQhjAAhGBHg");
	this.shape_3.setTransform(56.975,69.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CECECE","#B9B9B9","#999999"],[0,0.341,0.718,1],0,-21.9,0,22).s().p("AjaDcQhbhbAAiBQAAiABbhbQBahaCAAAQCBAABaBaQBbBcAAB/QAACBhbBbQhaBaiBAAQiAAAhahagAhHkgQhTAKhCBPIgPATQg9BOAABmQAAB7BXBXQBXBXB6AAQB7AABXhXQBXhXAAh7QAAh6hXhXQhXhXh7AAQglAAgiAIgAAADQQhrgDhAhQQgVgZgNgeIgIgVQgFgXAAgaQAAhaBAhAQBAhBBaAAQBbAABABBQBABAAABaQAAAagFAXIAAAAQgMAogfAnQhABQhmAAIgFAAg");
	this.shape_4.setTransform(56.975,69.175);

	this.mose = new lib.Symbol2();
	this.mose.name = "mose";
	this.mose.setTransform(949.9,248.95);

	this.Frametf = new lib.numeng();
	this.Frametf.name = "Frametf";
	this.Frametf.setTransform(894.9,40.25,0.27,0.27,0,0,0,0.2,0);

	this.Framefalse = new lib.numeng();
	this.Framefalse.name = "Framefalse";
	this.Framefalse.setTransform(894.9,81.85,0.27,0.27,0,0,0,0.2,0);

	this.Frametrue = new lib.numeng();
	this.Frametrue.name = "Frametrue";
	this.Frametrue.setTransform(869.7,63.4,0.27,0.27,0,0,0,0.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBMIgCgDIAAABQhMAPgMgaQgLgZAyg0IABgBIAAgCQgnhCAWgTQAUgUBCAgIABABIABgBQAzg5AZAPQAPAIACAeIAAAVIgCAaIgBACIABAAQBGAggFAcQgGAbhHANIgDAAIAAABQgIBMgcAEIgDAAQgaAAggg8g");
	this.shape_5.setTransform(896.4,85.25,1,1,0,0,0,0.9,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBMIgCgDIAAABQhMAPgMgaQgMgZAygzIACgCIAAgCQgnhCAVgTQAVgUBCAgIABABIABgBQAzg5AZAPQAPAIACAeIAAAVIgCAaIgBACIABAAQBGAggFAcQgGAbhHANIgDAAIAAABQgIBNgcADIgDAAQgaAAggg8g");
	this.shape_6.setTransform(896.35,43.05,1,1,0,0,0,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FD7B6C","#E32C2F","#A00511"],[0,0.427,1],0.6,17.5,0,0.6,17.5,32.3).s().p("AhECjQgggNgYgZQgZgZgNggQgOggAAgkQAAgjAOggQANghAZgXQAYgZAggOQAhgNAjAAQAjAAAiANQAfAOAZAZQAYAXANAhQAPAgAAAjQAAAkgPAgQgNAggYAZQgZAZgfANQgiAOgjgBQgjABghgOg");
	this.shape_7.setTransform(894.4,81.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#DFEF5C","#72C23F","#468F1C"],[0,0.357,1],0.7,17.4,0,0.7,17.4,32.3).s().p("AhECiQgfgNgZgYQgYgZgNgfQgPgiAAgjQAAgjAPghQANgfAYgZQAZgYAfgOQAigNAiAAQAkAAAgANQAhAOAYAYQAYAZAOAfQANAhAAAjQAAAjgNAiQgOAfgYAZQgYAYghANQggAOgkABQgigBgigOg");
	this.shape_8.setTransform(893.75,41.55);

	this.start12 = new lib.Symbol3copy();
	this.start12.name = "start12";
	this.start12.setTransform(1068.1,317.25,2.4568,2.4568);

	this.start11 = new lib.Symbol3copy();
	this.start11.name = "start11";
	this.start11.setTransform(1116.1,317.25,2.4568,2.4568);

	this.start10 = new lib.Symbol3copy();
	this.start10.name = "start10";
	this.start10.setTransform(1164.1,317.25,2.4568,2.4568);

	this.start9 = new lib.Symbol3copy();
	this.start9.name = "start9";
	this.start9.setTransform(1212.1,317.25,2.4568,2.4568);

	this.start8 = new lib.Symbol3copy();
	this.start8.name = "start8";
	this.start8.setTransform(1068.1,267.25,2.4568,2.4568);

	this.start7 = new lib.Symbol3copy();
	this.start7.name = "start7";
	this.start7.setTransform(1116.1,267.25,2.4568,2.4568);

	this.start6 = new lib.Symbol3copy();
	this.start6.name = "start6";
	this.start6.setTransform(1164.1,267.25,2.4568,2.4568);

	this.start5_1 = new lib.Symbol3copy();
	this.start5_1.name = "start5_1";
	this.start5_1.setTransform(1212.1,267.25,2.4568,2.4568);

	this.start4_1 = new lib.Symbol3copy();
	this.start4_1.name = "start4_1";
	this.start4_1.setTransform(1068.1,217.25,2.4568,2.4568);

	this.start3_1 = new lib.Symbol3copy();
	this.start3_1.name = "start3_1";
	this.start3_1.setTransform(1116.1,217.25,2.4568,2.4568);

	this.start2_1 = new lib.Symbol3copy();
	this.start2_1.name = "start2_1";
	this.start2_1.setTransform(1164.1,217.25,2.4568,2.4568);

	this.start1_1 = new lib.Symbol3copy();
	this.start1_1.name = "start1_1";
	this.start1_1.setTransform(1212.1,217.25,2.4568,2.4568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.Frametrue},{t:this.Framefalse},{t:this.Frametf},{t:this.mose},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.start1_1},{t:this.start2_1},{t:this.start3_1},{t:this.start4_1},{t:this.start5_1},{t:this.start6},{t:this.start7},{t:this.start8},{t:this.start9},{t:this.start10},{t:this.start11},{t:this.start12}]},5).to({state:[]},3).wait(1));

	// time
	this.ScoreText = new cjs.Text("0", "bold 75px 'Calibri'", "#FF0033");
	this.ScoreText.name = "ScoreText";
	this.ScoreText.textAlign = "center";
	this.ScoreText.lineHeight = 92;
	this.ScoreText.lineWidth = 131;
	this.ScoreText.parent = this;
	this.ScoreText.setTransform(750.7778,80.9,0.3212,0.3212);

	this.timeText = new cjs.Text("", "bold 70px 'Calibri'");
	this.timeText.name = "timeText";
	this.timeText.textAlign = "center";
	this.timeText.lineHeight = 85;
	this.timeText.lineWidth = 131;
	this.timeText.parent = this;
	this.timeText.setTransform(750.7778,21.5,0.3212,0.3212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.timeText},{t:this.ScoreText}]},1).to({state:[]},5).to({state:[]},1).wait(3));

	// Layer_7
	this.coin = new lib.Symbol3();
	this.coin.name = "coin";
	this.coin.setTransform(692.85,97.3);

	this.clock = new lib.Symbol11();
	this.clock.name = "clock";
	this.clock.setTransform(695,36,1.17,1.17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D2E7EA").ss(1,1,1).p("AivhAIFfAAQAcAAAAAbIAABLQAAAbgcAAIlfAAQgbAAAAgbIAAhLQAAgbAbAAg");
	this.shape_9.setTransform(734.0239,36.2142,2.78,2.78);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CEDCFB").s().p("AivBBQgcAAAAgcIAAhJQAAgcAcAAIFfAAQAcAAAAAcIAABJQAAAcgcAAg");
	this.shape_10.setTransform(734.0239,36.2142,2.78,2.78);

	this.instance = new lib.mc();
	this.instance.setTransform(700.1,104.65,0.53,0.53,0,0,0,13.6,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D2E7EA").ss(1,1,1).p("AivhAIFfAAQAcAAAAAbIAABLQAAAbgcAAIlfAAQgbAAAAgbIAAhLQAAgbAbAAg");
	this.shape_11.setTransform(734.0983,96.3179,2.78,2.78);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CEDCFB").s().p("AivBBQgcAAAAgcIAAhJQAAgcAcAAIFfAAQAcAAAAAcIAABJQAAAcgcAAg");
	this.shape_12.setTransform(734.0983,96.3179,2.78,2.78);

	this.your_tf = new cjs.Text("", "bold 69px 'Arial'", "#FF0000");
	this.your_tf.name = "your_tf";
	this.your_tf.textAlign = "center";
	this.your_tf.lineHeight = 77;
	this.your_tf.lineWidth = 110;
	this.your_tf.parent = this;
	this.your_tf.setTransform(-99.75,63.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C3A3B").s().p("AgoCYIgJgDQgCgCgBgDIACgHIAbhEIgFgEQgDgDgBgEIhGi6QgDgIAAgFQAAgEADgCQACgDAHgBIARgBIAQABQAFAAAEABQADACACADIADAIIAvCJIABAAIAsiMQABgGACgCQACgCAFgBIASgBIARABQAGABADADQADACAAAEQAAAFgCAFIhEDIIgZBJQgCAFgJADQgIADgSAAIgOgBg");
	this.shape_13.setTransform(719.625,64.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C3A3B").s().p("AgNCgIgJgCQgDgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAktIACgDQABgCADgCIAJgCIANgBIAOABQAGABADABQADACACACIABADIAAEtIgBAEIgFADIgJACIgOABIgNgBg");
	this.shape_14.setTransform(702.725,55.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C3A3B").s().p("AgNCgIgJgCQgDgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAktIACgDQABgCADgCIAJgCIANgBIAOABQAGABADABQADACACACIABADIAAEtIgBAEIgFADIgJACIgOABIgNgBg");
	this.shape_15.setTransform(691.175,55.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C3A3B").s().p("Ag5BqQgPgGgIgNQgJgMgEgPQgEgQABgXIAAh9IABgDIAEgEIAJgBIAOgBIAOABIAJABIAFAEIABADIAABzQAAARACAIQACAIAEAGQAEAHAHADQAHADAIAAQALAAAKgIQAMgIAMgQIAAiHIABgDIAFgEIAJgBIAOgBIAOABIAJABIAEAEIABADIAADMIgBAEIgDADIgIACIgMABIgMgBIgIgCIgDgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYQgRATgSAJQgQAJgTAAQgVABgOgIg");
	this.shape_16.setTransform(672.75,60.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C3A3B").s().p("AgXChIgJgCQgEgBAAgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAilIgZAAQgFAAgCgFQgCgFAAgNIABgLIABgHQABgDACgBIAEgBIAZAAIAAgSQAAgVAEgPQAFgQAIgKQAJgLANgFQANgFATAAQAJAAAIABIANADIAFAEIAEAEIABAHIAAALIAAALIgBAGIgCADIgDABIgDgBIgGgCIgGgBIgJgBQgHAAgEACQgEACgDAEQgEAEgBAHQgCAHABAKIAAATIAlAAIAEABIADAEIACAHIAAALQAAANgCAFQgDAFgEAAIglAAIAAClIgBAEIgFADIgJACIgNAAIgOAAg");
	this.shape_17.setTransform(653.25,55.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C3A3B").s().p("AgfBxQgLgBgIgCIgOgGIgIgFQgCgDgCgFQgBgFAAgKIAAgKIACgHIACgDIAEgCQACABAFADIAMAGIARAGQAKADANABQAHgBAGgCQAFgBAFgDQAEgDADgFQACgEAAgGQAAgHgEgEQgEgGgHgDIgPgHIgSgIIgSgIQgJgFgHgHQgHgHgEgKQgFgKAAgPQAAgPAGgMQAGgMAKgJQALgJAQgFQAPgEASAAQAKAAAJABIARADIAMAFIAHAEIADADIACAFIABAGIAAAJIAAAKIgCAFIgCAEIgDABIgHgDIgKgFQgHgDgIgCQgJgCgLgBQgIABgFABQgFACgEADQgEACgCAFQgBAEAAAEQAAAHAEAFQAEAFAHAEIAQAHIASAGQAJAEAJAFQAJAGAHAGQAHAHAFALQAEAJAAAOQAAASgGANQgHAOgMAIQgMAKgQAEQgQAFgSgBQgMAAgKgCg");
	this.shape_18.setTransform(636.075,60.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C3A3B").s().p("AgfBxQgLgBgIgCIgOgGIgIgFQgCgDgCgFQgBgFAAgKIAAgKIACgHIACgDIAEgCQACABAFADIAMAGIARAGQAKADANABQAHgBAGgCQAFgBAFgDQAEgDADgFQACgEAAgGQAAgHgEgEQgEgGgHgDIgPgHIgSgIIgSgIQgJgFgHgHQgHgHgEgKQgFgKAAgPQAAgPAGgMQAGgMAKgJQALgJAQgFQAPgEASAAQAKAAAJABIARADIAMAFIAHAEIADADIACAFIABAGIAAAJIAAAKIgCAFIgCAEIgDABIgHgDIgKgFQgHgDgIgCQgJgCgLgBQgIABgFABQgFACgEADQgEACgCAFQgBAEAAAEQAAAHAEAFQAEAFAHAEIAQAHIASAGQAJAEAJAFQAJAGAHAGQAHAHAFALQAEAJAAAOQAAASgGANQgHAOgMAIQgMAKgQAEQgQAFgSgBQgMAAgKgCg");
	this.shape_19.setTransform(617.325,60.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C3A3B").s().p("AgmBsQgVgGgNgPQgOgOgHgVQgGgVAAgdQAAgaAGgWQAIgWANgPQAOgQATgIQAUgHAXAAQAZgBATAIQASAHALAOQAMANAGATQAFASABAWIAAAJQgBAKgEAEQgFAGgIgBIh8AAQAAAOADALQAEAKAHAIQAGAHAKAEQALAEAOgBQAPAAAMgCIATgEIAPgFQAFgDADABIAEABIACACIACAHIAAAJIAAAJIgBAGIgBAEIgDADIgIAFIgRAFIgXAEQgOACgPAAQgbABgUgIgAgPhFQgJADgFAIQgGAGgDAKQgCAKgBALIBWAAQAAgZgKgNQgKgOgWgBQgLAAgHAFg");
	this.shape_20.setTransform(596,60.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C3A3B").s().p("AgaBsQgTgHgNgPQgMgOgGgVQgHgUABgbQAAgeAIgWQAHgWAOgPQAOgPASgHQATgHAVAAQAJAAAJACIARAEIAOAGIAIAGIAEAEIABAFIABAHIABAJQAAAOgCAFQgDAFgEAAQgDAAgFgDIgKgHIgOgHQgJgDgLAAQgWAAgLARQgMARgBAhQAAAQAEANQACANAHAIQAGAJAHAEQAJAEALAAQAMAAAKgDQAIgEAGgEIALgIQAEgEADAAIAEABIACAFIABAHIAAANIAAAKIgBAHIgBAEIgDAFQgDACgHAEQgGAEgJADQgIADgKABQgKACgLAAQgXAAgRgHg");
	this.shape_21.setTransform(574.6,60.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C3A3B").s().p("AgaBsQgTgHgNgPQgMgOgGgVQgHgUAAgbQABgeAHgWQAIgWAOgPQANgPATgHQATgHAWAAQAIAAAKACIAQAEIAOAGIAIAGIAEAEIACAFIABAHIAAAJQAAAOgCAFQgDAFgDAAQgEAAgFgDIgKgHIgOgHQgJgDgLAAQgWAAgMARQgMARABAhQAAAQACANQADANAGAIQAHAJAIAEQAIAEALAAQANAAAIgDQAJgEAGgEIALgIQAEgEADAAIAEABIACAFIACAHIAAANIAAAKIgBAHIgCAEIgEAFQgCACgHAEQgHAEgIADQgJADgKABQgKACgKAAQgXAAgRgHg");
	this.shape_22.setTransform(554.95,60.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C3A3B").s().p("Ag5BqQgOgGgJgNQgJgMgEgPQgDgQgBgXIAAh9IABgDIAFgEIAJgBIAOgBIAOABIAJABIAEAEIACADIAABzQAAARACAIQACAIAEAGQAFAHAGADQAHADAIAAQALAAALgIQALgIAMgQIAAiHIACgDIAEgEIAJgBIAOgBIAOABIAIABIAFAEIACADIAADMIgBAEIgFADIgHACIgMABIgMgBIgIgCIgEgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYQgRATgSAJQgQAJgTAAQgVABgOgIg");
	this.shape_23.setTransform(532.3,60.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C3A3B").s().p("AgfBxQgLgBgIgCIgOgGIgIgFQgCgDgCgFQgBgFAAgKIAAgKIACgHIACgDIAEgCQACABAFADIAMAGIARAGQAKADANABQAHgBAGgCQAFgBAFgDQAEgDADgFQACgEAAgGQAAgHgEgEQgEgGgHgDIgPgHIgSgIIgSgIQgJgFgHgHQgHgHgEgKQgFgKAAgPQAAgPAGgMQAGgMAKgJQALgJAQgFQAPgEASAAQAKAAAJABIARADIAMAFIAHAEIADADIACAFIABAGIAAAJIAAAKIgCAFIgCAEIgDABIgHgDIgKgFQgHgDgIgCQgJgCgLgBQgIABgFABQgFACgEADQgEACgCAFQgBAEAAAEQAAAHAEAFQAEAFAHAEIAQAHIASAGQAJAEAJAFQAJAGAHAGQAHAHAFALQAEAJAAAOQAAASgGANQgHAOgMAIQgMAKgQAEQgQAFgSgBQgMAAgKgCg");
	this.shape_24.setTransform(510.475,60.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C3A3B").s().p("Ag4CZQgQgJgLgQQgJgPgFgUQgFgVAAgXQAAgbAGgWQAGgUALgQQALgPARgIQARgJAVAAQARAAAOAHQAOAHAOANIAAhuIABgFIAEgDIAJgBIAOgBIAPABQAFAAADABIAFADIABAFIAAErIgBAFIgEADIgHABIgMABIgMgBIgIgBIgDgDQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgWQgQARgRAKQgSAJgTAAQgYAAgQgJgAgUgOQgIAGgFAJQgGAJgCALQgCAMAAAMQAAANACAMQACANAFAJQAFAKAHAFQAIAGAMAAQAFAAAGgCQAFgBAGgFQAGgDAGgHIAOgPIAAhEQgNgPgLgIQgLgIgMAAQgLAAgIAFg");
	this.shape_25.setTransform(477.2,56);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C3A3B").s().p("AgmBsQgVgGgNgPQgOgOgHgVQgGgVAAgdQAAgaAGgWQAIgWANgPQAOgQATgIQAUgHAXAAQAagBASAIQASAHALAOQAMANAGATQAFASABAWIAAAJQgBAKgEAEQgFAGgIgBIh8AAQAAAOADALQAEAKAHAIQAGAHAKAEQALAEAOgBQAQAAALgCIATgEIAOgFQAGgDADABIAEABIACACIACAHIAAAJIAAAJIgBAGIgBAEIgDADIgIAFIgRAFIgXAEQgOACgPAAQgbABgUgIgAgPhFQgJADgFAIQgGAGgDAKQgCAKgBALIBWAAQAAgZgKgNQgKgOgWgBQgLAAgHAFg");
	this.shape_26.setTransform(453.35,60.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C3A3B").s().p("AgBCHQgNgEgIgIQgIgKgEgOQgEgOAAgSIAAhoIgZAAQgEAAgCgFQgCgGAAgNIAAgLIACgHQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABAAIAEgBIAYAAIAAguIABgFQACgBADgBIAJgCIAOgBIANABIAJACQADABABABIACAFIAAAuIAsAAIAEABIADADQABADABAEIAAALQAAANgCAGQgCAFgFAAIgsAAIAABfQAAARAFAIQAFAJAOgBIAIAAIAHgCIAEgBIAEgBIADABIABACIACAHIAAAKIgBAQQgBAFgCADIgGADIgKADIgLADIgNAAQgRAAgMgFg");
	this.shape_27.setTransform(433.075,58.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C3A3B").s().p("AgmBsQgVgGgNgPQgOgOgGgVQgIgVAAgdQAAgaAIgWQAHgWANgPQAOgQAUgIQATgHAXAAQAagBASAIQASAHALAOQANANAFATQAGASAAAWIAAAJQAAAKgFAEQgFAGgIgBIh8AAQAAAOADALQAEAKAGAIQAHAHAKAEQALAEAOgBQAQAAALgCIATgEIAPgFQAFgDAEABIADABIACACIABAHIABAJIgBAJIAAAGIgCAEIgCADIgIAFIgRAFIgXAEQgOACgPAAQgbABgUgIgAgPhFQgJADgFAIQgGAGgDAKQgDAKAAALIBVAAQABgZgKgNQgLgOgVgBQgLAAgHAFg");
	this.shape_28.setTransform(413.45,60.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C3A3B").s().p("AgNCgIgJgCQgDgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAktIACgDQABgCADgCIAJgCIANgBIAOABQAGABADABQADACACACIABADIAAEtIgBAEIgFADIgJACIgOABIgNgBg");
	this.shape_29.setTransform(395.925,55.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C3A3B").s().p("AhXCaIgJgCQgDgCgCgCIgBgDIAAkeIABgDIAEgEIAIgBIAMAAIALAAIAHABIAFAEIABADIAAAZQAJgKAJgGQAIgIAJgEQAJgFAJgCQAJgCALAAQAWAAAQAJQAQAIAKAPQAJAQAGAUQAEAVAAAXQAAAbgGAVQgGAWgLAQQgMAPgQAIQgRAIgWAAQgIAAgHgBQgHgCgHgEIgOgJIgOgMIAABhIgBADQgCACgEACQgCABgGABIgOABIgOgBgAgHhnQgHACgFAEQgGAEgGAGQgHAGgGAKIAABDQAMAPALAIQALAIALAAQALAAAIgGQAIgFAFgKQAFgIACgMQADgMAAgLQAAgNgCgMQgCgMgEgKQgGgJgHgFQgIgGgMAAIgJABg");
	this.shape_30.setTransform(378.2,64.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C3A3B").s().p("AB4BxIgJgCIgFgDIgBgEIAAh4QAAgLgCgIQgCgJgEgFQgEgHgGgDQgGgDgIgBQgLAAgKAJQgLAIgMAPIAACHQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEADIgJACIgOABIgNgBIgJgCIgFgDIgBgEIAAh4QAAgLgCgIQgCgJgEgFQgEgHgGgDQgGgDgIgBQgLAAgKAJQgLAIgMAPIAACHIgBAEIgFADIgJACIgOABIgOgBIgJgCQgDgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjMIABgDIAEgEIAIgBIAMgBIAMABIAIABIADAEIABADIAAAYQARgSARgJQARgJATAAQAMAAAKADQAKACAIAFQAHAFAGAGQAGAIAEAIQAJgKAJgHQAIgHAJgEQAJgFAIgCQAJgCAJAAQAUAAAOAGQAOAIAJALQAIAMAEAPQAEARAAARIAACCQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEADIgJACIgOABIgOgBg");
	this.shape_31.setTransform(345.925,60.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C3A3B").s().p("AgxBrQgUgHgOgOQgNgPgGgVQgHgVAAgbQAAgZAHgWQAHgWAOgPQAOgPAVgJQAVgJAbABQAcgBAUAIQAUAHAOAPQANAOAGAWQAHAUAAAcQAAAZgHAVQgHAWgOAQQgOAPgVAJQgVAIgcAAQgbABgUgJgAgVhAQgKAEgGAKQgGAIgDANQgDANAAAQQAAAOACANQADANAFAKQAGAJAKAFQAJAFAOAAQANAAAJgEQAKgFAGgJQAGgJADgMQADgNAAgRQAAgOgCgNQgDgNgFgJQgGgJgKgGQgJgFgPAAQgLAAgKAFg");
	this.shape_32.setTransform(314.075,60.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C3A3B").s().p("AgbBsQgSgHgMgPQgNgOgGgVQgGgUgBgbQAAgeAJgWQAHgWANgPQAOgPATgHQATgHAVAAQAKAAAIACIARAEIAOAGIAJAGIADAEIABAFIABAHIABAJQAAAOgDAFQgCAFgDAAQgFAAgDgDIgLgHIgOgHQgIgDgMAAQgWAAgLARQgMARAAAhQAAAQADANQACANAHAIQAFAJAJAEQAIAEAMAAQALAAAJgDQAJgEAHgEIAKgIQAFgEADAAIADABIACAFIACAHIAAANIAAAKIgCAHIgBAEIgDAFQgDACgHAEQgHAEgIADQgIADgLABQgKACgKAAQgWAAgTgHg");
	this.shape_33.setTransform(291.85,60.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C3A3B").s().p("AgmBsQgUgGgOgPQgOgOgGgVQgIgVABgdQgBgaAIgWQAGgWAOgPQAOgQAUgIQASgHAYAAQAagBASAIQASAHAMAOQAMANAFATQAGASgBAWIAAAJQABAKgFAEQgFAGgIgBIh8AAQAAAOAEALQACAKAHAIQAHAHALAEQAKAEAOgBQAPAAAMgCIAUgEIANgFQAGgDADABIAEABIACACIABAHIABAJIgBAJIAAAGIgCAEIgCADIgIAFIgRAFIgYAEQgNACgPAAQgaABgVgIgAgQhFQgIADgFAIQgFAGgDAKQgDAKgBALIBVAAQABgZgKgNQgKgOgXgBQgJAAgJAFg");
	this.shape_34.setTransform(259.35,60.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C3A3B").s().p("AgTBvIgMgCQgEgBgCgDIgDgGIg9i4IgDgIIAAgGIgBgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgDAEgBIAIgBIAPAAIAPAAIAJABQADABACADIACAEIAtCWIACAFIABgFIAuiWIACgEQACgDADgBIAIgBIAOAAIAPAAIAIABQADABABADIABADIAAADIAAAEIgBAEIgBAGIg+C4IgDAGIgGAEQgFABgIABIgUABIgTgBg");
	this.shape_35.setTransform(236.5,60.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C3A3B").s().p("AgwBvQgNgEgKgJQgKgIgGgMQgFgMAAgRQAAgSAHgNQAHgNAOgIQANgJAVgEQAVgEAaAAIAUAAIAAgMQAAgKgCgHQgCgHgEgGQgFgEgHgCQgIgCgKgBQgOABgMADQgLACgJAFIgOAHQgGADgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgCgCgBgDIgDgIIAAgJIABgLQABgEADgEQADgDAJgEQAIgFAKgDQALgDANgCQANgCAMAAQAYAAARAEQARAFALAKQALAKAFAPQAFAPAAAWIAACIQAAADgCACQgCACgFABIgPABIgPgBQgEgBgCgCQgCgCAAgDIAAgRQgNAOgQAHQgQAJgTgBQgQABgOgFgAgIARQgKACgGAEQgGAFgDAFQgDAHAAAHQAAANAIAHQAIAIAPAAQALgBAKgGQAKgGALgMIAAgjIgWAAQgOAAgJACg");
	this.shape_36.setTransform(213.125,60.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C3A3B").s().p("AA3CgIgJgCIgFgDIgBgEIAAh0QAAgQgCgIQgCgJgEgEQgFgHgGgDQgHgDgIgBQgKAAgMAJQgLAHgMAPIAACIIgBAEIgFADIgJACIgOABIgOgBIgJgCQgDgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAktIACgDQABgCADgCIAJgCIAOgBIAOABQAGABADABQADACACACIABADIAAByQAPgPAPgHQAPgIARABQAUAAAPAGQAOAIAJALQAJAMAEAQQAEAPAAAXIAAB9QAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEADIgJACIgOABIgOgBg");
	this.shape_37.setTransform(189.675,55.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C3A3B").s().p("Ag5BqQgOgGgJgNQgJgMgEgPQgDgQgBgXIAAh9IABgDIAFgEIAJgBIAOgBIAOABIAJABIAEAEIACADIAABzQAAARACAIQACAIAEAGQAFAHAGADQAGADAJAAQALAAALgIQAKgIANgQIAAiHIABgDIAFgEIAJgBIAOgBIAOABIAIABIAFAEIACADIAADMIgBAEIgFADIgHACIgMABIgMgBIgIgCIgEgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYQgRATgSAJQgQAJgTAAQgVABgOgIg");
	this.shape_38.setTransform(153.75,60.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C3A3B").s().p("AgxBrQgUgHgOgOQgNgPgGgVQgHgVAAgbQAAgZAHgWQAHgWAOgPQAOgPAVgJQAVgJAbABQAcgBAUAIQAUAHAOAPQANAOAGAWQAHAUAAAcQAAAZgHAVQgHAWgOAQQgOAPgVAJQgVAIgcAAQgbABgUgJgAgVhAQgKAEgGAKQgGAIgDANQgDANAAAQQAAAOACANQADANAFAKQAGAJAKAFQAJAFAOAAQANAAAJgEQAKgFAGgJQAGgJADgMQADgNAAgRQAAgOgCgNQgDgNgFgJQgGgJgKgGQgJgFgPAAQgLAAgKAFg");
	this.shape_39.setTransform(128.525,60.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C3A3B").s().p("AgOCVIgJgCIgFgDIgBgEIAAhoIhSihQgEgJgBgEQgCgFADgCQADgDAHAAIAUgBIARAAIAJACQAEABACADIADAFIAhBJIAKAWIAIAZIABAAIAJgZIAJgWIAghIQABgEACgCQACgCADgCIAKgCIAPAAIAVABQAHAAADADQACACgBAFIgGANIhRChIAABoQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgFADIgKACIgOABIgOgBg");
	this.shape_40.setTransform(103.7031,56.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.your_tf},{t:this.shape_12},{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.clock},{t:this.coin}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},5).to({state:[]},1).wait(3));

	// label
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRBAIgLgDIgHgDIgFgDIgCgEIgBgIIAAgGIABgEIABgCIACAAIAFABIAGAEIAKADQAGACAHAAIAGgBIAGgCIAEgFIABgGQAAgDgCgDIgGgFIgIgEIgKgEIgLgFQgFgDgDgDQgEgEgDgGQgCgGAAgIQAAgIADgHQADgHAGgFQAGgFAJgCQAJgDAKAAIAKABIAJACIAHACIAEADIACACIABACIAAADIAAAFIAAAGIAAADIgCACIgBAAIgEgBIgGgDIgJgDQgEgBgHAAIgGABIgGACIgDAEIgBAFQAAAEADADQACADAEACIAIAEIALAEIAKAEIAJAGQAEAFACAFQADAGAAAIQAAAKgEAHQgDAIgHAFQgHAFgJACQgJADgKAAIgMgBg");
	this.shape_41.setTransform(226.775,98.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAFgNAHgIQAIgJALgEQAKgFANAAQAOAAALAEQAKAFAGAHQAIAIACAKQADAKAAAMIAAAGQAAAEgCADQgDADgFAAIhEAAQAAAHACAHQABAFAEAFQADAEAGACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQAAgNgGgIQgFgIgNAAQgFAAgFACg");
	this.shape_42.setTransform(214.8,98.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_43.setTransform(202.775,98.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgaA+QgIgCgFgFQgGgEgDgHQgDgHAAgKQAAgKADgHQAFgIAHgDQAIgFALgDQAMgCAOAAIAMAAIAAgHIgBgJIgEgHQgDgDgEgBIgJgBQgIAAgGABIgMAEIgIAEIgFACIgCgBIgDgCIgBgEIAAgGIAAgGIADgEIAGgEIALgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJgBALIAABNIgBADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgKAAQgIAAgIgDgAgEAKQgFABgEACQgDACgCAEQgBADgBAEQABAIAEAEQAEAEAIAAQAHAAAFgEQAGgDAGgHIAAgTIgNAAIgMABg");
	this.shape_44.setTransform(190.25,98.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHBaIgFgBIgCgCIgBgCIAAipIABgCIACgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAACpIAAACIgDACIgFABIgIAAIgHAAg");
	this.shape_45.setTransform(180.875,95.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgxBWIgEgBIgDgCIgBgCIAAigIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIAAACIAAAOIALgJIAKgHIAJgEIALgBQANAAAIAFQAKAFAFAJQAGAIACAMQADALAAANQAAAQgDALQgDAMgHAJQgGAIgKAFQgJAFgMAAIgIgBIgIgDIgIgFIgIgHIAAA2IgBACIgCACIgGABIgIABIgIgBgAgEg5IgGADIgHAGIgHAIIAAAmQAHAIAFAEQAHAFAGAAQAGAAAEgDQAFgDADgFQADgFABgGIABgNIgBgPQgBgGgCgGQgDgFgFgDQgEgDgHAAIgFABg");
	this.shape_46.setTransform(170.85,100.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgDgMQgFgMAAgQQAAgOAFgMQADgNAIgIQAHgJALgEQALgFANAAQAOAAALAEQAKAFAGAHQAHAIAEAKQADAKAAAMIAAAGQgBAEgCADQgDADgEAAIhFAAQgBAHACAHQACAFAEAFQAEAEAGACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgCACIgEACIgKADIgNADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgCAGIgBALIAvAAQAAgNgFgIQgHgIgLAAQgGAAgEACg");
	this.shape_47.setTransform(150.85,98.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgRBAIgLgDIgHgDIgFgDIgCgEIgBgIIAAgGIABgEIABgCIACAAIAFABIAGAEIAKADQAGACAHAAIAGgBIAGgCIAEgFIABgGQAAgDgCgDIgGgFIgIgEIgKgEIgLgFQgFgDgDgDQgEgEgDgGQgCgGAAgIQAAgIADgHQADgHAGgFQAGgFAJgCQAJgDAKAAIAKABIAJACIAHACIAEADIACACIABACIAAADIAAAFIAAAGIAAADIgCACIgBAAIgEgBIgGgDIgJgDQgEgBgHAAIgGABIgGACIgDAEIgBAFQAAAEADADQACADAEACIAIAEIALAEIAKAEIAJAGQAEAFACAFQADAGAAAIQAAAKgEAHQgDAIgHAFQgHAFgJACQgJADgKAAIgMgBg");
	this.shape_48.setTransform(139.025,98.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAFgNAHgIQAIgJALgEQAKgFANAAQAOAAALAEQAKAFAGAHQAIAIACAKQADAKAAAMIAAAGQAAAEgCADQgDADgFAAIhEAAQAAAHACAHQABAFAEAFQADAEAGACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgJADIgOADIgQABQgOAAgMgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQAAgNgGgIQgFgIgNAAQgFAAgFACg");
	this.shape_49.setTransform(127.05,98.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAfBaIgFgBIgCgCIgCgCIAAhCIgBgNQAAgFgDgCIgGgFQgDgCgGAAQgFAAgGAEQgGAEgIAIIAABNIAAACIgDACIgEABIgIAAIgIAAIgGgBIgCgCIgBgCIAAipIABgCIACgCIAGgBIAIAAIAIAAIAEABIADACIAAACIAABAQAJgIAJgEQAIgEAJAAQALAAAJADQAIAEAFAHQAEAHADAJQACAIAAAMIAABHIgBACIgCACIgFABIgIAAIgIAAg");
	this.shape_50.setTransform(113.35,95.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAABMQgHgCgFgFQgFgFgCgIQgCgIAAgKIAAg6IgOAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAQgCgDAAgHIABgHIABgEIABgCIACAAIAOAAIAAgaIABgCIACgCIAFgBIAIgBIAHABIAFABIADACIAAACIAAAaIAZAAIADAAIABACIABAEIABAHQAAAHgCADQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgaAAIAAA1QAAAJADAFQADAFAIAAIAFgBIADgBIADgBIACAAIABAAIACACIAAAEIABAGIgBAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgDACIgGABIgGABIgHABQgKAAgGgDg");
	this.shape_51.setTransform(101.475,96.575);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAfA/IgFgBIgCgBIgBgDIAAhAIgBgNQgCgFgCgEIgGgFQgDgCgFAAQgGAAgGAFQgHAEgGAJIAABLIgBADIgDABIgEABIgIABIgIgBIgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIACABIABACIAAAOQAJgLAKgFQAJgFALAAQAMAAAIAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgCABIgFABIgIABIgIgBg");
	this.shape_52.setTransform(578.85,57.725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHBYIgFgBIgDgCIgBgDIAAhxIABgDIADgBIAFgBIAHAAIAIAAIAFABIADABIAAADIAABxIAAADIgDACIgFABIgIAAIgHAAgAgOg4QgDgEgBgKQAAgKAFgDQADgEAKAAQALAAAEAEQAEADgBAJQAAALgDADQgFAEgKAAQgKAAgEgDg");
	this.shape_53.setTransform(568.5,55.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgfBWQgJgFgGgJQgFgIgDgMQgDgMAAgMQAAgPAEgNQADgLAGgJQAHgJAJgEQAJgFANABQAIAAAIADQAIAEAIAIIAAg/IABgCIACgBIAFgBIAHgBIAIABIAGABIACABIABACIAACoIgBADIgCACIgEABIgGAAIgHAAIgFgBIgCgCIgBgDIAAgMQgJAKgJAEQgKAGgLAAQgNAAgJgFgAgLgHQgEADgDAFIgFALQgBAGAAAIIABANQABAIADAFQADAFAEAEQAEADAHAAIAGgBIAGgEIAHgFIAIgJIAAgmQgHgIgHgFQgGgEgGAAQgGAAgFADg");
	this.shape_54.setTransform(551.9,55.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgEgMAAgQQAAgOAEgMQAFgNAHgIQAIgJALgEQALgFAMAAQAOAAALAEQAKAFAGAHQAIAIACAKQADAKABAMIAAAGQAAAEgDADQgDADgFAAIhEAAQAAAHACAHQABAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQABgNgHgIQgGgIgMAAQgFAAgFACg");
	this.shape_55.setTransform(538.45,57.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAeA+IgGgBIgEgCIgBgDIgThFIAAgBIAAABIgSBFIgBADIgDACIgHABIgKABIgKgBIgHgBIgDgCIgCgDIgehnIgBgGIgBgEIABgCIADgCIAFgBIAIAAIAIAAIAFABIACACIACADIAWBTIABACIAAgCIAVhTIACgDIACgCIAFgBIAGAAIAIABIAFABIACABIABACIAXBUIABACIAAgCIAWhTIABgDIADgCIAEgBIAIAAIAIAAIAFABIACACIABACIAAAEIgCAGIgfBnIgBADIgDACIgGABIgLABIgKgBg");
	this.shape_56.setTransform(522.025,57.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbA8QgLgEgIgIQgIgIgDgMQgEgMABgPQAAgOADgMQAEgMAIgJQAIgIAMgFQAMgFAPAAQAPAAALAEQAMAEAHAJQAHAIAEAMQAEALAAAQQgBANgEANQgDAMgIAIQgIAJgMAFQgMAFgOAAQgQAAgLgFgAgMgkQgFADgEAFQgDAFgBAHQgCAHAAAJQAAAIABAHQABAHADAGQAEAFAFADQAFADAIAAQAHAAAFgDQAGgCADgGQAEgFACgHQABgHAAgJIgBgPQgCgHgDgFQgDgFgGgDQgEgDgJAAQgGAAgGACg");
	this.shape_57.setTransform(505.1,57.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBaIgFgBIgCgCIgBgCIAAipIABgCIACgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAACpIAAACIgDACIgFABIgIAAIgHAAg");
	this.shape_58.setTransform(494.725,55.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHBaIgFgBIgCgCIgBgCIAAipIABgCIACgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAACpIAAACIgDACIgFABIgIAAIgHAAg");
	this.shape_59.setTransform(488.275,55.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaA+QgIgCgFgFQgGgEgDgHQgDgHgBgKQABgKAEgHQAEgIAHgDQAIgFALgDQAMgCAOAAIAMAAIAAgHIgBgJIgEgHQgDgDgEgBIgJgBQgIAAgGABIgMAEIgIAEIgFACIgCgBIgDgCIgBgEIAAgGIAAgGIADgEIAGgEIALgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQACAJAAALIAABNIgBADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgKAAQgJAAgHgDgAgEAKQgGABgDACQgDACgCAEQgBADAAAEQAAAIAEAEQAEAEAJAAQAFAAAGgEQAGgDAGgHIAAgTIgNAAIgMABg");
	this.shape_60.setTransform(478.15,57.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgDgMQgFgMAAgQQAAgOAFgMQAEgNAHgIQAIgJALgEQALgFAMAAQAOAAALAEQAKAFAGAHQAIAIACAKQAEAKAAAMIAAAGQAAAEgDADQgDADgEAAIhFAAQAAAHABAHQACAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgCAGIgBALIAvAAQABgNgGgIQgHgIgLAAQgGAAgFACg");
	this.shape_61.setTransform(459.35,57.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgbA/IgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIADABIAAACIAAAPIAIgLIAHgHQAEgCAEgBIAGgBIAEAAIAEABIAEABIACABIABACIAAACIABAEIAAAHIAAAIIgBAEIgBADIgCAAIgDAAIgDgBIgDgBIgFgBIgFACIgGADIgGAGIgFAKIAABGIgBADIgDABIgEABIgIABIgIgBg");
	this.shape_62.setTransform(448.7,57.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgCgHAAgKQAAgKADgHQAEgIAIgDQAIgFAMgDQALgCAPAAIALAAIAAgHIgBgJIgEgHQgCgDgEgBIgKgBQgIAAgGABIgLAEIgJAEIgFACIgCgBIgCgCIgCgEIAAgGIAAgGIADgEIAGgEIALgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQACAJAAALIAABNIgBADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgKAAQgIAAgIgDgAgEAKQgFABgEACQgEACgBAEQgBADgBAEQABAIAEAEQAFAEAHAAQAHAAAGgEQAFgDAGgHIAAgTIgNAAIgMABg");
	this.shape_63.setTransform(436.5,57.825);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgbBUQgLgCgHgEQgGgEgDgGQgDgGAAgGIABgJIADgHIAFgHIAHgGQgFgDgDgFQgDgFAAgGQAAgIADgFQAEgHAFgEQgEgFgDgGQgDgHAAgJQAAgKAEgIQADgIAHgGQAGgFAJgDQAJgDAKAAIAKABIAJACIAkAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQABADAAAGQAAAHgBADQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgNAAQADAEABAEIABAIQAAAKgDAIQgEAHgGAFQgGAGgJACQgJADgKAAQgFAAgFgBIgIgDIgDAEQgBACAAACQAAAEADACQAEACAFABIAbABQAKAAAIACQAIADAFAEQAFAEADAGQADAHAAAIQAAAIgEAIQgEAHgHAGQgIAFgLAEQgLACgOAAQgPAAgKgCgAgVAnIgDAEIgCAEIAAAEQAAAGAHAEQAGADAMABQAGgBAFgBQAFgCADgCQAEgCABgDQABgEAAgDQAAgFgFgEQgEgDgIAAIgWgBIgGAFgAgLg9QgDABgDADIgDAGIgBAIQAAAIAFAGQAFAFAJAAQAEAAAEgCIAGgEQACgDABgDIABgHQAAgKgFgFQgFgGgIABQgFAAgEACg");
	this.shape_64.setTransform(418.025,60.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAfA/IgFgBIgCgBIgBgDIAAhAIgBgNQgBgFgDgEIgGgFQgDgCgFAAQgGAAgGAFQgHAEgGAJIAABLIgBADIgDABIgEABIgJABIgIgBIgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIABACIAAAOQAJgLAKgFQAJgFALAAQAMAAAIAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgDABIgEABIgIABIgIgBg");
	this.shape_65.setTransform(404.8,57.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBYIgFgBIgDgCIAAgDIAAhxIAAgDIADgBIAFgBIAHAAIAIAAIAFABIADABIAAADIAABxIAAADIgDACIgFABIgIAAIgHAAgAgOg4QgEgEABgKQAAgKADgDQAEgEAKAAQALAAAEAEQADADABAJQAAALgFADQgEAEgKAAQgKAAgEgDg");
	this.shape_66.setTransform(394.5,55.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgwBWIgGgBIgCgCIgBgCIAAigIABgCIACgBIAFgBIAGgBIAGABIAFABIACABIABACIAAAOIAKgJIAJgHIAKgEIALgBQANAAAJAFQAIAFAGAJQAGAIACAMQADALAAANQAAAQgDALQgDAMgHAJQgGAIgKAFQgJAFgMAAIgJgBIgIgDIgIgFIgIgHIAAA2IAAACIgCACIgGABIgHABIgIgBgAgDg5IgHADIgHAGIgIAIIAAAmQAHAIAHAEQAGAFAFAAQAHAAAEgDQAFgDACgFQADgFACgGIABgNIgBgPQgBgGgDgGQgDgFgDgDQgFgDgHAAIgEABg");
	this.shape_67.setTransform(384.45,60.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("ABEA/IgFgBIgDgBIAAgDIAAhDIgBgKIgEgJIgGgFQgDgCgFAAQgGAAgGAFQgGAEgGAJIAABLIgBADIgDABIgFABIgIABIgHgBIgEgBIgDgBIgBgDIAAhDIgBgKQgBgFgCgEQgCgDgEgCQgEgCgEAAQgGAAgGAFQgGAEgHAJIAABLIgBADIgCABIgFABIgIABIgIgBIgFgBIgDgBIAAgDIAAhyIAAgCIACgBIAFgBIAGgBIAHABIAFABIACABIAAACIAAAOQAKgLAJgFQAKgFAKAAQAIAAAFACIAKAEIAHAGIAFAJIAKgJIAKgHQAFgDAFgBIAKgBQALAAAIAEQAIAEAFAGQAEAHACAJQACAJAAAKIAABIIAAADIgCABIgGABIgIABIgHgBg");
	this.shape_68.setTransform(366.35,57.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgDgHAAgKQAAgKAFgHQADgIAJgDQAHgFALgDQANgCANAAIAMAAIAAgHIgBgJIgEgHQgDgDgEgBIgJgBQgIAAgHABIgLAEIgIAEIgFACIgDgBIgBgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQAOAAAJADQAKACAGAGQAGAFADAJQACAJABALIAABNIgBADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgKAAQgKAAgHgDgAgEAKQgGABgDACQgEACgBAEQgBADAAAEQgBAIAFAEQAEAEAJAAQAGAAAFgEQAGgDAGgHIAAgTIgMAAIgNABg");
	this.shape_69.setTransform(348.7,57.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_70.setTransform(337.125,57.825);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgEgMAAgQQAAgOAEgMQAFgNAHgIQAIgJALgEQALgFAMAAQAOAAALAEQAKAFAGAHQAIAIACAKQADAKABAMIAAAGQAAAEgDADQgDADgFAAIhEAAQAAAHACAHQABAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQABgNgHgIQgGgIgMAAQgFAAgFACg");
	this.shape_71.setTransform(318.85,57.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAdBaIgGgBIgDgCIgCgCIgmg9IAAA9IgBACIgCACIgFABIgIAAIgIAAIgFgBIgCgCIgBgCIAAipIABgCIACgCIAFgBIAIAAIAIAAIAFABIACACIABACIAABkIAhgsIACgDIAEgCIAFgBIAIAAIAIAAIAGABIACACIABACIgBAEIgCAFIgiAlIAmA8IADAFIABADIgBACIgDACIgFABIgIAAIgIAAg");
	this.shape_72.setTransform(306.55,55.075);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgHBYIgFgBIgCgCIgCgDIAAhxIACgDIACgBIAFgBIAHAAIAIAAIAFABIACABIABADIAABxIgBADIgCACIgFABIgIAAIgHAAgAgOg4QgDgEgBgKQAAgKAFgDQADgEAKAAQALAAAEAEQAEADgBAJQAAALgDADQgEAEgLAAQgKAAgEgDg");
	this.shape_73.setTransform(296.35,55.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgHBaIgFgBIgCgCIgBgCIAAipIABgCIACgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAACpIAAACIgDACIgFABIgIAAIgHAAg");
	this.shape_74.setTransform(289.875,55.075);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgRBAIgLgDIgHgDIgFgDQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIgBgIIAAgGIABgEIABgCIACAAIAFABIAGAEIAKADQAGACAHAAIAGgBIAGgCIAEgFIABgGQAAgDgCgDIgGgFIgIgEIgKgEIgLgFQgFgDgDgDQgEgEgDgGQgCgGAAgIQAAgIADgHQADgHAGgFQAGgFAJgCQAJgDAKAAIAKABIAJACIAHACIAEADIACACIABACIAAADIAAAFIAAAGIAAADIgCACIgBAAIgEgBIgGgDIgJgDQgEgBgHAAIgGABIgGACIgDAEIgBAFQAAAEADADQACADAEACIAIAEIALAEIAKAEIAJAGQAEAFACAFQADAGAAAIQAAAKgEAHQgDAIgHAFQgHAFgJACQgJADgKAAIgMgBg");
	this.shape_75.setTransform(275.475,57.825);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgDgMQgEgMgBgQQABgOAEgMQADgNAIgIQAHgJALgEQALgFANAAQAPAAAKAEQAKAFAHAHQAGAIAEAKQACAKABAMIAAAGQgBAEgCADQgDADgEAAIhGAAQAAAHACAHQACAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgCAGIgCALIAwAAQAAgNgFgIQgHgIgLAAQgGAAgEACg");
	this.shape_76.setTransform(263.45,57.825);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgHBYIgFgBIgDgCIgBgDIAAhxIABgDIADgBIAFgBIAHAAIAIAAIAFABIADABIAAADIAABxIAAADIgDACIgFABIgIAAIgHAAgAgOg4QgEgEABgKQAAgKADgDQAEgEAKAAQALAAAEAEQADADABAJQAAALgFADQgDAEgLAAQgKAAgEgDg");
	this.shape_77.setTransform(253.65,55.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAABMQgHgCgFgFQgFgFgCgIQgCgIAAgKIAAg6IgOAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAQgCgDAAgHIABgHIABgEIABgCIACAAIAOAAIAAgaIABgCIACgCIAFgBIAIgBIAHABIAFABIADACIAAACIAAAaIAZAAIADAAIABACIABAEIABAHQAAAHgCADQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgaAAIAAA1QAAAJADAFQADAFAIAAIAFgBIADgBIADgBIACAAIABAAIACACIAAAEIABAGIgBAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgDACIgGABIgGABIgHABQgKAAgGgDg");
	this.shape_78.setTransform(245.625,56.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgHBYIgFgBIgDgCIgBgDIAAhxIABgDIADgBIAFgBIAHAAIAIAAIAFABIADABIAAADIAABxIAAADIgDACIgFABIgIAAIgHAAgAgOg4QgDgEAAgKQAAgKADgDQAEgEAKAAQALAAAEAEQADADAAAJQAAALgDADQgFAEgKAAQgKAAgEgDg");
	this.shape_79.setTransform(238,55.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgKA+IgHgBIgEgCIgBgDIgjhnIgBgFIAAgDIAAgCIAAgCIACgCIAGgBIAIAAIAIABIAFABIACABIACADIAZBTIABADIABgDIAZhTIACgDIADgBIAEgBIAIgBIAIAAIAFABIACACIAAACIAAACIAAACIAAACIgBAEIgjBnIgBADIgEACIgHABIgLABIgKgBg");
	this.shape_80.setTransform(228.5,57.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgHBYIgFgBIgCgCIgBgDIAAhxIABgDIACgBIAFgBIAHAAIAIAAIAFABIACABIABADIAABxIgBADIgCACIgFABIgIAAIgHAAgAgOg4QgEgEAAgKQAAgKAFgDQADgEAKAAQALAAAEAEQADADAAAJQAAALgEADQgDAEgLAAQgKAAgEgDg");
	this.shape_81.setTransform(219.05,55.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAABMQgHgCgFgFQgFgFgCgIQgCgIAAgKIAAg6IgOAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAQgCgDAAgHIABgHIABgEIABgCIACAAIAOAAIAAgaIABgCIACgCIAFgBIAIgBIAHABIAFABIADACIAAACIAAAaIAZAAIADAAIABACIABAEIABAHQAAAHgCADQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgaAAIAAA1QAAAJADAFQADAFAIAAIAFgBIADgBIADgBIACAAIABAAIACACIAAAEIABAGIgBAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgDACIgGABIgGABIgHABQgKAAgGgDg");
	this.shape_82.setTransform(211.025,56.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_83.setTransform(201.225,57.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgaA+QgIgCgFgFQgGgEgDgHQgEgHAAgKQAAgKAFgHQAEgIAHgDQAIgFALgDQAMgCAOAAIAMAAIAAgHIgBgJIgEgHQgCgDgFgBIgJgBQgIAAgHABIgLAEIgIAEIgFACIgDgBIgCgCIgBgEIAAgGIAAgGIADgEIAGgEIALgFIANgDIAOgBQAOAAAJADQAKACAGAGQAGAFADAJQACAJAAALIAABNIAAADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgLAAQgJAAgHgDgAgEAKQgGABgDACQgDACgCAEQgCADABAEQAAAIAEAEQAEAEAJAAQAFAAAGgEQAGgDAGgHIAAgTIgNAAIgMABg");
	this.shape_84.setTransform(188.7,57.825);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAfA/IgFgBIgDgBIAAgDIAAhAIgBgNQgBgFgDgEIgGgFQgEgCgEAAQgGAAgGAFQgHAEgGAJIAABLIgBADIgCABIgGABIgIABIgIgBIgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIABACIAAAOQAKgLAKgFQAIgFALAAQALAAAJAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgDABIgEABIgIABIgIgBg");
	this.shape_85.setTransform(169.55,57.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgCgHAAgKQgBgKAEgHQAFgIAIgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgDgDgDgBIgKgBQgIAAgHABIgKAEIgJAEIgFACIgDgBIgBgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJAAALIAABNIgBADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgJAAQgJAAgIgDgAgEAKQgGABgDACQgDACgCAEQgBADAAAEQgBAIAFAEQAFAEAHAAQAGAAAHgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_86.setTransform(155.55,57.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABEA/IgGgBIgCgBIAAgDIAAhDIgBgKIgEgJIgGgFQgDgCgFAAQgGAAgGAFQgGAEgGAJIAABLIgBADIgDABIgFABIgIABIgHgBIgEgBIgDgBIgBgDIAAhDIgBgKQgBgFgCgEQgCgDgEgCQgEgCgEAAQgGAAgGAFQgGAEgHAJIAABLIgBADIgCABIgFABIgIABIgIgBIgFgBIgDgBIAAgDIAAhyIAAgCIACgBIAFgBIAGgBIAHABIAFABIACABIABACIAAAOQAJgLAJgFQAKgFAKAAQAIAAAFACIAKAEIAHAGIAFAJIAKgJIAKgHQAFgDAFgBIAKgBQALAAAIAEQAIAEAFAGQAEAHACAJQACAJAAAKIAABIIAAADIgCABIgGABIgIABIgHgBg");
	this.shape_87.setTransform(138.65,57.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AggA8QgHgEgFgHQgGgGgBgJQgDgJAAgNIAAhGIABgCIADgBIAFgBIAHgBIAIABIAFABIACABIABACIAABAIABAOIAEAIQACAEAEACQAEABAFAAQAFAAAHgEQAGgFAGgIIAAhMIABgCIADgBIAFgBIAIgBIAIABIAEABIADABIABACIAAByIgBADIgCABIgEABIgHABIgHgBIgEgBIgCgBIgBgDIAAgNQgJAKgKAGQgJAFgLAAQgLAAgJgEg");
	this.shape_88.setTransform(120.8,57.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAoBUIgFgBIgDgCIgBgCIAAhEIg9AAIAABEIgBACIgDACIgFABIgIAAIgIAAIgFgBIgDgCIgBgCIAAidIABgCIADgCIAFgBIAIAAIAIAAIAFABIADACIABACIAAA9IA9AAIAAg9IABgCIADgCIAFgBIAIAAIAIAAIAGABIACACIABACIAACdIgBACIgCACIgGABIgIAAIgIAAg");
	this.shape_89.setTransform(105.425,55.675);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgQBZQgDgBgCgCQgDgCAAgEIgBgJIABgJQAAgDADgDQACgCADgBIAJgBIAIABQADABACACQADADAAADIABAJIgBAJQAAAEgDACQgCACgDABIgIABIgJgBgAgOAnIgFgBIgCgBIgBgDIgBgeIAAgGIACgEIADgCIAFAAIACAAQAHAAAEgDQAFgCADgDQADgEACgFQABgFAAgFQAAgHgCgFQgBgFgEgEQgDgDgFgCQgFgCgHAAIgMABIgJADIgGADIgDABIgCgBIgBgCIgBgEIAAgHIAAgHQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQABgCAEgBIAIgEIALgCIANgBQAOAAALAEQALAEAHAHQAHAHADAKQADAJAAAKQAAAKgDAJQgDAIgFAHQgGAFgHAEQgIADgJABIgBAZQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBABQgDABgGAAIgHAAg");
	this.shape_90.setTransform(548.475,56.025);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgaA+QgIgCgFgFQgGgEgDgHQgDgHgBgKQABgKAEgHQAEgIAHgDQAIgFALgDQAMgCAOAAIAMAAIAAgHIgBgJIgEgHQgDgDgEgBIgJgBQgIAAgGABIgMAEIgIAEIgFACIgCgBIgDgCIgBgEIAAgGIAAgGIADgEIAGgEIALgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJgBALIAABNIAAADIgEABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgKAAQgJAAgHgDgAgEAKQgGABgDACQgDACgCAEQgBADAAAEQAAAIAEAEQAEAEAJAAQAFAAAGgEQAGgDAGgHIAAgTIgNAAIgMABg");
	this.shape_91.setTransform(535.3,58.675);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgDgMQgFgMAAgQQAAgOAFgMQAEgNAHgIQAHgJAMgEQAKgFANAAQAOAAALAEQAKAFAGAHQAIAIACAKQAEAKAAAMIAAAGQgBAEgCADQgDADgEAAIhFAAQAAAHABAHQACAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgCAGIgBALIAvAAQAAgNgFgIQgHgIgLAAQgGAAgFACg");
	this.shape_92.setTransform(522.45,58.675);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgbA/IgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIACABIABACIAAAPIAIgLIAHgHQADgCAFgBIAHgBIADAAIAEABIAEABIACABIABACIAAACIABAEIAAAHIAAAIIgBAEIgBADIgCAAIgCAAIgEgBIgDgBIgFgBIgFACIgGADIgGAGIgFAKIAABGIgBADIgDABIgEABIgIABIgIgBg");
	this.shape_93.setTransform(511.8,58.575);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgCgHAAgKQAAgKADgHQAFgIAIgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgCgDgEgBIgKgBQgIAAgGABIgLAEIgJAEIgFACIgCgBIgCgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAKACAGAGQAGAFADAJQACAJAAALIAABNIgBADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgLAAQgIAAgIgDgAgEAKQgGABgDACQgEACgBAEQgCADAAAEQAAAIAFAEQAFAEAHAAQAHAAAGgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_94.setTransform(499.6,58.675);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAfA/IgFgBIgDgBIgBgDIAAhAIgBgNQgBgFgCgEIgGgFQgEgCgFAAQgFAAgGAFQgGAEgIAJIAABLIAAADIgDABIgFABIgHABIgIgBIgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIADABIAAACIAAAOQAJgLAKgFQAJgFALAAQALAAAJAEQAIAEAFAGQAFAHACAJQACAJAAAMIAABGIAAADIgDABIgFABIgIABIgIgBg");
	this.shape_95.setTransform(480.45,58.575);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgaA+QgIgCgFgFQgGgEgDgHQgDgHgBgKQABgKAEgHQAEgIAHgDQAIgFALgDQAMgCAOAAIAMAAIAAgHIgBgJIgEgHQgDgDgEgBIgJgBQgIAAgGABIgMAEIgIAEIgFACIgCgBIgDgCIgBgEIAAgGIAAgGIADgEIAGgEIALgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJgBALIAABNIAAADIgEABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgKAAQgJAAgHgDgAgEAKQgGABgDACQgDACgCAEQgBADgBAEQABAIAEAEQAEAEAJAAQAFAAAGgEQAGgDAGgHIAAgTIgNAAIgMABg");
	this.shape_96.setTransform(466.45,58.675);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgMBaIgFgBIgDgBIgBgDIAAhcIgOAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQgBgDAAgHIAAgGIABgEIACgCIACgBIAOAAIAAgKQAAgLADgJQACgJAFgGQAFgGAHgDQAHgDALAAIAJABIAHACIAEACIABACIABAEIAAAHIAAAGIgBADIgBACIgBAAIgCAAIgDgBIgEgBIgFgBIgGABIgEAEIgDAGIAAAJIAAALIAVAAIACABIABACIABAEIABAGQAAAHgCADQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgVAAIAABcIgBADIgDABIgFABIgHABIgHgBg");
	this.shape_97.setTransform(450.375,55.875);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgbA8QgMgEgHgIQgIgIgDgMQgEgMABgPQAAgOADgMQAEgMAIgJQAIgIAMgFQAMgFAPAAQAPAAALAEQAMAEAHAJQAHAIAEAMQADALAAAQQAAANgDANQgEAMgIAIQgIAJgMAFQgLAFgQAAQgPAAgLgFgAgMgkQgFADgEAFQgDAFgBAHQgCAHgBAJQAAAIACAHQABAHADAGQAEAFAFADQAFADAIAAQAHAAAGgDQAFgCADgGQAEgFACgHQABgHAAgJIgBgPQgBgHgEgFQgDgFgGgDQgEgDgJAAQgGAAgGACg");
	this.shape_98.setTransform(438.85,58.675);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Ag8AMQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQgCgCABgHQgBgFACgDQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIB5AAQADAAACADIABAIIgBAJQgBABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_99.setTransform(419.2,68.35);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("Ag8AMQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQgCgCABgHQgBgFACgDQABgDADAAIB5AAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIACAIIgCAJQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_100.setTransform(406.05,68.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgDgMQgEgMAAgQQAAgOAEgMQADgNAIgIQAIgJAKgEQAMgFAMAAQAPAAAKAEQAKAFAHAHQAHAIADAKQACAKAAAMIAAAGQAAAEgCADQgDADgFAAIhFAAQAAAHACAHQACAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgCAGIgCALIAwAAQAAgNgGgIQgFgIgNAAQgFAAgEACg");
	this.shape_101.setTransform(386.85,58.675);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAfBaIgFgBIgCgCIgBgCIAAhCIgBgNQgCgFgCgCIgGgFQgDgCgFAAQgGAAgGAEQgHAEgGAIIAABNIgBACIgDACIgEABIgIAAIgJAAIgFgBIgCgCIgBgCIAAipIABgCIACgCIAFgBIAJAAIAIAAIAEABIADACIABACIAABAQAIgIAJgEQAHgEAKAAQAMAAAIADQAIAEAFAHQAEAHADAJQACAIAAAMIAABHIgBACIgCACIgFABIgIAAIgIAAg");
	this.shape_102.setTransform(373.2,55.925);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAABMQgHgCgFgFQgFgFgCgIQgCgIAAgKIAAg6IgOAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgCgDAAgHIABgHIABgEIABgCIACAAIAOAAIAAgaIABgCIACgCIAFgBIAIgBIAHABIAFABIADACIAAACIAAAaIAZAAIADAAIABACIABAEIABAHQAAAHgCADQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgaAAIAAA1QAAAJADAFQADAFAIAAIAFgBIADgBIADgBIACAAIABAAIACACIAAAEIABAGIgBAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgDACIgGABIgGABIgHABQgKAAgGgDg");
	this.shape_103.setTransform(361.325,57.225);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAEgNAIgIQAIgJALgEQAKgFANAAQAPAAAKAEQAKAFAHAHQAGAIADAKQADAKAAAMIAAAGQAAAEgCADQgDADgFAAIhFAAQABAHACAHQABAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgBAGIgDALIAwAAQABgNgHgIQgFgIgNAAQgFAAgEACg");
	this.shape_104.setTransform(344.3,58.675);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgKA+IgHgBIgDgCIgCgDIgjhnIgBgFIAAgDIAAgCIAAgCIACgCIAGgBIAHAAIAJABIAFABIACABIACADIAZBTIABADIAAgDIAahTIACgDIADgBIAEgBIAIgBIAIAAIAFABIACACIABACIAAACIAAACIgBACIgBAEIgiBnIgCADIgEACIgHABIgLABIgKgBg");
	this.shape_105.setTransform(331.45,58.675);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgbA/IgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIADABIAAACIAAAPIAIgLIAHgHQADgCAEgBIAHgBIAEAAIAEABIADABIADABIABACIABACIAAAEIAAAHIAAAIIgBAEIgBADIgDAAIgCAAIgCgBIgEgBIgEgBIgGACIgFADIgHAGIgGAKIAABGIAAADIgDABIgFABIgHABIgIgBg");
	this.shape_106.setTransform(321.15,58.575);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgDgMQgFgMAAgQQAAgOAFgMQAEgNAHgIQAHgJALgEQAMgFAMAAQAOAAALAEQAKAFAGAHQAIAIACAKQAEAKAAAMIAAAGQgBAEgCADQgDADgEAAIhFAAQAAAHABAHQACAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgCAGIgBALIAvAAQAAgNgFgIQgGgIgMAAQgGAAgFACg");
	this.shape_107.setTransform(309.15,58.675);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAFgNAHgIQAIgJALgEQAKgFANAAQAPAAAKAEQAKAFAHAHQAGAIADAKQADAKAAAMIAAAGQAAAEgCADQgDADgFAAIhFAAQABAHACAHQABAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgJgnQgEADgDAEQgDADgBAGIgDALIAwAAQABgNgHgIQgFgIgNAAQgFAAgFACg");
	this.shape_108.setTransform(285.35,58.675);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgbA/IgFgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIADABIAAACIAAAPIAIgLIAHgHQADgCAEgBIAHgBIAEAAIAEABIADABIADABIABACIABACIAAAEIAAAHIAAAIIgBAEIgBADIgDAAIgCAAIgCgBIgEgBIgEgBIgGACIgFADIgHAGIgGAKIAABGIAAADIgCABIgGABIgIABIgHgBg");
	this.shape_109.setTransform(274.7,58.575);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAcBaIgFgBIgEgCIgBgCIgmg9IAAA9IAAACIgDACIgFABIgIAAIgIAAIgFgBIgDgCIgBgCIAAipIABgCIADgCIAFgBIAIAAIAIAAIAFABIADACIAAACIAABkIAhgsIADgDIADgCIAGgBIAIAAIAHAAIAFABIADACIABACIgBAEIgDAFIgiAlIAoA8IACAFIABADIgBACIgCACIgGABIgIAAIgJAAg");
	this.shape_110.setTransform(233.05,55.925);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgbA/IgGgBIgCgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIADABIAAACIAAAPIAIgLIAHgHQADgCAEgBIAHgBIAEAAIAEABIADABIADABIABACIABACIAAAEIAAAHIAAAIIgBAEIgBADIgDAAIgCAAIgCgBIgEgBIgEgBIgGACIgFADIgGAGIgHAKIAABGIAAADIgCABIgGABIgIABIgHgBg");
	this.shape_111.setTransform(222.05,58.575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgaA+QgIgCgFgFQgGgEgDgHQgEgHAAgKQAAgKAFgHQAEgIAHgDQAIgFALgDQAMgCAOAAIAMAAIAAgHIgBgJIgEgHQgCgDgFgBIgJgBQgIAAgHABIgLAEIgIAEIgFACIgDgBIgCgCIgBgEIAAgGIAAgGIADgEIAGgEIALgFIANgDIAOgBQAOAAAJADQAKACAGAGQAGAFADAJQACAJAAALIAABNIAAADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgKAAQgKAAgHgDgAgEAKQgGABgDACQgDACgCAEQgCADABAEQAAAIAEAEQAEAEAJAAQAFAAAGgEQAGgDAGgHIAAgTIgNAAIgMABg");
	this.shape_112.setTransform(209.85,58.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgxBWIgEgBIgDgCIgBgCIAAigIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIAAACIAAAOIALgJIAKgHIAJgEIALgBQANAAAIAFQAKAFAFAJQAGAIADAMQACALAAANQAAAQgDALQgDAMgHAJQgGAIgKAFQgJAFgMAAIgIgBIgIgDIgIgFIgJgHIAAA2IAAACIgCACIgGABIgIABIgIgBgAgEg5IgGADIgHAGIgIAIIAAAmQAIAIAFAEQAHAFAGAAQAGAAAEgDQAFgDADgFQADgFABgGIABgNIgBgPQgBgGgDgGQgCgFgFgDQgEgDgHAAIgFABg");
	this.shape_113.setTransform(196.95,60.875);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgCgHAAgKQAAgKADgHQAFgIAIgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgCgDgEgBIgKgBQgIAAgGABIgLAEIgJAEIgFACIgCgBIgCgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAKACAGAGQAGAFADAJQACAJAAALIAABNIgBADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgLAAQgIAAgIgDgAgEAKQgGABgDACQgEACgBAEQgCADAAAEQAAAIAFAEQAFAEAHAAQAGAAAHgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_114.setTransform(170.2,58.675);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAfA/IgFgBIgCgBIgCgDIAAhAIgBgNQAAgFgDgEIgGgFQgDgCgGAAQgFAAgGAFQgGAEgIAJIAABLIAAADIgDABIgEABIgIABIgIgBIgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIADABIAAACIAAAOQAJgLAKgFQAJgFALAAQALAAAJAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgCABIgFABIgIABIgIgBg");
	this.shape_115.setTransform(157,58.575);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgbA8QgLgEgIgIQgIgIgDgMQgEgMAAgPQAAgOAFgMQADgMAIgJQAIgIALgFQAMgFAPAAQAQAAALAEQALAEAIAJQAHAIAEAMQADALAAAQQABANgEANQgEAMgIAIQgIAJgMAFQgMAFgPAAQgPAAgLgFgAgLgkQgGADgDAFQgEAFgCAHQgBAHgBAJQABAIABAHQABAHAEAGQADAFAFADQAGADAHAAQAHAAAGgDQAFgCAEgGQADgFABgHQACgHAAgJIgBgPQgCgHgDgFQgDgFgFgDQgGgDgIAAQgGAAgFACg");
	this.shape_116.setTransform(142.8,58.675);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgHBXIgFgBIgDgBIgBgCIAAhyIABgCIADgCIAFgBIAHgBIAIABIAFABIADACIAAACIAAByIAAACIgDABIgFABIgIABIgHgBgAgOg5QgDgDgBgJQAAgKAFgEQADgEAKAAQALAAAEAEQAEAEgBAIQAAAKgDAEQgFAEgKAAQgKAAgEgEg");
	this.shape_117.setTransform(132.45,56.15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAABMQgHgCgFgFQgFgFgCgIQgCgIAAgKIAAg6IgOAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgCgDAAgHIABgHIABgEIABgCIACAAIAOAAIAAgaIABgCIACgCIAFgBIAIgBIAHABIAFABIADACIAAACIAAAaIAZAAIADAAIABACIABAEIABAHQAAAHgCADQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgaAAIAAA1QAAAJADAFQADAFAIAAIAFgBIADgBIADgBIACAAIABAAIACACIAAAEIABAGIgBAIQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgDACIgGABIgGABIgHABQgKAAgGgDg");
	this.shape_118.setTransform(124.425,57.225);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgCgHAAgKQAAgKADgHQAFgIAIgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgCgDgEgBIgKgBQgIAAgHABIgKAEIgJAEIgFACIgCgBIgCgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJAAALIAABNIgCADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgJAAQgJAAgIgDgAgEAKQgGABgDACQgEACgBAEQgCADAAAEQAAAIAFAEQAFAEAHAAQAGAAAHgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_119.setTransform(113.15,58.675);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("Ag8BUIgFgBIgCgCIgBgDIAAiUQAAgGAEgDQAEgEAFAAIASAAIAIABIAGADIAFAFIAFAJIAfA9IAGAKIAFAKIAFALIAFAKIAAgTIgBgSIAAhOIABgCIADgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACVIgBAGIgDAEIgEACIgFABIgOAAIgIgBQgDgBgDgDIgFgGIgGgLIgphNIgHgPIgHgPIAAAAIABASIAAATIAABWIgBADIgCACIgFABIgHAAIgIAAg");
	this.shape_120.setTransform(98.275,56.525);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgQBZQgDgBgCgCQgDgCAAgEIgBgJIABgJQAAgDADgDQACgCADgBIAJgBIAIABQADABACACQADADAAADIABAJIgBAJQAAAEgDACQgCACgDABIgIABIgJgBgAgOAnIgFgBIgCgBIgBgDIgBgeIAAgGIACgEIADgCIAFAAIACAAQAHAAAEgDQAFgCADgDQADgEACgFQABgFAAgFQAAgHgCgFQgBgFgEgEQgDgDgFgCQgFgCgHAAIgMABIgJADIgGADIgDABIgCgBIgBgCIgBgEIAAgHIAAgHQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABgCAEgBIAIgEIALgCIANgBQAOAAALAEQALAEAHAHQAHAHADAKQADAJAAAKQAAAKgDAJQgDAIgFAHQgGAFgHAEQgIADgJABIgBAZQAAABAAAAQgBABAAAAQgBABAAAAQgBABgBAAQgDABgGAAIgHAAg");
	this.shape_121.setTransform(574.475,71.825);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAFgNAHgIQAIgJALgEQAKgFANAAQAOAAALAEQAKAFAGAHQAHAIADAKQADAKAAAMIAAAGQAAAEgCADQgDADgFAAIhEAAQAAAHACAHQABAFAEAFQADAEAGACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQAAgNgGgIQgFgIgNAAQgFAAgFACg");
	this.shape_122.setTransform(550.95,74.475);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgHBYIgFgBIgDgCIAAgDIAAhxIAAgDIADgBIAFgBIAHAAIAIAAIAFABIACABIABADIAABxIgBADIgCACIgFABIgIAAIgHAAgAgOg4QgEgEABgKQAAgKADgDQAEgEAKAAQALAAAEAEQADADABAJQAAALgFADQgDAEgLAAQgKAAgEgDg");
	this.shape_123.setTransform(541.1,71.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAEgNAIgIQAHgJALgEQAMgFAMAAQAPAAAKAEQAKAFAHAHQAGAIAEAKQACAKAAAMIAAAGQABAEgDADQgDADgFAAIhFAAQAAAHADAHQABAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgBAGIgDALIAwAAQABgNgHgIQgFgIgNAAQgFAAgEACg");
	this.shape_124.setTransform(520.15,74.475);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgxBWIgEgBIgDgCIgBgCIAAigIABgCIACgBIAEgBIAHgBIAGABIAFABIACABIAAACIAAAOIAKgJIAKgHIAKgEIALgBQANAAAIAFQAJAFAHAJQAFAIADAMQACALAAANQAAAQgDALQgDAMgHAJQgGAIgJAFQgKAFgMAAIgJgBIgHgDIgIgFIgIgHIAAA2IgBACIgDACIgEABIgJABIgIgBgAgEg5IgGADIgHAGIgHAIIAAAmQAGAIAGAEQAHAFAGAAQAGAAAFgDQAEgDADgFQADgFABgGIABgNIgBgPQgBgGgCgGQgDgFgFgDQgEgDgGAAIgGABg");
	this.shape_125.setTransform(506.8,76.675);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgfBWQgJgFgGgJQgFgIgDgMQgDgMAAgMQAAgPAEgNQADgLAGgJQAGgJAKgEQAJgFAMABQAJAAAIAEQAIADAIAIIAAg/IABgCIACgBIAFgBIAHgBIAIABIAGABIACABIABACIAACoIgBADIgCACIgEABIgGAAIgHAAIgEgBIgDgCIgBgDIAAgMQgIAKgKAEQgKAGgLAAQgNAAgJgFgAgLgHQgEADgDAFIgFALQgBAGAAAIIABANQABAIADAFQADAFAEAEQAFADAGAAIAGgBIAGgEIAHgFIAIgJIAAgmQgHgIgHgFQgGgEgGAAQgHAAgEADg");
	this.shape_126.setTransform(475.5,71.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgDgMQgFgMAAgQQAAgOAFgMQAEgNAHgIQAIgJALgEQALgFAMAAQAOAAALAEQAKAFAGAHQAIAIACAKQAEAKAAAMIAAAGQAAAEgDADQgDADgEAAIhFAAQAAAHABAHQACAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgCAGIgBALIAvAAQABgNgGgIQgHgIgLAAQgGAAgFACg");
	this.shape_127.setTransform(462.05,74.475);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgbA/IgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIACABIABACIAAAPIAIgLIAHgHQAEgCAEgBIAGgBIAEAAIAEABIAEABIACABIABACIAAACIABAEIAAAHIAAAIIgBAEIgBADIgCAAIgDAAIgDgBIgDgBIgFgBIgFACIgFADIgHAGIgFAKIAABGIgBADIgDABIgEABIgIABIgIgBg");
	this.shape_128.setTransform(451.4,74.375);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgDgMQgEgMgBgQQABgOAEgMQADgNAIgIQAHgJALgEQALgFANAAQAPAAAKAEQAKAFAHAHQAGAIAEAKQACAKAAAMIAAAGQAAAEgCADQgDADgEAAIhGAAQAAAHACAHQACAFAEAFQAEAEAGACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgCAGIgCALIAwAAQAAgNgFgIQgHgIgLAAQgGAAgEACg");
	this.shape_129.setTransform(439.4,74.475);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgbBUQgLgCgHgEQgGgEgDgGQgDgGAAgGIABgJIADgHIAFgHIAHgGQgFgDgDgFQgDgFAAgGQAAgIADgFQAEgHAFgEQgEgFgDgGQgDgHAAgJQAAgKAEgIQADgIAHgGQAGgFAJgDQAJgDAKAAIAKABIAJACIAkAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQABADAAAGQAAAHgBADQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgNAAQADAEABAEIABAIQAAAKgDAIQgEAHgGAFQgGAGgJACQgJADgKAAQgFAAgFgBIgIgDIgDAEQgBACAAACQAAAEADACQAEACAFABIAbABQAKAAAIACQAIADAFAEQAFAEADAGQADAHAAAIQAAAIgEAIQgEAHgHAGQgIAFgLADQgLADgOAAQgPAAgKgCgAgVAnIgDAEIgCAEIAAAEQAAAGAHAEQAGADAMABQAGgBAFgBQAFgCADgCQAEgCABgDQABgEAAgDQAAgFgFgEQgEgDgIAAIgWgBIgGAFgAgLg9QgDABgDADIgDAGIgBAIQAAAIAFAGQAFAFAJAAQAEAAAEgCIAGgEQACgCABgEIABgHQAAgKgFgFQgFgGgIABQgFAAgEACg");
	this.shape_130.setTransform(426.475,76.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAfA/IgFgBIgCgBIgBgDIAAhAIgBgNQgCgFgCgEIgGgFQgDgCgFAAQgGAAgGAFQgHAEgGAJIAABLIgBADIgDABIgEABIgIABIgIgBIgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIACABIABACIAAAOQAKgLAJgFQAJgFALAAQAMAAAIAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgCABIgFABIgIABIgIgBg");
	this.shape_131.setTransform(413.25,74.375);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgCgHAAgKQAAgKADgHQAEgIAJgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgCgDgEgBIgKgBQgIAAgGABIgLAEIgJAEIgFACIgCgBIgCgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAKACAGAGQAGAFADAJQACAJAAALIAABNIgBADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgLAAQgIAAgIgDgAgEAKQgGABgDACQgEACgBAEQgCADAAAEQAAAIAFAEQAFAEAHAAQAGAAAHgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_132.setTransform(399.25,74.475);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgfBWQgJgFgGgJQgFgIgDgMQgDgMAAgMQAAgPAEgNQACgLAHgJQAHgJAJgEQAJgFAMABQAJAAAIAEQAIADAIAIIAAg/IABgCIACgBIAFgBIAIgBIAIABIAEABIADABIABACIAACoIgBADIgCACIgEABIgHAAIgHAAIgDgBIgDgCIgBgDIAAgMQgIAKgKAEQgKAGgLAAQgNAAgJgFgAgLgHQgEADgDAFIgFALQgBAGAAAIIABANQABAIADAFQADAFAEAEQAEADAHAAIAGgBIAGgEIAHgFIAIgJIAAgmQgIgIgGgFQgGgEgGAAQgGAAgFADg");
	this.shape_133.setTransform(385.7,71.85);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAfA/IgFgBIgDgBIgBgDIAAhAIgBgNQgBgFgCgEIgGgFQgEgCgFAAQgFAAgGAFQgGAEgIAJIAABLIAAADIgCABIgGABIgIABIgHgBIgFgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIADABIAAACIAAAOQAJgLALgFQAIgFALAAQAMAAAIAEQAIAEAFAGQAFAHACAJQACAJAAAMIAABGIAAADIgEABIgEABIgIABIgIgBg");
	this.shape_134.setTransform(371.9,74.375);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAfA/IgFgBIgDgBIgBgDIAAhAIgBgNQgBgFgCgEIgGgFQgEgCgEAAQgGAAgGAFQgGAEgIAJIAABLIAAADIgCABIgGABIgIABIgIgBIgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIADABIAAACIAAAOQAKgLAKgFQAIgFALAAQALAAAJAEQAIAEAFAGQAFAHACAJQACAJAAAMIAABGIAAADIgEABIgEABIgIABIgIgBg");
	this.shape_135.setTransform(338.5,74.375);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgaA+QgIgCgFgFQgGgEgDgHQgEgHAAgKQAAgKAFgHQADgIAJgDQAHgFALgDQANgCANAAIAMAAIAAgHIgBgJIgEgHQgDgDgEgBIgJgBQgIAAgHABIgLAEIgIAEIgFACIgDgBIgCgCIgBgEIAAgGIAAgGIADgEIAHgEIAKgFIANgDIAOgBQAOAAAJADQAKACAGAGQAGAFADAJQACAJABALIAABNIgBADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgKAAQgKAAgHgDgAgEAKQgFABgEACQgDACgCAEQgCADABAEQgBAIAFAEQAEAEAJAAQAGAAAFgEQAGgDAGgHIAAgTIgMAAIgNABg");
	this.shape_136.setTransform(324.5,74.475);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgbA8QgMgEgHgIQgIgIgDgMQgEgMABgPQAAgOADgMQAEgMAIgJQAIgIAMgFQALgFAQAAQAPAAALAEQAMAEAHAJQAIAIADAMQAEALgBAQQAAANgDANQgEAMgIAIQgIAJgMAFQgLAFgQAAQgPAAgLgFgAgMgkQgFADgEAFQgDAFgBAHQgDAHAAAJQAAAIACAHQACAHADAGQADAFAFADQAGADAHAAQAHAAAGgDQAFgCAEgGQADgFABgHQACgHAAgJIgBgPQgBgHgEgFQgDgFgGgDQgEgDgJAAQgGAAgGACg");
	this.shape_137.setTransform(296.1,74.475);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAfA/IgFgBIgCgBIgBgDIAAhAIgBgNQgBgFgDgEIgGgFQgDgCgFAAQgGAAgGAFQgHAEgGAJIAABLIgBADIgDABIgEABIgIABIgJgBIgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIABACIAAAOQAJgLAKgFQAJgFALAAQAMAAAIAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgCABIgFABIgIABIgIgBg");
	this.shape_138.setTransform(281.95,74.375);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgHBYIgFgBIgCgCIgBgDIAAhxIABgDIACgBIAFgBIAHAAIAIAAIAFABIACABIABADIAABxIgBADIgCACIgFABIgIAAIgHAAgAgOg4QgEgEAAgKQABgKAEgDQADgEAKAAQALAAAEAEQAEADAAAJQgBALgEADQgDAEgLAAQgKAAgEgDg");
	this.shape_139.setTransform(255.15,71.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("ABEA/IgGgBIgCgBIAAgDIAAhDIgBgKIgEgJIgGgFQgDgCgFAAQgGAAgGAFQgFAEgIAJIAABLIAAADIgDABIgFABIgIABIgHgBIgEgBIgDgBIgBgDIAAhDIgBgKQgBgFgCgEQgCgDgEgCQgDgCgFAAQgGAAgGAFQgGAEgHAJIAABLIAAADIgDABIgFABIgIABIgIgBIgFgBIgDgBIAAgDIAAhyIAAgCIACgBIAFgBIAHgBIAGABIAFABIACABIAAACIAAAOQAKgLAJgFQAKgFAKAAQAIAAAFACIAKAEIAHAGIAFAJIALgJIAJgHQAFgDAFgBIAKgBQALAAAIAEQAIAEAFAGQAEAHACAJQACAJAAAKIAABIIAAADIgCABIgGABIgHABIgIgBg");
	this.shape_140.setTransform(215.7,74.375);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgHBYIgFgBIgCgCIgBgDIAAhxIABgDIACgBIAFgBIAHAAIAIAAIAFABIACABIABADIAABxIgBADIgCACIgFABIgIAAIgHAAgAgOg4QgDgEAAgKQAAgKAEgDQADgEAKAAQALAAAEAEQAEADAAAJQAAALgFADQgDAEgLAAQgKAAgEgDg");
	this.shape_141.setTransform(201.7,71.95);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAfA/IgFgBIgCgBIgBgDIAAhAIgBgNQgCgFgCgEIgGgFQgDgCgFAAQgGAAgGAFQgHAEgGAJIAABLIgBADIgDABIgEABIgIABIgJgBIgFgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIACABIABACIAAAOQAKgLAJgFQAJgFALAAQAMAAAIAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgCABIgFABIgIABIgIgBg");
	this.shape_142.setTransform(191.4,74.375);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAfBaIgFgBIgDgCIgBgCIAAhCIgBgNQAAgFgDgCIgGgFQgEgCgFAAQgFAAgGAEQgGAEgIAIIAABNIAAACIgDACIgFABIgHAAIgIAAIgGgBIgCgCIgBgCIAAipIABgCIACgCIAGgBIAIAAIAHAAIAFABIADACIAAACIAABAQAJgIAJgEQAHgEAKAAQALAAAJADQAIAEAFAHQAFAHACAJQACAIAAAMIAABHIAAACIgDACIgFABIgIAAIgIAAg");
	this.shape_143.setTransform(158.25,71.725);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgHBYIgFgBIgDgCIgBgDIAAhxIABgDIADgBIAFgBIAHAAIAIAAIAFABIADABIAAADIAABxIAAADIgDACIgFABIgIAAIgHAAgAgOg4QgDgEAAgKQgBgKAEgDQAEgEAKAAQALAAAEAEQADADAAAJQAAALgDADQgFAEgKAAQgKAAgEgDg");
	this.shape_144.setTransform(136.85,71.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAfBaIgFgBIgDgCIgBgCIAAhCIgBgNQgBgFgCgCIgGgFQgEgCgEAAQgGAAgGAEQgGAEgIAIIAABNIAAACIgCACIgGABIgIAAIgIAAIgEgBIgDgCIgBgCIAAipIABgCIADgCIAEgBIAIAAIAIAAIAGABIACACIAAACIAABAQAJgIAJgEQAHgEAKAAQALAAAJADQAIAEAFAHQAFAHACAJQACAIAAAMIAABHIAAACIgEACIgEABIgIAAIgIAAg");
	this.shape_145.setTransform(126.55,71.725);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAmBUIgHgCIgDgCIgCgFIgahpIgaBpIgBAFIgEACIgGACIgMAAIgMAAIgHgCIgDgCIgCgFIgniRIgBgHQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAQADgCADAAIAKAAIAKAAIAFABQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIABAEIAeB+IAfh9IABgEIACgDIAGgBIAIAAIAKAAIAGABIADACIABAFIAgB9IAAAAIAdh+IABgDIACgDIAGgBIAJAAIAJAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABIgCAHIgmCRIgCAFIgEACIgHACIgKAAIgNAAg");
	this.shape_146.setTransform(107.5,72.325);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAfA/IgFgBIgDgBIgBgDIAAhAIgBgNQgBgFgCgEIgGgFQgEgCgFAAQgFAAgGAFQgGAEgIAJIAABLIAAADIgCABIgGABIgIABIgIgBIgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIADABIAAACIAAAOQAKgLAKgFQAIgFALAAQALAAAJAEQAIAEAFAGQAFAHACAJQACAJAAAMIAABGIAAADIgEABIgEABIgIABIgIgBg");
	this.shape_147.setTransform(411.85,102.075);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgbA8QgLgEgIgIQgHgIgEgMQgDgMAAgPQAAgOADgMQAEgMAIgJQAIgIAMgFQAMgFAOAAQAQAAALAEQALAEAIAJQAIAIADAMQAEALAAAQQgBANgEANQgDAMgIAIQgIAJgMAFQgMAFgOAAQgQAAgLgFgAgMgkQgFADgEAFQgDAFgBAHQgCAHAAAJQAAAIABAHQABAHADAGQAEAFAFADQAFADAIAAQAHAAAFgDQAGgCADgGQAEgFACgHQABgHAAgJIgBgPQgCgHgDgFQgDgFgGgDQgEgDgJAAQgGAAgGACg");
	this.shape_148.setTransform(397.65,102.175);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgHBXIgFgBIgDgBIgBgCIAAhyIABgCIADgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAAByIAAACIgDABIgFABIgIABIgHgBgAgOg5QgEgDABgJQAAgLADgDQAEgEAKAAQALAAAEADQADAFABAJQAAAKgFADQgEAEgKAAQgKAAgEgEg");
	this.shape_149.setTransform(387.3,99.65);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_150.setTransform(356.475,102.175);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgbA8QgMgEgHgIQgHgIgEgMQgDgMgBgPQAAgOAFgMQADgMAIgJQAIgIAMgFQAMgFAOAAQAQAAALAEQALAEAIAJQAHAIAEAMQADALABAQQAAANgFANQgDAMgIAIQgIAJgMAFQgMAFgOAAQgQAAgLgFgAgLgkQgGADgDAFQgEAFgBAHQgCAHAAAJQgBAIACAHQACAHACAGQAEAFAFADQAFADAIAAQAHAAAFgDQAGgCADgGQAEgFACgHQABgHAAgJIgBgPQgCgHgDgFQgDgFgGgDQgEgDgJAAQgGAAgFACg");
	this.shape_151.setTransform(343.75,102.175);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_152.setTransform(318.775,102.175);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgHBXIgFgBIgDgBIAAgCIAAhyIAAgCIADgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAAByIAAACIgDABIgFABIgIABIgHgBgAgOg5QgEgDABgJQAAgLADgDQAEgEAKAAQALAAAEADQADAFABAJQAAAKgFADQgEAEgKAAQgKAAgEgEg");
	this.shape_153.setTransform(309.9,99.65);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAfBaIgFgBIgDgCIAAgCIAAhCIgBgNQgBgFgDgCIgGgFQgEgCgEAAQgGAAgGAEQgHAEgGAIIAABNIgBACIgCACIgGABIgIAAIgIAAIgEgBIgDgCIgBgCIAAipIABgCIADgCIAEgBIAIAAIAIAAIAGABIACACIABACIAABAQAIgIAJgEQAIgEAJAAQALAAAJADQAIAEAFAHQAFAHACAJQACAIAAAMIAABHIgBACIgDACIgEABIgIAAIgIAAg");
	this.shape_154.setTransform(299.6,99.425);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgxBWIgFgBIgCgCIgBgCIAAigIABgCIACgBIAFgBIAGgBIAGABIAFABIACABIAAACIAAAOIAKgJIAKgHIAKgEIALgBQANAAAIAFQAJAFAHAJQAFAIADAMQACALAAANQAAAQgDALQgEAMgGAJQgGAIgJAFQgKAFgMAAIgJgBIgIgDIgHgFIgIgHIAAA2IgBACIgDACIgEABIgIABIgJgBgAgEg5IgGADIgHAGIgHAIIAAAmQAHAIAFAEQAHAFAGAAQAGAAAFgDQAEgDADgFQACgFACgGIABgNIgBgPQgBgGgCgGQgEgFgDgDQgFgDgGAAIgGABg");
	this.shape_155.setTransform(285.75,104.375);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgcA/IgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIABACIAAAPIAIgLIAHgHQAEgCAEgBIAHgBIADAAIAEABIAEABIACABIABACIAAACIABAEIAAAHIAAAIIgBAEIgBADIgCAAIgCAAIgEgBIgDgBIgFgBIgFACIgGADIgFAGIgGAKIAABGIgBADIgDABIgEABIgJABIgIgBg");
	this.shape_156.setTransform(261.25,102.075);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgbBUQgLgCgHgEQgGgFgDgFQgDgGAAgGIABgJIADgHIAFgHIAHgGQgFgDgDgFQgDgFAAgHQAAgHADgFQAEgGAFgFQgEgFgDgHQgDgFAAgKQAAgKAEgIQADgIAHgGQAGgFAJgDQAJgCAKAAIAKAAIAJACIAkAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQABAEAAAGQAAAGgBAEQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgNAAQADAEABAEIABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgJACgKAAQgFABgFgCIgIgDIgDAEQgBACAAACQAAADADADQAEACAFABIAbABQAKAAAIACQAIADAFAFQAFAEADAFQADAGAAAJQAAAIgEAHQgEAIgHAGQgIAFgLAEQgLACgOAAQgPABgKgDgAgVAnIgDAEIgCAEIAAAEQAAAHAHADQAGAEAMAAQAGAAAFgCQAFgBADgDQAEgDABgDQABgDAAgDQAAgGgFgDQgEgDgIAAIgWgBIgGAFgAgLg9QgDABgDADIgDAGIgBAIQAAAIAFAGQAFAFAJAAQAEAAAEgCIAGgEQACgDABgDIABgHQAAgKgFgFQgFgGgIAAQgFAAgEADg");
	this.shape_157.setTransform(249.625,104.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgbA8QgMgEgHgIQgIgIgDgMQgEgMABgPQAAgOADgMQAEgMAIgJQAIgIAMgFQAMgFAPAAQAPAAALAEQAMAEAHAJQAHAIAEAMQADALAAAQQAAANgEANQgDAMgIAIQgIAJgMAFQgLAFgQAAQgPAAgLgFgAgMgkQgFADgEAFQgDAFgBAHQgCAHgBAJQAAAIACAHQABAHADAGQAEAFAFADQAFADAIAAQAHAAAFgDQAGgCAEgGQADgFACgHQABgHAAgJIgBgPQgBgHgEgFQgDgFgGgDQgEgDgJAAQgGAAgGACg");
	this.shape_158.setTransform(236.35,102.175);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgDgMgBgQQABgOADgMQAFgNAHgIQAIgJALgEQALgFAMAAQAOAAALAEQAKAFAGAHQAIAIACAKQADAKABAMIAAAGQAAAEgDADQgDADgFAAIhEAAQAAAHACAHQABAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQABgNgHgIQgGgIgMAAQgFAAgFACg");
	this.shape_159.setTransform(222.55,102.175);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgbBUQgLgCgHgEQgGgFgDgFQgDgGAAgGIABgJIADgHIAFgHIAHgGQgFgDgDgFQgDgFAAgHQAAgHADgFQAEgGAFgFQgEgFgDgHQgDgFAAgKQAAgKAEgIQADgIAHgGQAGgFAJgDQAJgCAKAAIAKAAIAJACIAkAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQABAEAAAGQAAAGgBAEQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgNAAQADAEABAEIABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgJACgKAAQgFABgFgCIgIgDIgDAEQgBACAAACQAAADADADQAEACAFABIAbABQAKAAAIACQAIADAFAFQAFAEADAFQADAGAAAJQAAAIgEAHQgEAIgHAGQgIAFgLAEQgLACgOAAQgPABgKgDgAgVAnIgDAEIgCAEIAAAEQAAAHAHADQAGAEAMAAQAGAAAFgCQAFgBADgDQAEgDABgDQABgDAAgDQAAgGgFgDQgEgDgIAAIgWgBIgGAFgAgLg9QgDABgDADIgDAGIgBAIQAAAIAFAGQAFAFAJAAQAEAAAEgCIAGgEQACgDABgDIABgHQAAgKgFgFQgFgGgIAAQgFAAgEADg");
	this.shape_160.setTransform(209.625,104.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_161.setTransform(192.075,102.175);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgHBXIgFgBIgDgBIgBgCIAAhyIABgCIADgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAAByIAAACIgDABIgFABIgIABIgHgBgAgOg5QgDgDgBgJQAAgLAEgDQAEgEAKAAQALAAAEADQADAFAAAJQAAAKgDADQgFAEgKAAQgKAAgEgEg");
	this.shape_162.setTransform(183.2,99.65);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgMBaIgFgBIgDgBIgBgDIAAhcIgOAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBgBQgBgDAAgHIAAgGIABgEIACgCIACgBIAOAAIAAgKQAAgLADgJQACgJAFgGQAFgGAHgDQAHgDALAAIAJABIAHACIAEACIABACIABAEIAAAHIAAAGIgBADIgBACIgBAAIgCAAIgDgBIgEgBIgFgBIgGABIgEAEIgDAGIAAAJIAAALIAVAAIACABIABACIABAEIABAGQAAAHgCADQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgVAAIAABcIgBADIgDABIgFABIgHABIgHgBg");
	this.shape_163.setTransform(176.025,99.375);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgHBXIgFgBIgDgBIgBgCIAAhyIABgCIADgCIAFgBIAHAAIAIAAIAFABIADACIAAACIAAByIAAACIgDABIgFABIgIABIgHgBgAgOg5QgDgDAAgJQgBgLAEgDQAEgEAKAAQALAAAEADQADAFAAAJQAAAKgDADQgFAEgKAAQgKAAgEgEg");
	this.shape_164.setTransform(168.35,99.65);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_165.setTransform(159.675,102.175);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgxBWIgEgBIgDgCIgBgCIAAigIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIABACIAAAOIAKgJIAKgHIAJgEIALgBQANAAAJAFQAIAFAGAJQAGAIACAMQADALAAANQAAAQgDALQgEAMgGAJQgGAIgKAFQgJAFgMAAIgIgBIgIgDIgIgFIgJgHIAAA2IAAACIgCACIgGABIgIABIgIgBgAgEg5IgGADIgHAGIgIAIIAAAmQAIAIAGAEQAGAFAFAAQAHAAAEgDQAFgDACgFQADgFACgGIABgNIgBgPQgBgGgDgGQgCgFgFgDQgEgDgHAAIgFABg");
	this.shape_166.setTransform(134.05,104.375);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgCgHAAgKQAAgKADgHQAFgIAIgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgCgDgEgBIgKgBQgIAAgHABIgKAEIgJAEIgFACIgDgBIgBgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJAAALIAABNIgCADIgDABIgJABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgJAAQgJAAgIgDgAgEAKQgGABgDACQgEACgBAEQgCADAAAEQAAAIAFAEQAFAEAHAAQAGAAAHgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_167.setTransform(103.25,102.175);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgHBYIgFgBIgCgCIgCgDIAAhxIACgDIACgBIAFgBIAHAAIAIAAIAFABIACABIABADIAABxIgBADIgCACIgFABIgIAAIgHAAgAgOg4QgEgEAAgKQAAgKAFgDQADgEAKAAQALAAAEAEQAEADgBAJQAAALgDADQgEAEgLAAQgKAAgEgDg");
	this.shape_168.setTransform(596.05,59.45);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgfBWQgJgFgGgJQgGgIgDgMQgCgMAAgNQAAgPADgMQADgLAHgJQAGgJAKgEQAJgFAMABQAJAAAIADQAIAEAHAIIAAg/IABgCIADgCIAFAAIAIgBIAIABIAEAAIADACIABACIAACoIgBADIgCACIgEABIgHAAIgHAAIgEgBIgCgCIAAgDIAAgMQgJAKgKAEQgKAGgLAAQgNAAgJgFgAgLgHQgFADgDAEIgDAMQgCAGAAAIIACANQAAAIADAFQADAFAEAEQAFACAGAAIAGAAIAHgDIAGgGIAHgJIAAgmQgGgIgGgFQgHgEgGAAQgGgBgFAEg");
	this.shape_169.setTransform(579.4,59.35);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAfA/IgFgBIgCgBIgCgDIAAhAIgBgNQAAgFgDgEIgGgFQgEgCgFAAQgFAAgGAFQgGAEgIAJIAABLIAAADIgDABIgEABIgIABIgIgBIgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIADABIAAACIAAAOQAJgLAKgFQAJgFALAAQALAAAJAEQAIAEAFAGQAEAHADAJQACAJAAAMIAABGIgBADIgCABIgFABIgIABIgIgBg");
	this.shape_170.setTransform(565.6,61.875);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgfA8QgJgEgFgHQgFgGgCgJQgCgJAAgNIAAhGIABgCIACgBIAGgBIAHgBIAIABIAFABIADABIABACIAABAIABAOIADAIQADAEAEACQADABAFAAQAFAAAGgEQAHgFAHgIIAAhMIABgCIACgBIAFgBIAHgBIAIABIAGABIACABIABACIAAByIgBADIgCABIgFABIgGABIgHgBIgEgBIgDgBIAAgDIAAgNQgJAKgLAGQgIAFgLAAQgMAAgHgEg");
	this.shape_171.setTransform(551.4,62.075);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgbA8QgMgEgHgIQgHgIgEgMQgDgMgBgPQAAgOAFgMQADgMAIgJQAIgIALgFQANgFAOAAQAQAAALAEQALAEAIAJQAHAIAEAMQADALABAQQAAANgFANQgDAMgIAIQgIAJgMAFQgMAFgOAAQgQAAgLgFgAgLgkQgGADgDAFQgEAFgCAHQgBAHAAAJQgBAIACAHQACAHACAGQAEAFAFADQAFADAIAAQAHAAAFgDQAGgCADgGQAEgFACgHQABgHAAgJIgBgPQgCgHgDgFQgDgFgGgDQgEgDgJAAQgGAAgFACg");
	this.shape_172.setTransform(537.25,61.975);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgMBaIgFgBIgDgBIgBgDIAAhcIgOAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBgBQgBgDAAgHIAAgGIABgEIACgCIACgBIAOAAIAAgKQAAgLADgJQACgJAFgGQAFgGAHgDQAHgDALAAIAJABIAHACIAEACIABACIABAEIAAAHIAAAGIgBADIgBACIgBAAIgCAAIgDgBIgEgBIgFgBIgGABIgEAEIgDAGIAAAJIAAALIAVAAIACABIABACIABAEIABAGQAAAHgCADQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgVAAIAABcIgBADIgDABIgFABIgHABIgHgBg");
	this.shape_173.setTransform(526.225,59.175);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgcA/IgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIABACIAAAPIAIgLIAHgHQAEgCADgBIAIgBIADAAIAEABIAEABIACABIABACIAAACIABAEIAAAHIAAAIIgBAEIgBADIgCAAIgCAAIgEgBIgDgBIgEgBIgGACIgGADIgFAGIgGAKIAABGIgBADIgCABIgGABIgIABIgIgBg");
	this.shape_174.setTransform(498.5,61.875);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgDgHAAgKQAAgKAEgHQAFgIAIgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgDgDgDgBIgKgBQgIAAgHABIgKAEIgJAEIgFACIgDgBIgBgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJAAALIAABNIgBADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgJAAQgJAAgIgDgAgEAKQgGABgDACQgEACgBAEQgBADAAAEQgBAIAFAEQAFAEAHAAQAGAAAHgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_175.setTransform(486.3,61.975);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAfBaIgFgBIgCgCIgBgCIAAhCIgCgNQgBgFgCgCIgGgFQgDgCgGAAQgFAAgGAEQgHAEgGAIIAABNIgBACIgDACIgEABIgIAAIgIAAIgGgBIgCgCIgBgCIAAipIABgCIACgCIAGgBIAIAAIAIAAIAEABIADACIABACIAABAQAIgIAJgEQAIgEAJAAQAMAAAIADQAIAEAFAHQAEAHADAJQACAIAAAMIAABHIgBACIgCACIgFABIgIAAIgIAAg");
	this.shape_176.setTransform(467.15,59.225);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAfBaIgFgBIgDgCIgBgCIAAhCIgBgNQgBgFgCgCIgGgFQgEgCgFAAQgFAAgGAEQgGAEgIAIIAABNIAAACIgDACIgFABIgHAAIgIAAIgGgBIgCgCIgBgCIAAipIABgCIACgCIAGgBIAIAAIAHAAIAFABIADACIAAACIAABAQAJgIAJgEQAHgEAKAAQALAAAJADQAIAEAFAHQAFAHACAJQACAIAAAMIAABHIAAACIgDACIgFABIgIAAIgIAAg");
	this.shape_177.setTransform(435.45,59.225);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAEgNAIgIQAIgJAKgEQAMgFAMAAQAPAAAKAEQAKAFAHAHQAHAIADAKQACAKAAAMIAAAGQABAEgDADQgDADgFAAIhFAAQAAAHACAHQACAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgCAGIgCALIAwAAQAAgNgGgIQgFgIgNAAQgFAAgEACg");
	this.shape_178.setTransform(385.5,61.975);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgHBYIgFgBIgDgCIgBgDIAAhxIABgDIADgBIAFgBIAHAAIAIAAIAFABIADABIAAADIAABxIAAADIgDACIgFABIgIAAIgHAAgAgOg4QgDgEAAgKQAAgKADgDQAEgEAKAAQALAAAEAEQADADAAAJQABALgEADQgFAEgKAAQgKAAgEgDg");
	this.shape_179.setTransform(375.7,59.45);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgDgMQgFgMAAgQQAAgOAFgMQADgNAIgIQAHgJALgEQALgFANAAQAOAAALAEQAKAFAGAHQAHAIAEAKQADAKAAAMIAAAGQgBAEgCADQgDADgEAAIhFAAQgBAHACAHQACAFAEAFQAEAEAGACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgCACIgEACIgKADIgNADIgQABQgPAAgLgEgAgIgnQgFADgDAEQgDADgCAGIgBALIAvAAQAAgNgFgIQgHgIgLAAQgGAAgEACg");
	this.shape_180.setTransform(354.7,61.975);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgwBWIgGgBIgCgCIgBgCIAAigIABgCIACgBIAFgBIAGgBIAGABIAFABIACABIABACIAAAOIAJgJIAKgHIAKgEIALgBQANAAAJAFQAJAFAGAJQAFAIACAMQADALAAANQAAAQgDALQgEAMgGAJQgGAIgJAFQgKAFgMAAIgJgBIgIgDIgIgFIgIgHIAAA2IAAACIgDACIgEABIgIABIgIgBgAgDg5IgHADIgHAGIgIAIIAAAmQAHAIAHAEQAGAFAFAAQAHAAAFgDQAEgDACgFQAEgFABgGIABgNIgBgPQgBgGgDgGQgDgFgDgDQgFgDgHAAIgEABg");
	this.shape_181.setTransform(341.35,64.175);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgRBAIgLgDIgHgDIgFgDIgCgEIgBgIIAAgGIABgEIABgCIACAAIAFABIAGAEIAKADQAGACAHAAIAGgBIAGgCIAEgFIABgGQAAgDgCgDIgGgFIgIgEIgKgEIgLgFQgFgDgDgDQgEgEgDgGQgCgGAAgIQAAgIADgHQADgHAGgFQAGgFAJgCQAJgDAKAAIAKABIAJACIAHACIAEADIACACIABACIAAADIAAAFIAAAGIAAADIgCACIgBAAIgEgBIgGgDIgJgDQgEgBgHAAIgGABIgGACIgDAEIgBAFQAAAEADADQACADAEACIAIAEIALAEIAKAEIAJAGQAEAFACAFQADAGAAAIQAAAKgEAHQgDAIgHAFQgHAFgJACQgJADgKAAIgMgBg");
	this.shape_182.setTransform(328.775,61.975);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAEgNAIgIQAIgJAKgEQAMgFAMAAQAPAAAKAEQAKAFAHAHQAHAIADAKQACAKAAAMIAAAGQABAEgDADQgDADgFAAIhFAAQAAAHACAHQACAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgCAGIgCALIAwAAQAAgNgFgIQgGgIgNAAQgFAAgEACg");
	this.shape_183.setTransform(310.8,61.975);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgcA/IgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIACABIABACIAAAPIAIgLIAHgHQAEgCADgBIAIgBIADAAIAEABIADABIADABIABACIABACIAAAEIAAAHIAAAIIgBAEIgBADIgDAAIgBAAIgDgBIgEgBIgEgBIgGACIgGADIgFAGIgHAKIAABGIAAADIgCABIgGABIgIABIgIgBg");
	this.shape_184.setTransform(300.15,61.875);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgRBAIgLgDIgHgDIgFgDIgCgEIgBgIIAAgGIABgEIABgCIACAAIAFABIAGAEIAKADQAGACAHAAIAGgBIAGgCIAEgFIABgGQAAgDgCgDIgGgFIgIgEIgKgEIgLgFQgFgDgDgDQgEgEgDgGQgCgGAAgIQAAgIADgHQADgHAGgFQAGgFAJgCQAJgDAKAAIAKABIAJACIAHACIAEADIACACIABACIAAADIAAAFIAAAGIAAADIgCACIgBAAIgEgBIgGgDIgJgDQgEgBgHAAIgGABIgGACIgDAEIgBAFQAAAEADADQACADAEACIAIAEIALAEIAKAEIAJAGQAEAFACAFQADAGAAAIQAAAKgEAHQgDAIgHAFQgHAFgJACQgJADgKAAIgMgBg");
	this.shape_185.setTransform(270.625,61.975);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgDgMQgFgMAAgQQAAgOAFgMQAEgNAHgIQAIgJALgEQALgFAMAAQAOAAALAEQAKAFAGAHQAIAIACAKQAEAKAAAMIAAAGQAAAEgDADQgDADgEAAIhFAAQAAAHACAHQABAFAEAFQADAEAHACQAFACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIgBADIAAADIgBACIgFACIgKADIgNADIgQABQgPAAgLgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQABgNgGgIQgHgIgLAAQgGAAgFACg");
	this.shape_186.setTransform(258.65,61.975);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_187.setTransform(240.125,61.975);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgVA9QgLgEgIgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAFgNAHgIQAIgJALgEQAKgFANAAQAOAAALAEQAKAFAGAHQAIAIACAKQADAKAAAMIAAAGQAAAEgCADQgDADgFAAIhEAAQAAAHACAHQABAFAEAFQADAEAGACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgBACIgFACIgJADIgOADIgQABQgOAAgMgEgAgJgnQgEADgDAEQgDADgBAGIgCALIAvAAQABgNgHgIQgFgIgNAAQgFAAgFACg");
	this.shape_188.setTransform(227.85,61.975);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgwBWIgGgBIgCgCIgBgCIAAigIABgCIACgBIAFgBIAGgBIAGABIAFABIACABIABACIAAAOIAJgJIAKgHIAKgEIALgBQANAAAJAFQAJAFAGAJQAFAIACAMQADALAAANQAAAQgDALQgEAMgGAJQgGAIgJAFQgKAFgMAAIgJgBIgIgDIgIgFIgIgHIAAA2IAAACIgDACIgEABIgIABIgIgBgAgDg5IgHADIgHAGIgIAIIAAAmQAHAIAHAEQAGAFAFAAQAHAAAFgDQAEgDACgFQAEgFABgGIABgNIgBgPQgBgGgDgGQgDgFgDgDQgFgDgHAAIgEABg");
	this.shape_189.setTransform(214.45,64.175);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgRBAIgLgDIgHgDIgFgDIgCgEIgBgIIAAgGIABgEIABgCIACAAIAFABIAGAEIAKADQAGACAHAAIAGgBIAGgCIAEgFIABgGQAAgDgCgDIgGgFIgIgEIgKgEIgLgFQgFgDgDgDQgEgEgDgGQgCgGAAgIQAAgIADgHQADgHAGgFQAGgFAJgCQAJgDAKAAIAKABIAJACIAHACIAEADIACACIABACIAAADIAAAFIAAAGIAAADIgCACIgBAAIgEgBIgGgDIgJgDQgEgBgHAAIgGABIgGACIgDAEIgBAFQAAAEADADQACADAEACIAIAEIALAEIAKAEIAJAGQAEAFACAFQADAGAAAIQAAAKgEAHQgDAIgHAFQgHAFgJACQgJADgKAAIgMgBg");
	this.shape_190.setTransform(201.875,61.975);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgPA8QgKgEgHgIQgHgIgDgLQgEgMAAgPQAAgQAEgNQAFgMAHgJQAIgIALgEQAKgEAMAAIAKABIAJADIAIADIAFADIACADIABACIAAAEIAAAGIgBAKQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBIgGgEIgIgEQgEgCgHAAQgMAAgGAKQgHAKAAASQAAAJACAHQACAHADAFQADAFAEACQAFADAHAAQAGAAAFgCIAJgFIAGgEIAEgCIACAAIABADIABAEIAAAHIAAAGIgBADIAAADIgCADIgGADIgIAEIgLADIgLABQgMAAgLgFg");
	this.shape_191.setTransform(185.175,61.975);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("ABEA/IgGgBIgCgBIAAgDIAAhDIgBgKIgEgJIgGgFQgDgCgFAAQgGAAgFAFQgGAEgIAJIAABLIgBADIgCABIgFABIgIABIgGgBIgGgBIgCgBIgBgDIAAhDIgBgKQgBgFgDgEQgCgDgDgCQgEgCgEAAQgGAAgGAFQgGAEgHAJIAABLIAAADIgDABIgFABIgIABIgIgBIgFgBIgDgBIgBgDIAAhyIABgCIADgBIAEgBIAHgBIAHABIADABIADABIAAACIAAAOQAKgLAJgFQAKgFALAAQAGAAAGACIAKAEIAHAGIAFAJIALgJIAJgHQAFgDAFgBIAJgBQAMAAAIAEQAIAEAFAGQAEAHACAJQACAJABAKIAABIIgBADIgDABIgEABIgIABIgIgBg");
	this.shape_192.setTransform(162.35,61.875);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgfBWQgJgFgGgJQgFgIgDgMQgDgMAAgNQAAgPAEgMQADgLAGgJQAHgJAJgEQAJgFAMABQAJAAAIADQAIAEAIAIIAAg/IABgCIACgCIAFAAIAIgBIAHABIAFAAIADACIABACIAACoIgBADIgCACIgEABIgGAAIgIAAIgDgBIgDgCIgBgDIAAgMQgJAKgJAEQgKAGgLAAQgNAAgJgFgAgLgHQgEADgDAEIgFAMQgBAGAAAIIABANQABAIADAFQADAFAEAEQAEACAHAAIAGAAIAGgDIAHgGIAIgJIAAgmQgHgIgHgFQgGgEgGAAQgHgBgEAEg");
	this.shape_193.setTransform(130.9,59.35);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAfA/IgFgBIgDgBIgBgDIAAhAIAAgNQgCgFgCgEIgGgFQgEgCgFAAQgFAAgGAFQgGAEgIAJIAABLIAAADIgCABIgGABIgIABIgIgBIgEgBIgDgBIgBgDIAAhyIABgCIACgBIAEgBIAHgBIAHABIAEABIADABIAAACIAAAOQAKgLAKgFQAIgFALAAQALAAAJAEQAIAEAFAGQAFAHACAJQACAJAAAMIAABGIAAADIgEABIgEABIgIABIgIgBg");
	this.shape_194.setTransform(117.1,61.875);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgmBTQgFABgDgDQgCgDAAgFIAAiQQAAgHACgCQADgCAFAAIBSAAIACABIACABIABAFIAAAGIAAAHIgBADIgCADIgCABIg6AAIAAAoIAxAAIACABIACACIABAEIAAAGIAAAFIgBAEIgCACIgCABIgxAAIAAAvIA6AAIADAAIACADIABAEIAAAGIAAAGIgBAFIgCACIgDAAg");
	this.shape_195.setTransform(103.85,59.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("Ag8AMQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgDAAgHQAAgFACgDQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAIB6AAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIABAIIgBAKQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAg");
	this.shape_196.setTransform(522.2,73.65);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("Ag8AMQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgDAAgHQAAgFABgDQABgDADAAIB6AAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIABAIIgBAKQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_197.setTransform(509,73.65);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("Ag8AMQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgDAAgHQAAgFABgDQABgDADAAIB6AAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABIABAIIgBAKQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAg");
	this.shape_198.setTransform(495.85,73.65);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgMBaIgFgBIgDgBIgBgDIAAhcIgOAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQgBgDAAgHIAAgGIABgEIACgCIACgBIAOAAIAAgKQAAgLADgJQACgJAFgGQAFgGAHgDQAHgDALAAIAJABIAHACIAEACIABACIABAEIAAAHIAAAGIgBADIgBACIgBAAIgCAAIgDgBIgEgBIgFgBIgGABIgEAEIgDAGIAAAJIAAALIAVAAIACABIABACIABAEIABAGQAAAHgCADQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgVAAIAABcIgBADIgDABIgFABIgHABIgHgBg");
	this.shape_199.setTransform(479.425,61.175);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgbA8QgMgEgHgIQgHgIgEgMQgDgMAAgPQAAgOADgMQAEgMAIgJQAIgIALgFQAMgFAQAAQAPAAALAEQAMAEAHAJQAIAIADAMQAEALgBAQQAAANgDANQgEAMgIAIQgIAJgMAFQgMAFgPAAQgPAAgLgFgAgMgkQgFADgDAFQgEAFgCAHQgCAHAAAJQABAIABAHQACAHADAGQADAFAFADQAGADAHAAQAHAAAGgDQAFgCAEgGQADgFABgHQACgHAAgJIgBgPQgBgHgEgFQgDgFgFgDQgGgDgIAAQgGAAgGACg");
	this.shape_200.setTransform(467.9,63.975);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAEgNAIgIQAIgJAKgEQAMgFAMAAQAPAAAKAEQAKAFAHAHQAGAIAEAKQACAKAAAMIAAAGQABAEgDADQgDADgFAAIhFAAQAAAHADAHQABAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgBAGIgDALIAwAAQABgNgHgIQgFgIgNAAQgFAAgEACg");
	this.shape_201.setTransform(448.15,63.975);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgwBWIgGgBIgCgCIgBgCIAAigIABgCIACgBIAFgBIAGgBIAGABIAFABIACABIAAACIAAAOIAKgJIAKgHIAKgEIALgBQANAAAIAFQAJAFAHAJQAFAIADAMQACALAAANQAAAQgDALQgEAMgGAJQgGAIgJAFQgKAFgMAAIgJgBIgIgDIgIgFIgHgHIAAA2IgBACIgDACIgEABIgIABIgIgBgAgDg5IgHADIgHAGIgHAIIAAAmQAHAIAFAEQAHAFAFAAQAHAAAFgDQAEgDACgFQAEgFABgGIABgNIgBgPQgBgGgCgGQgEgFgDgDQgFgDgGAAIgFABg");
	this.shape_202.setTransform(428.3,66.175);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("ABEA/IgGgBIgCgBIAAgDIAAhDIgBgKIgEgJIgGgFQgDgCgFAAQgGAAgFAFQgGAEgIAJIAABLIgBADIgCABIgFABIgIABIgHgBIgEgBIgDgBIgBgDIAAhDIgBgKQgBgFgDgEQgCgDgDgCQgDgCgFAAQgGAAgGAFQgGAEgHAJIAABLIAAADIgDABIgFABIgIABIgIgBIgFgBIgDgBIgBgDIAAhyIABgCIACgBIAFgBIAHgBIAGABIAFABIACABIAAACIAAAOQAKgLAJgFQAKgFALAAQAGAAAGACIAKAEIAHAGIAFAJIALgJIAJgHQAFgDAFgBIAKgBQALAAAIAEQAIAEAFAGQAEAHACAJQACAJAAAKIAABIIAAADIgDABIgEABIgIABIgIgBg");
	this.shape_203.setTransform(410.2,63.875);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAeA+IgGAAIgDgCIgBgCIgVgpIgVApIgBACIgDACIgFAAIgJABIgJgBIgFgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAfg4Igdg1IgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAGgBIAKgBIAJAAIAFABIADABIACACIATAnIAUgnIACgBIACgCIAFgBIAIAAIAJAAIAFACIABACIgCAEIgcA1IAfA4IABAEQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgFABIgKABIgJgBg");
	this.shape_204.setTransform(380.3188,63.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgVA9QgMgEgHgIQgIgIgEgMQgDgMAAgQQAAgOADgMQAEgNAIgIQAIgJAKgEQAMgFAMAAQAPAAAKAEQAKAFAHAHQAGAIAEAKQACAKAAAMIAAAGQABAEgDADQgDADgFAAIhFAAQAAAHADAHQABAFAEAFQAEAEAFACQAGACAIAAIAPgBIALgDIAIgCIAFgCIACABIABABIABAEIAAAFIAAAFIAAADIgBADIgCACIgEACIgJADIgOADIgQABQgOAAgMgEgAgIgnQgFADgDAEQgDADgBAGIgDALIAwAAQABgNgHgIQgFgIgNAAQgFAAgEACg");
	this.shape_205.setTransform(367.6,63.975);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgHBXIgFAAIgDgCIgBgDIAAhxIABgDIADgBIAFgBIAHgBIAIABIAFABIADABIAAADIAABxIAAADIgDACIgFAAIgIABIgHgBgAgOg4QgEgEABgKQAAgJADgEQAEgEAKAAQALAAAEAEQADAEABAIQAAALgFADQgDAEgLAAQgKAAgEgDg");
	this.shape_206.setTransform(308.1,61.45);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgbA8QgLgEgIgIQgIgIgDgMQgDgMAAgPQAAgOADgMQAEgMAIgJQAIgIAMgFQAMgFAPAAQAPAAALAEQAMAEAHAJQAHAIAEAMQAEALAAAQQgBANgEANQgDAMgIAIQgIAJgMAFQgMAFgOAAQgQAAgLgFgAgMgkQgFADgEAFQgDAFgBAHQgCAHAAAJQAAAIABAHQABAHADAGQAEAFAFADQAFADAIAAQAHAAAFgDQAGgCADgGQAEgFACgHQABgHAAgJIgBgPQgCgHgDgFQgDgFgGgDQgEgDgJAAQgGAAgGACg");
	this.shape_207.setTransform(249.5,63.975);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgMBaIgFgBIgDgBIgBgDIAAhcIgOAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQgBgDAAgHIAAgGIABgEIACgCIACgBIAOAAIAAgKQAAgLADgJQACgJAFgGQAFgGAHgDQAHgDALAAIAJABIAHACIAEACIABACIABAEIAAAHIAAAGIgBADIgBACIgBAAIgCAAIgDgBIgEgBIgFgBIgGABIgEAEIgDAGIAAAJIAAALIAVAAIACABIABACIABAEIABAGQAAAHgCADQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgVAAIAABcIgBADIgDABIgFABIgHABIgHgBg");
	this.shape_208.setTransform(238.475,61.175);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgHBXIgFAAIgDgCIgBgDIAAhxIABgDIADgBIAFgBIAHgBIAIABIAFABIADABIAAADIAABxIAAADIgDACIgFAAIgIABIgHgBgAgOg4QgEgEABgKQAAgJADgEQAEgEAKAAQALAAAEAEQADAEABAIQAAALgFADQgDAEgLAAQgKAAgEgDg");
	this.shape_209.setTransform(224.85,61.45);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAfBaIgFgBIgDgCIAAgCIAAhCIgBgNQgBgFgDgCIgGgFQgEgCgEAAQgGAAgGAEQgHAEgGAIIAABNIgBACIgCACIgGABIgIAAIgIAAIgEgBIgDgCIgBgCIAAipIABgCIADgCIAEgBIAIAAIAIAAIAGABIACACIABACIAABAQAIgIAJgEQAIgEAJAAQALAAAJADQAIAEAFAHQAEAHADAJQACAIAAAMIAABHIgBACIgDACIgEABIgIAAIgIAAg");
	this.shape_210.setTransform(214.55,61.225);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgbA/IgGgBIgCgBIgBgDIAAhyIABgCIACgBIAFgBIAGgBIAHABIAEABIADABIAAACIAAAPIAIgLIAHgHQADgCAFgBIAGgBIAEAAIAEABIAEABIACABIABACIAAACIABAEIAAAHIAAAIIgBAEIgBADIgCAAIgDAAIgDgBIgDgBIgFgBIgFACIgFADIgHAGIgGAKIAABGIAAADIgDABIgEABIgIABIgIgBg");
	this.shape_211.setTransform(203.35,63.875);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgDgHAAgKQAAgKAFgHQADgIAJgDQAHgFALgDQANgCANAAIAMAAIAAgHIgBgJIgEgHQgDgDgEgBIgJgBQgIAAgHABIgKAEIgJAEIgFACIgDgBIgBgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQAOAAAJADQAKACAGAGQAGAFADAJQACAJABALIAABNIgBADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgJAFgKAAQgKAAgHgDgAgEAKQgGABgDACQgDACgCAEQgBADAAAEQgBAIAFAEQAEAEAJAAQAGAAAFgEQAGgDAGgHIAAgTIgMAAIgNABg");
	this.shape_212.setTransform(191.2,63.975);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("ABEA/IgGgBIgCgBIAAgDIAAhDIgBgKIgEgJIgGgFQgDgCgFAAQgGAAgGAFQgFAEgIAJIAABLIAAADIgDABIgFABIgIABIgHgBIgEgBIgDgBIgBgDIAAhDIgBgKQgBgFgCgEQgCgDgEgCQgDgCgFAAQgGAAgGAFQgGAEgHAJIAABLIAAADIgDABIgFABIgIABIgIgBIgFgBIgDgBIgBgDIAAhyIABgCIACgBIAFgBIAHgBIAGABIAFABIACABIAAACIAAAOQAKgLAJgFQAKgFAKAAQAIAAAFACIAKAEIAHAGIAFAJIALgJIAJgHQAFgDAFgBIAKgBQALAAAIAEQAIAEAFAGQAEAHACAJQACAJAAAKIAABIIAAADIgDABIgFABIgHABIgIgBg");
	this.shape_213.setTransform(174.3,63.875);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAfBaIgFgBIgDgCIAAgCIAAhCIgBgNQgBgFgDgCIgGgFQgEgCgEAAQgGAAgGAEQgHAEgGAIIAABNIgBACIgCACIgGABIgIAAIgIAAIgEgBIgDgCIgBgCIAAipIABgCIADgCIAEgBIAIAAIAIAAIAGABIACACIABACIAABAQAIgIAJgEQAIgEAJAAQALAAAJADQAIAEAFAHQAEAHADAJQACAIAAAMIAABHIgBACIgDACIgEABIgIAAIgIAAg");
	this.shape_214.setTransform(156.5,61.225);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgaA+QgIgCgGgFQgFgEgEgHQgDgHAAgKQAAgKAEgHQAFgIAIgDQAHgFAMgDQAMgCAOAAIALAAIAAgHIgBgJIgEgHQgDgDgDgBIgKgBQgIAAgHABIgKAEIgJAEIgFACIgDgBIgBgCIgBgEIgBgGIABgGIACgEIAHgEIAKgFIANgDIAOgBQANAAAKADQAJACAHAGQAGAFADAJQADAJAAALIAABNIgBADIgFABIgIABIgIgBIgEgBIgBgDIAAgJQgHAHgJAEQgKAFgJAAQgJAAgIgDgAgEAKQgGABgDACQgDACgCAEQgBADAAAEQgBAIAFAEQAFAEAHAAQAGAAAHgEQAFgDAGgHIAAgTIgMAAIgNABg");
	this.shape_215.setTransform(117.3,63.975);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgvBTIgGAAIgCgCIgBgDIAAiUQAAgHADgCQADgEAFAAIAoAAIAKAAIANADQAHABAIAEQAIAEAFAGQAFAGADAJQADAIAAAKQAAAOgEALQgFAKgIAHQgIAIgNADQgMAEgPAAIgOAAIAAA1IgBADIgDACIgFAAIgIABIgIgBgAgWAAIAPAAQAHAAAGgCQAFgCAEgEQADgFACgEQACgGAAgHQAAgIgDgGQgEgGgEgCIgJgEIgKgBIgOAAg");
	this.shape_216.setTransform(104.625,61.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:169.55,y:57.725}},{t:this.shape_84,p:{x:188.7,y:57.825}},{t:this.shape_83,p:{x:201.225,y:57.825}},{t:this.shape_82},{t:this.shape_81,p:{x:219.05,y:55.3}},{t:this.shape_80},{t:this.shape_79,p:{x:238,y:55.3}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:275.475,y:57.825}},{t:this.shape_74},{t:this.shape_73,p:{x:296.35,y:55.3}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:337.125,y:57.825}},{t:this.shape_69,p:{x:348.7,y:57.825}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:459.35,y:57.825}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:522.025,y:57.825}},{t:this.shape_55,p:{x:538.45,y:57.825}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:101.475,y:96.575}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:139.025,y:98.025}},{t:this.shape_47},{t:this.shape_46,p:{x:170.85,y:100.225}},{t:this.shape_45,p:{x:180.875,y:95.275}},{t:this.shape_44,p:{x:190.25,y:98.025}},{t:this.shape_43,p:{x:202.775,y:98.025}},{t:this.shape_42},{t:this.shape_41,p:{x:226.775,y:98.025}}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114,p:{x:170.2,y:58.675}},{t:this.shape_45,p:{x:180.325,y:55.925}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_48,p:{x:244.075,y:58.675}},{t:this.shape_46,p:{x:262.65,y:60.875}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_41,p:{x:297.375,y:58.675}},{t:this.shape_107,p:{x:309.15,y:58.675}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:361.325,y:57.225}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_83,p:{x:145.725,y:74.475}},{t:this.shape_143},{t:this.shape_114,p:{x:177.4,y:74.475}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_44,p:{x:232.55,y:74.475}},{t:this.shape_45,p:{x:242.675,y:71.725}},{t:this.shape_139},{t:this.shape_48,p:{x:263.725,y:74.475}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_51,p:{x:307.575,y:73.025}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_61,p:{x:358.1,y:74.475}},{t:this.shape_134,p:{x:371.9,y:74.375}},{t:this.shape_133},{t:this.shape_132,p:{x:399.25,y:74.475}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129,p:{x:439.4,y:74.475}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_75,p:{x:494.175,y:74.475}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_70,p:{x:532.425,y:74.475}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_41,p:{x:562.925,y:74.475}},{t:this.shape_121}]},1).to({state:[{t:this.shape_195},{t:this.shape_194,p:{x:117.1,y:61.875}},{t:this.shape_193},{t:this.shape_107,p:{x:144.9,y:61.975}},{t:this.shape_192},{t:this.shape_81,p:{x:176.3,y:59.45}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_79,p:{x:248.8,y:59.45}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_69,p:{x:287.95,y:61.975}},{t:this.shape_184,p:{x:300.15,y:61.875}},{t:this.shape_183,p:{x:310.8,y:61.975}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_83,p:{x:367.025,y:61.975}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_48,p:{x:397.525,y:61.975}},{t:this.shape_56,p:{x:418.475,y:61.975}},{t:this.shape_177},{t:this.shape_73,p:{x:445.75,y:59.45}},{t:this.shape_70,p:{x:454.625,y:61.975}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_129,p:{x:509.15,y:61.975}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_134,p:{x:606.35,y:61.875}},{t:this.shape_167},{t:this.shape_41,p:{x:121.425,y:102.175}},{t:this.shape_166},{t:this.shape_55,p:{x:147.4,y:102.175}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_114,p:{x:271.45,y:102.175}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_45,p:{x:333.375,y:99.425}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_44,p:{x:368,y:102.175}},{t:this.shape_51,p:{x:379.275,y:100.725}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_85,p:{x:131.3,y:63.875}},{t:this.shape_43,p:{x:143.975,y:63.975}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_184,p:{x:261.9,y:63.875}},{t:this.shape_183,p:{x:272.55,y:63.975}},{t:this.shape_48,p:{x:284.575,y:63.975}},{t:this.shape_103,p:{x:294.125,y:62.525}},{t:this.shape_206},{t:this.shape_41,p:{x:316.675,y:63.975}},{t:this.shape_132,p:{x:334,y:63.975}},{t:this.shape_194,p:{x:347.95,y:63.875}},{t:this.shape_205},{t:this.shape_204},{t:this.shape_84,p:{x:392.55,y:63.975}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_45,p:{x:438.275,y:61.225}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[]},1).wait(4));

	// txt
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgXAuQgJgEgEgGQgFgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAFADAJAAQAHAAAEgDQAFgDAAgFQAAgGgFgDQgEgDgLgDQgMgDgJgDQgHgDgFgFQgFgGAAgIQAAgIAFgGQAEgHAIgEQAJgEAMAAQAJAAAHACQAIACAFAEQAFADADAEQACAEABAEQAAAEgDADQgEACgEAAQgEAAgDgCIgGgGIgGgGQgFgCgFAAQgHAAgEADQgEADAAAEQAAAEADACQADADAFABIAPAEQALADAIAEQAGADAEAFQAEAFAAAHQAAAKgFAHQgEAIgLADQgJAEgNAAQgNAAgKgEg");
	this.shape_217.setTransform(147.8,373.775);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAYBCIgHgJIgVgjIgNAMIAAATQAAAIgEADQgDAEgFAAQgGAAgDgEQgDgDAAgIIAAhnQAAgIADgFQADgEAGAAQAFAAAEAEQADAEAAAHIAAA7IAbgcIAHgHQADgCAEAAQAFAAADACQADADAAAFQAAAFgKAJIgNALIAZAnIAEAIIABADQAAAHgDADQgDADgGAAQgEAAgCgCg");
	this.shape_218.setTransform(137.975,371.95);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgdAuQgEgEAAgHIAAhDQAAgRAMAAQAGAAADAEQADAEAAAIQAEgIAFgEQAEgEAHAAQAIAAAHAEQAIAEAAAGQAAAFgDADQgEADgDAAIgHgCQgFgCgEAAQgFAAgDADQgDADgCAGIgDANIAAASIAAAUQAAAIgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_219.setTransform(128.875,373.775);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgHADgKAAQgKAAgHgEQgHgDgEgHQgEgGAAgIQAAgKAGgHQAHgGALgCIALgDIAQgDIAOgEQgBgKgEgEQgDgFgKAAQgJAAgFADQgEACgEAGIgEAHQgCABgEAAQgEAAgEgCQgCgDAAgEQgBgHAFgGQAFgGAJgEQAKgEAOAAQAQAAAIAEQAKAEAEAIQAEAIgBAOIAAAOIAAANQABAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgOADQgEABgDADQgDADgBAGQAAAFAEAEQAFAEAHAAQAGAAAGgDQAGgDADgFQAEgGAAgNIAAgDIgQAEg");
	this.shape_220.setTransform(118.8,373.775);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AguA/QgDgEAAgIIAAhlQAAgIAEgEQAEgEAJAAIAhAAQAPAAAIACQAIADAGAFQAGAFADAIQADAHAAAKQAAAUgMAJQgNAKgYAAIgYAAIAAAmQAAAIgDAEQgEAEgGAAQgGAAgEgEgAgXgGIASAAQAJAAAGgCQAGgCAEgEQADgFAAgHQAAgJgFgFQgGgGgRAAIgSAAg");
	this.shape_221.setTransform(107.525,372.075);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgIBBQgDgFAAgHIAAhpQAAgHADgEQADgEAFAAQAGAAADAEQADAEAAAHIAABpQAAAIgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_222.setTransform(161.675,344.25);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAcAuIgIgKQgJAHgIAEQgHADgLAAQgJAAgHgEQgIgDgEgHQgDgGAAgIQAAgKAGgHQAGgGAMgCIAMgDIAOgDIAPgEQgBgKgEgEQgDgFgKAAQgJAAgFADQgFACgDAGIgEAHQgCABgFAAQgDAAgEgCQgDgDAAgEQABgHAEgGQAEgGAKgEQAKgEAOAAQAPAAAKAEQAJAEAEAIQAEAIAAAOIAAAOIAAANQAAAHACAHIACAKQAAAEgDADQgEADgEAAQgFAAgDgEgAADAFIgNADQgFABgDADQgEADAAAGQAAAFAFAEQAEAEAHAAQAGAAAGgDQAGgDADgFQADgGABgNIAAgDIgQAEg");
	this.shape_223.setTransform(153.75,346.075);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAXAuQgEgEAAgHIAAgoQAAgMgDgGQgEgHgKAAQgFAAgGAEQgFAEgCAHQgCAFAAAOIAAAfQAAAIgEADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhGQAAgHADgDQADgEAGAAQADAAACACQADABACADQABADAAAFIAAADQAHgJAHgEQAHgEAKAAQAKAAAHAFQAIAEAEAHQACAFABAFIABANIAAAtQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_224.setTransform(142.775,346.075);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgTAuQgJgDgHgHQgGgHgEgJQgDgJAAgLQAAgKADgJQAEgKAGgGQAHgHAJgDQAJgEAKAAQALAAAJAEQAJADAHAHQAGAHADAJQAEAJAAAKQAAALgEAJQgDAKgHAGQgGAHgJADQgJAEgLAAQgKAAgJgEgAgMgbQgFAEgDAHQgDAHAAAJQAAAKADAHQADAHAFAEQAFAEAHAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgGAAgGAEg");
	this.shape_225.setTransform(131.625,346.075);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhGQAAgGADgEQAEgEAEAAQAFAAAEAEQADADAAAHIAABGQAAAHgDAEQgEAEgFAAQgEAAgEgEgAgHgtQgEgEAAgFQAAgGAEgDQADgDAEAAQAFAAAEADQADACAAAHQAAAFgDAEQgEACgFAAQgEAAgDgCg");
	this.shape_226.setTransform(123.525,344.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgIA/QgGgEgCgHQgCgGAAgMIAAguIgDAAQgGAAgCgDQgDgCAAgEQAAgEADgDQADgCAFAAIADAAIAAgPIAAgJIACgGQABgCADgCQADgBADAAQAFgBADAEQACADABADIAAAKIAAAQIAJAAQAGAAACACQADADAAAEQAAAFgEACQgEACgHAAIgFAAIAAAsIABAJQAAADACACQACACAEAAIAGgBIAFgBQADAAADADQACACAAADQAAAHgGACQgHADgMABQgKAAgGgEg");
	this.shape_227.setTransform(118.125,344.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgIADgKAAQgJAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAHgGALgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgGACgDAGIgFAHQgBABgEAAQgFAAgCgCQgDgDgBgEQAAgHAFgGQAFgGAJgEQAKgEANAAQAQAAAJAEQAKAEAEAIQADAIABAOIAAAOIAAANQgBAHADAHIACAKQAAAEgDADQgEADgFAAQgDAAgEgEgAADAFIgNADQgEABgEADQgEADABAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgGgBgNIAAgDIgPAEg");
	this.shape_228.setTransform(109.05,346.075);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAiBEIgFgEIgFgFIgEgHIgxhLIAABMQAAAHgEAFQgDADgGAAQgFAAgEgDQgDgFAAgHIAAhlQAAgGABgEQACgEAEgDQAEgCAFAAIAGABIAEADIAEAFIAEAHIAzBMIAAhMQAAgJADgDQADgEAGAAQAGAAADAEQADADAAAJIAABmQAAARgOAAIgHAAg");
	this.shape_229.setTransform(96.625,344.25);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgWAuQgKgEgFgGQgEgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAGADAHAAQAIAAAFgDQAEgDAAgFQAAgGgEgDQgGgDgKgDQgNgDgHgDQgJgDgEgFQgFgGAAgIQAAgIAEgGQAFgHAJgEQAIgEAMAAQAIAAAJACQAHACAFAEQAFADADAEQACAEAAAEQAAAEgDADQgDACgFAAQgDAAgDgCIgGgGIgHgGQgDgCgGAAQgHAAgEADQgEADAAAEQAAAEADACQADADAFABIAPAEQALADAHAEQAIADADAFQAEAFAAAHQAAAKgFAHQgFAIgJADQgKAEgNAAQgNAAgJgEg");
	this.shape_230.setTransform(359.7,417.825);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AghAlQgNgOAAgXQAAgKAEgJQADgKAGgGQAGgHAJgDQAJgEAKAAQAPAAAKAGQAKAGAFAKQAGAJAAAKQAAAJgGACQgFADgKAAIgvAAQAAAJAEAGQADAGAGAEQAFADAFAAIAJgBIAHgDIAGgFIAHgHQACgCAEAAQADAAADACQACACAAAEQAAAEgCAEIgIAJQgGAEgHACQgIADgLAAQgWAAgOgNgAgNgZQgGAGgCAMIAsAAQgBgMgGgHQgGgGgJAAQgJAAgFAHg");
	this.shape_231.setTransform(349.325,417.825);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhGQAAgHADgEQAEgDAEAAQAFAAAEADQADAEAAAHIAABGQAAAHgDAEQgEADgFABQgEgBgEgDgAgHguQgEgCAAgHQAAgEAEgEQADgEAEABQAFAAAEACQADAEAAAFQAAAGgDADQgEADgFAAQgEAAgDgDg");
	this.shape_232.setTransform(341.325,416.05);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgdAuQgEgEAAgHIAAhDQAAgRAMAAQAGAAADAEQADAEAAAIQAEgIAFgEQAEgEAHAAQAIAAAHAEQAIAEAAAGQAAAFgDADQgEADgDAAIgHgCQgFgCgEAAQgFAAgDADQgDADgCAGIgDANIAAASIAAAUQAAAIgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_233.setTransform(335.425,417.825);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgHADgKAAQgKAAgHgEQgHgDgEgHQgEgGAAgIQAAgKAGgHQAHgGALgCIALgDIAPgDIAPgEQgBgKgEgEQgDgFgKAAQgJAAgFADQgEACgEAGIgEAHQgCABgEAAQgEAAgEgCQgCgDAAgEQgBgHAFgGQAFgGAJgEQAKgEAOAAQAQAAAIAEQAKAEAEAIQAEAIgBAOIAAAOIAAANQABAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgOADQgEABgDADQgDADAAAGQgBAFAEAEQAFAEAHAAQAGAAAGgDQAGgDADgFQAEgGAAgNIAAgDIgQAEg");
	this.shape_234.setTransform(325.35,417.825);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAYAuQgDgDAAgHIAAgDQgFAGgFADQgEAEgGACQgFACgHAAQgJAAgHgEQgHgEgEgGQgFgIAAgOIAAgwQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHIAAAmQAAAJABAGQACAFADAEQAEADAGAAQAGAAAFgEQAGgEACgFQACgGAAgQIAAgeQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHIAABGQAAAHgEADQgDAEgFAAQgFAAgDgEg");
	this.shape_235.setTransform(314.325,417.825);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgIA/QgGgEgCgHQgCgGAAgMIAAguIgDAAQgGAAgCgCQgDgDAAgEQAAgEADgDQADgCAFAAIADAAIAAgPIAAgJIACgFQABgDADgCQADgCADABQAFAAADADQACACABAEIAAAJIAAARIAJAAQAGAAACACQADADAAAEQAAAFgEACQgEACgHAAIgFAAIAAAsIABAJQAAADACACQACACAEAAIAGgBIAFAAQADAAADACQACACAAADQAAAHgGACQgHAEgMAAQgKgBgGgDg");
	this.shape_236.setTransform(305.825,416.15);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AghAlQgMgOAAgWQAAgOAFgMQAGgLALgHQALgGAPAAQAJAAAIADQAIADAGAEQAFAEADAGQADAEAAAFQAAAEgDADQgDADgFAAQgDAAgCgBIgFgFQgEgHgFgEQgFgDgIAAQgJAAgHAIQgHAJAAAOQAAAHACAFQACAGADAEQADAEAFADQAEACAFAAQAHAAAFgEQAGgDAEgHQACgEADgDQACgCAEAAQAEAAADADQADAEAAAEQAAAEgCAFQgDAGgGAEQgFAFgJADQgIADgLAAQgWAAgNgNg");
	this.shape_237.setTransform(296.775,417.825);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAXAuQgEgEAAgHIAAgoQAAgMgDgGQgEgHgKAAQgFAAgGAEQgFAEgCAHQgCAFAAAOIAAAfQAAAIgEADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhGQAAgHADgDQADgEAGAAQADAAACACQADABACADQABADAAAFIAAADQAHgJAHgEQAHgEAKAAQAKAAAHAFQAIAEAEAHQACAFABAFIABANIAAAtQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_238.setTransform(285.775,417.825);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAcAuIgIgKQgJAHgIAEQgIADgJAAQgKAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAHgGALgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgFACgEAGIgFAHQgBABgEAAQgFAAgCgCQgDgDAAgEQgBgHAFgGQAEgGAKgEQAKgEANAAQARAAAIAEQAKAEAEAIQADAIABAOIAAAOIAAANQAAAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgNADQgEABgEADQgEADABAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgGgBgNIAAgDIgPAEg");
	this.shape_239.setTransform(274.75,417.825);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgfA9QgJgFgGgJQgFgJAAgJQAAgEADgEQADgDAFAAQAFAAADACQADADACAGIAFAKQADAEAFADQAGADAIgBQALAAAIgFQAHgFAAgJQAAgGgEgEQgEgFgGgCIgQgEQgPgDgJgFQgKgEgFgHQgGgIAAgLQAAgLAGgJQAGgIALgEQALgFAPAAQAMAAAJADQAIADAGAFQAGAFADAGQACAFAAAFQAAAFgDAEQgDADgFAAQgFAAgCgBIgFgIQgEgHgFgFQgFgEgKAAQgLAAgGAFQgGAEAAAGQAAAFACADIAGAEIAHAEIAMADIAUAGQAJADAHAFQAGADAEAHQADAGAAALQAAAMgGAJQgGAJgMAGQgMAFgQAAQgTAAgMgHg");
	this.shape_240.setTransform(263.225,416);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AghAlQgNgOAAgXQAAgKAEgJQADgKAGgGQAGgHAJgDQAJgEAKAAQAPAAAKAGQAKAGAFAKQAGAJAAAKQAAAJgGACQgFADgKAAIgvAAQAAAJAEAGQADAGAGAEQAFADAFAAIAJgBIAHgDIAGgFIAHgHQACgCAEAAQADAAADACQACACAAAEQAAAEgCAEIgIAJQgGAEgHACQgIADgLAAQgWAAgOgNgAgNgZQgGAGgCAMIAsAAQgBgMgGgHQgGgGgJAAQgJAAgFAHg");
	this.shape_241.setTransform(673.475,363.175);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAXAuQgEgEAAgHIAAgoQAAgMgDgGQgEgHgKAAQgFAAgGAEQgFAEgCAHQgCAFAAAOIAAAfQAAAIgEADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhGQAAgHADgDQADgEAGAAQADAAACACQADABACADQABADAAAFIAAADQAHgJAHgEQAHgEAKAAQAKAAAHAFQAIAEAEAHQACAFABAFIABANIAAAtQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_242.setTransform(662.425,363.175);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgTAuQgJgDgHgHQgGgHgEgJQgDgJAAgLQAAgKADgJQAEgKAGgGQAHgHAJgDQAJgEAKAAQALAAAJAEQAJADAHAHQAGAHADAJQAEAJAAAKQAAALgEAJQgDAKgHAGQgGAHgJADQgJAEgLAAQgKAAgJgEgAgMgbQgFAEgDAHQgDAHAAAJQAAAKADAHQADAHAFAEQAFAEAHAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgGAAgGAEg");
	this.shape_243.setTransform(651.325,363.175);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAiBEIgFgEIgFgGIgEgGIgxhLIAABMQAAAHgEAFQgDADgGAAQgFAAgEgDQgDgFAAgHIAAhlQAAgGABgEQACgEAEgDQAEgCAFAAIAGABIAEADIAEAFIAEAHIAzBMIAAhMQAAgJADgDQADgEAGAAQAGAAADAEQADADAAAJIAABmQAAARgOAAIgHAAg");
	this.shape_244.setTransform(638.775,361.35);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgWAuQgKgEgFgGQgEgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAFADAJAAQAHAAAEgDQAFgDAAgFQAAgGgFgDQgFgDgKgDQgNgDgHgDQgJgDgEgFQgFgGAAgIQAAgIAEgGQAFgHAJgEQAIgEAMAAQAIAAAIACQAIACAFAEQAFADADAEQADAEAAAEQAAAEgEADQgCACgGAAQgEAAgCgCIgGgGIgHgGQgEgCgFAAQgGAAgFADQgEADAAAEQAAAEADACQADADAGABIAOAEQALADAIAEQAGADAFAFQADAFAAAHQAAAKgFAHQgEAIgLADQgJAEgNAAQgNAAgJgEg");
	this.shape_245.setTransform(520.65,432.275);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AghAlQgNgOAAgXQAAgKAEgJQADgKAGgGQAGgHAJgDQAJgEAKAAQAPAAAKAGQAKAGAFAKQAGAJAAAKQAAAJgGACQgFADgKAAIgvAAQAAAJAEAGQADAGAGAEQAFADAFAAIAJgBIAHgDIAGgFIAHgHQACgCAEAAQADAAADACQACACAAAEQAAAEgCAEIgIAJQgGAEgHACQgIADgLAAQgWAAgOgNgAgNgZQgGAGgCAMIAsAAQgBgMgGgHQgGgGgJAAQgJAAgFAHg");
	this.shape_246.setTransform(510.225,432.275);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhFQAAgIADgDQAEgEAEAAQAFAAAEAEQADAEAAAGIAABGQAAAHgDAEQgEAEgFgBQgEABgEgEgAgHgtQgEgEAAgFQAAgGAEgDQADgEAEAAQAFAAAEAEQADACAAAHQAAAFgDAEQgEADgFgBQgEABgDgDg");
	this.shape_247.setTransform(502.225,430.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgdAuQgEgEAAgHIAAhDQAAgRAMAAQAGAAADAEQADAEAAAIQAEgIAFgEQAEgEAHAAQAIAAAHAEQAIAEAAAGQAAAFgDADQgEADgDAAIgHgCQgFgCgEAAQgFAAgDADQgDADgCAGIgDANIAAASIAAAUQAAAIgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_248.setTransform(496.325,432.275);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAcAuIgIgKQgJAHgIAEQgIADgJAAQgKAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAHgGALgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgFACgEAGIgFAHQgBABgEAAQgFAAgCgCQgDgDAAgEQgBgHAFgGQAEgGAKgEQAKgEANAAQARAAAIAEQAKAEAEAIQADAIABAOIAAAOIAAANQAAAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgNADQgEABgEADQgEADABAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgGgBgNIAAgDIgPAEg");
	this.shape_249.setTransform(486.25,432.275);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAYAuQgDgDAAgHIAAgDQgFAGgFADQgEAEgGACQgFACgHAAQgJAAgHgEQgHgEgEgGQgFgIAAgOIAAgwQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHIAAAmQAAAJABAGQACAFADAEQAEADAGAAQAGAAAFgEQAGgEACgFQACgGAAgQIAAgeQAAgHAEgEQADgEAFAAQAGAAADAEQAEAEAAAHIAABGQAAAHgEADQgDAEgFAAQgFAAgDgEg");
	this.shape_250.setTransform(475.275,432.275);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgIA/QgGgEgCgHQgCgGAAgMIAAguIgDAAQgGAAgCgDQgDgCAAgEQAAgEADgCQADgDAFAAIADAAIAAgOIAAgKIACgGQABgCADgBQADgCADAAQAFAAADADQACADABADIAAAKIAAAQIAJAAQAGAAACADQADACAAAEQAAAFgEACQgEACgHAAIgFAAIAAAsIABAJQAAADACACQACACAEAAIAGgBIAFgBQADAAADACQACADAAADQAAAGgGADQgHADgMAAQgKABgGgEg");
	this.shape_251.setTransform(466.725,430.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAXAuQgEgEAAgHIAAgoQAAgMgDgGQgEgHgKAAQgFAAgGAEQgFAEgCAHQgCAFAAAOIAAAfQAAAIgEADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhGQAAgHADgDQADgEAGAAQADAAACACQADABACADQABADAAAFIAAADQAHgJAHgEQAHgEAKAAQAKAAAHAFQAIAEAEAHQACAFABAFIABANIAAAtQAAAHgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_252.setTransform(457.625,432.275);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgIADgKAAQgJAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAHgGALgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgGACgDAGIgFAHQgBABgEAAQgFAAgCgCQgDgDgBgEQAAgHAFgGQAFgGAJgEQAKgEANAAQAQAAAKAEQAJAEAEAIQADAIABAOIAAAOIAAANQgBAHADAHIACAKQAAAEgEADQgDADgFAAQgDAAgEgEgAADAFIgNADQgEABgEADQgEADABAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgGgBgNIAAgDIgPAEg");
	this.shape_253.setTransform(446.55,432.275);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgfA9QgJgFgGgJQgFgJAAgIQAAgGADgCQADgEAFAAQAFAAADADQADACACAFIAFALQADAEAFADQAGADAIAAQALAAAIgGQAHgGAAgHQAAgHgEgFQgEgDgGgCIgQgFQgPgEgJgEQgKgEgFgHQgGgHAAgMQAAgLAGgIQAGgJALgFQALgEAPAAQAMAAAJADQAIADAGAFQAGAFADAFQACAGAAAFQAAAFgDAEQgDAEgFAAQgFAAgCgDIgFgHQgEgHgFgFQgFgEgKAAQgLAAgGAEQgGAFAAAHQAAADACADIAGAFIAHADIAMAEIAUAFQAJAEAHAEQAGAEAEAGQADAHAAAKQAAAMgGAKQgGAJgMAGQgMAFgQAAQgTAAgMgHg");
	this.shape_254.setTransform(435.075,430.45);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgKAuIAAgiIgjAAIAAgXIAjAAIAAgiIAVAAIAAAiIAjAAIAAAXIgjAAIAAAig");
	this.shape_255.setTransform(505.4,402.85);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgXAuQgJgEgEgGQgFgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAFADAIAAQAIAAAEgDQAFgDAAgFQAAgGgFgDQgEgDgLgDQgMgDgJgDQgHgDgFgFQgFgGAAgIQAAgIAFgGQAEgHAIgEQAJgEAMAAQAJAAAIACQAHACAFAEQAFADADAEQADAEgBAEQAAAEgCADQgDACgFAAQgEAAgDgCIgGgGIgGgGQgFgCgFAAQgGAAgFADQgEADAAAEQAAAEADACQADADAFABIAPAEQALADAHAEQAHADAEAFQAEAFAAAHQAAAKgFAHQgFAIgKADQgJAEgNAAQgNAAgKgEg");
	this.shape_256.setTransform(490.45,404.575);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAYBCIgHgJIgVgjIgNAMIAAATQAAAHgEAFQgDADgFAAQgGAAgDgDQgDgFAAgHIAAhnQAAgIADgFQADgEAGAAQAFAAAEAEQADAEAAAIIAAA6IAbgcIAHgIQADgCAEABQAFgBADADQADAEAAAEQAAAFgKAJIgNALIAZAnIAEAHIABAFQAAAFgDAEQgDADgGAAQgEAAgCgCg");
	this.shape_257.setTransform(480.575,402.75);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgdAuQgEgEAAgHIAAhDQAAgRAMAAQAGAAADAEQADAEAAAIQAEgIAFgEQAEgEAHAAQAIAAAHAEQAIAEAAAGQAAAFgDADQgEADgDAAIgHgCQgFgCgEAAQgFAAgDADQgDADgCAGIgDANIAAASIAAAUQAAAIgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_258.setTransform(471.525,404.575);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgIADgKAAQgJAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAHgGALgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgGACgDAGIgFAHQgBABgEAAQgFAAgCgCQgDgDgBgEQAAgHAFgGQAFgGAJgEQAKgEANAAQAQAAAJAEQAKAEAEAIQADAIABAOIAAAOIAAANQgBAHADAHIACAKQAAAEgDADQgEADgFAAQgDAAgEgEgAADAFIgNADQgEABgEADQgEADABAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgGgBgNIAAgDIgPAEg");
	this.shape_259.setTransform(461.4,404.575);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AguA/QgDgEAAgIIAAhlQAAgIAEgEQAEgEAJAAIAhAAQAPAAAIACQAIADAGAFQAGAFADAIQADAHAAAKQAAAUgMAJQgNAKgYAAIgYAAIAAAmQAAAIgDAEQgEAEgGAAQgGAAgEgEgAgXgGIASAAQAJAAAGgCQAGgCAEgEQADgFAAgHQAAgJgFgFQgGgGgRAAIgSAAg");
	this.shape_260.setTransform(450.175,402.875);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgIBAQgDgEAAgGIAAhqQAAgHADgEQADgEAFAAQAGAAADAEQADAEAAAHIAABqQAAAHgDADQgDAEgGAAQgEAAgEgEg");
	this.shape_261.setTransform(115.975,364);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgpA/QgEgEAAgIIAAhlQAAgFACgEQABgEAEgBQAEgCAFAAIA+AAQAHAAADADQADADAAAEQAAAFgDADQgDADgHAAIgzAAIAAAhIArAAQAGAAADADQADADAAAEQAAAEgDADQgDACgGAAIgrAAIAAAsQAAAIgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_262.setTransform(108.325,364.125);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAcAuIgIgKQgJAHgIAEQgIADgKAAQgJAAgHgEQgIgDgEgHQgDgGAAgIQAAgKAGgHQAGgGAMgCIAMgDIAOgDIAOgEQAAgKgDgEQgEgFgKAAQgJAAgFADQgFACgDAGIgFAHQgBABgFAAQgDAAgDgCQgEgDAAgEQABgHAEgGQAFgGAJgEQAKgEAOAAQAPAAAKAEQAJAEAEAIQAEAIAAAOIAAAOIAAANQAAAHACAHIACAKQAAAEgDADQgEADgEAAQgEAAgEgEgAADAFIgNADQgEABgEADQgEADAAAGQABAFAEAEQAEAEAHAAQAGAAAGgDQAHgDACgFQADgGAAgNIAAgDIgPAEg");
	this.shape_263.setTransform(337.45,410.725);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgHADgKAAQgKAAgHgEQgIgDgDgHQgEgGAAgIQAAgKAGgHQAGgGAMgCIALgDIAPgDIAPgEQgBgKgEgEQgDgFgKAAQgJAAgFADQgEACgEAGIgEAHQgCABgFAAQgEAAgDgCQgCgDAAgEQAAgHAEgGQAFgGAJgEQAKgEAOAAQAQAAAIAEQAKAEAEAIQAEAIgBAOIAAAOIAAANQAAAHADAHIACAKQAAAEgEADQgDADgEAAQgFAAgDgEgAADAFIgOADQgEABgDADQgDADgBAGQAAAFAFAEQAEAEAHAAQAGAAAGgDQAHgDACgFQAEgGAAgNIAAgDIgQAEg");
	this.shape_264.setTransform(304.3,410.725);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgpA/QgEgEAAgIIAAhlQAAgFACgEQABgEAEgBQAEgCAFAAIA+AAQAHAAADADQADADAAAEQAAAFgDADQgDADgHAAIgzAAIAAAhIArAAQAGAAADADQADADAAAEQAAAEgDADQgDACgGAAIgrAAIAAAsQAAAIgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_265.setTransform(293.725,409.025);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgTBTQgFgDgBgGQAAgEADgDQACgDAFAAIACAAIADABIADAAQAGAAABgEQABgEAAgKIAAhSQAAgHAEgEQADgDAFAAQAGAAADADQADAEAAAHIAABTIAAAOIgCAIQgGAQgTAAQgLAAgGgDgAAFhAQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEADQADADAAAGQAAAGgDADQgEADgFAAQgFAAgDgDg");
	this.shape_266.setTransform(650.05,373.825);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgCBDIgJgEIgGgEIgGgHIAAACQAAAHgEADQgEAEgFAAQgEAAgEgEQgDgDAAgHIAAhqQAAgIADgDQADgEAFAAQAGAAADADQADAEABAHIAAAlQAGgGAHgFQAIgDAJAAQAMAAAJAFQAKAHAFAKQAFAKAAAPQAAALgDAKQgDAJgFAHQgGAHgHADQgIAEgJAAIgJgBgAgLgJQgFAFgDAGQgDAHAAAKQgBAOAHAJQAHAHAJABQAKgBAGgHQAIgJAAgPQAAgJgDgIQgDgFgFgFQgGgDgHAAQgFAAgGADg");
	this.shape_267.setTransform(643.3,371.95);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgbA/QgMgEgIgKQgIgJgFgNQgDgNAAgOQAAgOADgNQAFgNAIgIQAJgKALgEQAMgFAPAAQAUAAAPAJQAOAHAHAQQAJAPgBAUQABAPgFAMQgEANgJAKQgHAIgNAFQgMAFgPAAQgPAAgMgFgAgPgrQgGADgFAGQgFAGgDAJQgDAIABALQgBALADAJQADAJAFAGQAFAGAHADQAGADAIAAQAKAAAIgFQAJgFAFgLQAFgKAAgQQAAgNgEgMQgFgKgJgFQgIgGgLAAQgIAAgHADg");
	this.shape_268.setTransform(630.05,371.95);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAcAuIgIgKQgJAHgIAEQgIADgJAAQgKAAgHgEQgHgDgEgHQgEgGAAgIQAAgKAGgHQAGgGAMgCIALgDIAQgDIANgEQAAgKgEgEQgDgFgLAAQgIAAgEADQgGACgDAGIgFAHQgBABgEAAQgFAAgDgCQgCgDAAgEQgBgHAFgGQAFgGAJgEQAKgEANAAQARAAAIAEQAKAEAEAIQADAIAAAOIAAAOIAAANQABAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgOADQgDABgEADQgEADABAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAGgDADgFQADgGAAgNIAAgDIgPAEg");
	this.shape_269.setTransform(690.2,346.075);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AghAlQgMgOAAgWQAAgOAFgMQAGgLALgHQALgGAPAAQAJAAAIADQAIADAGAEQAFAEADAGQADAEAAAFQAAAEgDADQgDADgFAAQgDAAgCgBIgFgFQgEgHgFgEQgFgDgIAAQgJAAgHAIQgHAJAAAOQAAAHACAFQACAGADAEQADAEAFADQAEACAFAAQAHAAAFgEQAGgDAEgHQACgEADgDQACgCAEAAQAEAAADADQADAEAAAEQAAAEgCAFQgDAGgGAEQgFAFgJADQgIADgLAAQgWAAgNgNg");
	this.shape_270.setTransform(679.275,346.075);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgXAuQgJgEgEgGQgFgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAGADAHAAQAIAAAFgDQAEgDAAgFQAAgGgEgDQgGgDgKgDQgNgDgIgDQgHgDgFgFQgFgGAAgIQAAgIAEgGQAFgHAIgEQAJgEAMAAQAIAAAJACQAHACAFAEQAFADADAEQADAEgBAEQAAAEgCADQgEACgFAAQgDAAgDgCIgGgGIgGgGQgEgCgGAAQgHAAgEADQgEADAAAEQAAAEADACQADADAFABIAPAEQALADAHAEQAIADADAFQAEAFAAAHQAAAKgFAHQgFAIgJADQgKAEgNAAQgNAAgKgEg");
	this.shape_271.setTransform(638.15,346.075);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhGQAAgGADgEQAEgEAEAAQAFAAAEAEQADADAAAHIAABGQAAAHgDAEQgEAEgFAAQgEAAgEgEgAgHgtQgEgEAAgFQAAgGAEgDQADgDAEAAQAFAAAEADQADACAAAHQAAAFgDAEQgEACgFAAQgEAAgDgCg");
	this.shape_272.setTransform(630.675,344.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAhBAQgEgEAAgIIAAgtIg5AAIAAAtQAAAIgDAEQgEAEgGAAQgGAAgEgEQgDgEgBgIIAAhnQABgIADgEQAEgEAGAAQAGAAAEAEQADAEAAAIIAAAmIA5AAIAAgmQAAgIAEgEQADgEAGAAQAGAAAEAEQADAEAAAIIAABnQAAAIgEAEQgDAEgGAAQgGAAgDgEg");
	this.shape_273.setTransform(621.25,344.25);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAxAuQgEgEAAgHIAAgpIgBgMQAAgFgDgDQgDgEgGAAQgFAAgEADQgFADgCAFQgDAGAAAPIAAAhQAAAHgEAEQgDAEgGAAQgEAAgEgEQgDgEAAgHIAAgnIgBgOQgBgFgCgDQgDgEgGAAQgMAAgEAJQgEAIAAAOIAAAiQAAAHgDAEQgEAEgFAAQgGAAgDgEQgEgEAAgHIAAhGQAAgHADgDQADgEAGAAQAFAAADAEQADADAAAGIAAACQAHgHAHgEQAHgEAJAAQAJAAAHAEQAGAEAEAHQAGgHAHgEQAHgEAJAAQAKAAAHAEQAIAEADAIQADAGAAAPIAAAvQAAAHgDAEQgEAEgFAAQgGAAgDgEg");
	this.shape_274.setTransform(519.975,398.625);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AATA1IAAgpQAAgMgDgFQgEgGgJgBQgGAAgFAEQgGAEgCAGQgCAFAAAOIAAAgQAAAHgDAFQgEADgFAAQgNAAAAgPIAAhpQAAgIAEgDQADgEAGAAQAFAAAEAEQADADAAAIIAAAlQAFgGAEgDQAEgDAFgCQAFgCAGABQAKAAAHADQAHAFAEAHQADAEABAGIABALIAAAvQAAAHgEAFQgDADgGAAQgMAAAAgPg");
	this.shape_275.setTransform(495.375,396.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgIA/QgGgEgCgHQgCgGAAgMIAAguIgDAAQgGAAgCgDQgDgCAAgEQAAgEADgCQADgDAFAAIADAAIAAgPIAAgJIACgGQABgCADgBQADgCADAAQAFgBADAEQACADABADIAAAKIAAAQIAJAAQAGAAACADQADACAAAEQAAAFgEACQgEACgHAAIgFAAIAAAsIABAJQAAADACACQACACAEAAIAGgBIAFgBQADAAADACQACADAAADQAAAHgGACQgHADgMAAQgKAAgGgDg");
	this.shape_276.setTransform(486.875,396.95);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgNBBQgEgFAAgHIAAhAIgGAAQgGABgDgDQgDgDAAgEQAAgJAMAAIAGAAIAAgHQAAgLADgHQADgHAHgDQAGgDAMAAQAWAAAAAKQAAAEgDADQgCACgDAAIgFAAIgGgBQgGAAgCADQgCAEAAAIIAAAFIAGAAQAOAAAAAJQAAAGgEACQgEACgGgBIgGAAIAABAQAAAHgEAFQgDADgFAAQgFAAgDgDg");
	this.shape_277.setTransform(475.975,396.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgTAuQgJgDgHgHQgGgHgEgJQgDgJAAgLQAAgKADgJQAEgKAGgGQAHgHAJgDQAJgEAKAAQALAAAJAEQAJADAHAHQAGAHADAJQAEAJAAAKQAAALgEAJQgDAKgHAGQgGAHgJADQgJAEgLAAQgKAAgJgEgAgMgbQgFAEgDAHQgDAHAAAJQAAAKADAHQADAHAFAEQAFAEAHAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgGAAgGAEg");
	this.shape_278.setTransform(467.025,398.625);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgIBBQgDgFAAgHIAAhpQAAgIADgDQADgEAFAAQAGAAADAEQADADAAAIIAABpQAAAIgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_279.setTransform(454.325,396.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgIBBQgDgFAAgHIAAhpQAAgIADgDQADgEAFAAQAGAAADAEQADADAAAIIAABpQAAAIgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_280.setTransform(449.325,396.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AAqBDIgDgDIgDgGIgEgHIgFgRIg1AAIgGARQgEALgDADQgDADgGAAQgEAAgEgDQgEgEAAgFIABgFIADgJIAihUIADgIIAFgJQABgEAFgCQADgCAFAAQAFAAAEACIAGAGIAEAHIADAKIAjBUQAEAJAAAFQAAAEgEAFQgDADgGAAIgGgBgAgTAOIAmAAIgTg1g");
	this.shape_281.setTransform(440.2,396.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgXBAQgKgDgGgGQgEgFAAgGQAAgFACgDQADgCAFAAQAFAAAEAEIAEAGIAFADIAGAEIAIAAQAJAAAFgDQAGgCACgFIACgKIAAgRQgFAHgHAFQgIADgJAAQgNABgJgHQgJgGgFgLQgFgKAAgPQAAgMADgIQADgKAGgFQAGgHAGgCQAIgEAJAAQAJAAAIAEQAHAEAHAIIAAgDQAAgGADgDQADgEAFAAQAHAAADAEQACAFAAAJIAABGQAAAMgCAKQgEAIgFAGQgGAFgJADQgKADgNAAQgMAAgKgEgAgQgpQgGAIAAAPQAAAPAHAGQAGAIAJAAQAHABAFgEQAFgDAEgGQADgHAAgJQAAgPgGgJQgHgHgLAAQgJAAgHAHg");
	this.shape_282.setTransform(139.6,365);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgmBCQgIAAgDgCQgEgDgBgEIgBgKIAAhgQAAgIAEgEQAEgEAIAAIAjAAQAMAAAKADQAKACAIAHQAUASAAAjQAAALgCAKQgCAKgEAIQgEAIgHAGQgFAFgHADIgNAEIgQABgAgdAtIAVAAIAJgBIAIgCIAHgEQANgLAAgbQAAgTgGgKQgFgKgJgCQgJgDgLAAIgSAAg");
	this.shape_283.setTransform(116.425,361.375);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AATA1IAAgpQAAgMgDgFQgEgGgJAAQgGAAgFADQgGAEgCAFQgCAGAAAOIAAAgQAAAIgDADQgEAEgFAAQgNAAAAgPIAAhpQAAgIAEgDQADgEAGAAQAFAAAEAEQADADAAAIIAAAkQAFgFAEgDQAEgDAFgCQAFgCAGABQAKAAAHADQAHAEAEAIQADAFABAFIABALIAAAvQAAAIgEADQgDAEgGAAQgMAAAAgPg");
	this.shape_284.setTransform(348.825,412.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgXBAQgKgDgGgFQgEgGAAgGQAAgEACgDQADgDAFAAQAFAAAEAEIAEAGIAFADIAGADIAJABQAIAAAFgDQAFgCACgFIADgKIAAgSQgFAIgHAFQgIADgJAAQgMAAgJgGQgKgGgFgMQgFgJAAgPQAAgLADgKQADgIAGgGQAGgHAGgCQAIgEAJAAQAJAAAIAFQAHADAHAIIAAgCQAAgHADgDQADgEAFAAQAHAAADAFQACAEAAAJIAABGQAAANgCAJQgDAIgGAGQgGAFgJADQgJADgNAAQgNAAgKgEgAgQgpQgGAJAAAOQAAAPAHAGQAGAJAJgBQAHAAAEgDQAGgDADgGQAEgGAAgKQAAgPgGgJQgHgHgLgBQgKABgGAHg");
	this.shape_285.setTransform(337.25,416.55);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhFQAAgIADgDQAEgEAEAAQAFAAAEAEQADAEAAAGIAABGQAAAHgDAEQgEAEgFgBQgEABgEgEgAgHgtQgEgEAAgFQAAgGAEgDQADgEAEAAQAFAAAEAEQADACAAAHQAAAFgDAEQgEACgFABQgEgBgDgCg");
	this.shape_286.setTransform(318.075,412.95);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgXAuQgJgEgFgGQgEgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAFADAJAAQAHAAAEgDQAFgDAAgFQAAgGgFgDQgEgDgLgDQgMgDgJgDQgIgDgEgFQgFgGAAgIQAAgIAFgGQAEgHAIgEQAJgEAMAAQAIAAAIACQAIACAFAEQAFADADAEQACAEABAEQAAAEgEADQgDACgEAAQgEAAgDgCIgGgGIgHgGQgEgCgFAAQgHAAgEADQgEADAAAEQAAAEADACQADADAGABIAOAEQALADAIAEQAHADAEAFQADAFAAAHQAAAKgFAHQgEAIgLADQgJAEgNAAQgNAAgKgEg");
	this.shape_287.setTransform(310.6,414.725);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgIADgKAAQgJAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAGgGAMgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgGACgDAGIgFAHQgBABgFAAQgDAAgDgCQgEgDAAgEQAAgHAFgGQAFgGAJgEQAKgEANAAQAQAAAKAEQAJAEAEAIQADAIABAOIAAAOIAAANQgBAHADAHIACAKQAAAEgDADQgEADgEAAQgEAAgEgEgAADAFIgNADQgFABgDADQgDADAAAGQAAAFAEAEQAEAEAHAAQAGAAAGgDQAHgDACgFQADgGAAgNIAAgDIgPAEg");
	this.shape_288.setTransform(300.2,414.725);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgHADgKAAQgKAAgHgEQgHgDgEgHQgEgGAAgIQAAgKAGgHQAHgGALgCIALgDIAPgDIAPgEQgBgKgEgEQgDgFgKAAQgJAAgFADQgEACgEAGIgEAHQgCABgEAAQgEAAgEgCQgCgDAAgEQgBgHAFgGQAFgGAJgEQAKgEAOAAQAQAAAIAEQAKAEAEAIQAEAIgBAOIAAAOIAAANQABAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgOADQgEABgDADQgDADgBAGQAAAFAEAEQAFAEAHAAQAGAAAGgDQAGgDADgFQAEgGAAgNIAAgDIgQAEg");
	this.shape_289.setTransform(281.25,414.725);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AglBCQgJAAgEgEQgEgEAAgJIAAhiQAAgIAEgEQAEgEAJAAIApAAIARABQAHABAFAEQAFACADAFQAEAEACAFQACAFAAAGQAAAUgUAJQAaAHAAAYQAAALgGAJQgFAJgKAEQgGADgIABIgSABgAgbAuIAcAAQAbAAAAgUQAAgKgHgEQgHgFgOAAIgbAAgAgbgLIAZAAQAJAAAFgCQAFgCADgFQADgEAAgEQAAgKgIgEQgHgDgNAAIgWAAg");
	this.shape_290.setTransform(269.425,412.925);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AATA1IAAgpQAAgMgDgFQgEgGgJgBQgGAAgFAFQgGADgCAGQgCAFAAAOIAAAgQAAAHgDAFQgEADgFAAQgNAAAAgPIAAhpQAAgHAEgEQADgEAGAAQAFAAAEAEQADAEAAAHIAAAlQAFgGAEgDQAEgDAFgCQAFgBAGgBQAKAAAHAEQAHAFAEAHQADAFABAFIABALIAAAvQAAAHgEAFQgDADgGAAQgMAAAAgPg");
	this.shape_291.setTransform(660.025,361.35);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgoBCQgFgCAAgHQAAgEACgCQADgDAFAAIAEABIAEABIAGgCIAFgEIAEgJIACgGIgehKQgDgHAAgDQAAgDACgDIAEgEIAGgCQAGAAACAEIAFAJIAUA8IATg4IAFgLQACgDACgBQACgCAEAAIAFACQADABABACQABADAAADIgBAEIgCAHIggBTQgEALgEAGQgDAHgGADQgHADgLAAQgLAAgFgCg");
	this.shape_292.setTransform(642.825,365);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAYBCIgHgJIgVgjIgNAMIAAATQAAAIgEADQgDAEgFAAQgGAAgDgEQgDgDAAgIIAAhnQAAgIADgFQADgEAGAAQAFAAAEAEQADAEAAAHIAAA7IAbgcIAHgIQADgBAEAAQAFAAADACQADADAAAFQAAAFgKAJIgNALIAZAnIAEAHIABAEQAAAHgDADQgDADgGAAQgEAAgCgCg");
	this.shape_293.setTransform(522.525,412.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AglBCQgJAAgEgEQgEgEAAgJIAAhiQAAgIAEgEQAEgEAJAAIApAAIARABQAHABAFAEQAFACADAFQAEAEACAFQACAFAAAGQAAAUgUAJQAaAHAAAYQAAALgGAJQgFAJgKAEQgGADgIABIgSABgAgbAuIAcAAQAbAAAAgUQAAgKgHgEQgHgFgOAAIgbAAgAgbgLIAZAAQAJAAAFgCQAFgCADgFQADgEAAgEQAAgKgIgEQgHgDgNAAIgWAAg");
	this.shape_294.setTransform(488.425,412.925);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AAYBCIgHgJIgVgjIgNAMIAAATQAAAIgEADQgDAEgFAAQgGAAgDgEQgDgDAAgIIAAhnQAAgIADgFQADgEAGAAQAFAAAEAEQADAEAAAHIAAA7IAbgcIAHgIQADgBAEAAQAFAAADACQADADAAAFQAAAFgKAJIgNALIAZAnIAEAHIABAEQAAAHgDADQgDADgGAAQgEAAgCgCg");
	this.shape_295.setTransform(472.075,412.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgHADgKAAQgKAAgHgEQgHgDgEgHQgEgGAAgIQAAgKAGgHQAHgGALgCIALgDIAPgDIAPgEQgBgKgEgEQgDgFgKAAQgJAAgFADQgEACgEAGIgEAHQgCABgEAAQgEAAgEgCQgCgDAAgEQgBgHAFgGQAFgGAJgEQAKgEAOAAQAQAAAIAEQAKAEAEAIQAEAIgBAOIAAAOIAAANQABAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgOADQgEABgDADQgDADgBAGQABAFADAEQAFAEAHAAQAGAAAGgDQAGgDADgFQAEgGAAgNIAAgDIgQAEg");
	this.shape_296.setTransform(450,414.725);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgIBAQgDgDAAgIIAAhpQAAgIADgDQADgEAFAAQAGAAADAEQADADAAAIIAABpQAAAIgDADQgDAEgGAAQgEAAgEgEg");
	this.shape_297.setTransform(442.025,412.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AglBCQgJAAgEgEQgEgEAAgJIAAhiQAAgIAEgEQAEgEAJAAIApAAIARABQAHABAFAEQAFACADAFQAEAEACAFQACAFAAAGQAAAUgUAJQAaAHAAAYQAAALgGAJQgFAJgKAEQgGADgIABIgSABgAgbAuIAcAAQAbAAAAgUQAAgKgHgEQgHgFgOAAIgbAAgAgbgLIAZAAQAJAAAFgCQAFgCADgFQADgEAAgEQAAgKgIgEQgHgDgNAAIgWAAg");
	this.shape_298.setTransform(433.225,412.925);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgXAuQgJgEgEgGQgFgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAFADAIAAQAIAAAEgDQAFgDAAgFQAAgGgFgDQgEgDgLgDQgMgDgJgDQgHgDgFgFQgFgGAAgIQAAgIAFgGQAEgHAIgEQAJgEAMAAQAJAAAIACQAHACAFAEQAFADADAEQADAEgBAEQAAAEgCADQgDACgFAAQgEAAgDgCIgGgGIgGgGQgFgCgFAAQgGAAgFADQgEADAAAEQAAAEADACQADADAFABIAPAEQALADAIAEQAHADADAFQAEAFAAAHQAAAKgFAHQgFAIgKADQgJAEgNAAQgNAAgKgEg");
	this.shape_299.setTransform(667.75,363.175);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgJBBQgEgFABgIIAAgqIghgxIgGgKIgCgHQAAgEAEgEQADgDAGAAQAFAAADADIAJANIAXAnIAZgnIAEgHIADgFIAEgDIAFgBQAFAAAEADQAEAEgBAEQAAADgCAEIgFAJIghAyIAAAqQAAAIgEAEQgDAEgGAAQgFAAgEgDg");
	this.shape_300.setTransform(646.1,361.35);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgDBDIgIgDIgGgFIgGgHIAAACQgBAHgDADQgDAEgGAAQgEAAgDgEQgEgDAAgHIAAhqQAAgIADgDQADgEAFAAQAGAAADAEQAEAEAAAGIAAAmQAGgIAHgDQAIgFAJAAQANABAJAFQAJAGAFAMQAFAKAAAPQAAALgDAJQgCAJgGAHQgGAHgHADQgIAEgJAAIgKgBgAgLgIQgFADgEAHQgCAHAAAKQAAAPAGAHQAHAIAKAAQAJAAAGgIQAIgIgBgPQAAgJgCgIQgDgGgFgDQgGgEgGAAQgHAAgFAEg");
	this.shape_301.setTransform(326.25,408);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgoBCQgFgDAAgFQAAgFACgCQADgDAFABIAEAAIAEABIAGgBIAFgFIAEgJIACgFIgehMQgDgGAAgDQAAgEACgCIAEgEIAGgCQAGAAACADIAFAKIAUA7IATg2IAFgLQACgFACAAQACgCAEAAIAFACQADABABACQABADAAADIgBAFIgCAGIggBTQgEALgEAGQgDAGgGAEQgHADgLAAQgLAAgFgCg");
	this.shape_302.setTransform(315.125,411.65);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAqA/QgDgEAAgHIAAhaIgVBTIgDAMQgCAEgDADQgDADgHAAQgDAAgDgCQgEgCgCgDIgCgHIgCgIIgWhTIAABaQAAAHgDAEQgDAEgGAAQgFAAgEgEQgDgDAAgIIAAhnQgBgJAFgDQAFgDAHAAIAIAAIAMABQADACABADIAEAMIASBHIAUhHIADgMQACgDADgCIALgBIAIAAQAIAAAEADQAFADAAAJIAABnQAAAHgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_303.setTransform(291.7,408.125);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgTAuQgJgDgHgHQgGgHgEgJQgDgJAAgLQAAgKADgJQAEgKAGgGQAHgHAJgDQAJgEAKAAQALAAAJAEQAJADAHAHQAGAHADAJQAEAJAAAKQAAALgEAJQgDAKgHAGQgGAHgJADQgJAEgLAAQgKAAgJgEgAgMgbQgFAEgDAHQgDAHAAAJQAAAKADAHQADAHAFAEQAFAEAHAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgGAAgGAEg");
	this.shape_304.setTransform(518.575,404.575);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgXAuQgJgEgEgGQgFgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAFADAIAAQAIAAAEgDQAFgDAAgFQAAgGgFgDQgEgDgLgDQgMgDgJgDQgHgDgFgFQgFgGAAgIQAAgIAFgGQAEgHAIgEQAJgEAMAAQAJAAAHACQAIACAFAEQAFADADAEQACAEAAAEQABAEgDADQgEACgEAAQgFAAgCgCIgGgGIgGgGQgFgCgFAAQgHAAgEADQgEADAAAEQAAAEADACQADADAFABIAPAEQALADAIAEQAGADAEAFQAEAFAAAHQAAAKgFAHQgEAIgLADQgJAEgNAAQgNAAgKgEg");
	this.shape_305.setTransform(503.4,404.575);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAcBBQgDgEAAgHIAAgCIgKAJQgFAEgGACQgEABgGAAQgKAAgHgDQgIgEgFgHQgFgHgDgJQgDgKAAgLQAAgVALgOQAMgNASABQAJgBAIAEQAHAEAHAIIAAgkQAAgIADgEQADgEAGAAQAFAAADADQADAEAAAHIAABrQAAAHgDAEQgDADgFAAQgGAAgDgDgAgLgJQgFAFgEAGQgDAHAAAJQABAKADAHQADAHAFAEQAGADAFAAQAHAAAFgDQAFgDAEgIQACgGAAgLQAAgKgCgGQgEgGgFgFQgFgDgHAAQgGAAgFADg");
	this.shape_306.setTransform(492.4,402.75);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgtBAQgCgEAAgIIAAhpQAAgHADgDQADgEAFAAQAGAAADAEQAEADAAAHIAAACQAGgIAHgEQAIgEAIAAQAMAAAJAGQAKAGAFALQAGALAAAPQAAAMgDAIQgDAKgGAGQgGAHgHADQgHADgKABQgJgBgHgEQgHgDgGgJIAAAlQAAAQgNAAQgHAAgCgEgAgPgpQgIAIABAQQgBAPAIAHQAHAIAIAAQAHAAAFgEQAFgEADgFQADgIAAgKQAAgKgCgGQgEgHgFgEQgFgDgHAAQgIAAgHAHg");
	this.shape_307.setTransform(459.35,406.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AghAlQgNgOAAgXQAAgKAEgJQADgKAGgGQAGgHAJgDQAJgEAKAAQAPAAAKAGQAKAGAFAKQAGAJAAAKQAAAJgGACQgFADgKAAIgvAAQAAAJAEAGQADAGAGAEQAFADAFAAIAJgBIAHgDIAGgFIAHgHQACgCAEAAQADAAADACQACACAAAEQAAAEgCAEIgIAJQgGAEgHACQgIADgLAAQgWAAgOgNgAgNgZQgGAGgCAMIAsAAQgBgMgGgHQgGgGgJAAQgJAAgFAHg");
	this.shape_308.setTransform(447.925,404.575);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAYBCIgHgJIgVgkIgNANIAAAUQAAAGgEAEQgDAEgFAAQgGAAgDgEQgDgEAAgGIAAhoQAAgJADgDQADgFAGAAQAFAAAEAEQADAEAAAHIAAA7IAbgcIAHgHQADgDAEAAQAFAAADAEQADADAAAEQAAAFgKAJIgNALIAZAoIAEAHIABAEQAAAFgDAEQgDADgGAAQgEAAgCgCg");
	this.shape_309.setTransform(144.475,385.05);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAcAuIgIgKQgJAHgIAEQgHADgKAAQgKAAgHgEQgIgDgDgHQgEgGAAgIQAAgKAGgHQAGgGAMgCIALgDIAPgDIAPgEQgBgKgEgEQgDgFgKAAQgJAAgFADQgEACgEAGIgEAHQgCABgFAAQgDAAgEgCQgDgDAAgEQABgHAEgGQAEgGAKgEQAKgEAOAAQAPAAAKAEQAJAEAEAIQADAIAAAOIAAAOIAAANQAAAHADAHIACAKQAAAEgDADQgEADgEAAQgEAAgEgEgAADAFIgOADQgEABgDADQgDADgBAGQAAAFAFAEQAEAEAHAAQAGAAAGgDQAGgDADgFQADgGABgNIAAgDIgQAEg");
	this.shape_310.setTransform(125.3,386.875);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhpQAAgHADgEQADgEAFAAQAGAAADAEQADAEAAAHIAABpQAAAIgDADQgDAEgGAAQgEAAgEgEg");
	this.shape_311.setTransform(163.225,357.35);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgIADgKAAQgJAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAGgGAMgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgGACgDAGIgFAHQgBABgFAAQgDAAgDgCQgEgDAAgEQAAgHAFgGQAFgGAJgEQAKgEANAAQAQAAAKAEQAJAEAEAIQADAIABAOIAAAOIAAANQgBAHADAHIACAKQAAAEgDADQgEADgFAAQgDAAgEgEgAADAFIgNADQgFABgDADQgDADAAAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAHgDACgFQADgGAAgNIAAgDIgPAEg");
	this.shape_312.setTransform(155.3,359.175);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhFQAAgHADgFQAEgDAEAAQAFAAAEADQADAFAAAGIAABGQAAAHgDAEQgEADgFAAQgEAAgEgDgAgHguQgEgCAAgHQAAgFAEgDQADgDAEgBQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_313.setTransform(125.075,357.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgIA/QgGgEgCgHQgCgGAAgMIAAguIgDAAQgGAAgCgDQgDgCAAgEQAAgEADgCQADgDAFAAIADAAIAAgOIAAgKIACgGQABgCADgBQADgDADAAQAFAAADAEQACACABAEIAAAJIAAARIAJAAQAGAAACADQADACAAAEQAAAFgEACQgEACgHAAIgFAAIAAAsIABAJQAAADACACQACACAEAAIAGgBIAFAAQADAAADABQACADAAAEQAAAGgGADQgHACgMAAQgKAAgGgDg");
	this.shape_314.setTransform(119.675,357.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AAcAuIgIgKQgJAHgIAEQgIADgJAAQgKAAgHgEQgHgDgEgHQgEgGAAgIQAAgKAGgHQAGgGAMgCIALgDIAQgDIANgEQAAgKgEgEQgDgFgLAAQgIAAgEADQgFACgEAGIgFAHQgBABgEAAQgFAAgCgCQgDgDAAgEQgBgHAFgGQAFgGAJgEQAKgEANAAQARAAAIAEQAKAEAEAIQADAIAAAOIAAAOIAAANQABAHACAHIACAKQAAAEgEADQgDADgFAAQgEAAgDgEgAADAFIgOADQgDABgEADQgDADAAAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAGgDADgFQADgGAAgNIAAgDIgPAEg");
	this.shape_315.setTransform(110.6,359.175);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAiBEIgFgEIgFgFIgEgGIgxhMIAABMQAAAIgEADQgDAEgGAAQgFAAgEgEQgDgDAAgIIAAhkQAAgHABgEQACgEAEgCQAEgDAFAAIAGABIAEADIAEAGIAEAGIAzBNIAAhOQAAgHADgEQADgEAGAAQAGAAADAEQADAEAAAHIAABnQAAARgOAAIgHAAg");
	this.shape_316.setTransform(98.175,357.35);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgIAwIgEgGIgFgLIgXg5IgCgEIgCgEIAAgEIACgFIADgEIAHgCQAFAAADAEIAFAMIATA2IAVg5IAFgKQADgDAEAAQAFAAADADQAEAEAAAEIgBADIgBAFIgCAEIgYA5IgCAHIgDAGIgFAEQgDACgEAAQgFAAgDgCg");
	this.shape_317.setTransform(335.6,437.525);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgWAuQgKgEgEgGQgFgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAGADAHAAQAIAAAFgDQAEgDAAgFQAAgGgEgDQgGgDgKgDQgNgDgHgDQgJgDgEgFQgFgGAAgIQAAgIAEgGQAFgHAJgEQAIgEAMAAQAIAAAJACQAHACAFAEQAFADADAEQACAEAAAEQAAAEgDADQgDACgFAAQgDAAgDgCIgGgGIgGgGQgEgCgGAAQgHAAgEADQgEADAAAEQAAAEADACQADADAFABIAPAEQALADAHAEQAIADADAFQAEAFAAAHQAAAKgFAHQgFAIgJADQgKAEgNAAQgNAAgJgEg");
	this.shape_318.setTransform(306.6,437.525);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAiBBIgFgFIgGgKIgKgSQgGgKgFgFQgDgFgFgCQgFgCgHAAIgJAAIAAArQAAAIgEAEQgEAEgFAAQgHAAgDgEQgEgEAAgIIAAhlQAAgIAEgEQAEgEAIAAIArAAIAQABIALADQAGADAFAEQAEAFADAHQACAGAAAHQABAPgJAJQgIAIgRADQAHAEAGAHQAHAIAFAIIAIAPQADAHAAACQAAADgCADQgBACgDACIgHABQgEAAgEgCgAgbgKIAYAAQAIAAAHgBQAHgCADgEQAEgEgBgHQAAgGgDgEQgCgEgFgCQgFgCgNAAIgYAAg");
	this.shape_319.setTransform(284.4,435.825);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AghAlQgNgOAAgXQAAgKAEgJQADgKAGgGQAGgHAJgDQAJgEAKAAQAPAAAKAGQAKAGAFAKQAGAJAAAKQAAAJgGACQgFADgKAAIgvAAQAAAJAEAGQADAGAGAEQAFADAFAAIAJgBIAHgDIAGgFIAHgHQACgCAEAAQADAAADACQACACAAAEQAAAEgCAEIgIAJQgGAEgHACQgIADgLAAQgWAAgOgNgAgNgZQgGAGgCAMIAsAAQgBgMgGgHQgGgGgJAAQgJAAgFAHg");
	this.shape_320.setTransform(335.975,409.825);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AATA2IAAgqQAAgMgDgFQgEgHgJAAQgGABgFAEQgGADgCAFQgCAGAAAOIAAAhQAAAGgDAEQgEAEgFAAQgNAAAAgOIAAhqQAAgIAEgDQADgEAGAAQAFAAAEAEQADADAAAIIAAAlQAFgGAEgDQAEgEAFgBQAFgCAGAAQAKAAAHAFQAHADAEAIQADAEABAGIABAMIAAAvQAAAGgEAEQgDAEgGAAQgMAAAAgOg");
	this.shape_321.setTransform(324.975,408);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgsBAQgDgEAAgIIAAhpQAAgHADgEQADgDAGAAQAFAAADADQADAEAAAHIAAADQAHgJAIgEQAHgEAIAAQAMAAAKAGQAJAGAFALQAGAMAAAOQAAAMgDAJQgDAJgGAGQgGAHgHAEQgIADgJAAQgJAAgHgFQgHgEgHgIIAAAlQABAQgMAAQgIAAgBgEgAgPgoQgIAHAAAQQAAAOAIAIQAGAIAKAAQAFAAAGgEQAFgDADgHQAEgGgBgLQAAgJgDgHQgCgHgGgEQgFgEgGABQgKgBgGAJg");
	this.shape_322.setTransform(313.85,411.65);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgWAuQgKgEgFgGQgEgGAAgGQAAgEADgDQADgDAEAAQAEAAACACIAEAFQAEAHAFADQAFADAJAAQAHAAAEgDQAFgDAAgFQAAgGgFgDQgEgDgLgDQgNgDgHgDQgJgDgEgFQgFgGAAgIQAAgIAEgGQAFgHAJgEQAIgEAMAAQAJAAAHACQAIACAFAEQAFADADAEQADAEAAAEQAAAEgEADQgCACgGAAQgEAAgCgCIgGgGIgHgGQgEgCgFAAQgGAAgFADQgEADAAAEQAAAEADACQADADAGABIAOAEQALADAIAEQAGADAFAFQADAFAAAHQAAAKgFAHQgEAIgKADQgKAEgNAAQgNAAgJgEg");
	this.shape_323.setTransform(302.85,409.825);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgIBAQgDgEAAgHIAAhGQAAgGADgFQAEgDAEAAQAFAAAEADQADAFAAAGIAABGQAAAHgDAEQgEADgFABQgEgBgEgDgAgHguQgEgCAAgHQAAgEAEgEQADgEAEABQAFAAAEACQADADAAAGQAAAGgDADQgEADgFABQgEgBgDgDg");
	this.shape_324.setTransform(284.275,408.05);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AghAlQgNgOAAgXQAAgKAEgJQADgKAGgGQAGgHAJgDQAJgEAKAAQAPAAAKAGQAKAGAFAKQAGAJAAAKQAAAJgGACQgFADgKAAIgvAAQAAAJAEAGQADAGAGAEQAFADAFAAIAJgBIAHgDIAGgFIAHgHQACgCAEAAQADAAADACQACACAAAEQAAAEgCAEIgIAJQgGAEgHACQgIADgLAAQgWAAgOgNgAgNgZQgGAGgCAMIAsAAQgBgMgGgHQgGgGgJAAQgJAAgFAHg");
	this.shape_325.setTransform(685.375,363.175);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgNBBQgEgFAAgHIAAhAIgGAAQgGABgDgDQgDgCAAgFQAAgIAMgBIAGAAIAAgHQAAgLADgHQADgHAHgDQAGgDAMAAQAWAAAAAKQAAAEgDADQgCACgDAAIgFgBIgGAAQgGAAgCADQgCAFAAAHIAAAFIAGAAQAOAAAAAJQAAAGgEACQgEACgGgBIgGAAIAABAQAAAHgEAFQgDADgFAAQgFAAgDgDg");
	this.shape_326.setTransform(654.975,361.35);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgIBBQgDgFAAgHIAAhpQAAgHADgEQADgEAFAAQAGAAADAEQADAEAAAHIAABpQAAAIgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_327.setTransform(628.275,361.35);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AAqBDIgDgDIgEgGIgDgHIgGgRIg0AAIgGARQgEALgDADQgDADgGAAQgEAAgEgDQgEgEAAgFIABgGIADgIIAihUIADgIIAFgJQABgDAEgDQAEgCAFAAQAFAAAEACIAGAGIAEAHIAEAKIAiBUQAEAJAAAFQAAAFgDAEQgEADgGAAIgGgBgAgTAOIAmAAIgTg1g");
	this.shape_328.setTransform(619.2,361.35);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgoBCQgFgDAAgGQAAgEACgCQADgCAFgBIAEABIAEAAIAGgBIAFgEIAEgJIACgGIgehKQgDgHAAgDQAAgDACgDIAEgFIAGgBQAGAAACAEIAFAJIAUA7IATg3IAFgKQACgFACgBQACgBAEAAIAFABQADACABADQABACAAADIgBAEIgCAHIggBTQgEALgEAGQgDAGgGAEQgHADgLAAQgLAAgFgCg");
	this.shape_329.setTransform(520.225,428.25);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAcAuIgIgKQgIAHgJAEQgIADgKAAQgJAAgHgEQgHgDgFgHQgDgGAAgIQAAgKAGgHQAHgGALgCIAMgDIAPgDIANgEQAAgKgDgEQgEgFgLAAQgIAAgEADQgGACgDAGIgFAHQgBABgEAAQgFAAgCgCQgDgDgBgEQAAgHAFgGQAFgGAJgEQAKgEANAAQAQAAAKAEQAJAEAEAIQADAIABAOIAAAOIAAANQgBAHADAHIACAKQAAAEgDADQgEADgFAAQgDAAgEgEgAADAFIgNADQgEABgEADQgEADABAGQAAAFADAEQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgGgBgNIAAgDIgPAEg");
	this.shape_330.setTransform(501.9,426.425);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgIA/QgGgEgCgHQgCgGAAgMIAAguIgDAAQgGAAgCgDQgDgCAAgEQAAgEADgCQADgDAFAAIADAAIAAgOIAAgKIACgGQABgCADgBQADgCADAAQAFAAADADQACADABADIAAAKIAAAQIAJAAQAGAAACADQADACAAAEQAAAFgEACQgEACgHAAIgFAAIAAAsIABAJQAAADACACQACACAEAAIAGgBIAFgBQADAAADACQACADAAADQAAAGgGAEQgHACgMAAQgKABgGgEg");
	this.shape_331.setTransform(482.375,424.75);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AghAlQgNgOAAgXQAAgKAEgJQADgKAGgGQAGgHAJgDQAJgEAKAAQAPAAAKAGQAKAGAFAKQAGAJAAAKQAAAJgGACQgFADgKAAIgvAAQAAAJAEAGQADAGAGAEQAFADAFAAIAJgBIAHgDIAGgFIAHgHQACgCAEAAQADAAADACQACACAAAEQAAAEgCAEIgIAJQgGAEgHACQgIADgLAAQgWAAgOgNgAgNgZQgGAGgCAMIAsAAQgBgMgGgHQgGgGgJAAQgJAAgFAHg");
	this.shape_332.setTransform(506.925,398.725);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgNBBQgEgFAAgHIAAhAIgGAAQgGABgDgDQgDgCAAgFQAAgIAMgBIAGAAIAAgHQAAgLADgHQADgHAHgDQAGgDAMAAQAWAAAAAKQAAAEgDADQgCACgDAAIgFgBIgGAAQgGAAgCADQgCAFAAAHIAAAFIAGAAQAOAAAAAJQAAAGgEACQgEACgGgBIgGAAIAABAQAAAHgEAFQgDADgFAAQgFAAgDgDg");
	this.shape_333.setTransform(498.725,396.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgIBBQgDgFAAgHIAAhpQAAgHADgEQADgEAFAAQAGAAADAEQADAEAAAHIAABpQAAAIgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_334.setTransform(487.775,396.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AAcBBQgDgEAAgHIAAgCQgFAGgFADQgEAEgGACQgFABgHAAQgIAAgIgDQgIgEgFgHQgFgHgDgJQgDgKAAgLQAAgVALgOQALgNATABQAKAAAGADQAIAEAHAIIAAgkQAAgIADgEQADgEAFAAQAGAAADADQADAEAAAHIAABrQAAAHgDAEQgEADgFAAQgEAAgEgDgAgLgJQgFAFgDAGQgDAHgBAJQAAAKAEAHQADAHAFAEQAGADAFABQAGgBAGgDQAFgDADgIQAEgGAAgLQAAgKgEgGQgDgGgGgFQgFgDgGAAQgGAAgFADg");
	this.shape_335.setTransform(479.3,396.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgIBBQgDgFAAgHIAAhpQAAgHADgEQADgEAFAAQAGAAADAEQADAEAAAHIAABpQAAAIgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_336.setTransform(471.275,396.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AAfBBQgEgDgCgDIgEgOIgVhNIgUBNIgEANQgCAEgEADQgDADgGAAQgFAAgEgBQgDgCgCgEQgCgDgBgFIgCgJIgWhXIgCgMQAAgFADgEQAEgDAFAAQAIAAACAEQADAFACAJIARBMIAThHIAEgNQACgDAEgEQADgDAGAAQAHAAAEADQADAEACADIAEANIATBHIARhMIADgJQABgEADgDQACgCAGAAQAFAAADADQAEAEAAAFIgCAMIgWBXIgEAOQgBAEgEADQgDADgHAAQgGAAgDgDg");
	this.shape_337.setTransform(455.175,396.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:471.525,y:404.575}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:435.075,y:430.45}},{t:this.shape_253,p:{x:446.55,y:432.275}},{t:this.shape_252},{t:this.shape_251,p:{x:466.725,y:430.6}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248,p:{x:496.325,y:432.275}},{t:this.shape_247,p:{x:502.225}},{t:this.shape_246,p:{x:510.225,y:432.275}},{t:this.shape_245,p:{x:520.65,y:432.275}},{t:this.shape_244,p:{x:638.775}},{t:this.shape_243,p:{x:651.325,y:363.175}},{t:this.shape_242,p:{x:662.425,y:363.175}},{t:this.shape_241,p:{x:673.475,y:363.175}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238,p:{x:285.775,y:417.825}},{t:this.shape_237,p:{x:296.775,y:417.825}},{t:this.shape_236},{t:this.shape_235,p:{x:314.325,y:417.825}},{t:this.shape_234},{t:this.shape_233,p:{x:335.425,y:417.825}},{t:this.shape_232},{t:this.shape_231,p:{x:349.325,y:417.825}},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227,p:{x:118.125,y:344.4}},{t:this.shape_226,p:{x:123.525,y:344.3}},{t:this.shape_225,p:{x:131.625,y:346.075}},{t:this.shape_224,p:{x:142.775,y:346.075}},{t:this.shape_223,p:{x:153.75,y:346.075}},{t:this.shape_222,p:{x:161.675,y:344.25}},{t:this.shape_221,p:{x:107.525,y:372.075}},{t:this.shape_220,p:{x:118.8,y:373.775}},{t:this.shape_219,p:{x:128.875,y:373.775}},{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278,p:{x:467.025,y:398.625}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_241,p:{x:506.425,y:398.625}},{t:this.shape_274,p:{x:519.975,y:398.625}},{t:this.shape_273},{t:this.shape_272,p:{x:630.675,y:344.3}},{t:this.shape_271},{t:this.shape_227,p:{x:646.725,y:344.4}},{t:this.shape_243,p:{x:655.225,y:346.075}},{t:this.shape_233,p:{x:665.425,y:346.075}},{t:this.shape_226,p:{x:671.325,y:344.3}},{t:this.shape_270,p:{x:679.275,y:346.075}},{t:this.shape_269},{t:this.shape_222,p:{x:698.125,y:344.25}},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_231,p:{x:659.325,y:373.775}},{t:this.shape_237,p:{x:670.175,y:373.775}},{t:this.shape_251,p:{x:679.225,y:372.1}},{t:this.shape_245,p:{x:687.15,y:373.775}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_235,p:{x:315.375,y:410.725}},{t:this.shape_224,p:{x:326.475,y:410.725}},{t:this.shape_263,p:{x:337.45,y:410.725}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_225,p:{x:124.075,y:365.825}},{t:this.shape_219,p:{x:134.225,y:365.825}},{t:this.shape_220,p:{x:143.1,y:365.825}}]},1).to({state:[{t:this.shape_298},{t:this.shape_297,p:{x:442.025,y:412.9}},{t:this.shape_296},{t:this.shape_270,p:{x:460.925,y:414.725}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_235,p:{x:500.375,y:414.725}},{t:this.shape_237,p:{x:511.375,y:414.725}},{t:this.shape_293},{t:this.shape_221,p:{x:632.175,y:361.475}},{t:this.shape_292},{t:this.shape_227,p:{x:651.525,y:361.5}},{t:this.shape_291,p:{x:660.025}},{t:this.shape_243,p:{x:671.175,y:363.175}},{t:this.shape_238,p:{x:682.275,y:363.175}},{t:this.shape_290,p:{x:269.425,y:412.925}},{t:this.shape_289},{t:this.shape_219,p:{x:291.325,y:414.725}},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_224,p:{x:326.175,y:414.725}},{t:this.shape_285},{t:this.shape_284},{t:this.shape_223,p:{x:359.85,y:414.725}},{t:this.shape_283,p:{x:116.425,y:361.375}},{t:this.shape_225,p:{x:128.525,y:363.175}},{t:this.shape_282}]},1).to({state:[{t:this.shape_283,p:{x:435.875,y:402.775}},{t:this.shape_308,p:{x:447.925,y:404.575}},{t:this.shape_307},{t:this.shape_246,p:{x:470.375,y:404.575}},{t:this.shape_242,p:{x:481.375,y:404.575}},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_238,p:{x:529.675,y:404.575}},{t:this.shape_297,p:{x:448.625,y:430.45}},{t:this.shape_278,p:{x:456.725,y:432.275}},{t:this.shape_237,p:{x:467.725,y:432.275}},{t:this.shape_223,p:{x:478.65,y:432.275}},{t:this.shape_251,p:{x:487.675,y:430.6}},{t:this.shape_247,p:{x:493.125}},{t:this.shape_243,p:{x:501.225,y:432.275}},{t:this.shape_224,p:{x:512.325,y:432.275}},{t:this.shape_303},{t:this.shape_253,p:{x:304.8,y:409.825}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_241,p:{x:337.225,y:409.825}},{t:this.shape_244,p:{x:117.575}},{t:this.shape_225,p:{x:130.175,y:363.175}},{t:this.shape_300},{t:this.shape_231,p:{x:657.325,y:363.175}},{t:this.shape_299}]},1).to({state:[{t:this.shape_337},{t:this.shape_272,p:{x:466.275,y:396.95}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_226,p:{x:492.775,y:396.95}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_254,p:{x:439.775,y:424.6}},{t:this.shape_263,p:{x:451.3,y:426.425}},{t:this.shape_238,p:{x:462.325,y:426.425}},{t:this.shape_237,p:{x:473.325,y:426.425}},{t:this.shape_331},{t:this.shape_235,p:{x:490.875,y:426.425}},{t:this.shape_330},{t:this.shape_258,p:{x:511.975,y:426.425}},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_222,p:{x:633.275,y:361.35}},{t:this.shape_278,p:{x:645.975,y:363.175}},{t:this.shape_326},{t:this.shape_227,p:{x:665.825,y:361.5}},{t:this.shape_291,p:{x:674.375}},{t:this.shape_325},{t:this.shape_274,p:{x:698.925,y:363.175}},{t:this.shape_290,p:{x:275.425,y:408.025}},{t:this.shape_324},{t:this.shape_243,p:{x:292.375,y:409.825}},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_248,p:{x:346.025,y:409.825}},{t:this.shape_308,p:{x:354.925,y:409.825}},{t:this.shape_319},{t:this.shape_246,p:{x:296.225,y:437.525}},{t:this.shape_318},{t:this.shape_241,p:{x:317.075,y:437.525}},{t:this.shape_233,p:{x:327.175,y:437.525}},{t:this.shape_317},{t:this.shape_231,p:{x:346.025,y:437.525}},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_225,p:{x:133.175,y:359.175}},{t:this.shape_224,p:{x:144.325,y:359.175}},{t:this.shape_312},{t:this.shape_311},{t:this.shape_221,p:{x:114.025,y:385.175}},{t:this.shape_310},{t:this.shape_219,p:{x:135.375,y:386.875}},{t:this.shape_309}]},1).to({state:[]},1).wait(4));

	// btn
	this.e3 = new lib.Symbol4copy();
	this.e3.name = "e3";
	this.e3.setTransform(499.05,479.8,1.3351,1.3351,0,0,180);
	new cjs.ButtonHelper(this.e3, 0, 1, 2);

	this.e2 = new lib.Symbol4copy();
	this.e2.name = "e2";
	this.e2.setTransform(675.95,426.8,1.3351,1.3351,0,0,180);
	new cjs.ButtonHelper(this.e2, 0, 1, 2);

	this.b1 = new lib.Symbol4copy();
	this.b1.name = "b1";
	this.b1.setTransform(333.8,478.25,1.3351,1.3351,0,0,180);
	new cjs.ButtonHelper(this.b1, 0, 1, 2);

	this.e1 = new lib.Symbol4copy();
	this.e1.name = "e1";
	this.e1.setTransform(146.6,426.8,1.3351,1.3351,0,0,180);
	new cjs.ButtonHelper(this.e1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.e1,p:{x:146.6}},{t:this.b1,p:{x:333.8,y:478.25}},{t:this.e2,p:{x:675.95,y:426.8}},{t:this.e3,p:{x:499.05,y:479.8}}]},1).to({state:[{t:this.e1,p:{x:146.6}},{t:this.e2,p:{x:333.8,y:478.25}},{t:this.e3,p:{x:675.95,y:426.8}},{t:this.b1,p:{x:499.05,y:479.8}}]},1).to({state:[{t:this.b1,p:{x:146.6,y:426.8}},{t:this.e2,p:{x:333.8,y:478.25}},{t:this.e1,p:{x:675.95}},{t:this.e3,p:{x:499.05,y:479.8}}]},1).to({state:[{t:this.e1,p:{x:146.6}},{t:this.e2,p:{x:333.8,y:478.25}},{t:this.b1,p:{x:675.95,y:426.8}},{t:this.e3,p:{x:499.05,y:479.8}}]},1).to({state:[{t:this.e1,p:{x:146.6}},{t:this.b1,p:{x:333.8,y:472.25}},{t:this.e2,p:{x:675.95,y:426.8}},{t:this.e3,p:{x:499.05,y:479.8}}]},1).to({state:[]},1).wait(4));

	// Layer_5
	this.truemc = new lib.dolp();
	this.truemc.name = "truemc";
	this.truemc.setTransform(434.65,526.75,2.09,2.09,0,0,0,-74.6,5.6);

	this.soln = new lib.Symbol3copy4();
	this.soln.name = "soln";
	this.soln.setTransform(646.8,511.55,0.72,0.72,0,0,0,-284.9,41.2);

	this.btnSound = new lib.soundscopy2();
	this.btnSound.name = "btnSound";
	this.btnSound.setTransform(74.3,192.05,1,1,0,0,180,0.1,0.3);
	new cjs.ButtonHelper(this.btnSound, 0, 1, 2, false, new lib.soundscopy2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.truemc}]}).to({state:[{t:this.btnSound},{t:this.soln}]},1).to({state:[]},5).to({state:[]},1).wait(3));

	// Layer_2
	this.heart3 = new lib.Symbol6copy4();
	this.heart3.name = "heart3";
	this.heart3.setTransform(39.65,20.15,0.7558,0.7558,0,0,0,1.2,1.1);

	this.heart2 = new lib.Symbol6copy4();
	this.heart2.name = "heart2";
	this.heart2.setTransform(56.65,20.15,0.7558,0.7558,0,0,0,1.8,1.1);

	this.heart1 = new lib.Symbol6copy4();
	this.heart1.name = "heart1";
	this.heart1.setTransform(72.5,20.15,0.7558,0.7558,0,0,0,1.7,1.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#CCCCCC").s().p("ACdBDQgmgTgUgjIgDgGQgUgqAZgXQAXgTAfAVQAIAFAHgFQARgOAdAIQAdAOgJAkQgDALgFAIQgSAhgtAbIgEABIgEgBgAgBBDQgmgTgUgjIgDgGQgUgqAZgXQAXgTAgAVQAHAFAGgFQARgOAdAIQAdAOgJAkQgDALgFAIQgSAhgtAbIgEABIgDgBgAinBDQgmgTgUgjIgDgGQgVgqAagXQAXgTAfAVQAIAFAGgFQASgOAdAIQAdAOgKAkQgCALgGAIQgSAhgtAbIgDABIgEgBg");
	this.shape_338.setTransform(56.6,20.1,1,1,0,0,0,1.2,0.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#CDA942").s().p("AkUA7QgkAAgZgZQgagaAAgiIAAggIAPAAIAAAgQAAAdAUAVQAWAVAeAAIIpAAQAeAAAVgVQAWgWAAgcIAAggIAOAAIAAAgQAAAjgaAZQgZAZgkAAg");
	this.shape_339.setTransform(56.875,24.875);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFDA74").s().p("AkJAXIAAgOQAAgMAJgJQAJgKANAAIHUAAQANAAAKAKIAAAAQAJAJAAAMIAAAOg");
	this.shape_340.setTransform(56.9,13.65);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFD562").s().p("AlGAtIAAgcQAAgZASgSQASgSAaAAIISAAQAaAAASASQARASAAAZIAAAcgAkAgUQgJAJAAAMIAAAOIITAAIAAgOQAAgMgJgJIAAAAQgJgKgOAAInUAAQgNAAgJAKg");
	this.shape_341.setTransform(56.875,14.45);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FACE53").s().p("AkUBmQgfAAgVgVQgVgVABgeIAAgfIAAgcQgBgeAVgVQAVgVAfAAIIpAAQAdAAAWAVQAVAWABAdIAAAcIAAAfQgBAdgVAWQgWAVgdAAgAk1hJQgSASAAAZIAAAdIKOAAIAAgdQAAgZgSgSQgRgSgbAAIoSAAQgZAAgTASg");
	this.shape_342.setTransform(56.9,19.175);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFEBB4").s().p("AFeA5IAAgcQAAgdgWgVQgVgVgeAAIopAAQgeAAgWAVQgUAVAAAdIAAAcIgPAAIAAgcQAAgjAagZQAZgZAkAAIIpAAQAkAAAZAZQAaAZAAAjIAAAcg");
	this.shape_343.setTransform(56.875,13.275);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(0,0,0,0.086)").s().p("AkaCHQgrAAgegeQgegfAAgrIAAg+QAAgrAegeQAegeArAAII1AAQArAAAeAeIAAAAQAeAeAAArIAAA+QAAAsgeAeIgBABQgeAdgqAAgAlRhaQgaAZAAAkIAAAbIAAAfQAAAkAaAZQAZAaAkAAIIpAAQAkAAAZgaQAagZAAgkIAAgfIAAgbQAAgkgagZQgZgZgkAAIopAAQgkAAgZAZg");
	this.shape_344.setTransform(56.875,19.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.heart1},{t:this.heart2},{t:this.heart3}]},1).to({state:[]},5).to({state:[]},1).wait(3));

	// Layer_21
	this.instance_1 = new lib.Symbol1_1();
	this.instance_1.setTransform(392.2,263.05,1.69,1.69,0,0,0,0.6,0.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(0.1,1,1).p("AIWAAQAADcidCdQicCdjdAAQjcAAididQididAAjcQAAjdCdidQCdidDcAAQDdAACcCdQCdCdAADdgAJMAAQAADzitCsQisCtjzAAQjzAAisitQitisAAjzQAAjzCtitQCsirDzAAQDzAACsCrQCtCtAADzgAKCAAQAAEJi8C8Qi8C9kKAAQkJAAi8i9Qi8i8AAkJQAAkKC8i8QC8i7EJAAQEKAAC8C7QC8C8AAEKgAIBAAQAADTiXCWQiWCYjUAAQjTAAiXiYQiWiWAAjTQAAjUCWiXQCXiWDTAAQDUAACWCWQCXCXAADUg");
	this.shape_345.setTransform(390.3171,301.3808,1.6895,1.6895);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#2C3C62").s().p("AmfGfQisisAAjzQAAjzCsitQCsirDzAAQD0AACrCrQCuCtAADzQAADziuCsQirCtj0AAQjzAAisitgAl5l6QidCdABDdQgBDdCdCcQCdCdDcAAQDdAACcidQCeicAAjdQAAjdieidQicicjdAAQjcAAidCcg");
	this.shape_346.setTransform(390.2749,301.3808,1.6895,1.6895);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#3C4D71").s().p("AnFHFQi8i8AAkJQAAkKC8i8QC8i7EJAAQEKAAC8C7QC8C8AAEKQAAEJi8C8Qi8C9kKAAQkJAAi8i9gAmfmgQitCtAADzQAADzCtCsQCsCtDzAAQDzAACsitQCtisAAjzQAAjzititQisirjzAAQjzAAisCrg");
	this.shape_347.setTransform(390.3171,301.3808,1.6895,1.6895);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#12192A").s().p("Al5F6QididABjdQgBjcCdidQCdidDcAAQDdAACcCdQCeCdAADcQAADdieCdQicCdjdAAQjcAAididgAlqlqQiWCXAADTQAADUCWCWQCXCXDTAAQDUAACXiXQCWiWAAjUQAAjTiWiXQiXiWjUAAQjTAAiXCWg");
	this.shape_348.setTransform(390.2749,301.2541,1.6895,1.6895);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(0.1,1,1).p("AgzA7IhphQQA6AOBAgEgABUAsIBJhmQgzAUgwAMg");
	this.shape_349.setTransform(397.4008,361.8879,1.69,1.69);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#7E96AF").s().p("AicgVQA6AOBAgEIgRBGgAA6gaQAwgMAzgUIhJBmg");
	this.shape_350.setTransform(397.4008,361.8879,1.69,1.69);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(0.1,1,1).p("ADfEEICvheIBLAkQglBXhKBJQh+B+inAVQgLACgMABIAaglIABAAIAzhKIgehSQg4gSgeAjIgSBQIj/jDIiKBgQhtiIAAi1QAAjTCWiXQCXiWDUAAQDTAACWCWQCXCXAADTQAABtgoBdADfEEIBuBvIkICKAAuIAQgWABgXAAQhqAAhbgmQgSgHgSgJQhGgkg8g9QgWgWgTgXABJHbIhTg7AkJDdIhVCOIB2ASIAABOAjEHbIEMAAAB8GRIBjiN");
	this.shape_351.setTransform(390.5986,301.5976,1.69,1.69);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#4A5867").s().p("AiGgSIENAAIgaAjQgXACgXAAQhpAAhcglg");
	this.shape_352.setTransform(380.0361,385.083,1.69,1.69);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#1F4F74").s().p("AhDAWIAThPQAegjA3ASIAfBRIg0BKg");
	this.shape_353.setTransform(400.147,368.1736,1.69,1.69);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#384480").s().p("AgsAWQgWgWgSgWICJhgIhVCNIB2ASIAABOQhHgkg7g9g");
	this.shape_354.setTransform(336.857,359.0149,1.69,1.69);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#3B4888").s().p("ABRBtIAAAAIA0hKIBjiNIBuBvIkICKIgXACgABRBtIkMAAQgSgIgSgJIAAhNIh2gSIBViNID+DCIBTA7g");
	this.shape_355.setTransform(389.1198,363.4934,1.69,1.69);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#353F7A").s().p("AA+AhIhthuICuhdIBLAjQglBXhKBIQh8B/ioAVg");
	this.shape_356.setTransform(436.3972,358.6347,1.69,1.69);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(0.1,1,1).p("AG0goItnBR");
	this.shape_357.setTransform(393.05,288.5,1,1,0,0,0,-11.6,0.6);

	this.answermc = new lib.sprite330();
	this.answermc.name = "answermc";
	this.answermc.setTransform(570,549.4,1.2999,1.2999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.instance_1}]}).to({state:[{t:this.answermc}]},1).to({state:[]},5).wait(4));

	// Layer_6
	this.theButton = new lib.Symbol13_1();
	this.theButton.name = "theButton";
	this.theButton.setTransform(400,493.45,1.33,1.33);
	new cjs.ButtonHelper(this.theButton, 0, 1, 2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ACDAAIkFAA");
	this.shape_358.setTransform(758.125,150);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ACDAAIkFAA");
	this.shape_359.setTransform(758.125,189.65);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ACDAAIkFAA");
	this.shape_360.setTransform(758.125,229.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ACDAAIkFAA");
	this.shape_361.setTransform(758.125,268.95);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ACDAAIkFAA");
	this.shape_362.setTransform(758.125,308.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("Ah9OpIAA9RAB+OpIAA9R");
	this.shape_363.setTransform(758.225,230.675);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#444571").ss(0.5,1,1).p("AC5CCIg7lpQgeg5hJggQhzgkh/AkAmICCIBElpQAag7BPgeIgJAAAk/CqQAkAIAeATQAAABACABIEoAAAiJDtIhIAAQgTgXgXgPAmICCQgFAXAUALQAfABAbAFIC2gCQATAAATAAQAEAAADAAIDMACQgkAIgeATQAAABgBABAhPDtIBSAAQARgXAZgPAiJDtIA6AAIAAAwIHZAAIgDA2IoQAAgAC5CCIAAAAQAFAXgUALQgeABgcAFAC5CCIpBAA");
	this.shape_364.setTransform(768.5,356.475);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#444571").ss(0.1,1,1).p("ABWAOIBDBQIgcAAIj7AAIgaAAIBEhQQgCgKAAgJQAAglAagaQAZgZAkAAQAkAAAZAZQAaAaAAAlQAAAJgCAKgAhUAOIABgBICpAAIAAAB");
	this.shape_365.setTransform(758.325,127.575);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#8285D5").s().p("AiJFTIAAhmIA7AAIgBAwIHZAAIgDA2gAhODtIg7AAIhIAAQgSgXgYgPIgCgCQgegTgkgIIC2gCIAmAAIAHAAIDMACQgkAIgdATIgDACIknAAIEnAAQgXAPgSAXgABwCqgAhcCoIgHAAIgmAAIi2ACQgbgFgfgBQgUgLAFgXIBElpQAag7BPgeQB/gkBzAkQBJAgAeA5IA7FpIAAAAQAFAXgUALQgeABgcAFgAC5CCIpBAAg");
	this.shape_366.setTransform(768.5,356.475);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#AFB0D5").s().p("Ah1QHIgJAAIAA9RIgaAAIBEhQQgCgKAAgKQAAglAagaQAZgZAkAAQAkAAAZAZQAaAaAAAlQAAAKgCAKIBDBQIgcAAIj7AAID7AAIAAdRQh0gkh+AkgABWubIAAABIAAgBIipAAIgBABIABgBg");
	this.shape_367.setTransform(758.325,221.25);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#DDFFFF","#FFFFFF"],[0,0.733],23.8,46.1,23.8,-46.5).s().p("AsIG/QgLgDgHgIQgHgJgCgKQgCgLAEgKIgBAAIAAtHQAAgRAMgLQAMgMAQAAIX3AAQAQAAAMAMQAMALAAARIAANhQAAAQgLALQgMAMgQABQgVAAgVgBQh9gKh8hhQinCGioiLQjZBfjahcQhjCEivAAQhdAAhyglg");
	this.shape_368.setTransform(326.3667,87.0472);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#DDFFFF","#FFFFFF"],[0,0.733],-170.8,47,-170.8,-45.5).s().p("AyvHUQgKgGgGgJQgFgJAAgLIAAthQAAgQAMgMQALgMARAAMAivAAAQAJAAAJAEQCjBVgDCEQACB2iMCaQgHDiiDBFQh4BIjmhNQg9BIhBALQg/AOhCgpQi6DHlijLQiLB8jCh9Qi9CIi9iGQiGBqiGADQgLAAgJgFg");
	this.shape_369.setTransform(520.9537,85.1653,1,1.0002);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#DDFFFF","#FFFFFF"],[0,0.733],196.3,47.7,196.3,-44.9).s().p("AlYFmQiZAKhNhxQi2AOhchnQhghmACjiQg8i6B8htQALgKAPAAIbvAAQAQAAAMAMQAMALAAARIAANHQAAAHgCAGQgCAGgEAFQgIALgNAEQgNADgMgEQgzgUg4gaQhhA9g+gPQhCgIgfhMQhyAejoA2QhSAShRAAQjCAAi7hug");
	this.shape_370.setTransform(350.3,87.3,1,1,0,0,0,196.5,1.6);

	this.replay = new lib.Symbol1();
	this.replay.name = "replay";
	this.replay.setTransform(400,510,0.35,0.35,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.replay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.theButton}]}).to({state:[{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.replay}]},5).wait(4));

	// bg
	this.box = new lib.Symbol13();
	this.box.name = "box";
	this.box.setTransform(401.95,366.15);

	this.percents = new lib.Symbol2_1();
	this.percents.name = "percents";
	this.percents.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.percents},{t:this.box}]}).wait(10));

	// bg
	this.instance_2 = new lib.sea();
	this.instance_2.setTransform(397.9,459.1,1.22,1.22,0,0,0,-5.5,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(130.6,247.9,1121.6000000000001,386.70000000000005);
// library properties:
lib.properties = {
	id: '08D90F78585F4A0CA7F4862F7DB7CDA8',
	width: 800,
	height: 600,
	fps: 23,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/btnnext.mp3?1647644127346", id:"btnnext"},
		{src:"sounds/failSound.mp3?1647644127346", id:"failSound"},
		{src:"sounds/_false.mp3?1647644127346", id:"_false"},
		{src:"sounds/levelWin.mp3?1647644127346", id:"levelWin"},
		{src:"sounds/soundoverbtncar.mp3?1647644127346", id:"soundoverbtncar"},
		{src:"sounds/_true.mp3?1647644127346", id:"_true"},
		{src:"sounds/win_fish.mp3?1647644127346", id:"win_fish"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['08D90F78585F4A0CA7F4862F7DB7CDA8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;