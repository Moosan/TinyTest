/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project TinyTest
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.Physics2D);
ut.main = function() {
    game.AkeomeBehaviorFilter._Components = [ut.Entity, 
        ut.Core2D.TransformNode, game.Akeome
    ];
    game.AkeomeBehaviorFilter.prototype.Read = function(world, entity) {
        this.node = world.getComponentData(entity, ut.Core2D.TransformNode);
        this.localRottion = world.hasComponent(entity, ut.Core2D.TransformLocalRotation) ? world.getComponentData(entity, ut.Core2D.TransformLocalRotation) : undefined;
        this.akeome = world.getComponentData(entity, game.Akeome);
    };
    game.AkeomeBehaviorFilter.prototype.Reset = function() {
        this.node = undefined;
        this.localRottion = undefined;
        this.akeome = undefined;
    };
    game.AkeomeBehaviorFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.node);
        if (this.localRottion) { world.setOrAddComponentData(entity, this.localRottion); }
        world.setComponentData(entity, this.akeome);
    };
    game.AkeomeBehaviorFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, node, akeome) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.PlayerBehaviorFilter._Components = [ut.Entity, 
        game.Move
    ];
    game.PlayerBehaviorFilter.prototype.Read = function(world, entity) {
        this.entity = entity;
        this.move = world.getComponentData(entity, game.Move);
    };
    game.PlayerBehaviorFilter.prototype.Reset = function() {
        this.entity = undefined;
        this.move = undefined;
    };
    game.PlayerBehaviorFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.move);
    };
    game.PlayerBehaviorFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, move) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.AkeomeBehavior.Instance = new game.AkeomeBehavior();
    game.AkeomeBehavior._StateType = game.AkeomeBehavior_State;
    game.AkeomeBehavior.prototype._GetFilter = function() { if (!this.data) { this.data = new game.AkeomeBehaviorFilter(); } return this.data; }
    game.PlayerBehavior.Instance = new game.PlayerBehavior();
    game.PlayerBehavior._StateType = game.PlayerBehavior_State;
    game.PlayerBehavior.prototype._GetFilter = function() { if (!this.data) { this.data = new game.PlayerBehaviorFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.AkeomeBehavior_OnEntityUpdateJS.update = game.AkeomeBehavior.Instance._MakeOnEntityUpdate();
    game.PlayerBehavior_OnEntityUpdateJS.update = game.PlayerBehavior.Instance._MakeOnEntityUpdate();
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.AkeomeBehavior_OnEntityUpdateJS);
    scheduler.schedule(game.PlayerBehavior_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 360;
    c0.height = 540;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c1.gravity = s0;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.MainGroup");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
